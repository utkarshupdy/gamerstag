import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { TestimonialForm } from "@/components/testimonial-form";
import { TestimonialSubmissionForm } from "@/components/testimonial-submission-form";
import { useTestimonials } from '@/hooks/useSanity';
import { urlFor } from '@/lib/sanity';
import type { SanityTestimonial } from '@/types/sanity';
import { Star, Users, Quote, Gamepad2, Video, Building2, Trophy, ExternalLink, User, Crown, Zap, Heart, Target, Shield, Rocket, Diamond, Flame, Sparkles, Loader2 } from "lucide-react";
import { SiGoogleplay, SiAppstore, SiInstagram, SiYoutube } from "react-icons/si";

// Random icon pool for testimonials
const randomIcons = [User, Crown, Zap, Heart, Target, Shield, Rocket, Diamond, Flame, Sparkles, Trophy, Video, Gamepad2];

const testimonials = [
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

const categories = [
  { name: "All", icon: Users, count: testimonials.length },
  { name: "Pro Gamer", icon: Trophy, count: testimonials.filter(t => t.category === "Pro Gamer").length },
  { name: "Creator", icon: Video, count: testimonials.filter(t => t.category === "Creator").length },
  { name: "Business", icon: Building2, count: testimonials.filter(t => t.category === "Business").length },
  { name: "Casual Gamer", icon: Gamepad2, count: testimonials.filter(t => t.category === "Casual Gamer").length }
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <Navigation />
      
      {/* Interactive Dark Background with Animated Elements */}
      <div className="absolute inset-0">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-25">
          <div className="grid-pattern animate-pulse"></div>
        </div>
        
        {/* Moving Red Glow Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/6 left-1/4 w-84 h-84 bg-[#E5042F]/7 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/5 right-1/5 w-88 h-88 bg-[#E5042F]/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2.4s'}}></div>
          <div className="absolute top-1/2 left-1/6 w-76 h-76 bg-[#E5042F]/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4.2s'}}></div>
          <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-[#E5042F]/6 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.1s'}}></div>
        </div>
        
        {/* Testimonials Community Lines */}
        <div className="absolute inset-0 opacity-18">
          <div className="absolute top-0 left-1/5 w-px h-full bg-gradient-to-b from-transparent via-[#E5042F] to-transparent animate-pulse" style={{animationDelay: '1.2s'}}></div>
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#E5042F] to-transparent animate-pulse" style={{animationDelay: '3.1s'}}></div>
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#E5042F] to-transparent animate-pulse" style={{top: '30%', animationDelay: '0.8s'}}></div>
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#E5042F] to-transparent animate-pulse" style={{top: '70%', animationDelay: '2.6s'}}></div>
        </div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/38"></div>
      </div>
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 text-center overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm font-medium text-primary mb-6">
              <Star className="w-4 h-4" />
              <span>Community Testimonials</span>
            </div>
            <h1 className="font-orbitron font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-white">
              Our App Testimonials
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed mb-12">
              Discover why gamers trust Gamers Tag for authentic testimonials and real experiences from the gaming community.
            </p>
            

          </motion.div>
        </div>
      </section>

      {/* Testimonials Masonry Grid */}
      <section className="section-padding" ref={ref}>
        <div className="max-w-7xl mx-auto px-4">
          {/* Mobile-First Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => {
              const SourceIcon = testimonial.sourceIcon || SiGoogleplay;
              const RandomIcon = testimonial.randomIcon;
              return (
                <motion.div
                  key={testimonial.id}
                  className="group relative w-full"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  {/* Enhanced Glassmorphic HUD Card */}
                  <div className="relative bg-black/80 backdrop-blur-xl border-2 border-[#E5042F]/50 p-4 sm:p-6 h-full flex flex-col transform transition-all duration-700 group-hover:border-white group-hover:shadow-[0_0_40px_rgba(229,4,47,0.6)] group-hover:bg-black/60 overflow-hidden" 
                       style={{
                         clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))',
                         transformStyle: 'preserve-3d'
                       }}>
                    
                    {/* White glassmorphic overlay */}
                    <div className="absolute inset-0 bg-white/3 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/10 opacity-0 group-hover:opacity-90 transition-all duration-700 ease-out"></div>
                    
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
                    
                    {/* Subtle inner glow */}
                    <div className="absolute inset-0 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                    
                    {/* Corner Accents */}
                    <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[#E5042F] group-hover:border-white transition-colors duration-300 z-20"></div>
                    <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-[#E5042F] group-hover:border-white transition-colors duration-300 z-20"></div>
                    <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-[#E5042F] group-hover:border-white transition-colors duration-300 z-20"></div>
                    <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[#E5042F] group-hover:border-white transition-colors duration-300 z-20"></div>
                    
                    {/* Status Indicator */}
                    <div className="absolute top-3 right-3 w-3 h-3 bg-[#E5042F] rounded-full animate-pulse group-hover:bg-white group-hover:shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300 z-20"></div>

                    {/* Rating & Source */}
                    <div className="flex items-center justify-between mb-4 relative z-10">
                      <div className="flex items-center space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current group-hover:text-white group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.6)] transition-all duration-500" />
                        ))}
                      </div>
                      
                      <div className="flex items-center space-x-2 bg-[#E5042F]/20 border border-[#E5042F]/30 px-3 py-1.5 text-xs group-hover:bg-white/20 group-hover:border-white/50 transition-all duration-700"
                           style={{
                             clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                           }}>
                        <SourceIcon className="w-3 h-3 text-[#E5042F] group-hover:text-white group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.6)] transition-all duration-500" />
                        <span className="text-[#E5042F] group-hover:text-white font-medium transition-colors duration-500">{testimonial.source}</span>
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="relative mb-6 z-10">
                      <Quote className="w-6 h-6 text-[#E5042F]/60 group-hover:text-white/60 group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.4)] transition-all duration-500 mb-3" />
                      <p className="text-gray-300 leading-relaxed text-sm group-hover:text-white transition-colors duration-500">
                        "{testimonial.content}"
                      </p>
                    </div>

                    {/* User Info */}
                    <div className="relative z-10 flex items-center space-x-3 border-t border-[#E5042F]/20 group-hover:border-white/30 pt-4 transition-colors duration-500">
                      <div className="w-10 h-10 bg-[#E5042F]/20 border border-[#E5042F]/30 group-hover:bg-white/20 group-hover:border-white/50 transition-all duration-700 flex items-center justify-center"
                           style={{
                             clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                           }}>
                        <RandomIcon className="w-5 h-5 text-[#E5042F] group-hover:text-white group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] transition-all duration-500" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-base font-bold text-white font-orbitron leading-tight group-hover:text-white group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.4)] transition-all duration-500">
                          {testimonial.name}
                        </h4>
                        <p className="text-[#E5042F] text-sm font-medium group-hover:text-white/80 transition-colors duration-500">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>


        </div>
      </section>

      {/* Testimonial Submission Form Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <TestimonialSubmissionForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}