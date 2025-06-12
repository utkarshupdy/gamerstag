import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { playClickSound } from '@/lib/sound-effects';

interface GamingRectangularButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'red' | 'white';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  withGlow?: boolean;
  withScan?: boolean;
}

export function GamingRectangularButton({
  children,
  onClick,
  variant = 'red',
  size = 'md',
  className,
  disabled = false,
  type = 'button',
  withGlow = true,
  withScan = true,
  ...props
}: GamingRectangularButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs h-9',
    md: 'px-6 py-3 text-sm h-11',
    lg: 'px-8 py-3 text-base h-12',
    xl: 'px-10 py-4 text-lg h-14'
  };

  const baseClasses = cn(
    'rectangular-button relative inline-flex items-center justify-center gap-2',
    'font-bold uppercase tracking-wider border-2 overflow-visible',
    'transition-all duration-300 transform-gpu group',
    sizeClasses[size],
    variant === 'red' ? 'rectangular-button--red' : 'rectangular-button--white',
    disabled && 'opacity-50 cursor-not-allowed',
    className
  );

  return (
    <motion.div className="relative inline-block">
      {/* 3D Base Layer */}
      <motion.div 
        className={`absolute inset-0 transition-all duration-300 ${
          variant === 'red' 
            ? 'bg-[#E5042F]/15 border-2 border-[#E5042F]/30' 
            : 'bg-white/10 border-2 border-white/20'
        }`}
        style={{ 
          transform: 'translate(6px, 6px)',
          filter: 'blur(3px)'
        }}
        animate={withGlow ? {
          opacity: [0.15, 0.25, 0.15],
          scale: [1, 1.02, 1]
        } : {}}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Interactive Light Layer */}
      <motion.div 
        className={`absolute inset-0 transition-all duration-300 opacity-0 ${
          variant === 'red' 
            ? 'bg-[#E5042F]/20 border-2 border-[#E5042F]/40' 
            : 'bg-white/15 border-2 border-white/30'
        }`}
        style={{ 
          transform: 'translate(3px, 3px)',
          filter: 'blur(2px)'
        }}
        whileHover={{ 
          opacity: 0.3,
          scale: 1.01,
          filter: 'blur(1px)'
        }}
      />

      {/* Scan Line Effects */}
      {withScan && (
        <>
          <div className={`absolute top-0 left-0 w-full h-0.5 opacity-0 group-hover:opacity-100 transition-all duration-300 ${
            variant === 'red' 
              ? 'bg-gradient-to-r from-transparent via-white to-transparent' 
              : 'bg-gradient-to-r from-transparent via-[#E5042F] to-transparent'
          }`} 
          style={{ animation: 'hudScan 2s ease-in-out infinite' }} />
          
          <div className={`absolute bottom-0 left-0 w-full h-0.5 opacity-0 group-hover:opacity-100 transition-all duration-300 ${
            variant === 'red' 
              ? 'bg-gradient-to-r from-transparent via-white to-transparent' 
              : 'bg-gradient-to-r from-transparent via-[#E5042F] to-transparent'
          }`} 
          style={{ animation: 'hudScan 2s ease-in-out infinite 1s' }} />
        </>
      )}

      {/* Corner Indicators */}
      <div className={`absolute top-0 left-0 w-3 h-3 transition-colors duration-300 ${
        variant === 'red' 
          ? 'bg-white group-hover:bg-black' 
          : 'bg-[#E5042F] group-hover:bg-white'
      }`} />
      <div className={`absolute top-0 right-0 w-3 h-3 transition-colors duration-300 ${
        variant === 'red' 
          ? 'bg-white group-hover:bg-black' 
          : 'bg-[#E5042F] group-hover:bg-white'
      }`} />
      <div className={`absolute bottom-0 left-0 w-3 h-3 transition-colors duration-300 ${
        variant === 'red' 
          ? 'bg-white group-hover:bg-black' 
          : 'bg-[#E5042F] group-hover:bg-white'
      }`} />
      <div className={`absolute bottom-0 right-0 w-3 h-3 transition-colors duration-300 ${
        variant === 'red' 
          ? 'bg-white group-hover:bg-black' 
          : 'bg-[#E5042F] group-hover:bg-white'
      }`} />

      {/* Main Button */}
      <motion.button
        type={type}
        onClick={(e) => {
          playClickSound();
          onClick?.();
        }}
        disabled={disabled}
        className={baseClasses}
        whileHover={!disabled ? { 
          y: -2,
          rotateX: 2,
          z: 10
        } : {}}
        whileTap={!disabled ? { 
          y: 1,
          rotateX: -1,
          z: -5
        } : {}}
        transition={{ 
          type: "spring", 
          stiffness: 400, 
          damping: 25 
        }}
        {...props}
      >
        {/* Dynamic Border Glow */}
        <div className={`absolute inset-0 border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
          variant === 'red' 
            ? 'border-white shadow-[0_0_15px_rgba(255,255,255,0.5)]' 
            : 'border-[#E5042F] shadow-[0_0_15px_rgba(229,4,47,0.5)]'
        }`} />

        {/* Button Content */}
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </span>

        {/* Interactive Light Sweep */}
        <motion.div 
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 ${
            variant === 'red' 
              ? 'bg-gradient-to-r from-transparent via-white/20 to-transparent' 
              : 'bg-gradient-to-r from-transparent via-[#E5042F]/20 to-transparent'
          }`}
          style={{
            transform: 'translateX(-100%) skewX(-15deg)',
          }}
          whileHover={{
            transform: 'translateX(100%) skewX(-15deg)',
            transition: { duration: 0.6, ease: "easeOut" }
          }}
        />
      </motion.button>
    </motion.div>
  );
}

// Dual Button Group for red/white combinations
interface DualGamingButtonGroupProps {
  redButtonText: string;
  whiteButtonText: string;
  onRedClick?: () => void;
  onWhiteClick?: () => void;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  gap?: 'sm' | 'md' | 'lg';
}

export function DualGamingButtonGroup({
  redButtonText,
  whiteButtonText,
  onRedClick,
  onWhiteClick,
  size = 'md',
  className = '',
  gap = 'md'
}: DualGamingButtonGroupProps) {
  const gapClasses = {
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6'
  };

  return (
    <div className={`flex flex-wrap items-center ${gapClasses[gap]} ${className}`}>
      <GamingRectangularButton 
        variant="red" 
        size={size} 
        onClick={onRedClick}
        withGlow={true}
        withScan={true}
      >
        {redButtonText}
      </GamingRectangularButton>
      
      <GamingRectangularButton 
        variant="white" 
        size={size} 
        onClick={onWhiteClick}
        withGlow={true}
        withScan={true}
      >
        {whiteButtonText}
      </GamingRectangularButton>
    </div>
  );
}