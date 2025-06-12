import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { SEOHead } from "@/components/seo-head";
import { useFeatures } from '@/hooks/useSanity';
import { urlFor } from '@/lib/sanity';
import type { SanityFeature } from '@/types/sanity';
import { 
  User, 
  Sparkles, 
  Share2, 
  Link2, 
  MessageCircle, 
  Briefcase, 
  UserPlus, 
  Newspaper,
  CreditCard,
  Palette,
  Volume2,
  ArrowRight,
  CheckCircle2,
  Star,
  Zap,
  Edit,
  Play,
  ExternalLink,
  MousePointer,
  Smartphone,
  Loader2
} from "lucide-react";

const features = [
  {
    id: "pro-gaming-profile",
    icon: User,
    title: "Pro GAMING PROFILE",
    subtitle: "Create Your Legacy with us!",
    quote: "Build your unique, Be known.",
    shortDesc: "Professional gamer identity platform",
    description: "Forge your ultimate professional gamer profile with GAMERS TAG, creating a powerful gaming identity to get noticed in the esports and gaming world.",
    keyFeatures: [
      "Professional Gaming Portfolio",
      "Unique GTID Display", 
      "Cross-Platform Account Linking",
      "Achievement Showcase"
    ],
    category: "Profile Management",
    color: "red",
    gradient: "from-red-600/20 to-red-800/20",
    borderColor: "border-red-500/30 hover:border-red-400/60",
    accentColor: "text-red-400",
    bgHover: "hover:bg-red-500/10"
  },
  {
    id: "next-gen-onboarding",
    icon: Sparkles,
    title: "NEXT-GEN GAMING ONBOARDING",
    subtitle: "Cinematic Experience",
    quote: "Cinematic | Gamified | Unforgettable",
    shortDesc: "Immersive app introduction",
    description: "Step directly into the GAMERS TAG universe with an exciting, game-like onboarding experience you won't find anywhere else.",
    keyFeatures: [
      "Cinematic Introduction Sequence",
      "Interactive Tutorial Walkthrough",
      "Gamified Progress Tracking", 
      "Personalized Welcome Experience"
    ],
    category: "User Experience",
    color: "silver",
    gradient: "from-gray-400/20 to-gray-600/20",
    borderColor: "border-gray-400/30 hover:border-gray-300/60",
    accentColor: "text-gray-300",
    bgHover: "hover:bg-gray-500/10"
  },
  {
    id: "gaccounts",
    icon: Share2,
    title: "GACCOUNTS",
    subtitle: "Unite Your Social Universe",
    quote: "One link to rule them all",
    shortDesc: "Social media hub for gamers",
    description: "Use your GAMERS TAG profile to link every social media, streaming, and gaming account you own into one simple, powerful hub.",
    keyFeatures: [
      "Social Media Integration",
      "Streaming Platform Connections",
      "Content Aggregation",
      "Cross-Platform Promotion"
    ],
    category: "Social Integration",
    color: "white",
    gradient: "from-white/20 to-gray-200/20",
    borderColor: "border-white/30 hover:border-white/60",
    accentColor: "text-white",
    bgHover: "hover:bg-white/10"
  },
  {
    id: "gconnect",
    icon: Link2,
    title: "GCONNECT",
    subtitle: "Gaming Universe Unity",
    quote: "All gaming worlds, one place",
    shortDesc: "In-game ID management",
    description: "With GAMERS TAG, you can finally showcase every game you play and every in-game ID you own on a single, unified profile.",
    keyFeatures: [
      "Multi-Platform Gaming IDs",
      "In-Game Profile Cards",
      "Cross-Platform Friend Discovery",
      "Gaming Portfolio Showcase"
    ],
    category: "Gaming Connection",
    color: "black",
    gradient: "from-gray-800/40 to-black/40",
    borderColor: "border-gray-600/30 hover:border-gray-500/60",
    accentColor: "text-gray-400",
    bgHover: "hover:bg-gray-800/20"
  },
  {
    id: "gt-chats",
    icon: MessageCircle,
    title: "GT CHATS",
    subtitle: "Gamified Messaging",
    quote: "Fast, fun, fully gamified",
    shortDesc: "Gaming-focused chat system",
    description: "Experience a chat system built exclusively for gamers on GAMERS TAG, making communication faster, more fun, and more interactive.",
    keyFeatures: [
      "Gamified Chat Interface",
      "Team Coordination Tools",
      "Interactive Messaging Elements",
      "Gaming-Themed Emojis"
    ],
    category: "Communication",
    color: "red",
    gradient: "from-red-600/20 to-red-800/20",
    borderColor: "border-red-500/30 hover:border-red-400/60",
    accentColor: "text-red-400",
    bgHover: "hover:bg-red-500/10"
  },
  {
    id: "gt-jobs",
    icon: Briefcase,
    title: "GT JOBS",
    subtitle: "Gaming Career Portal",
    quote: "Work in the industry you love",
    shortDesc: "Gaming industry job platform",
    description: "The best way to find gaming jobs is with GAMERS TAG. Discover thousands of esports and tech career opportunities and apply in seconds.",
    keyFeatures: [
      "Quick Apply System",
      "Global Job Access",
      "One-Tap Share Feature",
      "Real-Time Status Tracking"
    ],
    category: "Career Development",
    color: "silver",
    gradient: "from-gray-400/20 to-gray-600/20",
    borderColor: "border-gray-400/30 hover:border-gray-300/60",
    accentColor: "text-gray-300",
    bgHover: "hover:bg-gray-500/10"
  },
  {
    id: "gt-hire",
    icon: UserPlus,
    title: "GT HIRE",
    subtitle: "Talent Acquisition",
    quote: "Hire the sharpest gaming minds",
    shortDesc: "Gaming recruitment platform",
    description: "With GAMERS TAG, companies and recruiters can easily find and recruit the most talented and passionate professionals in the entire gaming industry.",
    keyFeatures: [
      "Instant Job Posting",
      "Deep Linking System",
      "Rich Job Descriptions",
      "Auto-Filter Requirements"
    ],
    category: "Recruitment",
    color: "white",
    gradient: "from-white/20 to-gray-200/20",
    borderColor: "border-white/30 hover:border-white/60",
    accentColor: "text-white",
    bgHover: "hover:bg-white/10"
  },
  {
    id: "gt-news",
    icon: Newspaper,
    title: "GT NEWS",
    subtitle: "Gaming News Feed",
    quote: "Gaming news in short scrolls",
    shortDesc: "Curated gaming news platform",
    description: "Get all your essential gaming, esports, and tech news in one fast, easy-to-read feed, exclusively on GAMERS TAG.",
    keyFeatures: [
      "Short Scrolls Format",
      "Curated Gaming News",
      "Trending Categories",
      "Global Gaming Updates"
    ],
    category: "News & Updates",
    color: "black",
    gradient: "from-gray-800/40 to-black/40",
    borderColor: "border-gray-600/30 hover:border-gray-500/60",
    accentColor: "text-gray-400",
    bgHover: "hover:bg-gray-800/20"
  },
  {
    id: "creator-voice",
    icon: Edit,
    title: "CREATOR VOICE",
    subtitle: "Content Publishing",
    quote: "Your voice, your news, your stage",
    shortDesc: "Gaming content creation platform",
    description: "GAMERS TAG gives you the power to become a creator, providing a global stage to share your voice, publish your news, and build your own brand.",
    keyFeatures: [
      "Content Creation Tools",
      "Multimedia Integration",
      "Category Tagging",
      "Audience Analytics"
    ],
    category: "Content Creation",
    color: "red",
    gradient: "from-red-600/20 to-red-800/20",
    borderColor: "border-red-500/30 hover:border-red-400/60",
    accentColor: "text-red-400",
    bgHover: "hover:bg-red-500/10"
  },
  {
    id: "gt-card",
    icon: CreditCard,
    title: "GT CARD",
    subtitle: "Digital Gaming ID",
    quote: "Your gaming identity card",
    shortDesc: "Personalized gamer identity",
    description: "Get your unique GAMERS TAG digital card, a personalized identity showcasing your gaming achievements and connections.",
    keyFeatures: [
      "Digital Gaming ID Card",
      "Customizable Design",
      "GTID Display",
      "Gaming Stats Showcase"
    ],
    category: "Digital Identity",
    color: "silver",
    gradient: "from-gray-400/20 to-gray-600/20",
    borderColor: "border-gray-400/30 hover:border-gray-300/60",
    accentColor: "text-gray-300",
    bgHover: "hover:bg-gray-500/10"
  },
  {
    id: "gt-ui-ux",
    icon: Palette,
    title: "GT UI/UX",
    subtitle: "World-Class Design",
    quote: "Seamless, intuitive, stunning",
    shortDesc: "Premium gaming interface",
    description: "Navigate the GAMERS TAG app with an intuitive and visually stunning user interface designed for gamers, by gamers.",
    keyFeatures: [
      "Seamless Navigation",
      "Dynamic Animations",
      "Responsive Controls",
      "Gaming-Themed Design"
    ],
    category: "User Experience",
    color: "white",
    gradient: "from-white/20 to-gray-200/20",
    borderColor: "border-white/30 hover:border-white/60",
    accentColor: "text-white",
    bgHover: "hover:bg-white/10"
  },
  {
    id: "gt-sound",
    icon: Volume2,
    title: "GT SOUND",
    subtitle: "Immersive Audio",
    quote: "The sound of gaming",
    shortDesc: "Dynamic audio experience",
    description: "Experience a rich and dynamic audio landscape within the GAMERS TAG app, enhancing every interaction with custom sound effects.",
    keyFeatures: [
      "Custom Sound Effects",
      "Haptic Feedback",
      "UI Audio Cues",
      "Gaming-Themed Sounds"
    ],
    category: "Audio Experience",
    color: "black",
    gradient: "from-gray-800/40 to-black/40",
    borderColor: "border-gray-600/30 hover:border-gray-500/60",
    accentColor: "text-gray-400",
    bgHover: "hover:bg-gray-800/20"
  }
];

export default function Features() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);
  
  const categories = ["All", ...Array.from(new Set(features.map(f => f.category)))];
  const filteredFeatures = selectedCategory === "All" 
    ? features 
    : features.filter(f => f.category === selectedCategory);

  return (
    <>
      <SEOHead 
        title="Features - GAMERS TAG | Revolutionary Gaming Platform Features"
        description="Discover all GAMERS TAG features: Pro Gaming Profile, GT Jobs, GT Chats, GCONNECT, and more. The ultimate super app for gamers with next-gen features."
        keywords="gaming features, pro gaming profile, gaming jobs, esports platform, gaming social network"
      />
      
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* Background */}
        <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
          <div className="absolute inset-0 bg-black/90"></div>
        </div>

        <Navigation />
        
        <main className="relative z-10 pt-20">
          {/* Hero Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="font-orbitron text-6xl md:text-8xl font-bold mb-8 text-white">
                  Features
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
                  Discover the revolutionary tools that will transform your gaming journey
                </p>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                  {categories.map((category) => (
                    <motion.button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-6 py-3 rounded-full border transition-all duration-300 font-medium ${
                        selectedCategory === category
                          ? 'border-white bg-white/10 text-white shadow-lg'
                          : 'border-gray-600/50 text-gray-400 hover:border-gray-400 hover:text-gray-300'
                      }`}
                    >
                      {category}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Features Grid */}
          <section className="py-12 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                <AnimatePresence mode="wait">
                  {filteredFeatures.map((feature, index) => (
                    <motion.div
                      key={feature.id}
                      layout
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -50 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ 
                        scale: 1.05, 
                        rotateY: 5,
                        z: 50
                      }}
                      onHoverStart={() => setHoveredFeature(feature.id)}
                      onHoverEnd={() => setHoveredFeature(null)}
                      className="group cursor-pointer"
                    >
                      <div className="relative h-full min-h-[500px]">
                        {/* Sharp HUD Card matching incubator design */}
                        <div className="relative bg-black/80 backdrop-blur-xl border-2 border-[#E5042F]/50 p-8 h-full transform transition-all duration-500 group-hover:border-[#E5042F] group-hover:shadow-[0_0_30px_#E5042F70] group-hover:bg-black/90" 
                             style={{
                               clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'
                             }}>
                          
                          {/* Corner Accents */}
                          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                          
                          {/* Scan Line Animation */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#E5042F] to-transparent animate-pulse"></div>
                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse" style={{animationDelay: '0.5s'}}></div>
                          </div>

                          {/* Header with Icon and Title */}
                          <div className="flex items-center gap-4 mb-6 relative z-10">
                            <div className="relative">
                              <motion.div
                                className="w-20 h-20 bg-[#E5042F]/20 border-2 border-[#E5042F]/30 group-hover:border-white transition-all duration-300 flex items-center justify-center"
                                style={{
                                  clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                                }}
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.8 }}
                              >
                                <feature.icon className="w-10 h-10 text-[#E5042F] group-hover:text-white transition-colors duration-300" />
                              </motion.div>
                              <div className="absolute inset-0 bg-[#E5042F]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                                   style={{
                                     clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                                   }}></div>
                            </div>
                            <div className="flex-1">
                              <h3 className="text-2xl font-bold text-white mb-2 font-orbitron group-hover:text-[#E5042F] transition-colors duration-300">
                                {feature.title}
                              </h3>
                              <div className="inline-block bg-[#E5042F]/20 border border-[#E5042F]/50 text-[#E5042F] text-sm px-4 py-2 group-hover:bg-white/20 group-hover:text-white group-hover:border-white/50 transition-all duration-300 font-medium uppercase tracking-wider"
                                   style={{
                                     clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                                   }}>
                                {feature.category}
                              </div>
                            </div>
                          </div>
                          
                          {/* Description */}
                          <div className="mb-8 relative z-10">
                            <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300 text-base mb-4">
                              {feature.description}
                            </p>
                            <blockquote className="text-sm italic text-[#E5042F] group-hover:text-white transition-colors duration-300 opacity-80">
                              "{feature.quote}"
                            </blockquote>
                          </div>

                          {/* Key Benefits Section */}
                          <div className="mb-8 relative z-10">
                            <h4 className="text-[#E5042F] font-semibold mb-4 group-hover:text-white transition-colors duration-300">Key Benefits</h4>
                            <div className="grid grid-cols-2 gap-3">
                              {feature.keyFeatures.slice(0, 4).map((feat, featIndex) => (
                                <div key={featIndex} className="bg-[#E5042F]/10 border border-[#E5042F]/30 px-3 py-2 text-xs font-medium text-[#E5042F] group-hover:bg-white/10 group-hover:text-white group-hover:border-white/30 transition-all duration-300"
                                     style={{
                                       clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))'
                                     }}>
                                  {feat}
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Action Button */}
                          <div className="relative z-10 mt-auto">
                            <Link href={`/features/${feature.id}`}>
                              <motion.button
                                className="w-full bg-[#E5042F] border border-[#E5042F] text-white py-4 px-6 font-semibold transition-all duration-300 group-hover:bg-white group-hover:border-white group-hover:shadow-[0_0_20px_#E5042F50] flex items-center justify-center space-x-2"
                                style={{
                                  clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                                }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                <span className="group-hover:text-black transition-colors duration-300">View Feature</span>
                                <ExternalLink className="w-5 h-5 group-hover:text-black transition-colors duration-300" />
                              </motion.button>
                            </Link>
                          </div>

                          {/* Status Indicator */}
                          <div className="absolute top-4 right-4 w-3 h-3 bg-[#E5042F] rounded-full animate-pulse group-hover:bg-white transition-colors duration-300"></div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-24 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative bg-gradient-to-br from-white/5 to-gray-800/20 backdrop-blur-sm border border-white/20 rounded-3xl p-12 overflow-hidden"
              >
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-white/10"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
                
                <div className="relative z-10">
                  <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    Ready to Level Up?
                  </h2>
                  <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                    Join thousands of gamers who have transformed their passion into profession with GAMERS TAG's revolutionary features
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link href="/dashboard">
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group px-10 py-4 bg-white text-black font-bold rounded-xl border border-white transition-all duration-300 hover:bg-gray-100 hover:shadow-2xl hover:shadow-white/25 flex items-center justify-center space-x-3"
                      >
                        <span>Get Started Now</span>
                        <Zap className="w-5 h-5 group-hover:text-yellow-600 transition-colors duration-300" />
                      </motion.button>
                    </Link>
                    
                    <Link href="/about">
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-4 border border-gray-400 text-gray-300 font-bold rounded-xl transition-all duration-300 hover:border-white hover:text-white hover:bg-white/10 hover:shadow-lg flex items-center justify-center space-x-3"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-5 h-5" />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}