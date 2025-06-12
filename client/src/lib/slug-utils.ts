/**
 * Comprehensive slug utilities for GAMERS TAG website
 * Ensures perfect SEO-friendly URLs throughout the entire platform
 */

export interface SlugValidation {
  isValid: boolean;
  suggestions?: string[];
  seoScore: number;
  issues: string[];
}

export interface PageSlugMap {
  [key: string]: {
    slug: string;
    title: string;
    description: string;
    keywords: string[];
    type: 'team' | 'feature' | 'company' | 'news' | 'gallery' | 'page';
  };
}

/**
 * Master slug configuration for all website content
 */
export const WEBSITE_SLUG_MAP: PageSlugMap = {
  // Core Team Members
  'joshua-kanatt': {
    slug: '/team/joshua-kanatt',
    title: 'Joshua Kanatt - Founder & CEO | GAMERS TAG',
    description: 'Meet Joshua Kanatt, Founder & CEO of GAMERS TAG. Visionary leader building the future of gaming careers and community connections.',
    keywords: ['joshua-kanatt', 'founder', 'ceo', 'gaming-careers', 'leadership', 'gamers-tag'],
    type: 'team'
  },
  'harsh-singh': {
    slug: '/team/harsh-singh',
    title: 'Harsh Singh - Core Tech Member | GAMERS TAG',
    description: 'Meet Harsh Singh, Core Tech Member at GAMERS TAG. Backend architecture specialist ensuring scalable gaming infrastructure.',
    keywords: ['harsh-singh', 'backend', 'architecture', 'tech-lead', 'infrastructure', 'core-tech'],
    type: 'team'
  },
  'paul-dickinson': {
    slug: '/team/paul-dickinson',
    title: 'Paul Dickinson - Core Member | GAMERS TAG',
    description: 'Meet Paul Dickinson, Core Member at GAMERS TAG. Strategic operations leader driving business growth and community engagement.',
    keywords: ['paul-dickinson', 'operations', 'strategy', 'business-growth', 'community', 'core-member'],
    type: 'team'
  },
  'hemanth-joseph': {
    slug: '/team/hemanth-joseph',
    title: 'Hemanth Joseph - Core Tech Member | GAMERS TAG',
    description: 'Meet Hemanth Joseph, Core Tech Member at GAMERS TAG. Cybersecurity expert and ethical hacker ensuring platform security.',
    keywords: ['hemanth-joseph', 'cybersecurity', 'ethical-hacker', 'security', 'core-tech', 'platform-integrity'],
    type: 'team'
  },
  'adesh-kumar-patra': {
    slug: '/team/adesh-kumar-patra',
    title: 'Adesh Kumar Patra - Core Member | GAMERS TAG',
    description: 'Meet Adesh Kumar Patra, Core Member at GAMERS TAG. Innovation catalyst focusing on emerging technologies and platform advancement.',
    keywords: ['adesh-kumar-patra', 'innovation', 'emerging-tech', 'platform-advancement', 'core-member', 'technology'],
    type: 'team'
  },

  // Platform Features
  'gt-jobs': {
    slug: '/features/jobs',
    title: 'GT Jobs - Gaming Career Platform | GAMERS TAG',
    description: 'Revolutionary job platform connecting gaming professionals with dream opportunities. Advanced matching algorithms and industry-specific tools.',
    keywords: ['gt-jobs', 'gaming-careers', 'job-platform', 'gaming-professionals', 'employment', 'career-opportunities'],
    type: 'feature'
  },
  'gt-connect': {
    slug: '/features/gt-connect',
    title: 'GT Connect - Professional Networking | GAMERS TAG',
    description: 'Next-generation networking platform for gaming professionals. Build meaningful connections and collaborate on projects.',
    keywords: ['gt-connect', 'networking', 'gaming-professionals', 'collaboration', 'community', 'connections'],
    type: 'feature'
  },
  'gt-profile': {
    slug: '/features/gt-profile',
    title: 'GT Profile - Gaming Professional Profiles | GAMERS TAG',
    description: 'Comprehensive profile system showcasing gaming expertise, achievements, and professional journey. Template-based customization available.',
    keywords: ['gt-profile', 'gaming-profiles', 'professional-showcase', 'achievements', 'gaming-expertise', 'customization'],
    type: 'feature'
  },
  'gt-sound': {
    slug: '/features/gt-sound',
    title: 'GT Sound - Audio Experience Platform | GAMERS TAG',
    description: 'Immersive audio experience for gaming professionals. High-quality sound design and audio networking capabilities.',
    keywords: ['gt-sound', 'audio-experience', 'sound-design', 'audio-networking', 'immersive', 'gaming-audio'],
    type: 'feature'
  },
  'next-gen-onboarding': {
    slug: '/features/next-gen-onboarding',
    title: 'Next-Gen Onboarding | GAMERS TAG',
    description: 'Streamlined onboarding experience for new users. Interactive tutorials and personalized setup process.',
    keywords: ['onboarding', 'user-experience', 'tutorials', 'setup', 'new-users', 'interactive'],
    type: 'feature'
  },

  // Company Pages
  'about': {
    slug: '/about',
    title: 'About GAMERS TAG - Gaming Super App | GAMERS TAG',
    description: 'World\'s first all-in-one super app for gaming and esports. Building the future of gaming careers and community connections.',
    keywords: ['about', 'gamers-tag', 'gaming', 'esports', 'super-app', 'gaming-careers'],
    type: 'company'
  },
  'vision': {
    slug: '/vision',
    title: 'Our Vision & Mission | GAMERS TAG',
    description: 'Empowering gamers worldwide with tools, connections, and opportunities to turn their passion into successful careers.',
    keywords: ['vision', 'mission', 'gamers', 'careers', 'empowerment', 'gaming-success'],
    type: 'company'
  },
  'incubators': {
    slug: '/incubators',
    title: 'Incubators & Partnerships | GAMERS TAG',
    description: 'NASSCOM 10,000 Startups member and strategic partnerships with leading gaming industry organizations.',
    keywords: ['incubators', 'nasscom', 'partnerships', 'startups', 'industry-collaboration', 'gaming-partnerships'],
    type: 'company'
  },

  // Content Pages
  'news': {
    slug: '/news',
    title: 'Latest Gaming Industry News | GAMERS TAG',
    description: 'Stay updated with the latest gaming industry news, platform updates, and community announcements from GAMERS TAG.',
    keywords: ['gaming-news', 'industry-updates', 'platform-news', 'gaming-industry', 'esports-news', 'community-updates'],
    type: 'news'
  },
  'gallery': {
    slug: '/gallery',
    title: 'Platform Gallery & Media | GAMERS TAG',
    description: 'Visual showcase of GAMERS TAG platform interfaces, features, and user experience design elements.',
    keywords: ['gallery', 'platform-ui', 'interface-design', 'media', 'screenshots', 'platform-showcase'],
    type: 'gallery'
  },
  'search': {
    slug: '/search',
    title: 'Search Everything | GAMERS TAG',
    description: 'Discover news, team members, gallery content, and more from the GAMERS TAG ecosystem with our comprehensive search.',
    keywords: ['search', 'discover', 'content-search', 'platform-search', 'find-content', 'explore'],
    type: 'page'
  },

  // Additional Important Pages
  'home': {
    slug: '/',
    title: 'GAMERS TAG - World\'s First Gaming Super App',
    description: 'Join the world\'s first all-in-one super app for gaming and esports. Connect, compete, and build your gaming career with GAMERS TAG.',
    keywords: ['gamers-tag', 'gaming-app', 'esports', 'gaming-careers', 'gaming-community', 'super-app'],
    type: 'page'
  }
};

/**
 * Generate SEO-friendly slug from text
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters except hyphens
    .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

/**
 * Validate slug quality and SEO compliance
 */
export function validateSlug(slug: string): SlugValidation {
  const issues: string[] = [];
  let seoScore = 100;

  // Check length (optimal: 3-5 words, 15-60 characters)
  if (slug.length < 3) {
    issues.push('Slug too short - should be at least 3 characters');
    seoScore -= 30;
  } else if (slug.length > 60) {
    issues.push('Slug too long - should be under 60 characters');
    seoScore -= 20;
  }

  // Check for consecutive hyphens
  if (slug.includes('--')) {
    issues.push('Contains consecutive hyphens');
    seoScore -= 15;
  }

  // Check for numbers at the beginning
  if (/^\d/.test(slug)) {
    issues.push('Starts with number - not ideal for SEO');
    seoScore -= 10;
  }

  // Check for special characters
  if (!/^[a-z0-9-]+$/.test(slug)) {
    issues.push('Contains invalid characters - use only lowercase letters, numbers, and hyphens');
    seoScore -= 25;
  }

  // Check for meaningful words
  const words = slug.split('-');
  if (words.length < 2) {
    issues.push('Should contain multiple descriptive words');
    seoScore -= 15;
  }

  // Check for common stop words that might dilute SEO
  const stopWords = ['a', 'an', 'the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'is', 'are', 'was', 'were'];
  const nonStopWords = words.filter(word => !stopWords.includes(word));
  if (nonStopWords.length < words.length * 0.7) {
    issues.push('Contains too many stop words - focus on descriptive keywords');
    seoScore -= 10;
  }

  return {
    isValid: issues.length === 0,
    seoScore: Math.max(0, seoScore),
    issues
  };
}

/**
 * Get slug information by key
 */
export function getSlugInfo(key: string) {
  return WEBSITE_SLUG_MAP[key];
}

/**
 * Get all slugs by type
 */
export function getSlugsByType(type: 'team' | 'feature' | 'company' | 'news' | 'gallery' | 'page') {
  return Object.entries(WEBSITE_SLUG_MAP)
    .filter(([_, config]) => config.type === type)
    .map(([key, config]) => ({ key, ...config }));
}

/**
 * Find slug configuration by URL path
 */
export function findSlugByPath(path: string) {
  return Object.entries(WEBSITE_SLUG_MAP)
    .find(([_, config]) => config.slug === path)?.[1];
}

/**
 * Generate breadcrumb navigation from slug
 */
export function generateBreadcrumbs(slug: string) {
  const parts = slug.split('/').filter(Boolean);
  const breadcrumbs = [{ name: 'Home', href: '/' }];

  let currentPath = '';
  for (const part of parts) {
    currentPath += `/${part}`;
    const slugInfo = findSlugByPath(currentPath);
    
    breadcrumbs.push({
      name: slugInfo?.title.split(' | ')[0] || part.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      href: currentPath
    });
  }

  return breadcrumbs;
}

/**
 * Get related content based on keywords and type
 */
export function getRelatedContent(currentKey: string, limit: number = 3) {
  const current = WEBSITE_SLUG_MAP[currentKey];
  if (!current) return [];

  const related = Object.entries(WEBSITE_SLUG_MAP)
    .filter(([key, _]) => key !== currentKey)
    .map(([key, config]) => {
      // Calculate relevance score based on shared keywords
      const sharedKeywords = current.keywords.filter(keyword => 
        config.keywords.includes(keyword)
      ).length;
      
      // Boost score for same type
      const typeBonus = current.type === config.type ? 2 : 0;
      
      return {
        key,
        ...config,
        relevanceScore: sharedKeywords + typeBonus
      };
    })
    .filter(item => item.relevanceScore > 0)
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .slice(0, limit);

  return related;
}

/**
 * Validate all website slugs for SEO compliance
 */
export function auditAllSlugs() {
  const audit = Object.entries(WEBSITE_SLUG_MAP).map(([key, config]) => {
    const slugPart = config.slug.split('/').pop() || '';
    const validation = validateSlug(slugPart);
    
    return {
      key,
      slug: config.slug,
      title: config.title,
      validation,
      type: config.type
    };
  });

  return {
    total: audit.length,
    valid: audit.filter(item => item.validation.isValid).length,
    issues: audit.filter(item => !item.validation.isValid),
    averageScore: audit.reduce((sum, item) => sum + item.validation.seoScore, 0) / audit.length
  };
}