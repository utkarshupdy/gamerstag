import { useEffect } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

// Advanced Web Vitals tracking and optimization
export function WebVitalsOptimizer() {
  useEffect(() => {
    // Track Core Web Vitals with enhanced reporting
    onCLS((metric) => {
      console.log('CLS:', metric.value);
      // Send to analytics
      if (window.gtag) {
        window.gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'CLS',
          value: Math.round(metric.value * 1000)
        });
      }
    });

    onINP((metric) => {
      console.log('INP:', metric.value);
      if (window.gtag) {
        window.gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'INP',
          value: Math.round(metric.value)
        });
      }
    });

    onFCP((metric) => {
      console.log('FCP:', metric.value);
      if (window.gtag) {
        window.gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'FCP',
          value: Math.round(metric.value)
        });
      }
    });

    onLCP((metric) => {
      console.log('LCP:', metric.value);
      if (window.gtag) {
        window.gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'LCP',
          value: Math.round(metric.value)
        });
      }
    });

    onTTFB((metric) => {
      console.log('TTFB:', metric.value);
      if (window.gtag) {
        window.gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'TTFB',
          value: Math.round(metric.value)
        });
      }
    });
  }, []);

  return null;
}

// Critical CSS injection for above-the-fold content
export function CriticalCSSInjector() {
  useEffect(() => {
    const criticalCSS = `
      /* Critical above-the-fold styles for GAMERS TAG */
      .hero-section { 
        min-height: 100vh; 
        display: flex; 
        align-items: center; 
        justify-content: center;
        background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
      }
      .nav-container { 
        position: fixed; 
        top: 0; 
        width: 100%; 
        z-index: 9999; 
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
      }
      .primary-red { color: #E5042F; }
      .font-orbitron { font-family: 'Orbitron', monospace; }
      .font-jost { font-family: 'Jost', sans-serif; }
      .glassmorphic {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
      .hud-border {
        border: 2px solid #E5042F;
        box-shadow: 0 0 20px rgba(229, 4, 47, 0.3);
      }
      .cyberpunk-glow {
        box-shadow: 0 0 30px rgba(229, 4, 47, 0.5);
        text-shadow: 0 0 10px rgba(229, 4, 47, 0.8);
      }
    `;

    const style = document.createElement('style');
    style.textContent = criticalCSS;
    style.setAttribute('data-critical', 'gamers-tag');
    
    // Insert at the beginning of head for priority
    const existingCritical = document.querySelector('style[data-critical="gamers-tag"]');
    if (!existingCritical) {
      document.head.insertBefore(style, document.head.firstChild);
    }
  }, []);

  return null;
}

// Resource preloader for critical assets
export function ResourcePreloader() {
  useEffect(() => {
    const criticalResources = [
      { href: 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap', as: 'style' },
      { href: 'https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700&display=swap', as: 'style' },
      { href: '/logo.png', as: 'image' },
      { href: '/og-image.webp', as: 'image' }
    ];

    criticalResources.forEach(resource => {
      const existingLink = document.querySelector(`link[href="${resource.href}"]`);
      if (!existingLink) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource.href;
        link.as = resource.as;
        if (resource.as === 'style') {
          link.onload = function() {
            this.onload = null;
            this.rel = 'stylesheet';
          };
        }
        document.head.appendChild(link);
      }
    });

    // Preconnect to external domains
    const preconnectDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://cdn.sanity.io'
    ];

    preconnectDomains.forEach(domain => {
      const existingLink = document.querySelector(`link[href="${domain}"]`);
      if (!existingLink) {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = domain;
        if (domain.includes('gstatic')) {
          link.crossOrigin = 'anonymous';
        }
        document.head.appendChild(link);
      }
    });
  }, []);

  return null;
}

// Lazy image component with optimization
interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export function OptimizedImage({ 
  src, 
  alt, 
  className = '', 
  width, 
  height, 
  priority = false 
}: OptimizedImageProps) {
  useEffect(() => {
    if (priority) {
      // Preload priority images
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    }
  }, [src, priority]);

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
    />
  );
}

// Service Worker for caching optimization
export function ServiceWorkerManager() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered:', registration);
        })
        .catch((error) => {
          console.log('SW registration failed:', error);
        });
    }
  }, []);

  return null;
}

// Layout shift prevention
export function LayoutShiftPreventer() {
  useEffect(() => {
    // Add CSS to prevent layout shifts
    const preventShiftCSS = `
      /* Prevent layout shifts */
      img, video, iframe {
        aspect-ratio: attr(width) / attr(height);
      }
      
      .skeleton-loader {
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 200% 100%;
        animation: loading 1.5s infinite;
      }
      
      @keyframes loading {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }
      
      /* Reserve space for dynamic content */
      .dynamic-content-placeholder {
        min-height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `;

    const style = document.createElement('style');
    style.textContent = preventShiftCSS;
    style.setAttribute('data-layout-shift', 'prevention');
    document.head.appendChild(style);
  }, []);

  return null;
}