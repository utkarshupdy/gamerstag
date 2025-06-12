import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useTheme, themeConfig } from "@/components/theme-provider";
import { useGameSounds } from "@/hooks/use-sound";
import AnimatedSidebar from "@/components/AnimatedSidebar";
import { 
  Menu, 
  X, 
  ChevronDown,
  Zap,
  User,
  Sparkles,
  Share2,
  Link2,
  MessageCircle,
  Briefcase,
  UserPlus,
  Newspaper,
  Mic,
  Gamepad2,
  Palette,
  Star,
  Users,
  Volume2,
  Download,
  Smartphone,
  Sun,
  Moon,
  Search
} from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [location] = useLocation();
  const { theme, setTheme, toggleTheme, isLight } = useTheme();
  const { buttonClick, buttonHover, pageTransition } = useGameSounds();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainNavItems = [
    { name: "Home", href: "/" },
    { name: "News", href: "/news" },
    { name: "App Updates", href: "/app-updates" },
    { name: "Testimonials", href: "/testimonials" },
  ];

  const companyDropdown = [
    { name: "About", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Our Gallery", href: "/gallery" },
    { name: "Our Journey", href: "/journey" },
    { name: "Our Mentors", href: "/mentors" },
    { name: "Incubators", href: "/incubators" },
    { name: "Connect", href: "/connect" },
  ];

  const featuresDropdown = [
    { name: "Pro Gaming Profile", href: "/features/pro-gaming-profile", icon: User, color: "text-cyan-400" },
    { name: "Next-Gen Onboarding", href: "/features/next-gen-onboarding", icon: Sparkles, color: "text-purple-400" },
    { name: "GACCOUNTS", href: "/features/gaccounts", icon: Share2, color: "text-pink-400" },
    { name: "GCONNECT", href: "/features/gconnect", icon: Link2, color: "text-blue-400" },
    { name: "GT Chat", href: "/features/gt-chat", icon: MessageCircle, color: "text-green-400" },
    { name: "GT Jobs", href: "/features/gt-jobs", icon: Briefcase, color: "text-orange-400" },
    { name: "GT Jobs Now", href: "/features/gt-jobs-now", icon: UserPlus, color: "text-red-400" },
    { name: "GT News", href: "/features/gt-news", icon: Newspaper, color: "text-indigo-400" },
    { name: "GT News Now", href: "/features/gt-news-now", icon: Mic, color: "text-yellow-400" },
    { name: "GT Card", href: "/features/gt-card", icon: Star, color: "text-emerald-400" },
    { name: "GT UI/UX", href: "/features/gt-ui", icon: Zap, color: "text-violet-400" },
    { name: "GT Sound", href: "/features/gt-sound", icon: Volume2, color: "text-rose-400" },
  ];

  const aboutDropdown = [
    { name: "About Us", href: "/about" },
    { name: "Our Journey", href: "/journey" },
    { name: "Our Mentors", href: "/mentors" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Gallery", href: "/gallery" },
    { name: "Technology Stack", href: "/tech-stack" },
    { name: "CMS Demo", href: "/cms-demo" },
  ];

  return (
    <>
      {/* Animated Sidebar */}
      <AnimatedSidebar />

      {/* Animated Background */}
      <div className="animated-bg"></div>
      
      {/* Particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Geometric Shapes */}
      <div className="geometric-shape w-32 h-32 top-20 left-10 rounded-full"></div>
      <div className="geometric-shape w-24 h-24 top-40 right-20 transform rotate-45"></div>
      <div className="geometric-shape w-16 h-16 bottom-40 left-1/4 rounded-lg"></div>

      <motion.nav
        className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Clean Navigation Bar */}
        <div className="relative">
          {/* Main Navigation Container */}
          <div className="relative bg-black/20 backdrop-blur-xl p-4">
            <div className="flex justify-between items-center">
            {/* Logo - Left Side with HUD Design */}
            <Link href="/">
              <motion.div 
                className="flex items-center space-x-3 cursor-pointer group"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 15,
                  rotateX: 5,
                }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ 
                  transformStyle: "preserve-3d",
                  perspective: "1000px"
                }}
              >
                <div className="relative">
                  {/* Logo Container with Angular Design */}
                  <motion.div 
                    className="relative bg-black/80 backdrop-blur-xl border-2 border-[#E5042F]/50 w-14 h-14 flex items-center justify-center transition-all duration-300 group-hover:border-[#E5042F] group-hover:shadow-[0_0_20px_#E5042F70]" 
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                    }}
                    whileHover={{
                      rotateY: 20,
                      rotateX: 10,
                      z: 50,
                      boxShadow: "0 20px 40px rgba(229, 4, 47, 0.4)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    
                    {/* Corner Accents for Logo */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                    <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                    
                    <motion.img 
                      src="/logo.png"
                      alt="GAMERS TAG Logo"
                      className="w-8 h-8 object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300 relative z-10"
                      whileHover={{
                        scale: 1.1,
                        rotate: 5
                      }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>
                </div>
                <div className="flex flex-col">
                  <span className={`font-orbitron font-bold text-xl group-hover:text-[#E5042F] transition-all duration-300 ${isLight ? 'text-black' : 'text-white'}`}>
                    GAMERS TAG
                  </span>
                  <span className={`text-xs font-medium transition-colors duration-300 ${isLight ? 'text-[#E5042F] group-hover:text-black' : 'text-[#E5042F] group-hover:text-white'}`}>Super App for Gaming & Esports</span>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation - Solid Sharp Boxes */}
            <div className="hidden lg:flex items-center space-x-3">
              {mainNavItems.map((item) => (
                <Link key={item.name} href={item.href}>
                  <motion.div
                    className={`px-4 py-2 font-button font-medium transition-all duration-300 cursor-pointer border-2 ${
                      location === item.href 
                        ? "bg-[#E5042F] text-white border-[#E5042F] shadow-lg shadow-[#E5042F]/30" 
                        : isLight
                          ? "bg-white text-black border-white hover:bg-[#E5042F] hover:text-white hover:border-[#E5042F] hover:shadow-lg hover:shadow-[#E5042F]/30"
                          : "bg-white text-black border-white hover:bg-[#E5042F] hover:text-white hover:border-[#E5042F] hover:shadow-lg hover:shadow-[#E5042F]/30"
                    }`}

                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onMouseEnter={buttonHover}
                    onClick={buttonClick}
                  >
                    {item.name}
                  </motion.div>
                </Link>
              ))}

              {/* Features Dropdown - Sharp Box Design */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown("features")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <motion.button
                  className={`group relative flex items-center space-x-1 px-4 py-2 font-button font-medium transition-all duration-300 cursor-pointer border-2 ${
                    activeDropdown === "features"
                      ? "bg-[#E5042F] text-white border-[#E5042F] shadow-lg shadow-[#E5042F]/30"
                      : isLight
                        ? "bg-white text-black border-white hover:bg-[#E5042F] hover:text-white hover:border-[#E5042F] hover:shadow-lg hover:shadow-[#E5042F]/30"
                        : "bg-white text-black border-white hover:bg-[#E5042F] hover:text-white hover:border-[#E5042F] hover:shadow-lg hover:shadow-[#E5042F]/30"
                  }`}
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={buttonHover}
                  onClick={buttonClick}
                >
                  <span className="relative z-10">Features</span>
                  <motion.div
                    className="relative z-10"
                    animate={{ rotate: activeDropdown === "features" ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {activeDropdown === "features" && (
                    <motion.div
                      className="absolute top-full left-0 mt-3 w-96 z-[9999]"
                      initial={{ opacity: 0, y: -20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.9 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                        duration: 0.4 
                      }}
                      style={{ zIndex: 9999 }}
                    >
                      {/* HUD Container with Advanced Visual Effects */}
                      <div className="relative bg-gradient-to-br from-black/95 via-gray-900/95 to-black/95 backdrop-blur-2xl border border-[#E5042F]/40 shadow-2xl shadow-[#E5042F]/20" 
                           style={{
                             clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px), 0 0)'
                           }}>
                        
                        {/* Animated Border Glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#E5042F]/30 via-transparent to-[#E5042F]/30 animate-pulse opacity-50"
                             style={{
                               clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px), 0 0)'
                             }}>
                        </div>
                        
                        {/* Corner Indicators */}
                        <div className="absolute top-0 left-0 w-6 h-6">
                          <div className="absolute top-0 left-0 w-3 h-[2px] bg-[#E5042F] animate-pulse"></div>
                          <div className="absolute top-0 left-0 w-[2px] h-3 bg-[#E5042F] animate-pulse"></div>
                        </div>
                        <div className="absolute top-0 right-0 w-6 h-6">
                          <div className="absolute top-0 right-0 w-3 h-[2px] bg-[#E5042F] animate-pulse"></div>
                          <div className="absolute top-0 right-0 w-[2px] h-3 bg-[#E5042F] animate-pulse"></div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-6 h-6">
                          <div className="absolute bottom-0 left-0 w-3 h-[2px] bg-[#E5042F] animate-pulse"></div>
                          <div className="absolute bottom-0 left-0 w-[2px] h-3 bg-[#E5042F] animate-pulse"></div>
                        </div>
                        <div className="absolute bottom-0 right-0 w-6 h-6">
                          <div className="absolute bottom-0 right-0 w-3 h-[2px] bg-[#E5042F] animate-pulse"></div>
                          <div className="absolute bottom-0 right-0 w-[2px] h-3 bg-[#E5042F] animate-pulse"></div>
                        </div>
                        
                        {/* Header Section */}
                        <div className="px-6 py-4 border-b border-[#E5042F]/20">
                          <motion.h3 
                            className="text-[#E5042F] font-jost font-bold text-sm uppercase tracking-wider"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            › FEATURES
                          </motion.h3>
                        </div>
                        
                        {/* Features Grid */}
                        <div className="relative z-10 p-4 max-h-80 overflow-y-auto custom-scrollbar">
                          <div className="grid grid-cols-1 gap-1">
                            {featuresDropdown.map((item, index) => (
                              <Link key={item.name} href={item.href}>
                                <motion.div
                                  className="group relative flex items-center space-x-4 p-3 cursor-pointer transition-all duration-300 rounded-none"
                                  whileHover={{ 
                                    x: 8, 
                                    transition: { type: "spring", stiffness: 400 }
                                  }}
                                  initial={{ opacity: 0, x: -30 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ 
                                    delay: index * 0.03,
                                    type: "spring",
                                    stiffness: 300
                                  }}
                                >
                                  {/* HUD-style Hover Effect */}
                                  <div className="absolute inset-0 bg-gradient-to-r from-[#E5042F]/10 via-[#E5042F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"
                                       style={{
                                         clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                                       }}>
                                  </div>
                                  
                                  {/* Left Border Indicator */}
                                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-0 group-hover:h-full bg-[#E5042F] transition-all duration-300"></div>
                                  
                                  {/* Icon with Glow Effect */}
                                  <div className="relative">
                                    <item.icon className={`w-5 h-5 ${item.color} group-hover:scale-110 group-hover:drop-shadow-lg transition-all duration-300 relative z-10`} />
                                    <div className={`absolute inset-0 ${item.color} opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-300`}></div>
                                  </div>
                                  
                                  {/* Text with HUD Typography */}
                                  <div className="flex-1">
                                    <span className="text-white group-hover:text-[#E5042F] font-jost font-medium text-sm relative z-10 transition-colors duration-300">
                                      {item.name}
                                    </span>
                                  </div>
                                  
                                  {/* Right Arrow Indicator */}
                                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <div className="w-2 h-2 border-t-2 border-r-2 border-[#E5042F] transform rotate-45"></div>
                                  </div>
                                </motion.div>
                              </Link>
                            ))}
                          </div>
                        </div>
                        
                        {/* Footer Scanner Line */}
                        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E5042F] to-transparent animate-pulse"></div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Company Dropdown - Sharp Box Design */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown("company")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <motion.button
                  className={`group relative flex items-center space-x-1 px-4 py-2 font-medium transition-all duration-300 cursor-pointer border-2 ${
                    activeDropdown === "company"
                      ? "bg-[#E5042F] text-white border-[#E5042F] shadow-lg shadow-[#E5042F]/30"
                      : isLight
                        ? "bg-white text-black border-white hover:bg-[#E5042F] hover:text-white hover:border-[#E5042F] hover:shadow-lg hover:shadow-[#E5042F]/30"
                        : "bg-white text-black border-white hover:bg-[#E5042F] hover:text-white hover:border-[#E5042F] hover:shadow-lg hover:shadow-[#E5042F]/30"
                  }`}
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={buttonHover}
                  onClick={buttonClick}
                >
                  <span className="relative z-10">Company</span>
                  <motion.div
                    className="relative z-10"
                    animate={{ rotate: activeDropdown === "company" ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {activeDropdown === "company" && (
                    <motion.div
                      className="absolute top-full right-0 mt-3 w-80 z-[9999]"
                      initial={{ opacity: 0, y: -20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.9 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                        duration: 0.4 
                      }}
                      style={{ zIndex: 9999 }}
                    >
                      {/* HUD Container with Advanced Visual Effects */}
                      <div className="relative bg-gradient-to-br from-black/95 via-gray-900/95 to-black/95 backdrop-blur-2xl border border-[#E5042F]/40 shadow-2xl shadow-[#E5042F]/20" 
                           style={{
                             clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px), 0 0)'
                           }}>
                        
                        {/* Animated Border Glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#E5042F]/30 via-transparent to-[#E5042F]/30 animate-pulse opacity-50"
                             style={{
                               clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px), 0 0)'
                             }}>
                        </div>
                        
                        {/* Corner Indicators */}
                        <div className="absolute top-0 left-0 w-6 h-6">
                          <div className="absolute top-0 left-0 w-3 h-[2px] bg-[#E5042F] animate-pulse"></div>
                          <div className="absolute top-0 left-0 w-[2px] h-3 bg-[#E5042F] animate-pulse"></div>
                        </div>
                        <div className="absolute top-0 right-0 w-6 h-6">
                          <div className="absolute top-0 right-0 w-3 h-[2px] bg-[#E5042F] animate-pulse"></div>
                          <div className="absolute top-0 right-0 w-[2px] h-3 bg-[#E5042F] animate-pulse"></div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-6 h-6">
                          <div className="absolute bottom-0 left-0 w-3 h-[2px] bg-[#E5042F] animate-pulse"></div>
                          <div className="absolute bottom-0 left-0 w-[2px] h-3 bg-[#E5042F] animate-pulse"></div>
                        </div>
                        <div className="absolute bottom-0 right-0 w-6 h-6">
                          <div className="absolute bottom-0 right-0 w-3 h-[2px] bg-[#E5042F] animate-pulse"></div>
                          <div className="absolute bottom-0 right-0 w-[2px] h-3 bg-[#E5042F] animate-pulse"></div>
                        </div>
                        
                        {/* Header Section */}
                        <div className="px-6 py-4 border-b border-[#E5042F]/20">
                          <motion.h3 
                            className="text-[#E5042F] font-jost font-bold text-sm uppercase tracking-wider"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            › COMPANY
                          </motion.h3>
                        </div>
                        
                        {/* Company Navigation */}
                        <div className="relative z-10 p-4">
                          <div className="grid grid-cols-1 gap-1">
                            {companyDropdown.map((item, index) => (
                              <Link key={item.name} href={item.href}>
                                <motion.div
                                  className="group relative flex items-center space-x-4 p-3 cursor-pointer transition-all duration-300 rounded-none"
                                  whileHover={{ 
                                    x: 8, 
                                    transition: { type: "spring", stiffness: 400 }
                                  }}
                                  initial={{ opacity: 0, x: -30 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ 
                                    delay: index * 0.05,
                                    type: "spring",
                                    stiffness: 300
                                  }}
                                >
                                  {/* HUD-style Hover Effect */}
                                  <div className="absolute inset-0 bg-gradient-to-r from-[#E5042F]/10 via-[#E5042F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"
                                       style={{
                                         clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                                       }}>
                                  </div>
                                  
                                  {/* Left Border Indicator */}
                                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-0 group-hover:h-full bg-[#E5042F] transition-all duration-300"></div>
                                  
                                  {/* Navigation Dot */}
                                  <div className="relative">
                                    <div className="w-2 h-2 bg-white/40 group-hover:bg-[#E5042F] transition-colors duration-300 transform rotate-45"></div>
                                    <div className="absolute inset-0 bg-[#E5042F] opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-300"></div>
                                  </div>
                                  
                                  {/* Text with HUD Typography */}
                                  <div className="flex-1">
                                    <span className="text-white group-hover:text-[#E5042F] font-jost font-medium text-sm relative z-10 transition-colors duration-300">
                                      {item.name}
                                    </span>
                                  </div>
                                  
                                  {/* Right Arrow Indicator */}
                                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <div className="w-2 h-2 border-t-2 border-r-2 border-[#E5042F] transform rotate-45"></div>
                                  </div>
                                </motion.div>
                              </Link>
                            ))}
                          </div>
                        </div>
                        
                        {/* Footer Scanner Line */}
                        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E5042F] to-transparent animate-pulse"></div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Right Side Controls - Angular HUD Style */}
            <div className="hidden lg:flex items-center space-x-3">
              {/* Search Button */}
              <Link href="/search">
                <motion.button
                  className="group relative p-3 text-white hover:text-[#E5042F] transition-all duration-300"
                  onMouseEnter={buttonHover}
                  onClick={buttonClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  title="Search"
                >
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-xl border border-[#E5042F]/30 transition-all duration-300 group-hover:border-[#E5042F] group-hover:shadow-[0_0_15px_#E5042F50] group-hover:bg-black/80"
                       style={{
                         clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                       }}>
                  </div>
                  <Search className="w-5 h-5 relative z-10" />
                </motion.button>
              </Link>

              {/* Theme Toggle Button */}
              <motion.button
                className="group relative p-3 text-white hover:text-[#E5042F] transition-all duration-300"
                onMouseEnter={buttonHover}
                onClick={() => {
                  buttonClick();
                  toggleTheme();
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title={`Switch to ${theme.includes('dark') ? 'Light' : 'Dark'} Mode`}
              >
                <div className="absolute inset-0 bg-black/60 backdrop-blur-xl border border-[#E5042F]/30 transition-all duration-300 group-hover:border-[#E5042F] group-hover:shadow-[0_0_15px_#E5042F50] group-hover:bg-black/80"
                     style={{
                       clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                     }}>
                </div>
                {theme.includes('dark') ? (
                  <Sun className="w-5 h-5 relative z-10" />
                ) : (
                  <Moon className="w-5 h-5 relative z-10" />
                )}
              </motion.button>

              {/* Download Button */}
              <motion.a
                href="https://play.google.com/store/apps/details?id=com.gamerstag.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-4 py-2 text-[#E5042F] hover:text-white font-medium transition-all duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={buttonHover}
                onClick={buttonClick}
              >
                <div className="absolute inset-0 bg-[#E5042F]/20 backdrop-blur-xl border border-[#E5042F] transition-all duration-300 group-hover:bg-[#E5042F] group-hover:shadow-[0_0_20px_#E5042F70]"
                     style={{
                       clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                     }}>
                </div>
                <Download className="w-4 h-4 relative z-10" />
                <span className="relative z-10">Download</span>
              </motion.a>
              

            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 text-white hover:text-[#E5042F] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setIsMobileMenuOpen(false)}
              />
              
              {/* Mobile Menu Panel */}
              <motion.div
                className="lg:hidden fixed top-0 right-0 w-80 h-full bg-black/95 backdrop-blur-xl border-l-2 border-[#E5042F]/30 z-50 overflow-y-auto flex flex-col"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {/* Header */}
                <div className="relative p-6 border-b border-[#E5042F]/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {/* Logo */}
                      <div className="w-10 h-10 bg-[var(--brand-primary)] border-2 border-[var(--brand-white)] flex items-center justify-center"
                           style={{
                             clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                           }}>
                        <Gamepad2 className="w-6 h-6 text-[var(--brand-white)]" />
                      </div>
                      {/* Brand Text */}
                      <div>
                        <h2 className="text-[var(--brand-white)] font-orbitron font-bold text-lg leading-tight">
                          GAMERS TAG
                        </h2>
                        <p className="text-[var(--brand-primary)] font-orbitron text-xs uppercase tracking-wider">
                          Gaming Super App
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-2 text-[var(--brand-white)] hover:text-[var(--brand-primary)] transition-colors duration-300"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  
                  {/* HUD Corner Accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[var(--brand-primary)]"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[var(--brand-primary)]"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[var(--brand-primary)]"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[var(--brand-primary)]"></div>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto">
                  <div className="p-6 space-y-6 pb-24">
                    {/* Main Navigation */}
                    <div>
                      <h3 className="text-[var(--brand-primary)] font-orbitron font-bold text-sm uppercase tracking-wider mb-4 flex items-center">
                        <Gamepad2 className="w-4 h-4 mr-2" />
                        Main Pages
                      </h3>
                      <div className="space-y-2">
                        {[
                          { name: "Home", href: "/" },
                          { name: "About", href: "/about" },
                          { name: "Team", href: "/team" },
                          { name: "News", href: "/news" },
                          { name: "App Updates", href: "/app-updates" },
                          { name: "Gallery", href: "/gallery" },
                          { name: "Testimonials", href: "/testimonials" },
                          { name: "Contact", href: "/contact" }
                        ].map((item, index) => (
                          <Link key={item.name} href={item.href}>
                            <motion.div
                              className="group relative p-3 cursor-pointer transition-all duration-300 border-l-2 border-transparent hover:border-[var(--brand-primary)] hover:bg-[rgba(var(--brand-primary-rgb),0.1)]"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              onClick={() => setIsMobileMenuOpen(false)}
                              whileHover={{ x: 5 }}
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-[var(--brand-white)] group-hover:text-[var(--brand-primary)] font-medium transition-colors duration-300">
                                  {item.name}
                                </span>
                                <div className="w-2 h-2 bg-[rgba(var(--brand-white-rgb),0.3)] group-hover:bg-[var(--brand-primary)] transition-colors duration-300"></div>
                              </div>
                              
                              {/* Hover Effect */}
                              <div className="absolute inset-0 bg-gradient-to-r from-[rgba(var(--brand-primary-rgb),0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </motion.div>
                          </Link>
                        ))}
                      </div>
                    </div>
                    
                    {/* Core Features Section */}
                    <div>
                      <h3 className="text-[var(--brand-primary)] font-orbitron font-bold text-sm uppercase tracking-wider mb-4 flex items-center">
                        <Zap className="w-4 h-4 mr-2" />
                        Core Features
                      </h3>
                      <div className="space-y-2">
                        {[
                          { name: "Pro Gaming Profile", href: "/features/pro-gaming-profile", icon: User, color: "text-cyan-400" },
                          { name: "Next-Gen Onboarding", href: "/features/next-gen-onboarding", icon: Sparkles, color: "text-purple-400" },
                          { name: "GACCOUNTS", href: "/features/gaccounts", icon: Share2, color: "text-green-400" },
                          { name: "GCONNECT", href: "/features/gconnect", icon: Link2, color: "text-blue-400" },
                          { name: "GT Chat", href: "/features/gt-chat", icon: MessageCircle, color: "text-emerald-400" },
                          { name: "GT UI", href: "/features/gt-ui", icon: Palette, color: "text-orange-400" }
                        ].map((item, index) => (
                          <Link key={item.name} href={item.href}>
                            <motion.div
                              className="group relative p-3 cursor-pointer transition-all duration-300 border border-white/10 hover:border-[#E5042F]/50 hover:bg-[#E5042F]/5"
                              style={{
                                clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                              }}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: (index + 8) * 0.1 }}
                              onClick={() => setIsMobileMenuOpen(false)}
                              whileHover={{ scale: 1.02 }}
                            >
                              <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 border border-[rgba(var(--brand-primary-rgb),0.3)] group-hover:border-[var(--brand-primary)] flex items-center justify-center transition-colors duration-300"
                                     style={{
                                       clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))'
                                     }}>
                                  <item.icon className={`w-4 h-4 ${item.color} group-hover:text-[var(--brand-primary)] transition-colors duration-300`} />
                                </div>
                                <span className="text-[var(--brand-white)] group-hover:text-[var(--brand-primary)] text-sm font-medium transition-colors duration-300">
                                  {item.name}
                                </span>
                              </div>
                            </motion.div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Additional Pages */}
                    <div>
                      <h3 className="text-[var(--brand-primary)] font-orbitron font-bold text-sm uppercase tracking-wider mb-4 flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        Community & More
                      </h3>
                      <div className="space-y-2">
                        {[
                          { name: "Features Overview", href: "/features" },
                          { name: "Journey", href: "/journey" },
                          { name: "Mentors", href: "/mentors" },
                          { name: "Incubators", href: "/incubators" },
                          { name: "Tech Stack", href: "/tech-stack" },
                          { name: "Dashboard", href: "/dashboard" }
                        ].map((item, index) => (
                          <Link key={item.name} href={item.href}>
                            <motion.div
                              className="group relative p-3 cursor-pointer transition-all duration-300 border-l-2 border-transparent hover:border-[var(--brand-primary)] hover:bg-[rgba(var(--brand-primary-rgb),0.1)]"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: (index + 14) * 0.1 }}
                              onClick={() => setIsMobileMenuOpen(false)}
                              whileHover={{ x: 5 }}
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-[var(--brand-white)] group-hover:text-[var(--brand-primary)] font-medium transition-colors duration-300 text-sm">
                                  {item.name}
                                </span>
                                <div className="w-2 h-2 bg-[rgba(var(--brand-white-rgb),0.3)] group-hover:bg-[var(--brand-primary)] transition-colors duration-300"></div>
                              </div>
                              
                              {/* Hover Effect */}
                              <div className="absolute inset-0 bg-gradient-to-r from-[rgba(var(--brand-primary-rgb),0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </motion.div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div>
                      <h3 className="text-[var(--brand-primary)] font-orbitron font-bold text-sm uppercase tracking-wider mb-4 flex items-center">
                        <Star className="w-4 h-4 mr-2" />
                        Quick Actions
                      </h3>
                      <div className="space-y-3">
                        {/* Search */}
                        <Link href="/search">
                          <motion.div
                            className="group relative p-3 bg-[rgba(var(--brand-primary-rgb),0.2)] border-2 border-[rgba(var(--brand-primary-rgb),0.3)] hover:border-[var(--brand-primary)] hover:bg-[rgba(var(--brand-primary-rgb),0.3)] cursor-pointer transition-all duration-300"
                            style={{
                              clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="flex items-center space-x-3">
                              <Search className="w-5 h-5 text-[var(--brand-primary)] group-hover:text-[var(--brand-white)] transition-colors duration-300" />
                              <span className="text-[var(--brand-primary)] group-hover:text-[var(--brand-white)] font-medium transition-colors duration-300">
                                Search Everything
                              </span>
                            </div>
                          </motion.div>
                        </Link>

                        {/* Download App */}
                        <motion.a
                          href="https://play.google.com/store/apps/details?id=com.gamerstag.app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative p-3 bg-[var(--brand-primary)] hover:bg-[var(--brand-white)] border-2 border-[var(--brand-primary)] hover:border-[var(--brand-white)] cursor-pointer transition-all duration-300 block"
                          style={{
                            clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'
                          }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.9 }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-center justify-center space-x-3">
                            <Download className="w-5 h-5 text-[var(--brand-white)] group-hover:text-[var(--brand-dark)] transition-colors duration-300" />
                            <span className="text-[var(--brand-white)] group-hover:text-[var(--brand-dark)] font-bold transition-colors duration-300">
                              Download App
                            </span>
                          </div>
                        </motion.a>
                      </div>
                    </div>

                    {/* Theme Toggle */}
                    <div className="pt-4 border-t border-[rgba(var(--brand-primary-rgb),0.2)]">
                      <motion.button
                        className="w-full group relative p-3 border border-[rgba(var(--brand-white-rgb),0.2)] hover:border-[rgba(var(--brand-primary-rgb),0.5)] hover:bg-[rgba(var(--brand-primary-rgb),0.05)] cursor-pointer transition-all duration-300"
                        style={{
                          clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                        }}
                        onClick={() => {
                          buttonClick();
                          toggleTheme();
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.0 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center justify-center space-x-3">
                          {theme.includes('dark') ? (
                            <Sun className="w-5 h-5 text-[var(--brand-white)] group-hover:text-[var(--brand-primary)] transition-colors duration-300" />
                          ) : (
                            <Moon className="w-5 h-5 text-[var(--brand-white)] group-hover:text-[var(--brand-primary)] transition-colors duration-300" />
                          )}
                          <span className="text-[var(--brand-white)] group-hover:text-[var(--brand-primary)] font-medium transition-colors duration-300">
                            {theme.includes('dark') ? 'Light Mode' : 'Dark Mode'}
                          </span>
                        </div>
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Fixed Footer */}
                <div className="flex-shrink-0 relative p-6 border-t border-[rgba(var(--brand-primary-rgb),0.2)] bg-black/95 backdrop-blur-xl">
                  <div className="text-center">
                    <p className="text-gray-400 text-xs font-orbitron">
                      GAMERS TAG &copy; 2025
                    </p>
                    <p className="text-[var(--brand-primary)] text-xs font-orbitron mt-1">
                      Gaming Super App
                    </p>
                    <div className="mt-3 flex justify-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <motion.div 
                          key={i} 
                          className="w-1 h-1 bg-[var(--brand-primary)]"
                          animate={{ 
                            opacity: [0.3, 1, 0.3],
                            scale: [1, 1.2, 1]
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2 
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Footer Corner Accents */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[rgba(var(--brand-primary-rgb),0.5)]"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[rgba(var(--brand-primary-rgb),0.5)]"></div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}