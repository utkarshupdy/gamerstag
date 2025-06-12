// Technical SEO optimizations for gaming platform
export class TechnicalSEO {
  
  // Generate hreflang tags for international gaming markets
  static generateHreflangTags(currentLang: string = 'en', alternateVersions: Array<{lang: string; url: string}> = []) {
    const defaultVersions = [
      { lang: 'en', url: 'https://gamerstag.com' },
      { lang: 'es', url: 'https://es.gamerstag.com' },
      { lang: 'pt', url: 'https://pt.gamerstag.com' },
      { lang: 'fr', url: 'https://fr.gamerstag.com' },
      { lang: 'de', url: 'https://de.gamerstag.com' },
      { lang: 'ja', url: 'https://ja.gamerstag.com' },
      { lang: 'ko', url: 'https://ko.gamerstag.com' },
      { lang: 'zh', url: 'https://zh.gamerstag.com' },
      { lang: 'x-default', url: 'https://gamerstag.com' }
    ];

    const versions = alternateVersions.length > 0 ? alternateVersions : defaultVersions;
    
    return versions.map(version => ({
      rel: 'alternate',
      hreflang: version.lang,
      href: version.url
    }));
  }

  // Gaming platform security headers
  static generateSecurityHeaders() {
    return {
      'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google-analytics.com https://cdn.sanity.io; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://api.gamerstag.com https://cdn.sanity.io; frame-src 'self' https://www.youtube.com https://player.twitch.tv;",
      'X-Frame-Options': 'SAMEORIGIN',
      'X-Content-Type-Options': 'nosniff',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
    };
  }

  // PWA manifest for gaming app
  static generatePWAManifest() {
    return {
      name: 'GAMERS TAG - Gaming Platform',
      short_name: 'GAMERS TAG',
      description: 'The ultimate gaming ecosystem super app for esports professionals',
      start_url: '/',
      display: 'standalone',
      background_color: '#000000',
      theme_color: '#E5042F',
      orientation: 'any',
      categories: ['games', 'entertainment', 'social'],
      lang: 'en',
      icons: [
        {
          src: '/icons/icon-72x72.png',
          sizes: '72x72',
          type: 'image/png',
          purpose: 'maskable any'
        },
        {
          src: '/icons/icon-96x96.png',
          sizes: '96x96',
          type: 'image/png',
          purpose: 'maskable any'
        },
        {
          src: '/icons/icon-128x128.png',
          sizes: '128x128',
          type: 'image/png',
          purpose: 'maskable any'
        },
        {
          src: '/icons/icon-144x144.png',
          sizes: '144x144',
          type: 'image/png',
          purpose: 'maskable any'
        },
        {
          src: '/icons/icon-152x152.png',
          sizes: '152x152',
          type: 'image/png',
          purpose: 'maskable any'
        },
        {
          src: '/icons/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'maskable any'
        },
        {
          src: '/icons/icon-384x384.png',
          sizes: '384x384',
          type: 'image/png',
          purpose: 'maskable any'
        },
        {
          src: '/icons/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable any'
        }
      ],
      screenshots: [
        {
          src: '/screenshots/desktop-home.png',
          sizes: '1280x720',
          type: 'image/png',
          platform: 'wide',
          label: 'GAMERS TAG Home - Desktop'
        },
        {
          src: '/screenshots/mobile-features.png',
          sizes: '390x844',
          type: 'image/png',
          platform: 'narrow',
          label: 'Gaming Features - Mobile'
        }
      ]
    };
  }

  // Critical CSS extraction for gaming pages
  static generateCriticalCSS(pageType: 'home' | 'team' | 'features' | 'about') {
    const baseCritical = `
      /* Critical gaming platform styles */
      body { margin: 0; padding: 0; font-family: 'Inter', sans-serif; background: #000; color: #fff; }
      .bg-black { background-color: #000000; }
      .text-white { color: #ffffff; }
      .text-\\[\\#E5042F\\] { color: #E5042F; }
      .border-\\[\\#E5042F\\] { border-color: #E5042F; }
      .font-orbitron { font-family: 'Orbitron', monospace; }
      .container { max-width: 1200px; margin: 0 auto; padding: 0 1rem; }
      .btn-primary { background: #E5042F; color: white; border: none; padding: 0.75rem 1.5rem; border-radius: 0.5rem; }
    `;

    const pageSpecific = {
      home: `
        .hero-section { min-height: 100vh; position: relative; overflow: hidden; }
        .hero-title { font-size: 3rem; font-weight: bold; line-height: 1.2; }
        .hero-description { font-size: 1.25rem; margin: 1rem 0; }
        .feature-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
      `,
      team: `
        .team-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; }
        .team-card { background: rgba(255,255,255,0.05); border: 1px solid rgba(229,4,47,0.3); border-radius: 1rem; padding: 1.5rem; }
        .member-avatar { width: 120px; height: 120px; border-radius: 50%; object-fit: cover; }
      `,
      features: `
        .features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 2rem; }
        .feature-card { background: linear-gradient(135deg, rgba(229,4,47,0.1), rgba(0,0,0,0.8)); border-radius: 1rem; }
        .feature-icon { width: 64px; height: 64px; color: #E5042F; }
      `,
      about: `
        .about-section { padding: 4rem 0; }
        .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem; }
        .stat-card { text-align: center; padding: 2rem; }
      `
    };

    return baseCritical + (pageSpecific[pageType] || '');
  }

  // Service Worker for gaming platform caching
  static generateServiceWorkerConfig() {
    return {
      cacheFirst: [
        '/images/logo.png',
        '/images/team/',
        '/images/features/',
        '/fonts/inter-var.woff2',
        '/fonts/orbitron.woff2'
      ],
      networkFirst: [
        '/api/',
        '/sitemap.xml',
        '/robots.txt'
      ],
      staleWhileRevalidate: [
        '/css/',
        '/js/',
        '/'
      ],
      runtime: {
        urlPattern: /^https:\/\/cdn\.sanity\.io\//,
        handler: 'CacheFirst',
        options: {
          cacheName: 'sanity-images',
          expiration: {
            maxEntries: 100,
            maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
          }
        }
      }
    };
  }

  // Gaming-optimized image formats and compression
  static generateImageOptimizationConfig() {
    return {
      formats: {
        webp: {
          quality: 85,
          effort: 6,
          lossless: false
        },
        avif: {
          quality: 75,
          effort: 9,
          lossless: false
        },
        jpeg: {
          quality: 85,
          progressive: true,
          mozjpeg: true
        },
        png: {
          compressionLevel: 9,
          palette: true
        }
      },
      responsive: {
        breakpoints: [320, 640, 768, 1024, 1280, 1920],
        sizes: {
          hero: '(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px',
          team: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw',
          features: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px',
          thumbnail: '(max-width: 768px) 100px, 150px'
        }
      },
      lazy: {
        threshold: 0.1,
        rootMargin: '50px 0px',
        placeholder: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'
      }
    };
  }

  // Gaming platform analytics configuration
  static generateAnalyticsConfig() {
    return {
      googleAnalytics: {
        measurementId: 'G-XXXXXXXXXX',
        config: {
          custom_map: {
            custom_parameter_1: 'gaming_action',
            custom_parameter_2: 'esports_engagement'
          },
          send_page_view: false
        }
      },
      customEvents: {
        gaming: [
          'feature_view',
          'team_member_view',
          'tournament_interest',
          'platform_signup',
          'gaming_profile_create',
          'esports_team_join'
        ],
        engagement: [
          'video_play',
          'download_start',
          'contact_form_submit',
          'newsletter_signup',
          'social_share'
        ]
      },
      ecommerce: {
        currency: 'USD',
        items: [
          'premium_features',
          'tournament_entry',
          'coaching_session',
          'team_management_tools'
        ]
      }
    };
  }

  // URL canonicalization for gaming content
  static generateCanonicalRules() {
    return {
      rules: [
        {
          pattern: '/team/(.+)',
          canonical: 'https://gamerstag.com/team/$1',
          noIndex: false
        },
        {
          pattern: '/features/(.+)',
          canonical: 'https://gamerstag.com/features/$1',
          noIndex: false
        },
        {
          pattern: '/news/(.+)',
          canonical: 'https://gamerstag.com/news/$1',
          noIndex: false
        },
        {
          pattern: '/tournaments/(.+)',
          canonical: 'https://gamerstag.com/tournaments/$1',
          noIndex: false
        },
        {
          pattern: '(.+)/$',
          canonical: 'https://gamerstag.com$1',
          redirect: 301
        },
        {
          pattern: '(.+)\\?utm_(.+)',
          canonical: 'https://gamerstag.com$1',
          noIndex: false
        }
      ],
      defaultCanonical: 'https://gamerstag.com'
    };
  }

  // Gaming platform XML sitemap index
  static generateSitemapIndex() {
    return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://gamerstag.com/sitemaps/main.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://gamerstag.com/sitemaps/team.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://gamerstag.com/sitemaps/features.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://gamerstag.com/sitemaps/news.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://gamerstag.com/sitemaps/tournaments.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://gamerstag.com/sitemaps/images.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
</sitemapindex>`;
  }

  // Comprehensive technical SEO audit
  static auditTechnicalSEO(pageData: {
    url: string;
    title: string;
    description: string;
    headers: Record<string, string>;
    loadTime: number;
    imageCount: number;
    linkCount: number;
  }) {
    const issues: string[] = [];
    const warnings: string[] = [];
    const recommendations: string[] = [];
    
    // Title length check
    if (pageData.title.length < 30) {
      warnings.push('Title too short - consider expanding with gaming keywords');
    } else if (pageData.title.length > 60) {
      issues.push('Title too long - may be truncated in search results');
    }
    
    // Description check
    if (pageData.description.length < 120) {
      warnings.push('Meta description could be longer for better SERP presence');
    } else if (pageData.description.length > 160) {
      issues.push('Meta description too long - will be truncated');
    }
    
    // Load time check
    if (pageData.loadTime > 3000) {
      issues.push('Page load time exceeds 3 seconds - optimize for gaming audience');
    } else if (pageData.loadTime > 1500) {
      warnings.push('Page load time could be improved for better user experience');
    }
    
    // Image optimization
    if (pageData.imageCount > 20) {
      recommendations.push('Consider implementing lazy loading for images');
    }
    
    // Link structure
    if (pageData.linkCount < 5) {
      recommendations.push('Add more internal links to improve site navigation');
    } else if (pageData.linkCount > 100) {
      warnings.push('High link count - ensure all links add value');
    }
    
    // Security headers check
    const requiredHeaders = ['x-frame-options', 'x-content-type-options'];
    requiredHeaders.forEach(header => {
      if (!pageData.headers[header.toLowerCase()]) {
        issues.push(`Missing security header: ${header}`);
      }
    });
    
    const score = Math.max(0, 100 - (issues.length * 15) - (warnings.length * 5));
    
    return {
      score,
      issues,
      warnings,
      recommendations,
      status: score >= 90 ? 'excellent' : score >= 70 ? 'good' : score >= 50 ? 'needs_improvement' : 'poor'
    };
  }
}