// Advanced SEO optimization system
import { SlugGenerator, MetaPatterns } from './slug-generator';

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile' | 'product';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
  canonical?: string;
  noIndex?: boolean;
  schemaType?: 'Organization' | 'Person' | 'Article' | 'Product' | 'WebPage' | 'BreadcrumbList';
  breadcrumbs?: Array<{ name: string; url: string }>;
}

export class AdvancedSEO {
  private static baseUrl = 'https://gamerstag.com';
  private static siteName = 'GAMERS TAG';
  private static defaultImage = '/images/og-default.jpg';

  // Generate comprehensive meta tags
  static generateMetaTags(config: SEOConfig): Record<string, string> {
    const {
      title,
      description,
      keywords,
      image = this.defaultImage,
      url,
      type = 'website',
      publishedTime,
      modifiedTime,
      author,
      section,
      tags,
      canonical,
      noIndex = false
    } = config;

    const fullTitle = title.includes(this.siteName) ? title : `${title} | ${this.siteName}`;
    const fullUrl = url ? (url.startsWith('http') ? url : `${this.baseUrl}${url}`) : this.baseUrl;
    const fullImage = image.startsWith('http') ? image : `${this.baseUrl}${image}`;

    const metaTags: Record<string, string> = {
      // Primary Meta Tags
      'title': fullTitle,
      'meta:title': fullTitle,
      'meta:description': description,
      'meta:keywords': keywords.join(', '),
      'meta:viewport': 'width=device-width, initial-scale=1.0',
      'meta:theme-color': '#E5042F',
      
      // Open Graph / Facebook
      'meta:og:type': type,
      'meta:og:url': fullUrl,
      'meta:og:title': fullTitle,
      'meta:og:description': description,
      'meta:og:image': fullImage,
      'meta:og:image:width': '1200',
      'meta:og:image:height': '630',
      'meta:og:site_name': this.siteName,
      'meta:og:locale': 'en_US',
      
      // Twitter Cards
      'meta:twitter:card': 'summary_large_image',
      'meta:twitter:url': fullUrl,
      'meta:twitter:title': fullTitle,
      'meta:twitter:description': description,
      'meta:twitter:image': fullImage,
      'meta:twitter:creator': '@gamerstag',
      'meta:twitter:site': '@gamerstag',
      
      // Additional SEO
      'meta:robots': noIndex ? 'noindex, nofollow' : 'index, follow',
      'meta:googlebot': 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
      'link:canonical': canonical || fullUrl,
      
      // Performance hints
      'link:preconnect:fonts': 'https://fonts.googleapis.com',
      'link:preconnect:fonts-static': 'https://fonts.gstatic.com',
      'link:preconnect:sanity': 'https://cdn.sanity.io',
      'link:dns-prefetch:analytics': 'https://www.google-analytics.com'
    };

    // Article-specific meta tags
    if (type === 'article') {
      if (publishedTime) metaTags['meta:article:published_time'] = publishedTime;
      if (modifiedTime) metaTags['meta:article:modified_time'] = modifiedTime;
      if (author) metaTags['meta:article:author'] = author;
      if (section) metaTags['meta:article:section'] = section;
      if (tags) {
        tags.forEach((tag, index) => {
          metaTags[`meta:article:tag:${index}`] = tag;
        });
      }
    }

    return metaTags;
  }

  // Generate structured data schemas
  static generateStructuredData(config: SEOConfig, data: any = {}): any {
    const { schemaType = 'WebPage', breadcrumbs } = config;
    const baseSchema = {
      '@context': 'https://schema.org',
      '@type': schemaType,
      ...data
    };

    switch (schemaType) {
      case 'Person':
        return {
          ...baseSchema,
          name: data.name,
          jobTitle: data.jobTitle || data.role,
          worksFor: {
            '@type': 'Organization',
            name: this.siteName
          },
          url: data.url || config.url,
          image: data.image || config.image,
          description: data.bio || config.description,
          sameAs: data.socialLinks || []
        };

      case 'Article':
        return {
          ...baseSchema,
          headline: config.title,
          description: config.description,
          image: config.image,
          datePublished: config.publishedTime,
          dateModified: config.modifiedTime || config.publishedTime,
          author: {
            '@type': 'Person',
            name: config.author || 'GAMERS TAG Team'
          },
          publisher: {
            '@type': 'Organization',
            name: this.siteName,
            logo: {
              '@type': 'ImageObject',
              url: `${this.baseUrl}/logo.png`
            }
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': config.url
          }
        };

      case 'Product':
        return {
          ...baseSchema,
          name: data.name || config.title,
          description: config.description,
          image: config.image,
          brand: {
            '@type': 'Brand',
            name: this.siteName
          },
          manufacturer: {
            '@type': 'Organization',
            name: this.siteName
          }
        };

      case 'BreadcrumbList':
        return {
          ...baseSchema,
          itemListElement: breadcrumbs?.map((crumb, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: crumb.name,
            item: crumb.url.startsWith('http') ? crumb.url : `${this.baseUrl}${crumb.url}`
          })) || []
        };

      default:
        return {
          ...baseSchema,
          name: config.title,
          description: config.description,
          url: config.url
        };
    }
  }

  // Generate team member SEO config
  static generateTeamMemberSEO(member: any): SEOConfig {
    const slug = SlugGenerator.generateTeamMemberSlug(member.name, member.role);
    const meta = MetaPatterns.teamMember(member);
    
    return {
      ...meta,
      url: `/team/${slug}`,
      type: 'profile',
      schemaType: 'Person',
      canonical: `${this.baseUrl}/team/${slug}`,
      image: member.image || member.avatar || this.defaultImage,
      breadcrumbs: [
        { name: 'Home', url: '/' },
        { name: 'Team', url: '/team' },
        { name: member.name, url: `/team/${slug}` }
      ]
    };
  }

  // Generate feature page SEO config
  static generateFeatureSEO(feature: any): SEOConfig {
    const slug = SlugGenerator.generateFeatureSlug(feature.title);
    const meta = MetaPatterns.feature(feature);
    
    return {
      ...meta,
      url: `/features/${slug}`,
      type: 'product',
      schemaType: 'Product',
      canonical: `${this.baseUrl}/features/${slug}`,
      image: feature.image || feature.thumbnail || this.defaultImage,
      breadcrumbs: [
        { name: 'Home', url: '/' },
        { name: 'Features', url: '/features' },
        { name: feature.title, url: `/features/${slug}` }
      ]
    };
  }

  // Generate news article SEO config
  static generateNewsSEO(article: any): SEOConfig {
    const slug = SlugGenerator.generateSlug(article.title);
    const meta = MetaPatterns.news(article);
    
    return {
      ...meta,
      url: `/news/${slug}`,
      type: 'article',
      schemaType: 'Article',
      canonical: `${this.baseUrl}/news/${slug}`,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      author: article.author,
      section: article.category,
      tags: article.tags,
      image: article.featuredImage || this.defaultImage,
      breadcrumbs: [
        { name: 'Home', url: '/' },
        { name: 'News', url: '/news' },
        { name: article.title, url: `/news/${slug}` }
      ]
    };
  }

  // Generate comprehensive page SEO
  static generatePageSEO(pageType: string, data: any = {}): SEOConfig {
    const configs: Record<string, SEOConfig> = {
      home: {
        title: 'GAMERS TAG - The Ultimate Gaming Ecosystem Super App',
        description: 'Join the world\'s most innovative gaming super platform. Connect with gamers, build your legacy, compete in esports, and experience next-generation gaming technology.',
        keywords: ['gaming platform', 'esports', 'gaming community', 'gaming app', 'gamer profiles', 'gaming tournaments', 'gaming technology', 'multiplayer gaming', 'gaming ecosystem', 'gaming super app'],
        url: '/',
        type: 'website',
        schemaType: 'Organization'
      },
      
      about: {
        title: 'About GAMERS TAG - Revolutionary Gaming Platform',
        description: 'Discover GAMERS TAG\'s vision to revolutionize gaming through innovative technology, community building, and professional esports development.',
        keywords: ['gaming company', 'gaming innovation', 'esports development', 'gaming technology', 'gaming vision', 'gaming mission'],
        url: '/about',
        breadcrumbs: [
          { name: 'Home', url: '/' },
          { name: 'About', url: '/about' }
        ]
      },
      
      team: {
        title: 'Our Team - GAMERS TAG Leadership & Innovation',
        description: 'Meet the visionary leaders and innovative team members driving GAMERS TAG\'s success in revolutionizing the gaming industry.',
        keywords: ['gaming team', 'gaming leadership', 'gaming professionals', 'esports team', 'tech team', 'gaming experts'],
        url: '/team',
        breadcrumbs: [
          { name: 'Home', url: '/' },
          { name: 'Team', url: '/team' }
        ]
      },
      
      features: {
        title: 'Gaming Features - Pro Profiles, Tournaments & More',
        description: 'Explore GAMERS TAG\'s powerful features: Pro Gaming Profiles, Tournament System, Team Management, Social Gaming, and cutting-edge gaming technology.',
        keywords: ['gaming features', 'pro gaming profiles', 'gaming tournaments', 'team management', 'social gaming', 'gaming tools'],
        url: '/features',
        breadcrumbs: [
          { name: 'Home', url: '/' },
          { name: 'Features', url: '/features' }
        ]
      },
      
      contact: {
        title: 'Contact GAMERS TAG - Get in Touch',
        description: 'Contact GAMERS TAG for partnerships, support, or inquiries. Connect with our team to learn more about our gaming platform.',
        keywords: ['contact gamers tag', 'gaming support', 'partnerships', 'gaming inquiries'],
        url: '/contact',
        breadcrumbs: [
          { name: 'Home', url: '/' },
          { name: 'Contact', url: '/contact' }
        ]
      }
    };

    return configs[pageType] || configs.home;
  }

  // Performance optimization recommendations
  static getPerformanceOptimizations(): string[] {
    return [
      'Implement lazy loading for images',
      'Use WebP format with fallbacks',
      'Minimize JavaScript bundle size',
      'Enable compression (Gzip/Brotli)',
      'Use CDN for static assets',
      'Implement service worker caching',
      'Optimize critical rendering path',
      'Reduce unused CSS',
      'Preload critical resources',
      'Use resource hints (preconnect, dns-prefetch)'
    ];
  }
}