// Advanced Meta Tag Optimization for Gaming Industry SEO
export interface PageSEO {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export const gamingKeywords = [
  // Primary gaming keywords
  'gaming super app',
  'esports platform',
  'professional gaming network',
  'gamer community',
  'gaming careers',
  'esports jobs',
  'gaming recruitment',
  'pro gaming profile',
  
  // Industry-specific terms
  'gaming industry networking',
  'esports talent platform',
  'competitive gaming',
  'gaming professionals',
  'esports athletes',
  'gaming content creators',
  'streamers network',
  'gaming influencers',
  
  // Technical gaming terms
  'gaming tournaments',
  'esports competitions',
  'gaming teams',
  'clan management',
  'gaming statistics',
  'player analytics',
  'gaming performance',
  'esports coaching',
  
  // Trending gaming keywords
  'mobile esports',
  'cloud gaming',
  'gaming metaverse',
  'nft gaming',
  'web3 gaming',
  'gaming blockchain',
  'virtual reality gaming',
  'augmented reality gaming'
];

export const pageConfigs: Record<string, PageSEO> = {
  home: {
    title: 'GAMERS TAG - World\'s First Gaming Super App | Professional Gaming Network',
    description: 'Join GAMERS TAG, the revolutionary gaming super app connecting gamers, esports professionals, and gaming companies worldwide. Build your gaming profile, find teammates, and advance your esports career.',
    keywords: ['gaming super app', 'professional gaming network', 'esports platform', 'gamer community'],
    canonicalUrl: 'https://gamerstag.com/',
    ogImage: '/og-images/home.jpg'
  },
  
  features: {
    title: 'Gaming Features | Pro Gaming Profile, Chat & Networking Tools | GAMERS TAG',
    description: 'Discover GAMERS TAG\'s powerful gaming features: professional gaming profiles, next-gen onboarding, GACCOUNTS, GCONNECT, GT Chat, and GT UI. Everything you need for professional gaming.',
    keywords: ['gaming features', 'pro gaming profile', 'gaming chat', 'esports tools'],
    canonicalUrl: 'https://gamerstag.com/features',
    ogImage: '/og-images/features.jpg'
  },
  
  team: {
    title: 'Our Team | Gaming Industry Experts & Esports Professionals | GAMERS TAG',
    description: 'Meet the GAMERS TAG team of gaming industry experts, esports professionals, and tech innovators building the future of professional gaming and esports networking.',
    keywords: ['gaming team', 'esports experts', 'gaming industry professionals', 'tech team'],
    canonicalUrl: 'https://gamerstag.com/team',
    ogImage: '/og-images/team.jpg'
  },
  
  news: {
    title: 'Gaming News & Esports Updates | Latest Industry Insights | GAMERS TAG',
    description: 'Stay updated with the latest gaming news, esports updates, and industry insights from GAMERS TAG. Get exclusive content about professional gaming and esports trends.',
    keywords: ['gaming news', 'esports updates', 'gaming industry news', 'professional gaming news'],
    canonicalUrl: 'https://gamerstag.com/news',
    ogImage: '/og-images/news.jpg'
  },
  
  about: {
    title: 'About GAMERS TAG | Revolutionary Gaming Super App | Our Mission',
    description: 'Learn about GAMERS TAG\'s mission to revolutionize the gaming industry. Discover our vision, values, and commitment to connecting gamers and esports professionals worldwide.',
    keywords: ['about gamers tag', 'gaming company', 'esports platform company', 'gaming mission'],
    canonicalUrl: 'https://gamerstag.com/about',
    ogImage: '/og-images/about.jpg'
  },
  
  contact: {
    title: 'Contact GAMERS TAG | Get in Touch | Gaming Industry Partnerships',
    description: 'Contact GAMERS TAG for partnerships, support, or inquiries. Connect with our team for gaming industry collaborations, esports partnerships, and business opportunities.',
    keywords: ['contact gamers tag', 'gaming partnerships', 'esports collaborations', 'gaming support'],
    canonicalUrl: 'https://gamerstag.com/contact',
    ogImage: '/og-images/contact.jpg'
  },
  
  'features/pro-gaming-profile': {
    title: 'Pro Gaming Profile | Professional Gamer Portfolio | GAMERS TAG',
    description: 'Create your professional gaming profile on GAMERS TAG. Showcase your gaming achievements, statistics, and connect with esports opportunities.',
    keywords: ['pro gaming profile', 'professional gamer portfolio', 'gaming achievements', 'esports profile'],
    canonicalUrl: 'https://gamerstag.com/features/pro-gaming-profile',
    ogImage: '/og-images/pro-gaming-profile.jpg',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Features', url: '/features' },
      { name: 'Pro Gaming Profile', url: '/features/pro-gaming-profile' }
    ]
  },
  
  'features/gconnect': {
    title: 'GCONNECT | Gaming Network & Team Finding | GAMERS TAG',
    description: 'Connect with gamers worldwide using GCONNECT. Find teammates, join gaming communities, and build your esports network on GAMERS TAG.',
    keywords: ['gconnect', 'gaming network', 'find teammates', 'gaming community'],
    canonicalUrl: 'https://gamerstag.com/features/gconnect',
    ogImage: '/og-images/gconnect.jpg',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Features', url: '/features' },
      { name: 'GCONNECT', url: '/features/gconnect' }
    ]
  }
};

export function generateBreadcrumbStructuredData(breadcrumbs: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://gamerstag.com${item.url}`
    }))
  };
}

export function generateArticleStructuredData(article: {
  title: string;
  description: string;
  publishedDate: string;
  modifiedDate?: string;
  author: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "datePublished": article.publishedDate,
    "dateModified": article.modifiedDate || article.publishedDate,
    "author": {
      "@type": "Organization",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "GAMERS TAG",
      "logo": {
        "@type": "ImageObject",
        "url": "https://gamerstag.com/logo.svg"
      }
    },
    "image": article.image ? {
      "@type": "ImageObject",
      "url": article.image,
      "width": 1200,
      "height": 630
    } : undefined
  };
}