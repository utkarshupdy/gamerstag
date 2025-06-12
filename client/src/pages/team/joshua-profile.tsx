import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { 
  ArrowLeft, 
  ExternalLink, 
  Globe, 
  Linkedin,
  Award,
  GraduationCap,
  Building,
  Target,
  Users,
  Briefcase,
  Brain,
  Star,
  Rocket,
  Trophy,
  GamepadIcon,
  Quote,
  Activity,
  Calendar,
  Zap,
  ChevronRight,
  Eye
} from "lucide-react";

export default function JoshuaProfile() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const joshuaData = {
    name: "Joshua J Kanatt",
    position: "Founder & Chief Executive Officer",
    tagline: "Visionary Builder of Game-Changing Tech",
    website: "https://www.joshuakanatt.com/",
    linkedin: "https://www.linkedin.com/in/joshuakanatt/",
    
    aboutMe: "I'm a founder on a mission to increase global gaming valuation to 5x in next 5 year also set new global standards for startups. I've built one of the world's most innovative gaming super platforms, integrating deep design principles, advanced gamification, AI, SaaS, and community-first strategies. A rare combination of Founder & CEO who is a Product Leader, Technologist, Marketer, Analyst, AI Researcher, Financial Strategist, HR Architect, and Startups expert.",
    
    whatIDo: "I don't just lead, I build from the ground up, every single day. I'm a founder who's hands-on across every department, from Product to Technology, from Marketing to Sales, from Design to Analytics, from Research to Finance, from HR to Investor Relations. My leadership style is simple: be the chill founder who builds entrepreneurs. I empower my team to take ownership, to challenge conventions, and to bring the absolute best version of themselves to the table.",
    
    personalLife: "Beyond business, I'm a gamer and sportsman at heart. I actively play badminton, football, basketball, volleyball, and cricket. I'm deeply inspired by legends like Lionel Messi, Derrick Rose, Kobe Bryant, and Lewis Hamilton and not just for their greatness, but for their resilience, precision, and obsession with mastery. That's the mindset I bring to everything I build.",
    
    mission: "My ultimate goal? To become one of the world's most impactful founder. I believe in building people, not just products. By fostering their strengths and championing their ideas, we don't just build a company, we build dreams, legacies, and the future of gaming itself.",
    
    expertise: [
      "Product Management & Strategy",
      "Full-Stack Product Ownership",
      "SaaS, AI, Fintech, Gaming, EdTech",
      "UI/UX (Neumorphic, 3D Design, Figma)",
      "Data Science & ML Integration",
      "Deep Market & User Research",
      "Go-To-Market Execution",
      "Business Development",
      "Performance Marketing & SEO",
      "Fundraising, Valuation, and Pitching",
      "Financial Modeling & Investor Relations",
      "HR Systems & Talent Management",
      "Strategic Planning & Analytics",
      "Community Building & Affiliate Marketing",
      "Creative Direction & Brand Identity"
    ],
    
    education: [
      "Deakin Business School, Australia – GMBA, Leadership & Management (Dec 2023 – Apr 2025)",
      "Stanford Graduate School of Business – Stanford Seed Spark Program (Feb 2023 – Jul 2023)",
      "IMT Ghaziabad – PGDM, Data Science",
      "Liverpool John Moores University, UK – M.S. in Data Science",
      "IIIT Bangalore – PG Program in Data Science",
      "Hindusthan College of Engineering & Tech – B.Tech in Computer Science"
    ],
    
    incubators: [
      "Stanford Seed Spark Program (Stanford GSB)",
      "Razorpay Rize",
      "NASSCOM 10000 Startups",
      "Cisco LaunchPad",
      "Wadhwani Foundation",
      "Atal Innovation Mission (AIM)",
      "PDEU Innovation & Incubation Centre",
      "Kerala Startup Mission (KSUM)"
    ],
    
    achievements: [
      "50+ Products Launched",
      "350+ Professionals Led",
      "200+ Businesses Consulted",
      "24+ Game Tech Products Architected",
      "20,000+ Wireframes Created",
      "Neumorphic V2 3D UI (96% user acceptance)",
      "Stanford Seed Spark Program Graduate",
      "Multiple Incubator Programs"
    ],
    
    stats: [
      { label: "Products Launched", value: "50+", icon: Rocket },
      { label: "Professionals Led", value: "350+", icon: Users },
      { label: "Businesses Consulted", value: "200+", icon: Briefcase },
      { label: "Game Tech Products", value: "24+", icon: GamepadIcon }
    ],
    
    visionQuote: "The future of gaming and esports will be built upon the pillar of Gamers Tag. We will be the engine that accelerates its growth, forging unified pathways that will uncover the next generation of talent. We will empower developers with direct lines to their communities. Most importantly, we will create a new player-centric economy, delivering multiple monetizable opportunities that will put real financial power into the hands of our users. This ecosystem will ignite a new wave of sustainable value throughout the industry. Our vision is a promise: Gamers Tag will become the primary market driver, and we will lead the global gaming world into a new era of unprecedented success."
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Advanced HUD Background System */}
      <div className="fixed inset-0 overflow-hidden">
        {/* Primary Grid - White/Cyan HUD Lines */}
        <div className="absolute inset-0 opacity-12">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.4) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}
          />
        </div>
        
        {/* Secondary Grid - Subtle Cyan Accent */}
        <div className="absolute inset-0 opacity-8">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 255, 255, 0.2) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 255, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px'
            }}
          />
        </div>
        
        {/* Corner HUD Brackets - White */}
        <div className="absolute top-6 left-6 w-20 h-20 border-l-3 border-t-3 border-white/60"></div>
        <div className="absolute top-6 right-6 w-20 h-20 border-r-3 border-t-3 border-white/60"></div>
        <div className="absolute bottom-6 left-6 w-20 h-20 border-l-3 border-b-3 border-white/60"></div>
        <div className="absolute bottom-6 right-6 w-20 h-20 border-r-3 border-b-3 border-white/60"></div>
        
        {/* Diagonal HUD Elements */}
        <div className="absolute top-24 left-24 w-16 h-16 border-2 border-cyan-400/40 rotate-45"></div>
        <div className="absolute top-24 right-24 w-16 h-16 border-2 border-cyan-400/40 rotate-45"></div>
        <div className="absolute bottom-24 left-24 w-16 h-16 border-2 border-cyan-400/40 rotate-45"></div>
        <div className="absolute bottom-24 right-24 w-16 h-16 border-2 border-cyan-400/40 rotate-45"></div>
        
        {/* Scanning Line - White/Cyan */}
        <motion.div
          className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-white/80 to-transparent"
          animate={{
            y: [0, 800, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Data Stream Indicators */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-16 bg-gradient-to-b from-white/50 to-transparent"
              style={{
                left: `${10 + i * 12}%`,
                top: `${Math.random() * 30}%`
              }}
              animate={{
                opacity: [0, 1, 0],
                y: [0, 80, 160]
              }}
              transition={{
                duration: 3,
                delay: i * 0.6,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
        
        {/* Interactive HUD Nodes - Cyan/White */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4"
              style={{
                left: `${15 + i * 15}%`,
                top: `${25 + i * 12}%`
              }}
              whileHover={{ scale: 1.8 }}
            >
              <div className="w-full h-full border-2 border-white/70 bg-cyan-400/20 rotate-45" />
              <div className="absolute inset-0 w-full h-full border border-cyan-400/60 rotate-45 animate-pulse" />
            </motion.div>
          ))}
        </div>
        
        {/* HUD Status Indicators */}
        <div className="absolute top-20 left-4">
          <div className="flex items-center space-x-2 text-white text-xs font-mono bg-black/50 px-3 py-1 rounded">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span>PROFILE_SYSTEM_ACTIVE</span>
          </div>
        </div>
        
        <div className="absolute top-20 right-4">
          <div className="flex items-center space-x-2 text-white text-xs font-mono bg-black/50 px-3 py-1 rounded">
            <span>SECURE_CONNECTION</span>
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          </div>
        </div>
        
        {/* Minimal Accent Glows - Reduced Red */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/5 w-48 h-48 bg-white/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/2 right-1/5 w-64 h-64 bg-cyan-400/4 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-red-500/2 rounded-full blur-3xl"></div>
        </div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* HUD Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/98 backdrop-blur-xl border-b-2 border-white/30">
        <div className="container mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/team">
              <motion.button 
                className="relative flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-white/20 to-cyan-400/30 text-white font-bold tracking-wider border-2 border-white/50 hover:border-cyan-400 transition-all duration-300 group overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
                }}
              >
                <ArrowLeft className="w-5 h-5 group-hover:translate-x-[-2px] transition-transform" />
                <span className="text-lg">BACK TO TEAM</span>
                <div className="absolute inset-0 bg-cyan-400/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
              </motion.button>
            </Link>
            
            {/* HUD Status Panel */}
            <div className="flex items-center gap-6 bg-black/90 border-2 border-white/30 px-6 py-3" style={{
              clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)'
            }}>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-cyan-400 font-bold text-lg tracking-wider">SYSTEM ONLINE</span>
              </div>
              <div className="w-px h-6 bg-white/30"></div>
              <div className="text-white font-mono text-lg">
                {currentTime.toLocaleTimeString()}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-32 pb-16 relative">
        <div className="container mx-auto px-8">
          {/* Hero Profile Section */}
          <motion.div 
            className="relative mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Profile Info */}
              <div className="space-y-8">
                {/* Status Badges */}
                <div className="flex items-center gap-4">
                  <motion.div 
                    className="px-4 py-2 bg-[#E5042F] text-white font-bold tracking-widest flex items-center gap-2 border-2 border-white/20"
                    whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,1)' }}
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                    }}
                  >
                    <Star className="w-5 h-5" />
                    CORE TEAM
                  </motion.div>
                  <motion.div 
                    className="px-4 py-2 bg-white text-black font-bold tracking-widest border-2 border-[#E5042F]"
                    whileHover={{ scale: 1.05, backgroundColor: '#E5042F', color: 'white' }}
                    style={{
                      clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)'
                    }}
                  >
                    OWNER
                  </motion.div>
                </div>

                {/* Name */}
                <div>
                  <motion.h1 
                    className="font-orbitron font-black text-5xl lg:text-7xl text-white mb-4 leading-tight"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                  >
                    JOSHUA J <span className="text-[#E5042F] block lg:inline">KANATT</span>
                  </motion.h1>
                  
                  <motion.p 
                    className="text-2xl lg:text-3xl text-white font-bold mb-4 bg-gradient-to-r from-[#E5042F] to-white bg-clip-text text-transparent"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                  >
                    {joshuaData.position}
                  </motion.p>
                  
                  <motion.p 
                    className="text-xl text-gray-300 font-medium tracking-wide"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                  >
                    {joshuaData.tagline}
                  </motion.p>
                </div>

                {/* Quick Description */}
                <motion.p 
                  className="text-lg text-gray-400 leading-relaxed max-w-2xl"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  Visionary Founder & CEO building game-changing technology at GAMERS TAG. Leading one of the world's most innovative gaming super platforms.
                </motion.p>
              </div>

              {/* Right Side - Profile Image Frame */}
              <motion.div 
                className="relative"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <div className="relative w-full max-w-lg mx-auto">
                  {/* Main Image Frame */}
                  <div className="relative bg-black border-4 border-[#E5042F] p-4 group hover:border-white transition-all duration-500" style={{
                    clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))'
                  }}>
                    {/* Image Container */}
                    <div className="relative aspect-square bg-gradient-to-br from-[#E5042F]/20 to-black border-2 border-white/20 group-hover:border-[#E5042F] transition-all duration-500 overflow-hidden" style={{
                      clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))'
                    }}>
                      {/* Profile Image Placeholder */}
                      <div className="w-full h-full flex items-center justify-center relative">
                        <Users className="w-24 h-24 text-[#E5042F] group-hover:scale-110 transition-transform duration-500" />
                        
                        {/* Scanning Lines Effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="absolute top-0 left-0 w-full h-0.5 bg-[#E5042F] animate-pulse"></div>
                          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#E5042F] animate-pulse" style={{animationDelay: '1s'}}></div>
                          <div className="absolute top-0 left-0 w-0.5 h-full bg-[#E5042F] animate-pulse" style={{animationDelay: '0.5s'}}></div>
                          <div className="absolute top-0 right-0 w-0.5 h-full bg-[#E5042F] animate-pulse" style={{animationDelay: '1.5s'}}></div>
                        </div>
                      </div>
                    </div>

                    {/* Corner HUD Elements */}
                    <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 border-t-4 border-r-4 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                    <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-4 border-l-4 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                  </div>

                  {/* Status Indicator */}
                  <div className="absolute -top-4 right-8 bg-green-400 text-black px-3 py-1 font-bold text-sm tracking-wider">
                    ACTIVE
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {joshuaData.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="relative bg-black border-4 border-[#E5042F]/50 hover:border-white p-8 text-center transition-all duration-500 group cursor-pointer overflow-hidden"
                whileHover={{ scale: 1.05, y: -8 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))'
                }}
              >
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E5042F]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Corner HUD elements */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <stat.icon className="w-12 h-12 text-[#E5042F] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-4xl font-black text-white mb-3 group-hover:text-[#E5042F] transition-colors duration-300">{stat.value}</div>
                  <div className="text-sm text-gray-400 font-bold tracking-widest uppercase group-hover:text-white transition-colors duration-300">{stat.label}</div>
                </div>

                {/* Scanning effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                  <div className="absolute top-0 left-0 w-full h-px bg-[#E5042F] animate-pulse"></div>
                  <div className="absolute bottom-0 left-0 w-full h-px bg-[#E5042F] animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* About Me Section */}
              <motion.div 
                className="relative bg-black border-4 border-[#E5042F]/50 hover:border-white p-10 transition-all duration-500 group overflow-hidden"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'
                }}
              >
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E5042F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Corner HUD elements */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-[#E5042F] group-hover:bg-white group-hover:text-black transition-all duration-300">
                      <Users className="w-8 h-8" />
                    </div>
                    <h2 className="font-orbitron font-black text-3xl text-white group-hover:text-[#E5042F] transition-colors duration-300">ABOUT ME</h2>
                    <div className="flex-1 h-1 bg-gradient-to-r from-[#E5042F] via-white to-transparent"></div>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-xl group-hover:text-white transition-colors duration-300">
                    {joshuaData.aboutMe}
                  </p>
                </div>
              </motion.div>

              {/* What I Do Section */}
              <motion.div 
                className="relative bg-black border-4 border-[#E5042F]/50 hover:border-white p-10 transition-all duration-500 group overflow-hidden"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                whileHover={{ scale: 1.02 }}
                style={{
                  clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#E5042F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-[#E5042F] group-hover:bg-white group-hover:text-black transition-all duration-300">
                      <Briefcase className="w-8 h-8" />
                    </div>
                    <h2 className="font-orbitron font-black text-3xl text-white group-hover:text-[#E5042F] transition-colors duration-300">WHAT I DO</h2>
                    <div className="flex-1 h-1 bg-gradient-to-r from-[#E5042F] via-white to-transparent"></div>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-xl group-hover:text-white transition-colors duration-300">
                    {joshuaData.whatIDo}
                  </p>
                </div>
              </motion.div>

              {/* Areas of Expertise */}
              <motion.div 
                className="relative bg-black border-4 border-[#E5042F]/50 hover:border-white p-10 transition-all duration-500 group overflow-hidden"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{ scale: 1.02 }}
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#E5042F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-[#E5042F] group-hover:bg-white group-hover:text-black transition-all duration-300">
                      <Brain className="w-8 h-8" />
                    </div>
                    <h2 className="font-orbitron font-black text-3xl text-white group-hover:text-[#E5042F] transition-colors duration-300">🧠 AREAS OF EXPERTISE</h2>
                    <div className="flex-1 h-1 bg-gradient-to-r from-[#E5042F] via-white to-transparent"></div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {joshuaData.expertise.map((skill, index) => (
                      <motion.div 
                        key={index}
                        className="relative bg-[#E5042F]/10 border-2 border-[#E5042F]/30 hover:border-white px-6 py-4 text-gray-300 hover:text-white hover:bg-[#E5042F]/20 transition-all duration-300 flex items-center gap-3 group/item"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
                        whileHover={{ scale: 1.05, x: 5 }}
                        style={{
                          clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                        }}
                      >
                        <ChevronRight className="w-4 h-4 text-[#E5042F] group-hover/item:text-white transition-colors" />
                        <span className="font-medium">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Vision Quote */}
              <motion.div 
                className="relative bg-black border-4 border-[#E5042F]/50 hover:border-white p-10 transition-all duration-500 group overflow-hidden"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                whileHover={{ scale: 1.02 }}
                style={{
                  clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#E5042F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-[#E5042F] group-hover:bg-white group-hover:text-black transition-all duration-300">
                      <Quote className="w-8 h-8" />
                    </div>
                    <h2 className="font-orbitron font-black text-3xl text-white group-hover:text-[#E5042F] transition-colors duration-300">JOSHUA'S QUOTE</h2>
                    <div className="flex-1 h-1 bg-gradient-to-r from-[#E5042F] via-white to-transparent"></div>
                  </div>
                  <blockquote className="text-gray-300 leading-relaxed text-xl border-l-4 border-[#E5042F] pl-8 group-hover:text-white transition-colors duration-300 italic">
                    "{joshuaData.visionQuote}"
                  </blockquote>
                </div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Social Links */}
              <motion.div 
                className="bg-black border-2 border-gray-800 hover:border-[#E5042F] p-6 transition-all duration-300"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-5 h-5 text-[#E5042F]" />
                  <h3 className="font-orbitron font-bold text-lg text-white">Socials</h3>
                </div>
                <div className="space-y-3">
                  <a href={joshuaData.website} target="_blank" rel="noopener noreferrer" 
                     className="flex items-center gap-3 p-3 bg-gray-900 hover:bg-[#E5042F]/20 border border-gray-700 hover:border-[#E5042F] transition-all duration-300">
                    <Globe className="w-5 h-5 text-[#E5042F]" />
                    <span className="text-gray-300">Personal Website</span>
                    <ExternalLink className="w-4 h-4 text-gray-500 ml-auto" />
                  </a>
                  <a href={joshuaData.linkedin} target="_blank" rel="noopener noreferrer" 
                     className="flex items-center gap-3 p-3 bg-gray-900 hover:bg-[#E5042F]/20 border border-gray-700 hover:border-[#E5042F] transition-all duration-300">
                    <Linkedin className="w-5 h-5 text-[#E5042F]" />
                    <span className="text-gray-300">LinkedIn Profile</span>
                    <ExternalLink className="w-4 h-4 text-gray-500 ml-auto" />
                  </a>
                </div>
              </motion.div>

              {/* Education */}
              <motion.div 
                className="bg-black border-2 border-gray-800 hover:border-[#E5042F] p-6 transition-all duration-300"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="w-5 h-5 text-[#E5042F]" />
                  <h3 className="font-orbitron font-bold text-lg text-white">Education</h3>
                </div>
                <div className="space-y-3">
                  {joshuaData.education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-[#E5042F] pl-4 py-2">
                      <p className="text-gray-300 text-sm leading-relaxed">{edu}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Incubators & Programs */}
              <motion.div 
                className="bg-black border-2 border-gray-800 hover:border-[#E5042F] p-6 transition-all duration-300"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Building className="w-5 h-5 text-[#E5042F]" />
                  <h3 className="font-orbitron font-bold text-lg text-white">Incubators</h3>
                </div>
                <div className="space-y-2">
                  {joshuaData.incubators.map((incubator, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 bg-gray-900/50 border border-gray-700/50 hover:border-[#E5042F]/50 transition-all duration-300">
                      <div className="w-2 h-2 bg-[#E5042F] rounded-full"></div>
                      <span className="text-gray-300 text-sm">{incubator}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Key Achievements */}
              <motion.div 
                className="bg-black border-2 border-gray-800 hover:border-[#E5042F] p-6 transition-all duration-300"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Trophy className="w-5 h-5 text-[#E5042F]" />
                  <h3 className="font-orbitron font-bold text-lg text-white">Achievements</h3>
                </div>
                <div className="space-y-2">
                  {joshuaData.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-3 p-2 hover:bg-gray-900/50 transition-all duration-300">
                      <Star className="w-4 h-4 text-[#E5042F] flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}