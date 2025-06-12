// Performance monitoring utilities for Core Web Vitals and user experience
export interface PerformanceMetrics {
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  fcp?: number; // First Contentful Paint
  ttfb?: number; // Time to First Byte
}

class PerformanceMonitor {
  private metrics: PerformanceMetrics = {};
  private observers: PerformanceObserver[] = [];

  constructor() {
    this.initializeObservers();
  }

  private initializeObservers() {
    // LCP Observer
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          this.metrics.lcp = lastEntry.startTime;
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        this.observers.push(lcpObserver);
      } catch (e) {
        console.warn('LCP observer failed:', e);
      }

      // FID Observer
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            this.metrics.fid = entry.processingStart - entry.startTime;
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
        this.observers.push(fidObserver);
      } catch (e) {
        console.warn('FID observer failed:', e);
      }

      // CLS Observer
      try {
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          this.metrics.cls = clsValue;
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
        this.observers.push(clsObserver);
      } catch (e) {
        console.warn('CLS observer failed:', e);
      }
    }
  }

  getMetrics(): PerformanceMetrics {
    // Get additional timing metrics
    if (performance.timing) {
      const timing = performance.timing;
      this.metrics.ttfb = timing.responseStart - timing.navigationStart;
      this.metrics.fcp = timing.loadEventEnd - timing.navigationStart;
    }

    return { ...this.metrics };
  }

  logMetrics() {
    const metrics = this.getMetrics();
    console.group('Performance Metrics');
    console.log('LCP (Largest Contentful Paint):', metrics.lcp?.toFixed(2), 'ms');
    console.log('FID (First Input Delay):', metrics.fid?.toFixed(2), 'ms');
    console.log('CLS (Cumulative Layout Shift):', metrics.cls?.toFixed(4));
    console.log('FCP (First Contentful Paint):', metrics.fcp?.toFixed(2), 'ms');
    console.log('TTFB (Time to First Byte):', metrics.ttfb?.toFixed(2), 'ms');
    console.groupEnd();

    // Performance scoring
    this.scorePerformance(metrics);
  }

  private scorePerformance(metrics: PerformanceMetrics) {
    const scores = {
      lcp: this.scoreLCP(metrics.lcp),
      fid: this.scoreFID(metrics.fid),
      cls: this.scoreCLS(metrics.cls)
    };

    console.group('Performance Scores');
    console.log('LCP Score:', scores.lcp);
    console.log('FID Score:', scores.fid);
    console.log('CLS Score:', scores.cls);
    console.groupEnd();
  }

  private scoreLCP(lcp?: number): string {
    if (!lcp) return 'N/A';
    if (lcp <= 2500) return 'Good';
    if (lcp <= 4000) return 'Needs Improvement';
    return 'Poor';
  }

  private scoreFID(fid?: number): string {
    if (!fid) return 'N/A';
    if (fid <= 100) return 'Good';
    if (fid <= 300) return 'Needs Improvement';
    return 'Poor';
  }

  private scoreCLS(cls?: number): string {
    if (cls === undefined) return 'N/A';
    if (cls <= 0.1) return 'Good';
    if (cls <= 0.25) return 'Needs Improvement';
    return 'Poor';
  }

  disconnect() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Global performance monitor instance
export const performanceMonitor = new PerformanceMonitor();

// Hook for React components
export function usePerformanceMonitoring() {
  const logCurrentMetrics = () => {
    performanceMonitor.logMetrics();
  };

  const getMetrics = () => {
    return performanceMonitor.getMetrics();
  };

  return {
    logCurrentMetrics,
    getMetrics
  };
}