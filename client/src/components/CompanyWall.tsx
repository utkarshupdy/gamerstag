import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Play } from 'lucide-react';
import { SanityCompanyWall } from '../types/sanity';
import { urlFor } from '../lib/sanity';

interface CompanyWallProps {
  items: SanityCompanyWall[];
}

export default function CompanyWall({ items }: CompanyWallProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    if (items.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [items.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  if (!items || items.length === 0) return null;

  const currentItem = items[currentIndex];

  const getContentAlignment = (template: string) => {
    switch (template) {
      case 'left':
      case 'left-alt':
        return 'items-start text-left';
      case 'right':
        return 'items-end text-right';
      case 'center':
        return 'items-center text-center';
      default:
        return 'items-start text-left';
    }
  };

  const getContentPosition = (template: string) => {
    switch (template) {
      case 'left':
      case 'left-alt':
        return 'justify-start';
      case 'right':
        return 'justify-end';
      case 'center':
        return 'justify-center';
      default:
        return 'justify-start';
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={urlFor(currentItem.featuredImage).width(1920).height(1080).url()}
              alt={currentItem.title}
              className="w-full h-full object-cover"
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
            {/* Gradient overlay based on template */}
            {currentItem.template === 'left' || currentItem.template === 'left-alt' ? (
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
            ) : currentItem.template === 'right' ? (
              <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/40 to-transparent"></div>
            ) : (
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/40"></div>
            )}
          </div>

          {/* Content */}
          <div className={`relative z-10 h-full flex ${getContentPosition(currentItem.template)} items-center px-4 sm:px-8 md:px-16 lg:px-24`}>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`w-full max-w-2xl space-y-4 sm:space-y-6 ${getContentAlignment(currentItem.template)}`}
            >
              {/* Title */}
              <h1 className="font-primary text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                {currentItem.title}
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl">
                {currentItem.description}
              </p>

              {/* Buttons */}
              <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 w-full ${
                currentItem.template === 'center' 
                  ? 'items-center sm:justify-center' 
                  : currentItem.template === 'right' 
                    ? 'items-stretch sm:items-start sm:justify-end' 
                    : 'items-stretch sm:items-start sm:justify-start'
              }`}>
                {currentItem.primaryButton && (
                  <motion.div
                    className="relative group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* HUD Outer Lines - Only visible on hover */}
                    <motion.div
                      className="absolute -top-2 -left-2 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <div className="absolute top-0 left-0 w-4 h-1 bg-[#E5042F]"></div>
                      <div className="absolute top-0 left-0 w-1 h-4 bg-[#E5042F]"></div>
                    </motion.div>
                    <motion.div
                      className="absolute -top-2 -right-2 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <div className="absolute top-0 right-0 w-4 h-1 bg-[#E5042F]"></div>
                      <div className="absolute top-0 right-0 w-1 h-4 bg-[#E5042F]"></div>
                    </motion.div>
                    <motion.div
                      className="absolute -bottom-2 -left-2 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <div className="absolute bottom-0 left-0 w-4 h-1 bg-[#E5042F]"></div>
                      <div className="absolute bottom-0 left-0 w-1 h-4 bg-[#E5042F]"></div>
                    </motion.div>
                    <motion.div
                      className="absolute -bottom-2 -right-2 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <div className="absolute bottom-0 right-0 w-4 h-1 bg-[#E5042F]"></div>
                      <div className="absolute bottom-0 right-0 w-1 h-4 bg-[#E5042F]"></div>
                    </motion.div>

                    <motion.a
                      href={currentItem.primaryButton.link}
                      whileHover={{ 
                        boxShadow: "0 0 20px rgba(229, 4, 47, 0.6), inset 0 0 20px rgba(229, 4, 47, 0.1)"
                      }}
                      className="inline-flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-8 py-3 sm:py-4 bg-[#E5042F] text-white font-button font-bold text-sm sm:text-lg uppercase tracking-wider hover:bg-[#E5042F]/80 transition-all duration-300 relative overflow-hidden w-full sm:w-auto"
                    >
                      {/* HUD scanning line animation */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      />
                      {/* Corner brackets */}
                      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white/40"></div>
                      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white/40"></div>
                      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white/40"></div>
                      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white/40"></div>
                      
                      <ArrowRight className="w-5 h-5 relative z-10" />
                      <span className="relative z-10">{currentItem.primaryButton.text}</span>
                    </motion.a>
                  </motion.div>
                )}

                {currentItem.secondaryButton && (
                  <motion.a
                    href={currentItem.secondaryButton.link}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 0 20px rgba(229, 4, 47, 0.4), inset 0 0 15px rgba(229, 4, 47, 0.1)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-[#E5042F] text-[#E5042F] font-button font-bold text-sm sm:text-lg uppercase tracking-wider hover:bg-[#E5042F] hover:text-white transition-all duration-300 relative group overflow-hidden w-full sm:w-auto"
                    style={{
                      clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)'
                    }}
                  >
                    {/* HUD scanning line animation */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E5042F]/30 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    />
                    {/* Angular corner decorations with pulse */}
                    <motion.div 
                      className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#E5042F]"
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    ></motion.div>
                    <motion.div 
                      className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#E5042F]"
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    ></motion.div>
                    
                    <Play className="w-5 h-5 relative z-10" />
                    <span className="relative z-10">{currentItem.secondaryButton.text}</span>
                  </motion.a>
                )}
              </div>
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          {items.length > 1 && (
            <>
              <motion.button
                onClick={prevSlide}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 z-20 bg-black/50 border border-white/30 text-white p-2 sm:p-4 hover:bg-[#E5042F]/80 hover:border-[#E5042F] transition-all duration-300 backdrop-blur-sm"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                }}
              >
                <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
              </motion.button>

              <motion.button
                onClick={nextSlide}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 z-20 bg-black/50 border border-white/30 text-white p-2 sm:p-4 hover:bg-[#E5042F]/80 hover:border-[#E5042F] transition-all duration-300 backdrop-blur-sm"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                }}
              >
                <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
              </motion.button>
            </>
          )}

          {/* HUD Navigation Indicators */}
          {items.length > 1 && (
            <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2 sm:space-x-3">
              {items.slice(0, 4).map((_, index) => {
                const isActive = index === currentIndex;
                
                return (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    className="relative w-6 h-6 sm:w-8 sm:h-8 cursor-pointer group"
                  >
                    {/* Hexagonal HUD Design */}
                    <div className={`absolute inset-0 transition-all duration-300 ${
                      isActive
                        ? 'bg-[#E5042F] border-2 border-white shadow-[0_0_15px_#E5042F]'
                        : 'bg-black/60 border-2 border-white/30 group-hover:border-[#E5042F]/70 group-hover:bg-[#E5042F]/20'
                    }`}
                    style={{
                      clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                    }}
                    />
                    
                    {/* Inner Core */}
                    <div className={`absolute inset-1 transition-all duration-300 ${
                      isActive
                        ? 'bg-white/20'
                        : 'bg-transparent group-hover:bg-white/10'
                    }`}
                    style={{
                      clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                    }}
                    />
                    
                    {/* Pulsing Effect for Active */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 bg-[#E5042F]/30 border-2 border-[#E5042F]/50"
                        style={{
                          clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                        }}
                        animate={{ 
                          scale: [1, 1.3, 1],
                          opacity: [0.7, 0, 0.7]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                        }}
                      />
                    )}
                    
                    {/* Center Dot */}
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      isActive ? 'bg-white' : 'bg-white/60 group-hover:bg-white'
                    }`} />
                    
                    {/* Corner Accents */}
                    {isActive && (
                      <>
                        <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-white/60"></div>
                        <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-white/60"></div>
                        <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-white/60"></div>
                        <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-white/60"></div>
                      </>
                    )}
                  </motion.button>
                );
              })}
            </div>
          )}

          {/* Enhanced Organic Wave Glow Effect with Glitter */}
          <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
            {/* Organic Wave Flow - Bottom Left */}
            <motion.div
              className="absolute bottom-0 left-0 w-[600px] h-[400px]"
              animate={{
                scale: [0.7, 1.3, 0.9, 1.1, 0.7],
                opacity: [0.2, 0.8, 0.4, 0.6, 0.2],
                rotate: [0, 15, -10, 5, 0],
                x: [-50, 30, -20, 10, -50],
                y: [-30, 20, -10, 15, -30]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.3, 0.6, 0.8, 1]
              }}
              style={{
                background: `
                  radial-gradient(ellipse 80% 60% at 20% 80%, 
                    rgba(229, 4, 47, 0.6) 0%, 
                    rgba(229, 4, 47, 0.3) 30%, 
                    rgba(229, 4, 47, 0.1) 50%, 
                    transparent 70%
                  )
                `,
                filter: 'blur(2px)'
              }}
            />
            
            {/* Organic Wave Flow - Bottom Right */}
            <motion.div
              className="absolute bottom-0 right-0 w-[500px] h-[350px]"
              animate={{
                scale: [1.2, 0.6, 1.4, 0.8, 1.2],
                opacity: [0.3, 0.7, 0.2, 0.9, 0.3],
                rotate: [0, -20, 25, -15, 0],
                x: [20, -40, 35, -15, 20],
                y: [-20, 40, -25, 30, -20]
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3,
                times: [0, 0.25, 0.5, 0.75, 1]
              }}
              style={{
                background: `
                  radial-gradient(ellipse 70% 90% at 80% 90%, 
                    rgba(229, 4, 47, 0.7) 0%, 
                    rgba(229, 4, 47, 0.4) 25%, 
                    rgba(229, 4, 47, 0.15) 45%, 
                    transparent 65%
                  )
                `,
                filter: 'blur(1.5px)'
              }}
            />
            
            {/* Organic Wave Flow - Top Left */}
            <motion.div
              className="absolute top-0 left-0 w-[400px] h-[300px]"
              animate={{
                scale: [0.8, 1.5, 0.6, 1.2, 0.8],
                opacity: [0.15, 0.6, 0.3, 0.45, 0.15],
                rotate: [0, 30, -25, 20, 0],
                x: [-30, 50, -40, 25, -30],
                y: [-15, 35, -20, 40, -15]
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 7,
                times: [0, 0.2, 0.4, 0.7, 1]
              }}
              style={{
                background: `
                  radial-gradient(ellipse 90% 70% at 30% 20%, 
                    rgba(229, 4, 47, 0.5) 0%, 
                    rgba(229, 4, 47, 0.2) 35%, 
                    rgba(229, 4, 47, 0.08) 55%, 
                    transparent 75%
                  )
                `,
                filter: 'blur(3px)'
              }}
            />
            
            {/* Organic Wave Flow - Top Right */}
            <motion.div
              className="absolute top-0 right-0 w-[450px] h-[320px]"
              animate={{
                scale: [1.1, 0.7, 1.6, 0.9, 1.1],
                opacity: [0.25, 0.5, 0.1, 0.8, 0.25],
                rotate: [0, -35, 40, -20, 0],
                x: [40, -60, 30, -35, 40],
                y: [-40, 25, -30, 45, -40]
              }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 12,
                times: [0, 0.3, 0.5, 0.8, 1]
              }}
              style={{
                background: `
                  radial-gradient(ellipse 85% 75% at 70% 30%, 
                    rgba(229, 4, 47, 0.55) 0%, 
                    rgba(229, 4, 47, 0.25) 30%, 
                    rgba(229, 4, 47, 0.1) 50%, 
                    transparent 70%
                  )
                `,
                filter: 'blur(2.5px)'
              }}
            />
            
            {/* Central Convergence Spiral */}
            <motion.div
              className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2"
              animate={{
                scale: [0.3, 2.2, 0.8, 1.8, 0.3],
                opacity: [0.05, 0.4, 0.15, 0.3, 0.05],
                rotate: [0, 180, 90, 270, 360]
              }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 5,
                times: [0, 0.25, 0.5, 0.75, 1]
              }}
              style={{
                background: `
                  conic-gradient(from 0deg, 
                    transparent 0deg, 
                    rgba(229, 4, 47, 0.3) 45deg, 
                    transparent 90deg, 
                    rgba(229, 4, 47, 0.2) 135deg, 
                    transparent 180deg, 
                    rgba(229, 4, 47, 0.25) 225deg, 
                    transparent 270deg, 
                    rgba(229, 4, 47, 0.15) 315deg, 
                    transparent 360deg
                  )
                `,
                filter: 'blur(4px)'
              }}
            />
            
            {/* Glitter Effect Layer 1 */}
            <motion.div
              className="absolute inset-0"
              animate={{
                opacity: [0.3, 0.8, 0.2, 0.9, 0.3]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                background: `
                  radial-gradient(2px 2px at 20% 30%, rgba(255, 255, 255, 0.8) 0%, transparent 50%),
                  radial-gradient(2px 2px at 40% 70%, rgba(229, 4, 47, 0.9) 0%, transparent 50%),
                  radial-gradient(1px 1px at 60% 20%, rgba(255, 255, 255, 0.7) 0%, transparent 50%),
                  radial-gradient(1px 1px at 80% 80%, rgba(229, 4, 47, 0.8) 0%, transparent 50%),
                  radial-gradient(2px 2px at 10% 90%, rgba(255, 255, 255, 0.6) 0%, transparent 50%),
                  radial-gradient(1px 1px at 90% 10%, rgba(229, 4, 47, 0.7) 0%, transparent 50%)
                `,
                backgroundSize: '400px 400px, 300px 300px, 200px 200px, 350px 350px, 250px 250px, 150px 150px'
              }}
            />
            
            {/* Glitter Effect Layer 2 - Moving */}
            <motion.div
              className="absolute inset-0"
              animate={{
                opacity: [0.2, 0.7, 0.4, 0.8, 0.2],
                x: [-20, 20, -15, 25, -20],
                y: [-15, 30, -25, 15, -15]
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 4
              }}
              style={{
                background: `
                  radial-gradient(1px 1px at 25% 40%, rgba(255, 255, 255, 0.9) 0%, transparent 50%),
                  radial-gradient(2px 2px at 75% 60%, rgba(229, 4, 47, 0.8) 0%, transparent 50%),
                  radial-gradient(1px 1px at 50% 10%, rgba(255, 255, 255, 0.7) 0%, transparent 50%),
                  radial-gradient(1px 1px at 30% 85%, rgba(229, 4, 47, 0.9) 0%, transparent 50%),
                  radial-gradient(2px 2px at 85% 25%, rgba(255, 255, 255, 0.6) 0%, transparent 50%)
                `,
                backgroundSize: '500px 500px, 400px 400px, 300px 300px, 450px 450px, 350px 350px'
              }}
            />
            
            {/* Ambient Base Glow */}
            <motion.div
              className="absolute bottom-0 w-full h-40"
              animate={{
                opacity: [0.3, 0.7, 0.5, 0.8, 0.3]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                background: `
                  linear-gradient(to top, 
                    rgba(229, 4, 47, 0.4) 0%, 
                    rgba(229, 4, 47, 0.2) 20%, 
                    rgba(229, 4, 47, 0.1) 40%, 
                    rgba(229, 4, 47, 0.05) 60%, 
                    transparent 100%
                  )
                `,
                filter: 'blur(1px)'
              }}
            />
          </div>

          {/* Progress Bar */}
          {items.length > 1 && (
            <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
              <motion.div
                className="h-full bg-[#E5042F]"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 6, ease: 'linear' }}
                key={currentIndex}
              />
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}