import { SEOHead } from '@/components/seo-head';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Badge } from '@/components/ui/badge';
import { Newspaper, Bell, Filter, Bookmark, Share2, TrendingUp, Clock, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Newspaper,
    title: "Curated Gaming News",
    description: "Stay updated with the latest gaming industry news, esports tournaments, game releases, and professional gaming insights."
  },
  {
    icon: Bell,
    title: "Real-time Notifications",
    description: "Get instant alerts for breaking news, tournament updates, and important announcements in your favorite games."
  },
  {
    icon: Filter,
    title: "Personalized Feed",
    description: "Customize your news feed based on your gaming preferences, followed teams, and interested game genres."
  },
  {
    icon: Bookmark,
    title: "Save Articles",
    description: "Bookmark important articles and create your personal gaming news library for future reference."
  },
  {
    icon: Share2,
    title: "Social Sharing",
    description: "Share interesting news with your gaming community and discuss latest developments with fellow gamers."
  },
  {
    icon: TrendingUp,
    title: "Trending Topics",
    description: "Discover what's trending in the gaming world with our algorithm-powered content discovery system."
  }
];

const newsCategories = [
  "Esports Tournaments",
  "Game Releases",
  "Industry Updates",
  "Professional Gaming",
  "Technology News",
  "Gaming Culture",
  "Streaming & Content",
  "Mobile Gaming"
];

export default function News() {
  return (
    <>
      <SEOHead
        title="Gaming News - GAMERS TAG | Latest Esports & Gaming Updates"
        description="Stay updated with the latest gaming news, esports tournaments, and industry updates. Get personalized gaming content and real-time notifications."
        keywords="gaming news, esports news, gaming updates, tournament news, game releases, gaming industry"
        url="/features/news"
      />
      
      <div className="min-h-screen relative overflow-hidden" style={{background: 'linear-gradient(135deg, #000000 0%, #171717 50%, #000000 100%)'}}>
        <Navigation />
        
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 text-center">
          <div className="relative max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 px-6 py-3 mb-8 border border-[#E5042F]/30 rounded-full bg-black/20 backdrop-blur-sm">
                <Newspaper className="w-5 h-5 text-[#E5042F]" />
                <span className="text-white font-medium">Gaming News Hub</span>
                <div className="w-2 h-2 bg-[#E5042F] rounded-full animate-pulse"></div>
              </div>
              
              <h1 className="font-orbitron font-bold text-5xl md:text-7xl mb-6">
                <span className="text-white">Stay </span>
                <span className="text-white">Informed</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Get the latest gaming news, esports updates, and industry insights delivered straight to your feed. Never miss important developments in the gaming world.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center mb-12">
                <Badge className="bg-[#E5042F]/10 border-[#E5042F]/30 text-[#E5042F] text-lg px-6 py-2">
                  <Clock className="w-5 h-5 mr-2" />
                  Real-time Updates
                </Badge>
                <Badge className="bg-[#E5042F]/10 border-[#E5042F]/30 text-[#E5042F] text-lg px-6 py-2">
                  <Globe className="w-5 h-5 mr-2" />
                  Global Coverage
                </Badge>
                <Badge className="bg-[#E5042F]/10 border-[#E5042F]/30 text-[#E5042F] text-lg px-6 py-2">
                  <Filter className="w-5 h-5 mr-2" />
                  Personalized Feed
                </Badge>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="px-4 pb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="hud-box p-6 h-full">
                    <div className="flex items-center mb-4">
                      <feature.icon className="w-8 h-8 text-[#E5042F] mr-3" />
                      <h3 className="text-xl font-bold text-white font-orbitron">{feature.title}</h3>
                    </div>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Categories Section */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hud-box p-8"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center font-orbitron">
                <span className="text-white">News Categories</span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {newsCategories.map((category, index) => (
                  <div key={index} className="hud-button text-center py-3">
                    <span className="text-white font-medium">{category}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}