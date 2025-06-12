// Server-side SEO utilities for sitemap and robots.txt generation
export interface SitemapEntry {
  url: string;
  lastModified?: string;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

// Static pages configuration with SEO-optimized URLs
const staticPages: SitemapEntry[] = [
  {
    url: 'https://gamerstag.com',
    changeFrequency: 'weekly',
    priority: 1.0
  },
  {
    url: 'https://gamerstag.com/about',
    changeFrequency: 'monthly',
    priority: 0.8
  },
  {
    url: 'https://gamerstag.com/team',
    changeFrequency: 'weekly',
    priority: 0.9
  },
  {
    url: 'https://gamerstag.com/features',
    changeFrequency: 'monthly',
    priority: 0.8
  },
  {
    url: 'https://gamerstag.com/features/pro-gaming-profile',
    changeFrequency: 'monthly',
    priority: 0.7
  },
  {
    url: 'https://gamerstag.com/features/gt-jobs',
    changeFrequency: 'weekly',
    priority: 0.7
  },
  {
    url: 'https://gamerstag.com/features/gt-connect',
    changeFrequency: 'weekly',
    priority: 0.7
  },
  {
    url: 'https://gamerstag.com/features/gt-news',
    changeFrequency: 'daily',
    priority: 0.7
  },
  {
    url: 'https://gamerstag.com/news',
    changeFrequency: 'daily',
    priority: 0.8
  },
  {
    url: 'https://gamerstag.com/testimonials',
    changeFrequency: 'weekly',
    priority: 0.6
  },
  {
    url: 'https://gamerstag.com/journey',
    changeFrequency: 'monthly',
    priority: 0.6
  },
  {
    url: 'https://gamerstag.com/gallery',
    changeFrequency: 'weekly',
    priority: 0.5
  },
  {
    url: 'https://gamerstag.com/connect',
    changeFrequency: 'monthly',
    priority: 0.7
  },
  {
    url: 'https://gamerstag.com/terms',
    changeFrequency: 'yearly',
    priority: 0.3
  }
];

// Team member pages (dynamic generation based on actual data)
const teamMemberPages: SitemapEntry[] = [
  {
    url: 'https://gamerstag.com/team/joshua-kanatt',
    changeFrequency: 'monthly',
    priority: 0.7
  },
  {
    url: 'https://gamerstag.com/team/harsh-singh',
    changeFrequency: 'monthly',
    priority: 0.7
  },
  {
    url: 'https://gamerstag.com/team/paul-dickinson',
    changeFrequency: 'monthly',
    priority: 0.7
  },
  {
    url: 'https://gamerstag.com/team/adesh-kumar',
    changeFrequency: 'monthly',
    priority: 0.7
  },
  {
    url: 'https://gamerstag.com/team/hemanth-joseph',
    changeFrequency: 'monthly',
    priority: 0.7
  },
  {
    url: 'https://gamerstag.com/team/monish-goutham',
    changeFrequency: 'monthly',
    priority: 0.7
  }
];

export async function generateSitemap(): Promise<string> {
  const allPages = [...staticPages, ...teamMemberPages];

  const sitemapEntries = allPages.map(page => `
  <url>
    <loc>${page.url}</loc>
    ${page.lastModified ? `<lastmod>${page.lastModified}</lastmod>` : `<lastmod>${new Date().toISOString()}</lastmod>`}
    ${page.changeFrequency ? `<changefreq>${page.changeFrequency}</changefreq>` : ''}
    ${page.priority ? `<priority>${page.priority}</priority>` : ''}
  </url>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</urlset>`;
}

export function generateRobotsTxt(): string {
  return `# Robots.txt for GAMERS TAG - Gaming Community Platform
User-agent: *
Allow: /
Allow: /features/
Allow: /team/
Allow: /news/
Allow: /testimonials/
Allow: /journey/
Allow: /gallery/
Allow: /connect/

# Block unnecessary pages from crawling
Disallow: /api/
Disallow: /admin/
Disallow: /dashboard/
Disallow: /cms-demo/
Disallow: /button-showcase/
Disallow: /search?
Disallow: /*?*
Disallow: /404
Disallow: /500
Disallow: /_next/
Disallow: /private/
Disallow: /*.json$

# Specific bots optimization
User-agent: Googlebot
Allow: /
Crawl-delay: 1

User-agent: Bingbot
Allow: /
Crawl-delay: 1

User-agent: facebookexternalhit
Allow: /

# Block problematic bots
User-agent: AhrefsBot
Disallow: /

User-agent: MJ12bot
Disallow: /

User-agent: DotBot
Disallow: /

# Allow important resources
Allow: /images/
Allow: /favicon.ico
Allow: /logo.png
Allow: /og-image.webp

# Sitemaps
Sitemap: https://gamerstag.com/sitemap.xml
Sitemap: https://gamerstag.com/news-sitemap.xml

# Host
Host: https://gamerstag.com`;
}