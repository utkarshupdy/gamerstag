import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import CompanyWall from "@/components/CompanyWall";
import { FollowingEyes } from "@/components/FollowingEyes";
import { AdvancedSEO } from "@/components/seo/advanced-seo";
import { StructuredData, organizationSchema, websiteSchema } from "@/components/seo/StructuredData";
import { usePerformanceMonitoring } from "@/lib/performance/core-web-vitals";
import { CLSOptimizer, OptimizedImage, FontOptimizer, ResourcePreloader } from "@/components/performance/cls-optimizer";
import { fetchCompanyWallItems } from "@/lib/sanity";
import { SanityCompanyWall } from "@/types/sanity";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { GamingButton } from "@/components/GamingButton";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "@/components/theme-provider";
import { 
  ArrowRight, 
  Play, 
  Star, 
  Users, 
  Trophy, 
  Globe,
  Sparkles,
  User,
  Share2,
  Link2,
  MessageCircle,
  Briefcase,
  UserPlus,
  Newspaper,
  Mic,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  Palette,
  Volume2,
  Edit,
  Eye,
  Building,
  Crown,
  Calendar,
  Clock,
  Tag,
  Gamepad2,
  Quote,
  Zap,
  Heart,
  Target,
  Rocket,
  Diamond,
  Flame,
  Video,
  Shield
} from "lucide-react";
import { SiGoogleplay, SiAppstore, SiInstagram, SiYoutube } from "react-icons/si";
import { Link } from "wouter";
import { coreTeamMembers } from "@/data/team-members";
import { completeTeamData } from "@/lib/complete-team-data";
import { comprehensiveFeatureData } from "@/lib/comprehensive-feature-data";

function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme, isLight } = useTheme();
  const { scrollYProgress } = useScroll({ 
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const scaleTransform = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);

  // Fetch Company Wall data
  const { data: companyWallItems = [], isLoading: isLoadingCompanyWall } = useQuery<SanityCompanyWall[]>({
    queryKey: ['/api/company-wall'],
    queryFn: fetchCompanyWallItems
  });

  // Carousel state management
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [cardsPerView, setCardsPerView] = useState(3);

  // Set features to always show 3 cards at a time
  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCardsPerView(1); // Mobile
      } else if (width < 1024) {
        setCardsPerView(2); // Tablet  
      } else if (width < 1600) {
        setCardsPerView(3); // Desktop
      } else if (width < 1920) {
        setCardsPerView(4); // Large desktop
      } else {
        setCardsPerView(5); // Ultra-wide screens
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  // Auto-scroll functionality with 5-second interval for better readability
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentFeatureIndex((prev) => {
        const maxIndex = Math.ceil(features.length / cardsPerView) - 1;
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 5000); // 5 seconds for better readability

    return () => clearInterval(interval);
  }, [isAutoPlaying, cardsPerView]);

  // Core team auto-scroll - show only 3 at a time
  const [currentCoreIndex, setCurrentCoreIndex] = useState(0);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  // Auto-scroll states for the new sections
  const [currentProblemsIndex, setCurrentProblemsIndex] = useState(0);
  const [currentBenefitsIndex, setCurrentBenefitsIndex] = useState(0);
  const [currentSubFeaturesIndex, setCurrentSubFeaturesIndex] = useState(0);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [currentTestimonialsIndex, setCurrentTestimonialsIndex] = useState(0);

  // Get all core members from the team data - show only 3 at a time
  const allCoreMembers = coreTeamMembers;

  // Random icon pool for testimonials
  const randomIcons = [User, Crown, Zap, Heart, Target, Shield, Rocket, Diamond, Flame, Sparkles, Trophy, Video, Gamepad2];

  // Testimonials data from testimonials page
  const testimonialsData = [
    {
      id: 1,
      name: "Alex Chen",
      role: "Professional Gamer",
      company: "Team Nexus",
      category: "Pro Gamer",
      source: "Google Play Store",
      sourceIcon: SiGoogleplay,
      randomIcon: randomIcons[0], // Crown
      content: "GAMERS TAG has revolutionized how I manage my gaming career. The unified platform makes it easy to track my progress across all games and connect with opportunities. The GT Jobs feature helped me find sponsorship deals I never would have discovered otherwise.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      metrics: { followers: "50K+", earnings: "$25K+", tournaments: "15" }
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Content Creator",
      company: "Gaming Streamer",
      category: "Creator",
      source: "YouTube",
      sourceIcon: SiYoutube,
      randomIcon: randomIcons[1], // Zap
      content: "The GT Connect feature is incredible. I can now link all my gaming accounts and social media in one place, making it easier for fans to follow my journey. My audience engagement has increased by 300% since joining GAMERS TAG.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      metrics: { subscribers: "100K+", views: "5M+", platforms: "8" }
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      role: "Esports Manager",
      company: "Velocity Gaming",
      category: "Business",
      source: "App Store",
      sourceIcon: SiAppstore,
      randomIcon: randomIcons[2], // Heart
      content: "GT Jobs has been a game-changer for recruiting talent. We've found amazing players and streamers through the platform's smart filtering system. The direct messaging feature makes communication seamless.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      metrics: { hired: "25+", teams: "5", revenue: "$100K+" }
    },
    {
      id: 4,
      name: "Emma Watson",
      role: "Mobile Gamer",
      company: "Casual Gaming Enthusiast",
      category: "Casual Gamer",
      source: "Instagram",
      sourceIcon: SiInstagram,
      randomIcon: randomIcons[3], // Target
      content: "As a casual gamer, I love how GAMERS TAG helps me discover new games and connect with other players. The GT News feature keeps me updated on the latest gaming trends, and I've made so many friends through GT Chat.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      metrics: { games: "50+", friends: "200+", hours: "500+" }
    },
    {
      id: 5,
      name: "David Kim",
      role: "Game Developer",
      company: "Indie Game Studio",
      category: "Developer",
      source: "Google Play Store",
      sourceIcon: SiGoogleplay,
      randomIcon: randomIcons[4], // Shield
      content: "GAMERS TAG provides an excellent platform for showcasing our games to the gaming community. The direct connection with players and content creators has been invaluable for marketing our titles.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      metrics: { games: "3", downloads: "50K+", rating: "4.8★" }
    },
    {
      id: 6,
      name: "Lisa Park",
      role: "Esports Commentator",
      company: "Gaming Media Network",
      category: "Media",
      source: "App Store",
      sourceIcon: SiAppstore,
      randomIcon: randomIcons[5], // Rocket
      content: "The platform has transformed how I cover esports events. GT News helps me stay on top of breaking stories, and the networking features have connected me with industry professionals worldwide.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      metrics: { events: "100+", followers: "75K+", articles: "200+" }
    }
  ];

  // Randomize testimonials for display
  const shuffledTestimonials = [...testimonialsData].sort(() => Math.random() - 0.5);

  // Gallery data from gallery page
  const galleryData = [
    {
      id: '1',
      title: 'GAMERS TAG Team Innovation Lab',
      description: 'Our passionate team developing cutting-edge gaming technologies in our modern workspace',
      category: 'team',
      imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&crop=center',
      date: '2024-12-01',
      views: 2420,
      likes: 189,
      featured: true
    },
    {
      id: '2',
      title: 'Global Esports Championship',
      description: 'GAMERS TAG powering international tournaments with 100K+ participants worldwide',
      category: 'events',
      imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop&crop=center',
      date: '2024-11-15',
      views: 5280,
      likes: 412,
      featured: true
    },
    {
      id: '3',
      title: 'Pro Gaming Dashboard Launch',
      description: 'Revolutionary gaming analytics platform helping players optimize their performance',
      category: 'product',
      imageUrl: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&h=600&fit=crop&crop=center',
      date: '2024-10-20',
      views: 3150,
      likes: 267
    },
    {
      id: '4',
      title: 'Gaming Community Summit',
      description: 'Thousands of gamers connecting, sharing experiences, and building lasting friendships',
      category: 'community',
      imageUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop&crop=center',
      date: '2024-09-30',
      views: 1890,
      likes: 156
    },
    {
      id: '5',
      title: '1 Million Users Milestone',
      description: 'Celebrating our incredible growth and the trust of 1M+ gaming professionals',
      category: 'achievements',
      imageUrl: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop&crop=center',
      date: '2024-08-25',
      views: 8750,
      likes: 892,
      featured: true
    },
    {
      id: '6',
      title: 'AI Gaming Assistant Preview',
      description: 'Showcasing our next-generation AI-powered gaming companion and strategy advisor',
      category: 'product',
      imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=center',
      date: '2024-07-18',
      views: 4320,
      likes: 378
    }
  ];

  // News data for home page
  const newsItems = [
    {
      id: '1',
      title: 'GAMERS TAG Launches Revolutionary Profile System',
      excerpt: 'New gaming profile system enables players to showcase achievements and connect with industry professionals worldwide.',
      date: '2024-06-08',
      category: 'Product Update',
      imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=250&fit=crop&crop=center'
    },
    {
      id: '2',
      title: 'Partnership with Major Esports Organizations',
      excerpt: 'Strategic partnerships established with leading esports teams to enhance competitive gaming opportunities.',
      date: '2024-06-05',
      category: 'Partnership',
      imageUrl: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=250&fit=crop&crop=center'
    },
    {
      id: '3',
      title: 'Next-Gen Mentorship Program Launch',
      excerpt: 'Connecting gaming professionals with emerging talent through AI-powered matching system.',
      date: '2024-06-03',
      category: 'Feature',
      imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop&crop=center'
    },
    {
      id: '4',
      title: 'Community Milestone: 100K+ Active Users',
      excerpt: 'GAMERS TAG community reaches significant milestone with over 100,000 active gaming professionals.',
      date: '2024-06-01',
      category: 'Milestone',
      imageUrl: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=400&h=250&fit=crop&crop=center'
    },
    {
      id: '5',
      title: 'Advanced Analytics Dashboard Release',
      excerpt: 'New dashboard provides comprehensive insights into gaming performance and career progression.',
      date: '2024-05-28',
      category: 'Product Update',
      imageUrl: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=400&h=250&fit=crop&crop=center'
    },
    {
      id: '6',
      title: 'Industry Recognition: Best Gaming Platform 2024',
      excerpt: 'GAMERS TAG receives prestigious award for innovation in gaming professional networking.',
      date: '2024-05-25',
      category: 'Award',
      imageUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=250&fit=crop&crop=center'
    }
  ];

  // Features data from comprehensive feature data - all features for the "Core Features of the App" section
  const features = Object.entries(comprehensiveFeatureData).map(([key, feature]) => ({
    id: key,
    icon: feature.icon,
    title: feature.title,
    subtitle: feature.subtitle,
    quote: feature.quote,
    description: feature.description,
    color: feature.color
  }));

  // Extract problems, benefits, and sub-features from all features and randomize them
  const allProblems = Object.entries(comprehensiveFeatureData).flatMap(([key, feature]) => 
    feature.problems.map(problem => ({
      ...problem,
      featureTitle: feature.title,
      featureKey: key
    }))
  ).sort(() => Math.random() - 0.5);

  const allBenefits = Object.entries(comprehensiveFeatureData).flatMap(([key, feature]) => 
    feature.benefits.map(benefit => ({
      ...benefit,
      featureTitle: feature.title,
      featureKey: key
    }))
  ).sort(() => Math.random() - 0.5);

  const allSubFeatures = Object.entries(comprehensiveFeatureData).flatMap(([key, feature]) => 
    (feature.subFeatures || []).map(subFeature => ({
      ...subFeature,
      featureTitle: feature.title,
      featureKey: key
    }))
  ).sort(() => Math.random() - 0.5);

  // Auto-scroll effects for sections (excluding Sub Features, Problems Solved, and Core Benefits)
  useEffect(() => {
    const coreInterval = setInterval(() => {
      setCurrentCoreIndex((prev) => (prev + 1) % Math.ceil(allCoreMembers.length / cardsPerView));
    }, 6000); // Increased from 4000 to 6000

    const galleryInterval = setInterval(() => {
      setCurrentGalleryIndex((prev) => (prev + 1) % Math.ceil(galleryData.length / cardsPerView));
    }, 7000); // Increased from 3000 to 7000

    const newsInterval = setInterval(() => {
      setCurrentNewsIndex((prev) => (prev + 1) % Math.ceil(newsItems.length / cardsPerView));
    }, 11000); // Increased from 6000 to 11000

    const testimonialsInterval = setInterval(() => {
      setCurrentTestimonialsIndex((prev) => (prev + 1) % Math.ceil(shuffledTestimonials.length / cardsPerView));
    }, 12000); // Increased from 5500 to 12000

    return () => {
      clearInterval(coreInterval);
      clearInterval(galleryInterval);
      clearInterval(newsInterval);
      clearInterval(testimonialsInterval);
    };
  }, [allCoreMembers.length, galleryData.length, newsItems.length, shuffledTestimonials.length, cardsPerView]);

  // Manual navigation functions for the three sections with responsive card counts
  const handleSubFeaturesNext = () => {
    setCurrentSubFeaturesIndex((prev) => {
      const maxIndex = Math.ceil(allSubFeatures.length / cardsPerView) - 1;
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const handleSubFeaturesPrev = () => {
    setCurrentSubFeaturesIndex((prev) => {
      const maxIndex = Math.ceil(allSubFeatures.length / cardsPerView) - 1;
      return prev <= 0 ? maxIndex : prev - 1;
    });
  };

  const handleProblemsNext = () => {
    setCurrentProblemsIndex((prev) => {
      const maxIndex = Math.ceil(allProblems.length / cardsPerView) - 1;
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const handleProblemsPrev = () => {
    setCurrentProblemsIndex((prev) => {
      const maxIndex = Math.ceil(allProblems.length / cardsPerView) - 1;
      return prev <= 0 ? maxIndex : prev - 1;
    });
  };

  const handleBenefitsNext = () => {
    setCurrentBenefitsIndex((prev) => {
      const maxIndex = Math.ceil(allBenefits.length / cardsPerView) - 1;
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const handleBenefitsPrev = () => {
    setCurrentBenefitsIndex((prev) => {
      const maxIndex = Math.ceil(allBenefits.length / cardsPerView) - 1;
      return prev <= 0 ? maxIndex : prev - 1;
    });
  };

  // Navigation functions
  const nextFeature = () => {
    setCurrentFeatureIndex((prev) => {
      const maxIndex = Math.ceil(features.length / cardsPerView) - 1;
      return prev >= maxIndex ? 0 : prev + 1;
    });
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 6000); // Resume after 6 seconds
  };

  const prevFeature = () => {
    setCurrentFeatureIndex((prev) => {
      const maxIndex = Math.ceil(features.length / cardsPerView) - 1;
      return prev <= 0 ? maxIndex : prev - 1;
    });
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 6000); // Resume after 6 seconds
  };

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  // Performance monitoring
  usePerformanceMonitoring();

  const stats = [
    { icon: Users, number: "25K+", label: "Community Members" },
    { icon: Crown, number: "12", label: "Core Features" },
    { icon: Globe, number: "165+", label: "Countries" },
    { icon: Shield, number: "99.9%", label: "Platform Uptime" }
  ];

  return (
    <>
      <AdvancedSEO 
        title="GAMERS TAG - World's First Gaming Super App | Professional Gaming Network"
        description="Join GAMERS TAG, the revolutionary gaming super app connecting gamers, esports professionals, and gaming companies worldwide. Build your gaming profile, find teammates, and advance your esports career."
        keywords={[
          'gaming super app',
          'professional gaming network',
          'esports platform',
          'gamer community',
          'gaming careers',
          'esports jobs',
          'gaming recruitment',
          'pro gaming profile',
          'gaming industry networking',
          'esports talent platform'
        ]}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "GAMERS TAG",
          "applicationCategory": "GameApplication",
          "operatingSystem": "iOS, Android, Web",
          "description": "The world's first gaming super app for professional gaming and esports networking",
          "url": "https://gamerstag.com",
          "downloadUrl": "https://play.google.com/store/apps/details?id=com.gamerstag.app",
          "author": {
            "@type": "Organization",
            "name": "GAMERS TAG"
          },
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "1250"
          }
        }}
      />
      <FontOptimizer />
      <ResourcePreloader />
      <StructuredData type="Organization" data={organizationSchema} />
      <StructuredData type="WebSite" data={websiteSchema} />
      
      <div ref={containerRef} className="min-h-screen bg-black relative overflow-hidden" style={{ position: 'relative' }}>
        <Navigation />
        
        {/* Company Wall */}
        {companyWallItems.length > 0 && !isLoadingCompanyWall && (
          <CompanyWall items={companyWallItems} />
        )}

        {/* Interactive Theme-Adaptive Background with Animated Elements */}
        <div className="absolute inset-0">
          {/* Animated Grid Pattern */}
          <div className={`absolute inset-0 ${isLight ? 'opacity-20' : 'opacity-25'}`}>
            <div className="grid-pattern animate-pulse"></div>
          </div>
          
          {/* Dynamic Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E5042F]/10 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-float-reverse"></div>
          
          {/* Floating Particles */}
          <div className="particles-container">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i}
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${15 + Math.random() * 10}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <motion.div 
              className="absolute top-20 left-10 w-2 h-2 bg-[#E5042F] rounded-full"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                delay: 1
              }}
            />
            <motion.div 
              className="absolute top-40 right-20 w-1 h-1 bg-white rounded-full"
              animate={{ 
                scale: [1, 2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                delay: 2
              }}
            />
            <motion.div 
              className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-[#E5042F] rounded-full"
              animate={{ 
                scale: [1, 1.8, 1],
                opacity: [0.4, 1, 0.4]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                delay: 0.5
              }}
            />
          </div>

          <div className="relative z-10 text-center max-w-6xl 3xl:max-w-7xl 4xl:max-w-8xl 5xl:max-w-9xl mx-auto pt-32">
            {/* Main Hero Content with proper spacing */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-12"
            >
              <motion.h1 
                className={`font-primary font-black text-7xl sm:text-8xl md:text-9xl lg:text-10xl 3xl:text-11xl 4xl:text-12xl 5xl:text-13xl mb-8 ${
                  isLight ? 'text-black' : 'text-white'
                } tracking-tight leading-none`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.3 }}
              >
                <span className={`block ${isLight ? 'text-black' : 'text-white'}`}>GAMERS</span>
                <motion.span 
                  className="block text-[#E5042F] relative"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  TAG
                  <motion.div
                    className="absolute -inset-2 bg-[#E5042F]/20 blur-xl"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: 1.5
                    }}
                  />
                </motion.span>
              </motion.h1>
              

            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mb-12"
            >
              <p className={`text-xl sm:text-2xl md:text-3xl 3xl:text-4xl 4xl:text-5xl font-light mb-6 ${
                isLight ? 'text-gray-800' : 'text-gray-300'
              } max-w-4xl 3xl:max-w-5xl 4xl:max-w-6xl 5xl:max-w-7xl mx-auto leading-relaxed`}>
                Welcome to GAMERS TAG, Super App For Gaming and Esports
              </p>
              <motion.p 
                className={`text-lg ${isLight ? 'text-gray-600' : 'text-gray-400'} max-w-2xl mx-auto`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
              >
                GAMERS TAG is the world's first all-in-one gaming super app, revolutionizing the future of Gaming and Esports with B2B, B2C and B2B2C Features for gamers, tech enthusiasts, students, brands, business owners, gaming organizations, Esports players, managers, streamers, creators, esports organizers, tournament hosters and others.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <GamingButton className="text-lg px-8 py-4">
                  <Play className="w-5 h-5 mr-2" />
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </GamingButton>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <GamingButton variant="secondary" className="text-lg px-8 py-4">
                  <Eye className="w-5 h-5 mr-2" />
                  Watch Demo
                </GamingButton>
              </motion.div>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 2.4 + index * 0.1 }}
                  className="group"
                  whileHover={{ y: -5 }}
                >
                  <div className={`relative p-6 border-2 transition-all duration-500 group-hover:shadow-lg ${
                    isLight 
                      ? 'neumorphic-card border-gray-200 group-hover:border-[#E5042F] group-hover:shadow-[#E5042F]/20' 
                      : 'bg-black/40 backdrop-blur-xl border-[#E5042F]/30 group-hover:border-[#E5042F] group-hover:shadow-[#E5042F]/30'
                  }`}
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
                    }}>
                    
                    {/* Corner indicators */}
                    <div className="absolute top-1 left-1 w-3 h-3 border-t border-l border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                    <div className="absolute top-1 right-1 w-3 h-3 border-t border-r border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                    
                    {/* Scanning line effect */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E5042F]/50 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></div>
                    
                    {/* Icon with interactive effect */}
                    <div className="flex items-center justify-center mb-4">
                      <motion.div
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <stat.icon className="w-8 h-8 text-[#E5042F] group-hover:text-white transition-colors duration-300 drop-shadow-[0_0_8px_rgba(229,4,47,0.5)]" />
                      </motion.div>
                    </div>
                    
                    {/* Number with glow effect */}
                    <div className="text-center mb-3">
                      <div className={`font-orbitron font-bold text-2xl md:text-3xl ${isLight ? 'text-white' : 'text-white'} group-hover:text-[#E5042F] transition-colors duration-300 group-hover:drop-shadow-[0_0_12px_rgba(229,4,47,0.6)]`}>
                        {stat.number}
                      </div>
                    </div>
                    
                    {/* Label */}
                    <div className="text-center">
                      <div className={`text-xs font-medium uppercase tracking-wider transition-colors duration-300 ${isLight ? 'text-gray-300 group-hover:text-gray-200' : 'text-gray-400 group-hover:text-gray-300'}`}>
                        {stat.label}
                      </div>
                    </div>
                    
                    {/* HUD grid overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_24%,rgba(229,4,47,0.03)_25%,rgba(229,4,47,0.03)_26%,transparent_27%,transparent_74%,rgba(229,4,47,0.03)_75%,rgba(229,4,47,0.03)_76%,transparent_77%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Data stream effect */}
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#E5042F]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* HUD Scroll Indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-[#E5042F] flex justify-center relative"
                 style={{ clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%)' }}>
              <div className="w-1 h-3 bg-[#E5042F] mt-2 animate-pulse"
                   style={{ clipPath: 'polygon(0 0, calc(100% - 1px) 0, 100% 1px, 100% 100%, 1px 100%, 0 calc(100% - 1px))' }}></div>
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-white"></div>
              <div className="absolute top-0 right-0 w-1 h-1 border-t border-r border-white"></div>
            </div>
          </motion.div>
        </section>

        {/* Core Features of the App Section */}
        <section className={`spacing-responsive-section relative ${isLight ? 'bg-gradient-to-b from-gray-50 to-white' : 'bg-gradient-to-b from-black to-[#171717]'}`}>
          <div className="container-responsive">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className={`font-orbitron font-bold text-4xl md:text-5xl mb-6 ${isLight ? 'text-black' : 'text-white'}`}>
                Core Features of the App
              </h2>
              <p className={`text-xl max-w-3xl mx-auto ${isLight ? 'text-black' : 'text-gray-300'}`}>
                We bring you 12 powerful core gaming features for you
              </p>
            </motion.div>

            {/* Features Carousel Container - Show 3 at a time */}
            <div className="relative w-full">
              {/* Navigation Arrows */}
              <motion.button
                onClick={prevFeature}
                className={`absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 border-2 border-[#E5042F]/50 hover:border-[#E5042F] hover:bg-[#E5042F]/20 transition-all duration-300 flex items-center justify-center ${
                  isLight 
                    ? 'neumorphic-card text-white hover:text-[#E5042F]' 
                    : 'bg-black/80 backdrop-blur-xl text-white hover:text-[#E5042F]'
                }`}
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.button>

              <motion.button
                onClick={nextFeature}
                className={`absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 border-2 border-[#E5042F]/50 hover:border-[#E5042F] hover:bg-[#E5042F]/20 transition-all duration-300 flex items-center justify-center ${
                  isLight 
                    ? 'neumorphic-card text-white hover:text-[#E5042F]' 
                    : 'bg-black/80 backdrop-blur-xl text-white hover:text-[#E5042F]'
                }`}
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.button>

              {/* Carousel Track */}
              <div className="overflow-hidden mx-16 sm:mx-20 lg:mx-24">
                <motion.div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentFeatureIndex * (100 / cardsPerView)}%)` }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {features.map((feature, index) => {
                    const IconComponent = feature.icon;
                    
                    return (
                      <div 
                        key={feature.id} 
                        className="flex-shrink-0 px-2 sm:px-3 lg:px-4"
                        style={{ width: `${100 / cardsPerView}%` }}
                      >
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6 }}
                          className="w-full h-full"
                        >
                          <div className="group relative h-full min-h-[600px] max-w-sm mx-auto">
                            {/* Angular HUD Card matching screenshot design */}
                            <div className={`relative border-2 border-[#E5042F]/50 p-4 lg:p-6 h-full transform transition-all duration-500 group-hover:border-[#E5042F] group-hover:shadow-[0_0_30px_#E5042F70] flex flex-col overflow-hidden ${
                              isLight 
                                ? 'neumorphic-card' 
                                : 'bg-black/90 backdrop-blur-xl group-hover:bg-black/95'
                            }`} 
                                 style={{
                                   clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'
                                 }}>
                              
                              {/* Corner Accents */}
                              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                              
                              {/* Status Indicator - HUD Style */}
                              <div className="absolute top-4 right-4 w-3 h-3 bg-[#E5042F] animate-pulse group-hover:bg-white transition-colors duration-300"
                                   style={{ clipPath: 'polygon(0 0, calc(100% - 2px) 0, 100% 2px, 100% 100%, 2px 100%, 0 calc(100% - 2px))' }}></div>

                              {/* Header with Icon and Title */}
                              <div className="flex items-start gap-4 mb-6 relative z-10">
                                <div className="relative">
                                  <motion.div
                                    className="w-16 h-16 bg-[#E5042F]/20 border-2 border-[#E5042F]/30 group-hover:border-white transition-all duration-300 flex items-center justify-center"
                                    style={{
                                      clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                                    }}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                  >
                                    <IconComponent className="w-8 h-8 text-[#E5042F] group-hover:text-white transition-colors duration-300" />
                                  </motion.div>
                                </div>
                                <div className="flex-1">
                                  <h3 className={`font-orbitron font-bold text-lg leading-tight ${isLight ? 'text-black group-hover:text-[#E5042F]' : 'text-white group-hover:text-[#E5042F]'} transition-colors duration-300`}>
                                    {feature.title}
                                  </h3>
                                  <p className={`text-sm mt-1 ${isLight ? 'text-gray-600' : 'text-gray-400'} group-hover:text-gray-300 transition-colors duration-300`}>
                                    {feature.subtitle}
                                  </p>
                                </div>
                              </div>

                              {/* Quote Section */}
                              <div className="mb-6 relative">
                                <div className="absolute top-0 left-0 text-4xl text-[#E5042F]/30 font-serif leading-none">"</div>
                                <p className={`text-sm italic pl-6 ${isLight ? 'text-gray-700' : 'text-gray-300'} group-hover:text-white transition-colors duration-300`}>
                                  {feature.quote}
                                </p>
                              </div>

                              {/* Description */}
                              <div className="flex-1 mb-6">
                                <p className={`text-sm leading-relaxed ${isLight ? 'text-gray-600' : 'text-gray-400'} group-hover:text-gray-200 transition-colors duration-300`}>
                                  {feature.description.length > 200 
                                    ? `${feature.description.substring(0, 200)}...` 
                                    : feature.description}
                                </p>
                              </div>

                              {/* Action Button */}
                              <div className="mt-auto">
                                <Link href={`/features/${feature.id}`}>
                                  <motion.button
                                    className="w-full py-3 px-4 bg-transparent border-2 border-[#E5042F]/50 text-[#E5042F] hover:bg-[#E5042F] hover:text-white transition-all duration-300 font-medium text-sm uppercase tracking-wider group-hover:border-white"
                                    style={{
                                      clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                                    }}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                  >
                                    View Feature
                                    <ArrowRight className="w-4 h-4 inline ml-2" />
                                  </motion.button>
                                </Link>
                              </div>

                              {/* HUD Lines */}
                              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E5042F]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                              <div className="absolute bottom-16 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E5042F]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    );
                  })}
                </motion.div>
              </div>

              {/* HUD Carousel Indicators */}
              <div className="flex justify-center mt-8 gap-3">
                {Array.from({ length: Math.ceil(features.length / cardsPerView) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentFeatureIndex(index)}
                    className={`relative w-6 h-3 transition-all duration-300 ${
                      currentFeatureIndex === index 
                        ? 'bg-[#E5042F] shadow-[0_0_10px_#E5042F]' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))'
                    }}
                  >
                    {/* Corner accents for active indicator */}
                    {currentFeatureIndex === index && (
                      <>
                        <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-white"></div>
                        <div className="absolute top-0 right-0 w-1 h-1 border-t border-r border-white"></div>
                        <div className="absolute bottom-0 left-0 w-1 h-1 border-b border-l border-white"></div>
                        <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-white"></div>
                      </>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sub-Features Section */}
        <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-black/90 to-black border-t border-[#E5042F]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-orbitron font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-4 sm:mb-6">
                Sub <span className="text-[#E5042F]">Features</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                {allSubFeatures.length} Sub-Features of GAMERS TAG is ready to stun you !
              </p>
            </motion.div>

            <div className="relative">
              {/* Navigation Arrows */}
              <button
                onClick={handleSubFeaturesPrev}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-black/90 border-2 border-[#E5042F]/30 hover:border-[#E5042F] text-white hover:text-[#E5042F] transition-all duration-300 flex items-center justify-center group"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))'
                }}
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform duration-300" />
              </button>
              
              <button
                onClick={handleSubFeaturesNext}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-black/90 border-2 border-[#E5042F]/30 hover:border-[#E5042F] text-white hover:text-[#E5042F] transition-all duration-300 flex items-center justify-center group"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))'
                }}
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform duration-300" />
              </button>

              <div className="overflow-hidden mx-16 sm:mx-20 lg:mx-24">
                <motion.div 
                  className="flex transition-transform duration-1000 ease-in-out"
                  style={{ transform: `translateX(-${(currentSubFeaturesIndex * (100 / cardsPerView))}%)` }}
                >
                  {allSubFeatures.map((subFeature, subIndex) => {
                  const IconComponent = Gamepad2;
                  return (
                    <motion.div
                      key={`${subFeature.featureTitle}-${subIndex}`}
                      className={`flex-shrink-0 px-2 sm:px-4 ${
                        cardsPerView === 1 ? 'w-full' : 
                        cardsPerView === 2 ? 'w-1/2' : 'w-1/3'
                      }`}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: (subIndex % 3) * 0.1 }}
                      viewport={{ once: true }}
                      onClick={() => window.location.href = `/features/${subFeature.featureKey}`}
                    >
                      <div className="group cursor-pointer h-full">
                        <div className="h-full bg-black border-2 border-white/30 hover:border-[#E5042F] transition-all duration-500 relative p-4 sm:p-6 lg:p-8 transform hover:scale-[1.02] sm:hover:scale-[1.05] hover:shadow-2xl hover:shadow-[#E5042F]/20">
                          {/* Corner accents - HUD style */}
                          <div className="absolute -top-1 -left-1 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-l-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                          <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-r-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                          <div className="absolute -bottom-1 -left-1 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-l-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-r-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>

                          {/* Icon section */}
                          <div className="flex justify-center mb-4 sm:mb-6">
                            <motion.div
                              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[#E5042F]/20 border-2 border-[#E5042F]/30 group-hover:border-white transition-all duration-300 flex items-center justify-center"
                              style={{
                                clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                              }}
                              whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                              <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#E5042F] group-hover:text-white transition-colors duration-300" />
                            </motion.div>
                          </div>
                          
                          {/* Title */}
                          <h4 className="text-white text-lg sm:text-xl font-bold text-center mb-3 sm:mb-4 tracking-wider uppercase group-hover:text-[#E5042F] transition-colors duration-300">
                            {subFeature.title}
                          </h4>
                          
                          {/* Description */}
                          <p className="text-gray-400 text-sm sm:text-base text-center leading-relaxed group-hover:text-white transition-colors duration-300 mb-4 sm:mb-6">
                            {subFeature.description}
                          </p>
                          
                          {/* Feature tag */}
                          <div className="text-center">
                            <span className="inline-block px-3 py-1 bg-[#E5042F]/20 border border-[#E5042F]/40 text-[#E5042F] text-xs font-bold uppercase tracking-wider group-hover:bg-[#E5042F] group-hover:text-white transition-all duration-300">
                              {subFeature.featureTitle}
                            </span>
                          </div>
                          
                          {/* Bottom HUD line */}
                          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-white/30 group-hover:bg-[#E5042F]/80 transition-colors duration-300"></div>
                        </div>
                      </div>
                    </motion.div>
                  );
                  })}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Problems Solved Section */}
        <section className="relative spacing-responsive-section bg-gradient-to-b from-black/90 to-black border-t border-[#E5042F]/20">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-orbitron font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-4 sm:mb-6">
                Problems <span className="text-[#E5042F]">Solved</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Breaking barriers to solve every challenge in the gaming ecosystem.
              </p>
            </motion.div>

            <div className="relative">
              {/* Navigation Arrows */}
              <button
                onClick={handleProblemsPrev}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-black/90 border-2 border-[#E5042F]/30 hover:border-[#E5042F] text-white hover:text-[#E5042F] transition-all duration-300 flex items-center justify-center group"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))'
                }}
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform duration-300" />
              </button>
              
              <button
                onClick={handleProblemsNext}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-black/90 border-2 border-[#E5042F]/30 hover:border-[#E5042F] text-white hover:text-[#E5042F] transition-all duration-300 flex items-center justify-center group"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))'
                }}
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform duration-300" />
              </button>

              <div className="overflow-hidden mx-16 sm:mx-20 lg:mx-24">
                <motion.div 
                  className="flex transition-transform duration-1000 ease-in-out"
                  style={{ transform: `translateX(-${(currentProblemsIndex * (100 / cardsPerView))}%)` }}
                >
                  {allProblems.map((problem, problemIndex) => {
                  const IconComponent = problem.icon;
                  return (
                    <motion.div
                      key={`${problem.featureTitle}-${problemIndex}`}
                      className={`flex-shrink-0 px-2 sm:px-4 ${
                        cardsPerView === 1 ? 'w-full' : 
                        cardsPerView === 2 ? 'w-1/2' : 'w-1/3'
                      }`}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: (problemIndex % 3) * 0.1 }}
                      viewport={{ once: true }}
                      onClick={() => window.location.href = `/features/${problem.featureKey}`}
                    >
                      <div className="group cursor-pointer h-full">
                        <div className="h-full bg-black border-2 border-white/30 hover:border-[#E5042F] transition-all duration-500 relative p-4 sm:p-6 lg:p-8 transform hover:scale-[1.02] sm:hover:scale-[1.05] hover:shadow-2xl hover:shadow-[#E5042F]/20">
                          {/* Corner accents - HUD style */}
                          <div className="absolute -top-1 -left-1 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-l-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                          <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-r-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                          <div className="absolute -bottom-1 -left-1 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-l-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-r-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>

                          {/* Icon section */}
                          <div className="flex justify-center mb-4 sm:mb-6">
                            <motion.div
                              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[#E5042F]/20 border-2 border-[#E5042F]/30 group-hover:border-white transition-all duration-300 flex items-center justify-center"
                              style={{
                                clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                              }}
                              whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                              <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#E5042F] group-hover:text-white transition-colors duration-300" />
                            </motion.div>
                          </div>
                          
                          {/* Title */}
                          <h4 className="text-white text-lg sm:text-xl font-bold text-center mb-3 sm:mb-4 tracking-wider uppercase group-hover:text-[#E5042F] transition-colors duration-300">
                            {problem.title}
                          </h4>
                          
                          {/* Description */}
                          <p className="text-gray-400 text-sm sm:text-base text-center leading-relaxed group-hover:text-white transition-colors duration-300 mb-4 sm:mb-6">
                            {problem.description}
                          </p>
                          
                          {/* Feature tag */}
                          <div className="text-center">
                            <span className="inline-block px-3 py-1 bg-[#E5042F]/20 border border-[#E5042F]/40 text-[#E5042F] text-xs font-bold uppercase tracking-wider group-hover:bg-[#E5042F] group-hover:text-white transition-all duration-300">
                              {problem.featureTitle}
                            </span>
                          </div>
                          
                          {/* Bottom HUD line */}
                          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-white/30 group-hover:bg-[#E5042F]/80 transition-colors duration-300"></div>
                        </div>
                      </div>
                    </motion.div>
                  );
                  })}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Benefits Section */}
        <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-black to-black/90 border-t border-[#E5042F]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-orbitron font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-4 sm:mb-6">
                Core <span className="text-[#E5042F]">Benefits</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Decode the Next Level: Find Advantages being in GAMERS TAG Platform.
              </p>
            </motion.div>

            <div className="relative">
              {/* Navigation Arrows */}
              <button
                onClick={handleBenefitsPrev}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-black/90 border-2 border-[#E5042F]/30 hover:border-[#E5042F] text-white hover:text-[#E5042F] transition-all duration-300 flex items-center justify-center group"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))'
                }}
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform duration-300" />
              </button>
              
              <button
                onClick={handleBenefitsNext}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-black/90 border-2 border-[#E5042F]/30 hover:border-[#E5042F] text-white hover:text-[#E5042F] transition-all duration-300 flex items-center justify-center group"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))'
                }}
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform duration-300" />
              </button>

              <div className="overflow-hidden mx-16 sm:mx-20 lg:mx-24">
                <motion.div 
                  className="flex transition-transform duration-1000 ease-in-out"
                  style={{ transform: `translateX(-${(currentBenefitsIndex * (100 / cardsPerView))}%)` }}
                >
                  {allBenefits.map((benefit, benefitIndex) => {
                  const IconComponent = benefit.icon;
                  return (
                    <motion.div
                      key={`${benefit.featureTitle}-${benefitIndex}`}
                      className={`flex-shrink-0 px-2 sm:px-4 ${
                        cardsPerView === 1 ? 'w-full' : 
                        cardsPerView === 2 ? 'w-1/2' : 'w-1/3'
                      }`}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: (benefitIndex % 3) * 0.1 }}
                      viewport={{ once: true }}
                      onClick={() => window.location.href = `/features/${benefit.featureKey}`}
                    >
                      <div className="group cursor-pointer h-full">
                        <div className="h-full bg-black border-2 border-white/30 hover:border-[#E5042F] transition-all duration-500 relative p-4 sm:p-6 lg:p-8 transform hover:scale-[1.02] sm:hover:scale-[1.05] hover:shadow-2xl hover:shadow-[#E5042F]/20">
                          {/* Corner accents - HUD style */}
                          <div className="absolute -top-1 -left-1 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-l-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                          <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-r-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                          <div className="absolute -bottom-1 -left-1 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-l-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-r-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>

                          {/* Icon section */}
                          <div className="flex justify-center mb-4 sm:mb-6">
                            <motion.div
                              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[#E5042F]/20 border-2 border-[#E5042F]/30 group-hover:border-white transition-all duration-300 flex items-center justify-center"
                              style={{
                                clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                              }}
                              whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                              <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#E5042F] group-hover:text-white transition-colors duration-300" />
                            </motion.div>
                          </div>
                          
                          {/* Title */}
                          <h4 className="text-white text-lg sm:text-xl font-bold text-center mb-3 sm:mb-4 tracking-wider uppercase group-hover:text-[#E5042F] transition-colors duration-300">
                            {benefit.title}
                          </h4>
                          
                          {/* Description */}
                          <p className="text-gray-400 text-sm sm:text-base text-center leading-relaxed group-hover:text-white transition-colors duration-300 mb-4 sm:mb-6">
                            {benefit.description}
                          </p>
                          
                          {/* Feature tag */}
                          <div className="text-center">
                            <span className="inline-block px-3 py-1 bg-[#E5042F]/20 border border-[#E5042F]/40 text-[#E5042F] text-xs font-bold uppercase tracking-wider group-hover:bg-[#E5042F] group-hover:text-white transition-all duration-300">
                              {benefit.featureTitle}
                            </span>
                          </div>
                          
                          {/* Bottom HUD line */}
                          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-white/30 group-hover:bg-[#E5042F]/80 transition-colors duration-300"></div>
                        </div>
                      </div>
                    </motion.div>
                  );
                  })}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Team Members Section - Show 3 at a time */}
        <section className="relative spacing-responsive-section bg-gradient-to-b from-black/90 to-black border-t border-[#E5042F]/20">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-between items-center mb-16"
            >
              <div>
                <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-white mb-4">
                  Core Team
                </h2>
                <p className="text-xl text-gray-300">
                  Meet the Brillant Minds behind GAMERS TAG
                </p>
              </div>
              <Link href="/team">
                <GamingButton variant="secondary">
                  <span>View All</span>
                  <ArrowRight className="w-4 h-4" />
                </GamingButton>
              </Link>
            </motion.div>

            {/* Core Team Carousel - Responsive */}
            <div className="relative">
              <div className="overflow-hidden mx-4 sm:mx-16 md:mx-20 lg:mx-24">
                <motion.div 
                  className="flex gap-2 sm:gap-4 md:gap-6 lg:gap-8 transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentCoreIndex * (100 / cardsPerView)}%)` }}
                >
                  {allCoreMembers.map((member, index) => (
                  <motion.div
                    key={member.id}
                    className={`flex-shrink-0 group cursor-pointer ${
                      cardsPerView === 1 ? 'w-full' : 
                      cardsPerView === 2 ? 'w-1/2' : 'w-1/3'
                    }`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                        {/* Advanced HUD Core Team Card - Mobile Responsive */}
                        <div className="relative bg-black h-[500px] sm:h-[540px] md:h-[580px] overflow-hidden border-2 border-[#E5042F] group-hover:border-white transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(229,4,47,0.6)]">
                        
                          {/* HUD Corner Cutouts */}
                          <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                          <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                          <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                          <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>

                          {/* HUD Status Indicator */}
                          <div className="absolute top-5 right-5 z-10">
                            <motion.div 
                              animate={{ opacity: [1, 0.3, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="w-4 h-4 bg-white group-hover:bg-[#E5042F] transition-colors duration-300 shadow-[0_0_15px_rgba(255,255,255,0.9)]"
                            />
                          </div>

                          {/* Inner Content Frame */}
                          <div className="absolute inset-2 sm:inset-4 border border-[#E5042F]/40 group-hover:border-white/60 transition-colors duration-300">
                            
                            {/* Content Layout */}
                            <div className="relative h-full flex flex-col p-3 sm:p-4 md:p-6">
                              
                              {/* Profile Image Section */}
                              <div className="flex justify-center mb-3 sm:mb-4 md:mb-6">
                                <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 border-2 border-[#E5042F] group-hover:border-white transition-colors duration-300 bg-gradient-to-br from-[#E5042F]/30 to-black">
                                  {member.image ? (
                                    <img
                                      src={member.image}
                                      alt={member.name}
                                      className="w-full h-full object-cover"
                                    />
                                  ) : (
                                    <div className="w-full h-full flex items-center justify-center">
                                      <Crown className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-[#E5042F] group-hover:text-white transition-colors duration-300" />
                                    </div>
                                  )}
                                  
                                  {/* Image Corner Markers */}
                                  <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                                  <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                                  <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                                  <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                                </div>
                              </div>

                              {/* Name Section */}
                              <div className="text-center mb-1 sm:mb-2">
                                <h3 className="font-orbitron font-bold text-sm sm:text-lg md:text-xl text-white tracking-wider uppercase leading-tight group-hover:text-white transition-colors duration-300">
                                  {member.name}
                                </h3>
                              </div>

                              {/* Red Accent Line */}
                              <div className="w-full h-0.5 bg-[#E5042F] group-hover:bg-white transition-colors duration-300 mb-1 sm:mb-2"></div>

                              {/* Role Section */}
                              <div className="text-center mb-2 sm:mb-3 md:mb-4">
                                <p className="text-gray-300 text-xs sm:text-sm font-medium group-hover:text-gray-200 transition-colors duration-300">
                                  {member.role}
                                </p>
                              </div>

                              {/* Description */}
                              <div className="text-center mb-2 sm:mb-3 md:mb-4 flex-1">
                                <p className="text-gray-400 text-xs leading-relaxed group-hover:text-gray-300 transition-colors duration-300 line-clamp-3 sm:line-clamp-4">
                                  {member.bio}
                                </p>
                              </div>

                              {/* Key Expertise Section */}
                              <div className="mb-2 sm:mb-3 md:mb-4">
                                <h4 className="text-white font-bold text-xs mb-1 sm:mb-2 tracking-wide border-b border-[#E5042F]/30 pb-1 group-hover:border-white/30 transition-colors duration-300">
                                  KEY EXPERTISE
                                </h4>
                                <div className="grid grid-cols-2 gap-1 sm:gap-2">
                                  {(member.expertise || []).slice(0, 4).map((skill, skillIndex) => (
                                    <motion.div 
                                      key={skillIndex}
                                      initial={{ opacity: 0, x: -20 }}
                                      whileInView={{ opacity: 1, x: 0 }}
                                      transition={{ delay: skillIndex * 0.1 }}
                                      className="border border-[#E5042F]/60 bg-[#E5042F]/10 px-1 py-1 sm:px-2 sm:py-1.5 text-gray-300 text-xs font-medium group-hover:border-white/60 group-hover:bg-white/10 group-hover:text-white transition-all duration-300 text-center"
                                    >
                                      <span className="text-xs leading-tight">{skill}</span>
                                    </motion.div>
                                  ))}
                                </div>
                              </div>

                              {/* View Profile Button */}
                              <div className="mt-auto pt-1 sm:pt-2">
                                <Link href={`/team/${member.slug}`}>
                                  <button className="w-full bg-[#E5042F] text-white font-bold py-2 sm:py-3 text-center transition-all duration-300 hover:bg-white hover:text-black relative overflow-hidden border-2 border-[#E5042F] hover:border-white group/button">
                                    <span className="relative z-10 flex items-center justify-center space-x-1 sm:space-x-2 font-orbitron tracking-wider text-xs sm:text-sm text-white group-hover/button:text-black transition-colors duration-300">
                                      <span className="group-hover/button:text-black">View Profile</span>
                                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-white group-hover/button:text-black transition-colors duration-300" />
                                    </span>
                                    
                                    {/* Button Corner Accents */}
                                    <div className="absolute top-0 left-0 w-2 h-2 sm:w-3 sm:h-3 border-t-2 border-l-2 border-white/60"></div>
                                    <div className="absolute top-0 right-0 w-2 h-2 sm:w-3 sm:h-3 border-t-2 border-r-2 border-white/60"></div>
                                    <div className="absolute bottom-0 left-0 w-2 h-2 sm:w-3 sm:h-3 border-b-2 border-l-2 border-white/60"></div>
                                    <div className="absolute bottom-0 right-0 w-2 h-2 sm:w-3 sm:h-3 border-b-2 border-r-2 border-white/60"></div>
                                  </button>
                                </Link>
                              </div>
                            </div>
                          </div>

                          {/* Scanning Lines Effect */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none">
                            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E5042F] to-transparent animate-pulse"></div>
                            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E5042F] to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
                            <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-[#E5042F] to-transparent animate-pulse" style={{animationDelay: '0.5s'}}></div>
                            <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#E5042F] to-transparent animate-pulse" style={{animationDelay: '1.5s'}}></div>
                          </div>

                          {/* HUD Data Stream Pattern */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none bg-[repeating-linear-gradient(90deg,transparent_0,transparent_98px,rgba(229,4,47,0.03)_100px)]"></div>
                        </div>
                      </motion.div>
                    ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="relative spacing-responsive-section bg-gradient-to-b from-black to-black/90 border-t border-[#E5042F]/20">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-between items-center mb-16"
            >
              <div>
                <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-white mb-4">
                  Latest News
                </h2>
                <p className="text-xl text-gray-300">
                  We touch the heart beats of gaming
                </p>
              </div>
              <Link href="/news">
                <GamingButton variant="secondary">
                  <span>View All</span>
                  <ArrowRight className="w-4 h-4" />
                </GamingButton>
              </Link>
            </motion.div>

            <div className="relative overflow-hidden">
              <motion.div 
                className="flex gap-4 sm:gap-6 lg:gap-8 transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentNewsIndex * (100 / cardsPerView)}%)` }}
              >
                {newsItems.map((news, index) => (
                  <motion.div
                    key={news.id}
                    className={`flex-shrink-0 group cursor-pointer ${
                      cardsPerView === 1 ? 'w-full' : 
                      cardsPerView === 2 ? 'w-1/2' : 'w-1/3'
                    }`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    onClick={() => window.location.href = `/news/${news.id}`}
                  >
                        <div className="bg-black border-2 border-white/30 hover:border-[#E5042F] transition-all duration-500 relative overflow-hidden transform hover:scale-[1.01] hover:shadow-2xl hover:shadow-[#E5042F]/20">
                          {/* Corner accents */}
                          <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                          <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                          <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>

                          {/* Image */}
                          <div className="h-48 bg-gradient-to-br from-[#E5042F]/20 to-black relative overflow-hidden">
                            <img
                              src={news.imageUrl}
                              alt={news.title}
                              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                            />
                            <div className="absolute top-4 right-4">
                              <span className="bg-[#E5042F] text-white px-2 py-1 text-xs font-bold uppercase tracking-wider">
                                {news.category}
                              </span>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="p-6">
                            <div className="flex items-center gap-2 mb-3">
                              <Calendar className="w-4 h-4 text-[#E5042F]" />
                              <span className="text-gray-400 text-sm">{news.date}</span>
                            </div>
                            
                            <h3 className="text-white text-lg font-bold mb-3 group-hover:text-[#E5042F] transition-colors duration-300">
                              {news.title}
                            </h3>
                            
                            <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                              {news.excerpt}
                            </p>

                            {/* Bottom HUD line */}
                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-white/30 group-hover:bg-[#E5042F]/80 transition-colors duration-300"></div>
                          </div>
                        </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="relative spacing-responsive-section bg-gradient-to-b from-black to-black/90 border-t border-[#E5042F]/20">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-between items-center mb-16"
            >
              <div>
                <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-white mb-4">
                  Gallery
                </h2>
                <p className="text-xl text-gray-300">
                  Pictures speaks louder than words - GT Wall
                </p>
              </div>
              <Link href="/gallery">
                <GamingButton variant="secondary">
                  <span>View All</span>
                  <ArrowRight className="w-4 h-4" />
                </GamingButton>
              </Link>
            </motion.div>

            <div className="relative overflow-hidden">
              <motion.div 
                className="flex gap-4 sm:gap-6 lg:gap-8 transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentGalleryIndex * (100 / cardsPerView)}%)` }}
              >
                {galleryData.map((item, index) => (
                  <motion.div
                    key={item.id}
                    className={`flex-shrink-0 group cursor-pointer ${
                      cardsPerView === 1 ? 'w-full' : 
                      cardsPerView === 2 ? 'w-1/2' : 'w-1/3'
                    }`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    onClick={() => window.location.href = `/gallery/${item.id}`}
                  >
                        <div className="bg-black border-2 border-white/30 hover:border-[#E5042F] transition-all duration-500 relative overflow-hidden transform hover:scale-[1.01] hover:shadow-2xl hover:shadow-[#E5042F]/20 aspect-[4/3]">
                          {/* Corner accents */}
                          <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-white group-hover:border-[#E5042F] transition-colors duration-300 z-10"></div>
                          <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-white group-hover:border-[#E5042F] transition-colors duration-300 z-10"></div>
                          <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-white group-hover:border-[#E5042F] transition-colors duration-300 z-10"></div>
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-white group-hover:border-[#E5042F] transition-colors duration-300 z-10"></div>

                          {/* Image - Full card */}
                          <div className="absolute inset-0 bg-gradient-to-br from-[#E5042F]/20 to-black overflow-hidden">
                            <img
                              src={item.imageUrl}
                              alt={item.title}
                              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                            />
                            
                            {/* Category badge */}
                            <div className="absolute top-4 right-4 z-20">
                              <span className="bg-[#E5042F] text-white px-2 py-1 text-xs font-bold uppercase tracking-wider">
                                {item.category}
                              </span>
                            </div>
                            
                            {/* View icon on hover */}
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                              <Eye className="w-8 h-8 text-white" />
                            </div>
                            
                            {/* Bottom HUD line */}
                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-white/30 group-hover:bg-[#E5042F]/80 transition-colors duration-300 z-20"></div>
                          </div>
                        </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="relative spacing-responsive-section bg-gradient-to-b from-black to-black/90 border-t border-[#E5042F]/20">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-between items-center mb-16"
            >
              <div>
                <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-white mb-4">
                  What Gamers Say
                </h2>
                <p className="text-xl text-gray-300">
                  Here's what some of the GAMERS said about us
                </p>
              </div>
              <Link href="/testimonials">
                <GamingButton variant="secondary">
                  <span>View All Reviews</span>
                  <ArrowRight className="w-4 h-4" />
                </GamingButton>
              </Link>
            </motion.div>

            <div className="relative overflow-hidden">
              <motion.div 
                className="flex gap-4 sm:gap-6 lg:gap-8 transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonialsIndex * (100 / cardsPerView)}%)` }}
              >
                {shuffledTestimonials.map((testimonial, index) => {
                  const SourceIcon = testimonial.sourceIcon;
                  const RandomIcon = testimonial.randomIcon;
                  return (
                    <motion.div
                      key={testimonial.id}
                      className={`flex-shrink-0 group cursor-pointer ${
                        cardsPerView === 1 ? 'w-full' : 
                        cardsPerView === 2 ? 'w-1/2' : 'w-1/3'
                      }`}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      onClick={() => window.location.href = '/testimonials'}
                    >
                          <div className="h-full bg-black border-2 border-white/30 hover:border-[#E5042F] transition-all duration-500 relative p-6 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#E5042F]/20">
                            {/* Corner accents - HUD style */}
                            <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                            <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                            <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>

                            {/* Rating & Source */}
                            <div className="flex items-center justify-between mb-4 relative z-10">
                              <div className="flex items-center space-x-1">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                ))}
                              </div>
                              
                              <div className="flex items-center space-x-2 bg-[#E5042F]/20 border border-[#E5042F]/30 px-2 py-1 text-xs group-hover:bg-white/10 group-hover:border-white/30 transition-all duration-300"
                                   style={{
                                     clipPath: 'polygon(0 0, calc(100% - 3px) 0, 100% 3px, 100% 100%, 3px 100%, 0 calc(100% - 3px))'
                                   }}>
                                <SourceIcon className="w-3 h-3 text-[#E5042F] group-hover:text-white transition-colors duration-300" />
                                <span className="text-[#E5042F] group-hover:text-white font-medium transition-colors duration-300">{testimonial.source}</span>
                              </div>
                            </div>

                            {/* Quote */}
                            <div className="relative mb-4 z-10">
                              <p className="text-gray-300 leading-relaxed text-sm group-hover:text-white transition-colors duration-300">
                                "{testimonial.content}"
                              </p>
                            </div>

                            {/* User Name with Random Icon */}
                            <div className="relative z-10 flex items-center space-x-3">
                              <div className="w-8 h-8 bg-[#E5042F]/20 border border-[#E5042F]/30 group-hover:bg-white/10 group-hover:border-white/30 transition-all duration-300 flex items-center justify-center"
                                   style={{
                                     clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))'
                                   }}>
                                <RandomIcon className="w-4 h-4 text-[#E5042F] group-hover:text-white transition-colors duration-300" />
                              </div>
                              <h4 className="text-base font-bold text-white font-orbitron leading-tight group-hover:text-white transition-colors duration-300">
                                {testimonial.name}
                              </h4>
                            </div>

                            {/* HUD bottom line */}
                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-white/30 group-hover:bg-[#E5042F]/80 transition-colors duration-300"></div>
                          </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default HomePage;