import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertTestimonialSchema, insertFeatureGallerySchema, insertNewsSchema } from "@shared/schema";
import { generateSitemap, generateRobotsTxt } from "./lib/seo-utils";
import { SEOEndpoints } from "./lib/seo-endpoints";
import { userEventManager } from "./lib/user-events";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Testimonials routes
  app.get("/api/testimonials", async (req, res) => {
    try {
      const testimonials = await storage.getTestimonials();
      res.json(testimonials);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch testimonials" });
    }
  });

  app.post("/api/testimonials", async (req, res) => {
    try {
      const validatedData = insertTestimonialSchema.parse(req.body);
      const testimonial = await storage.createTestimonial(validatedData);
      res.status(201).json(testimonial);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: error.errors });
      } else {
        res.status(500).json({ error: "Failed to create testimonial" });
      }
    }
  });

  // Feature-specific testimonials
  app.get("/api/testimonials/feature/:feature", async (req, res) => {
    try {
      const { feature } = req.params;
      const testimonials = await storage.getTestimonialsByFeature(feature);
      res.json(testimonials);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch feature testimonials" });
    }
  });

  // Gallery routes
  app.get("/api/gallery", async (req, res) => {
    try {
      // Return empty array for now - will be populated via Sanity CMS
      res.json([]);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch gallery items" });
    }
  });

  app.get("/api/gallery/:feature", async (req, res) => {
    try {
      const { feature } = req.params;
      const galleryItems = await storage.getFeatureGallery(feature);
      res.json(galleryItems);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch feature gallery" });
    }
  });

  app.post("/api/gallery", async (req, res) => {
    try {
      const validatedData = insertFeatureGallerySchema.parse(req.body);
      const galleryItem = await storage.createFeatureGallery(validatedData);
      res.status(201).json(galleryItem);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: error.errors });
      } else {
        res.status(500).json({ error: "Failed to create gallery item" });
      }
    }
  });

  // Journey routes
  app.get("/api/journey", async (req, res) => {
    try {
      // Return empty array for now - will integrate with Sanity CMS later
      res.json([]);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch journey data" });
    }
  });

  // News routes
  app.get("/api/news", async (req, res) => {
    try {
      const news = await storage.getNews();
      res.json(news);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch news" });
    }
  });

  app.get("/api/news/:slug", async (req, res) => {
    try {
      const { slug } = req.params;
      const article = await storage.getNewsBySlug(slug);
      if (!article) {
        return res.status(404).json({ error: "Article not found" });
      }
      res.json(article);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch news article" });
    }
  });

  app.get("/api/news/related/:category", async (req, res) => {
    try {
      const { category } = req.params;
      const relatedNews = await storage.getNewsByCategory(category);
      res.json(relatedNews);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch related news" });
    }
  });

  app.post("/api/news", async (req, res) => {
    try {
      const validatedData = insertNewsSchema.parse(req.body);
      const article = await storage.createNews(validatedData);
      res.status(201).json(article);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: error.errors });
      } else {
        res.status(500).json({ error: "Failed to create news article" });
      }
    }
  });

  // SEO Routes for optimal search engine optimization
  app.get('/sitemap.xml', async (req, res) => {
    try {
      const sitemap = await generateSitemap();
      res.setHeader('Content-Type', 'application/xml');
      res.setHeader('Cache-Control', 'public, max-age=86400'); // 24 hours cache
      res.status(200).send(sitemap);
    } catch (error) {
      console.error('Error generating sitemap:', error);
      res.status(500).send('Error generating sitemap');
    }
  });

  app.get('/robots.txt', (req, res) => {
    try {
      const robotsTxt = generateRobotsTxt();
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Cache-Control', 'public, max-age=86400'); // 24 hours cache
      res.status(200).send(robotsTxt);
    } catch (error) {
      console.error('Error generating robots.txt:', error);
      res.status(500).send('Error generating robots.txt');
    }
  });

  // News sitemap for better Google News indexing
  app.get('/news-sitemap.xml', async (req, res) => {
    try {
      const news = await storage.getNews();
      const newsSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${news.map(article => `  <url>
    <loc>https://gamerstag.com/news/${article.slug}</loc>
    <news:news>
      <news:publication>
        <news:name>GAMERS TAG</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${article.publishedAt.toISOString()}</news:publication_date>
      <news:title>${article.title}</news:title>
      <news:keywords>${article.tags?.join(', ') || ''}</news:keywords>
    </news:news>
    <lastmod>${article.publishedAt.toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>`;
      
      res.setHeader('Content-Type', 'application/xml');
      res.setHeader('Cache-Control', 'public, max-age=3600'); // 1 hour cache
      res.status(200).send(newsSitemap);
    } catch (error) {
      console.error('Error generating news sitemap:', error);
      res.status(500).send('Error generating news sitemap');
    }
  });

  // SEO-friendly URL redirects for better rankings
  app.get('/gaming-profile', (req, res) => {
    res.redirect(301, '/features/pro-gaming-profile');
  });

  app.get('/esports-jobs', (req, res) => {
    res.redirect(301, '/features/gt-jobs');
  });

  app.get('/gaming-community', (req, res) => {
    res.redirect(301, '/features/gt-connect');
  });

  app.get('/gaming-news', (req, res) => {
    res.redirect(301, '/news');
  });

  app.get('/founder-ceo', (req, res) => {
    res.redirect(301, '/team/joshua-kanatt');
  });

  // Performance monitoring endpoint
  app.get('/api/performance/metrics', (req, res) => {
    try {
      const metrics = {
        server: {
          uptime: process.uptime(),
          memory: process.memoryUsage(),
          version: process.version
        },
        timestamp: new Date().toISOString()
      };
      res.json(metrics);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch performance metrics' });
    }
  });

  // Setup enhanced SEO endpoints
  SEOEndpoints.setupRoutes(app);

  // User notification system endpoints for HUD sidebar
  // Store active SSE connections
  const sseConnections = new Set<any>();

  // SSE endpoint for real-time user login notifications
  app.get('/api/events/user-logins', (req, res) => {
    // Set SSE headers
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Cache-Control'
    });

    // Add connection to active connections
    sseConnections.add(res);

    // Send initial connection message
    res.write('data: {"type":"connected","message":"User login events connected"}\n\n');

    // Register user login handler
    const unsubscribe = userEventManager.onUserLogin((user) => {
      const eventData = JSON.stringify({
        type: 'user_login',
        user: {
          id: user.id,
          name: user.name,
          gtId: user.gtId,
          avatar: user.avatar,
          joinedAt: user.joinedAt.toISOString()
        }
      });
      
      res.write(`event: user_login\n`);
      res.write(`data: ${eventData}\n\n`);
    });

    // Handle client disconnect
    req.on('close', () => {
      sseConnections.delete(res);
      unsubscribe();
    });

    req.on('end', () => {
      sseConnections.delete(res);
      unsubscribe();
    });
  });

  // REST endpoint for recent user logins
  app.get('/api/users/recent', (req, res) => {
    try {
      const since = req.query.since ? new Date(req.query.since as string) : undefined;
      const recentUsers = userEventManager.getRecentUsers(since);
      
      res.json(recentUsers.map(user => ({
        id: user.id,
        name: user.name,
        gtId: user.gtId,
        avatar: user.avatar,
        joinedAt: user.joinedAt.toISOString()
      })));
    } catch (error) {
      console.error('Error fetching recent users:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  // Endpoint to manually trigger user login for testing HUD notifications
  app.post('/api/users/simulate-login', (req, res) => {
    try {
      const { name, gtId, avatar } = req.body;
      
      const userLogin = {
        id: crypto.randomUUID(),
        name: name || 'Test User',
        gtId: gtId || 'GT' + Math.random().toString().slice(2, 8),
        avatar: avatar,
        joinedAt: new Date(),
        ipAddress: req.ip,
        userAgent: req.get('User-Agent')
      };

      userEventManager.emitUserLogin(userLogin);
      
      res.json({ 
        success: true, 
        message: 'User login simulated - HUD notification triggered',
        user: userLogin 
      });
    } catch (error) {
      console.error('Error simulating user login:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  // Endpoint to get current SSE connection count
  app.get('/api/stats/connections', (req, res) => {
    res.json({
      activeConnections: sseConnections.size,
      timestamp: new Date().toISOString()
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
