import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { MessageCircle, Check, Zap, Users, Gamepad2, ArrowRight, Star, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Chats() {
  const problems = [
    "Dull Communication: Generic chat apps lack the energy and features that gamers expect",
    "Disjointed Experience: Constantly switching between a game and a separate chat app breaks your focus",
    "Weak Community Tools: It's hard to build a real community using basic, non-gaming chat platforms"
  ];

  const benefits = [
    "Chat Like a Gamer: Use a chat system that speaks your language and fits seamlessly into your gaming life",
    "Stay Engaged: Interactive and gamified elements make every conversation on GAMERS TAG more fun",
    "Build Your Network: Easily connect and coordinate with your team, fans, and other professionals within the GAMERS TAG ecosystem"
  ];

  const features = [
    "Ultra-fast messaging system",
    "Gamified chat elements",
    "Team coordination tools",
    "Voice and video calls",
    "Gaming-specific emojis and reactions",
    "Group management features",
    "Real-time activity status"
  ];

  const chatFeatures = [
    { name: "Lightning Speed", icon: Zap, description: "Instant message delivery for real-time gaming coordination" },
    { name: "Team Channels", icon: Users, description: "Dedicated spaces for your gaming teams and communities" },
    { name: "Gaming Focus", icon: Gamepad2, description: "Built specifically for gaming conversations and coordination" },
    { name: "Achievement Integration", icon: Trophy, description: "Share and celebrate gaming achievements directly in chat" }
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
              <MessageCircle className="w-4 h-4" />
              <span>GT CHATS</span>
            </div>
            
            <h1 className="font-space font-bold text-4xl md:text-6xl mb-6">
              Gaming Communication
              <br />
              <span className="bg-gradient-to-r from-primary via-white to-primary bg-clip-text text-transparent">
                Revolution
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Experience a chat system built exclusively for gamers, making communication faster, more fun, and more interactive.
            </p>
            
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start Chatting <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Chat Features Grid Section */}
      <section className="section-padding bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-space font-bold text-3xl mb-6">Built for Gamers</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Every aspect of GT Chats is designed with gaming communities in mind
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {chatFeatures.map((feature, index) => (
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