import { motion } from "framer-motion";
import { Link } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { SEOHead } from "@/components/seo-head";
import { SharpButton } from "@/components/ui/sharp-button";
import { 
  MapPin, 
  Users, 
  Award, 
  ExternalLink,
  Linkedin,
  Twitter,
  Globe,
  Star,
  TrendingUp
} from "lucide-react";

// Mentor data
const mentors = [
  {
    id: "abhinav-jain",
    name: "Abhinav Jain Ranka",
    title: "Investor, Writer & Business Enthusiast",
    company: "SVP(Finance)@CoinDCX, ExCFO-PharmEasy, Capsugel",
    location: "India",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=center",
    expertise: ["Fundraising Strategy & IPO Execution", "Mergers & Acquisitions (M&A)", "Strategic Tax Planning", "Cross-Border Accounting", "ERP Implementation", "Financial Modeling"],
    description: "Investor, Writer & Business Enthusiast | SVP(Finance)@CoinDCX, ExCFO-PharmEasy, Capsugel | #GrowthPartner - C.A., C.S. & B.Com.(H) | CA Business Leader 40Under40, BW Finance 40under40, CFO100 & FE'22 Finance Power List",
    achievements: [
      "Raised over $1.5B across Series B–E and debt lines at PharmEasy",
      "Led acquisition & integration of MedLife, Thyrocare, Aknamed, DocOn",
      "CFO Next 100 Award – Excellence in M&A (2021)",
      "Core team member in the acquisition of Thyrocare (Listed Entity)"
    ],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/abhinavjainranka"
    },
    available: true,
    featured: true
  }
];

export default function MentorList() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <>
      <SEOHead 
        title="Mentor List | GAMERS TAG"
        description="Connect with industry-leading mentors in gaming, technology, and product development. Get guidance from experienced professionals to accelerate your career."
      />
      
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        
        {/* Advanced HUD Interactive Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Grid-based HUD Lines */}
          <div className="absolute inset-0 opacity-15">
            <div 
              className="absolute inset-0" 
              style={{
                backgroundImage: `
                  linear-gradient(rgba(229, 4, 47, 0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(229, 4, 47, 0.3) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px'
              }}
            />
          </div>
          
          {/* Animated Corner Brackets */}
          <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-[#E5042F]/50"></div>
          <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-[#E5042F]/50"></div>
          <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-[#E5042F]/50"></div>
          <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-[#E5042F]/50"></div>
          
          {/* Scanning Lines */}
          <motion.div
            className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E5042F]/60 to-transparent"
            animate={{
              y: [0, 800, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Data Stream Lines */}
          <div className="absolute inset-0">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-px h-20 bg-gradient-to-b from-[#E5042F]/40 to-transparent"
                style={{
                  left: `${15 + i * 15}%`,
                  top: `${Math.random() * 20}%`
                }}
                animate={{
                  opacity: [0, 1, 0],
                  y: [0, 100, 200]
                }}
                transition={{
                  duration: 4,
                  delay: i * 0.8,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>
          
          {/* Interactive Nodes */}
          <div className="absolute inset-0">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3"
                style={{
                  left: `${20 + i * 20}%`,
                  top: `${30 + i * 15}%`
                }}
                whileHover={{ scale: 1.5 }}
              >
                <div className="w-full h-full bg-[#E5042F] rounded-full animate-pulse" />
                <div className="absolute inset-0 w-full h-full bg-[#E5042F]/30 rounded-full animate-ping" />
              </motion.div>
            ))}
          </div>
          
          {/* HUD Status Indicators */}
          <div className="absolute top-4 left-4">
            <div className="flex items-center space-x-2 text-[#E5042F] text-xs font-mono">
              <div className="w-2 h-2 bg-[#E5042F] rounded-full animate-pulse"></div>
              <span>MENTOR_NETWORK_ACTIVE</span>
            </div>
          </div>
          
          <div className="absolute top-4 right-4">
            <div className="flex items-center space-x-2 text-[#E5042F] text-xs font-mono">
              <span>CONN_STATUS: SECURED</span>
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            </div>
          </div>
          
          {/* Subtle Glow Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#E5042F]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#E5042F]/4 rounded-full blur-3xl"></div>
          </div>
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Hero Section */}
        <section className="relative py-24 px-4 overflow-hidden">
          
          <div className="relative max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center space-x-2 mb-6">
                <div className="w-3 h-3 bg-[#E5042F] rounded-full animate-pulse"></div>
                <span className="text-[#E5042F] font-bold tracking-wider text-sm">MENTOR NETWORK</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                Expert Mentors
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
                Meet the Gamer Tag Mentors Who Champion Our Progress
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mentors Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {mentors.map((mentor, index) => (
                <motion.div key={mentor.id} variants={itemVariants}>
                  <Link href={`/mentors/${mentor.id}`}>
                    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-[#E5042F]/50 transition-all duration-300 cursor-pointer group">
                      {/* Mentor Image */}
                      <div className="relative mb-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-[#E5042F] to-red-600 rounded-full mx-auto flex items-center justify-center">
                          <Users className="w-10 h-10 text-white" />
                        </div>
                        {mentor.available && (
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                          </div>
                        )}
                      </div>

                      {/* Mentor Info */}
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#E5042F] transition-colors">
                          {mentor.name}
                        </h3>
                        <p className="text-[#E5042F] font-medium mb-2">{mentor.title}</p>
                        <p className="text-gray-400 text-sm mb-4">{mentor.company}</p>
                        
                        {/* Location */}
                        <div className="flex items-center justify-center text-gray-500 text-sm mb-4">
                          <MapPin className="w-4 h-4 mr-1" />
                          {mentor.location}
                        </div>

                        {/* Expertise Tags */}
                        <div className="flex flex-wrap gap-2 justify-center mb-6">
                          {mentor.expertise.slice(0, 3).map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-[#E5042F]/20 text-[#E5042F] text-xs rounded-full border border-[#E5042F]/30"
                            >
                              {skill}
                            </span>
                          ))}
                          {mentor.expertise.length > 3 && (
                            <span className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                              +{mentor.expertise.length - 3} more
                            </span>
                          )}
                        </div>

                        {/* CTA */}
                        <SharpButton 
                          variant="red" 
                          size="sm"
                          className="w-full group-hover:scale-105 transition-transform"
                        >
                          View Profile
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </SharpButton>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Mentor Section */}
        <section className="py-16 px-4 bg-gray-900/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Featured <span className="text-[#E5042F]">Strategic Mentor</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Learn from industry veterans who are shaping the future of gaming and technology
              </p>
            </motion.div>

            {mentors.filter(mentor => mentor.featured).map((mentor, index) => (
              <motion.div
                key={mentor.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="bg-gradient-to-r from-gray-900/80 to-[#E5042F]/10 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm">
                  <div className="grid lg:grid-cols-3 gap-8 items-center">
                    {/* Mentor Photo */}
                    <div className="text-center lg:text-left">
                      <div className="w-32 h-32 bg-gradient-to-br from-[#E5042F] to-red-600 rounded-full mx-auto lg:mx-0 mb-6 flex items-center justify-center">
                        <Star className="w-16 h-16 text-white" />
                      </div>
                      
                      {/* Social Links */}
                      <div className="flex justify-center lg:justify-start space-x-4">
                        {mentor.socialLinks.linkedin && (
                          <a
                            href={mentor.socialLinks.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
                          >
                            <Linkedin className="w-5 h-5 text-white" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Mentor Details */}
                    <div className="lg:col-span-2">
                      <h3 className="text-3xl font-bold text-white mb-2">{mentor.name}</h3>
                      <p className="text-[#E5042F] font-semibold text-lg mb-2">{mentor.title}</p>
                      <p className="text-gray-400 mb-6">{mentor.company}</p>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {mentor.description}
                      </p>

                      {/* Key Achievements */}
                      <div className="space-y-3">
                        <h4 className="text-white font-semibold text-lg">Key Achievements</h4>
                        {mentor.achievements.map((achievement, achievementIndex) => (
                          <div key={achievementIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-[#E5042F] rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-300 text-sm">{achievement}</p>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="mt-8">
                        <Link href={`/mentors/${mentor.id}`}>
                          <SharpButton variant="red" size="lg">
                            View Full Profile
                            <ExternalLink className="w-5 h-5 ml-2" />
                          </SharpButton>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}