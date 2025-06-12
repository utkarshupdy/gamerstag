import { ReactNode } from 'react';

interface PageBackgroundProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'hero' | 'dark';
}

export function PageBackground({ children, className = '', variant = 'default' }: PageBackgroundProps) {
  const getBackgroundClass = () => {
    switch (variant) {
      case 'hero':
        return 'page-background hero-enhanced';
      case 'dark':
        return 'page-background dark-enhanced';
      default:
        return 'page-background';
    }
  };

  return (
    <div className={`page-container ${className}`}>
      <div className={getBackgroundClass()} />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10 z-[-1]">
        <div className="grid-pattern animate-pulse"></div>
      </div>
      
      {/* Floating Particles */}
      <div className="particles absolute inset-0 z-[-1]">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-1 h-1 bg-brand rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      {/* Geometric Shapes */}
      <div className="absolute inset-0 opacity-20 z-[-1]">
        <div className="absolute top-20 left-10 w-32 h-32 bg-brand/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-brand/15 transform rotate-45 blur-lg animate-pulse" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-brand/20 rounded-lg blur-md animate-pulse" style={{animationDelay: '2s'}} />
      </div>
      
      {children}
    </div>
  );
}

export default PageBackground;