import { useEffect, useRef } from 'react';
import { useLocation } from 'wouter';

export function useScrollRestoration() {
  const [location] = useLocation();
  const prevLocationRef = useRef(location);

  useEffect(() => {
    // Only scroll to top if the location actually changed
    if (prevLocationRef.current !== location) {
      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      });
      prevLocationRef.current = location;
    }
  }, [location]);

  useEffect(() => {
    // Immediate scroll to top on mount - no smooth behavior for initial load
    window.scrollTo(0, 0);
    
    // Also set scroll restoration to manual to prevent browser's default behavior
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    
    return () => {
      // Restore default behavior on cleanup
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'auto';
      }
    };
  }, []);
}

export function scrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

export function scrollToElement(elementId: string) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}