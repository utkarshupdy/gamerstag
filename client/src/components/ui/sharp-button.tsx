import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { playClickSound } from '@/lib/sound-effects';

interface SharpButtonProps {
  children: ReactNode;
  variant?: 'red' | 'white';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export function SharpButton({ 
  children, 
  variant = 'red', 
  size = 'md',
  onClick, 
  disabled = false,
  className = '',
  type = 'button'
}: SharpButtonProps) {
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs h-9',
    md: 'px-6 py-3 text-sm h-11',
    lg: 'px-8 py-3 text-base h-12'
  };

  const baseClasses = `
    rectangular-button inline-flex items-center justify-center gap-2
    font-bold tracking-wider border-2 relative overflow-visible
    ${sizeClasses[size]} 
    ${variant === 'red' ? 'rectangular-button--red' : 'rectangular-button--white'}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `;

  return (
    <motion.button
      type={type}
      onClick={(e) => {
        playClickSound();
        onClick?.();
      }}
      disabled={disabled}
      className={baseClasses}
      whileHover={!disabled ? { y: -2 } : {}}
      whileTap={!disabled ? { y: 1 } : {}}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {children}
    </motion.button>
  );
}

// Dual Button Container for side-by-side buttons
interface DualButtonGroupProps {
  redButton: ReactNode;
  whiteButton: ReactNode;
  className?: string;
  gap?: 'sm' | 'md' | 'lg';
}

export function DualButtonGroup({ 
  redButton, 
  whiteButton, 
  className = '',
  gap = 'md'
}: DualButtonGroupProps) {
  const gapClasses = {
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6'
  };

  return (
    <div className={`flex flex-wrap items-center ${gapClasses[gap]} ${className}`}>
      {redButton}
      {whiteButton}
    </div>
  );
}