import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Zap, User, Clock, Shield } from 'lucide-react';

interface NotificationUser {
  id: string;
  name: string;
  gtId: string;
  avatar?: string;
  joinTime: string;
}

interface GamifiedNotificationProps {
  user: NotificationUser | null;
  onClose: () => void;
}

export function GamifiedNotification({ user, onClose }: GamifiedNotificationProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (user) {
      setIsVisible(true);
      
      // Auto-close after 8 seconds
      const timer = setTimeout(() => {
        handleClose();
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, [user]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 1000); // Wait for exit animation
  };

  if (!user) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 pointer-events-none">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ 
              x: 450, 
              opacity: 0, 
              scale: 0.7,
              rotateY: 90
            }}
            animate={{ 
              x: 0, 
              opacity: 1, 
              scale: 1,
              rotateY: 0
            }}
            exit={{ 
              x: 450, 
              opacity: 0, 
              scale: 0.7,
              rotateY: -90
            }}
            transition={{ 
              type: "spring",
              stiffness: 150,
              damping: 20,
              duration: 1.2,
              ease: "easeOut"
            }}
            className="pointer-events-auto relative"
          >
            {/* Main HUD Container */}
            <div className="relative bg-gradient-to-br from-black/80 via-gray-900/70 to-black/90 backdrop-blur-xl border-2 border-[#E5042F] min-w-[350px] max-w-[400px] shadow-2xl shadow-[#E5042F]/50 overflow-hidden">
              
              {/* Glassmorphic Inner Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent"></div>
              
              {/* Animated Outer Glow Ring */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-[#E5042F]/50 via-white/30 to-[#E5042F]/50 blur-sm"
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.02, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Animated Border Glow */}
              <motion.div
                className="absolute inset-0 border-2 border-white/70 opacity-0"
                animate={{ 
                  opacity: [0, 0.9, 0],
                  boxShadow: [
                    "0 0 0px rgba(255,255,255,0)",
                    "0 0 20px rgba(255,255,255,0.4)",
                    "0 0 0px rgba(255,255,255,0)"
                  ]
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Corner HUD Elements */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#E5042F]"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#E5042F]"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#E5042F]"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#E5042F]"></div>

              {/* Scanning Lines Animation */}
              <motion.div
                className="absolute inset-0 opacity-30"
                initial={false}
                animate={{
                  background: [
                    "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 30%, rgba(229,4,47,0.3) 50%, rgba(255,255,255,0.1) 70%, transparent 100%)",
                    "linear-gradient(90deg, transparent 100%, rgba(255,255,255,0.1) 70%, rgba(229,4,47,0.3) 50%, rgba(255,255,255,0.1) 30%, transparent 0%)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />

              {/* Status Indicator */}
              <div className="absolute top-3 right-3 z-20">
                <motion.div 
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.7, 1]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-3 h-3 bg-[#E5042F] rounded-full shadow-[0_0_10px_#E5042F]"
                />
              </div>

              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-2 right-8 p-1.5 text-gray-400 hover:text-white transition-colors duration-200 z-30 hover:bg-white/10 rounded"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Content */}
              <div className="relative p-5">
                
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="flex items-center gap-3 mb-4"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                    className="p-2 bg-[#E5042F]/20 rounded-full border border-[#E5042F]/50"
                  >
                    <Shield className="w-5 h-5 text-[#E5042F]" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                  >
                    <h3 className="text-[#E5042F] font-orbitron font-bold text-sm uppercase tracking-wider">
                      GAMER DETECTED
                    </h3>
                    <p className="text-gray-400 text-xs">New player joined the arena</p>
                  </motion.div>
                </motion.div>

                {/* User Info */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  className="flex items-center gap-4 mb-4"
                >
                  {/* Avatar */}
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#E5042F]/40 via-white/10 to-gray-800/60 p-0.5 border border-[#E5042F]/60 backdrop-blur-sm shadow-lg shadow-[#E5042F]/30">
                      <div className="w-full h-full bg-gradient-to-br from-black/90 via-gray-900/80 to-black/95 backdrop-blur-md flex items-center justify-center overflow-hidden border border-white/10">
                        {user.avatar ? (
                          <img 
                            src={user.avatar} 
                            alt={user.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <User className="w-8 h-8 text-[#E5042F] drop-shadow-lg" />
                        )}
                      </div>
                    </div>
                    
                    {/* Avatar Glassmorphic Pulse Ring */}
                    <motion.div
                      className="absolute inset-0 border-2 border-white/40 backdrop-blur-sm"
                      initial={{ scale: 1, opacity: 0.8 }}
                      animate={{ 
                        scale: [1, 1.3, 1], 
                        opacity: [0.8, 0, 0.8],
                        boxShadow: [
                          "0 0 0px rgba(255,255,255,0)",
                          "0 0 15px rgba(255,255,255,0.3)",
                          "0 0 0px rgba(255,255,255,0)"
                        ]
                      }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 2.5,
                        ease: "easeInOut"
                      }}
                    />
                  </div>

                  {/* User Details */}
                  <div className="flex-1">
                    <motion.h4 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.1, duration: 0.5 }}
                      className="text-white font-bold text-lg leading-tight"
                    >
                      {user.name}
                    </motion.h4>
                    
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.3, duration: 0.5 }}
                      className="flex items-center gap-2 mt-1"
                    >
                      <Zap className="w-3 h-3 text-[#E5042F]" />
                      <span className="text-[#E5042F] text-sm font-mono font-bold">
                        {user.gtId}
                      </span>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.5, duration: 0.5 }}
                      className="flex items-center gap-2 mt-1"
                    >
                      <Clock className="w-3 h-3 text-gray-400" />
                      <span className="text-gray-400 text-xs">
                        Joined {user.joinTime}
                      </span>
                    </motion.div>
                  </div>
                </motion.div>



                {/* Bottom HUD Lines with Glassmorphic Effect */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.7, duration: 0.6 }}
                  className="absolute bottom-2 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent shadow-lg"
                  style={{
                    boxShadow: "0 0 8px rgba(255,255,255,0.3)"
                  }}
                />
              </div>

              {/* Enhanced Glassmorphic Particle Effects */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full"
                    style={{
                      background: i % 3 === 0 
                        ? "rgba(255,255,255,0.8)" 
                        : i % 3 === 1 
                        ? "rgba(229,4,47,0.9)" 
                        : "rgba(255,255,255,0.6)",
                      boxShadow: i % 3 === 0 
                        ? "0 0 6px rgba(255,255,255,0.8)" 
                        : i % 3 === 1 
                        ? "0 0 8px rgba(229,4,47,0.6)" 
                        : "0 0 4px rgba(255,255,255,0.4)"
                    }}
                    initial={{ 
                      x: Math.random() * 350,
                      y: Math.random() * 200,
                      opacity: 0 
                    }}
                    animate={{ 
                      y: [null, -40, -80],
                      opacity: [0, 1, 0],
                      scale: [0, 1.2, 0]
                    }}
                    transition={{ 
                      delay: Math.random() * 5,
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}