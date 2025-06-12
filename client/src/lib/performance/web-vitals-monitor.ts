// Comprehensive Web Vitals Monitoring for Google Rankings
import { onCLS, onFCP, onLCP, onTTFB, onINP } from 'web-vitals';

interface WebVitalsData {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
}

class WebVitalsMonitor {
  private vitals: Map<string, WebVitalsData> = new Map();
  private observers: ((vitals: WebVitalsData) => void)[] = [];

  constructor() {
    this.initializeMonitoring();
  }

  private initializeMonitoring() {
    // Monitor Core Web Vitals
    onCLS(this.handleVital.bind(this));
    onINP(this.handleVital.bind(this));
    onFCP(this.handleVital.bind(this));
    onLCP(this.handleVital.bind(this));
    onTTFB(this.handleVital.bind(this));
  }

  private handleVital(vital: any) {
    const vitalData: WebVitalsData = {
      name: vital.name,
      value: vital.value,
      rating: vital.rating,
      delta: vital.delta,
      id: vital.id
    };

    this.vitals.set(vital.name, vitalData);
    this.notifyObservers(vitalData);
    this.sendToAnalytics(vitalData);
  }

  private notifyObservers(vital: WebVitalsData) {
    this.observers.forEach(observer => observer(vital));
  }

  private sendToAnalytics(vital: WebVitalsData) {
    // Send to Google Analytics 4
    if (typeof gtag !== 'undefined') {
      gtag('event', vital.name, {
        event_category: 'Web Vitals',
        event_label: vital.id,
        value: Math.round(vital.name === 'CLS' ? vital.value * 1000 : vital.value),
        non_interaction: true,
        custom_map: {
          metric_rating: vital.rating
        }
      });
    }

    // Log for development
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Web Vitals] ${vital.name}: ${vital.value} (${vital.rating})`);
    }
  }

  public subscribe(observer: (vital: WebVitalsData) => void) {
    this.observers.push(observer);
    return () => {
      const index = this.observers.indexOf(observer);
      if (index > -1) {
        this.observers.splice(index, 1);
      }
    };
  }

  public getVitals(): Map<string, WebVitalsData> {
    return new Map(this.vitals);
  }

  public getVitalsByRating(): { good: number; needsImprovement: number; poor: number } {
    const ratings = { good: 0, needsImprovement: 0, poor: 0 };
    
    this.vitals.forEach(vital => {
      switch (vital.rating) {
        case 'good':
          ratings.good++;
          break;
        case 'needs-improvement':
          ratings.needsImprovement++;
          break;
        case 'poor':
          ratings.poor++;
          break;
      }
    });

    return ratings;
  }

  public getPerformanceScore(): number {
    const vitals = Array.from(this.vitals.values());
    if (vitals.length === 0) return 0;

    const scores = vitals.map(vital => {
      switch (vital.rating) {
        case 'good': return 100;
        case 'needs-improvement': return 50;
        case 'poor': return 0;
        default: return 0;
      }
    });

    return Math.round(scores.reduce((sum: number, score: number) => sum + score, 0) / scores.length);
  }
}

// Performance optimization recommendations
export const performanceRecommendations = {
  CLS: {
    poor: [
      'Add explicit width and height attributes to images',
      'Reserve space for dynamic content with min-height',
      'Use CSS aspect-ratio for responsive images',
      'Avoid inserting content above existing content'
    ],
    needsImprovement: [
      'Optimize font loading with font-display: swap',
      'Use skeleton loaders for dynamic content',
      'Implement proper image sizing'
    ]
  },
  LCP: {
    poor: [
      'Optimize largest contentful paint element',
      'Use priority hints for critical resources',
      'Implement image optimization',
      'Reduce server response times'
    ],
    needsImprovement: [
      'Preload critical resources',
      'Optimize images with next-gen formats',
      'Use CDN for faster content delivery'
    ]
  },
  FID: {
    poor: [
      'Reduce JavaScript execution time',
      'Break up long tasks',
      'Use web workers for heavy computations',
      'Defer non-critical JavaScript'
    ],
    needsImprovement: [
      'Optimize third-party scripts',
      'Use code splitting',
      'Implement lazy loading'
    ]
  },
  FCP: {
    poor: [
      'Optimize critical rendering path',
      'Reduce render-blocking resources',
      'Inline critical CSS',
      'Use resource hints'
    ],
    needsImprovement: [
      'Optimize font loading',
      'Reduce unused CSS',
      'Use efficient cache policies'
    ]
  }
};

export const webVitalsMonitor = new WebVitalsMonitor();