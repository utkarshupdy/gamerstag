import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, Download, ArrowRight, Users, Target, TrendingUp } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
      </div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div 
            className="text-center lg:text-left space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm font-medium text-primary"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span>World's First Gaming Super App</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1 
              className="font-space font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Turn Your Gaming
              <br />
              Passion Into Your{" "}
              <span className="text-gradient">Income</span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              The world's first super app designed exclusively for gamers, creators, and the gaming industry. A Next-gen App which has Core features for B2B, B2C and B2B2C in a single powerful app. For anyone in gaming to Build your legacy in gaming world, connect with millions, and turn your passion into a career.
            </motion.p>

            {/* CTA buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Button 
                size="lg" 
                className="group font-semibold"
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.gamerstag', '_blank')}
              >
                <Download className="mr-2 h-5 w-5" />
                Download App
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="font-semibold">
                <Play className="mr-2 h-5 w-5" />
                Get Started
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-8 pt-8 border-t border-border/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-2 mb-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-2xl font-bold">20K+</span>
                </div>
                <p className="text-sm text-muted-foreground">Active Gamers</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-2 mb-2">
                  <Target className="h-5 w-5 text-primary" />
                  <span className="text-2xl font-bold">12</span>
                </div>
                <p className="text-sm text-muted-foreground">Core Features</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-2 mb-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span className="text-2xl font-bold">$500B+</span>
                </div>
                <p className="text-sm text-muted-foreground">Market Size</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right content - App mockup */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Main device mockup */}
              <div className="relative mx-auto w-80 h-[600px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] p-4 shadow-2xl">
                <div className="w-full h-full bg-background rounded-[1.5rem] overflow-hidden border border-border/50">
                  {/* Status bar */}
                  <div className="flex items-center justify-between px-6 py-3 bg-card border-b border-border/30">
                    <span className="text-sm font-medium">9:41</span>
                    <div className="flex space-x-1">
                      <div className="w-4 h-2 bg-primary rounded-sm" />
                      <div className="w-4 h-2 bg-primary/60 rounded-sm" />
                      <div className="w-4 h-2 bg-primary/30 rounded-sm" />
                    </div>
                  </div>
                  
                  {/* App content */}
                  <div className="p-6 space-y-6">
                    <div className="text-center">
                      <div className="w-16 h-16 gradient-bg rounded-2xl mx-auto mb-4 flex items-center justify-center">
                        <span className="text-white font-bold text-xl">GT</span>
                      </div>
                      <h3 className="font-semibold text-lg">Welcome to GT</h3>
                      <p className="text-sm text-muted-foreground">Your gaming universe awaits</p>
                    </div>
                    
                    <div className="space-y-3">
                      {["Gaming Profile", "GT Connect", "GT Jobs", "GT Arena"].map((feature, index) => (
                        <div key={feature} className="flex items-center space-x-3 p-3 professional-card rounded-lg">
                          <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                            <div className="w-2 h-2 bg-primary rounded-full" />
                          </div>
                          <span className="text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <motion.div 
                className="absolute -top-4 -right-4 professional-card p-4 rounded-xl shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Live Now</span>
                </div>
              </motion.div>

              <motion.div 
                className="absolute -bottom-4 -left-4 professional-card p-4 rounded-xl shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">10K+</div>
                  <div className="text-xs text-muted-foreground">Creators</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
