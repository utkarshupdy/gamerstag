// Advanced social media SEO optimization for gaming content
export class SocialMediaSEO {
  
  // Generate optimized social media meta tags for gaming content
  static generateSocialTags(config: {
    title: string;
    description: string;
    image: string;
    url: string;
    type?: 'website' | 'article' | 'profile';
    author?: string;
    publishTime?: string;
    tags?: string[];
  }) {
    const { title, description, image, url, type = 'website', author, publishTime, tags } = config;
    
    return {
      // Enhanced Open Graph for gaming
      'og:title': `${title} | GAMERS TAG Gaming Platform`,
      'og:description': description,
      'og:image': image,
      'og:image:width': '1200',
      'og:image:height': '630',
      'og:url': url,
      'og:type': type,
      'og:site_name': 'GAMERS TAG',
      'og:locale': 'en_US',
      
      // Gaming-specific Open Graph
      'og:video:tag': tags?.join(','),
      'article:author': author,
      'article:published_time': publishTime,
      'article:section': 'Gaming',
      'article:tag': tags?.join(','),
      
      // Enhanced Twitter Cards for gaming
      'twitter:card': 'summary_large_image',
      'twitter:site': '@gamerstag',
      'twitter:creator': '@gamerstag',
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': image,
      'twitter:image:alt': `${title} - GAMERS TAG Gaming Platform`,
      
      // Gaming-specific Twitter tags
      'twitter:app:name:iphone': 'GAMERS TAG',
      'twitter:app:name:ipad': 'GAMERS TAG',
      'twitter:app:name:googleplay': 'GAMERS TAG',
      
      // LinkedIn optimization
      'linkedin:owner': 'GAMERS TAG',
      
      // Pinterest optimization for gaming content
      'pinterest:description': description,
      'pinterest:media': image
    };
  }

  // Generate gaming-specific rich snippets
  static generateRichSnippets(content: {
    title: string;
    rating?: number;
    reviews?: number;
    price?: string;
    availability?: string;
    category: string;
  }) {
    return {
      '@context': 'https://schema.org',
      '@type': 'Product',
      'name': content.title,
      'category': content.category,
      'brand': {
        '@type': 'Brand',
        'name': 'GAMERS TAG'
      },
      'aggregateRating': content.rating ? {
        '@type': 'AggregateRating',
        'ratingValue': content.rating,
        'reviewCount': content.reviews || 1,
        'bestRating': 5
      } : undefined,
      'offers': {
        '@type': 'Offer',
        'price': content.price || '0',
        'priceCurrency': 'USD',
        'availability': `https://schema.org/${content.availability || 'InStock'}`
      }
    };
  }

  // Gaming platform specific social cards
  static generateGamingPlatformCard(platform: {
    name: string;
    description: string;
    features: string[];
    playerCount?: string;
    rating?: number;
  }) {
    return {
      title: `${platform.name} - Professional Gaming Platform`,
      description: `${platform.description} ${platform.features.join(', ')}`,
      image: `/images/platforms/${platform.name.toLowerCase().replace(/\s+/g, '-')}.jpg`,
      tags: ['gaming', 'esports', 'platform', ...platform.features],
      metadata: {
        players: platform.playerCount,
        rating: platform.rating,
        category: 'Gaming Platform'
      }
    };
  }

  // Team member social optimization
  static generateTeamSocialCard(member: {
    name: string;
    role: string;
    bio: string;
    linkedin?: string;
    twitter?: string;
    expertise: string[];
  }) {
    return {
      title: `${member.name} - ${member.role}`,
      description: `${member.bio} Expert in ${member.expertise.join(', ')}`,
      image: `/images/team/${member.name.toLowerCase().replace(/\s+/g, '-')}.jpg`,
      type: 'profile' as const,
      author: member.name,
      tags: ['gaming professional', 'esports', ...member.expertise],
      socialLinks: {
        linkedin: member.linkedin,
        twitter: member.twitter
      }
    };
  }

  // Generate video game content cards
  static generateGameContentCard(game: {
    title: string;
    description: string;
    genre: string;
    platform: string[];
    developer?: string;
    rating?: number;
  }) {
    return {
      title: `${game.title} - ${game.genre} Gaming`,
      description: `${game.description} Available on ${game.platform.join(', ')}`,
      image: `/images/games/${game.title.toLowerCase().replace(/\s+/g, '-')}.jpg`,
      tags: [game.genre.toLowerCase(), 'gaming', 'video game', ...game.platform],
      metadata: {
        genre: game.genre,
        platforms: game.platform,
        developer: game.developer,
        rating: game.rating
      }
    };
  }

  // Social media image optimization for gaming
  static optimizeGamingImages(images: {
    primary: string;
    thumbnail: string;
    banner?: string;
  }) {
    return {
      // Open Graph optimized (1200x630)
      ogImage: {
        url: images.primary,
        width: 1200,
        height: 630,
        alt: 'GAMERS TAG Gaming Platform'
      },
      
      // Twitter Card optimized (1200x628)
      twitterImage: {
        url: images.primary,
        width: 1200,
        height: 628,
        alt: 'GAMERS TAG Gaming Experience'
      },
      
      // Thumbnail for listings (300x300)
      thumbnail: {
        url: images.thumbnail,
        width: 300,
        height: 300,
        alt: 'GAMERS TAG Gaming Icon'
      },
      
      // Banner for profile pages (1920x400)
      banner: images.banner ? {
        url: images.banner,
        width: 1920,
        height: 400,
        alt: 'GAMERS TAG Gaming Banner'
      } : undefined
    };
  }

  // Generate gaming event social cards
  static generateEventSocialCard(event: {
    name: string;
    description: string;
    startDate: string;
    endDate?: string;
    location: string;
    participants?: number;
    prize?: string;
  }) {
    return {
      title: `${event.name} - Gaming Tournament`,
      description: `${event.description} ${event.prize ? `Prize: ${event.prize}` : ''}`,
      image: `/images/events/${event.name.toLowerCase().replace(/\s+/g, '-')}.jpg`,
      type: 'article' as const,
      publishTime: event.startDate,
      tags: ['gaming tournament', 'esports', 'gaming event', 'competition'],
      metadata: {
        startDate: event.startDate,
        endDate: event.endDate,
        location: event.location,
        participants: event.participants,
        prize: event.prize
      }
    };
  }

  // Gaming news article social optimization
  static generateNewsCard(article: {
    headline: string;
    summary: string;
    author: string;
    publishDate: string;
    category: string;
    tags: string[];
  }) {
    return {
      title: `${article.headline} - Gaming News`,
      description: article.summary,
      image: `/images/news/${article.headline.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-')}.jpg`,
      type: 'article' as const,
      author: article.author,
      publishTime: article.publishDate,
      tags: ['gaming news', article.category.toLowerCase(), ...article.tags]
    };
  }

  // Generate comprehensive social media package
  static generateCompletePackage(content: any, type: 'team' | 'feature' | 'news' | 'event' | 'platform') {
    let socialCard;
    
    switch (type) {
      case 'team':
        socialCard = this.generateTeamSocialCard(content);
        break;
      case 'feature':
        socialCard = this.generateGamingPlatformCard(content);
        break;
      case 'news':
        socialCard = this.generateNewsCard(content);
        break;
      case 'event':
        socialCard = this.generateEventSocialCard(content);
        break;
      default:
        socialCard = this.generateGamingPlatformCard(content);
    }

    return {
      socialTags: this.generateSocialTags({
        title: socialCard.title,
        description: socialCard.description,
        image: socialCard.image,
        url: `https://gamerstag.com/${type}/${content.slug || content.id}`,
        type: socialCard.type,
        author: socialCard.author,
        publishTime: socialCard.publishTime,
        tags: socialCard.tags
      }),
      richSnippets: this.generateRichSnippets({
        title: socialCard.title,
        category: 'Gaming',
        rating: content.rating,
        reviews: content.reviews,
        price: content.price || '0',
        availability: 'InStock'
      }),
      images: this.optimizeGamingImages({
        primary: socialCard.image,
        thumbnail: socialCard.image.replace('.jpg', '-thumb.jpg'),
        banner: socialCard.image.replace('.jpg', '-banner.jpg')
      })
    };
  }
}