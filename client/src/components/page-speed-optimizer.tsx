import { useEffect } from 'react';

interface PageSpeedOptimizerProps {
  enableLazyLoading?: boolean;
  enableImageOptimization?: boolean;
  enableResourceHints?: boolean;
  enableServiceWorker?: boolean;
}

export function PageSpeedOptimizer({
  enableLazyLoading = true,
  enableImageOptimization = true,
  enableResourceHints = true,
  enableServiceWorker = true
}: PageSpeedOptimizerProps) {
  useEffect(() => {
    // Optimize page loading performance
    const optimizePageSpeed = () => {
      // 1. Lazy loading for images and videos
      if (enableLazyLoading && 'IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[data-src], video[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement | HTMLVideoElement;
              if (img.dataset.src) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
              }
            }
          });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
      }

      // 2. Preload critical resources
      if (enableResourceHints) {
        const criticalResources = [
          { href: '/fonts/orbitron-v29-latin-regular.woff2', as: 'font', type: 'font/woff2' },
          { href: '/fonts/jost-v15-latin-regular.woff2', as: 'font', type: 'font/woff2' },
          { href: '/images/hero-bg.webp', as: 'image' },
        ];

        criticalResources.forEach(resource => {
          const existingLink = document.querySelector(`link[href="${resource.href}"]`);
          if (!existingLink) {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = resource.href;
            link.as = resource.as;
            if (resource.type) link.type = resource.type;
            link.crossOrigin = 'anonymous';
            document.head.appendChild(link);
          }
        });

        // DNS prefetch for external domains
        const externalDomains = [
          'https://fonts.googleapis.com',
          'https://fonts.gstatic.com',
          'https://images.unsplash.com',
          'https://api.gamerstag.app'
        ];

        externalDomains.forEach(domain => {
          const existingLink = document.querySelector(`link[href="${domain}"]`);
          if (!existingLink) {
            const link = document.createElement('link');
            link.rel = 'dns-prefetch';
            link.href = domain;
            document.head.appendChild(link);
          }
        });
      }

      // 3. Image optimization
      if (enableImageOptimization) {
        const images = document.querySelectorAll('img:not([data-optimized])');
        images.forEach(img => {
          const image = img as HTMLImageElement;
          
          // Add loading="lazy" for better performance
          if (!image.loading) {
            image.loading = 'lazy';
          }

          // Add decoding="async" for non-blocking image decode
          if (!image.decoding) {
            image.decoding = 'async';
          }

          // Mark as optimized to avoid re-processing
          image.dataset.optimized = 'true';
        });
      }

      // 4. Minimize main thread blocking
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          // Defer non-critical tasks
          const nonCriticalTasks = [
            () => {
              // Initialize analytics if not already done
              if (typeof window.gtag === 'undefined' && !document.querySelector('script[src*="googletagmanager"]')) {
                const script = document.createElement('script');
                script.async = true;
                script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
                document.head.appendChild(script);
              }
            },
            () => {
              // Preconnect to common CDNs
              const cdnDomains = ['https://cdn.jsdelivr.net', 'https://unpkg.com'];
              cdnDomains.forEach(domain => {
                if (!document.querySelector(`link[href="${domain}"]`)) {
                  const link = document.createElement('link');
                  link.rel = 'preconnect';
                  link.href = domain;
                  document.head.appendChild(link);
                }
              });
            }
          ];

          nonCriticalTasks.forEach(task => task());
        });
      }

      // 5. Service Worker for caching (if enabled)
      if (enableServiceWorker && 'serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('/sw.js')
            .then(registration => {
              console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
              console.log('SW registration failed: ', registrationError);
            });
        });
      }
    };

    // Run optimization after DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', optimizePageSpeed);
    } else {
      optimizePageSpeed();
    }

    // Performance monitoring
    if ('performance' in window && 'PerformanceObserver' in window) {
      try {
        // Monitor Largest Contentful Paint (LCP)
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          console.log('LCP:', lastEntry.startTime);
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // Monitor First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach(entry => {
            console.log('FID:', entry.processingStart - entry.startTime);
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Monitor Cumulative Layout Shift (CLS)
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach(entry => {
            if (!entry.hadRecentInput) {
              console.log('CLS:', entry.value);
            }
          });
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        // PerformanceObserver not supported in this browser
      }
    }

    return () => {
      // Cleanup observers if needed
    };
  }, [enableLazyLoading, enableImageOptimization, enableResourceHints, enableServiceWorker]);

  return null;
}

// Critical CSS inlining utility
export function inlineCriticalCSS() {
  const criticalCSS = `
    /* Critical above-the-fold styles */
    :root {
      --brand-red: #E5042F;
      --text-primary: #ffffff;
      --text-secondary: #a3a3a3;
      --bg-primary: #000000;
      --bg-secondary: #171717;
    }
    
    body {
      font-family: 'Jost', sans-serif;
      background: var(--bg-primary);
      color: var(--text-primary);
      margin: 0;
      padding: 0;
    }
    
    .nav-container {
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 50;
      backdrop-filter: blur(10px);
    }
    
    .hero-section {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .loading-spinner {
      width: 40px;
      height: 40px;
      border: 3px solid var(--text-secondary);
      border-top: 3px solid var(--brand-red);
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;

  // Inject critical CSS if not already present
  if (!document.getElementById('critical-css')) {
    const style = document.createElement('style');
    style.id = 'critical-css';
    style.textContent = criticalCSS;
    document.head.insertBefore(style, document.head.firstChild);
  }
}