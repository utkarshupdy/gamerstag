import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { SEOHead } from "@/components/seo-head";
import { CyberpunkHUD } from "@/components/CyberpunkHUD";
import { CyberpunkBox } from "@/components/CyberpunkBox";
import { 
  Zap, 
  Play, 
  Users, 
  Heart, 
  Target, 
  TrendingUp,
  Gamepad2,
  Sparkles,
  Eye,
  Film,
  Star
} from "lucide-react";

export default function NextGenOnboarding() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const problems = [
    {
      title: "Boring First Impressions",
      description: "Standard app registrations are dull and immediately disengage users.",
      icon: Eye
    },
    {
      title: "Lack of Excitement", 
      description: "Other platforms fail to capture the energy and passion of the gaming community from the start.",
      icon: Heart
    }
  ];

  const benefits = [
    {
      title: "Instant Immersion",
      description: "Feel the excitement of gaming from the moment you open the GAMERS TAG app.",
      icon: Zap
    },
    {
      title: "Memorable Start",
      description: "A fun and engaging beginning makes you want to explore everything the platform offers.",
      icon: Star
    },
    {
      title: "Gamer-Centric Design",
      description: "Immediately shows that GAMERS TAG understands and celebrates gamer culture.",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <SEOHead 
        title="Next-Gen Gaming Onboarding - GAMERS TAG"
        description="Experience the most cinematic and gamified onboarding process. Step into the GAMERS TAG universe with an unforgettable journey."
      />
      
      {/* Interactive Dark Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20">
          <div className="grid-pattern animate-pulse"></div>
        </div>
        
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#E5042F]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/5 w-80 h-80 bg-[#E5042F]/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 right-1/5 w-64 h-64 bg-[#E5042F]/6 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
        
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#E5042F] to-transparent animate-pulse"></div>
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#E5042F] to-transparent animate-pulse" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#E5042F] to-transparent animate-pulse" style={{top: '25%', animationDelay: '0.8s'}}></div>
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#E5042F] to-transparent animate-pulse" style={{top: '75%', animationDelay: '2.2s'}}></div>
        </div>
        
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 text-center overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 px-6 py-3 mb-8 border border-[#E5042F]/30 rounded-full bg-black/20 backdrop-blur-sm">
              <Play className="w-5 h-5 text-[#E5042F]" />
              <span className="text-white font-medium">Feature 2</span>
              <div className="w-2 h-2 bg-[#E5042F] rounded-full animate-pulse"></div>
            </div>
            
            <h1 className="font-orbitron font-bold text-5xl md:text-7xl mb-6">
              <span className="text-white">NEXT-GEN GAMING </span>
              <span className="text-white">ONBOARDING</span>
            </h1>
            
            <motion.div
              className="text-2xl md:text-3xl text-[#E5042F] font-bold mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              "Cinematic | Gamified | Unforgettable."
            </motion.div>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Step directly into the GAMERS TAG universe with an exciting, game-like onboarding experience you won't find anywhere else.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About This Feature */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <CyberpunkBox variant="terminal" className="p-8">
              <div className="flex items-center mb-6">
                <Film className="w-8 h-8 text-[#E5042F] mr-4" />
                <h2 className="text-3xl font-orbitron font-bold text-white">About This Feature</h2>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                We believe your journey on GAMERS TAG should feel like an adventure from the very first second. We replaced boring sign-up forms with a cinematic, gamified onboarding process. You're not just joining an app; you're entering the world of next-gen gaming. This unforgettable introduction shows GAMERS TAG is built by gamers, for gamers. It's the most immersive onboarding experience for gamers.
              </p>
            </CyberpunkBox>
          </motion.div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-orbitron font-bold text-white mb-4">
              Problems This Feature <span className="text-white">Solves</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {problems.map((problem, index) => {
              const IconComponent = problem.icon;
              return (
                <motion.div
                  key={problem.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <CyberpunkBox variant="hud" className="p-6 h-full">
                    <IconComponent className="w-12 h-12 text-[#E5042F] mb-4" />
                    <h3 className="text-xl font-bold text-white mb-3">{problem.title}</h3>
                    <p className="text-gray-300">{problem.description}</p>
                  </CyberpunkBox>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-orbitron font-bold text-white mb-4">
              Key <span className="text-white">Benefits</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <CyberpunkBox variant="panel" className="p-6 h-full" glowOnHover>
                    <IconComponent className="w-12 h-12 text-[#E5042F] mb-4" />
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </CyberpunkBox>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Future Journey */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <CyberpunkHUD variant="gaming" className="p-8">
              <div className="flex items-center mb-6">
                <Sparkles className="w-8 h-8 text-[#E5042F] mr-4" />
                <h2 className="text-3xl font-orbitron font-bold text-white">Feature Future Journey</h2>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                The mission of the NEXT-GEN GAMING ONBOARDING EXPERIENCE is to redefine the initial user journey, making it an exhilarating entry into the GAMERS TAG ecosystem. We aim to create the most immersive and gamified onboarding process globally, setting the standard for user engagement.
              </p>
              <div className="text-[#E5042F] font-bold text-xl">
                Our vision is to ensure every new user feels instantly connected, recognizing GAMERS TAG as the best gaming platform with unique onboarding and the most exciting onboarding experience for gamers.
              </div>
            </CyberpunkHUD>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}