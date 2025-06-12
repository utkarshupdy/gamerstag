import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Search, Filter, SortDesc, X, Calendar, User, Tag, Image, FileText } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { PageSEO } from "@/components/seo/EnhancedSEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

// Comprehensive search data connecting all website content
const searchData = [
  // Core Team Members
  {
    id: 1,
    type: "team",
    title: "Joshua Kanatt - Founder & CEO",
    excerpt: "Visionary leader building the future of gaming careers and community connections. Leading GAMERS TAG's mission to revolutionize the gaming industry.",
    date: "2024-12-10",
    category: "Leadership",
    tags: ["founder", "ceo", "leadership", "vision", "gaming-careers"],
    slug: "/team/joshua-kanatt",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=200&fit=crop&crop=face"
  },
  {
    id: 2,
    type: "team",
    title: "Harsh Singh - Core Tech Member",
    excerpt: "Backend architecture specialist ensuring scalable, high-performance gaming infrastructure. Expert in system design and technical leadership.",
    date: "2024-12-09",
    category: "Technology",
    tags: ["backend", "architecture", "technical-lead", "infrastructure", "core-tech"],
    slug: "/team/harsh-singh",
    imageUrl: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=200&fit=crop&crop=face"
  },
  {
    id: 3,
    type: "team",
    title: "Paul Dickinson - Core Member",
    excerpt: "Strategic operations leader driving business growth and community engagement initiatives. Focus on operational excellence and team coordination.",
    date: "2024-12-08",
    category: "Operations",
    tags: ["operations", "strategy", "business-growth", "community", "core-member"],
    slug: "/team/paul-dickinson",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop&crop=face"
  },
  {
    id: 4,
    type: "team",
    title: "Hemanth Joseph - Core Tech Member",
    excerpt: "Cybersecurity expert and ethical hacker ensuring platform security and integrity. Kerala's pioneering cybersecurity professional.",
    date: "2024-12-07",
    category: "Security",
    tags: ["cybersecurity", "ethical-hacker", "security", "core-tech", "platform-integrity"],
    slug: "/team/hemanth-joseph",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=200&fit=crop&crop=face"
  },
  {
    id: 5,
    type: "team",
    title: "Adesh Kumar Patra - Core Member",
    excerpt: "Innovation catalyst focusing on emerging technologies and platform advancement strategies. Driving technological innovation at GAMERS TAG.",
    date: "2024-12-06",
    category: "Innovation",
    tags: ["innovation", "emerging-tech", "platform-advancement", "core-member", "technology"],
    slug: "/team/adesh-kumar-patra",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=200&fit=crop&crop=face"
  },
  
  // Features & Products
  {
    id: 6,
    type: "feature",
    title: "GT Jobs - Gaming Career Platform",
    excerpt: "Revolutionary job platform connecting gaming professionals with dream opportunities. Advanced matching algorithms and industry-specific tools.",
    date: "2024-12-05",
    category: "Platform Feature",
    tags: ["jobs", "careers", "gaming-professionals", "job-matching", "employment"],
    slug: "/features/jobs",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop"
  },
  {
    id: 7,
    type: "feature",
    title: "GT Connect - Professional Networking",
    excerpt: "Next-generation networking platform for gaming professionals. Build meaningful connections and collaborate on projects.",
    date: "2024-12-04",
    category: "Platform Feature",
    tags: ["networking", "gt-connect", "professionals", "collaboration", "community"],
    slug: "/features/gt-connect",
    imageUrl: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=200&fit=crop"
  },
  {
    id: 8,
    type: "feature",
    title: "GT Profile - Gaming Professional Profiles",
    excerpt: "Comprehensive profile system showcasing gaming expertise, achievements, and professional journey. Template-based customization available.",
    date: "2024-12-03",
    category: "Platform Feature",
    tags: ["profiles", "gt-profile", "gaming-expertise", "achievements", "professional-showcase"],
    slug: "/features/gt-profile",
    imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=200&fit=crop"
  },
  {
    id: 9,
    type: "feature",
    title: "GT Sound - Audio Experience Platform",
    excerpt: "Immersive audio experience for gaming professionals. High-quality sound design and audio networking capabilities.",
    date: "2024-12-02",
    category: "Platform Feature",
    tags: ["audio", "gt-sound", "immersive", "sound-design", "audio-networking"],
    slug: "/features/gt-sound",
    imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=200&fit=crop"
  },
  {
    id: 10,
    type: "feature",
    title: "Next-Gen Onboarding",
    excerpt: "Streamlined onboarding experience for new users. Interactive tutorials and personalized setup process.",
    date: "2024-12-01",
    category: "User Experience",
    tags: ["onboarding", "user-experience", "tutorials", "setup", "new-users"],
    slug: "/features/next-gen-onboarding",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop"
  },
  
  // Company Information
  {
    id: 11,
    type: "company",
    title: "About GAMERS TAG",
    excerpt: "World's first all-in-one super app for gaming and esports. Building the future of gaming careers and community connections.",
    date: "2024-11-30",
    category: "Company",
    tags: ["about", "company", "gaming", "esports", "super-app", "mission"],
    slug: "/about",
    imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=200&fit=crop"
  },
  {
    id: 12,
    type: "company",
    title: "Our Vision & Mission",
    excerpt: "Empowering gamers worldwide with tools, connections, and opportunities to turn their passion into successful careers.",
    date: "2024-11-29",
    category: "Company",
    tags: ["vision", "mission", "gamers", "careers", "empowerment", "success"],
    slug: "/vision",
    imageUrl: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=200&fit=crop"
  },
  {
    id: 13,
    type: "company",
    title: "Incubators & Partnerships",
    excerpt: "NASSCOM 10,000 Startups member and strategic partnerships with leading gaming industry organizations.",
    date: "2024-11-28",
    category: "Partnerships",
    tags: ["incubators", "nasscom", "partnerships", "startups", "industry-collaboration"],
    slug: "/incubators",
    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=200&fit=crop"
  },
  
  // News & Updates
  {
    id: 14,
    type: "news",
    title: "GAMERS TAG Platform Launch",
    excerpt: "Revolutionary gaming platform officially launches with groundbreaking features for professional gamers and industry professionals.",
    date: "2024-12-15",
    category: "Product Launch",
    tags: ["launch", "platform", "gaming-professionals", "revolutionary", "features"],
    slug: "/news/platform-launch",
    imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=200&fit=crop"
  },
  {
    id: 15,
    type: "news",
    title: "Industry Partnership Announcements",
    excerpt: "Strategic partnerships with major gaming studios and esports organizations to enhance platform ecosystem.",
    date: "2024-12-10",
    category: "Partnerships",
    tags: ["partnerships", "gaming-studios", "esports", "ecosystem", "collaboration"],
    slug: "/news/industry-partnerships",
    imageUrl: "https://images.unsplash.com/photo-1551818255-e6e10975cd17?w=400&h=200&fit=crop"
  },
  
  // Gallery & Media
  {
    id: 16,
    type: "gallery",
    title: "GT Platform Interface Gallery",
    excerpt: "Visual showcase of GAMERS TAG platform interfaces, features, and user experience design elements.",
    date: "2024-12-12",
    category: "Platform UI",
    tags: ["gallery", "interface", "ui-design", "platform", "user-experience"],
    slug: "/gallery",
    imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=200&fit=crop"
  },
  
  // Additional Content
  {
    id: 17,
    type: "feature",
    title: "Gaming Community Hub",
    excerpt: "Connect with fellow gamers, share experiences, and build lasting professional relationships in the gaming industry.",
    date: "2024-11-25",
    category: "Community",
    tags: ["community", "networking", "gamers", "relationships", "hub"],
    slug: "/community",
    imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=200&fit=crop"
  }
];

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("latest");
  const [filteredResults, setFilteredResults] = useState(searchData);
  const [isLoading, setIsLoading] = useState(false);

  // Filter and search functionality
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate API delay
    const timer = setTimeout(() => {
      let results = [...searchData];

      // Filter by search query
      if (searchQuery.trim()) {
        results = results.filter(item =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
        );
      }

      // Filter by type
      if (selectedType !== "all") {
        results = results.filter(item => item.type === selectedType);
      }

      // Filter by category
      if (selectedCategory !== "all") {
        results = results.filter(item => item.category === selectedCategory);
      }

      // Sort results
      switch (sortBy) {
        case "latest":
          results.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
          break;
        case "oldest":
          results.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
          break;
        case "alphabetical":
          results.sort((a, b) => a.title.localeCompare(b.title));
          break;
      }

      setFilteredResults(results);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery, selectedType, selectedCategory, sortBy]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "news": return FileText;
      case "team": return User;
      case "gallery": return Image;
      default: return FileText;
    }
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedType("all");
    setSelectedCategory("all");
    setSortBy("latest");
  };

  return (
    <>
      <PageSEO 
        pageType="search"
      />
      
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        
        {/* Header Section */}
        <section className="relative pt-32 pb-16 bg-gradient-to-b from-black via-black/95 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h1 className="font-orbitron font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                Search <span className="text-[#E5042F]">Everything</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover news, team members, gallery content, and more from the GAMERS TAG ecosystem
              </p>
            </motion.div>

            {/* Search Input */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative max-w-2xl mx-auto mb-8"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search for news, team members, gallery..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-4 w-full bg-black/50 border-2 border-[#E5042F]/30 focus:border-[#E5042F] text-white placeholder-gray-400 text-lg rounded-none"
                />
              </div>
            </motion.div>

            {/* Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-4 mb-8"
            >
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-[#E5042F]" />
                <span className="text-sm font-medium">Filters:</span>
              </div>
              
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-32 bg-black/50 border-[#E5042F]/30 text-white">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent className="bg-black border-[#E5042F]/30">
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="team">Team Members</SelectItem>
                  <SelectItem value="feature">Platform Features</SelectItem>
                  <SelectItem value="company">Company Info</SelectItem>
                  <SelectItem value="news">News & Updates</SelectItem>
                  <SelectItem value="gallery">Gallery & Media</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40 bg-black/50 border-[#E5042F]/30 text-white">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent className="bg-black border-[#E5042F]/30">
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Leadership">Leadership</SelectItem>
                  <SelectItem value="Technology">Technology</SelectItem>
                  <SelectItem value="Operations">Operations</SelectItem>
                  <SelectItem value="Security">Security</SelectItem>
                  <SelectItem value="Innovation">Innovation</SelectItem>
                  <SelectItem value="Platform Feature">Platform Feature</SelectItem>
                  <SelectItem value="User Experience">User Experience</SelectItem>
                  <SelectItem value="Company">Company</SelectItem>
                  <SelectItem value="Partnerships">Partnerships</SelectItem>
                  <SelectItem value="Product Launch">Product Launch</SelectItem>
                  <SelectItem value="Platform UI">Platform UI</SelectItem>
                  <SelectItem value="Community">Community</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-36 bg-black/50 border-[#E5042F]/30 text-white">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="bg-black border-[#E5042F]/30">
                  <SelectItem value="latest">Latest</SelectItem>
                  <SelectItem value="oldest">Oldest</SelectItem>
                  <SelectItem value="alphabetical">A-Z</SelectItem>
                </SelectContent>
              </Select>

              <Button
                onClick={clearFilters}
                variant="outline"
                size="sm"
                className="border-[#E5042F]/30 text-[#E5042F] hover:bg-[#E5042F] hover:text-white"
              >
                <X className="w-4 h-4 mr-1" />
                Clear
              </Button>
            </motion.div>

            {/* Results Count */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="text-center mb-8"
            >
              <p className="text-gray-400">
                {isLoading ? "Searching..." : `${filteredResults.length} result${filteredResults.length !== 1 ? 's' : ''} found`}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 bg-gradient-to-b from-black to-black/90">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, index) => (
                  <div key={index} className="animate-pulse">
                    <div className="bg-gray-800/50 h-48 mb-4"></div>
                    <div className="bg-gray-800/50 h-6 mb-2"></div>
                    <div className="bg-gray-800/50 h-4 mb-2"></div>
                    <div className="bg-gray-800/50 h-4 w-3/4"></div>
                  </div>
                ))}
              </div>
            ) : filteredResults.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredResults.map((item, index) => {
                  const TypeIcon = getTypeIcon(item.type);
                  
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card 
                        className="group cursor-pointer bg-black border-2 border-white/30 hover:border-[#E5042F] transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#E5042F]/20"
                        onClick={() => window.location.href = item.slug}
                      >
                        <CardContent className="p-0">
                          {/* Image */}
                          <div className="relative h-48 overflow-hidden">
                            <img
                              src={item.imageUrl}
                              alt={item.title}
                              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                            />
                            <div className="absolute top-4 right-4">
                              <Badge className="bg-[#E5042F] text-white hover:bg-[#E5042F]">
                                {item.category}
                              </Badge>
                            </div>
                            <div className="absolute top-4 left-4">
                              <div className="w-8 h-8 bg-black/80 border border-[#E5042F]/50 flex items-center justify-center">
                                <TypeIcon className="w-4 h-4 text-[#E5042F]" />
                              </div>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="p-6">
                            <div className="flex items-center gap-2 mb-3">
                              <Calendar className="w-4 h-4 text-[#E5042F]" />
                              <span className="text-gray-400 text-sm">{item.date}</span>
                            </div>
                            
                            <h3 className="text-white text-lg font-bold mb-3 group-hover:text-[#E5042F] transition-colors duration-300">
                              {item.title}
                            </h3>
                            
                            <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300 mb-4">
                              {item.excerpt}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                              {item.tags.map((tag, tagIndex) => (
                                <Badge
                                  key={tagIndex}
                                  variant="outline"
                                  className="border-[#E5042F]/30 text-[#E5042F] hover:bg-[#E5042F] hover:text-white text-xs"
                                >
                                  <Tag className="w-3 h-3 mr-1" />
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center py-16"
              >
                <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">No results found</h3>
                <p className="text-gray-400 mb-6">
                  Try adjusting your search terms or filters to find what you're looking for.
                </p>
                <Button
                  onClick={clearFilters}
                  className="bg-[#E5042F] hover:bg-[#E5042F]/80 text-white"
                >
                  Clear all filters
                </Button>
              </motion.div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default SearchPage;