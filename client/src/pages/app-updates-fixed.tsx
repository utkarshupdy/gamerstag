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
  "Medium": "bg-yellow-500 text-black",
  "Large": "bg-orange-500 text-white",
  "Huge": "bg-[#E5042F] text-white"
};

export default function AppUpdates() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const { isLight } = useTheme();
  
  const categories = ["All", "Major Release", "Feature Update", "Bug Fix", "Security Update"];
  
  const filteredUpdates = selectedCategory === "All" 
    ? appUpdates 
    : appUpdates.filter(update => update.category === selectedCategory);

  const featuredUpdates = appUpdates.filter(update => update.featured);

  return (
    <>
      <SEOHead 
        title="App Updates | GAMERS TAG"
        description="Stay updated with the latest GAMERS TAG app releases, features, and improvements. Download the newest version and discover what's new."
      />
      
      <div className={`min-h-screen ${isLight ? 'bg-white text-black' : 'bg-black text-white'}`}>
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 px-4 overflow-hidden">
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
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`${selectedCategory === category 
                    ? 'bg-[#E5042F] text-white border-[#E5042F]' 
                    : 'bg-black text-white border-white/30 hover:border-[#E5042F] hover:text-[#E5042F]'
                  } transition-all duration-300`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Updates List */}
        <section className="py-16 px-4 bg-black/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-8">
              {filteredUpdates.map((update, index) => {
                const CategoryIcon = categoryIcons[update.category as keyof typeof categoryIcons];
                const LevelIcon = levelIcons[update.updateLevel as keyof typeof levelIcons];
                
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
                      <div className="bg-black border-2 border-white/30 hover:border-[#E5042F] transition-all duration-500 relative transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#E5042F]/20">
                        <div className="flex flex-col lg:flex-row">
                          {/* Image Section */}
                          <div className="lg:w-1/3 aspect-video lg:aspect-square bg-gradient-to-br from-white/5 to-black flex items-center justify-center relative overflow-hidden">
                            <div className="w-full h-full bg-gradient-to-br from-[#E5042F]/20 to-black flex items-center justify-center">
                              <Smartphone className="w-20 h-20 text-white group-hover:text-[#E5042F] group-hover:scale-110 transition-all duration-300" />
                            </div>
                            
                            {/* Scanning effect */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E5042F]/10 to-transparent opacity-0 group-hover:opacity-100"
                              animate={{
                                x: ['-100%', '100%'],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear"
                              }}
                            />
                          </div>

                          {/* Content Section */}
                          <div className="lg:w-2/3 p-8 space-y-6">
                            {/* Header */}
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                              <div className="flex-1">
                                <h3 className="text-2xl font-bold text-white group-hover:text-[#E5042F] transition-colors duration-300 mb-2">
                                  {update.name}
                                </h3>
                                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                  {update.description}
                                </p>
                              </div>
                              <div className="flex flex-col sm:items-end gap-2">
                                <Badge className={`${categoryColors[update.category as keyof typeof categoryColors]} text-sm`}>
                                  <CategoryIcon className="w-4 h-4 mr-1" />
                                  {update.category}
                                </Badge>
                                <Badge className={`text-sm ${levelColors[update.updateLevel as keyof typeof levelColors]}`}>
                                  <LevelIcon className="w-4 h-4 mr-1" />
                                  {update.updateLevel}
                                </Badge>
                              </div>
                            </div>

                            {/* Features */}
                            <div>
                              <h4 className="text-white font-semibold mb-3 group-hover:text-[#E5042F] transition-colors duration-300">Key Features:</h4>
                              <div className="flex flex-wrap gap-2">
                                {update.whatsNew.map((feature, featureIndex) => (
                                  <Badge key={featureIndex} variant="outline" className="border-white/30 text-gray-300 group-hover:border-[#E5042F]/50 group-hover:text-[#E5042F] transition-all duration-300">
                                    {feature}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            {/* Footer */}
                            <div className="flex items-center justify-between pt-4 border-t border-white/10 group-hover:border-[#E5042F]/30 transition-colors duration-300">
                              <div className="flex items-center space-x-4 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                <div className="flex items-center space-x-1">
                                  <Calendar className="w-4 h-4" />
                                  <span>{new Date(update.releasedOn).toLocaleDateString()}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Download className="w-4 h-4" />
                                  <span>v{update.version}</span>
                                </div>
                              </div>
                              <div className="flex items-center text-white group-hover:text-[#E5042F] transition-colors duration-300">
                                <ChevronRight className="w-4 h-4 mr-1" />
                                View Details
                              </div>
                            </div>
                          </div>
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