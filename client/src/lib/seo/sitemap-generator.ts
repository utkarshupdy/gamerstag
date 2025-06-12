// Dynamic Sitemap Generation for SEO
export interface SitemapEntry {
  url: string;
  lastmod: string;
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
  priority: number;
}

export class SitemapGenerator {
  private baseUrl = 'https://gamerstag.com';
  
  generateSitemap(): string {
    const entries: SitemapEntry[] = [
      // Core pages with high priority
      { url: '/', lastmod: new Date().toISOString(), changefreq: 'daily', priority: 1.0 },
      { url: '/about', lastmod: '2024-12-01', changefreq: 'monthly', priority: 0.9 },
      { url: '/features', lastmod: '2024-12-01', changefreq: 'weekly', priority: 0.9 },
      { url: '/team', lastmod: '2024-12-01', changefreq: 'monthly', priority: 0.8 },
      { url: '/contact', lastmod: '2024-12-01', changefreq: 'monthly', priority: 0.8 },
      
      // Feature pages
      { url: '/features/pro-gaming-profile', lastmod: '2024-12-01', changefreq: 'weekly', priority: 0.8 },
      { url: '/features/next-gen-onboarding', lastmod: '2024-12-01', changefreq: 'weekly', priority: 0.8 },
      { url: '/features/gaccounts', lastmod: '2024-12-01', changefreq: 'weekly', priority: 0.8 },
      { url: '/features/gconnect', lastmod: '2024-12-01', changefreq: 'weekly', priority: 0.8 },
      { url: '/features/gt-chat', lastmod: '2024-12-01', changefreq: 'weekly', priority: 0.8 },
      { url: '/features/gt-ui', lastmod: '2024-12-01', changefreq: 'weekly', priority: 0.8 },
      
      // Content pages
      { url: '/news', lastmod: new Date().toISOString(), changefreq: 'daily', priority: 0.7 },
      { url: '/gallery', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.6 },
      { url: '/testimonials', lastmod: '2024-12-01', changefreq: 'weekly', priority: 0.6 },
      { url: '/journey', lastmod: '2024-12-01', changefreq: 'monthly', priority: 0.6 },
      { url: '/mentors', lastmod: '2024-12-01', changefreq: 'monthly', priority: 0.6 },
      { url: '/incubators', lastmod: '2024-12-01', changefreq: 'monthly', priority: 0.6 },
      { url: '/tech-stack', lastmod: '2024-12-01', changefreq: 'monthly', priority: 0.5 },
      { url: '/search', lastmod: '2024-12-01', changefreq: 'monthly', priority: 0.4 },
      
      // App updates
      { url: '/app-updates', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.7 },
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map(entry => `  <url>
    <loc>${this.baseUrl}${entry.url}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    return xml;
  }

  generateRobotsTxt(): string {
    return `User-agent: *
Allow: /

# High-value pages for crawlers
Allow: /
Allow: /about
Allow: /features
Allow: /team
Allow: /news
Allow: /contact

# Block low-value pages
Disallow: /admin
Disallow: /private
Disallow: /*?*

# Sitemap location
Sitemap: ${this.baseUrl}/sitemap.xml

# Crawl delay for better server performance
Crawl-delay: 1`;
  }
}

export const sitemapGenerator = new SitemapGenerator();