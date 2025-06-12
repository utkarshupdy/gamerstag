import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  User, 
  Link2, 
  Share2,
  MessageCircle,
  Newspaper, 
  Briefcase, 
  UserPlus, 
  CreditCard, 
  Sparkles,
  ArrowRight,
  Download,
  Zap,
  Shield,
  Palette,
  Volume2,
  Check,
  ChevronLeft,
  ChevronRight,
  ExternalLink
} from "lucide-react";

const features = [
  {
    id: "pro-gaming-profile",
    icon: User,
    title: "Pro Gaming Profile",
    subtitle: "Create Your Legacy",
    description: "Create your ultimate professional gaming identity with comprehensive portfolio showcase.",
    category: "Profile",
    color: "red",
    features: ["Dynamic Portfolio", "Achievement Tracker", "Brand Builder", "Industry Recognition"]
  },
  {
    id: "next-gen-onboarding",
    icon: Sparkles,
    title: "Next-Gen Onboarding",
    subtitle: "Cinematic Experience",
    description: "Step directly into the GAMERS TAG universe with an exciting, game-like onboarding experience.",
    category: "User Experience",
    color: "silver",
    features: ["Cinematic Intro", "Interactive Tutorial", "Gamified Progress", "Personalized Welcome"]
  },
  {
    id: "gaccounts", 
    icon: Share2,
    title: "GACCOUNTS",
    subtitle: "Social Integration",
    description: "Unite all your gaming and social platforms in one powerful hub.",
    category: "Integration",
    color: "white",
    features: ["Platform Sync", "Social Links", "Content Share", "Cross-Platform"]
  },
  {
    id: "gconnect",
    icon: Link2,
    title: "G GCONNECT", 
    subtitle: "Gaming Network",
    description: "Connect all gaming profiles and IDs with real-time synchronization.",
    category: "Network",
    color: "silver",
    features: ["Real-time Sync", "Profile Linking", "Game Discovery", "Player Matching"]
  },
  {
    id: "gt-chats",
    icon: MessageCircle,
    title: "GT Chats",
    subtitle: "Gaming Communication",
    description: "Revolutionary gamified messaging built exclusively for gamers.",
    category: "Communication", 
    color: "red",
    features: ["Ultra Fast", "Gaming UI", "Team Coordination", "Voice Integration"]
  },
  {
    id: "gt-jobs",
    icon: Briefcase,
    title: "GT Jobs",
    subtitle: "Career Platform",
    description: "Apply for gaming industry positions with streamlined application process.",
    category: "Career",
    color: "white",
    features: ["Quick Apply", "Status Tracking", "Industry Focus", "Career Growth"]
  },
  {
    id: "gt-hire",
    icon: UserPlus,
    title: "GT Hire",
    subtitle: "Talent Acquisition",
    description: "Hire the best gaming talent with smart filtering and direct messaging.",
    category: "Recruitment",
    color: "silver",
    features: ["Smart Filtering", "Talent Pool", "Direct Messaging", "Interview Tools"]
  },
  {
    id: "gt-news",
    icon: Newspaper,
    title: "GT News",
    subtitle: "Gaming Intel",
    description: "Stay updated with personalized gaming, esports, and tech news feed.",
    category: "News",
    color: "red",
    features: ["Real-time Updates", "Personalized Feed", "Global Coverage", "Trending Topics"]
  },
  {
    id: "creator-voice",
    icon: Sparkles,
    title: "Creator Voice",
    subtitle: "Content Platform",
    description: "Global stage for content creation with powerful publishing tools.",
    category: "Content",
    color: "white",
    features: ["Content Tools", "Global Reach", "Brand Building", "Analytics"]
  },
  {
    id: "gt-card",
    icon: CreditCard,
    title: "GT Card",
    subtitle: "Digital Identity",
    description: "Your official digital gaming ID card with unique GTID display.",
    category: "Identity",
    color: "silver",
    features: ["Digital ID", "Custom Design", "Achievement Display", "QR Integration"]
  },
  {
    id: "gt-ui-ux",
    icon: Palette,
    title: "GT UI/UX",
    subtitle: "Design Excellence",
    description: "World-class interface design optimized for gaming performance.",
    category: "Design",
    color: "red",
    features: ["Gaming UI", "Responsive Design", "Visual Effects", "Performance Optimized"]
  },
  {
    id: "gt-sound",
    icon: Volume2,
    title: "GT Sound",
    subtitle: "Audio Experience",
    description: "Immersive audio system with gaming-optimized sound design.",
    category: "Audio",
    color: "white", 
    features: ["3D Audio", "Game Integration", "Voice Chat", "Sound Effects"]
  }
];

export default function FeaturesSection() {
  const ref = useRef(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [cardsPerView, setCardsPerView] = useState(3);

  // Responsive cards per view
  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setCardsPerView(1);
      } else if (width < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = features.length - 1;
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = features.length - 1;
      return prev >= maxIndex ? 0 : prev + 1;
    });
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 6000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = features.length - 1;
      return prev <= 0 ? maxIndex : prev - 1;
    });
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 6000);
  };

  const getVisibleFeatures = () => {
    return features.slice(currentIndex, currentIndex + cardsPerView);
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'red':
        return {
          border: 'border-red-500/30',
          borderHover: 'hover:border-red-400/60',
          bg: 'bg-red-500/5',
          bgHover: 'hover:bg-red-500/10',
          text: 'text-red-400',
          glow: 'hover:shadow-red-500/20',
          icon: 'bg-gradient-to-br from-red-600 to-red-800'
        };
      case 'white':
        return {
          border: 'border-white/20',
          borderHover: 'hover:border-white/40',
          bg: 'bg-white/5',
          bgHover: 'hover:bg-white/10',
          text: 'text-white',
          glow: 'hover:shadow-white/20',
          icon: 'bg-gradient-to-br from-gray-200 to-white'
        };
      case 'silver':
        return {
          border: 'border-gray-400/30',
          borderHover: 'hover:border-gray-300/60',
          bg: 'bg-gray-400/5',
          bgHover: 'hover:bg-gray-400/10',
          text: 'text-gray-300',
          glow: 'hover:shadow-gray-400/20',
          icon: 'bg-gradient-to-br from-gray-400 to-gray-600'
        };
      default:
        return {
          border: 'border-white/20',
          borderHover: 'hover:border-white/40',
          bg: 'bg-white/5',
          bgHover: 'hover:bg-white/10',
          text: 'text-white',
          glow: 'hover:shadow-white/20',
          icon: 'bg-gradient-to-br from-gray-200 to-white'
        };
    }
  };

  return (
    <section id="features" className="relative min-h-screen bg-black overflow-hidden" ref={ref}>
      {/* Minimal HUD Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-red-500/30 to-transparent"></div>
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-red-500/30 to-transparent"></div>
        
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-red-500/60"></div>
        <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-red-500/60"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-red-500/60"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-red-500/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-2 bg-red-500/10 border border-red-500/30 px-4 py-2 text-sm font-medium text-red-400 mb-8">
            <Zap className="w-4 h-4" />
            <span className="uppercase tracking-wider">Pro Gaming Features</span>
          </div>
          
          <h2 className="font-space font-bold text-4xl md:text-6xl mb-6 text-white">
            Next-Generation
            <br />
            <span className="bg-gradient-to-r from-red-500 via-white to-gray-400 bg-clip-text text-transparent">
              Gaming Platform
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            11 revolutionary features designed to elevate your gaming experience and professional presence.
          </p>
        </motion.div>

        {/* Features Carousel with Navigation */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows - Large Bold Style */}
          <motion.button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-30 w-16 h-32 flex items-center justify-center group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-12 h-24 bg-white/90 flex items-center justify-center transform -skew-x-12 group-hover:bg-white transition-all duration-300 border-l-4 border-[#E5042F]">
              <ChevronLeft className="w-8 h-8 text-black font-bold transform skew-x-12" strokeWidth={4} />
            </div>
          </motion.button>

          <motion.button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-30 w-16 h-32 flex items-center justify-center group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-12 h-24 bg-white/90 flex items-center justify-center transform skew-x-12 group-hover:bg-white transition-all duration-300 border-r-4 border-[#E5042F]">
              <ChevronRight className="w-8 h-8 text-black font-bold transform -skew-x-12" strokeWidth={4} />
            </div>
          </motion.button>

          {/* Carousel Container */}
          <div className="relative px-20">
            <div className="overflow-hidden">
              <motion.div 
                className="flex gap-6"
                animate={{
                  x: `-${currentIndex * (380 + 24)}px`
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  const isHovered = hoveredFeature === feature.id;
                  
                  return (
                    <motion.div
                      key={feature.id}
                      className="transition-all duration-500 flex-shrink-0"
                      style={{
                        width: '380px'
                      }}
                      onMouseEnter={() => setHoveredFeature(feature.id)}
                      onMouseLeave={() => setHoveredFeature(null)}
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                    <div className="group relative h-full min-h-[600px]">
                    {/* Sharp HUD Card matching screenshot design */}
                    <div className="relative bg-black/90 backdrop-blur-xl border-2 border-[#E5042F]/50 p-8 h-full transform transition-all duration-500 group-hover:border-[#E5042F] group-hover:shadow-[0_0_30px_#E5042F70] group-hover:bg-black/95" 
                         style={{
                           clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'
                         }}>
                      
                      {/* Corner Accents */}
                      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                      
                      {/* Status Indicator */}
                      <div className="absolute top-4 right-4 w-3 h-3 bg-[#E5042F] rounded-full animate-pulse group-hover:bg-white transition-colors duration-300"></div>

                      {/* Header with Icon and Title */}
                      <div className="flex items-start gap-4 mb-6 relative z-10">
                        <div className="relative">
                          <motion.div
                            className="w-16 h-16 bg-[#E5042F]/20 border-2 border-[#E5042F]/30 group-hover:border-white transition-all duration-300 flex items-center justify-center"
                            style={{
                              clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                            }}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.8 }}
                          >
                            <IconComponent className="w-8 h-8 text-[#E5042F] group-hover:text-white transition-colors duration-300" />
                          </motion.div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-3 font-orbitron leading-tight">
                            {feature.title}
                          </h3>

                        </div>
                      </div>
                      
                      {/* Quote */}
                      <div className="mb-6 relative z-10">
                        <p className="text-[#E5042F] italic text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                          "{feature.subtitle}"
                        </p>
                      </div>

                      {/* Description */}
                      <div className="mb-8 relative z-10">
                        <p className="text-gray-300 leading-relaxed text-sm group-hover:text-white transition-colors duration-300">
                          {feature.description}
                        </p>
                      </div>

                      {/* Key Benefits Section */}
                      <div className="mb-8 relative z-10">
                        <h4 className="text-[#E5042F] font-semibold mb-4 text-sm group-hover:text-white transition-colors duration-300">Key Benefits</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {feature.features.slice(0, 4).map((feat, featIndex) => (
                            <div key={featIndex} className="bg-[#E5042F]/10 border border-[#E5042F]/30 px-3 py-2 text-xs font-medium text-[#E5042F] group-hover:bg-white/10 group-hover:text-white group-hover:border-white/30 transition-all duration-300"
                                 style={{
                                   clipPath: 'polygon(0 0, calc(100% - 3px) 0, 100% 3px, 100% 100%, 3px 100%, 0 calc(100% - 3px))'
                                 }}>
                              {feat}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="relative z-10 mt-auto">
                        <motion.button
                          className="w-full bg-[#E5042F] border border-[#E5042F] text-white py-3 px-6 font-semibold transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:border-white group-hover:shadow-[0_0_20px_#E5042F50] flex items-center justify-center space-x-2"
                          style={{
                            clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                          }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span className="group-hover:text-black transition-colors duration-300">View Feature</span>
                          <ExternalLink className="w-4 h-4 group-hover:text-black transition-colors duration-300" />
                        </motion.button>
                      </div>
                    </div>
                    </div>
                  </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {features.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                  setTimeout(() => setIsAutoPlaying(true), 6000);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-[#E5042F] scale-125' 
                    : 'bg-[#E5042F]/30 hover:bg-[#E5042F]/60'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          {/* View All Features Button */}
          <div className="flex justify-center mt-12">
            <Link href="/features">
              <motion.div
                className="inline-flex items-center space-x-3 bg-black/80 backdrop-blur-xl border-2 border-[#E5042F]/50 hover:border-[#E5042F] px-8 py-4 text-[#E5042F] hover:text-white transition-all duration-300 group cursor-pointer"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="font-semibold text-lg">View All Features</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.div>
            </Link>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="relative border border-red-500/30 bg-red-500/5 backdrop-blur-sm p-8 max-w-2xl mx-auto">
            {/* HUD corners */}
            <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-red-500"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-red-500"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-red-500"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-red-500"></div>
            
            <h3 className="font-space font-bold text-2xl mb-4 text-white">
              Ready to <span className="text-red-400">Level Up</span>?
            </h3>
            <p className="text-gray-400 mb-6">
              Join thousands of gamers building their professional gaming careers with GAMERS TAG.
            </p>
            
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-500 text-white border-0 font-semibold px-8 py-3"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Now
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
