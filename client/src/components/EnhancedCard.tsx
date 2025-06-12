import { motion } from "framer-motion";
import { useGameSounds } from "@/hooks/use-sound";
import { cn } from "@/lib/utils";

interface EnhancedCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: 'lift' | 'glow' | 'scale' | 'none';
  soundEnabled?: boolean;
  delay?: number;
}

export function EnhancedCard({ 
  children, 
  className, 
  hoverEffect = 'lift', 
  soundEnabled = true,
  delay = 0 
}: EnhancedCardProps) {
  const { cardHover } = useGameSounds();

  const handleMouseEnter = () => {
    if (soundEnabled) cardHover();
  };

  const getHoverClasses = () => {
    switch (hoverEffect) {
      case 'lift':
        return 'hover:-translate-y-3 hover:shadow-lg hover:shadow-primary/25';
      case 'glow':
        return 'hover:shadow-lg hover:shadow-primary/30 hover:border-primary/50';
      case 'scale':
        return 'hover:scale-105 hover:shadow-lg hover:shadow-primary/25';
      default:
        return '';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={cn(
        "glass-card p-6 relative overflow-hidden transition-all duration-300 cursor-pointer group",
        getHoverClasses(),
        className
      )}
      onMouseEnter={handleMouseEnter}
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:translate-x-full transition-transform duration-700" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}