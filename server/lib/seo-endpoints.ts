// Server-side SEO endpoints for sitemap, robots.txt, and meta data
import { Express, Request, Response } from 'express';

// Enhanced sitemap generation with dynamic content
export interface SitemapEntry {
  url: string;
  lastModified?: string;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export class SEOEndpoints {
  private static baseUrl = process.env.VITE_SITE_URL || 'https://gamerstag.com';

  // Generate comprehensive sitemap.xml
  static generateSitemap(): string {
    const staticPages: SitemapEntry[] = [
      {
        url: this.baseUrl,
        changeFrequency: 'weekly',
        priority: 1.0,
        lastModified: new Date().toISOString()
      },
      {
        url: `${this.baseUrl}/about`,
        changeFrequency: 'monthly',
        priority: 0.8,
        lastModified: new Date().toISOString()
      },
      {
        url: `${this.baseUrl}/team`,
        changeFrequency: 'weekly',
        priority: 0.9,
        lastModified: new Date().toISOString()
      },
      {
        url: `${this.baseUrl}/features`,
        changeFrequency: 'monthly',
        priority: 0.8,
        lastModified: new Date().toISOString()
      },
      {
        url: `${this.baseUrl}/contact`,
        changeFrequency: 'monthly',
        priority: 0.6,
        lastModified: new Date().toISOString()
      },
      {
        url: `${this.baseUrl}/testimonials`,
        changeFrequency: 'weekly',
        priority: 0.7,
        lastModified: new Date().toISOString()
      },
      {
        url: `${this.baseUrl}/incubators`,
        changeFrequency: 'monthly',
        priority: 0.6,
        lastModified: new Date().toISOString()
      },
      {
        url: `${this.baseUrl}/mentors`,
        changeFrequency: 'weekly',
        priority: 0.7,
        lastModified: new Date().toISOString()
      },
      {
        url: `${this.baseUrl}/news`,
        changeFrequency: 'daily',
        priority: 0.8,
        lastModified: new Date().toISOString()
      },
      {
        url: `${this.baseUrl}/tech-stack`,
        changeFrequency: 'monthly',
        priority: 0.6,
        lastModified: new Date().toISOString()
      },
      {
        url: `${this.baseUrl}/cms-demo`,
        changeFrequency: 'weekly',
        priority: 0.5,
        lastModified: new Date().toISOString()
      }
    ];

    // Add team member pages
    const teamPages = this.generateTeamMemberPages();
    
    // Add feature pages
    const featurePages = this.generateFeaturePages();

    const allPages = [...staticPages, ...teamPages, ...featurePages];

    const sitemapEntries = allPages.map(page => `
  <url>
    <loc>${page.url}</loc>
    ${page.lastModified ? `<lastmod>${page.lastModified}</lastmod>` : ''}
    ${page.changeFrequency ? `<changefreq>${page.changeFrequency}</changefreq>` : ''}
    ${page.priority ? `<priority>${page.priority}</priority>` : ''}
  </url>`).join('');

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</urlset>`;
  }

  // Generate team member sitemap entries
  private static generateTeamMemberPages(): SitemapEntry[] {
    // Core team members with SEO-optimized URLs
    const coreMembers = [
      { slug: 'joshua-j-kanatt', name: 'Joshua J Kanatt' },
      { slug: 'hemanth-joseph', name: 'Hemanth Joseph' },
      { slug: 'tintu-tomy', name: 'Tintu Tomy' },
      { slug: 'fathima-nihma', name: 'Fathima Nihma' },
      { slug: 'mubashir-mp', name: 'Mubashir MP' },
      { slug: 'sradha-sasidharan', name: 'Sradha Sasidharan' }
    ];

    return coreMembers.map(member => ({
      url: `${this.baseUrl}/team/${member.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      lastModified: new Date().toISOString()
    }));
  }

  // Generate feature pages sitemap entries
  private static generateFeaturePages(): SitemapEntry[] {
    const features = [
      'pro-gaming-profile',
      'gt-connect', 
      'gt-chats',
      'gt-jobs',
      'gt-news',
      'gt-card',
      'gt-ui',
      'gt-tournaments',
      'gt-leaderboards'
    ];

    return features.map(feature => ({
      url: `${this.baseUrl}/features/${feature}`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
      lastModified: new Date().toISOString()
    }));
  }

  // Generate robots.txt
  static generateRobotsTxt(): string {
    return `User-agent: *
Allow: /

# Enhanced crawl directives for gaming content
Allow: /team/
Allow: /features/
Allow: /news/
Allow: /testimonials/
Allow: /mentors/

# Sitemap location
Sitemap: ${this.baseUrl}/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Block unnecessary paths
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Disallow: /private/
Disallow: /dashboard/
Disallow: /cms-demo/
Disallow: /buttons/

# Block query parameters that don't affect content
Disallow: /*?utm_*
Disallow: /*?ref=*
Disallow: /*?source=*

# Allow Google to crawl important dynamic content
User-agent: Googlebot
Allow: /team/
Allow: /features/
Allow: /news/
Crawl-delay: 0.5

# Block other search engines from resource-intensive pages
User-agent: BingBot
Disallow: /gallery/
Crawl-delay: 2

User-agent: YandexBot
Disallow: /gallery/
Crawl-delay: 3`;
  }

  // Generate page-specific meta data
  static generatePageMeta(pagePath: string): any {
    const metaConfigs: Record<string, any> = {
      '/': {
        title: 'GAMERS TAG - The Ultimate Gaming Ecosystem Super App',
        description: 'Join the world\'s most innovative gaming super platform. Connect with gamers, build your legacy, compete in esports, and experience next-generation gaming technology.',
        keywords: 'gaming platform, esports, gaming community, gaming app, gamer profiles, gaming tournaments, gaming technology, multiplayer gaming, gaming ecosystem, gaming super app',
        ogImage: `${this.baseUrl}/images/og-home.jpg`,
        canonical: this.baseUrl
      },
      '/about': {
        title: 'About GAMERS TAG - Revolutionary Gaming Platform',
        description: 'Discover GAMERS TAG\'s vision to revolutionize gaming through innovative technology, community building, and professional esports development.',
        keywords: 'gaming company, gaming innovation, esports development, gaming technology, gaming vision, gaming mission',
        ogImage: `${this.baseUrl}/images/og-about.jpg`,
        canonical: `${this.baseUrl}/about`
      },
      '/team': {
        title: 'Our Team - GAMERS TAG Leadership & Innovation',
        description: 'Meet the visionary leaders and innovative team members driving GAMERS TAG\'s success in revolutionizing the gaming industry.',
        keywords: 'gaming team, gaming leadership, gaming professionals, esports team, tech team, gaming experts',
        ogImage: `${this.baseUrl}/images/og-team.jpg`,
        canonical: `${this.baseUrl}/team`
      },
      '/features': {
        title: 'Gaming Features - Pro Profiles, Tournaments & More',
        description: 'Explore GAMERS TAG\'s powerful features: Pro Gaming Profiles, Tournament System, Team Management, Social Gaming, and cutting-edge gaming technology.',
        keywords: 'gaming features, pro gaming profiles, gaming tournaments, team management, social gaming, gaming tools',
        ogImage: `${this.baseUrl}/images/og-features.jpg`,
        canonical: `${this.baseUrl}/features`
      },
      '/contact': {
        title: 'Contact GAMERS TAG - Get in Touch',
        description: 'Contact GAMERS TAG for partnerships, support, or inquiries. Connect with our team to learn more about our gaming platform.',
        keywords: 'contact gamers tag, gaming support, partnerships, gaming inquiries',
        ogImage: `${this.baseUrl}/images/og-contact.jpg`,
        canonical: `${this.baseUrl}/contact`
      }
    };

    return metaConfigs[pagePath] || {
      title: 'GAMERS TAG - Gaming Platform',
      description: 'Experience the future of gaming with GAMERS TAG.',
      keywords: 'gaming, esports, gaming platform',
      ogImage: `${this.baseUrl}/images/og-default.jpg`,
      canonical: `${this.baseUrl}${pagePath}`
    };
  }

  // Setup SEO routes
  static setupRoutes(app: Express): void {
    // Sitemap.xml endpoint
    app.get('/sitemap.xml', (req: Request, res: Response) => {
      try {
        const sitemap = this.generateSitemap();
        res.set('Content-Type', 'application/xml');
        res.send(sitemap);
      } catch (error) {
        console.error('Error generating sitemap:', error);
        res.status(500).send('Error generating sitemap');
      }
    });

    // Robots.txt endpoint
    app.get('/robots.txt', (req: Request, res: Response) => {
      try {
        const robotsTxt = this.generateRobotsTxt();
        res.set('Content-Type', 'text/plain');
        res.send(robotsTxt);
      } catch (error) {
        console.error('Error generating robots.txt:', error);
        res.status(500).send('Error generating robots.txt');
      }
    });

    // Meta data API endpoint
    app.get('/api/meta/:path(*)', (req: Request, res: Response) => {
      try {
        const pagePath = `/${req.params.path || ''}`;
        const metaData = this.generatePageMeta(pagePath);
        res.json(metaData);
      } catch (error) {
        console.error('Error generating meta data:', error);
        res.status(500).json({ error: 'Error generating meta data' });
      }
    });

    // SEO validation endpoint
    app.get('/api/seo/validate/:path(*)', (req: Request, res: Response) => {
      try {
        const pagePath = `/${req.params.path || ''}`;
        const metaData = this.generatePageMeta(pagePath);
        
        const validation = {
          hasTitle: !!metaData.title,
          titleLength: metaData.title?.length || 0,
          hasDescription: !!metaData.description,
          descriptionLength: metaData.description?.length || 0,
          hasKeywords: !!metaData.keywords,
          hasCanonical: !!metaData.canonical,
          hasOgImage: !!metaData.ogImage,
          isValid: true
        };

        // SEO validation rules
        validation.isValid = (
          validation.hasTitle &&
          validation.titleLength >= 30 &&
          validation.titleLength <= 60 &&
          validation.hasDescription &&
          validation.descriptionLength >= 120 &&
          validation.descriptionLength <= 160 &&
          validation.hasKeywords &&
          validation.hasCanonical
        );

        res.json({
          path: pagePath,
          meta: metaData,
          validation
        });
      } catch (error) {
        console.error('Error validating SEO:', error);
        res.status(500).json({ error: 'Error validating SEO' });
      }
    });

    // Performance metrics endpoint
    app.post('/api/analytics/performance', (req: Request, res: Response) => {
      try {
        const { metrics, page } = req.body;
        
        // Store performance metrics (in production, save to database)
        console.log('Performance metrics received:', {
          page,
          metrics,
          timestamp: new Date().toISOString()
        });

        res.json({ status: 'success', message: 'Metrics recorded' });
      } catch (error) {
        console.error('Error recording performance metrics:', error);
        res.status(500).json({ error: 'Error recording metrics' });
      }
    });
  }
}