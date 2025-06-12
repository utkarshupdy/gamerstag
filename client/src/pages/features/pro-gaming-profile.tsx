import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { SEOHead } from "@/components/seo-head";
import { CyberpunkHUD } from "@/components/CyberpunkHUD";
import { CyberpunkBox } from "@/components/CyberpunkBox";
import { 
  User, 
  Trophy, 
  Star, 
  Target, 
  TrendingUp, 
  Award,
  Shield,
  Users,
  Gamepad2,
  Eye,
  Zap,
  Crown
} from "lucide-react";

export default function ProGamingProfile() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const problems = [
    {
      title: "Anonymity",
      description: "Your gaming talent is hidden behind different aliases across various games.",
      icon: Eye
    },
    {
      title: "Lack of Credibility", 
      description: "It's hard to prove your skills and build a professional reputation in a fragmented online world.",
      icon: Shield
    },
    {
      title: "Missed Opportunities",
      description: "Without a central profile, brands, teams, and fans can't see your full potential.",
      icon: Target
    }
  ];

  const benefits = [
    {
      title: "Gain Recognition",
      description: "Create a professional gamer profile that makes you stand out to esports teams and sponsors.",
      icon: Trophy
    },
    {
      title: "Build Your Brand",
      description: "Control your narrative and build a powerful gaming identity that opens doors to new opportunities.",
      icon: Crown
    },
    {
      title: "Unified Presence",
      description: "Consolidate your entire gaming life into one impressive GAMERS TAG profile.",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <SEOHead 
        title="Pro Gaming Profile - GAMERS TAG"
        description="Create your ultimate professional gamer profile with GAMERS TAG. Build your unique gaming identity and get noticed in the esports world."
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
              <User className="w-5 h-5 text-[#E5042F]" />
              <span className="text-white font-medium">Feature 1</span>
              <div className="w-2 h-2 bg-[#E5042F] rounded-full animate-pulse"></div>
            </div>
            
            <h1 className="font-orbitron font-bold text-5xl md:text-7xl mb-6">
              <span className="text-white">Pro </span>
              <span className="text-white">GAMING PROFILE</span>
            </h1>
            
            <motion.div
              className="text-2xl md:text-3xl text-[#E5042F] font-bold mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              "Build your unique, Be known."
            </motion.div>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Forge your ultimate professional gamer profile with GAMERS TAG, creating a powerful gaming identity to get noticed in the esports and gaming world.
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
                <Gamepad2 className="w-8 h-8 text-[#E5042F] mr-4" />
                <h2 className="text-3xl font-orbitron font-bold text-white">About This Feature</h2>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                Your GAMERS TAG profile is your master key to the gaming industry. It's a professional portfolio showcasing your skills, experience, and achievements across games. Link all your accounts, display your unique GTID, and build a powerful personal brand. This central hub helps you connect, grow, and turn your gaming passion into a recognized career. It's the best way to brand yourself as a professional gamer and get discovered in esports.
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

          <div className="grid md:grid-cols-3 gap-8">
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
            <CyberpunkBox variant="panel" className="p-8" glowOnHover>
              <div className="flex items-center mb-6">
                <Zap className="w-8 h-8 text-[#E5042F] mr-4" />
                <h2 className="text-3xl font-orbitron font-bold text-white">Feature Future Journey</h2>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                The mission of Pro GAMING PROFILE is to empower every gamer to transform their passion into a recognized profession, establishing the most comprehensive and impactful digital identity for gaming talent worldwide. We aim to provide a dynamic platform where gamers showcase their entire journey.
              </p>
              <div className="text-[#E5042F] font-bold text-xl">
                Our vision is to be the global standard for professional gaming profiles, the best gaming portfolio platform in the world, and the ultimate tool for esports athletes to build their personal brand.
              </div>
            </CyberpunkBox>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}