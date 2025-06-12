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
import { FeatureApplicationModal } from "@/components/feature-application-modal";
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
  Building
} from "lucide-react";

export default function FeatureDetail() {
  const { feature } = useParams<{ feature: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");

  const featureInfo = feature ? comprehensiveFeatureData[feature] : null;

  // Fetch testimonials for this feature
  const { data: testimonials = [] } = useQuery<any[]>({
    queryKey: ['/api/testimonials/feature', feature],
    enabled: !!feature
  });

  // Fetch gallery items for this feature  
  const { data: galleryItems = [] } = useQuery<any[]>({
    queryKey: ['/api/gallery', feature],
    enabled: !!feature
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'features', 'about', 'problems', 'benefits', 'testimonials', 'gallery', 'future', 'journey'];
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
            <button 
              className="bg-black border-2 border-[#E5042F] text-white hover:bg-[#E5042F] px-6 py-3 font-bold tracking-wider transition-all duration-300 flex items-center"
              style={{
                clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)'
              }}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Features
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = featureInfo.icon;

  return (
    <>
      <SEOHead
        title={`${featureInfo.title} - ${featureInfo.subtitle} | GAMERS TAG`}
        description={featureInfo.description}
        keywords={`${featureInfo.title}, gaming, esports, GAMERS TAG, gaming features`}
      />
      
      <div className="min-h-screen relative overflow-hidden bg-black">
        <Navigation />
        
        {/* HUD Grid Pattern Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `
              linear-gradient(rgba(229,4,47,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(229,4,47,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(229,4,47,0.1)_0%,transparent_50%)]"></div>
        </div>

        {/* HUD Floating Navigation */}
        <div className="fixed top-32 right-4 lg:right-8 z-40 hidden lg:block">
          <div className="bg-black border-2 border-[#E5042F] relative w-64">
            {/* Corner accents */}
            <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#E5042F]"></div>
            <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#E5042F]"></div>
            <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[#E5042F]"></div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#E5042F]"></div>
            
            <div className="p-4 space-y-1">
              {[
                { id: 'overview', label: 'OVERVIEW', icon: Eye },
                { id: 'features', label: 'SUB-FEATURES', icon: Zap },
                { id: 'about', label: 'ABOUT', icon: CheckCircle2 },
                { id: 'problems', label: 'PROBLEMS WE SOLVE', icon: AlertTriangle },
                { id: 'benefits', label: 'BENEFITS', icon: Star },
                { id: 'testimonials', label: 'TESTIMONIALS', icon: Quote },
                { id: 'gallery', label: 'GALLERY', icon: Image },
                { id: 'future', label: 'FUTURE OF THIS FEATURE', icon: TrendingUp },
                { id: 'journey', label: 'APP JOURNEY', icon: Globe }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => {
                    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`group relative flex items-center space-x-3 px-4 py-3 text-xs font-bold tracking-wider transition-all duration-300 w-full ${
                    activeSection === id 
                      ? 'bg-[#E5042F] text-white' 
                      : 'bg-black text-[#C0C0C0] hover:text-white hover:bg-[#E5042F] hover:scale-105'
                  }`}
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 0px) 0, 100% 0px, 100% 100%, 0px 100%, 0 calc(100% - 0px))'
                  }}
                >
                  {/* Left border accent */}
                  <div className={`absolute left-0 top-0 w-1 h-full transition-all duration-300 ${
                    activeSection === id ? 'bg-white' : 'bg-[#E5042F] group-hover:bg-white'
                  }`}></div>
                  
                  <Icon className={`w-4 h-4 transition-all duration-300 ${
                    activeSection === id ? 'text-white' : 'text-[#E5042F] group-hover:text-white'
                  }`} />
                  <span className="flex-1 text-left">{label}</span>
                  
                  {/* Right arrow indicator */}
                  <div className={`w-2 h-2 border-t-2 border-r-2 transform rotate-45 transition-all duration-300 ${
                    activeSection === id 
                      ? 'border-white opacity-100' 
                      : 'border-[#E5042F] opacity-0 group-hover:opacity-100 group-hover:border-white'
                  }`}></div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section id="overview" className="relative pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Back Button */}
              <Link href="/features">
                <button 
                  className="mb-8 bg-black border-2 border-gray-400 text-gray-400 hover:text-white hover:border-white hover:bg-white/10 px-6 py-3 font-bold tracking-wider transition-all duration-300 flex items-center"
                  style={{
                    clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)'
                  }}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Features
                </button>
              </Link>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center space-x-3 px-6 py-3 mb-6 border-2 border-[#E5042F] bg-black relative">
                    {/* Corner accents */}
                    <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#E5042F]"></div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#E5042F]"></div>
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[#E5042F]"></div>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#E5042F]"></div>
                    
                    <IconComponent className="w-5 h-5 text-[#E5042F]" />
                    <span className="text-white font-bold tracking-wider text-sm">{featureInfo.title.toUpperCase()}</span>
                    <div className="w-2 h-2 bg-[#E5042F] animate-pulse"></div>
                  </div>

                  <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                    {featureInfo.title}
                  </h1>
                  
                  <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#E5042F]">
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
                        ID: {feature?.toUpperCase()}
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
              </div>
            </motion.div>
          </div>
        </section>

        {/* Sub-Features Section */}
        <section id="features" className="relative py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Sub-Features
              </h3>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
                {featureInfo.title} got {featureInfo.features.length} stunning sub-features
              </p>
            </motion.div>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-20">
              {featureInfo.features.map((feature: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="h-full bg-black border-2 border-[#C0C0C0] hover:border-[#E5042F] relative transition-all duration-300 transform hover:scale-105 p-6">
                    {/* HUD Corner accents */}
                    <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#C0C0C0] group-hover:border-white transition-colors"></div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#C0C0C0] group-hover:border-white transition-colors"></div>
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[#C0C0C0] group-hover:border-white transition-colors"></div>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#C0C0C0] group-hover:border-white transition-colors"></div>
                    
                    {/* Status indicator */}
                    <div className="absolute top-2 right-2 w-1 h-1 bg-[#E5042F] animate-pulse"></div>
                    
                    <div className="text-center">
                      <div className="w-10 h-10 bg-black border border-[#E5042F] flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-5 h-5 text-[#E5042F] group-hover:scale-110 transition-transform" />
                      </div>
                      <p className="text-white text-sm font-bold tracking-wider leading-tight">{feature.toUpperCase()}</p>
                      
                      {/* HUD footer */}
                      <div className="text-[#C0C0C0] text-xs font-mono mt-3 border-t border-[#C0C0C0]/30 pt-2">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Sub-features if they exist */}
            {featureInfo.subFeatures && (
              <div className="mt-16">
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                  Extended Sub-Features
                </h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {featureInfo.subFeatures.map((subFeature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="h-full bg-black/60 border border-[#E5042F]/30 hover:border-[#E5042F]/60 transition-all duration-300 p-6">
                        <CardHeader className="pb-4">
                          <CardTitle className="text-white text-lg">{subFeature.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-gray-400 text-sm leading-relaxed">{subFeature.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
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

        {/* Gallery Section */}
        <section id="gallery" className="relative py-24 px-4 bg-black/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Feature Gallery
              </h3>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Visual showcase of {featureInfo.title}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryItems.length > 0 ? galleryItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="overflow-hidden bg-black border-2 border-white/30 hover:border-[#E5042F] transition-all duration-500 relative transform hover:scale-[1.03] hover:shadow-2xl hover:shadow-[#E5042F]/20">
                    {/* Corner accents - HUD style */}
                    <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-white group-hover:border-[#E5042F] transition-colors duration-300 z-10"></div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-white group-hover:border-[#E5042F] transition-colors duration-300 z-10"></div>
                    <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-white group-hover:border-[#E5042F] transition-colors duration-300 z-10"></div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-white group-hover:border-[#E5042F] transition-colors duration-300 z-10"></div>
                    
                    {/* Number indicator */}
                    <div className="absolute top-3 left-3 z-10">
                      <div className="w-8 h-8 border-2 border-white group-hover:border-[#E5042F] bg-black flex items-center justify-center transition-all duration-300">
                        <span className="text-white group-hover:text-[#E5042F] text-xs font-bold transition-colors duration-300">{String(index + 1).padStart(2, '0')}</span>
                      </div>
                    </div>
                    
                    {/* Status indicator */}
                    <div className="absolute top-3 right-3 w-2 h-2 bg-white rounded-full group-hover:bg-[#E5042F] animate-pulse transition-colors duration-300 z-10"></div>
                    
                    <div className="aspect-video bg-gradient-to-br from-white/5 to-black flex items-center justify-center relative">
                      <Image className="w-16 h-16 text-white group-hover:text-[#E5042F] group-hover:scale-110 transition-all duration-300" />
                      {/* Scan lines */}
                      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 group-hover:via-[#E5042F] transition-all duration-500"></div>
                    </div>
                    <div className="p-4 relative">
                      <h4 className="text-white font-semibold mb-2 group-hover:text-[#E5042F] transition-colors duration-300">{item.title}</h4>
                      <p className="text-gray-400 text-sm group-hover:text-white transition-colors duration-300">{item.description}</p>
                      
                      {/* Bottom HUD line */}
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-white/30 group-hover:bg-[#E5042F]/80 transition-colors duration-300"></div>
                    </div>
                  </div>
                </motion.div>
              )) : (
                // Placeholder gallery items when no data
                Array.from({ length: 6 }).map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group cursor-pointer"
                  >
                    <div className="overflow-hidden bg-black border-2 border-white/30 hover:border-[#E5042F] transition-all duration-500 relative transform hover:scale-[1.03] hover:shadow-2xl hover:shadow-[#E5042F]/20">
                      {/* Corner accents - HUD style */}
                      <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-white group-hover:border-[#E5042F] transition-colors duration-300 z-10"></div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-white group-hover:border-[#E5042F] transition-colors duration-300 z-10"></div>
                      <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-white group-hover:border-[#E5042F] transition-colors duration-300 z-10"></div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-white group-hover:border-[#E5042F] transition-colors duration-300 z-10"></div>
                      
                      {/* Number indicator */}
                      <div className="absolute top-3 left-3 z-10">
                        <div className="w-8 h-8 border-2 border-white group-hover:border-[#E5042F] bg-black flex items-center justify-center transition-all duration-300">
                          <span className="text-white group-hover:text-[#E5042F] text-xs font-bold transition-colors duration-300">{String(index + 1).padStart(2, '0')}</span>
                        </div>
                      </div>
                      
                      {/* Status indicator */}
                      <div className="absolute top-3 right-3 w-2 h-2 bg-white rounded-full group-hover:bg-[#E5042F] animate-pulse transition-colors duration-300 z-10"></div>
                      
                      <div className="aspect-video bg-gradient-to-br from-white/5 to-black flex items-center justify-center relative">
                        <Image className="w-16 h-16 text-white group-hover:text-[#E5042F] group-hover:scale-110 transition-all duration-300" />
                        {/* Scan lines */}
                        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 group-hover:via-[#E5042F] transition-all duration-500"></div>
                      </div>
                      <div className="p-4 relative">
                        <h4 className="text-white font-semibold mb-2 group-hover:text-[#E5042F] transition-colors duration-300">Gallery Item {index + 1}</h4>
                        <p className="text-gray-400 text-sm group-hover:text-white transition-colors duration-300">Visual content for {featureInfo.title}</p>
                        
                        {/* Bottom HUD line */}
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-white/30 group-hover:bg-[#E5042F]/80 transition-colors duration-300"></div>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="relative py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Gamers Say
              </h3>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real feedback from the gaming community
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.length > 0 ? testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="h-full bg-black border-2 border-white/30 hover:border-[#E5042F] transition-all duration-500 relative p-6 transform hover:scale-[1.03] hover:shadow-2xl hover:shadow-[#E5042F]/20">
                    {/* Corner accents - HUD style */}
                    <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                    <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                    
                    {/* Number indicator */}
                    <div className="absolute top-4 left-4">
                      <div className="w-8 h-8 border-2 border-white group-hover:border-[#E5042F] bg-black flex items-center justify-center transition-all duration-300">
                        <span className="text-white group-hover:text-[#E5042F] text-xs font-bold transition-colors duration-300">{String(index + 1).padStart(2, '0')}</span>
                      </div>
                    </div>
                    
                    {/* Status indicator */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full group-hover:bg-[#E5042F] animate-pulse transition-colors duration-300"></div>
                    
                    {/* Scan lines */}
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 group-hover:via-[#E5042F] transition-all duration-500"></div>
                    
                    <div className="pt-8">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-12 h-12 border-2 border-white group-hover:border-[#E5042F] bg-black flex items-center justify-center transition-all duration-300 relative">
                          <span className="text-white group-hover:text-[#E5042F] font-bold transition-colors duration-300">{testimonial.name?.charAt(0) || 'G'}</span>
                          {/* Inner corners */}
                          <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-white/30 group-hover:border-[#E5042F]/50 transition-colors duration-300"></div>
                          <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-white/30 group-hover:border-[#E5042F]/50 transition-colors duration-300"></div>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold group-hover:text-[#E5042F] transition-colors duration-300">{testimonial.name || 'Gamer'}</h4>
                          <p className="text-gray-400 text-sm group-hover:text-white transition-colors duration-300">{testimonial.role || 'Gaming Enthusiast'}</p>
                        </div>
                      </div>
                      
                      <Quote className="w-8 h-8 text-white group-hover:text-[#E5042F] mb-4 transition-colors duration-300" />
                      <p className="text-gray-300 leading-relaxed mb-4 group-hover:text-white transition-colors duration-300">{testimonial.content}</p>
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 transition-colors duration-300 ${
                              i < (testimonial.rating || 5) 
                                ? 'text-white group-hover:text-[#E5042F] fill-current' 
                                : 'text-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                      
                      {/* Bottom HUD indicator */}
                      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-white/30 group-hover:bg-[#E5042F]/80 transition-colors duration-300"></div>
                    </div>
                  </div>
                </motion.div>
              )) : (
                // Placeholder testimonials when no data
                Array.from({ length: 3 }).map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group cursor-pointer"
                  >
                    <div className="h-full bg-black border-2 border-white/30 hover:border-[#E5042F] transition-all duration-500 relative p-6 transform hover:scale-[1.03] hover:shadow-2xl hover:shadow-[#E5042F]/20">
                      {/* Corner accents - HUD style */}
                      <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                      <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                      
                      {/* Number indicator */}
                      <div className="absolute top-4 left-4">
                        <div className="w-8 h-8 border-2 border-white group-hover:border-[#E5042F] bg-black flex items-center justify-center transition-all duration-300">
                          <span className="text-white group-hover:text-[#E5042F] text-xs font-bold transition-colors duration-300">{String(index + 1).padStart(2, '0')}</span>
                        </div>
                      </div>
                      
                      {/* Status indicator */}
                      <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full group-hover:bg-[#E5042F] animate-pulse transition-colors duration-300"></div>
                      
                      {/* Scan lines */}
                      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 group-hover:via-[#E5042F] transition-all duration-500"></div>
                      
                      <div className="pt-8">
                        <div className="flex items-center space-x-4 mb-6">
                          <div className="w-12 h-12 border-2 border-white group-hover:border-[#E5042F] bg-black flex items-center justify-center transition-all duration-300 relative">
                            <span className="text-white group-hover:text-[#E5042F] font-bold transition-colors duration-300">G</span>
                            {/* Inner corners */}
                            <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-white/30 group-hover:border-[#E5042F]/50 transition-colors duration-300"></div>
                            <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-white/30 group-hover:border-[#E5042F]/50 transition-colors duration-300"></div>
                          </div>
                          <div>
                            <h4 className="text-white font-semibold group-hover:text-[#E5042F] transition-colors duration-300">Gaming Pro {index + 1}</h4>
                            <p className="text-gray-400 text-sm group-hover:text-white transition-colors duration-300">Professional Gamer</p>
                          </div>
                        </div>
                        
                        <Quote className="w-8 h-8 text-white group-hover:text-[#E5042F] mb-4 transition-colors duration-300" />
                        <p className="text-gray-300 leading-relaxed mb-4 group-hover:text-white transition-colors duration-300">This feature has revolutionized my gaming experience and workflow.</p>
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-white group-hover:text-[#E5042F] fill-current transition-colors duration-300" />
                          ))}
                        </div>
                        
                        {/* Bottom HUD indicator */}
                        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-white/30 group-hover:bg-[#E5042F]/80 transition-colors duration-300"></div>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </section>



        {/* Future Vision */}
        <section id="future" className="relative py-24 px-4 bg-black/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Future of this Feature
              </h3>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                What lies ahead for this revolutionary gaming technology
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
                      <span className="text-white group-hover:text-[#E5042F] text-xl font-bold transition-colors duration-300">03</span>
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
                      <TrendingUp className="w-8 h-8 text-white group-hover:text-[#E5042F] transition-colors duration-300" />
                      {/* Inner corners */}
                      <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-white/50 group-hover:border-[#E5042F]/50 transition-colors duration-300"></div>
                      <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-white/50 group-hover:border-[#E5042F]/50 transition-colors duration-300"></div>
                      <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-white/50 group-hover:border-[#E5042F]/50 transition-colors duration-300"></div>
                      <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-white/50 group-hover:border-[#E5042F]/50 transition-colors duration-300"></div>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-white text-2xl font-bold text-center mb-6 tracking-wider group-hover:text-[#E5042F] transition-colors duration-300">
                    FUTURE OF THIS FEATURE
                  </h4>
                  
                  {/* Content */}
                  <p className="text-gray-300 leading-relaxed text-center max-w-4xl mx-auto group-hover:text-white transition-colors duration-300">
                    {featureInfo.future}
                  </p>
                  
                  {/* Bottom HUD line */}
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-white/30 group-hover:bg-[#E5042F]/80 transition-colors duration-300"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Journey Section */}
        <section id="journey" className="relative py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Journey to build this
              </h3>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The story behind the creation of this revolutionary feature
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
                      <span className="text-white group-hover:text-[#E5042F] text-xl font-bold transition-colors duration-300">04</span>
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
                      <Building className="w-8 h-8 text-white group-hover:text-[#E5042F] transition-colors duration-300" />
                      {/* Inner corners */}
                      <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-white/50 group-hover:border-[#E5042F]/50 transition-colors duration-300"></div>
                      <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-white/50 group-hover:border-[#E5042F]/50 transition-colors duration-300"></div>
                      <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-white/50 group-hover:border-[#E5042F]/50 transition-colors duration-300"></div>
                      <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-white/50 group-hover:border-[#E5042F]/50 transition-colors duration-300"></div>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-white text-2xl font-bold text-center mb-6 tracking-wider group-hover:text-[#E5042F] transition-colors duration-300">
                    OUR JOURNEY TO BUILD THIS
                  </h4>
                  
                  {/* Content */}
                  <div className="text-gray-300 leading-relaxed max-w-4xl mx-auto space-y-6 group-hover:text-white transition-colors duration-300">
                    <p className="text-center">
                      <span className="text-[#E5042F] font-bold">From a Single Stroke to a Gaming News Revolution</span>
                    </p>
                    <p>
                      It began with a spark, a single stroke of a pen on paper, sketching the nascent idea for an app. Little did we know, that humble drawing would blossom into the immersive experience you see today: Gamers Tag. Our journey was fueled by a vision to redefine content consumption, especially for the global gaming community. We assembled a dream team: the world's brightest young designers partnered with seasoned UI/UX specialists, all united by a singular focus on creating an unparalleled platform.
                    </p>
                    <p>
                      For two years, our design studio became a crucible of innovation. We meticulously crafted over 20,000 wireframes and refined them into 10,000 unique components. Every pixel, every interaction, was a testament to our relentless pursuit of perfection. Imagine the countless hours spent analyzing content card layouts, ensuring each one felt intuitive and visually compelling. Even the precise placement of a share button was a decision born from rigorous research and analysis, not mere chance.
                    </p>
                    <p>
                      Our aspiration is bold: to become the world's leading gaming app. To achieve this, we put Gamers Tag through the ultimate test, engaging over 10,000 gaming enthusiasts and content consumers. Their invaluable feedback shaped every curve and corner, guaranteeing that our design not only meets but sets new industry standards for mobile news consumption and gaming content curation. <span className="text-[#E5042F] font-semibold">This isn't just an app; it's a testament to what's possible when passion meets precision.</span>
                    </p>
                  </div>
                  
                  {/* Bottom HUD line */}
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-white/30 group-hover:bg-[#E5042F]/80 transition-colors duration-300"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>





        <Footer />
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setIsModalOpen(false)}>
          <div className="bg-black border-2 border-[#E5042F] p-8 max-w-md w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-white text-xl font-bold mb-4">Feature Application</h3>
            <p className="text-gray-300 mb-6">Thank you for your interest in {featureInfo.title}!</p>
            <button 
              onClick={() => setIsModalOpen(false)}
              className="bg-black border-2 border-[#E5042F] text-white px-6 py-2 font-bold tracking-wider hover:bg-[#E5042F] transition-all duration-300"
              style={{
                clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)'
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}