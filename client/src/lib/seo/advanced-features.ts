// Advanced SEO features for enhanced search visibility
export class AdvancedSEOFeatures {
  
  // Generate FAQ structured data for better SERP features
  static generateFAQSchema(faqs: Array<{question: string; answer: string}>) {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
  }

  // Generate HowTo structured data for feature tutorials
  static generateHowToSchema(title: string, steps: Array<{name: string; text: string}>) {
    return {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": title,
      "step": steps.map((step, index) => ({
        "@type": "HowToStep",
        "position": index + 1,
        "name": step.name,
        "text": step.text
      }))
    };
  }

  // Generate Review/Rating schema for testimonials
  static generateReviewSchema(reviews: Array<{author: string; rating: number; text: string; date?: string}>) {
    return {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "GAMERS TAG Gaming Platform",
      "review": reviews.map(review => ({
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": review.author
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": review.rating,
          "bestRating": 5
        },
        "reviewBody": review.text,
        "datePublished": review.date
      })),
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length,
        "reviewCount": reviews.length,
        "bestRating": 5
      }
    };
  }

  // Generate Video structured data for gaming content
  static generateVideoSchema(video: {
    name: string;
    description: string;
    thumbnailUrl: string;
    uploadDate: string;
    duration?: string;
  }) {
    return {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": video.name,
      "description": video.description,
      "thumbnailUrl": video.thumbnailUrl,
      "uploadDate": video.uploadDate,
      "duration": video.duration,
      "publisher": {
        "@type": "Organization",
        "name": "GAMERS TAG"
      }
    };
  }

  // Generate Event schema for tournaments/gaming events
  static generateEventSchema(event: {
    name: string;
    startDate: string;
    endDate?: string;
    location?: string;
    description: string;
    organizer?: string;
  }) {
    return {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": event.name,
      "startDate": event.startDate,
      "endDate": event.endDate,
      "location": event.location ? {
        "@type": "Place",
        "name": event.location
      } : {
        "@type": "VirtualLocation",
        "url": "https://gamerstag.com"
      },
      "description": event.description,
      "organizer": {
        "@type": "Organization",
        "name": event.organizer || "GAMERS TAG"
      }
    };
  }

  // Generate Software Application schema for gaming features
  static generateSoftwareSchema(feature: {
    name: string;
    description: string;
    category: string;
    operatingSystem?: string[];
  }) {
    return {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": feature.name,
      "description": feature.description,
      "applicationCategory": feature.category,
      "operatingSystem": feature.operatingSystem || ["Web", "Mobile", "Desktop"],
      "publisher": {
        "@type": "Organization",
        "name": "GAMERS TAG"
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    };
  }

  // Generate article schema for news/blog posts
  static generateArticleSchema(article: {
    headline: string;
    description: string;
    author: string;
    datePublished: string;
    dateModified?: string;
    image?: string;
    category?: string;
  }) {
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": article.headline,
      "description": article.description,
      "image": article.image,
      "author": {
        "@type": "Person",
        "name": article.author
      },
      "publisher": {
        "@type": "Organization",
        "name": "GAMERS TAG",
        "logo": {
          "@type": "ImageObject",
          "url": "https://gamerstag.com/logo.png"
        }
      },
      "datePublished": article.datePublished,
      "dateModified": article.dateModified || article.datePublished,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://gamerstag.com"
      }
    };
  }

  // Generate local business schema for company info
  static generateLocalBusinessSchema() {
    return {
      "@context": "https://schema.org",
      "@type": "TechnologyCompany",
      "name": "GAMERS TAG",
      "description": "Leading gaming technology company developing innovative esports platforms",
      "url": "https://gamerstag.com",
      "logo": "https://gamerstag.com/logo.png",
      "foundingDate": "2024",
      "founders": [
        {
          "@type": "Person",
          "name": "Joshua J Kanatt"
        }
      ],
      "employee": [
        {
          "@type": "Person",
          "name": "Joshua J Kanatt",
          "jobTitle": "Founder & CEO"
        },
        {
          "@type": "Person", 
          "name": "Hemanth Joseph",
          "jobTitle": "Co-Founder & CTO"
        }
      ],
      "industry": "Gaming Technology",
      "numberOfEmployees": "10-50",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "email": "contact@gamerstag.com"
      }
    };
  }

  // SEO-friendly URL generation with gaming keywords
  static generateGameFriendlySlug(title: string, category?: string): string {
    const gameKeywords = [
      'gaming', 'esports', 'tournament', 'pro', 'competitive',
      'multiplayer', 'online', 'platform', 'community', 'team'
    ];
    
    let slug = title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');

    // Add category prefix for better SEO
    if (category) {
      const categorySlug = category.toLowerCase().replace(/[^\w]/g, '-');
      slug = `${categorySlug}-${slug}`;
    }

    return slug.substring(0, 60);
  }

  // Meta description optimization for gaming content
  static optimizeMetaDescription(content: string, keywords: string[] = []): string {
    const gameTerms = [
      'gaming', 'esports', 'gamers', 'tournament', 'competitive',
      'platform', 'community', 'professional gaming'
    ];

    let description = content.substring(0, 140);
    
    // Ensure gaming relevance
    const hasGameTerm = gameTerms.some(term => 
      description.toLowerCase().includes(term)
    );
    
    if (!hasGameTerm && keywords.length > 0) {
      const gameKeyword = keywords.find(k => 
        gameTerms.some(term => k.toLowerCase().includes(term))
      );
      if (gameKeyword) {
        description = `${gameKeyword} - ${description}`;
      }
    }

    return description.substring(0, 160);
  }

  // Generate gaming-specific keywords
  static generateGamingKeywords(baseKeywords: string[]): string[] {
    const gamingModifiers = [
      'gaming', 'esports', 'pro gaming', 'competitive gaming',
      'gaming platform', 'esports platform', 'gaming community',
      'gaming technology', 'esports technology', 'gaming app',
      'gaming software', 'esports tools', 'gaming ecosystem'
    ];

    const expandedKeywords = [...baseKeywords];
    
    baseKeywords.forEach(keyword => {
      gamingModifiers.forEach(modifier => {
        if (!keyword.toLowerCase().includes('gaming') && 
            !keyword.toLowerCase().includes('esports')) {
          expandedKeywords.push(`${modifier} ${keyword}`);
          expandedKeywords.push(`${keyword} ${modifier}`);
        }
      });
    });

    const uniqueKeywords: string[] = [];
    expandedKeywords.forEach(keyword => {
      if (!uniqueKeywords.includes(keyword)) {
        uniqueKeywords.push(keyword);
      }
    });
    return uniqueKeywords.slice(0, 20);
  }

  // Image SEO optimization
  static generateImageSEO(alt: string, title?: string) {
    const gamingContext = [
      'gaming', 'esports', 'gamers tag', 'professional gaming',
      'gaming platform', 'esports community'
    ];

    const optimizedAlt = alt.includes('gaming') || alt.includes('esports') 
      ? alt 
      : `${alt} - GAMERS TAG gaming platform`;

    return {
      alt: optimizedAlt,
      title: title || optimizedAlt,
      loading: 'lazy' as const,
      decoding: 'async' as const
    };
  }
}