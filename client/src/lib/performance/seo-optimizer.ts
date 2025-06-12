// SEO Performance Optimizer
// Comprehensive SEO and performance optimization utilities

interface SEOMetrics {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage?: string;
  structuredData?: object;
}

export class SEOOptimizer {
  private static instance: SEOOptimizer;
  
  public static getInstance(): SEOOptimizer {
    if (!SEOOptimizer.instance) {
      SEOOptimizer.instance = new SEOOptimizer();
    }
    return SEOOptimizer.instance;
  }

  // Preload critical resources
  preloadCriticalResources() {
    const criticalResources = [
      { href: '/fonts/orbitron.woff2', as: 'font', type: 'font/woff2' },
      { href: '/fonts/space-grotesk.woff2', as: 'font', type: 'font/woff2' },
      { href: '/logo.svg', as: 'image' },
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      if (resource.type) link.type = resource.type;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }

  // Generate comprehensive meta tags
  generateMetaTags(seo: SEOMetrics): string {
    return `
      <!-- Primary Meta Tags -->
      <title>${seo.title}</title>
      <meta name="title" content="${seo.title}">
      <meta name="description" content="${seo.description}">
      <meta name="keywords" content="${seo.keywords.join(', ')}">
      <link rel="canonical" href="${seo.canonicalUrl}">
      
      <!-- Open Graph / Facebook -->
      <meta property="og:type" content="website">
      <meta property="og:url" content="${seo.canonicalUrl}">
      <meta property="og:title" content="${seo.title}">
      <meta property="og:description" content="${seo.description}">
      ${seo.ogImage ? `<meta property="og:image" content="${seo.ogImage}">` : ''}
      <meta property="og:site_name" content="GAMERS TAG">
      
      <!-- Twitter -->
      <meta property="twitter:card" content="summary_large_image">
      <meta property="twitter:url" content="${seo.canonicalUrl}">
      <meta property="twitter:title" content="${seo.title}">
      <meta property="twitter:description" content="${seo.description}">
      ${seo.ogImage ? `<meta property="twitter:image" content="${seo.ogImage}">` : ''}
      
      <!-- Additional SEO -->
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
      <meta name="theme-color" content="#E5042F">
      <meta name="msapplication-TileColor" content="#E5042F">
    `;
  }

  // Optimize images for better CLS
  generateOptimizedImageProps(src: string, alt: string, width: number, height: number) {
    return {
      src,
      alt,
      width,
      height,
      loading: 'lazy' as const,
      decoding: 'async' as const,
      style: {
        aspectRatio: `${width}/${height}`,
        objectFit: 'cover' as const,
      }
    };
  }

  // Critical CSS injection
  injectCriticalCSS() {
    const criticalCSS = `
      /* Critical above-the-fold styles */
      html { scroll-behavior: smooth; }
      body { 
        margin: 0; 
        font-family: 'Space Grotesk', sans-serif; 
        background: #0A0A0A; 
        color: #FFFFFF;
        overflow-x: hidden;
      }
      
      /* Prevent layout shift */
      .hero-section {
        min-height: 100vh;
        position: relative;
      }
      
      .navigation {
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 1000;
      }
      
      /* Font display optimization */
      @font-face {
        font-family: 'Orbitron';
        font-display: swap;
      }
      
      @font-face {
        font-family: 'Space Grotesk';
        font-display: swap;
      }
    `;

    const style = document.createElement('style');
    style.textContent = criticalCSS;
    document.head.appendChild(style);
  }

  // Lazy load non-critical components
  async lazyLoadComponent<T>(componentLoader: () => Promise<T>): Promise<T> {
    // Use requestIdleCallback for better performance
    return new Promise((resolve) => {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(async () => {
          const component = await componentLoader();
          resolve(component);
        });
      } else {
        setTimeout(async () => {
          const component = await componentLoader();
          resolve(component);
        }, 1);
      }
    });
  }

  // Optimize Core Web Vitals
  optimizeCoreWebVitals() {
    // Reduce CLS by reserving space for dynamic content
    const style = document.createElement('style');
    style.textContent = `
      .skeleton-loader {
        background: linear-gradient(90deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%);
        background-size: 200% 100%;
        animation: loading 1.5s infinite;
      }
      
      @keyframes loading {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }
      
      /* Prevent layout shifts */
      .dynamic-content {
        min-height: 200px;
        transition: height 0.3s ease;
      }
      
      .image-container {
        position: relative;
        overflow: hidden;
      }
      
      .image-container::before {
        content: '';
        display: block;
        padding-bottom: 56.25%; /* 16:9 aspect ratio */
      }
      
      .image-container img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    `;
    document.head.appendChild(style);
  }

  // Generate structured data for SEO
  generateStructuredData(pageType: string, data: any) {
    const baseOrganization = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GAMERS TAG",
      "alternateName": "GT",
      "url": "https://gamerstag.com",
      "logo": "https://gamerstag.com/logo.svg",
      "description": "The world's first gaming super app connecting gamers, esports professionals, and gaming companies.",
      "foundingDate": "2023",
      "sameAs": [
        "https://linkedin.com/company/gamerstag",
        "https://twitter.com/gamerstag",
        "https://instagram.com/gamerstag"
      ]
    };

    const schemas: Record<string, any> = {
      homepage: [
        baseOrganization,
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "GAMERS TAG - Gaming Super App",
          "url": "https://gamerstag.com",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://gamerstag.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }
      ],
      article: {
        "@context": "https://schema.org",
        "@type": "Article",
        ...data
      },
      team: {
        "@context": "https://schema.org",
        "@type": "Person",
        ...data
      }
    };

    return schemas[pageType] || baseOrganization;
  }
}

// Performance monitoring
export const performanceOptimizer = SEOOptimizer.getInstance();