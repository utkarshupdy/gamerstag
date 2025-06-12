import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface HudLoaderProps {
  isLoading: boolean;
}

interface TypewriterTextProps {
  text: string;
  delay: number;
  speed?: number;
  className?: string;
}

function TypewriterText({ text, delay, speed = 100, className = "" }: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay + currentIndex * speed);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, delay, speed]);

  return (
    <span className={className}>
      {displayedText}
      <motion.span
        className="inline-block w-0.5 h-5 bg-[#E5042F] ml-1"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </span>
  );
}

export function HudLoader({ isLoading }: HudLoaderProps) {
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setLoadingProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + Math.random() * 3 + 1;
        });
      }, 80);

      return () => clearInterval(interval);
    }
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center font-mono"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Animated Background Grid */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(0, 255, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(229, 4, 47, 0.1) 0%, transparent 50%),
              linear-gradient(rgba(0, 255, 255, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(229, 4, 47, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '200px 200px, 200px 200px, 30px 30px, 30px 30px'
          }}
        />
        {/* Moving particles */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '80px 80px']
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>

      {/* Hexagonal Glassmorphic HUD Interface */}
      <div className="relative flex flex-col items-center">
        {/* Main Hexagonal Container */}
        <motion.div 
          className="relative w-96 h-96 mb-8"
          initial={{ scale: 0.3, opacity: 0, rotateY: 180 }}
          animate={{ scale: 1, opacity: 1, rotateY: 0 }}
          transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
        >
          {/* Hexagonal Frame with Glassmorphism */}
          <motion.div
            className="absolute inset-0 backdrop-blur-xl bg-gradient-to-br from-cyan-500/10 to-[#E5042F]/10 border-2 border-cyan-400/30"
            style={{
              clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)'
            }}
            animate={{
              borderColor: ['rgba(0, 255, 255, 0.3)', 'rgba(229, 4, 47, 0.3)', 'rgba(0, 255, 255, 0.3)']
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Rotating Outer Ring */}
          <motion.div
            className="absolute inset-2 border-2 border-cyan-400/20"
            style={{
              clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)'
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />

          {/* Inner Hexagonal Details */}
          <motion.div
            className="absolute inset-8 border border-[#E5042F]/40 bg-black/20"
            style={{
              clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)'
            }}
            animate={{ 
              borderColor: ['rgba(229, 4, 47, 0.4)', 'rgba(0, 255, 255, 0.4)', 'rgba(229, 4, 47, 0.4)'],
              backgroundColor: ['rgba(0, 0, 0, 0.2)', 'rgba(229, 4, 47, 0.05)', 'rgba(0, 0, 0, 0.2)']
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Corner Tech Elements */}
          {Array.from({ length: 6 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-8 h-8 border-2 border-cyan-400/60"
              style={{
                top: `${15 + Math.sin((i * Math.PI) / 3) * 35}%`,
                left: `${50 + Math.cos((i * Math.PI) / 3) * 35}%`,
                transform: 'translate(-50%, -50%)',
                clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8],
                rotate: 360
              }}
              transition={{ 
                delay: i * 0.2,
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}

          {/* Central Logo Area */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div className="relative w-16 h-16 border-2 border-[#E5042F] bg-black/40 backdrop-blur-sm flex items-center justify-center"
                 style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}>
              <motion.div
                className="text-2xl font-bold text-[#E5042F] tracking-widest"
                animate={{ 
                  textShadow: ['0 0 5px #E5042F', '0 0 20px #E5042F', '0 0 5px #E5042F']
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                GT
              </motion.div>
            </div>
          </motion.div>

          {/* Tech Details */}
          <motion.div className="absolute -top-4 left-4 text-cyan-400 text-xs font-mono opacity-70">
            SYS.INIT
          </motion.div>
          <motion.div className="absolute -top-4 right-4 text-cyan-400 text-xs font-mono opacity-70">
            v2.1.0
          </motion.div>
          <motion.div className="absolute -bottom-4 left-4 text-cyan-400 text-xs font-mono opacity-70">
            NETWORK
          </motion.div>
          <motion.div className="absolute -bottom-4 right-4 text-cyan-400 text-xs font-mono opacity-70">
            ONLINE
          </motion.div>
        </motion.div>

        {/* Typewriter Welcome Text */}
        <motion.div
          className="text-center mb-8 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <div className="text-3xl md:text-4xl font-bold text-white tracking-wider mb-2">
            <TypewriterText 
              text="Welcome to Super App for Gaming and Esports"
              delay={2000}
              speed={80}
              className="font-orbitron"
            />
          </div>
        </motion.div>

        {/* Advanced HUD Loading Bar */}
        <motion.div 
          className="relative w-full max-w-lg mb-8"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          {/* Loading Bar Container */}
          <div className="relative h-8 bg-black/60 border border-cyan-400/30 backdrop-blur-sm"
               style={{ clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)' }}>
            
            {/* Progress Fill */}
            <motion.div
              className="absolute inset-0.5 bg-gradient-to-r from-cyan-400 to-[#E5042F]"
              style={{ 
                clipPath: 'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)',
                width: `${Math.min(loadingProgress, 100)}%`
              }}
              initial={{ width: '0%' }}
              animate={{ width: `${Math.min(loadingProgress, 100)}%` }}
            />

            {/* Loading Segments */}
            <div className="absolute inset-0 flex">
              {Array.from({ length: 30 }, (_, i) => (
                <div 
                  key={i}
                  className="flex-1 border-r border-black/20 h-full"
                />
              ))}
            </div>

            {/* Progress Percentage */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-sm font-mono font-bold">
                {Math.floor(loadingProgress)}%
              </span>
            </div>

            {/* Corner Tech Elements */}
            <div className="absolute -left-2 top-0 w-4 h-2 border-l-2 border-t-2 border-cyan-400/60" />
            <div className="absolute -right-2 top-0 w-4 h-2 border-r-2 border-t-2 border-cyan-400/60" />
            <div className="absolute -left-2 bottom-0 w-4 h-2 border-l-2 border-b-2 border-cyan-400/60" />
            <div className="absolute -right-2 bottom-0 w-4 h-2 border-r-2 border-b-2 border-cyan-400/60" />
          </div>

          {/* Loading Bar Labels */}
          <div className="flex justify-between text-xs font-mono text-cyan-400/70 mt-2">
            <span>LOADING</span>
            <span>GAMING SYSTEM</span>
            <span>READY</span>
          </div>
        </motion.div>

        {/* System Status */}
        <motion.div
          className="text-center space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 0.5 }}
        >
          <motion.p
            className="text-cyan-400 text-sm font-mono tracking-wider"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            INITIALIZING GAMING PROTOCOLS...
          </motion.p>
          <motion.div className="flex justify-center space-x-4 text-xs font-mono text-white/60">
            <span>NETWORK: ONLINE</span>
            <span>|</span>
            <span>STATUS: READY</span>
            <span>|</span>
            <span>SECURE: ACTIVE</span>
          </motion.div>
        </motion.div>

        {/* Scanning Effects */}
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          {/* Vertical Scanning Line */}
          <motion.div
            className="absolute top-0 w-1 h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
            animate={{ x: ['-100px', 'calc(100vw + 100px)'] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Horizontal Scanning Line */}
          <motion.div
            className="absolute left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E5042F] to-transparent"
            animate={{ y: ['-100px', 'calc(100vh + 100px)'] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
              delay: 1
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}