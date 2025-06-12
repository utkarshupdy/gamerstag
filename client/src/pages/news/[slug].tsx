import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { SEOHead } from "@/components/seo-head";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Clock, 
  ArrowLeft, 
  Share2, 
  Copy, 
  ExternalLink,
  Calendar,
  User,
  Tag,
  Download,
  Play,
  Eye
} from "lucide-react";
import screenshotPath from "@assets/Screenshot 2025-06-09 at 2.58.01 PM_1749461285444.png";

interface NewsArticle {
  id: number;
  title: string;
  slug: string;
  featuredImage: string;
  shortDescription: string;
  content: string;
  category: string;
  tags: string[];
  sourceName: string;
  sourceUrl: string;
  sourceLogo?: string;
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

// Sample news data
const sampleNews: NewsArticle[] = [
  {
    id: 1,
    title: "Revolutionary Gaming Platform Launches with AI-Powered Features",
    slug: "revolutionary-gaming-platform-launches-ai-features",
    featuredImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800",
    shortDescription: "A new gaming ecosystem emerges with cutting-edge AI technology that transforms how gamers connect, compete, and create content across multiple platforms.",
    content: `<div class="prose prose-invert max-w-none">
      <p>The gaming industry witnesses a groundbreaking launch as GAMERS TAG introduces its revolutionary platform that seamlessly integrates artificial intelligence with gaming experiences. This comprehensive ecosystem promises to transform how millions of gamers worldwide interact, compete, and build their digital presence.</p>

      <p>The platform features advanced AI-powered matchmaking that analyzes player behavior, skill levels, and preferences to create optimal gaming experiences. Early beta testing shows a 85% improvement in player satisfaction compared to traditional matchmaking systems.</p>

      <h3>Key Features Include:</h3>
      <ul>
        <li>AI-Enhanced Gaming Profiles with dynamic skill assessment</li>
        <li>Cross-platform tournament organization and management</li>
        <li>Real-time performance analytics and improvement suggestions</li>
        <li>Integrated streaming and content creation tools</li>
        <li>Advanced anti-cheat detection powered by machine learning</li>
      </ul>

      <p>"This represents the future of gaming - where technology enhances human potential rather than replacing it," said the development team lead. The platform officially launches worldwide next month with support for over 50 popular games.</p>

      <h3>Industry Impact</h3>
      <p>Industry experts predict this launch will set new standards for gaming platforms, potentially influencing how major gaming companies approach user experience and community building.</p>
    </div>`,
    category: "gaming",
    tags: ["AI", "Gaming Platform", "Technology", "Launch"],
    sourceName: "Gaming Tech Weekly",
    sourceUrl: "https://gamingtechweekly.com",
    sourceLogo: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=64",
    author: "Sarah Martinez",
    publishedAt: "2024-12-08T10:00:00Z",
    featured: true,
    readTime: 5,
    metaDescription: "Revolutionary gaming platform with AI-powered features launches, transforming how gamers connect and compete.",
    metaKeywords: ["gaming", "AI", "platform", "technology"]
  },
  {
    id: 2,
    title: "Esports Championship Prize Pool Reaches Record $50 Million",
    slug: "esports-championship-prize-pool-record-50-million",
    featuredImage: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=800",
    shortDescription: "The upcoming Global Gaming Championship announces the largest prize pool in esports history, attracting teams from over 80 countries.",
    content: `<div class="prose prose-invert max-w-none">
      <p>The esports industry reaches a new milestone as the Global Gaming Championship announces an unprecedented $50 million prize pool, marking the largest financial commitment in competitive gaming history.</p>

      <p>This year's championship will feature teams from 80+ countries competing across multiple game titles including popular MOBAs, FPS games, and battle royales. The tournament structure spans six months with regional qualifiers leading to the grand finale.</p>

      <h3>Prize Distribution:</h3>
      <ul>
        <li>$15 million for the grand champion team</li>
        <li>$8 million for runner-up</li>
        <li>$5 million distributed among top 8 teams</li>
        <li>$22 million for regional tournaments and development programs</li>
      </ul>

      <p>The championship also introduces new viewer engagement features, including interactive voting systems and real-time statistical analysis powered by advanced algorithms.</p>
    </div>`,
    category: "esports",
    tags: ["Esports", "Championship", "Prize Pool", "Competition"],
    sourceName: "Esports Central",
    sourceUrl: "https://esportscentral.com",
    sourceLogo: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=64",
    author: "Michael Chen",
    publishedAt: "2024-12-07T14:30:00Z",
    featured: true,
    readTime: 4,
    metaDescription: "Global Gaming Championship announces record $50 million prize pool for esports competition.",
    metaKeywords: ["esports", "championship", "prize pool", "competition"]
  },
  {
    id: 3,
    title: "New Gaming Hardware Standards Promise 8K Gaming at 120FPS",
    slug: "new-gaming-hardware-standards-8k-120fps",
    featuredImage: "https://images.unsplash.com/photo-1593640495253-23196b27a87f?w=800",
    shortDescription: "Industry leaders collaborate on new hardware standards that will enable 8K resolution gaming at 120 frames per second across all major platforms.",
    content: `<div class="prose prose-invert max-w-none">
      <p>Major hardware manufacturers announce groundbreaking standards for next-generation gaming equipment, promising 8K resolution at 120 frames per second performance across all gaming platforms.</p>

      <p>The collaborative effort involves leading companies working together to establish unified specifications that will drive innovation while maintaining affordability for mainstream consumers.</p>

      <h3>Technical Specifications:</h3>
      <ul>
        <li>Advanced GPU architectures with 50% performance improvements</li>
        <li>New memory standards supporting ultra-high bandwidth</li>
        <li>Enhanced cooling solutions for sustained performance</li>
        <li>Standardized ports and connectivity protocols</li>
      </ul>

      <p>Industry analysts predict these standards will accelerate adoption of high-resolution gaming and support the growing virtual reality and augmented reality gaming markets.</p>
    </div>`,
    category: "technology",
    tags: ["Hardware", "8K Gaming", "Standards", "Technology"],
    sourceName: "Tech Gaming News",
    sourceUrl: "https://techgamingnews.com",
    sourceLogo: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=64",
    author: "Jennifer Park",
    publishedAt: "2024-12-06T09:15:00Z",
    featured: false,
    readTime: 6,
    metaDescription: "New gaming hardware standards enable 8K resolution at 120FPS across platforms.",
    metaKeywords: ["gaming hardware", "8K", "120FPS", "standards"]
  },
  {
    id: 4,
    title: "Gaming Community Initiative Raises $2M for Digital Literacy",
    slug: "gaming-community-initiative-raises-2m-digital-literacy",
    featuredImage: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800",
    shortDescription: "Global gaming community unites to support digital literacy programs in underserved regions, demonstrating the positive social impact of gaming culture.",
    content: `<div class="prose prose-invert max-w-none">
      <p>The gaming community demonstrates its commitment to positive social change by raising over $2 million for digital literacy programs targeting underserved communities worldwide.</p>

      <p>This grassroots initiative emerged from gaming streamers, professional players, and community organizers who recognized the potential to leverage gaming's popularity for educational advancement.</p>

      <h3>Program Highlights:</h3>
      <ul>
        <li>Computer labs in 50 community centers across 15 countries</li>
        <li>Gaming-based coding and digital skills workshops</li>
        <li>Mentorship programs connecting gamers with students</li>
        <li>Scholarship funds for technology education</li>
      </ul>

      <p>The initiative showcases how gaming communities can drive meaningful social impact while fostering the next generation of digital creators and technology professionals.</p>
    </div>`,
    category: "community",
    tags: ["Community", "Digital Literacy", "Social Impact", "Education"],
    sourceName: "Gaming for Good",
    sourceUrl: "https://gamingforgood.org",
    sourceLogo: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=64",
    author: "Alex Rodriguez",
    publishedAt: "2024-12-05T16:45:00Z",
    featured: false,
    readTime: 3,
    metaDescription: "Gaming community raises $2M for digital literacy programs in underserved regions.",
    metaKeywords: ["gaming community", "digital literacy", "social impact", "education"]
  }
];

export default function NewsDetail() {
  const { slug } = useParams();
  const [article, setArticle] = useState<NewsArticle | null>(null);

  useEffect(() => {
    // Find article by slug
    const foundArticle = sampleNews.find(news => news.slug === slug);
    setArticle(foundArticle || null);
  }, [slug]);

  if (!article) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-4">Article Not Found</h1>
            <Link href="/news">
              <Button className="bg-[#E5042F] hover:bg-[#E5042F]/80">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to News
              </Button>
            </Link>
          </div>
        </div>
      </>
    );
  }

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
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <>
      <SEOHead
        title={`${article.title} - GAMERS TAG News`}
        description={article.metaDescription || article.shortDescription}
        keywords={article.metaKeywords?.join(", ") || "gaming news"}
        canonical={`${window.location.origin}/news/${article.slug}`}
      />
      
      <div className="min-h-screen bg-black relative overflow-hidden">
        <Navigation />
        
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-20">
            <div className="grid-pattern animate-pulse"></div>
          </div>
        </div>

        {/* Back Button */}
        <div className="relative pt-32 pb-8 px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/news">
              <Button 
                variant="outline" 
                className="mb-8 border-[#E5042F]/30 text-[#E5042F] hover:bg-[#E5042F] hover:text-white"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to News
              </Button>
            </Link>
          </div>
        </div>

        {/* Article Header */}
        <section className="relative pb-8 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Category and Meta Info */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <Badge 
                  className={`${CATEGORY_COLORS[article.category as keyof typeof CATEGORY_COLORS]} text-white font-medium`}
                >
                  {article.category.toUpperCase()}
                </Badge>
                
                {article.featured && (
                  <div className="bg-[#E5042F] text-white px-3 py-1 text-sm font-mono font-bold">
                    FEATURED
                  </div>
                )}

                <div className="flex items-center text-gray-400 text-sm space-x-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{timeAgo(article.publishedAt)}</span>
                  </div>
                  
                  {article.readTime && (
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime} min read</span>
                    </div>
                  )}
                  
                  {article.author && (
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Title */}
              <h1 className="font-orbitron font-bold text-3xl md:text-4xl lg:text-5xl mb-6 text-white leading-tight">
                {article.title}
              </h1>

              {/* Description */}
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                {article.shortDescription}
              </p>

              {/* Action Buttons - Similar to uploaded image */}
              <div className="flex flex-wrap gap-4 mb-8">
                <button
                  onClick={() => window.open(article.sourceUrl, '_blank')}
                  className="bg-[#E5042F] hover:bg-[#E5042F]/80 text-white px-6 py-3 font-bold text-sm flex items-center space-x-2 transition-all duration-300"
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                  }}
                >
                  <Download className="w-4 h-4" />
                  <span>VIEW SOURCE</span>
                </button>
                
                <button
                  onClick={handleShare}
                  className="bg-white hover:bg-gray-100 text-black px-6 py-3 font-bold text-sm flex items-center space-x-2 transition-all duration-300"
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                  }}
                >
                  <Play className="w-4 h-4" />
                  <span>SHARE ARTICLE</span>
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="relative pb-12 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-video overflow-hidden border border-[#E5042F]/30"
              style={{
                clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
              }}
            >
              <img
                src={article.featuredImage}
                alt={article.title}
                className="w-full h-full object-cover"
              />
              
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#E5042F]"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#E5042F]"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#E5042F]"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#E5042F]"></div>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="relative pb-12 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-black/50 border border-[#E5042F]/30 p-8"
              style={{
                clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
              }}
            >
              <div 
                className="text-gray-300 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </motion.div>
          </div>
        </section>

        {/* Tags and Source */}
        <section className="relative pb-12 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* Tags */}
              {article.tags && article.tags.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-white font-bold mb-4 flex items-center">
                    <Tag className="w-5 h-5 mr-2 text-[#E5042F]" />
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {article.tags.map((tag, index) => (
                      <div key={index} className="bg-[#E5042F]/10 border border-[#E5042F]/30 px-4 py-2 text-[#E5042F] font-medium"
                           style={{
                             clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                           }}>
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Source Info */}
              <div className="border-t border-[#E5042F]/20 pt-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {article.sourceLogo && (
                      <img
                        src={article.sourceLogo}
                        alt={article.sourceName}
                        className="w-12 h-12 rounded"
                      />
                    )}
                    <div>
                      <p className="text-white font-semibold">{article.sourceName}</p>
                      <p className="text-gray-400 text-sm">Original Source</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={handleShare}
                      className="bg-white border border-gray-300 text-black hover:bg-gray-100 px-4 py-2 text-sm font-medium transition-all duration-300 flex items-center space-x-2"
                      style={{
                        clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))'
                      }}
                    >
                      <Share2 className="w-4 h-4" />
                      <span>Share</span>
                    </button>
                    
                    <button
                      onClick={handleCopyUrl}
                      className="bg-white border border-gray-300 text-black hover:bg-gray-100 px-4 py-2 text-sm font-medium transition-all duration-300 flex items-center space-x-2"
                      style={{
                        clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))'
                      }}
                    >
                      <Copy className="w-4 h-4" />
                      <span>Copy URL</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}