import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CLSOptimizerProps {
  children: React.ReactNode;
  minHeight?: number;
  aspectRatio?: string;
  className?: string;
}

// Prevent layout shifts by reserving space
export function CLSOptimizer({ 
  children, 
  minHeight = 200, 
  aspectRatio,
  className = '' 
}: CLSOptimizerProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerStyle = {
    minHeight: `${minHeight}px`,
    ...(aspectRatio && { aspectRatio }),
    position: 'relative' as const,
    overflow: 'hidden' as const
  };

  if (!isLoaded) {
    return (
      <div 
        className={`skeleton ${className}`} 
        style={containerStyle}
        aria-label="Loading content..."
      />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      style={containerStyle}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Optimized image component that prevents CLS
interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

export function OptimizedImage({ 
  src, 
  alt, 
  width, 
  height, 
  className = '',
  priority = false 
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const aspectRatio = `${width}/${height}`;

  return (
    <div 
      className={`image-container ${className}`}
      style={{ aspectRatio, position: 'relative', overflow: 'hidden' }}
    >
      {!isLoaded && !hasError && (
        <div 
          className="skeleton absolute inset-0"
          style={{ aspectRatio }}
          aria-label="Loading image..."
        />
      )}
      
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease'
        }}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
      />
      
      {hasError && (
        <div 
          className="absolute inset-0 bg-gray-800 flex items-center justify-center text-gray-400"
          style={{ aspectRatio }}
        >
          <span className="text-sm">Image unavailable</span>
        </div>
      )}
    </div>
  );
}

// Font loading optimizer
export function FontOptimizer() {
  useEffect(() => {
    // Add font-display: swap to existing fonts
    const style = document.createElement('style');
    style.textContent = `
      @font-face {
        font-family: 'Orbitron';
        font-display: swap;
      }
      @font-face {
        font-family: 'Space Grotesk';
        font-display: swap;
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  return null;
}

// Critical resource preloader
export function ResourcePreloader() {
  useEffect(() => {
    const criticalResources = [
      { href: '/logo.svg', as: 'image' },
      { href: '/api/testimonials', as: 'fetch', crossOrigin: 'anonymous' },
      { href: '/api/gallery', as: 'fetch', crossOrigin: 'anonymous' }
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      if (resource.crossOrigin) {
        link.crossOrigin = resource.crossOrigin;
      }
      document.head.appendChild(link);
    });

    // DNS prefetch for external domains
    const prefetchDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://cdn.sanity.io'
    ];

    prefetchDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });
  }, []);

  return null;
}