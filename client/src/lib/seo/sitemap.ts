// Sitemap generation for SEO optimization
import { coreTeamMembers } from '@/data/team-members';

export interface SitemapEntry {
  url: string;
  lastModified?: string;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

// Static pages configuration
export const staticPages: SitemapEntry[] = [
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
    url: 'https://gamerstag.com/updates',
    changeFrequency: 'daily',
    priority: 0.7
  },
  {
    url: 'https://gamerstag.com/contact',
    changeFrequency: 'monthly',
    priority: 0.6
  }
];

// Generate team member pages
export const generateTeamPages = (): SitemapEntry[] => {
  return coreTeamMembers.map(member => ({
    url: `https://gamerstag.com/team/${member.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }));
};

// Generate complete sitemap
export const generateSitemap = (): string => {
  const allPages = [
    ...staticPages,
    ...generateTeamPages()
  ];

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
};

// Generate robots.txt content
export const generateRobotsTxt = (): string => {
  return `User-agent: *
Allow: /

# Sitemap
Sitemap: https://gamerstag.com/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Block unnecessary paths
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Disallow: /private/
`;
};