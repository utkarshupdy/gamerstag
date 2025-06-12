import { motion } from "framer-motion";
import { Link } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/seo-head";
import { 
  Calendar,
  Download,
  Smartphone,
  Star,
  ExternalLink,
  ChevronRight,
  Zap,
  Shield,
  Sparkles
} from "lucide-react";

// Featured app updates data
const featuredUpdates = [
  {
    id: "v2-5-0",
    version: "v2.5.0",
    name: "Revolutionary Gaming Experience",
    image: "/api/placeholder/640/360",
    description: "Introducing groundbreaking features that transform how you connect with the gaming community. Enhanced performance, new social features, and improved user interface.",
    releasedOn: "2024-12-15",
    featured: true,
    updateLevel: "Huge",
    platform: "Play Store",
    category: "Features"
  },
  {
    id: "v2-4-5",
    version: "v2.4.5",
    name: "Gaming Tournament Integration",
    image: "/api/placeholder/640/360",
    description: "New tournament features and esports integration. Connect with tournaments, track your performance, and compete with gamers worldwide.",
    releasedOn: "2024-11-10",
    featured: true,
    updateLevel: "Large",
    platform: "Play Store",
    category: "Gaming"
  },
  {
    id: "v2-3-0",
    version: "v2.3.0",
    name: "Gaming Analytics Dashboard",
    image: "/api/placeholder/640/360",
    description: "Comprehensive analytics dashboard for tracking your gaming performance, achievements, and progress across multiple games.",
    releasedOn: "2024-09-18",
    featured: true,
    updateLevel: "Huge",
    platform: "App Store",
    category: "Features"
  }
];

const levelIcons = {
  "Light": Shield,
  "Medium": Zap,
  "Large": Sparkles,
  "Huge": Star
};

const levelColors = {
  "Light": "bg-green-500 text-white",
  "Medium": "bg-blue-500 text-white", 
  "Large": "bg-orange-500 text-white",
  "Huge": "bg-[#E5042F] text-white"
};

export default function AppUpdates() {
  return (
    <>
      <SEOHead 
        title="App Updates | GAMERS TAG"
        description="Stay updated with the latest GAMERS TAG app releases, features, and improvements. Download the newest version and discover what's new."
      />
      
      <div className="min-h-screen bg-black text-white">
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

        {/* Featured Updates Only */}
        <section className="py-16 px-4 bg-black/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Updates</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">Major releases and important updates that enhance your gaming experience</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {featuredUpdates.map((update, index) => {
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
                      <div className="bg-black border-2 border-[#E5042F]/30 hover:border-[#E5042F] transition-all duration-500 relative transform hover:scale-[1.05] hover:shadow-2xl hover:shadow-[#E5042F]/30 overflow-hidden">
                        {/* Corner accents */}
                        <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                        <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                        <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                        
                        {/* Status indicator */}
                        <div className="absolute top-6 right-6 z-10">
                          <div className="w-3 h-3 bg-[#E5042F] rounded-full animate-pulse shadow-[0_0_12px_rgba(229,4,47,0.8)]"></div>
                        </div>

                        {/* Update Image */}
                        <div className="relative h-56 bg-gradient-to-br from-[#E5042F]/20 to-black overflow-hidden">
                          <img 
                            src={update.image} 
                            alt={update.name}
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                          
                          {/* Version badge */}
                          <div className="absolute top-6 left-6">
                            <Badge className="bg-[#E5042F] text-white border-0 font-mono text-sm px-4 py-2">
                              {update.version}
                            </Badge>
                          </div>

                          {/* Level indicator */}
                          <div className="absolute bottom-6 right-6">
                            <div className={`flex items-center space-x-2 px-4 py-2 rounded-none ${levelColors[update.updateLevel as keyof typeof levelColors]} backdrop-blur-sm`}>
                              <LevelIcon className="w-5 h-5" />
                              <span className="text-sm font-bold">{update.updateLevel}</span>
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-8">
                          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#E5042F] transition-colors duration-300 font-orbitron">
                            {update.name}
                          </h3>
                          <p className="text-gray-300 text-base mb-6 leading-relaxed line-clamp-3">
                            {update.description}
                          </p>
                          
                          {/* Platform and Date */}
                          <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center space-x-2">
                              <Smartphone className="w-5 h-5 text-[#E5042F]" />
                              <span className="text-sm text-gray-300 font-medium">{update.platform}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Calendar className="w-5 h-5 text-[#E5042F]" />
                              <span className="text-sm text-gray-300 font-medium">
                                {new Date(update.releasedOn).toLocaleDateString()}
                              </span>
                            </div>
                          </div>

                          {/* CTA */}
                          <div className="flex items-center justify-between text-base">
                            <div className="flex items-center text-gray-400">
                              <span className="text-sm">View Update Details</span>
                            </div>
                            <div className="flex items-center text-[#E5042F] group-hover:text-white transition-colors duration-300">
                              <span className="text-sm font-semibold mr-2">Learn More</span>
                              <ChevronRight className="w-5 h-5" />
                            </div>
                          </div>

                          {/* Bottom HUD line */}
                          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#E5042F]/30 group-hover:bg-[#E5042F] transition-all duration-300"></div>
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