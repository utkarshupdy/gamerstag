import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useParams, useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { SEOHead } from "@/components/seo-head";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HudButton } from "@/components/hud-button";
import { 
  Clock, 
  ArrowLeft,
  Share2,
  Copy,
  ExternalLink,
  User,
  Calendar,
  Tag,
  BookOpen,
  Globe,
  Eye,
  Heart,
  MessageCircle,
  Bookmark,
  ChevronRight,
  Newspaper
} from "lucide-react";
import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/sanity";
import { PortableText } from '@portabletext/react';

interface NewsArticle {
  _id: string;
  title: string;
  slug: { current: string };
  featuredImage: any;
  content: any[];
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
  viewCount?: number;
}

const CATEGORY_COLORS = {
  gaming: "bg-blue-500",
  esports: "bg-purple-500", 
  technology: "bg-green-500",
  industry: "bg-orange-500",
  community: "bg-pink-500",
  product: "bg-red-500",
  announcements: "bg-yellow-500",
  business: "bg-orange-600"
};

export default function NewsArticle() {
  const params = useParams();
  const [location] = useLocation();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likes, setLikes] = useState(0);
  
  const slug = params.slug;

  // Fetch article from Sanity
  const { data: article, isLoading, error } = useQuery<NewsArticle>({
    queryKey: [`/api/news/${slug}`],
    enabled: !!slug
  });

  // Fetch related articles
  const { data: relatedArticles } = useQuery<NewsArticle[]>({
    queryKey: [`/api/news/related/${article?.category}`],
    enabled: !!article?.category
  });

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
    if (navigator.share && article) {
      navigator.share({
        title: article.title,
        text: article.shortDescription,
        url: window.location.href
      });
    } else if (article) {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleLike = () => {
    setLikes(prev => prev + 1);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">Loading article...</div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white text-2xl mb-4">Article not found</h1>
          <Link href="/news">
            <Button>Back to News</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <SEOHead 
        title={`${article.title} | GAMERS TAG News`}
        description={article.metaDescription || article.shortDescription}
        keywords={article.metaKeywords?.join(', ')}
        ogImage={article.featuredImage ? urlFor(article.featuredImage).width(1200).height(630).url() : undefined}
      />
      
      <Navigation />

      {/* Back Navigation */}
      <div className="pt-24 pb-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/news">
            <motion.button
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
              whileHover={{ x: -5 }}
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to News</span>
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <section className="px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Category & Meta */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <Badge 
                  className={`${CATEGORY_COLORS[article.category as keyof typeof CATEGORY_COLORS]} text-white font-medium`}
                >
                  {article.category.toUpperCase()}
                </Badge>
                {article.featured && (
                  <div className="bg-[#E5042F] text-white px-3 py-1 text-xs font-mono font-bold">
                    FEATURED
                  </div>
                )}
              </div>
              
              <div className="flex items-center space-x-3">
                <motion.button
                  onClick={handleShare}
                  className="p-2 border border-[#E5042F]/30 hover:border-[#E5042F] text-gray-400 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Share2 className="w-4 h-4" />
                </motion.button>
                <motion.button
                  onClick={handleBookmark}
                  className={`p-2 border border-[#E5042F]/30 hover:border-[#E5042F] transition-all duration-300 ${
                    isBookmarked ? 'text-[#E5042F]' : 'text-gray-400 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
                </motion.button>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {article.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm mb-8">
              {article.author && (
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{article.author}</span>
                </div>
              )}
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{timeAgo(article.publishedAt)}</span>
              </div>
              {article.readTime && (
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-4 h-4" />
                  <span>{article.readTime} min read</span>
                </div>
              )}
              {article.viewCount && (
                <div className="flex items-center space-x-2">
                  <Eye className="w-4 h-4" />
                  <span>{article.viewCount} views</span>
                </div>
              )}
            </div>

            {/* Description */}
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              {article.shortDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      {article.featuredImage && (
        <section className="px-4 mb-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-video overflow-hidden border-2 border-[#E5042F]/30"
              style={{
                clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))'
              }}
            >
              <img
                src={urlFor(article.featuredImage).width(1200).height(675).url()}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </section>
      )}

      {/* Article Content */}
      <section className="px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="prose prose-lg prose-invert max-w-none"
          >
            {article.content && (
              <PortableText
                value={article.content}
                components={{
                  block: {
                    normal: ({children}) => <p className="text-gray-300 leading-relaxed mb-6">{children}</p>,
                    h1: ({children}) => <h1 className="text-3xl font-bold text-white mb-6">{children}</h1>,
                    h2: ({children}) => <h2 className="text-2xl font-bold text-white mb-4">{children}</h2>,
                    h3: ({children}) => <h3 className="text-xl font-bold text-white mb-4">{children}</h3>,
                    blockquote: ({children}) => (
                      <blockquote className="border-l-4 border-[#E5042F] pl-6 italic text-gray-300 my-6">
                        {children}
                      </blockquote>
                    )
                  }
                }}
              />
            )}
          </motion.div>

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 pt-8 border-t border-[#E5042F]/20"
            >
              <h3 className="text-white font-bold mb-4 flex items-center">
                <Tag className="w-5 h-5 mr-2" />
                Tags
              </h3>
              <div className="flex flex-wrap gap-3">
                {article.tags.map((tag, index) => (
                  <div 
                    key={index} 
                    className="bg-[#E5042F]/10 border border-[#E5042F]/30 px-3 py-2 text-sm text-[#E5042F] hover:bg-[#E5042F]/20 transition-colors duration-300"
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))'
                    }}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Source */}
          {article.source && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 p-6 bg-black/50 border border-[#E5042F]/30"
              style={{
                clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-[#E5042F]" />
                  <div>
                    <p className="text-white font-medium">Source</p>
                    <p className="text-gray-400 text-sm">{article.source.name}</p>
                  </div>
                </div>
                {article.source.url && (
                  <a 
                    href={article.source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E5042F] hover:text-white transition-colors duration-300 flex items-center space-x-1"
                  >
                    <span>View Original</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles && relatedArticles.length > 0 && (
        <section className="px-4 pb-12">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                <Newspaper className="w-8 h-8 mr-3 text-[#E5042F]" />
                Related Articles
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedArticles.slice(0, 3).map((relatedArticle, index) => (
                  <motion.div
                    key={relatedArticle._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  >
                    <Link href={`/news/${relatedArticle.slug.current}`}>
                      <div className="bg-black border border-[#E5042F]/30 hover:border-[#E5042F] transition-all duration-300 overflow-hidden group cursor-pointer"
                           style={{
                             clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                           }}>
                        {relatedArticle.featuredImage && (
                          <div className="relative aspect-video overflow-hidden">
                            <img
                              src={urlFor(relatedArticle.featuredImage).width(400).height(225).url()}
                              alt={relatedArticle.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        )}
                        <div className="p-4">
                          <h3 className="text-white font-bold mb-2 group-hover:text-[#E5042F] transition-colors duration-300 line-clamp-2">
                            {relatedArticle.title}
                          </h3>
                          <p className="text-gray-400 text-sm line-clamp-2">
                            {relatedArticle.shortDescription}
                          </p>
                          <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
                            <span>{timeAgo(relatedArticle.publishedAt)}</span>
                            <ChevronRight className="w-4 h-4 group-hover:text-[#E5042F] transition-colors duration-300" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}