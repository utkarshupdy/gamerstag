import { useState } from 'react';
import { motion } from 'framer-motion';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  lazy?: boolean;
  quality?: number;
}

export function OptimizedImage({
  src,
  alt,
  width = 800,
  height = 600,
  priority = false,
  className = '',
  lazy = true,
  quality = 75
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Generate responsive image URLs for different screen sizes
  const generateSrcSet = (baseSrc: string) => {
    const sizes = [480, 768, 1024, 1280, 1920];
    return sizes.map(size => {
      if (baseSrc.includes('cdn.sanity.io')) {
        return `${baseSrc}?w=${size}&q=${quality}&auto=format ${size}w`;
      }
      return `${baseSrc} ${size}w`;
    }).join(', ');
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  if (hasError) {
    return (
      <div 
        className={`bg-gray-800 border border-gray-700 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <div className="text-gray-400 text-center p-4">
          <div className="text-sm">Image not available</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Loading placeholder */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center"
          style={{ width, height }}
        >
          <div className="w-8 h-8 border-2 border-[#E5042F] border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      
      {/* Optimized image */}
      <motion.img
        src={src}
        alt={alt}
        width={width}
        height={height}
        srcSet={generateSrcSet(src)}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        loading={lazy && !priority ? 'lazy' : 'eager'}
        onLoad={handleLoad}
        onError={handleError}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}

// Hook for image optimization utilities
export function useImageOptimization() {
  const getOptimizedUrl = (url: string, options: {
    width?: number;
    height?: number;
    quality?: number;
    format?: 'webp' | 'jpg' | 'png';
  } = {}) => {
    const { width = 800, height = 600, quality = 75, format = 'webp' } = options;
    
    if (url.includes('cdn.sanity.io')) {
      return `${url}?w=${width}&h=${height}&q=${quality}&auto=format&fm=${format}`;
    }
    
    return url;
  };

  return { getOptimizedUrl };
}