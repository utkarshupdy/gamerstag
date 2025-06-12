import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Share2, Check, Link, Globe, Users, ArrowRight, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GAccounts() {
  const socialPlatforms = [
    { name: "Twitch", color: "text-purple-400" },
    { name: "YouTube", color: "text-red-400" },
    { name: "Twitter/X", color: "text-blue-400" },
    { name: "Instagram", color: "text-pink-400" },
    { name: "TikTok", color: "text-white" },
    { name: "Discord", color: "text-indigo-400" },
    { name: "Steam", color: "text-blue-300" },
    { name: "Epic Games", color: "text-gray-300" }
  ];

  const benefits = [
    "One Link to Rule Them All: Simplify your life with a single GAMERS TAG link",
    "Accelerated Audience Growth: Easily cross-promote your channels and content",
    "Professional Brand Image: Present a clean, organized view of your brand",
    "Significant Time-Savings: Reduce effort of managing multiple online presences"
  ];

  const features = [
    { name: "Platform Sync", icon: Link, description: "Connect all your social and gaming accounts in one place" },
    { name: "Global Reach", icon: Globe, description: "Expand your audience across all platforms simultaneously" },
    { name: "Community Building", icon: Users, description: "Build stronger connections with your gaming community" },
    { name: "Brand Management", icon: Star, description: "Maintain consistent branding across all platforms" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding hero-gradient pt-24">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm font-medium text-primary mb-6">
              <Share2 className="w-4 h-4" />
              <span>GACCOUNTS</span>
            </div>
            
            <h1 className="font-space font-bold text-4xl md:text-6xl mb-6">
              Unite Your Social
              <br />
              <span className="bg-gradient-to-r from-primary via-white to-primary bg-clip-text text-transparent">
                Universe
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Link every social media, streaming, and gaming account you own into one simple, powerful hub.
            </p>
            
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Connect Accounts <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Supported Platforms */}
      <section className="section-padding bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-space font-bold text-3xl mb-6">Connect Everything</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Support for all major social and gaming platforms
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {socialPlatforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="professional-card p-6 text-center hover:scale-105 transition-transform"
              >
                <h3 className={`font-space font-bold text-lg ${platform.color}`}>{platform.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="professional-card p-6 text-center hover:scale-105 transition-transform"
              >
                <feature.icon className="w-12 h-12 mx-auto mb-3 text-primary" />
                <h3 className="font-space font-bold text-lg mb-2">{feature.name}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}