import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GamingButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  disabled?: boolean;
}

export function GamingButton({
  children,
  onClick,
  variant = 'primary',
  className,
  disabled = false,
  ...props
}: GamingButtonProps) {
  const [isPressed, setIsPressed] = useState(false);

  const getButtonStyles = () => {
    if (variant === 'primary') {
      // Red button - red by default, white on hover/press
      return isPressed 
        ? 'rectangular-button--white' 
        : 'rectangular-button--red';
    } else {
      // White button - white by default, red on hover/press
      return isPressed 
        ? 'rectangular-button--red' 
        : 'rectangular-button--white';
    }
  };

  const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  const handleMouseLeave = () => {
    setIsPressed(false);
  };

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      className={cn(
        'rectangular-button relative px-8 py-4 font-bold uppercase tracking-wider text-lg',
        'transition-all duration-200 transform-gpu border-2',
        getButtonStyles(),
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      whileHover={!disabled ? {
        scale: 1.02,
        y: -2,
      } : {}}
      whileTap={!disabled ? {
        scale: 0.98,
        y: 0,
        x: [0, -2, 2, -2, 2, 0], // Vibration effect
      } : {}}
      animate={!disabled ? {
        boxShadow: [
          '0 0 0px rgba(229, 4, 47, 0)',
          '0 0 15px rgba(229, 4, 47, 0.4)',
          '0 0 0px rgba(229, 4, 47, 0)'
        ]
      } : {}}
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 25,
        boxShadow: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        },
        x: {
          duration: 0.3,
          ease: "easeInOut"
        }
      }}
      {...props}
    >
      {/* Box vibration animation on hover */}
      <motion.div
        className="flex items-center space-x-2 w-full h-full justify-center"
        whileHover={{
          x: [0, -1, 1, -1, 1, 0],
          transition: { duration: 0.4, repeat: 1 }
        }}
      >
        {children}
      </motion.div>
    </motion.button>
  );
}

export default GamingButton;