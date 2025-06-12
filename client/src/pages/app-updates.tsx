import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/seo-head";
import { useTheme } from "@/components/theme-provider";
import { 
  Calendar,
  Download,
  Smartphone,
  Star,
  ExternalLink,
  ChevronRight,
  Clock,
  Zap,
  Shield,
  Sparkles
} from "lucide-react";

import { appUpdates } from "@/data/app-updates";

const levelIcons = {
  "Light": Shield,
  "Medium": Zap,
  "Huge": Sparkles,
  "Large": Star
};

const categoryIcons = {
  "Major Release": Sparkles,
  "Feature Update": Zap,
  "Bug Fix": Shield,
  "Security Update": Shield,
  "Gaming": Star,
  "Social": Star,
  "Features": Sparkles,
  "Analytics": Zap
};

const categoryColors = {
  "Major Release": "bg-[#E5042F] text-white",
  "Feature Update": "bg-blue-500 text-white", 
  "Bug Fix": "bg-green-500 text-white",
  "Security Update": "bg-purple-500 text-white",
  "Gaming": "bg-orange-500 text-white",
  "Social": "bg-pink-500 text-white",
  "Features": "bg-[#E5042F] text-white",
  "Analytics": "bg-blue-500 text-white"
};

const levelColors = {
  "Light": "bg-green-500 text-white",
  "Medium": "bg-yellow-500 text-white", 
  "Large": "bg-orange-500 text-white",
  "Huge": "bg-red-500 text-white"
};

export default function AppUpdates() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedLevel, setSelectedLevel] = useState<string>("All");
  const { isLight } = useTheme();
  
  const categories = ["All", "Major Release", "Feature Update", "Bug Fix", "Security Update"];
  const levels = ["All", "Light", "Medium", "Large", "Huge"];
  
  const featuredUpdates = appUpdates.filter(update => update.featured);
  
  const filteredUpdates = selectedCategory === "All" 
    ? appUpdates 
    : appUpdates.filter(update => update.category === selectedCategory);

  return (
    <>
      <SEOHead 
        title="App Updates | GAMERS TAG"
        description="Stay updated with the latest GAMERS TAG app releases, features, and improvements. Download the newest version and discover what's new."
      />
      
      <div className={`min-h-screen ${isLight ? 'bg-white text-black' : 'bg-black text-white'}`}>
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#E5042F]/20 via-black to-black"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                App Updates
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Stay ahead with the latest GAMERS TAG updates, features, and improvements
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 border-2 transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-[#E5042F] border-[#E5042F] text-white"
                      : "bg-transparent border-white/30 text-white hover:border-[#E5042F] hover:text-[#E5042F]"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Updates Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredUpdates.map((update, index) => {
                const CategoryIcon = categoryIcons[update.category as keyof typeof categoryIcons] || Sparkles;
                const LevelIcon = levelIcons[update.updateLevel as keyof typeof levelIcons] || Star;
                return (
                  <motion.div
                    key={update.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group cursor-pointer"
                  >
                    <Link href={`/app-updates/${update.id}`}>
                      <div className="bg-black border-2 border-white/30 hover:border-[#E5042F] transition-all duration-500 relative transform hover:scale-[1.03] hover:shadow-2xl hover:shadow-[#E5042F]/20">
                        {/* Corner accents */}
                        <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                        <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                        <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                        
                        {/* Featured badge */}
                        {update.featured && (
                          <div className="absolute top-3 left-3 z-10">
                            <Badge className="bg-[#E5042F] text-white">
                              <Star className="w-3 h-3 mr-1" />
                              Featured
                            </Badge>
                          </div>
                        )}

                        {/* Status indicator */}
                        <div className="absolute top-3 right-3 w-2 h-2 bg-white rounded-full group-hover:bg-[#E5042F] animate-pulse transition-colors duration-300 z-10"></div>

                        {/* Content */}
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-2">
                              <CategoryIcon className="w-5 h-5 text-[#E5042F]" />
                              <Badge className={categoryColors[update.category as keyof typeof categoryColors] || "bg-gray-500 text-white"}>
                                {update.category}
                              </Badge>
                            </div>
                            {update.updateLevel && (
                              <Badge className={levelColors[update.updateLevel as keyof typeof levelColors] || "bg-gray-500 text-white"}>
                                <LevelIcon className="w-3 h-3 mr-1" />
                                {update.updateLevel}
                              </Badge>
                            )}
                          </div>

                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#E5042F] transition-colors duration-300">
                            {update.name}
                          </h3>
                          <p className="text-sm text-[#E5042F] font-medium mb-2">{update.version}</p>
                          
                          <p className="text-gray-400 text-sm leading-relaxed mb-4 group-hover:text-white transition-colors duration-300">
                            {update.description}
                          </p>

                          <div className="flex items-center justify-between text-sm text-gray-400">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {new Date(update.releasedOn).toLocaleDateString()}
                            </div>
                            <div className="flex items-center">
                              <Smartphone className="w-4 h-4 mr-1" />
                              {update.platform}
                            </div>
                          </div>

                          {/* Bottom HUD line */}
                          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-white/30 group-hover:bg-[#E5042F]/80 transition-colors duration-300"></div>
                        </div>
                      </div>
                    </Link>
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