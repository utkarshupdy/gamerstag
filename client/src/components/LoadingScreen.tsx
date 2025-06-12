import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  isLoading: boolean;
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({
  isLoading,
  onComplete
}) => {
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (!isLoading) return;

    // Show content immediately
    setShowContent(true);

    // Progress tracking
    const duration = 4000; // 4 seconds
    const interval = 50;
    let elapsed = 0;
    
    const progressTimer = setInterval(() => {
      elapsed += interval;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);

      if (newProgress >= 100) {
        clearInterval(progressTimer);
        setTimeout(() => {
          onComplete();
        }, 500);
      }
    }, interval);

    return () => clearInterval(progressTimer);
  }, [isLoading, onComplete]);

  // Particle system for background
  const Particles = () => (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );

  // Grid lines background
  const GridLines = () => (
    <div className="absolute inset-0">
      {/* Radiating lines */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-px h-full bg-gradient-to-b from-transparent via-blue-500/30 to-transparent origin-bottom"
          style={{
            left: '50%',
            transformOrigin: 'bottom center',
            transform: `translateX(-50%) rotate(${i * 45}deg)`,
          }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: showContent ? 1 : 0 }}
          transition={{ duration: 1.5, delay: i * 0.1 }}
        />
      ))}
      
      {/* Concentric circles */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute border border-blue-500/20 rounded-full"
          style={{
            width: `${(i + 1) * 200}px`,
            height: `${(i + 1) * 200}px`,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: showContent ? 1 : 0, opacity: showContent ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.5 + i * 0.2 }}
        />
      ))}
    </div>
  );

  // HUD Progress Bar
  const HUDProgressBar = ({ progress }: { progress: number }) => (
    <motion.div
      className="relative w-full max-w-md mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.5 }}
    >
      {/* Main container with glassmorphic effect */}
      <div className="relative p-4 bg-white/5 backdrop-blur-lg border border-white/20 rounded-lg shadow-2xl">
        {/* Corner brackets */}
        <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-red-500" />
        <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-red-500" />
        <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-red-500" />
        <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-red-500" />
        
        {/* Loading text and percentage */}
        <div className="flex justify-between items-center mb-3 text-sm font-mono text-white/90">
          <span>LOADING SYSTEM</span>
          <span>{Math.round(progress)}%</span>
        </div>
        
        {/* Progress bar container */}
        <div className="relative h-6 bg-black/40 border border-red-500/30 rounded overflow-hidden">
          {/* Progress fill */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-500 to-red-400"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Animated glow */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            style={{ width: `${progress}%` }}
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Grid overlay */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '20px 100%'
            }}
          />
        </div>
        
        {/* Status indicators */}
        <div className="flex justify-between items-center mt-3 text-xs font-mono text-red-400">
          <span>SYS_INIT</span>
          <span>PWR_OK</span>
          <span>CONN_EST</span>
        </div>
      </div>
    </motion.div>
  );

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900/30 to-black overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background elements */}
          <Particles />
          <GridLines />
          
          {/* Main content */}
          <div className="relative z-10 w-full h-full flex flex-col">
            {/* Top section - Welcome text */}
            <div className="flex-1 flex flex-col items-center justify-center">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : -30 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <motion.h2 
                  className="font-description text-lg sm:text-xl text-white/80 tracking-widest mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: showContent ? 1 : 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  W E L C O M E &nbsp; T O
                </motion.h2>
                
                <motion.h1 
                  className="font-primary font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-wider leading-none mb-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: showContent ? 1 : 0, scale: showContent ? 1 : 0.9 }}
                  transition={{ duration: 1.2, delay: 1 }}
                >
                  <span className="inline-block">G A M E R S</span>
                  <br />
                  <motion.span
                    className="inline-block text-red-500"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: showContent ? 1 : 0, x: showContent ? 0 : -50 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                  >
                    T A G
                  </motion.span>
                </motion.h1>
                
                <motion.p 
                  className="font-description text-sm sm:text-base text-white/70 tracking-widest"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
                  transition={{ duration: 0.8, delay: 1.8 }}
                >
                  S U P E R &nbsp; A P P &nbsp; F O R &nbsp; G A M I N G &nbsp; & &nbsp; E S P O R T S
                </motion.p>
              </motion.div>
            </div>

            {/* Bottom section - Progress bar */}
            <div className="flex-1 flex items-end justify-center pb-20">
              <HUDProgressBar progress={progress} />
            </div>
          </div>

          {/* Ambient glow effects */}
          <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};