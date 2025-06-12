import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { SEOHead } from "@/components/seo-head";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { HudButton } from "@/components/hud-button";
import { 
  Clock, 
  Search, 
  Filter, 
  Calendar,
  ExternalLink,
  Share2,
  Copy,
  Newspaper,
  Tag,
  User,
  ChevronRight,
  ChevronLeft
} from "lucide-react";
import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/sanity";

interface NewsArticle {
  _id: string;
  title: string;
  slug: { current: string };
  featuredImage: any;
  shortDescription: string;
  category: string;
  tags: string[];
  source: {
    name: string;
    url: string;
    logo?: any;
  };
  author?: string;
  publishedAt: string;
  featured: boolean;
  readTime?: number;
  metaDescription?: string;
  metaKeywords?: string[];
}

const CATEGORY_COLORS = {
  gaming: "bg-blue-500",
  esports: "bg-purple-500", 
  technology: "bg-green-500",
  industry: "bg-orange-500",
  community: "bg-pink-500",
  product: "bg-red-500",
  announcements: "bg-yellow-500"
};

function NewsCard({ article }: { article: NewsArticle }) {
  const timeAgo = (date: string) => {
    const now = new Date();
    const published = new Date(date);
    const diffInHours = Math.floor((now.getTime() - published.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return "Just now";
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInHours < 168) return `${Math.floor(diffInHours / 24)}d ago`;
    return published.toLocaleDateString();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.shortDescription,
        url: window.location.origin + `/news/${article.slug.current}`
      });
    } else {
      navigator.clipboard.writeText(window.location.origin + `/news/${article.slug.current}`);
    }
  };

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(window.location.origin + `/news/${article.slug.current}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <Link href={`/news/${article.slug.current}`}>
        <div className="bg-black border border-[#E5042F]/30 hover:border-[#E5042F] transition-all duration-300 overflow-hidden relative cursor-pointer transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#E5042F]/20"
             style={{
               clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
             }}>
        
          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>

          {/* Featured Image */}
          {article.featuredImage && (
            <div className="relative aspect-video overflow-hidden">
              <img
                src={urlFor(article.featuredImage).width(800).height(450).url()}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Category Badge */}
              <div className="absolute top-3 left-3">
                <Badge 
                  className={`${CATEGORY_COLORS[article.category as keyof typeof CATEGORY_COLORS]} text-white font-medium`}
                >
                  {article.category.toUpperCase()}
                </Badge>
              </div>
              
              {/* Featured Badge */}
              {article.featured && (
                <div className="absolute top-3 right-3 bg-[#E5042F] text-white px-2 py-1 text-xs font-mono font-bold">
                  FEATURED
                </div>
              )}
            </div>
          )}

          {/* Content */}
          <div className="p-6">
            {/* Meta Info */}
            <div className="flex items-center justify-between mb-3 text-xs text-gray-400">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>{timeAgo(article.publishedAt)}</span>
                </div>
                {article.readTime && (
                  <div className="flex items-center space-x-1">
                    <span>{article.readTime} min read</span>
                  </div>
                )}
                {article.author && (
                  <div className="flex items-center space-x-1">
                    <User className="w-3 h-3" />
                    <span>{article.author}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-white font-bold text-lg mb-3 group-hover:text-[#E5042F] transition-colors duration-300 line-clamp-2">
              {article.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
              {article.shortDescription}
            </p>

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {article.tags.slice(0, 3).map((tag, index) => (
                  <div key={index} className="bg-[#E5042F]/10 border border-[#E5042F]/30 px-2 py-1 text-xs text-[#E5042F]"
                       style={{
                         clipPath: 'polygon(0 0, calc(100% - 3px) 0, 100% 3px, 100% 100%, 3px 100%, 0 calc(100% - 3px))'
                       }}>
                    <Tag className="w-3 h-3 inline mr-1" />
                    {tag}
                  </div>
                ))}
              </div>
            )}

            {/* Action Button - Full Width */}
            <div className="border-t border-[#E5042F]/20 pt-4">
              <motion.div
                className="w-full bg-[#E5042F] border border-[#E5042F] text-white py-3 px-6 font-semibold transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:border-white group-hover:shadow-[0_0_20px_#E5042F50] flex items-center justify-center space-x-2"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="group-hover:text-black transition-colors duration-300">Read Article</span>
                <ExternalLink className="w-4 h-4 group-hover:text-black transition-colors duration-300" />
              </motion.div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function News() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("publishedAt");
  const [currentFeatured, setCurrentFeatured] = useState(0);

  // Sample news data
  const sampleNewsData: NewsArticle[] = [
    {
      _id: "1",
      title: "Revolutionary Gaming Platform Launches with AI-Powered Features",
      slug: { current: "revolutionary-gaming-platform-launches-ai-features" },
      featuredImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800",
      shortDescription: "A new gaming ecosystem emerges with cutting-edge AI technology that transforms how gamers connect, compete, and create content across multiple platforms.",
      category: "gaming",
      tags: ["AI", "Gaming Platform", "Technology", "Launch"],
      source: {
        name: "Gaming Tech Weekly",
        url: "https://gamingtechweekly.com",
        logo: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=64"
      },
      author: "Sarah Martinez",
      publishedAt: "2024-12-08T10:00:00Z",
      featured: true,
      readTime: 5,
      metaDescription: "Revolutionary gaming platform with AI-powered features launches, transforming how gamers connect and compete.",
      metaKeywords: ["gaming", "AI", "platform", "technology"]
    },
    {
      _id: "2",
      title: "Esports Championship Prize Pool Reaches Record $50 Million",
      slug: { current: "esports-championship-prize-pool-record-50-million" },
      featuredImage: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=800",
      shortDescription: "The upcoming Global Gaming Championship announces the largest prize pool in esports history, attracting teams from over 80 countries.",
      category: "esports",
      tags: ["Esports", "Championship", "Prize Pool", "Competition"],
      source: {
        name: "Esports Central",
        url: "https://esportscentral.com",
        logo: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=64"
      },
      author: "Michael Chen",
      publishedAt: "2024-12-07T14:30:00Z",
      featured: true,
      readTime: 4,
      metaDescription: "Global Gaming Championship announces record $50 million prize pool for esports competition.",
      metaKeywords: ["esports", "championship", "prize pool", "competition"]
    },
    {
      _id: "3",
      title: "New Gaming Hardware Standards Promise 8K Gaming at 120FPS",
      slug: { current: "new-gaming-hardware-standards-8k-120fps" },
      featuredImage: "https://images.unsplash.com/photo-1593640495253-23196b27a87f?w=800",
      shortDescription: "Industry leaders collaborate on new hardware standards that will enable 8K resolution gaming at 120 frames per second across all major platforms.",
      category: "technology",
      tags: ["Hardware", "8K Gaming", "Standards", "Technology"],
      source: {
        name: "Tech Gaming News",
        url: "https://techgamingnews.com",
        logo: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=64"
      },
      author: "Jennifer Park",
      publishedAt: "2024-12-06T09:15:00Z",
      featured: false,
      readTime: 6,
      metaDescription: "New gaming hardware standards enable 8K resolution at 120FPS across platforms.",
      metaKeywords: ["gaming hardware", "8K", "120FPS", "standards"]
    },
    {
      _id: "4",
      title: "Gaming Community Initiative Raises $2M for Digital Literacy",
      slug: { current: "gaming-community-initiative-raises-2m-digital-literacy" },
      featuredImage: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800",
      shortDescription: "Global gaming community unites to support digital literacy programs in underserved regions, demonstrating the positive social impact of gaming culture.",
      category: "community",
      tags: ["Community", "Digital Literacy", "Social Impact", "Education"],
      source: {
        name: "Gaming for Good",
        url: "https://gamingforgood.org",
        logo: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=64"
      },
      author: "Alex Rodriguez",
      publishedAt: "2024-12-05T16:45:00Z",
      featured: false,
      readTime: 3,
      metaDescription: "Gaming community raises $2M for digital literacy programs in underserved regions.",
      metaKeywords: ["gaming community", "digital literacy", "social impact", "education"]
    },
    {
      _id: "5",
      title: "Next-Gen VR Gaming Headsets Set to Transform Immersive Gaming",
      slug: { current: "next-gen-vr-gaming-headsets-transform-immersive-gaming" },
      featuredImage: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=800",
      shortDescription: "Major technology companies unveil revolutionary VR headsets featuring 8K displays, haptic feedback, and wireless connectivity for unprecedented gaming immersion.",
      category: "technology",
      tags: ["VR Gaming", "Virtual Reality", "Gaming Hardware", "Innovation"],
      source: {
        name: "VR Gaming Central",
        url: "https://vrgamingcentral.com",
        logo: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=64"
      },
      author: "Marcus Chen",
      publishedAt: "2024-12-04T11:20:00Z",
      featured: false,
      readTime: 7,
      metaDescription: "Revolutionary VR headsets with 8K displays and haptic feedback transform immersive gaming experience.",
      metaKeywords: ["VR gaming", "virtual reality", "gaming hardware", "8K VR"]
    },
    {
      _id: "6",
      title: "Mobile Gaming Revenue Surpasses Console Gaming for First Time",
      slug: { current: "mobile-gaming-revenue-surpasses-console-gaming-first-time" },
      featuredImage: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=800",
      shortDescription: "Industry analysis reveals mobile gaming has officially overtaken console gaming in global revenue, marking a historic shift in the gaming landscape.",
      category: "business",
      tags: ["Mobile Gaming", "Gaming Revenue", "Industry Analysis", "Market Trends"],
      source: {
        name: "Gaming Economics Today",
        url: "https://gamingeconomics.com",
        logo: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=64"
      },
      author: "Elena Rodriguez",
      publishedAt: "2024-12-03T15:30:00Z",
      featured: true,
      readTime: 5,
      metaDescription: "Mobile gaming revenue officially surpasses console gaming revenue for the first time in industry history.",
      metaKeywords: ["mobile gaming", "gaming revenue", "console gaming", "market analysis"]
    },
    {
      _id: "7",
      title: "AI-Powered Game Development Tools Reduce Creation Time by 60%",
      slug: { current: "ai-powered-game-development-tools-reduce-creation-time" },
      featuredImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
      shortDescription: "Revolutionary AI development suite enables indie developers to create AAA-quality games in months rather than years, democratizing game development.",
      category: "technology",
      tags: ["AI Development", "Game Creation", "Indie Games", "Development Tools"],
      source: {
        name: "Game Dev AI Weekly",
        url: "https://gamedevai.com",
        logo: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=64"
      },
      author: "David Kim",
      publishedAt: "2024-12-02T08:45:00Z",
      featured: false,
      readTime: 6,
      metaDescription: "AI-powered game development tools reduce creation time by 60%, revolutionizing indie game development.",
      metaKeywords: ["AI game development", "indie games", "development tools", "game creation"]
    },
    {
      _id: "8",
      title: "Cross-Platform Gaming Reaches 500 Million Connected Players",
      slug: { current: "cross-platform-gaming-reaches-500-million-connected-players" },
      featuredImage: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800",
      shortDescription: "Major gaming platforms report unprecedented cross-platform connectivity, with 500 million players now gaming together across different devices and consoles.",
      category: "gaming",
      tags: ["Cross-Platform", "Multiplayer Gaming", "Gaming Networks", "Player Connectivity"],
      source: {
        name: "Cross-Play News",
        url: "https://crossplaynews.com",
        logo: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=64"
      },
      author: "Rachel Thompson",
      publishedAt: "2024-12-01T13:15:00Z",
      featured: false,
      readTime: 4,
      metaDescription: "Cross-platform gaming milestone reached with 500 million connected players across all major platforms.",
      metaKeywords: ["cross-platform gaming", "multiplayer", "gaming networks", "player connectivity"]
    },
    {
      _id: "9",
      title: "Gaming Accessibility Features Become Industry Standard",
      slug: { current: "gaming-accessibility-features-become-industry-standard" },
      featuredImage: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800",
      shortDescription: "Major gaming companies commit to universal accessibility standards, ensuring games are playable by gamers with disabilities across all platforms.",
      category: "community",
      tags: ["Accessibility", "Inclusive Gaming", "Gaming Standards", "Disability Support"],
      source: {
        name: "Accessible Gaming Alliance",
        url: "https://accessiblegaming.org",
        logo: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=64"
      },
      author: "Jordan Williams",
      publishedAt: "2024-11-30T10:00:00Z",
      featured: false,
      readTime: 5,
      metaDescription: "Gaming accessibility features become industry standard, making games inclusive for all players.",
      metaKeywords: ["gaming accessibility", "inclusive gaming", "disability support", "gaming standards"]
    },
    {
      _id: "10",
      title: "Blockchain Gaming Tokens Gain Mainstream Adoption",
      slug: { current: "blockchain-gaming-tokens-gain-mainstream-adoption" },
      featuredImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800",
      shortDescription: "Traditional gaming companies integrate blockchain tokens and NFTs, bringing Web3 gaming mechanics to mainstream audiences with simplified user experiences.",
      category: "technology",
      tags: ["Blockchain Gaming", "NFTs", "Web3", "Gaming Tokens"],
      source: {
        name: "Blockchain Gaming Report",
        url: "https://blockchaingaming.com",
        logo: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=64"
      },
      author: "Alex Chen",
      publishedAt: "2024-11-29T16:20:00Z",
      featured: false,
      readTime: 8,
      metaDescription: "Blockchain gaming tokens and NFTs gain mainstream adoption with simplified user experiences.",
      metaKeywords: ["blockchain gaming", "NFTs", "Web3 gaming", "gaming tokens"]
    },
    {
      _id: "11",
      title: "Cloud Gaming Services Report 300% Growth in Rural Areas",
      slug: { current: "cloud-gaming-services-report-300-percent-growth-rural-areas" },
      featuredImage: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800",
      shortDescription: "Improved internet infrastructure and optimized cloud gaming platforms drive massive adoption in previously underserved rural communities worldwide.",
      category: "technology",
      tags: ["Cloud Gaming", "Rural Gaming", "Internet Infrastructure", "Gaming Access"],
      source: {
        name: "Cloud Gaming Analytics",
        url: "https://cloudgaminganalytics.com",
        logo: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=64"
      },
      author: "Maria Santos",
      publishedAt: "2024-11-28T12:30:00Z",
      featured: false,
      readTime: 6,
      metaDescription: "Cloud gaming services see 300% growth in rural areas due to improved infrastructure.",
      metaKeywords: ["cloud gaming", "rural gaming", "internet infrastructure", "gaming access"]
    },
    {
      _id: "12",
      title: "Female Esports Viewership Increases 250% Year-over-Year",
      slug: { current: "female-esports-viewership-increases-250-percent-year-over-year" },
      featuredImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
      shortDescription: "Dedicated female esports leagues and inclusive tournament formats drive unprecedented growth in female audience engagement and participation.",
      category: "esports",
      tags: ["Female Esports", "Esports Growth", "Gaming Diversity", "Tournament Viewership"],
      source: {
        name: "Esports Diversity Report",
        url: "https://esportsdiversity.com",
        logo: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=64"
      },
      author: "Taylor Johnson",
      publishedAt: "2024-11-27T14:45:00Z",
      featured: true,
      readTime: 5,
      metaDescription: "Female esports viewership sees massive 250% increase with dedicated leagues and inclusive formats.",
      metaKeywords: ["female esports", "esports growth", "gaming diversity", "tournament viewership"]
    }
  ];

  // Filter and sort news articles
  const filteredNews = sampleNewsData.filter(article => {
    let matchesCategory = true;
    if (selectedCategory === "gaming") {
      matchesCategory = article.category === "gaming";
    } else if (selectedCategory === "featured") {
      matchesCategory = article.featured === true;
    } else if (selectedCategory !== "all") {
      matchesCategory = article.category === selectedCategory;
    }
    
    const matchesSearch = !searchTerm || 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedNews = [...filteredNews].sort((a, b) => {
    if (sortBy === "title") {
      return a.title.localeCompare(b.title);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    } else {
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    }
  });

  const newsArticles = sortedNews;
  const isLoading = false;

  const categories = [
    { value: "all", label: "All News" },
    { value: "gaming", label: "Gaming" },
    { value: "esports", label: "Esports" },
    { value: "technology", label: "Technology" },
    { value: "industry", label: "Industry" },
    { value: "community", label: "Community" },
    { value: "product", label: "Product" },
    { value: "announcements", label: "Announcements" }
  ];

  const featuredArticles = newsArticles.filter(article => article.featured);
  const regularArticles = newsArticles.filter(article => !article.featured);

  // Auto-scroll featured articles every 4 seconds
  useEffect(() => {
    if (featuredArticles.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentFeatured((prev) => (prev + 1) % featuredArticles.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [featuredArticles.length]);

  return (
    <>
      <SEOHead
        title="Gaming News & Updates - GAMERS TAG | Latest Industry News"
        description="Stay updated with the latest gaming news, esports updates, and industry insights. Get comprehensive coverage of gaming trends, product launches, and community stories."
        keywords="gaming news, esports news, gaming industry, game updates, gaming community, gaming trends"
        canonical={`${window.location.origin}/news`}
      />
      
      <div className="min-h-screen bg-black relative overflow-hidden">
        <Navigation />
        
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-20">
            <div className="grid-pattern animate-pulse"></div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative pt-32 pb-12 px-4">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center space-x-2 px-6 py-3 mb-8 border border-[#E5042F]/30 rounded-full bg-black/20 backdrop-blur-sm">
                <Newspaper className="w-5 h-5 text-[#E5042F]" />
                <span className="text-white font-medium">Gaming News Hub</span>
                <div className="w-2 h-2 bg-[#E5042F] rounded-full animate-pulse"></div>
              </div>

              <h1 className="font-orbitron font-bold text-4xl md:text-6xl lg:text-7xl mb-6 text-white">
                Gaming News
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Stay ahead with the latest gaming news, esports updates, and industry insights from around the world
              </p>
            </motion.div>

            {/* Search and Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl mx-auto mb-12"
            >
              <div className="flex flex-col md:flex-row gap-4 items-center">
                {/* Search */}
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search news articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-black/50 border-[#E5042F]/30 text-white placeholder-gray-400 focus:border-[#E5042F]"
                  />
                </div>

                {/* Category Filter Buttons */}
                <div className="flex flex-wrap gap-2">
                  <HudButton
                    variant="secondary"
                    size="sm"
                    active={selectedCategory === "gaming"}
                    onClick={() => setSelectedCategory("gaming")}
                  >
                    GAMING
                  </HudButton>
                  <HudButton
                    variant="primary"
                    size="sm"
                    active={selectedCategory === "featured"}
                    onClick={() => setSelectedCategory("featured")}
                  >
                    FEATURED
                  </HudButton>
                </div>

                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-black/50 border border-[#E5042F]/30 text-white px-4 py-2 rounded focus:border-[#E5042F] focus:outline-none"
                >
                  <option value="publishedAt" className="bg-black">Latest First</option>
                  <option value="title" className="bg-black">Title A-Z</option>
                  <option value="category" className="bg-black">Category</option>
                </select>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 3D Carousel Featured Articles */}
        {featuredArticles.length > 0 && (
          <section className="py-20 px-4 bg-gradient-to-b from-black/90 via-gray-900/20 to-black relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#E5042F]/5 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#E5042F]/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="container-responsive relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-white via-[#E5042F] to-white bg-clip-text text-transparent">
                    FEATURED NEWS
                  </span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                  Breaking stories and trending topics from the gaming world
                </p>
              </motion.div>

              {/* 3D Carousel Container */}
              <div className="relative h-[700px] overflow-hidden">
                {/* 3D Carousel Cards */}
                <div className="relative h-full flex items-center justify-center" style={{ perspective: '1000px' }}>
                  {featuredArticles.map((article, index) => {
                    const offset = index - currentFeatured;
                    const absOffset = Math.abs(offset);
                    const isActive = offset === 0;
                    const isAdjacent = absOffset === 1;
                    const isVisible = absOffset <= 2;
                    
                    if (!isVisible) return null;
                    
                    return (
                      <motion.div
                        key={article._id}
                        className="absolute cursor-pointer"
                        style={{ transformStyle: 'preserve-3d' }}
                        animate={{
                          x: offset * 320,
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
                        onClick={() => setCurrentFeatured(index)}
                        whileHover={!isActive ? { scale: isAdjacent ? 0.85 : 0.65 } : {}}
                      >
                        <div className="w-96 h-[450px] relative group">
                          {/* Modern Glass Card Design */}
                          <div className="relative h-full overflow-hidden rounded-lg border border-[#E5042F]/30 bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-black/90 backdrop-blur-md shadow-2xl">
                            
                            {/* Main Image */}
                            <div className="relative h-full overflow-hidden rounded-lg">
                              <img 
                                src={article.featuredImage}
                                alt={article.title}
                                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                              />
                              
                              {/* Gradient Overlays */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                              <div className="absolute inset-0 bg-gradient-to-br from-[#E5042F]/10 via-transparent to-blue-900/10"></div>
                              
                              {/* Category Tags - Floating */}
                              <div className="absolute top-6 left-6 flex space-x-2">
                                <div className="px-3 py-1 bg-[#E5042F] text-white text-xs font-bold uppercase tracking-wider rounded-sm shadow-lg">
                                  {article.category}
                                </div>
                              </div>

                              {/* Read Time - Floating */}
                              <div className="absolute top-6 right-6 px-2 py-1 bg-black/70 text-gray-300 text-xs font-mono rounded-sm backdrop-blur-sm flex items-center space-x-1">
                                <Clock className="w-3 h-3" />
                                <span>{article.readTime}m</span>
                              </div>

                              {/* Bottom Content Overlay */}
                              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
                                <h3 className="font-orbitron text-xl font-bold text-white leading-tight line-clamp-2 drop-shadow-lg">
                                  {article.title}
                                </h3>
                                <p className="text-gray-300 text-sm line-clamp-2 drop-shadow-md">
                                  {article.shortDescription}
                                </p>
                                
                                {/* Meta Info */}
                                <div className="flex items-center justify-between pt-2">
                                  <div className="flex items-center space-x-2 text-gray-400">
                                    <User className="w-3 h-3" />
                                    <span className="text-xs font-mono">{article.author}</span>
                                  </div>
                                  <span className="text-xs text-gray-400 font-mono">
                                    {new Date(article.publishedAt).toLocaleDateString()}
                                  </span>
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
                  onClick={() => setCurrentFeatured((prev) => (prev - 1 + featuredArticles.length) % featuredArticles.length)}
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
                  onClick={() => setCurrentFeatured((prev) => (prev + 1) % featuredArticles.length)}
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
        )}

        {/* All Articles */}
        <section className="relative py-12 px-4">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-1 h-8 bg-[#E5042F] mr-4"></div>
                  <h2 className="text-3xl font-bold text-white">Latest News</h2>
                </div>
                <div className="text-gray-400 text-sm">
                  {newsArticles.length} articles found
                </div>
              </div>
            </motion.div>

            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-black/50 border border-[#E5042F]/20 p-6 animate-pulse"
                       style={{
                         clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
                       }}>
                    <div className="aspect-video bg-gray-700 mb-4"></div>
                    <div className="h-4 bg-gray-700 mb-2"></div>
                    <div className="h-4 bg-gray-700 w-3/4 mb-4"></div>
                    <div className="h-3 bg-gray-700 mb-2"></div>
                    <div className="h-3 bg-gray-700 w-2/3"></div>
                  </div>
                ))}
              </div>
            ) : regularArticles.length > 0 ? (
              <div className="grid-responsive-cards">
                {regularArticles.map((article) => (
                  <NewsCard key={article._id} article={article} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <Newspaper className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-white text-xl font-semibold mb-2">No News Articles Found</h3>
                <p className="text-gray-400 mb-6">
                  {searchTerm ? 'Try adjusting your search terms or filters.' : 'News articles will appear here once published.'}
                </p>
                {searchTerm && (
                  <HudButton 
                    onClick={() => { setSearchTerm(""); setSelectedCategory("all"); }}
                    variant="outline"
                  >
                    Clear Filters
                  </HudButton>
                )}
              </div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}