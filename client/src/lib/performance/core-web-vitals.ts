import { useEffect } from 'react';

// Core Web Vitals monitoring and optimization
export interface WebVitalsMetrics {
  CLS: number;  // Cumulative Layout Shift
  FID: number;  // First Input Delay
  FCP: number;  // First Contentful Paint
  LCP: number;  // Largest Contentful Paint
  TTFB: number; // Time to First Byte
}

// Type definitions for performance entries
interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
}

declare global {
  function gtag(...args: any[]): void;
}

export class WebVitalsMonitor {
  private static metrics: Partial<WebVitalsMetrics> = {};
  
  // Initialize performance monitoring
  static init() {
    if (typeof window === 'undefined') return;
    
    // Monitor Largest Contentful Paint
    this.observeLCP();
    
    // Monitor First Input Delay
    this.observeFID();
    
    // Monitor Cumulative Layout Shift
    this.observeCLS();
    
    // Monitor First Contentful Paint
    this.observeFCP();
    
    // Monitor Time to First Byte
    this.observeTTFB();
  }
  
  private static observeLCP() {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      this.metrics.LCP = lastEntry.startTime;
      this.sendMetric('LCP', lastEntry.startTime);
    });
    
    observer.observe({ entryTypes: ['largest-contentful-paint'] });
  }
  
  private static observeFID() {
    const observer = new PerformanceObserver((list) => {
      const firstInput = list.getEntries()[0] as FirstInputEntry;
      this.metrics.FID = firstInput.processingStart - firstInput.startTime;
      this.sendMetric('FID', this.metrics.FID);
    });
    
    observer.observe({ entryTypes: ['first-input'] });
  }
  
  private static observeCLS() {
    let clsValue = 0;
    let clsEntries: LayoutShiftEntry[] = [];
    
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries() as LayoutShiftEntry[]) {
        if (!entry.hadRecentInput) {
          clsEntries.push(entry);
          clsValue += entry.value;
        }
      }
      
      this.metrics.CLS = clsValue;
      this.sendMetric('CLS', clsValue);
    });
    
    observer.observe({ entryTypes: ['layout-shift'] });
  }
  
  private static observeFCP() {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      for (const entry of entries) {
        if (entry.name === 'first-contentful-paint') {
          this.metrics.FCP = entry.startTime;
          this.sendMetric('FCP', entry.startTime);
        }
      }
    });
    
    observer.observe({ entryTypes: ['paint'] });
  }
  
  private static observeTTFB() {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      this.metrics.TTFB = navigation.responseStart - navigation.requestStart;
      this.sendMetric('TTFB', this.metrics.TTFB);
    }
  }
  
  private static sendMetric(name: string, value: number) {
    // Send to analytics
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', name, {
        value: Math.round(value),
        event_category: 'Web Vitals',
        non_interaction: true,
      });
    }
    
    // Store locally for debugging
    console.log(`${name}: ${value}`);
  }
  
  // Get current metrics
  static getMetrics(): Partial<WebVitalsMetrics> {
    return { ...this.metrics };
  }
  
  // Check if metrics meet recommended thresholds
  static checkThresholds(): Record<string, boolean> {
    return {
      LCP: (this.metrics.LCP || 0) <= 2500,  // Good: ≤ 2.5s
      FID: (this.metrics.FID || 0) <= 100,   // Good: ≤ 100ms
      CLS: (this.metrics.CLS || 0) <= 0.1,   // Good: ≤ 0.1
      FCP: (this.metrics.FCP || 0) <= 1800,  // Good: ≤ 1.8s
      TTFB: (this.metrics.TTFB || 0) <= 600, // Good: ≤ 600ms
    };
  }
}

// Performance optimization utilities
export class PerformanceOptimizer {
  // Lazy load images with intersection observer
  static observeImages() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || img.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
          }
        });
      }, {
        rootMargin: '50px 0px',
        threshold: 0.01
      });

      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  }
  
  // Preload critical resources
  static preloadCriticalResources() {
    const criticalResources = [
      '/fonts/inter-var.woff2',
      '/images/hero-bg.webp',
      '/css/critical.css'
    ];
    
    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      
      if (resource.includes('.woff2')) {
        link.as = 'font';
        link.type = 'font/woff2';
        link.crossOrigin = 'anonymous';
      } else if (resource.includes('.webp')) {
        link.as = 'image';
      } else if (resource.includes('.css')) {
        link.as = 'style';
      }
      
      document.head.appendChild(link);
    });
  }
  
  // Implement service worker for caching
  static registerServiceWorker() {
    if ('serviceWorker' in navigator) {
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
  }
  
  // Optimize resource loading
  static optimizeResourceLoading() {
    // Preconnect to external domains
    const preconnectDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://cdn.sanity.io',
      'https://www.google-analytics.com'
    ];
    
    preconnectDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      if (domain.includes('fonts.gstatic.com')) {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });
  }
}

// React hook for performance monitoring
export function usePerformanceMonitoring() {
  useEffect(() => {
    WebVitalsMonitor.init();
    PerformanceOptimizer.observeImages();
    PerformanceOptimizer.preloadCriticalResources();
    PerformanceOptimizer.optimizeResourceLoading();
  }, []);
  
  return {
    getMetrics: WebVitalsMonitor.getMetrics,
    checkThresholds: WebVitalsMonitor.checkThresholds
  };
}