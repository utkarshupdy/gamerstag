import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CyberpunkBoxProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'panel' | 'terminal' | 'hud';
  interactive?: boolean;
  glowOnHover?: boolean;
  scanLine?: boolean;
  cornerAccents?: boolean;
}

export function CyberpunkBox({
  children,
  className,
  variant = 'default',
  interactive = true,
  glowOnHover = true,
  scanLine = false,
  cornerAccents = true,
  ...props
}: CyberpunkBoxProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  const baseClasses = cn(
    "relative transition-all duration-300 transform-gpu",
    {
      'cursor-pointer': interactive,
      'hud-panel': variant === 'hud',
      'glass-card': variant === 'panel',
    }
  );

  const variantStyles = {
    default: "bg-gradient-to-br from-[#171717] to-[#000000] border border-[#E5042F]/30 rounded-lg",
    panel: "bg-gradient-to-br from-[#171717]/90 to-[#000000]/80 border border-[#E5042F]/20 rounded-xl backdrop-blur-md",
    terminal: "bg-[#000000] border-2 border-[#E5042F] rounded-none font-mono",
    hud: "bg-gradient-to-br from-[#171717]/95 to-[#000000]/90 border border-[#E5042F]/40 rounded-lg"
  };

  const hoverTransform = interactive ? (
    isPressed 
      ? "translateY(2px) translateZ(-5px) rotateX(-1deg) scale(0.98)"
      : isHovered 
        ? "translateY(-3px) translateZ(10px) rotateX(2deg) scale(1.02)"
        : "translateY(0) translateZ(0) rotateX(0) scale(1)"
  ) : "none";

  const boxShadow = interactive ? (
    isPressed
      ? "0 2px 8px rgba(0, 0, 0, 0.8), inset 0 4px 8px rgba(0, 0, 0, 0.6)"
      : isHovered && glowOnHover
        ? "0 15px 40px rgba(0, 0, 0, 0.6), 0 0 30px rgba(229, 4, 47, 0.4), inset 0 1px 0 rgba(229, 4, 47, 0.2)"
        : "0 8px 20px rgba(0, 0, 0, 0.4), 0 0 10px rgba(229, 4, 47, 0.1)"
  ) : "0 4px 12px rgba(0, 0, 0, 0.3)";

  return (
    <motion.div
      ref={boxRef}
      className={cn(baseClasses, variantStyles[variant], className)}
      style={{
        transform: hoverTransform,
        boxShadow,
        transformStyle: 'preserve-3d',
      }}
      onMouseEnter={() => interactive && setIsHovered(true)}
      onMouseLeave={() => {
        if (interactive) {
          setIsHovered(false);
          setIsPressed(false);
        }
      }}
      onMouseDown={() => interactive && setIsPressed(true)}
      onMouseUp={() => interactive && setIsPressed(false)}
      whileHover={interactive ? {
        scale: 1.02,
        rotateX: 2,
        z: 10,
      } : {}}
      whileTap={interactive ? {
        scale: 0.98,
        rotateX: -1,
        z: -5,
      } : {}}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      {...props}
    >
      {/* Scan Line Effect */}
      {scanLine && (
        <div className="absolute inset-0 overflow-hidden rounded-inherit">
          <div 
            className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#E5042F] to-transparent opacity-60"
            style={{
              animation: 'hudScan 3s ease-in-out infinite',
            }}
          />
        </div>
      )}

      {/* Corner Accents */}
      {cornerAccents && (
        <>
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#E5042F] opacity-60" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#E5042F] opacity-60" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#E5042F] opacity-60" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#E5042F] opacity-60" />
        </>
      )}

      {/* Glow Effect Overlay */}
      {glowOnHover && isHovered && (
        <div 
          className="absolute inset-0 bg-gradient-to-br from-[#E5042F]/10 to-transparent rounded-inherit pointer-events-none"
          style={{
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}

export default CyberpunkBox;