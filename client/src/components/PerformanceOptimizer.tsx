import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export function LazyImage({ src, alt, className, width, height, priority = false }: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [imgSrc, setImgSrc] = useState(priority ? src : '');

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setImgSrc(src);
          observer.disconnect();
        }
      },
      { rootMargin: '50px' }
    );

    const element = document.querySelector(`[data-lazy="${src}"]`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [src, priority]);

  const handleLoad = () => setIsLoaded(true);

  return (
    <div className={`relative overflow-hidden ${className}`} data-lazy={src}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 animate-pulse" />
      )}
      {(isInView || priority) && (
        <motion.img
          src={imgSrc}
          alt={alt}
          width={width}
          height={height}
          className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          onLoad={handleLoad}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </div>
  );
}

// Critical CSS inliner for above-the-fold content
export function CriticalCSS() {
  useEffect(() => {
    const criticalStyles = `
      /* Critical above-the-fold styles */
      .hero-section { 
        min-height: 100vh; 
        background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
      }
      .nav-fixed { 
        position: fixed; 
        top: 0; 
        width: 100%; 
        z-index: 1000; 
        background: rgba(0,0,0,0.95);
        backdrop-filter: blur(10px);
      }
      .text-primary { color: #E5042F; }
      .bg-primary { background-color: #E5042F; }
      .font-orbitron { font-family: 'Orbitron', monospace; }
    `;

    const style = document.createElement('style');
    style.textContent = criticalStyles;
    style.setAttribute('data-critical', 'true');
    document.head.insertBefore(style, document.head.firstChild);

    return () => {
      const criticalStyle = document.querySelector('style[data-critical="true"]');
      if (criticalStyle) criticalStyle.remove();
    };
  }, []);

  return null;
}

// Resource preloader for critical assets
export function ResourcePreloader() {
  useEffect(() => {
    const criticalResources = [
      { href: '/fonts/orbitron.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
      { href: '/fonts/jost.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
      { href: '/logo.webp', as: 'image' },
      { href: '/hero-bg.webp', as: 'image' },
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      if (resource.type) link.type = resource.type;
      if (resource.crossorigin) link.crossOrigin = resource.crossorigin;
      link.setAttribute('data-preload', 'true');
      document.head.appendChild(link);
    });

    return () => {
      const preloadLinks = document.querySelectorAll('link[data-preload="true"]');
      preloadLinks.forEach(link => link.remove());
    };
  }, []);

  return null;
}

// Web Vitals monitoring
export function WebVitalsTracker() {
  useEffect(() => {
    // Track Core Web Vitals
    const trackWebVitals = async () => {
      if ('web-vitals' in window) return;

      try {
        const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals');
        
        const sendToAnalytics = (metric: any) => {
          // Send to analytics service
          if (window.gtag) {
            window.gtag('event', metric.name, {
              event_category: 'Web Vitals',
              event_label: metric.id,
              value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
              non_interaction: true,
            });
          }
          
          console.log(`[Web Vitals] ${metric.name}:`, metric.value);
        };

        getCLS(sendToAnalytics);
        getFID(sendToAnalytics);
        getFCP(sendToAnalytics);
        getLCP(sendToAnalytics);
        getTTFB(sendToAnalytics);
      } catch (error) {
        console.warn('Web Vitals tracking not available:', error);
      }
    };

    trackWebVitals();
  }, []);

  return null;
}

// Service Worker registration for caching
export function ServiceWorkerManager() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('SW registered:', registration);
        })
        .catch(error => {
          console.log('SW registration failed:', error);
        });
    }
  }, []);

  return null;
}