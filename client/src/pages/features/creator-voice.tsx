import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Mic, Check, PenTool, Globe, Users, ArrowRight, Zap, Trophy, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CreatorVoice() {
  const problems = [
    "No Platform for Your Voice: Individual gamers and analysts have few places to publish their insights for a large, relevant audience",
    "High Barrier to Content Creation: Getting started as a gaming creator can be intimidating and difficult",
    "Limited Reach: It's hard to get your content in front of the right people in the gaming community"
  ];

  const benefits = [
    "Become an Influencer: Use the GAMERS TAG platform to build your brand and become a known voice in the gaming world",
    "Share Your Passion: Publish content about the games and topics you love, and connect with an audience that shares your interests",
    "Unlock New Opportunities: A strong creator profile on GAMERS TAG can lead to sponsorships, partnerships, and career offers"
  ];

  const features = [
    "Content publishing platform",
    "Audience building tools",
    "Analytics and insights",
    "Community engagement features",
    "Monetization opportunities",
    "Cross-platform promotion",
    "Creator collaboration tools"
  ];

  const contentTypes = [
    { name: "Gaming Analysis", icon: PenTool, description: "Deep dives into game mechanics and industry trends" },
    { name: "Breaking Stories", icon: Zap, description: "Be first to break gaming news and exclusives" },
    { name: "Community Content", icon: Users, description: "Engage with and build gaming communities" },
    { name: "Global Reach", icon: Globe, description: "Share your voice with gamers worldwide" }
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
              <Mic className="w-4 h-4" />
              <span>Feature Overview</span>
            </div>
            <h1 className="font-space font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              Your Voice, Your News, Your <span className="text-white">Stage</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
              "Break stories in gaming, tech & esports before anyone else. Your Voice. Your News. Your Stage."
            </p>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              GAMERS TAG gives you the power to become a creator, providing a global stage to share your voice, publish your news, and build your own brand.
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
                  On GAMERS TAG, you are more than a user—you are a creator. This feature gives you a powerful stage to share your own stories, analysis, and news with the global gaming community. Build your reputation, grow your audience, and establish yourself as an expert.
                </p>
                <p>
                  GAMERS TAG is committed to giving every voice a platform to thrive and turn their love for gaming into a recognized and respected profession.
                </p>
              </div>
            </div>
            <div className="professional-card p-8 bg-gradient-to-br from-primary/5 to-secondary/5">
              <div className="flex items-center mb-6">
                <Star className="w-8 h-8 text-primary mr-3" />
                <h3 className="font-space font-bold text-xl">Creator Tools</h3>
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

      {/* Content Types Section */}
      <section className="section-padding bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-space font-bold text-3xl mb-6">Content Creation Opportunities</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Share your expertise and passion across multiple content formats
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contentTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="professional-card p-6 text-center hover:scale-105 transition-transform"
              >
                <type.icon className="w-12 h-12 mx-auto mb-3 text-primary" />
                <h3 className="font-space font-bold text-lg mb-2">{type.name}</h3>
                <p className="text-muted-foreground text-sm">{type.description}</p>
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
              Aspiring gaming creators struggle to find platforms that understand their audience
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
                  <Mic className="w-6 h-6 text-red-400" />
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
              Transform your gaming knowledge into influence and opportunities
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
                  <Trophy className="w-6 h-6 text-primary" />
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
            <h2 className="font-space font-bold text-3xl mb-6">Ready to Become a Gaming Creator?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start sharing your voice and building your brand on the platform that celebrates gaming creators.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start Creating
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}