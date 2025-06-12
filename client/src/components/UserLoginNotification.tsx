import { useState, useEffect } from 'react';
import { X, Users, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NewUser {
  id: string;
  name: string;
  gtId: string;
  avatar?: string;
  joinedAt: Date;
}

interface UserLoginNotificationProps {
  newUser: NewUser | null;
  onClose: () => void;
}

export function UserLoginNotification({ newUser, onClose }: UserLoginNotificationProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (newUser) {
      setIsVisible(true);
      
      // Auto-close after 10 seconds
      const timer = setTimeout(() => {
        handleClose();
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [newUser]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 800); // Wait for longer exit animation
  };

  if (!newUser) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 pointer-events-none">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ x: 500, opacity: 0, scale: 0.8 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: 500, opacity: 0, scale: 0.8 }}
            transition={{ 
              type: "spring",
              stiffness: 200,
              damping: 25,
              duration: 0.8,
              ease: "easeOut"
            }}
            className="pointer-events-auto relative"
          >
            {/* HUD-style notification container */}
            <div className="relative bg-black/90 backdrop-blur-sm border border-[#E5042F]/50 rounded-lg p-4 min-w-[320px] max-w-[380px] shadow-2xl">
              {/* HUD corner decorations */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#E5042F]"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#E5042F]"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#E5042F]"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#E5042F]"></div>

              {/* Animated HUD lines */}
              <motion.div 
                className="absolute top-1 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[#E5042F]/50 to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 1.2, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute bottom-1 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[#E5042F]/50 to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1.2, ease: "easeInOut" }}
              />

              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-2 right-2 p-1 text-gray-400 hover:text-white transition-colors duration-200 z-10"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Header with icon */}
              <div className="flex items-center gap-2 mb-3">
                <motion.div
                  initial={{ scale: 0, rotate: -360, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 1.0, ease: "easeOut" }}
                  className="p-2 bg-[#E5042F]/20 rounded-full border border-[#E5042F]/50"
                >
                  <Users className="w-4 h-4 text-[#E5042F]" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -40, y: 10 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                >
                  <h3 className="text-[#E5042F] font-orbitron font-bold text-sm">NEW USER JOINED</h3>
                  <p className="text-gray-400 text-xs">GAMERS TAG PLATFORM</p>
                </motion.div>
              </div>

              {/* User information */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.0, duration: 0.6, ease: "easeOut" }}
                className="flex items-center gap-3"
              >
                {/* User avatar/frame */}
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E5042F]/30 to-gray-800 p-0.5">
                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                      {newUser.avatar ? (
                        <img 
                          src={newUser.avatar} 
                          alt={newUser.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-[#E5042F]/20 to-gray-700 flex items-center justify-center">
                          <Users className="w-6 h-6 text-[#E5042F]" />
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Animated pulse ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-[#E5042F]/50"
                    initial={{ scale: 1, opacity: 1 }}
                    animate={{ scale: 1.3, opacity: 0 }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 1.5,
                      ease: "easeOut"
                    }}
                  />
                </div>

                {/* User details */}
                <div className="flex-1">
                  <motion.h4 
                    className="text-white font-semibold text-sm truncate"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
                  >
                    {newUser.name}
                  </motion.h4>
                  <motion.p 
                    className="text-[#E5042F] text-xs font-mono"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4, duration: 0.6, ease: "easeOut" }}
                  >
                    GT ID: {newUser.gtId}
                  </motion.p>
                  <motion.p 
                    className="text-gray-400 text-xs"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.6, duration: 0.6, ease: "easeOut" }}
                  >
                    New user joined GAMERS TAG app
                  </motion.p>
                </div>

                {/* Animated indicator */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
                  className="relative"
                >
                  <Zap className="w-5 h-5 text-[#E5042F]" />
                  <motion.div
                    className="absolute inset-0"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 2,
                      ease: "linear"
                    }}
                  >
                    <div className="w-5 h-5 border border-[#E5042F]/30 rounded-full border-t-[#E5042F]"></div>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* HUD-style progress bar */}
              <motion.div
                className="mt-3 h-1 bg-gray-800 rounded-full overflow-hidden"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 2.0, duration: 0.6, ease: "easeOut" }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-[#E5042F] to-orange-500"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 2.2, duration: 6, ease: "linear" }}
                />
              </motion.div>

              {/* Particle effects */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-[#E5042F] rounded-full"
                    initial={{ 
                      x: Math.random() * 320,
                      y: Math.random() * 120,
                      opacity: 0 
                    }}
                    animate={{ 
                      y: [null, -20, -40],
                      opacity: [0, 1, 0]
                    }}
                    transition={{ 
                      delay: Math.random() * 3,
                      duration: 3,
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