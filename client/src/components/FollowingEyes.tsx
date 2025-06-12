import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const FollowingEyes: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const eyesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  const calculateAimDirection = (eyeIndex: number) => {
    if (!eyesRef.current) return { angle: 0, distance: 0 };

    const eyeElement = eyesRef.current.children[eyeIndex] as HTMLElement;
    if (!eyeElement) return { angle: 0, distance: 0 };

    const rect = eyeElement.getBoundingClientRect();
    const eyeCenterX = rect.left + rect.width / 2;
    const eyeCenterY = rect.top + rect.height / 2;

    const deltaX = mousePosition.x - eyeCenterX;
    const deltaY = mousePosition.y - eyeCenterY;

    const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    return { angle, distance };
  };

  const leftAim = calculateAimDirection(0);
  const rightAim = calculateAimDirection(1);

  // Hexagonal aim pattern
  const HexagonalAim = ({ aim }: { aim: { angle: number; distance: number } }) => (
    <>
      {/* Hexagonal frame */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-6 h-6 border border-cyan-400/60 transform rotate-45 bg-cyan-400/5" 
             style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }} />
      </div>
      
      {/* Rotating scanner rings */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-1 border border-red-400/40 rounded-full" />
        <div className="absolute inset-0.5 border border-red-400/20 rounded-full" />
      </motion.div>
      
      {/* Dynamic crosshairs */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div 
          className="absolute w-px h-full bg-gradient-to-b from-transparent via-red-500 to-transparent"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        />
      </div>
      
      {/* Targeting system */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: aim.angle }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Direction indicator */}
        <div className="absolute top-1/2 right-1 w-1.5 h-px bg-cyan-400 transform -translate-y-1/2" />
        <div className="absolute top-1/2 right-0.5 w-1 h-1 border border-cyan-400 transform -translate-y-1/2 rotate-45" />
        
        {/* Scanning beam */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-3 h-px bg-gradient-to-r from-red-500 to-transparent transform -translate-y-1/2 origin-left"
          animate={{ scaleX: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
      
      {/* Central targeting dot */}
      <motion.div 
        className="absolute top-1/2 left-1/2 w-1 h-1 bg-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"
        animate={{ 
          scale: [1, 1.5, 1],
          boxShadow: [
            '0 0 5px rgba(239, 68, 68, 0.5)',
            '0 0 15px rgba(239, 68, 68, 0.8)',
            '0 0 5px rgba(239, 68, 68, 0.5)'
          ]
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      
      {/* Corner markers */}
      {[0, 90, 180, 270].map((rotation, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 w-1 h-1 transform -translate-x-1/2 -translate-y-1/2"
          style={{ 
            transform: `translate(-50%, -50%) rotate(${rotation}deg) translateY(-12px)` 
          }}
          animate={{ 
            opacity: [0.2, 0.8, 0.2],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            delay: i * 0.5 
          }}
        >
          <div className="w-1 h-1 bg-cyan-400 rounded-full" />
        </motion.div>
      ))}
    </>
  );

  return (
    <div ref={eyesRef} className="flex justify-center items-center space-x-8 mt-8">
      {/* Left Futuristic Aim Eye */}
      <motion.div
        className="relative w-8 h-8"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        {/* Main container with neon glow */}
        <div className="relative w-full h-full bg-black/90 backdrop-blur-sm border border-cyan-400/50 rounded-sm shadow-2xl shadow-cyan-400/20">
          {/* Neon inner glow */}
          <div className="absolute inset-0.5 bg-gradient-to-br from-cyan-400/10 via-transparent to-red-500/10 rounded-sm" />
          
          <HexagonalAim aim={leftAim} />
          
          {/* Active state effects */}
          <motion.div
            className="absolute inset-0 bg-cyan-400/5 rounded-sm"
            animate={{
              opacity: leftAim.distance > 100 ? 0.8 : 0.2,
              boxShadow: leftAim.distance > 100 
                ? '0 0 20px rgba(34, 211, 238, 0.4), inset 0 0 10px rgba(34, 211, 238, 0.2)' 
                : '0 0 8px rgba(34, 211, 238, 0.2)'
            }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Edge highlights */}
          <div className="absolute top-0 left-0 w-2 h-px bg-cyan-400/60" />
          <div className="absolute top-0 left-0 w-px h-2 bg-cyan-400/60" />
          <div className="absolute top-0 right-0 w-2 h-px bg-cyan-400/60" />
          <div className="absolute top-0 right-0 w-px h-2 bg-cyan-400/60" />
          <div className="absolute bottom-0 left-0 w-2 h-px bg-cyan-400/60" />
          <div className="absolute bottom-0 left-0 w-px h-2 bg-cyan-400/60" />
          <div className="absolute bottom-0 right-0 w-2 h-px bg-cyan-400/60" />
          <div className="absolute bottom-0 right-0 w-px h-2 bg-cyan-400/60" />
        </div>
      </motion.div>

      {/* Right Futuristic Aim Eye */}
      <motion.div
        className="relative w-8 h-8"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.7 }}
      >
        {/* Main container with neon glow */}
        <div className="relative w-full h-full bg-black/90 backdrop-blur-sm border border-cyan-400/50 rounded-sm shadow-2xl shadow-cyan-400/20">
          {/* Neon inner glow */}
          <div className="absolute inset-0.5 bg-gradient-to-br from-cyan-400/10 via-transparent to-red-500/10 rounded-sm" />
          
          <HexagonalAim aim={rightAim} />
          
          {/* Active state effects */}
          <motion.div
            className="absolute inset-0 bg-cyan-400/5 rounded-sm"
            animate={{
              opacity: rightAim.distance > 100 ? 0.8 : 0.2,
              boxShadow: rightAim.distance > 100 
                ? '0 0 20px rgba(34, 211, 238, 0.4), inset 0 0 10px rgba(34, 211, 238, 0.2)' 
                : '0 0 8px rgba(34, 211, 238, 0.2)'
            }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Edge highlights */}
          <div className="absolute top-0 left-0 w-2 h-px bg-cyan-400/60" />
          <div className="absolute top-0 left-0 w-px h-2 bg-cyan-400/60" />
          <div className="absolute top-0 right-0 w-2 h-px bg-cyan-400/60" />
          <div className="absolute top-0 right-0 w-px h-2 bg-cyan-400/60" />
          <div className="absolute bottom-0 left-0 w-2 h-px bg-cyan-400/60" />
          <div className="absolute bottom-0 left-0 w-px h-2 bg-cyan-400/60" />
          <div className="absolute bottom-0 right-0 w-2 h-px bg-cyan-400/60" />
          <div className="absolute bottom-0 right-0 w-px h-2 bg-cyan-400/60" />
        </div>
      </motion.div>
    </div>
  );
};