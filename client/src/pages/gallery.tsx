import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { X, ZoomIn, Calendar, Tag, Star, Users, Trophy, Gamepad2, Camera, Sparkles, Play, Eye, Heart, Download, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { SEOHead } from '@/components/seo-head';
import { SharpButton, DualButtonGroup } from '@/components/ui/sharp-button';

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  category: 'events' | 'team' | 'product' | 'achievements' | 'community';
  imageUrl: string;
  date: string;
  views?: number;
  likes?: number;
  featured?: boolean;
}

const galleryData: GalleryItem[] = [
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
  },
  {
    id: '7',
    title: 'Developer Conference Keynote',
    description: 'Presenting GAMERS TAG platform capabilities to 5000+ game developers',
    category: 'events',
    imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop&crop=center',
    date: '2024-06-12',
    views: 2890,
    likes: 234
  },
  {
    id: '8',
    title: 'Gaming Influencer Partnership',
    description: 'Collaborating with top gaming creators to build authentic gaming experiences',
    category: 'community',
    imageUrl: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800&h=600&fit=crop&crop=center',
    date: '2024-05-28',
    views: 1650,
    likes: 127
  }
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [currentHighlight, setCurrentHighlight] = useState(0);

  // Get featured items for highlights section
  const highlightItems = galleryData.filter(item => item.featured);

  // Auto-scroll highlights every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHighlight((prev) => (prev + 1) % highlightItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [highlightItems.length]);

  const categories = [
    { key: 'all', label: 'ALL ITEMS', icon: Sparkles },
    { key: 'events', label: 'EVENTS', icon: Trophy },
    { key: 'team', label: 'TEAM', icon: Users },
    { key: 'product', label: 'PRODUCTS', icon: Gamepad2 },
    { key: 'achievements', label: 'ACHIEVEMENTS', icon: Star },
    { key: 'community', label: 'COMMUNITY', icon: Heart }
  ];

  const filteredImages = galleryData;

  const getCategoryColor = (category: string) => {
    const colors = {
      events: '#E5042F',
      team: '#00FF88',
      product: '#FF6B00',
      achievements: '#FFD700',
      community: '#FF1744'
    };
    return colors[category as keyof typeof colors] || '#E5042F';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, type: "spring", stiffness: 100 }
    }
  };

  return (
    <>
      <SEOHead 
        title="Gallery | GAMERS TAG"
        description="Explore our journey through images - from team moments to product milestones, community events to achievement celebrations."
      />
      
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative pt-40 pb-16 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#E5042F]/20 via-black to-black"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-64 h-64 bg-[#E5042F]/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#E5042F]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="font-orbitron text-5xl md:text-7xl font-bold text-white mb-6">
                VISUAL GALLERY
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Explore Our Gallery : A vibrant collection showcasing the best moments, highlights, and visuals from the world of GT World.
              </p>
            </motion.div>


          </div>
        </section>

        {/* 3D Carousel Highlights Section */}
        <section className="py-8 px-4 bg-gradient-to-b from-black/90 via-gray-900/20 to-black relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#E5042F]/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#E5042F]/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8"
            >
              <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-6">
                FEATURED HIGHLIGHTS
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Experience our most impactful moments through an immersive 3D showcase
              </p>
            </motion.div>

            {/* 3D Carousel Container */}
            <div className="relative h-[700px] overflow-hidden">

              {/* 3D Carousel Cards */}
              <div className="relative h-full flex items-center justify-center" style={{ perspective: '1000px' }}>
                {highlightItems.map((item, index) => {
                  const offset = index - currentHighlight;
                  const absOffset = Math.abs(offset);
                  const isActive = offset === 0;
                  const isAdjacent = absOffset === 1;
                  const isVisible = absOffset <= 2;
                  
                  if (!isVisible) return null;
                  
                  return (
                    <motion.div
                      key={item.id}
                      className="absolute cursor-pointer"
                      style={{ transformStyle: 'preserve-3d' }}
                      animate={{
                        x: offset * 300,
                        rotateY: offset * -25,
                        scale: isActive ? 1 : isAdjacent ? 0.8 : 0.6,
                        z: isActive ? 0 : isAdjacent ? -200 : -400,
                        opacity: isActive ? 1 : isAdjacent ? 0.7 : 0.4
                      }}
                      transition={{
                        duration: 0.8,
                        ease: "easeInOut",
                        type: "spring",
                        stiffness: 100,
                        damping: 20
                      }}
                      onClick={() => setCurrentHighlight(index)}
                      whileHover={!isActive ? { scale: isAdjacent ? 0.85 : 0.65 } : {}}
                    >
                      <div className="w-96 h-[450px] relative group">
                        {/* Modern Glass Card Design */}
                        <div className="relative h-full overflow-hidden rounded-lg border border-[#E5042F]/30 bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-black/90 backdrop-blur-md shadow-2xl">
                          
                          {/* Main Image */}
                          <div className="relative h-full overflow-hidden rounded-lg">
                            <img 
                              src={item.imageUrl} 
                              alt={item.title}
                              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                            />
                            
                            {/* Gradient Overlays */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-[#E5042F]/10 via-transparent to-blue-900/10"></div>
                            
                            {/* Category Badge - Floating */}
                            <div className="absolute top-6 left-6">
                              <div className="px-3 py-1 bg-[#E5042F] text-white text-xs font-bold uppercase tracking-wider rounded-sm shadow-lg">
                                {item.category}
                              </div>
                            </div>

                            {/* Hover Effect Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#E5042F]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          </div>
                          
                          {/* Active Card Border */}
                          {isActive && (
                            <>
                              {/* Clean Border */}
                              <div className="absolute inset-0 rounded-lg border-2 border-[#E5042F] pointer-events-none"></div>
                              
                              {/* Corner Accents */}
                              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#E5042F]"></div>
                              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#E5042F]"></div>
                              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#E5042F]"></div>
                              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#E5042F]"></div>
                            </>
                          )}

                          {/* Subtle Scanner Line for Active Card */}
                          {isActive && (
                            <motion.div
                              className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E5042F] to-transparent"
                              animate={{ y: [0, 450, 0] }}
                              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            />
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Navigation Arrows */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setCurrentHighlight((prev) => (prev - 1 + highlightItems.length) % highlightItems.length)}
                className="absolute left-8 top-1/2 -translate-y-1/2 bg-black/70 border border-[#E5042F]/50 text-white p-3 hover:bg-[#E5042F]/80 transition-all duration-300 backdrop-blur-sm z-10"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                }}
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setCurrentHighlight((prev) => (prev + 1) % highlightItems.length)}
                className="absolute right-8 top-1/2 -translate-y-1/2 bg-black/70 border border-[#E5042F]/50 text-white p-3 hover:bg-[#E5042F]/80 transition-all duration-300 backdrop-blur-sm z-10"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                }}
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>


            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="pt-8 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredImages.map((item, index) => (
                  <motion.div
                    key={item.id}
                    layout
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: 5,
                      z: 50
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 20 
                    }}
                    onHoverStart={() => setHoveredCard(item.id)}
                    onHoverEnd={() => setHoveredCard(null)}
                    onClick={() => setSelectedImage(item)}
                    className="cursor-pointer group"
                  >
                    {/* HUD Card */}
                    <div className="relative bg-black/90 backdrop-blur-xl border-2 border-white/20 overflow-hidden h-full transform transition-all duration-500 group-hover:border-[#E5042F] group-hover:shadow-[0_0_40px_#E5042F50]"
                         style={{
                           clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))'
                         }}>
                      

                      
                      {/* Image Container */}
                      <div className="relative aspect-video overflow-hidden">
                        <img 
                          src={item.imageUrl} 
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                        
                        {/* Category Indicator */}
                        <div className="absolute top-4 left-4 flex items-center space-x-2">
                          <div 
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: getCategoryColor(item.category) }}
                          ></div>
                          <span className="text-xs font-mono text-white uppercase tracking-wider">
                            {item.category}
                          </span>
                        </div>
                        
                        {/* Hover Actions */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: hoveredCard === item.id ? 1 : 0 }}
                          className="absolute inset-0 bg-black/40 flex items-center justify-center"
                        >
                          <div className="flex space-x-4">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="bg-[#E5042F] text-white p-3 rounded-full hover:bg-[#E5042F]/80 transition-colors"
                            >
                              <ZoomIn className="w-5 h-5" />
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="bg-white/20 text-white p-3 rounded-full hover:bg-white/30 transition-colors backdrop-blur-sm"
                            >
                              <Download className="w-5 h-5" />
                            </motion.button>
                          </div>
                        </motion.div>
                      </div>
                      
                      {/* Content - Only View Button */}
                      <div className="p-6 relative">
                        {/* View Button */}
                        <button className="w-full rectangular-button rectangular-button--red px-4 py-2 text-sm">
                          VIEW
                        </button>
                      </div>
                      
                      {/* Corner Accents */}
                      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                      
                      {/* Scan Lines */}
                      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#E5042F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#E5042F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Empty State */}
            {filteredImages.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="bg-black border-2 border-[#E5042F]/50 p-12 max-w-md mx-auto"
                     style={{
                       clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'
                     }}>
                  <Sparkles className="w-16 h-16 text-[#E5042F] mx-auto mb-6" />
                  <h3 className="text-xl font-bold text-white mb-4">
                    No Content Found
                  </h3>
                  <p className="text-gray-400 mb-6">
                    No items match the selected category. Adjust your filter settings.
                  </p>
                  <button 
                    onClick={() => setSelectedCategory('all')}
                    className="bg-[#E5042F] border-2 border-[#E5042F] text-white hover:bg-black hover:text-[#E5042F] px-6 py-3 font-bold tracking-wider transition-all duration-300"
                    style={{
                      clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)'
                    }}
                  >
                    SHOW ALL ITEMS
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, rotateY: -15 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                exit={{ scale: 0.8, opacity: 0, rotateY: 15 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="max-w-6xl w-full max-h-[90vh] overflow-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="bg-black border-2 border-[#E5042F] relative"
                     style={{
                       clipPath: 'polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 30px 100%, 0 calc(100% - 30px))'
                     }}>
                  
                  {/* Header */}
                  <div className="flex justify-between items-center p-6 border-b border-[#E5042F]/30">
                    <div className="flex items-center space-x-4">
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: getCategoryColor(selectedImage.category) }}
                      ></div>
                      <span className="text-sm font-mono text-gray-400 uppercase tracking-wider">
                        {selectedImage.category}
                      </span>
                      {selectedImage.featured && (
                        <span className="bg-[#E5042F] text-white px-2 py-1 text-xs font-bold"
                              style={{
                                clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))'
                              }}>
                          FEATURED
                        </span>
                      )}
                    </div>
                    
                    <button
                      onClick={() => setSelectedImage(null)}
                      className="text-gray-400 hover:text-white transition-colors p-2"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  {/* Image */}
                  <div className="relative">
                    <img 
                      src={selectedImage.imageUrl} 
                      alt={selectedImage.title}
                      className="w-full h-auto max-h-[60vh] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>

                  {/* Actions Only */}
                  <div className="p-6">
                    <div className="flex justify-center space-x-4">
                      <SharpButton 
                        variant="red"
                        onClick={() => {
                          // Download image
                          const link = document.createElement('a');
                          link.href = selectedImage.imageUrl;
                          link.download = `gamers-tag-${selectedImage.id}.jpg`;
                          link.click();
                        }}
                      >
                        <Download className="w-4 h-4" />
                        <span>DOWNLOAD</span>
                      </SharpButton>
                      
                      <SharpButton 
                        variant="white"
                        onClick={() => {
                          // Visit source
                          window.open(selectedImage.imageUrl, '_blank');
                        }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>VISIT SOURCE</span>
                      </SharpButton>
                      
                      <SharpButton 
                        variant="white"
                        onClick={() => {
                          // Copy link
                          navigator.clipboard.writeText(selectedImage.imageUrl);
                        }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>COPY LINK</span>
                      </SharpButton>
                    </div>
                  </div>
                  
                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#E5042F]"></div>
                  <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#E5042F]"></div>
                  <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[#E5042F]"></div>
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#E5042F]"></div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <Footer />
      </div>
    </>
  );
}