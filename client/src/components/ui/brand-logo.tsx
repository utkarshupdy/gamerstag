import { brandConfig } from "@/config/brand";
import { Gamepad2 } from "lucide-react";

interface BrandLogoProps {
  variant?: 'full' | 'icon' | 'text';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showTagline?: boolean;
}

export function BrandLogo({ 
  variant = 'full', 
  size = 'md', 
  className = '', 
  showTagline = false 
}: BrandLogoProps) {
  const sizeClasses = {
    sm: { icon: 'w-6 h-6', text: 'text-sm', tagline: 'text-xs' },
    md: { icon: 'w-8 h-8', text: 'text-lg', tagline: 'text-sm' },
    lg: { icon: 'w-10 h-10', text: 'text-xl', tagline: 'text-base' },
    xl: { icon: 'w-12 h-12', text: 'text-2xl', tagline: 'text-lg' }
  };

  const currentSize = sizeClasses[size];

  if (variant === 'icon') {
    return (
      <div className={`${className}`}>
        <div 
          className={`${currentSize.icon} bg-[var(--brand-primary)] border-2 border-[var(--brand-white)] flex items-center justify-center`}
          style={{
            clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
          }}
        >
          <Gamepad2 className={`${currentSize.icon === 'w-6 h-6' ? 'w-4 h-4' : currentSize.icon === 'w-8 h-8' ? 'w-5 h-5' : 'w-6 h-6'} text-[var(--brand-white)]`} />
        </div>
      </div>
    );
  }

  if (variant === 'text') {
    return (
      <div className={`${className}`}>
        <h1 className={`text-[var(--brand-white)] font-orbitron font-bold ${currentSize.text} leading-tight`}>
          {brandConfig.text.name}
        </h1>
        {showTagline && (
          <p className={`text-[var(--brand-primary)] font-orbitron ${currentSize.tagline} uppercase tracking-wider`}>
            {brandConfig.text.tagline}
          </p>
        )}
      </div>
    );
  }

  // Full variant (icon + text)
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div 
        className={`${currentSize.icon} bg-[var(--brand-primary)] border-2 border-[var(--brand-white)] flex items-center justify-center`}
        style={{
          clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
        }}
      >
        <Gamepad2 className={`${currentSize.icon === 'w-6 h-6' ? 'w-4 h-4' : currentSize.icon === 'w-8 h-8' ? 'w-5 h-5' : 'w-6 h-6'} text-[var(--brand-white)]`} />
      </div>
      <div>
        <h1 className={`text-[var(--brand-white)] font-orbitron font-bold ${currentSize.text} leading-tight`}>
          {brandConfig.text.name}
        </h1>
        {showTagline && (
          <p className={`text-[var(--brand-primary)] font-orbitron ${currentSize.tagline} uppercase tracking-wider`}>
            {brandConfig.text.tagline}
          </p>
        )}
      </div>
    </div>
  );
}