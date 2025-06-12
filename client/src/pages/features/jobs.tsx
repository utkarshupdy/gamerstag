import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { SEOHead } from '@/components/seo-head';
import { EnhancedCard } from '@/components/EnhancedCard';
import { EnhancedButton } from '@/components/EnhancedButton';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Check, Target, Rocket, Users, ArrowRight, Zap, Building, Heart, Download, Search, Bell, MessageCircle, Star, Calendar, Filter, Globe } from "lucide-react";

export default function Jobs() {
  const subFeatures = [
    {
      icon: Zap,
      title: "Quick Apply",
      description: "Resume upload and fast Q&A answering for efficient applications"
    },
    {
      icon: Globe,
      title: "Global Jobs",
      description: "Access local and global job opportunities within the app"
    },
    {
      icon: MessageCircle,
      title: "One-Tap Share",
      description: "Share jobs easily via WhatsApp, Telegram, and other platforms"
    },
    {
      icon: Bell,
      title: "Real-Time Status",
      description: "Track the progress of your job applications"
    },
    {
      icon: Users,
      title: "Recruiter Chat",
      description: "In-app chat functionality to communicate directly with job posters"
    },
    {
      icon: Star,
      title: "Save Jobs",
      description: "Bookmark jobs to apply for later"
    },
    {
      icon: Target,
      title: "Easy Job Apply",
      description: "Instant job application feature"
    },
    {
      icon: Building,
      title: "Job Profile",
      description: "Set up your job profile for streamlined application processes"
    }
  ];

  const jobCategories = [
    { 
      name: "Game Development", 
      icon: Rocket, 
      count: "500+",
      description: "Unity, Unreal Engine, Programming, Art & Design"
    },
    { 
      name: "Esports Teams", 
      icon: Users, 
      count: "200+",
      description: "Professional Players, Coaches, Analysts, Managers"
    },
    { 
      name: "Content Creation", 
      icon: Heart, 
      count: "300+",
      description: "Streamers, Video Editors, Social Media, Community"
    },
    { 
      name: "Gaming Companies", 
      icon: Building, 
      count: "150+",
      description: "Marketing, Business Development, Operations, Support"
    }
  ];

  const benefits = [
    "Access to exclusive gaming industry job listings from top companies",
    "Apply instantly with your comprehensive GAMERS TAG professional profile",
    "Get matched with opportunities that align with your gaming expertise",
    "Connect with industry leaders and hiring managers directly",
    "Track your application progress and get feedback from employers",
    "Build your professional gaming network and advance your career"
  ];

  return (
    <>
      <SEOHead
        title="GT Jobs - Best Gaming Jobs Platform in India & World | GAMERS TAG"
        description="Find your dream gaming career with GT Jobs - India's premier gaming and esports job platform. Access 1000+ jobs from top gaming companies worldwide. Best gaming platform in India and best esports platform in the world."
        keywords="gaming jobs India, esports jobs, gaming careers, game developer jobs, esports jobs India, gaming industry jobs, best gaming platform India, best esports platform world, gaming jobs platform, esports careers"
        url="/features/jobs"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <section className="relative pt-32 pb-20 px-4 text-center overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10 bg-grid-pattern opacity-20" />
          <div className="relative max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="secondary" className="mb-6 text-lg px-6 py-2">
                <Briefcase className="w-5 h-5 mr-2" />
                GT Jobs - Career Platform
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Apply for Top Gaming & Tech Jobs
              </h1>
              <p className="text-2xl text-green-400 font-semibold mb-4">
                "Work in the industry you love. Apply for Top Gaming & Tech Jobs."
              </p>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Your dream career in gaming is now within reach. The GAMERS TAG Jobs portal is the ultimate destination for finding and applying for jobs in the gaming and tech industries. We connect passionate gamers like you with top companies and esports teams. Browse exclusive listings for roles in development, marketing, and more, and apply instantly with your professional GAMERS TAG profile.
              </p>
              <div className="flex flex-wrap gap-4 justify-center mb-12">
                <EnhancedButton size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                  <Search className="w-5 h-5 mr-2" />
                  Apply for GT Jobs Feature
                </EnhancedButton>
                <EnhancedButton 
                  size="lg" 
                  variant="outline"
                  className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
                  onClick={() => window.open('https://play.google.com/store/apps/details?id=com.gamerstag.app', '_blank')}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download GAMERS TAG App
                </EnhancedButton>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                India's Best Gaming Jobs Platform
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                GT Jobs is the ultimate destination for gaming professionals in India and worldwide. As the best gaming platform in India and premier esports platform globally, we connect talented gamers with top opportunities in the industry.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <EnhancedCard className="p-8" hoverEffect="glow">
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose GT Jobs?</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </EnhancedCard>

              <EnhancedCard className="p-8" hoverEffect="lift">
                <h3 className="text-2xl font-bold text-white mb-6">Platform Highlights</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">1000+</div>
                    <div className="text-gray-300">Active Job Listings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">500+</div>
                    <div className="text-gray-300">Gaming Companies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">50K+</div>
                    <div className="text-gray-300">Successful Placements</div>
                  </div>
                </div>
              </EnhancedCard>
            </div>
          </div>
        </section>

        {/* Problems We Solve */}
        <section className="py-20 px-4 bg-black/10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Problems We Solve
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Traditional gaming job searches have major pain points that GT Jobs addresses.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <EnhancedCard className="p-8 text-center" hoverEffect="lift">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Jobs are Hard to Find</h3>
                  <p className="text-gray-300">
                    Gaming industry jobs are hidden on countless different websites.
                  </p>
                </EnhancedCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <EnhancedCard className="p-8 text-center" hoverEffect="lift">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Tough to Get Noticed</h3>
                  <p className="text-gray-300">
                    It's difficult to stand out and show your passion through a traditional resume.
                  </p>
                </EnhancedCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <EnhancedCard className="p-8 text-center" hoverEffect="lift">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">A Confusing Path</h3>
                  <p className="text-gray-300">
                    The road to a professional gaming career often seems unclear and full of obstacles.
                  </p>
                </EnhancedCard>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-black/20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful Job Search Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the most advanced gaming job platform with features designed for the modern gaming professional.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <EnhancedCard className="p-6 h-full text-center" hoverEffect="scale">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </EnhancedCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Gaming Career Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore opportunities across all sectors of the gaming industry.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {jobCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <EnhancedCard className="p-6 text-center" hoverEffect="glow">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                    <div className="text-2xl font-bold text-cyan-400 mb-3">{category.count}</div>
                    <p className="text-gray-300 text-sm">{category.description}</p>
                  </EnhancedCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-r from-purple-900/50 to-blue-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Start Your Gaming Career?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of gaming professionals who have found their dream jobs through GAMERS TAG.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <EnhancedButton size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                  <Target className="w-5 h-5 mr-2" />
                  Apply for GT Jobs Feature
                </EnhancedButton>
                <EnhancedButton 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black"
                  onClick={() => window.open('mailto:contactus@gamerstag.in?subject=GT Jobs Feature Application', '_blank')}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact Us
                </EnhancedButton>
              </div>
              <p className="text-gray-400 mt-6">
                Questions? Email us at <a href="mailto:contactus@gamerstag.in" className="text-cyan-400 hover:text-cyan-300">contactus@gamerstag.in</a>
              </p>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}