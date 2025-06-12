import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { playClickSound } from '@/lib/sound-effects';

interface HudRectangularButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'red' | 'white';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  active?: boolean;
}

export function HudRectangularButton({
  children,
  onClick,
  variant = 'red',
  size = 'md',
  className,
  disabled = false,
  type = 'button',
  active = false,
  ...props
}: HudRectangularButtonProps) {
  const sizeClasses = {
    sm: 'px-3 py-2 text-xs h-8',
    md: 'px-4 py-2 text-sm h-10',
    lg: 'px-6 py-3 text-base h-12',
    xl: 'px-8 py-4 text-lg h-14'
  };

  const baseClasses = cn(
    'relative inline-flex items-center justify-center gap-2',
    'font-bold uppercase tracking-widest border-2 transition-all duration-300',
    sizeClasses[size],
    variant === 'red' ? 'rectangular-button--red' : 'rectangular-button--white',
    disabled && 'opacity-50 cursor-not-allowed',
    active && 'active',
    className
  );

  return (
    <div className="relative inline-block hud-button-container">
      {/* HUD Corner Brackets - Styled like your reference */}
      <div className="absolute inset-0 pointer-events-none hud-corners">
        {/* Top-left corner bracket */}
        <div className="absolute top-[-10px] left-[-10px] w-8 h-8 opacity-0 transition-all duration-400">
          <div className="absolute top-0 left-0 w-6 h-[3px] bg-[#E5042F] transform origin-left scale-x-0 transition-transform duration-300 delay-100" />
          <div className="absolute top-0 left-0 w-[3px] h-6 bg-[#E5042F] transform origin-top scale-y-0 transition-transform duration-300 delay-100" />
        </div>
        
        {/* Top-right corner bracket */}
        <div className="absolute top-[-10px] right-[-10px] w-8 h-8 opacity-0 transition-all duration-400">
          <div className="absolute top-0 right-0 w-6 h-[3px] bg-[#E5042F] transform origin-right scale-x-0 transition-transform duration-300 delay-200" />
          <div className="absolute top-0 right-0 w-[3px] h-6 bg-[#E5042F] transform origin-top scale-y-0 transition-transform duration-300 delay-200" />
        </div>
        
        {/* Bottom-left corner bracket */}
        <div className="absolute bottom-[-10px] left-[-10px] w-8 h-8 opacity-0 transition-all duration-400">
          <div className="absolute bottom-0 left-0 w-6 h-[3px] bg-[#E5042F] transform origin-left scale-x-0 transition-transform duration-300 delay-300" />
          <div className="absolute bottom-0 left-0 w-[3px] h-6 bg-[#E5042F] transform origin-bottom scale-y-0 transition-transform duration-300 delay-300" />
        </div>
        
        {/* Bottom-right corner bracket */}
        <div className="absolute bottom-[-10px] right-[-10px] w-8 h-8 opacity-0 transition-all duration-400">
          <div className="absolute bottom-0 right-0 w-6 h-[3px] bg-[#E5042F] transform origin-right scale-x-0 transition-transform duration-300 delay-400" />
          <div className="absolute bottom-0 right-0 w-[3px] h-6 bg-[#E5042F] transform origin-bottom scale-y-0 transition-transform duration-300 delay-400" />
        </div>
      </div>

      {/* Scanning Line Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 transition-opacity duration-300 scanning-line">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E5042F]/40 to-transparent transform -translate-x-full" />
      </div>

      {/* Main Button */}
      <motion.button
        type={type}
        onClick={(e) => {
          playClickSound();
          onClick?.();
        }}
        disabled={disabled}
        className={baseClasses}
        whileHover={!disabled ? { scale: 1.02 } : {}}
        whileTap={!disabled ? { scale: 0.98 } : {}}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        {...props}
      >
        {children}
      </motion.button>


    </div>
  );
}

// Updated Dual Button Group for HUD style
interface DualHudButtonGroupProps {
  redButtonText: string;
  whiteButtonText: string;
  onRedClick?: () => void;
  onWhiteClick?: () => void;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  gap?: 'sm' | 'md' | 'lg';
  redActive?: boolean;
  whiteActive?: boolean;
}

export function DualHudButtonGroup({
  redButtonText,
  whiteButtonText,
  onRedClick,
  onWhiteClick,
  size = 'md',
  className = '',
  gap = 'md',
  redActive = false,
  whiteActive = false
}: DualHudButtonGroupProps) {
  const gapClasses = {
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6'
  };

  return (
    <div className={`flex flex-wrap items-center ${gapClasses[gap]} ${className}`}>
      <HudRectangularButton 
        variant="red" 
        size={size} 
        onClick={onRedClick}
        active={redActive}
      >
        {redButtonText}
      </HudRectangularButton>
      
      <HudRectangularButton 
        variant="white" 
        size={size} 
        onClick={onWhiteClick}
        active={whiteActive}
      >
        {whiteButtonText}
      </HudRectangularButton>
    </div>
  );
}