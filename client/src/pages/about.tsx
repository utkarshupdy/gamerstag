import { motion } from "framer-motion";
import { useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { SEOHead } from "@/components/seo-head";
import { GlobalLayout } from "@/components/global-layout";
import { CyberpunkBox } from "@/components/CyberpunkBox";
import { CyberpunkButton } from "@/components/CyberpunkButton";
import { 
  Target, 
  Users, 
  Globe, 
  TrendingUp, 
  Award, 
  Heart, 
  Rocket, 
  Shield, 
  Zap,
  Star,
  Crown,
  Building,
  Gamepad2,
  Trophy,
  ChevronRight,
  Play,
  Eye,
  ArrowRight
} from "lucide-react";

export default function About() {
  const [activeFeature, setActiveFeature] = useState(0);

  const stats = [
    { icon: Users, number: "100M+", label: "Global Users by 2030" },
    { icon: Award, number: "500K+", label: "Gaming Jobs Created" },
    { icon: TrendingUp, number: "$500B+", label: "Industry Market Size" },
    { icon: Globe, number: "20+", label: "Countries Worldwide" }
  ];

  const visionFeatures = [
    {
      icon: Rocket,
      title: "Revolutionary Platform",
      description: "Building the world's first super app exclusively for the gaming ecosystem, connecting every stakeholder in one unified platform.",
      highlight: "First-of-its-kind"
    },
    {
      icon: Crown,
      title: "Industry Leadership",
      description: "Transforming gaming into a Top 3 career-building industry globally with comprehensive professional development tools.",
      highlight: "Top 3 Industry"
    },
    {
      icon: Shield,
      title: "Community Empowerment",
      description: "Empowering gamers, creators, and businesses with tools to monetize their passion and build sustainable careers.",
      highlight: "Career Building"
    }
  ];

  const impactAreas = [
    {
      icon: Gamepad2,
      title: "For Gamers",
      description: "Professional gaming profiles, tournament participation, skill development, and career opportunities.",
      benefits: ["Profile Building", "Tournament Access", "Skill Tracking", "Career Growth"],
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Star,
      title: "For Creators",
      description: "Content creation tools, audience building, monetization options, and brand partnership opportunities.",
      benefits: ["Content Tools", "Audience Growth", "Monetization", "Brand Deals"],
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: Building,
      title: "For Businesses",
      description: "Direct access to gaming talent, marketing opportunities, and partnership facilitation with gaming communities.",
      benefits: ["Talent Pipeline", "Marketing Reach", "Partnerships", "Analytics"],
      color: "from-green-500/20 to-emerald-500/20"
    }
  ];

  const achievements = [
    {
      title: "Platform Innovation",
      description: "First comprehensive gaming super app combining B2B, B2C, and B2B2C interactions",
      icon: Trophy,
      metric: "15+ Features"
    },
    {
      title: "Community Growth",
      description: "Rapidly expanding global gaming community with high engagement rates",
      icon: Users,
      metric: "90%+ Satisfaction"
    },
    {
      title: "Industry Impact",
      description: "Creating new career pathways and economic opportunities in gaming",
      icon: Target,
      metric: "500+ Partnerships"
    }
  ];

  return (
    <>
      <SEOHead
        title="About GAMERS TAG - Building the Future of Gaming & Esports | Gaming Super App"
        description="Discover GAMERS TAG's mission to transform gaming into a Top 3 career industry. We're creating the world's largest gaming ecosystem, empowering 100M+ individuals by 2030 with 500K+ gaming jobs."
        keywords="about GAMERS TAG, gaming platform, esports platform, gaming community, gaming ecosystem, gaming careers, esports jobs, gaming industry transformation, gaming super app"
      />
      
      <GlobalLayout variant="dark">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-3 px-6 py-3 mb-8 rounded-full bg-primary/5 border border-primary/20 group hover:bg-white/5 hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-500">
                <Heart className="w-5 h-5 text-primary group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] transition-all duration-500" />
                <span className="text-white font-medium group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.4)] transition-all duration-500">About GAMERS TAG</span>
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse group-hover:bg-white group-hover:shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-500"></div>
              </div>
              
              <div className="flex items-center justify-center space-x-8 mb-8">
                <div className="flex items-center space-x-2 group hover:scale-105 transition-all duration-500 cursor-pointer">
                  <Trophy className="w-6 h-6 text-primary group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] transition-all duration-500" />
                  <span className="text-white text-lg font-medium group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.4)] transition-all duration-500">One of the Best Gaming App in the World</span>
                </div>
                <div className="w-px h-6 bg-white/20"></div>
                <div className="flex items-center space-x-2 group hover:scale-105 transition-all duration-500 cursor-pointer">
                  <Zap className="w-6 h-6 text-primary group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] transition-all duration-500" />
                  <span className="text-white text-lg font-medium group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.4)] transition-all duration-500">One of the Best Esports App in the World</span>
                </div>
              </div>

              <h1 className="font-orbitron font-bold text-4xl md:text-6xl lg:text-7xl mb-8 leading-tight">
                <span className="text-white">Building The Future of </span>
                <span className="bg-gradient-to-r from-primary to-red-400 bg-clip-text text-transparent">
                  Gaming
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
                The world's first all-in-one gaming super app, revolutionizing the future of Gaming and Esports with cutting-edge technology.
              </p>
            </motion.div>
          </div>
        </section>

        {/* About Company Section */}
        <section className="py-20 bg-gradient-to-b from-black/10 to-transparent">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center space-x-3 px-6 py-3 mb-8 rounded-full bg-primary/5 border border-primary/20 group hover:bg-white/5 hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-500">
                <Building className="w-5 h-5 text-primary group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] transition-all duration-500" />
                <span className="text-white font-medium group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.4)] transition-all duration-500">About Company</span>
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse group-hover:bg-white group-hover:shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-500"></div>
              </div>
              
              <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-8 text-white">About Company</h2>
              
              <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 border-4 border-white transition-all duration-500 p-12 overflow-hidden group hover:border-white/80 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                {/* White glassmorphic overlay */}
                <div className="absolute inset-0 bg-white/3 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-white/4 to-white/8 opacity-0 group-hover:opacity-90 transition-all duration-700 ease-out"></div>
                
                {/* Subtle inner glow */}
                <div className="absolute inset-0 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                
                {/* Outer Border Frame */}
                <div className="absolute inset-2 border-2 border-white group-hover:border-white/60 transition-colors duration-500"></div>
                
                {/* Red Corner Accent */}
                <div className="absolute top-4 right-4 w-4 h-4 bg-[#E5042F] group-hover:bg-white group-hover:shadow-[0_0_12px_rgba(255,255,255,0.8)] transition-all duration-500"></div>
                
                {/* White scanning lines animation */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                  whileHover={{
                    background: [
                      "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
                      "linear-gradient(90deg, transparent 100%, rgba(255,255,255,0.1) 50%, transparent 0%)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                <div className="relative z-10 text-center">
                  <p className="text-lg text-white leading-relaxed font-medium max-w-4xl mx-auto group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.3)] transition-all duration-500">
                    Gamers Tag is an Advanced deep-tech gaming startup established in 2021 in Kochi, Kerala. Our platform offers a comprehensive solution for the esports industry, providing professional features for B2B, B2C and B2B2C markets. We empower gaming stakeholders with advanced features to Individuals and Organizers with tournament hosting, management services, and a robust ecosystem, ensuring scalability and engagement. With over 3000 user tests and five patentable algorithms, Gamers Tag is dedicated to revolutionizing esports by enhancing communication, data analysis, and accessibility.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Vision Features Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-space font-bold text-4xl md:text-5xl mb-6 text-white">Key Pillars</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Transforming the gaming industry through innovation, community building, and professional development
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {visionFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    whileHover={{ scale: 1.02 }}
                    className="group"
                  >
                    {/* Feature Card - Enhanced with White Glassmorphic Effects */}
                    <div className="relative bg-black border border-white/20 h-[400px] overflow-hidden transition-all duration-700 hover:border-white hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] group-card" style={{ transformStyle: 'preserve-3d' }}>
                      
                      {/* White glassmorphic overlay */}
                      <div className="absolute inset-0 bg-white/3 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-white/4 to-white/8 opacity-0 group-hover:opacity-90 transition-all duration-700 ease-out"></div>
                      
                      {/* Subtle inner glow */}
                      <div className="absolute inset-0 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                      
                      {/* White scanning lines animation */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        initial={false}
                        whileHover={{
                          background: [
                            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
                            "linear-gradient(90deg, transparent 100%, rgba(255,255,255,0.1) 50%, transparent 0%)"
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      
                      {/* Corner Frame Elements */}
                      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white/40 group-hover:border-white transition-colors duration-300 z-20"></div>
                      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white/40 group-hover:border-white transition-colors duration-300 z-20"></div>
                      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white/40 group-hover:border-white transition-colors duration-300 z-20"></div>
                      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white/40 group-hover:border-white transition-colors duration-300 z-20"></div>

                      {/* Top Left Number Badge */}
                      <div className="absolute top-4 left-4 z-20">
                        <div className="w-12 h-8 border-2 border-white/40 group-hover:border-white transition-colors duration-300 flex items-center justify-center bg-black/50 group-hover:bg-white/10 group-hover:shadow-[0_0_12px_rgba(255,255,255,0.3)]">
                          <span className="font-orbitron font-bold text-white text-sm group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] transition-all duration-500">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>
                      </div>

                      {/* Top Right Icon */}
                      <div className="absolute top-4 right-4 z-20">
                        <div className="w-12 h-12 border-2 border-white/40 group-hover:border-white transition-colors duration-300 flex items-center justify-center bg-black/50 group-hover:bg-white/10 group-hover:shadow-[0_0_12px_rgba(255,255,255,0.3)]">
                          <IconComponent className="w-6 h-6 text-white group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] transition-all duration-500" />
                        </div>
                      </div>

                      {/* Content Area */}
                      <div className="absolute inset-6 border border-white/10 group-hover:border-white/30 transition-colors duration-300 z-10">
                        <div className="h-full flex flex-col justify-center p-6">
                          
                          {/* Title */}
                          <h3 className="font-orbitron font-bold text-2xl text-white mb-6 text-center tracking-wider uppercase group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] transition-all duration-500">
                            {feature.title.replace(' ', '\n')}
                          </h3>
                          
                          {/* Description */}
                          <p className="text-gray-300 text-sm leading-relaxed text-center group-hover:text-white transition-colors duration-500">
                            {feature.description}
                          </p>
                          
                          {/* Feature Data Label */}
                          <div className="absolute bottom-4 left-0 text-xs text-gray-500 font-mono tracking-wider group-hover:text-white/60 transition-colors duration-500">
                            FEATURE_DATA_{String(index + 1).padStart(2, '0')}
                          </div>
                        </div>
                      </div>


                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Our Impact Section - Enhanced with HUD Design */}
        <section className="py-20 bg-gradient-to-b from-black/20 to-transparent relative overflow-hidden">
          {/* Background HUD Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E5042F] to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E5042F] to-transparent"></div>
            <div className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-[#E5042F] to-transparent"></div>
            <div className="absolute top-3/4 right-0 w-32 h-px bg-gradient-to-l from-[#E5042F] to-transparent"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* HUD-Style Header */}
              <div className="inline-flex items-center space-x-3 px-6 py-3 mb-6 bg-gradient-to-r from-gray-900/80 to-black/80 border border-[#E5042F]/40 rounded-none backdrop-blur-sm group hover:bg-white/5 hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-500"
                   style={{
                     clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))'
                   }}>
                <Target className="w-6 h-6 text-[#E5042F] group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] transition-all duration-500" />
                <span className="text-white font-bold text-lg group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.4)] transition-all duration-500">OUR IMPACT</span>
                <div className="w-2 h-2 bg-[#E5042F] rounded-full animate-pulse group-hover:bg-white group-hover:shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-500"></div>
              </div>
              
              <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-6 text-white">
                Gaming Ecosystem Transformation
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Empowering every stakeholder in the gaming ecosystem with tailored solutions and opportunities
              </p>
            </motion.div>

            {/* Auto-Scrolling Stakeholders Section */}
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative bg-black/50 border border-[#E5042F]/30 backdrop-blur-sm overflow-hidden group hover:border-white/40 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-700"
                   style={{
                     clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))'
                   }}>
                
                {/* White glassmorphic overlay */}
                <div className="absolute inset-0 bg-white/2 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/2 to-white/5 opacity-0 group-hover:opacity-90 transition-all duration-700 ease-out"></div>
                
                {/* Header */}
                <div className="bg-gradient-to-r from-[#E5042F]/20 to-black/40 px-6 py-4 border-b border-[#E5042F]/30 relative z-10">
                  <div className="flex items-center justify-between">
                    <h3 className="font-orbitron font-bold text-xl text-white tracking-wider group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] transition-all duration-500">
                      STAKEHOLDER NETWORK
                    </h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-[#E5042F] rounded-full animate-pulse group-hover:bg-white group-hover:shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-500"></div>
                      <span className="text-[#E5042F] text-sm font-bold group-hover:text-white group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.4)] transition-all duration-500">LIVE</span>
                    </div>
                  </div>
                </div>

                {/* Auto-Scrolling Stakeholders */}
                <div className="py-6 overflow-hidden relative z-10">
                  <motion.div 
                    className="flex items-center space-x-8"
                    animate={{ x: [0, -2000] }}
                    transition={{ 
                      duration: 30, 
                      repeat: Infinity, 
                      ease: "linear" 
                    }}
                  >
                    {/* Extended Stakeholder List */}
                    {[
                      "Gamers", "Techies", "Streamers", "News Publishers", "Job Publishers", 
                      "Managers", "Gaming Organizations", "Esports Athletes", "Writers", 
                      "Esports Fans", "Students", "Content Creators", "Game Developers", 
                      "Tournament Organizers", "Sponsors", "Coaches", "Analysts", 
                      "Commentators", "Influencers", "Brands", "Investors", "Publishers",
                      "Hardware Manufacturers", "Software Companies", "Media Outlets",
                      "Educational Institutions", "Talent Agencies", "Event Organizers"
                    ].concat([
                      "Gamers", "Techies", "Streamers", "News Publishers", "Job Publishers", 
                      "Managers", "Gaming Organizations", "Esports Athletes", "Writers", 
                      "Esports Fans", "Students", "Content Creators", "Game Developers", 
                      "Tournament Organizers", "Sponsors", "Coaches", "Analysts"
                    ]).map((stakeholder, index) => (
                      <div key={index} className="flex items-center space-x-4 whitespace-nowrap">
                        <div className="w-3 h-3 border border-[#E5042F] bg-[#E5042F]/20 rotate-45"></div>
                        <span className="text-white font-medium text-lg tracking-wide">
                          {stakeholder}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* Bottom Status Bar */}
                <div className="bg-gradient-to-r from-black/40 to-[#E5042F]/20 px-6 py-2 border-t border-[#E5042F]/30 relative z-10">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400 font-mono group-hover:text-white/60 transition-colors duration-500">NETWORK_STATUS: ACTIVE</span>
                    <span className="text-[#E5042F] font-mono group-hover:text-white group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.4)] transition-all duration-500">28+ STAKEHOLDER_TYPES</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Impact Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              {impactAreas.map((area, index) => {
                const IconComponent = area.icon;
                return (
                  <motion.div
                    key={area.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="group"
                  >
                    {/* HUD-Style Impact Card - Enhanced with White Glassmorphic Effects */}
                    <div className="relative bg-black border border-gray-600/50 h-[350px] overflow-hidden transition-all duration-700 group-hover:border-white group-hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]" style={{ transformStyle: 'preserve-3d' }}>
                      
                      {/* White glassmorphic overlay */}
                      <div className="absolute inset-0 bg-white/3 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-white/4 to-white/8 opacity-0 group-hover:opacity-90 transition-all duration-700 ease-out"></div>
                      
                      {/* Subtle inner glow */}
                      <div className="absolute inset-0 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                      
                      {/* White scanning lines animation */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        initial={false}
                        whileHover={{
                          background: [
                            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
                            "linear-gradient(90deg, transparent 100%, rgba(255,255,255,0.1) 50%, transparent 0%)"
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      
                      {/* Corner Elements */}
                      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-gray-600/50 group-hover:border-white transition-colors duration-300 z-20"></div>
                      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-gray-600/50 group-hover:border-white transition-colors duration-300 z-20"></div>
                      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-gray-600/50 group-hover:border-white transition-colors duration-300 z-20"></div>
                      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-gray-600/50 group-hover:border-white transition-colors duration-300 z-20"></div>

                      {/* Icon Header */}
                      <div className="absolute top-4 left-4 right-4 z-20">
                        <div className="flex items-center justify-between">
                          <div className={`w-12 h-12 bg-gradient-to-br ${area.color} border border-gray-600/50 group-hover:border-white transition-colors duration-300 flex items-center justify-center group-hover:shadow-[0_0_12px_rgba(255,255,255,0.3)]`}>
                            <IconComponent className="w-6 h-6 text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] transition-all duration-500" />
                          </div>
                          <div className="w-3 h-3 bg-gray-600 group-hover:bg-white group-hover:shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-500 animate-pulse"></div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="absolute inset-6 top-20 border border-gray-600/20 group-hover:border-white/30 transition-colors duration-300 z-10">
                        <div className="h-full flex flex-col p-4">
                          <h3 className="font-orbitron font-bold text-xl text-white mb-4 group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] transition-all duration-500">
                            {area.title}
                          </h3>
                          <p className="text-gray-400 text-sm leading-relaxed mb-4 group-hover:text-white transition-colors duration-500">
                            {area.description}
                          </p>
                          <div className="grid grid-cols-1 gap-2 mt-auto">
                            {area.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                              <div key={benefitIndex} className="flex items-center text-xs">
                                <div className="w-2 h-2 border border-[#E5042F] bg-[#E5042F]/20 mr-2 rotate-45 group-hover:border-white group-hover:bg-white/20 transition-colors duration-500"></div>
                                <span className="text-gray-400 group-hover:text-white transition-colors duration-500">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mission Section - HUD Card Design */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-12 text-white">Our Mission</h2>
              
              {/* HUD Mission Card */}
              <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 border-4 border-white transition-all duration-500 p-12 overflow-hidden group hover:border-white/80 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                {/* White glassmorphic overlay */}
                <div className="absolute inset-0 bg-white/3 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-white/4 to-white/8 opacity-0 group-hover:opacity-90 transition-all duration-700 ease-out"></div>
                
                {/* Subtle inner glow */}
                <div className="absolute inset-0 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                
                {/* White scanning lines animation */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                  whileHover={{
                    background: [
                      "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
                      "linear-gradient(90deg, transparent 100%, rgba(255,255,255,0.1) 50%, transparent 0%)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                {/* Outer Border Frame */}
                <div className="absolute inset-2 border-2 border-white group-hover:border-white/60 transition-colors duration-500"></div>
                
                {/* Red Corner Accent */}
                <div className="absolute top-4 right-4 w-4 h-4 bg-[#E5042F] group-hover:bg-white group-hover:shadow-[0_0_12px_rgba(255,255,255,0.8)] transition-all duration-500"></div>

                <div className="relative z-10">
                  {/* Main Mission Statement */}
                  <div className="mb-12 text-center">
                    <p className="text-lg text-white leading-relaxed font-medium group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.3)] transition-all duration-500">
                      At GAMERS TAG, our mission goes far beyond building a gaming platform – we are on a mission to transform the way the entire gaming world connects, grows, and thrives. We aim to increase the market cap of the gaming industry by 10x in the next five years by expanding its horizons and bringing every voice in gaming closer to opportunity. We are in pursuit for bringing multiple impactful features tailored for each stakeholder in the industry, unlocking the full potential of every individual and organization.
                    </p>
                  </div>
                  
                  {/* B2C and B2B Sections */}
                  <div className="grid md:grid-cols-2 gap-12">
                    <div className="text-center">
                      <h3 className="font-orbitron font-bold text-2xl text-[#E5042F] mb-6 group-hover:text-white group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] transition-all duration-500">For Our B2C Users</h3>
                      <p className="text-white leading-relaxed font-medium group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.3)] transition-all duration-500">
                        For our B2C users especially gamers, esports athletes, fans, streamers, creators, developers, organizers, analysts, and tech talents, our mission is to elevate growth, income, and recognition. We want to multiply opportunities, open new revenue streams, and create spaces where individuals can build personal brands, engage with real communities, and turn their love for gaming into a profession. From bringing grassroot esports players to global stage, giving creators wider reach, to empowering developers with tools and resources.
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <h3 className="font-orbitron font-bold text-2xl text-[#E5042F] mb-6 group-hover:text-white group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] transition-all duration-500">For Our B2B Partners</h3>
                      <p className="text-white leading-relaxed font-medium group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.3)] transition-all duration-500">
                        For our B2B, Our mission is to build the most effective pipeline for global brands to effortlessly invest and tap into the gaming sector and easily elevate brand engagement. We aim to be the ultimate bridge between gaming and the world of business, whether it's small gaming teams, esports organizations, game developers, tech brands, consumer brands, or publishers. We enable brands to engage with deeply authentic gaming audiences, collaborate with esports teams, and gain impactful partnerships.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Vision Section - HUD Card Design */}
        <section className="py-20 bg-gradient-to-b from-transparent to-black/20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-12 text-white">Our Vision</h2>
              
              {/* HUD Vision Card */}
              <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 border-4 border-white transition-all duration-500 p-12 overflow-hidden group hover:border-white/80 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                {/* White glassmorphic overlay */}
                <div className="absolute inset-0 bg-white/3 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-white/4 to-white/8 opacity-0 group-hover:opacity-90 transition-all duration-700 ease-out"></div>
                
                {/* Subtle inner glow */}
                <div className="absolute inset-0 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                
                {/* White scanning lines animation */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                  whileHover={{
                    background: [
                      "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
                      "linear-gradient(90deg, transparent 100%, rgba(255,255,255,0.1) 50%, transparent 0%)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                {/* Outer Border Frame */}
                <div className="absolute inset-2 border-2 border-white group-hover:border-white/60 transition-colors duration-500"></div>
                
                {/* Red Corner Accent */}
                <div className="absolute top-4 right-4 w-4 h-4 bg-[#E5042F] group-hover:bg-white group-hover:shadow-[0_0_12px_rgba(255,255,255,0.8)] transition-all duration-500"></div>

                <div className="relative z-10 text-center">
                  <div className="space-y-8">
                    <p className="text-lg text-white leading-relaxed font-medium group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.3)] transition-all duration-500">
                      At GAMERS TAG, our vision is bold, data-driven, and deeply rooted in purpose. We envision a future where gaming becomes one of the Top 3 career-building industries globally, empowering over 100 million gamers, creators, and innovators by 2030. Our aim is to build the world's largest and most trusted gaming ecosystem, supporting a projected $500B+ global industry.
                    </p>
                    
                    <p className="text-lg text-white leading-relaxed font-medium group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.3)] transition-all duration-500">
                      We are building a future for Gaming & Esports where 12x more tournaments are hosted across regions, tournament prize pools grow 6x, and the esports audience triples. GAMERS TAG will be the launchpad for over 5,00,000+ gaming and esports jobs, powering dreams and careers alike.
                    </p>
                    
                    <p className="text-lg text-white leading-relaxed font-medium group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.3)] transition-all duration-500">
                      For brands, publishers, and esports organizations, our vision is to create the most effective partnership pipeline in gaming with 12,000+ brands projected to engage with esports teams for endorsements and sponsorships. We are here to bridge the gap between culture and profession, turning fragmented efforts into unified success. GAMERS TAG is not just shaping the future of gaming we're elevating it to next level and transforming it into a movement that touches every corner of the digital world.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>



      </GlobalLayout>
    </>
  );
}