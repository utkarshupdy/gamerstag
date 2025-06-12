import React from 'react';
import { ScrollToTopButton } from './scroll-to-top-button';
import { useScrollRestoration } from '@/hooks/use-scroll-restoration';

interface PageWrapperProps {
  children: React.ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  // Apply scroll restoration
  useScrollRestoration();

  return (
    <div className="min-h-screen">
      {children}
      <ScrollToTopButton />
    </div>
  );
}