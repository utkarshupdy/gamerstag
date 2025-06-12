import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface HudButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  active?: boolean;
}

export function HudButton({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className,
  disabled = false,
  active = false,
  ...props
}: HudButtonProps) {
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-sm',
    lg: 'px-6 py-4 text-base'
  };

  const variantClasses = {
    primary: active 
      ? 'rectangular-button--red'
      : 'rectangular-button--white',
    secondary: active
      ? 'rectangular-button--red'
      : 'rectangular-button--white',
    outline: active
      ? 'rectangular-button--red'
      : 'bg-transparent text-white border-[#E5042F]/30 hover:border-[#E5042F] hover:bg-[#E5042F]/10'
  };

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'rectangular-button relative transition-all duration-300 transform-gpu font-bold uppercase tracking-wider',
        'border-2 backdrop-blur-md flex items-center justify-center',
        'hover:shadow-lg hover:shadow-[#E5042F]/20',
        sizeClasses[size],
        variantClasses[variant],
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      whileHover={!disabled ? {
        scale: 1.02,
        y: -1,
      } : {}}
      whileTap={!disabled ? {
        scale: 0.98,
        y: 0,
      } : {}}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      {...props}
    >
      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#E5042F] opacity-60" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#E5042F] opacity-60" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#E5042F] opacity-60" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#E5042F] opacity-60" />

      {/* Scan Line Effect */}
      <div className="absolute inset-0 overflow-hidden rounded-lg">
        <div 
          className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#E5042F] to-transparent opacity-60"
          style={{
            animation: 'hudScan 3s ease-in-out infinite',
          }}
        />
      </div>

      {/* Content */}
      <span className="relative z-10 flex items-center space-x-2">
        {children}
      </span>
    </motion.button>
  );
}

export default HudButton;