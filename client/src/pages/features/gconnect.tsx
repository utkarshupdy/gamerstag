import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Link2, Check, Gamepad2, Users, Target, ArrowRight, Zap, Globe, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GConnect() {
  const problems = [
    "Messy Game IDs: Sharing different game IDs for different titles is confusing and inefficient",
    "Finding Teammates is Hard: Connecting with the right players for a specific game is often left to chance",
    "Hidden Skills: Your talent in various games goes unnoticed because there's no single place to show it all off"
  ];

  const benefits = [
    "Build Your Gaming Portfolio: Create an impressive display of all the games you play, right on your GAMERS TAG profile",
    "Connect Faster: Make it simple for friends and potential teammates to add you in-game",
    "Strengthen Community: Find and connect with other GAMERS TAG users who play the same games as you"
  ];

  const features = [
    "Connect all gaming platforms",
    "Real-time profile synchronization", 
    "Cross-platform friend discovery",
    "Unified gaming identity",
    "Gaming history aggregation",
    "Game-specific ID management",
    "Team formation tools"
  ];

  const gameCategories = [
    { name: "Mobile Gaming", icon: Gamepad2, count: "50+" },
    { name: "PC Gaming", icon: Globe, count: "200+" },
    { name: "Console Gaming", icon: Trophy, count: "100+" },
    { name: "VR Gaming", icon: Target, count: "25+" }
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
              <Link2 className="w-4 h-4" />
              <span>Feature Overview</span>
            </div>
            <h1 className="font-space font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              GCONNECT <span className="text-white">Gaming Universe</span>
            </h1>
            <p className="text-xl text-primary font-semibold leading-relaxed max-w-3xl mx-auto mb-4">
              "All your gaming worlds now in one place. Unite Your Gaming Universe."
            </p>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
              Show the world every game you dominate. GConnect by GAMERS TAG lets you add all your specific in-game accounts and IDs to your professional profile. Whether it's Efootball 24 Mobile or any other title, you can create a card for it, displaying your in-game name and ID for everyone to see. This makes it incredibly easy for others to find you, add you, and challenge you in the games you love. It's the ultimate gaming profile builder and connect with gamers easily.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Feature Section */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="font-space font-bold text-3xl mb-6">About This Feature</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Show the world every game you dominate. GConnect by GAMERS TAG lets you add all your specific in-game accounts and IDs to your professional profile. Whether it's Efootball 24 Mobile or any other title, you can create a card for it, displaying your in-game name and ID for everyone to see.
                </p>
                <p>
                  This makes it incredibly easy for others to find you, add you, and challenge you in the games you love.
                </p>
              </div>
            </div>
            <div className="professional-card p-8 bg-gradient-to-br from-primary/5 to-secondary/5">
              <div className="flex items-center mb-6">
                <Gamepad2 className="w-8 h-8 text-primary mr-3" />
                <h3 className="font-space font-bold text-xl">Gaming Features</h3>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gaming Categories Section */}
      <section className="section-padding bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-space font-bold text-3xl mb-6">Supported Gaming Platforms</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Connect your gaming accounts across all platforms and devices
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gameCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="professional-card p-6 text-center hover:scale-105 transition-transform"
              >
                <category.icon className="w-12 h-12 mx-auto mb-3 text-primary" />
                <h3 className="font-space font-bold text-lg mb-2">{category.name}</h3>
                <p className="text-muted-foreground text-sm">{category.count} Games</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-space font-bold text-3xl mb-6">Problems This Feature Solves</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Gaming identity fragmentation prevents players from showcasing their full potential
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="professional-card p-6 text-center"
              >
                <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-red-400" />
                </div>
                <p className="text-muted-foreground leading-relaxed">{problem}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-space font-bold text-3xl mb-6">Benefits</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Build a comprehensive gaming portfolio that showcases your skills across all platforms
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="professional-card p-6 flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Link2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground leading-relaxed">{benefit}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-space font-bold text-3xl mb-6">Ready to Unite Your Gaming Universe?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Connect all your gaming accounts and show the world the full scope of your gaming expertise.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Connect Your Games
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}