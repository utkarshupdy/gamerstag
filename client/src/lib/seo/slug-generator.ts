// Advanced SEO-friendly slug generation system
export class SlugGenerator {
  // Generate SEO-optimized slugs
  static generateSlug(text: string): string {
    return text
      .toLowerCase()
      .trim()
      // Remove special characters except hyphens and spaces
      .replace(/[^\w\s-]/g, '')
      // Replace spaces and multiple hyphens with single hyphen
      .replace(/[\s_-]+/g, '-')
      // Remove leading/trailing hyphens
      .replace(/^-+|-+$/g, '')
      // Limit to 60 characters for SEO
      .substring(0, 60)
      .replace(/-+$/, ''); // Remove trailing hyphen after truncation
  }

  // Generate team member slugs with role context
  static generateTeamMemberSlug(name: string, role?: string): string {
    let slug = this.generateSlug(name);
    
    // For founders/CEOs, use simple name slug
    if (role?.toLowerCase().includes('founder') || role?.toLowerCase().includes('ceo')) {
      return slug;
    }
    
    return slug;
  }

  // Generate feature page slugs
  static generateFeatureSlug(featureName: string): string {
    return this.generateSlug(featureName)
      .replace(/^gt-/, '') // Remove GT prefix for cleaner URLs
      .replace(/^gamers?-?tag-?/, ''); // Remove GAMERS TAG prefix
  }

  // Generate news/blog slugs with date context
  static generateNewsSlug(title: string, publishDate?: Date): string {
    const baseSlug = this.generateSlug(title);
    
    if (publishDate) {
      const year = publishDate.getFullYear();
      const month = String(publishDate.getMonth() + 1).padStart(2, '0');
      return `${year}/${month}/${baseSlug}`;
    }
    
    return baseSlug;
  }

  // Generate category-based slugs
  static generateCategorySlug(category: string, title: string): string {
    const categorySlug = this.generateSlug(category);
    const titleSlug = this.generateSlug(title);
    return `${categorySlug}/${titleSlug}`;
  }

  // Validate slug for SEO best practices
  static validateSlug(slug: string): {
    isValid: boolean;
    issues: string[];
    suggestions: string[];
  } {
    const issues: string[] = [];
    const suggestions: string[] = [];

    // Length check
    if (slug.length < 3) {
      issues.push('Slug too short (minimum 3 characters)');
      suggestions.push('Add more descriptive words');
    }
    
    if (slug.length > 60) {
      issues.push('Slug too long (maximum 60 characters)');
      suggestions.push('Shorten the slug for better SEO');
    }

    // Character validation
    if (!/^[a-z0-9-]+$/.test(slug)) {
      issues.push('Slug contains invalid characters');
      suggestions.push('Use only lowercase letters, numbers, and hyphens');
    }

    // Double hyphens
    if (slug.includes('--')) {
      issues.push('Contains consecutive hyphens');
      suggestions.push('Replace double hyphens with single hyphens');
    }

    // Leading/trailing hyphens
    if (slug.startsWith('-') || slug.endsWith('-')) {
      issues.push('Starts or ends with hyphen');
      suggestions.push('Remove leading/trailing hyphens');
    }

    // SEO keyword density
    const words = slug.split('-');
    if (words.length < 2) {
      suggestions.push('Consider adding more descriptive keywords');
    }

    return {
      isValid: issues.length === 0,
      issues,
      suggestions
    };
  }

  // Generate breadcrumb-friendly paths
  static generateBreadcrumbPath(segments: string[]): string[] {
    return segments.map(segment => this.generateSlug(segment));
  }

  // Generate canonical URLs
  static generateCanonicalUrl(baseUrl: string, path: string): string {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${baseUrl.replace(/\/$/, '')}${cleanPath}`;
  }
}

// SEO-optimized URL patterns for different content types
export const URLPatterns = {
  // Team member profiles
  teamMember: (slug: string) => `/team/${slug}`,
  coreMember: (slug: string) => `/team/core/${slug}`,
  
  // Feature pages
  feature: (slug: string) => `/features/${slug}`,
  featureDetail: (category: string, slug: string) => `/features/${category}/${slug}`,
  
  // News and updates
  news: (slug: string) => `/news/${slug}`,
  newsWithDate: (year: number, month: number, slug: string) => 
    `/news/${year}/${month.toString().padStart(2, '0')}/${slug}`,
  
  // Mentor profiles
  mentor: (slug: string) => `/mentors/${slug}`,
  
  // Company pages
  about: () => '/about',
  contact: () => '/contact',
  careers: () => '/careers',
  
  // Platform features
  platform: (feature: string) => `/platform/${feature}`,
  
  // Resource pages
  documentation: (section: string) => `/docs/${section}`,
  help: (topic: string) => `/help/${topic}`,
  
  // Gaming specific
  tournaments: (slug: string) => `/tournaments/${slug}`,
  leaderboards: (game: string) => `/leaderboards/${game}`,
  profiles: (username: string) => `/profiles/${username}`
};

// Meta tag optimization for different page types
export const MetaPatterns = {
  // Team member meta patterns
  teamMember: (member: any) => ({
    title: `${member.name} - ${member.role} | GAMERS TAG`,
    description: `Meet ${member.name}, ${member.role} at GAMERS TAG. ${member.bio || 'Leading innovation in gaming technology and esports development.'}`,
    keywords: [
      member.name.toLowerCase().replace(/\s+/g, '-'),
      member.role.toLowerCase().replace(/\s+/g, '-'),
      'gaming professional',
      'esports expert',
      'gaming leadership',
      'tech innovation'
    ]
  }),

  // Feature page meta patterns
  feature: (feature: any) => ({
    title: `${feature.title} - Gaming Feature | GAMERS TAG`,
    description: `Discover ${feature.title}: ${feature.description || 'Advanced gaming feature designed for professional gamers and esports enthusiasts.'}`,
    keywords: [
      feature.title.toLowerCase().replace(/\s+/g, '-'),
      'gaming feature',
      'esports tool',
      'gaming technology',
      'pro gaming',
      ...(feature.tags || [])
    ]
  }),

  // News article meta patterns
  news: (article: any) => ({
    title: `${article.title} | GAMERS TAG News`,
    description: article.excerpt || article.description || `Latest gaming news from GAMERS TAG: ${article.title}`,
    keywords: [
      'gaming news',
      'esports updates',
      'gaming industry',
      ...(article.tags || []),
      ...(article.category ? [article.category.toLowerCase()] : [])
    ]
  })
};