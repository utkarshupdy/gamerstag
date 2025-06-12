// Comprehensive SEO optimization utilities
export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage: string;
  twitterCard: 'summary' | 'summary_large_image';
  structuredData?: object;
  breadcrumbs?: Array<{ name: string; url: string }>;
  author?: string;
  publishDate?: string;
  modifiedDate?: string;
  category?: string;
  lang?: string;
}

export class SEOManager {
  private static instance: SEOManager;
  private metaTags: Map<string, HTMLMetaElement> = new Map();
  private linkTags: Map<string, HTMLLinkElement> = new Map();

  static getInstance(): SEOManager {
    if (!SEOManager.instance) {
      SEOManager.instance = new SEOManager();
    }
    return SEOManager.instance;
  }

  // Update page SEO with comprehensive optimization
  updatePageSEO(config: SEOConfig): void {
    this.setTitle(config.title);
    this.setMetaDescription(config.description);
    this.setKeywords(config.keywords);
    this.setCanonicalUrl(config.canonicalUrl);
    this.setOpenGraphTags(config);
    this.setTwitterCardTags(config);
    this.setLanguage(config.lang || 'en');
    
    if (config.structuredData) {
      this.addStructuredData(config.structuredData);
    }
    
    if (config.breadcrumbs) {
      this.addBreadcrumbSchema(config.breadcrumbs);
    }
  }

  private setTitle(title: string): void {
    document.title = `${title} | GAMERS TAG`;
  }

  private setMetaDescription(description: string): void {
    this.updateOrCreateMeta('description', description);
  }

  private setKeywords(keywords: string[]): void {
    this.updateOrCreateMeta('keywords', keywords.join(', '));
  }

  private setCanonicalUrl(url: string): void {
    this.updateOrCreateLink('canonical', url);
  }

  private setLanguage(lang: string): void {
    document.documentElement.lang = lang;
    this.updateOrCreateMeta('language', lang);
  }

  private setOpenGraphTags(config: SEOConfig): void {
    const ogTags = {
      'og:title': config.title,
      'og:description': config.description,
      'og:url': config.canonicalUrl,
      'og:image': config.ogImage,
      'og:image:alt': `${config.title} - GAMERS TAG`,
      'og:type': 'website',
      'og:site_name': 'GAMERS TAG',
      'og:locale': 'en_US'
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      this.updateOrCreateMetaProperty(property, content);
    });
  }

  private setTwitterCardTags(config: SEOConfig): void {
    const twitterTags = {
      'twitter:card': config.twitterCard,
      'twitter:site': '@Gamerstag_GT',
      'twitter:creator': '@Gamerstag_GT',
      'twitter:title': config.title,
      'twitter:description': config.description,
      'twitter:image': config.ogImage
    };

    Object.entries(twitterTags).forEach(([name, content]) => {
      this.updateOrCreateMeta(name, content);
    });
  }

  private updateOrCreateMeta(name: string, content: string): void {
    let meta = this.metaTags.get(name);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', name);
      document.head.appendChild(meta);
      this.metaTags.set(name, meta);
    }
    meta.setAttribute('content', content);
  }

  private updateOrCreateMetaProperty(property: string, content: string): void {
    let meta = this.metaTags.get(property);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('property', property);
      document.head.appendChild(meta);
      this.metaTags.set(property, meta);
    }
    meta.setAttribute('content', content);
  }

  private updateOrCreateLink(rel: string, href: string): void {
    let link = this.linkTags.get(rel);
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', rel);
      document.head.appendChild(link);
      this.linkTags.set(rel, link);
    }
    link.setAttribute('href', href);
  }

  private addStructuredData(data: object): void {
    const existingScript = document.querySelector('script[type="application/ld+json"][data-seo="dynamic"]');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-seo', 'dynamic');
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }

  private addBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>): void {
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": `${window.location.origin}${item.url}`
      }))
    };

    this.addStructuredData(breadcrumbSchema);
  }
}

// Core Web Vitals optimization utilities
export class PerformanceOptimizer {
  private static readonly CRITICAL_RESOURCE_HINTS = [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
    { rel: 'dns-prefetch', href: 'https://cdn.sanity.io' },
    { rel: 'dns-prefetch', href: 'https://api.gamerstag.com' }
  ];

  static initializePerformanceOptimizations(): void {
    this.addResourceHints();
    this.setupIntersectionObserver();
    this.optimizeImages();
    this.implementCriticalCSS();
  }

  private static addResourceHints(): void {
    this.CRITICAL_RESOURCE_HINTS.forEach(hint => {
      const link = document.createElement('link');
      Object.entries(hint).forEach(([key, value]) => {
        link.setAttribute(key, value);
      });
      document.head.appendChild(link);
    });
  }

  private static setupIntersectionObserver(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          if (target.dataset.src) {
            const img = target as HTMLImageElement;
            img.src = target.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(target);
          }
        }
      });
    }, { rootMargin: '50px' });

    // Observe all lazy-loaded images
    document.querySelectorAll('img[data-src]').forEach(img => {
      observer.observe(img);
    });
  }

  private static optimizeImages(): void {
    const images = document.querySelectorAll('img:not([loading])');
    images.forEach((img, index) => {
      if (index < 3) {
        img.setAttribute('loading', 'eager');
        img.setAttribute('fetchpriority', 'high');
      } else {
        img.setAttribute('loading', 'lazy');
      }
    });
  }

  private static implementCriticalCSS(): void {
    const criticalCSS = `
      /* Critical above-the-fold styles */
      .hero-container { min-height: 100vh; }
      .nav-bar { position: fixed; top: 0; width: 100%; z-index: 9999; }
      .primary-text { color: #E5042F; }
      .font-orbitron { font-family: 'Orbitron', monospace; }
      .font-jost { font-family: 'Jost', sans-serif; }
      .bg-gradient-hero { background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%); }
    `;

    const style = document.createElement('style');
    style.textContent = criticalCSS;
    style.setAttribute('data-critical', 'true');
    document.head.insertBefore(style, document.head.firstChild);
  }
}

// URL optimization for SEO-friendly structure
export class URLOptimizer {
  private static readonly SEO_FRIENDLY_ROUTES = new Map([
    ['/features/pro-gaming-profile', '/gaming-profile'],
    ['/features/gt-jobs', '/esports-jobs'],
    ['/features/gt-connect', '/gaming-community'],
    ['/features/gt-news', '/gaming-news'],
    ['/team/joshua-kanatt', '/founder-ceo'],
    ['/news/:slug', '/gaming-news/:slug']
  ]);

  static generateSEOFriendlyURL(originalUrl: string): string {
    return this.SEO_FRIENDLY_ROUTES.get(originalUrl) || originalUrl;
  }

  static setupURLRedirects(): void {
    // This would be handled by server-side routing
    console.log('URL redirects configured for SEO optimization');
  }
}