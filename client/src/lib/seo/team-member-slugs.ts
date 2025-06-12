// Comprehensive team member slug generation for SEO optimization
import { SlugGenerator } from './slug-generator';

export interface TeamMemberSEO {
  name: string;
  slug: string;
  role: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  url: string;
  canonicalUrl: string;
}

// Core team members with optimized SEO data
export const teamMembersSEO: TeamMemberSEO[] = [
  {
    name: "Joshua J Kanatt",
    slug: "joshua-j-kanatt",
    role: "Founder & Chief Executive Officer",
    seoTitle: "Joshua J Kanatt - Founder & CEO | GAMERS TAG",
    seoDescription: "Meet Joshua J Kanatt, Founder and CEO of GAMERS TAG. Visionary leader with 10+ years in gaming industry, driving innovation in esports and gaming technology.",
    keywords: ["joshua kanatt", "gamers tag founder", "gaming ceo", "esports leader", "gaming entrepreneur", "tech visionary"],
    url: "/team/joshua-j-kanatt",
    canonicalUrl: "https://gamerstag.com/team/joshua-j-kanatt"
  },
  {
    name: "Hemanth Joseph",
    slug: "hemanth-joseph", 
    role: "Co-Founder & Chief Technology Officer",
    seoTitle: "Hemanth Joseph - CTO & Co-Founder | GAMERS TAG",
    seoDescription: "Hemanth Joseph, Co-Founder and CTO of GAMERS TAG. Leading technical architecture and full-stack development for next-generation gaming platform.",
    keywords: ["hemanth joseph", "gamers tag cto", "gaming technology", "full stack developer", "tech co-founder", "gaming architecture"],
    url: "/team/hemanth-joseph",
    canonicalUrl: "https://gamerstag.com/team/hemanth-joseph"
  },
  {
    name: "Adesh Kumar Patra",
    slug: "adesh-kumar-patra",
    role: "Co-Founder & Chief Operating Officer", 
    seoTitle: "Adesh Kumar Patra - COO & Co-Founder | GAMERS TAG",
    seoDescription: "Adesh Kumar Patra, Co-Founder and COO of GAMERS TAG. Strategic operations expert driving business development and operational excellence.",
    keywords: ["adesh kumar patra", "gamers tag coo", "gaming operations", "business development", "strategic planning", "gaming business"],
    url: "/team/adesh-kumar-patra",
    canonicalUrl: "https://gamerstag.com/team/adesh-kumar-patra"
  },
  {
    name: "Tintu Tomy",
    slug: "tintu-tomy",
    role: "Senior Financial Analyst",
    seoTitle: "Tintu Tomy - Senior Financial Analyst | GAMERS TAG",
    seoDescription: "Tintu Tomy, Senior Financial Analyst at GAMERS TAG. Expert in financial planning, analysis, and strategic financial management for gaming industry.",
    keywords: ["tintu tomy", "financial analyst", "gaming finance", "financial planning", "business analysis", "gamers tag team"],
    url: "/team/tintu-tomy",
    canonicalUrl: "https://gamerstag.com/team/tintu-tomy"
  },
  {
    name: "Fathima Nihma",
    slug: "fathima-nihma",
    role: "HR Manager",
    seoTitle: "Fathima Nihma - HR Manager | GAMERS TAG",
    seoDescription: "Fathima Nihma, HR Manager at GAMERS TAG. Leading human resources, talent acquisition, and team development in the gaming industry.",
    keywords: ["fathima nihma", "hr manager", "human resources", "talent acquisition", "team development", "gaming hr"],
    url: "/team/fathima-nihma", 
    canonicalUrl: "https://gamerstag.com/team/fathima-nihma"
  },
  {
    name: "Mubashir MP",
    slug: "mubashir-mp",
    role: "Software Developer",
    seoTitle: "Mubashir MP - Software Developer | GAMERS TAG",
    seoDescription: "Mubashir MP, Software Developer at GAMERS TAG. Developing innovative gaming solutions and contributing to cutting-edge gaming technology.",
    keywords: ["mubashir mp", "software developer", "gaming development", "tech innovation", "programming", "gamers tag developer"],
    url: "/team/mubashir-mp",
    canonicalUrl: "https://gamerstag.com/team/mubashir-mp"
  },
  {
    name: "Sradha Sasidharan",
    slug: "sradha-sasidharan",
    role: "UI/UX Designer",
    seoTitle: "Sradha Sasidharan - UI/UX Designer | GAMERS TAG", 
    seoDescription: "Sradha Sasidharan, UI/UX Designer at GAMERS TAG. Creating exceptional user experiences and innovative design solutions for gaming platforms.",
    keywords: ["sradha sasidharan", "ui ux designer", "gaming design", "user experience", "interface design", "gaming ui"],
    url: "/team/sradha-sasidharan",
    canonicalUrl: "https://gamerstag.com/team/sradha-sasidharan"
  },
  {
    name: "Abhinav Jain Ranka",
    slug: "abhinav-jain-ranka",
    role: "Chief Financial Officer",
    seoTitle: "Abhinav Jain Ranka - CFO & Finance Strategist | GAMERS TAG",
    seoDescription: "Abhinav Jain Ranka, seasoned CFO with 14+ years experience at PharmEasy. Led $1.5B+ fundraising, IPO strategy, M&A deals, and strategic financial leadership.",
    keywords: ["abhinav jain ranka", "cfo gamers tag", "financial strategist", "pharmeasy cfo", "ipo expert", "m&a specialist", "fundraising expert", "financial leadership"],
    url: "/team/abhinav-jain-ranka",
    canonicalUrl: "https://gamerstag.com/team/abhinav-jain-ranka"
  }
];

// Feature pages with SEO optimization
export const featurePagesSEO = [
  {
    title: "Pro Gaming Profile",
    slug: "pro-gaming-profile",
    seoTitle: "Pro Gaming Profile - Create Your Gaming Legacy | GAMERS TAG",
    seoDescription: "Build your professional gaming profile with GAMERS TAG. Showcase achievements, connect with gamers, and establish your presence in the esports community.",
    keywords: ["pro gaming profile", "gamer profile", "esports profile", "gaming identity", "gaming achievements", "gamer showcase"],
    url: "/features/pro-gaming-profile",
    canonicalUrl: "https://gamerstag.com/features/pro-gaming-profile"
  },
  {
    title: "GT Connect",
    slug: "gt-connect",
    seoTitle: "GT Connect - Unified Gaming Account System | GAMERS TAG",
    seoDescription: "Connect all your gaming accounts with GT Connect. Unified gaming identity across platforms, tournaments, and gaming communities.",
    keywords: ["gt connect", "gaming accounts", "unified gaming", "gaming identity", "account linking", "cross platform gaming"],
    url: "/features/gt-connect",
    canonicalUrl: "https://gamerstag.com/features/gt-connect"
  },
  {
    title: "GT Chats",
    slug: "gt-chats", 
    seoTitle: "GT Chats - Gaming Community Communication | GAMERS TAG",
    seoDescription: "Connect with gamers worldwide through GT Chats. Real-time messaging, team coordination, and community building for esports enthusiasts.",
    keywords: ["gt chats", "gaming chat", "gamer communication", "team chat", "gaming community", "esports messaging"],
    url: "/features/gt-chats",
    canonicalUrl: "https://gamerstag.com/features/gt-chats"
  },
  {
    title: "GT Jobs",
    slug: "gt-jobs",
    seoTitle: "GT Jobs - Gaming Industry Careers | GAMERS TAG", 
    seoDescription: "Discover gaming industry opportunities with GT Jobs. Connect with esports organizations, gaming companies, and professional gaming careers.",
    keywords: ["gt jobs", "gaming careers", "esports jobs", "gaming industry", "gaming employment", "esports careers"],
    url: "/features/gt-jobs",
    canonicalUrl: "https://gamerstag.com/features/gt-jobs"
  },
  {
    title: "GT News",
    slug: "gt-news",
    seoTitle: "GT News - Latest Gaming & Esports Updates | GAMERS TAG",
    seoDescription: "Stay updated with GT News. Latest gaming industry news, esports tournaments, game releases, and professional gaming insights.",
    keywords: ["gt news", "gaming news", "esports news", "gaming updates", "game releases", "esports tournaments"],
    url: "/features/gt-news", 
    canonicalUrl: "https://gamerstag.com/features/gt-news"
  },
  {
    title: "GT Card",
    slug: "gt-card",
    seoTitle: "GT Card - Digital Gaming Identity | GAMERS TAG",
    seoDescription: "Your digital gaming identity with GT Card. Professional gamer credentials, achievements showcase, and verified gaming profile.",
    keywords: ["gt card", "gaming identity", "digital gamer card", "gaming credentials", "gamer verification", "esports id"],
    url: "/features/gt-card",
    canonicalUrl: "https://gamerstag.com/features/gt-card"
  },
  {
    title: "GT UI",
    slug: "gt-ui", 
    seoTitle: "GT UI - Gaming Interface Design System | GAMERS TAG",
    seoDescription: "Experience GT UI - world-class gaming interface design. Intuitive, stunning, and seamless user experience for professional gamers.",
    keywords: ["gt ui", "gaming ui", "gaming interface", "user experience", "gaming design", "esports ui"],
    url: "/features/gt-ui",
    canonicalUrl: "https://gamerstag.com/features/gt-ui"
  }
];

// Generate team member structured data
export function generateTeamMemberStructuredData(member: TeamMemberSEO) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": member.name,
    "jobTitle": member.role,
    "worksFor": {
      "@type": "Organization", 
      "name": "GAMERS TAG",
      "url": "https://gamerstag.com"
    },
    "url": member.canonicalUrl,
    "sameAs": [],
    "description": member.seoDescription
  };
}

// Generate feature structured data
export function generateFeatureStructuredData(feature: any) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": feature.title,
    "description": feature.seoDescription,
    "brand": {
      "@type": "Brand",
      "name": "GAMERS TAG"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "GAMERS TAG"
    },
    "url": feature.canonicalUrl
  };
}

// URL validation for team members
export function validateTeamMemberURL(slug: string): boolean {
  return teamMembersSEO.some(member => member.slug === slug);
}

// Get team member SEO data by slug
export function getTeamMemberSEO(slug: string): TeamMemberSEO | undefined {
  return teamMembersSEO.find(member => member.slug === slug);
}

// Get feature SEO data by slug  
export function getFeatureSEO(slug: string) {
  return featurePagesSEO.find(feature => feature.slug === slug);
}

// Generate breadcrumbs for team member pages
export function generateTeamMemberBreadcrumbs(member: TeamMemberSEO) {
  return [
    { name: "Home", url: "https://gamerstag.com/" },
    { name: "Team", url: "https://gamerstag.com/team" },
    { name: member.name, url: member.canonicalUrl }
  ];
}

// Generate breadcrumbs for feature pages
export function generateFeatureBreadcrumbs(feature: any) {
  return [
    { name: "Home", url: "https://gamerstag.com/" },
    { name: "Features", url: "https://gamerstag.com/features" },
    { name: feature.title, url: feature.canonicalUrl }
  ];
}