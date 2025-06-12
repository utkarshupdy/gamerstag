import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useParams } from "wouter";
import { useQuery } from "@tanstack/react-query";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/seo-head";
import { SharpButton, DualButtonGroup } from "@/components/ui/sharp-button";
import { comprehensiveFeatureData } from "@/lib/comprehensive-feature-data";
import { 
  ArrowLeft,
  Download,
  CheckCircle2,
  AlertTriangle,
  Target,
  TrendingUp,
  Zap,
  Shield,
  Eye,
  Crown,
  Star,
  Globe,
  Users,
  Award,
  Smartphone,
  Edit,
  Gamepad2,
  Play,
  ExternalLink,
  Instagram,
  Twitter,
  Youtube,
  Quote,
  Calendar,
  Image,
  VideoIcon,
  Heart,
  ThumbsUp,
  Building,
  Palette,
  Monitor,
  Layers,
  Settings,
  Layout,
  Brush,
  Code,
  Cpu,
  Mouse,
  Tablet,
  Sparkles
} from "lucide-react";

export default function GTUI() {
  const [activeSection, setActiveSection] = useState("overview");

  const featureInfo = comprehensiveFeatureData["gt-ui"];

  // Fetch testimonials for this feature
  const { data: testimonials = [] } = useQuery<any[]>({
    queryKey: ['/api/testimonials/feature', "gt-ui"],
  });

  // Fetch gallery items for this feature  
  const { data: galleryItems = [] } = useQuery<any[]>({
    queryKey: ['/api/gallery', "gt-ui"],
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'about', 'problems', 'benefits', 'features', 'future', 'gallery', 'testimonials'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!featureInfo) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Feature Not Found</h1>
          <Link href="/features">
            <Button className="bg-[#E5042F] hover:bg-[#C5032A]">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Features
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = featureInfo.icon;

  return (
    <>
      <SEOHead 
        title={`${featureInfo.title} | GAMERS TAG`}
        description={featureInfo.description}
      />
      
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        <Navigation />

        {/* Hero Section */}
        <section id="overview" className="relative py-32 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#E5042F]/20 via-black to-black"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <Badge className="bg-[#E5042F] text-white mb-6 px-4 py-2">
                  {featureInfo.color.toUpperCase()} FEATURE
                </Badge>
                
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-[#E5042F] to-white bg-clip-text text-transparent">
                  {featureInfo.title}
                </h1>
                
                <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">
                  {featureInfo.subtitle}
                </h2>

                <blockquote className="text-lg md:text-xl text-gray-300 italic mb-6 border-l-4 border-[#E5042F] pl-4">
                  "{featureInfo.quote}"
                </blockquote>

                <p className="text-gray-400 leading-relaxed mb-8">
                  {featureInfo.description}
                </p>

                <DualButtonGroup
                  redButton={
                    <SharpButton variant="red" size="lg">
                      <Download className="w-5 h-5" />
                      <span>DOWNLOAD APP</span>
                    </SharpButton>
                  }
                  whiteButton={
                    <SharpButton variant="white" size="lg">
                      <Play className="w-5 h-5" />
                      <span>WATCH DEMO</span>
                    </SharpButton>
                  }
                />
              </div>

              <div className="relative">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="relative"
                >
                  <div className="w-full min-h-[200px] bg-black border-2 border-[#E5042F] relative flex items-center justify-center p-8">
                    {/* Corner accents */}
                    <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-[#E5042F]"></div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-[#E5042F]"></div>
                    <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-[#E5042F]"></div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-[#E5042F]"></div>
                    
                    <IconComponent className="w-32 h-32 text-[#E5042F]" />
                    
                    {/* HUD overlays */}
                    <div className="absolute top-4 left-4 text-[#C0C0C0] text-xs font-mono">
                      STATUS: ACTIVE
                    </div>
                    <div className="absolute top-4 right-4 text-[#C0C0C0] text-xs font-mono">
                      ID: GT-UI
                    </div>
                    <div className="absolute bottom-4 left-4 text-[#C0C0C0] text-xs font-mono">
                      TYPE: FEATURE
                    </div>
                    <div className="absolute bottom-4 right-4 text-[#E5042F] text-xs font-mono animate-pulse">
                      ● ONLINE
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Feature */}
        <section id="about" className="relative py-24 px-4 bg-black/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About This Feature
              </h3>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Deep dive into what makes this feature exceptional
              </p>
            </motion.div>
            
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="bg-black border-2 border-white/30 hover:border-[#E5042F] transition-all duration-500 relative p-12 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#E5042F]/20">
                  {/* Corner accents - HUD style */}
                  <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                  <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                  
                  {/* Number indicator top-left */}
                  <div className="absolute top-8 left-8">
                    <div className="w-12 h-12 border-2 border-white group-hover:border-[#E5042F] bg-black flex items-center justify-center transition-all duration-300">
                      <span className="text-white group-hover:text-[#E5042F] text-xl font-bold transition-colors duration-300">01</span>
                    </div>
                  </div>
                  
                  {/* Animated scan lines */}
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 group-hover:via-[#E5042F] transition-all duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 group-hover:via-[#E5042F] transition-all duration-500"></div>
                  
                  {/* Status indicator */}
                  <div className="absolute top-8 right-8 w-3 h-3 bg-white rounded-full group-hover:bg-[#E5042F] animate-pulse transition-colors duration-300"></div>
                  
                  {/* Icon in center with HUD frame */}
                  <div className="flex justify-center mb-8">
                    <div className="w-16 h-16 border-2 border-white group-hover:border-[#E5042F] bg-black flex items-center justify-center transition-all duration-300 relative">
                      <IconComponent className="w-8 h-8 text-white group-hover:text-[#E5042F] transition-colors duration-300" />
                      {/* Inner corners */}
                      <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-white/50 group-hover:border-[#E5042F]/50 transition-colors duration-300"></div>
                      <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-white/50 group-hover:border-[#E5042F]/50 transition-colors duration-300"></div>
                      <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-white/50 group-hover:border-[#E5042F]/50 transition-colors duration-300"></div>
                      <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-white/50 group-hover:border-[#E5042F]/50 transition-colors duration-300"></div>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-white text-2xl font-bold text-center mb-6 tracking-wider group-hover:text-[#E5042F] transition-colors duration-300">
                    ABOUT THIS FEATURE
                  </h4>
                  
                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed text-center max-w-4xl mx-auto group-hover:text-white transition-colors duration-300">
                    {featureInfo.aboutFeature}
                  </p>
                  
                  {/* Bottom HUD elements */}
                  <div className="absolute bottom-4 left-4 text-white/50 group-hover:text-[#E5042F]/80 text-xs font-mono transition-colors duration-300">
                    FEATURE_DATA_01
                  </div>
                  <div className="absolute bottom-4 right-4 text-white/50 group-hover:text-[#E5042F]/80 text-xs font-mono transition-colors duration-300">
                    ACTIVE
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Problems Section */}
        <section id="problems" className="relative py-24 px-4 bg-black/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Problems This Feature Solves
              </h3>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Addressing key challenges in the gaming industry
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featureInfo.problems.map((problem, index) => {
                const ProblemIcon = problem.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group cursor-pointer"
                  >
                    <div className="h-full bg-black border-2 border-white/30 hover:border-[#E5042F] transition-all duration-500 relative p-8 transform hover:scale-[1.05] hover:shadow-2xl hover:shadow-[#E5042F]/20">
                      {/* Corner accents - HUD style */}
                      <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                      <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                      
                      {/* Number indicator top-left */}
                      <div className="absolute top-6 left-6">
                        <div className="w-10 h-10 border-2 border-white group-hover:border-[#E5042F] bg-black flex items-center justify-center transition-all duration-300">
                          <span className="text-white group-hover:text-[#E5042F] text-sm font-bold transition-colors duration-300">{String(index + 1).padStart(2, '0')}</span>
                        </div>
                      </div>
                      
                      {/* Status indicator top-right */}
                      <div className="absolute top-6 right-6 w-2 h-2 bg-white rounded-full group-hover:bg-[#E5042F] animate-pulse transition-colors duration-300"></div>
                      
                      {/* Animated scan lines */}
                      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 group-hover:via-[#E5042F] transition-all duration-500"></div>
                      
                      {/* Icon in center with HUD frame */}
                      <div className="flex justify-center mb-6 mt-4">
                        <div className="w-14 h-14 border-2 border-white group-hover:border-[#E5042F] bg-black flex items-center justify-center transition-all duration-300 relative">
                          <ProblemIcon className="w-7 h-7 text-white group-hover:text-[#E5042F] transition-colors duration-300" />
                          {/* Inner corners */}
                          <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-white/30 group-hover:border-[#E5042F]/50 transition-colors duration-300"></div>
                          <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-white/30 group-hover:border-[#E5042F]/50 transition-colors duration-300"></div>
                          <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-white/30 group-hover:border-[#E5042F]/50 transition-colors duration-300"></div>
                          <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-white/30 group-hover:border-[#E5042F]/50 transition-colors duration-300"></div>
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h4 className="text-white text-xl font-bold text-center mb-4 tracking-wider uppercase group-hover:text-[#E5042F] transition-colors duration-300">
                        {problem.title}
                      </h4>
                      
                      {/* Description */}
                      <p className="text-gray-400 leading-relaxed text-center group-hover:text-white transition-colors duration-300">
                        {problem.description}
                      </p>
                      
                      {/* Bottom HUD indicator */}
                      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-white/30 group-hover:bg-[#E5042F]/80 transition-colors duration-300"></div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="relative py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Benefits of This Feature
              </h3>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Unlock the advantages of superior gaming technology
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featureInfo.benefits.map((benefit, index) => {
                const BenefitIcon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group cursor-pointer"
                  >
                    <div className="h-full bg-black border-2 border-white/30 hover:border-[#E5042F] transition-all duration-500 relative p-8 transform hover:scale-[1.05] hover:shadow-2xl hover:shadow-[#E5042F]/20">
                      {/* Corner accents - HUD style */}
                      <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                      <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                      
                      {/* Number indicator top-left */}
                      <div className="absolute top-6 left-6">
                        <div className="w-10 h-10 border-2 border-white group-hover:border-[#E5042F] bg-black flex items-center justify-center transition-all duration-300">
                          <span className="text-white group-hover:text-[#E5042F] text-sm font-bold transition-colors duration-300">{String(index + 1).padStart(2, '0')}</span>
                        </div>
                      </div>
                      
                      {/* Status indicator top-right */}
                      <div className="absolute top-6 right-6 w-2 h-2 bg-white rounded-full group-hover:bg-[#E5042F] animate-pulse transition-colors duration-300"></div>
                      
                      {/* Animated scan lines */}
                      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 group-hover:via-[#E5042F] transition-all duration-500"></div>
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 group-hover:via-[#E5042F] transition-all duration-500"></div>
                      
                      {/* Icon in center with HUD frame */}
                      <div className="flex justify-center mb-6 mt-4">
                        <div className="w-14 h-14 border-2 border-white group-hover:border-[#E5042F] bg-black flex items-center justify-center transition-all duration-300 relative">
                          <BenefitIcon className="w-7 h-7 text-white group-hover:text-[#E5042F] transition-colors duration-300" />
                          {/* Inner corners */}
                          <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-white/30 group-hover:border-[#E5042F]/50 transition-colors duration-300"></div>
                          <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-white/30 group-hover:border-[#E5042F]/50 transition-colors duration-300"></div>
                          <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-white/30 group-hover:border-[#E5042F]/50 transition-colors duration-300"></div>
                          <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-white/30 group-hover:border-[#E5042F]/50 transition-colors duration-300"></div>
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h4 className="text-white text-xl font-bold text-center mb-4 tracking-wider uppercase group-hover:text-[#E5042F] transition-colors duration-300">
                        {benefit.title}
                      </h4>
                      
                      {/* Description */}
                      <p className="text-gray-300 leading-relaxed text-center group-hover:text-white transition-colors duration-300">
                        {benefit.description}
                      </p>
                      
                      {/* Bottom HUD indicator */}
                      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-white/30 group-hover:bg-[#E5042F]/80 transition-colors duration-300"></div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}