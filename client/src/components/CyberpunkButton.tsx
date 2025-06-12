import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useSound } from '@/hooks/use-sound';

interface CyberpunkButtonProps {
  variant?: 'cyber' | 'solid' | 'outline' | 'ghost' | 'hud';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  soundEnabled?: boolean;
  glowEffect?: boolean;
  cornerCuts?: boolean;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
}

export function CyberpunkButton({
  variant = 'cyber',
  size = 'md',
  soundEnabled = true,
  glowEffect = true,
  cornerCuts = true,
  className,
  children,
  disabled,
  onClick,
  type = 'button'
}: CyberpunkButtonProps) {
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { playSound } = useSound({ enabled: soundEnabled });

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  };

  const variantClasses = {
    cyber: 'rectangular-button--red',
    solid: 'rectangular-button--red',
    outline: 'rectangular-button--white',
    ghost: 'bg-transparent text-[#E5042F] hover:bg-[#E5042F]/10 hover:text-white border-2 border-[#E5042F]',
    hud: 'rectangular-button--red'
  };

  const baseClasses = cn(
    "rectangular-button relative font-bold transition-all duration-300 transform-gpu overflow-visible border-2",
    "focus:outline-none focus:ring-2 focus:ring-[#E5042F]/50 focus:ring-offset-2 focus:ring-offset-black",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",
    sizeClasses[size],
    variantClasses[variant],
    {
      'cursor-pointer': !disabled,
    },
    className
  );

  const handleMouseEnter = () => {
    if (disabled) return;
    setIsHovered(true);
    if (soundEnabled) {
      playSound('hover');
    }
  };

  const handleMouseLeave = () => {
    if (disabled) return;
    setIsHovered(false);
    setIsPressed(false);
  };

  const handleMouseDown = () => {
    if (disabled) return;
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    if (disabled) return;
    setIsPressed(false);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    if (soundEnabled) {
      playSound('click');
    }
    onClick?.(e);
  };

  const transform = disabled ? 'none' : (
    isPressed 
      ? "translateY(4px) translateZ(-10px) rotateX(-2deg) scale(0.98)"
      : isHovered 
        ? "translateY(-2px) translateZ(20px) rotateX(3deg) scale(1.02)"
        : "translateY(0) translateZ(0) rotateX(0) scale(1)"
  );

  const boxShadow = disabled ? 'none' : (
    isPressed
      ? "0 2px 8px rgba(0, 0, 0, 0.8), inset 0 4px 8px rgba(0, 0, 0, 0.6), inset 0 -2px 0 rgba(229, 4, 47, 0.3)"
      : isHovered && glowEffect
        ? "0 15px 30px rgba(0, 0, 0, 0.6), inset 0 2px 5px rgba(229, 4, 47, 0.4), 0 0 40px rgba(229, 4, 47, 0.6), 0 0 80px rgba(229, 4, 47, 0.3)"
        : "0 8px 15px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(229, 4, 47, 0.2), 0 0 20px rgba(229, 4, 47, 0.3)"
  );

  return (
    <motion.button
      ref={buttonRef}
      className={baseClasses}
      style={{
        transform,
        boxShadow,
        transformStyle: 'preserve-3d',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={handleClick}
      disabled={disabled}
      whileHover={!disabled ? {
        scale: 1.02,
        rotateX: 3,
        z: 20,
      } : {}}
      whileTap={!disabled ? {
        scale: 0.98,
        rotateX: -2,
        z: -10,
      } : {}}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      type={type}
    >
      {/* Corner Cuts */}
      {cornerCuts && !disabled && (
        <>
          <div className="absolute top-0 left-0 w-2 h-2 bg-[#E5042F] opacity-60 clip-path-triangle" />
          <div className="absolute top-0 right-0 w-2 h-2 bg-[#E5042F] opacity-60 clip-path-triangle rotate-90" />
          <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#E5042F] opacity-60 clip-path-triangle -rotate-90" />
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#E5042F] opacity-60 clip-path-triangle rotate-180" />
        </>
      )}

      {/* Glow Effect */}
      {glowEffect && isHovered && !disabled && (
        <div 
          className="absolute inset-0 bg-gradient-to-r from-[#E5042F]/20 via-[#E5042F]/10 to-[#E5042F]/20 rounded-inherit pointer-events-none"
          style={{
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
        />
      )}

      {/* Scan Line */}
      {variant === 'hud' && !disabled && (
        <div className="absolute inset-0 overflow-hidden rounded-inherit">
          <div 
            className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#E5042F] to-transparent opacity-60"
            style={{
              animation: isHovered ? 'hudScan 1s ease-in-out infinite' : 'none',
            }}
          />
        </div>
      )}

      {/* Button Text/Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
}

export default CyberpunkButton;