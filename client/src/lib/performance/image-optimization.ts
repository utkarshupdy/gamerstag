// Advanced image optimization utilities for performance enhancement
export interface ImageOptimizationOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'avif' | 'jpg' | 'png';
  progressive?: boolean;
  blur?: number;
}

export class ImageOptimizer {
  private static readonly DEFAULT_QUALITY = 85;
  private static readonly DEFAULT_FORMAT = 'webp';
  
  static optimize(src: string, options: ImageOptimizationOptions = {}): string {
    const {
      width,
      height,
      quality = this.DEFAULT_QUALITY,
      format = this.DEFAULT_FORMAT,
      progressive = true,
      blur
    } = options;

    // Handle Sanity CDN optimization
    if (src.includes('cdn.sanity.io')) {
      return this.optimizeSanityImage(src, options);
    }

    // Handle other CDN optimizations
    if (src.includes('cloudinary.com')) {
      return this.optimizeCloudinaryImage(src, options);
    }

    // Return original if no optimization available
    return src;
  }

  private static optimizeSanityImage(src: string, options: ImageOptimizationOptions): string {
    const params = new URLSearchParams();
    
    if (options.width) params.append('w', options.width.toString());
    if (options.height) params.append('h', options.height.toString());
    if (options.quality) params.append('q', options.quality.toString());
    if (options.format) params.append('fm', options.format);
    if (options.blur) params.append('blur', options.blur.toString());
    
    params.append('auto', 'format');
    params.append('fit', 'max');

    return `${src}?${params.toString()}`;
  }

  private static optimizeCloudinaryImage(src: string, options: ImageOptimizationOptions): string {
    // Cloudinary URL structure optimization
    const transformations = [];
    
    if (options.width) transformations.push(`w_${options.width}`);
    if (options.height) transformations.push(`h_${options.height}`);
    if (options.quality) transformations.push(`q_${options.quality}`);
    if (options.format) transformations.push(`f_${options.format}`);
    
    transformations.push('c_fill', 'g_auto');
    
    return src.replace('/upload/', `/upload/${transformations.join(',')}/`);
  }

  static generateSrcSet(src: string, sizes: number[] = [480, 768, 1024, 1280, 1920]): string {
    return sizes.map(size => {
      const optimizedSrc = this.optimize(src, { width: size });
      return `${optimizedSrc} ${size}w`;
    }).join(', ');
  }

  static getBlurDataURL(src: string): string {
    const blurredSrc = this.optimize(src, {
      width: 10,
      height: 10,
      quality: 20,
      blur: 5
    });
    
    return `data:image/jpeg;base64,${Buffer.from(blurredSrc).toString('base64')}`;
  }

  static preloadCriticalImages(images: string[]): void {
    images.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = this.optimize(src, { width: 800, quality: 85 });
      document.head.appendChild(link);
    });
  }
}

// React hook for image optimization
export function useImageOptimization() {
  const optimizeImage = (src: string, options?: ImageOptimizationOptions) => {
    return ImageOptimizer.optimize(src, options);
  };

  const generateResponsiveImage = (src: string, sizes?: number[]) => {
    return {
      src: ImageOptimizer.optimize(src),
      srcSet: ImageOptimizer.generateSrcSet(src, sizes),
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    };
  };

  return {
    optimizeImage,
    generateResponsiveImage
  };
}