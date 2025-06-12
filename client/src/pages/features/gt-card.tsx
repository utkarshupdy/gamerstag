import { SEOHead } from '@/components/seo-head';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Badge } from '@/components/ui/badge';
import { CreditCard, Wallet, Star, Gift, Zap, Shield, DollarSign, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: CreditCard,
    title: "Digital Gaming Card",
    description: "Your all-in-one gaming identity card with digital wallet functionality, tournament access, and premium gaming perks."
  },
  {
    icon: Wallet,
    title: "Integrated Wallet",
    description: "Securely store gaming currencies, tournament winnings, and make instant transactions within the gaming ecosystem."
  },
  {
    icon: Star,
    title: "Exclusive Benefits",
    description: "Unlock premium features, early access to games, exclusive tournaments, and special discounts from gaming partners."
  },
  {
    icon: Gift,
    title: "Reward System",
    description: "Earn points for gaming activities, tournament participation, and achievements that can be redeemed for real rewards."
  },
  {
    icon: Zap,
    title: "Instant Transactions",
    description: "Lightning-fast payments for tournament entries, gaming purchases, and peer-to-peer transactions."
  },
  {
    icon: Shield,
    title: "Secure & Verified",
    description: "Bank-level security with multi-factor authentication and verified gaming identity protection."
  }
];

const cardTiers = [
  {
    name: "Bronze GT Card",
    benefits: ["Basic wallet functionality", "Tournament access", "Community features", "Achievement tracking"],
    color: "from-amber-600 to-amber-800"
  },
  {
    name: "Silver GT Card",
    benefits: ["Enhanced rewards", "Priority support", "Exclusive tournaments", "Advanced analytics", "Partner discounts"],
    color: "from-gray-400 to-gray-600"
  },
  {
    name: "Gold GT Card",
    benefits: ["Premium benefits", "VIP access", "Coaching sessions", "Sponsorship opportunities", "Custom branding"],
    color: "from-yellow-400 to-yellow-600"
  },
  {
    name: "Platinum GT Card",
    benefits: ["All features unlocked", "Personal manager", "Elite tournaments", "Revenue sharing", "Brand partnerships"],
    color: "from-purple-400 to-purple-600"
  }
];

export default function GTCard() {
  return (
    <>
      <SEOHead
        title="GT Card - GAMERS TAG | Digital Gaming Payment Card"
        description="Discover the GT Card - your digital gaming payment solution with integrated wallet, tournament access, and exclusive gaming benefits."
        keywords="gaming card, digital wallet, gaming payments, esports card, tournament payments, gaming currency"
        url="/features/gt-card"
      />
      
      <div className="min-h-screen relative overflow-hidden" style={{background: 'linear-gradient(135deg, #000000 0%, #171717 50%, #000000 100%)'}}>
        <Navigation />
        
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 text-center">
          <div className="relative max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 px-6 py-3 mb-8 border border-[#E5042F]/30 rounded-full bg-black/20 backdrop-blur-sm">
                <CreditCard className="w-5 h-5 text-[#E5042F]" />
                <span className="text-white font-medium">GT Card System</span>
                <div className="w-2 h-2 bg-[#E5042F] rounded-full animate-pulse"></div>
              </div>
              
              <h1 className="font-orbitron font-bold text-5xl md:text-7xl mb-6">
                <span className="text-white">Your Gaming </span>
                <span className="text-white">Wallet</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                The GT Card is your all-in-one gaming payment solution. Store funds, make instant transactions, access exclusive tournaments, and unlock premium gaming benefits.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center mb-12">
                <Badge className="bg-[#E5042F]/10 border-[#E5042F]/30 text-[#E5042F] text-lg px-6 py-2">
                  <Wallet className="w-5 h-5 mr-2" />
                  Digital Wallet
                </Badge>
                <Badge className="bg-[#E5042F]/10 border-[#E5042F]/30 text-[#E5042F] text-lg px-6 py-2">
                  <DollarSign className="w-5 h-5 mr-2" />
                  Instant Payments
                </Badge>
                <Badge className="bg-[#E5042F]/10 border-[#E5042F]/30 text-[#E5042F] text-lg px-6 py-2">
                  <Award className="w-5 h-5 mr-2" />
                  Exclusive Benefits
                </Badge>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="px-4 pb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="hud-box p-6 h-full">
                    <div className="flex items-center mb-4">
                      <feature.icon className="w-8 h-8 text-[#E5042F] mr-3" />
                      <h3 className="text-xl font-bold text-white font-orbitron">{feature.title}</h3>
                    </div>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Card Tiers Section */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hud-box p-8"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center font-orbitron">
                <span className="text-white">GT Card Tiers</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cardTiers.map((tier, index) => (
                  <div key={index} className="hud-box p-6">
                    <div className={`w-full h-32 bg-gradient-to-br ${tier.color} rounded-lg mb-4 flex items-center justify-center`}>
                      <span className="text-white font-bold text-lg font-orbitron">{tier.name}</span>
                    </div>
                    <ul className="space-y-2">
                      {tier.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-[#E5042F] rounded-full mr-2"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}