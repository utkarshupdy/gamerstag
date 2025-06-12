import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Star, Linkedin, ExternalLink, Award, Users, Building2, TrendingUp, Target } from "lucide-react";

const mentors = [
  {
    id: "abhinav-jain",
    name: "Abhinav Jain Ranka",
    role: "Investor, Writer & Business Enthusiast",
    company: "SVP(Finance)@CoinDCX, ExCFO-PharmEasy, Capsugel",
    bio: "Investor, Writer & Business Enthusiast | SVP(Finance)@CoinDCX, ExCFO-PharmEasy, Capsugel | #GrowthPartner - C.A., C.S. & B.Com.(H) | CA Business Leader 40Under40, BW Finance 40under40, CFO100 & FE'22 Finance Power List",
    linkedin: "https://www.linkedin.com/in/abhinavjainranka",
    expertise: ["Fundraising Strategy & IPO Execution", "Mergers & Acquisitions (M&A)", "Strategic Tax Planning", "Cross-Border Accounting", "ERP Implementation", "Financial Modeling"],
    achievements: [
      "Raised over $1.5B across Series B–E and debt lines at PharmEasy",
      "Led acquisition & integration of MedLife, Thyrocare, Aknamed, DocOn",
      "CFO Next 100 Award – Excellence in M&A (2021)",
      "Core team member in the acquisition of Thyrocare (Listed Entity)"
    ],
    focus: "Investment & Financial Strategy",
    impact: "Providing strategic financial guidance and mentorship to startup founders and finance professionals",
    available: true,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=center"
  }
];

const mentorshipPrograms = [
  {
    icon: Target,
    title: "Strategic Guidance",
    description: "Long-term strategic planning and market positioning advice from industry veterans",
    benefits: ["Market Analysis", "Growth Strategy", "Competitive Positioning"]
  },
  {
    icon: Users,
    title: "Network Access",
    description: "Access to extensive networks of industry professionals, investors, and partners",
    benefits: ["Industry Connections", "Partnership Opportunities", "Investor Relations"]
  },
  {
    icon: TrendingUp,
    title: "Growth Acceleration",
    description: "Proven strategies and frameworks for scaling gaming platforms and businesses",
    benefits: ["Scaling Strategies", "Operational Excellence", "Performance Metrics"]
  },
  {
    icon: Building2,
    title: "Industry Expertise",
    description: "Deep domain knowledge across gaming, technology, and business development",
    benefits: ["Technical Insights", "Market Trends", "Best Practices"]
  }
];

export default function Mentors() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
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
            y: [0, window.innerHeight || 800, 0]
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
      <section className="relative pt-32 pb-20 px-4 text-center overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm font-medium text-primary mb-6">
              <Star className="w-4 h-4" />
              <span>Our Mentors</span>
            </div>
            <h1 className="font-space font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              Guided By{" "}
              <span className="text-gradient">Industry Leaders</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              GAMERS TAG is shaped by the wisdom and experience of industry veterans who believe in our mission to revolutionize the gaming ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lead Mentor Section */}
      <section className="section-padding" ref={ref}>
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-space font-bold text-4xl mb-6">Strategic Mentor</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the Gamer Tag Mentors Who Champion Our Progress
            </p>
          </motion.div>

          {mentors.map((mentor, index) => (
            <motion.div
              key={mentor.name}
              className="max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="professional-card p-12">
                <div className="grid lg:grid-cols-3 gap-12 items-start">
                  {/* Mentor Profile */}
                  <div className="text-center lg:text-left">
                    <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto lg:mx-0 mb-6 flex items-center justify-center">
                      <Star className="w-16 h-16 text-white" />
                    </div>
                    <h3 className="font-space font-bold text-2xl mb-2">{mentor.name}</h3>
                    <p className="text-primary font-medium mb-2">{mentor.role}</p>
                    <p className="text-muted-foreground mb-6">{mentor.company}</p>
                    


                    <div className="space-y-3">
                      <h4 className="font-semibold">Key Achievements</h4>
                      {mentor.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-center space-x-2 text-sm">
                          <Award className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                          <span className="text-muted-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mentor Details */}
                  <div className="lg:col-span-2 space-y-8">
                    <div>
                      <h4 className="font-space font-bold text-xl mb-4">About</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {mentor.bio}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-space font-bold text-xl mb-4">Areas of Expertise</h4>
                      <div className="grid md:grid-cols-3 gap-3">
                        {mentor.expertise.map((skill, skillIndex) => (
                          <div key={skillIndex} className="bg-yellow-400/10 text-yellow-400 px-3 py-2 rounded-lg text-sm text-center">
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="professional-card p-6 bg-primary/5">
                        <h5 className="font-semibold mb-2">Primary Focus</h5>
                        <p className="text-sm text-muted-foreground">{mentor.focus}</p>
                      </div>
                      <div className="professional-card p-6 bg-secondary/5">
                        <h5 className="font-semibold mb-2">Impact on GAMERS TAG</h5>
                        <p className="text-sm text-muted-foreground">{mentor.impact}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>



      {/* Mentorship Value Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="font-space font-bold text-4xl mb-6">
              The Power Of <span className="text-gradient">Strategic Mentorship</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              How our mentors accelerate our growth and help us navigate the complex gaming industry landscape
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mentorshipPrograms.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <motion.div
                  key={program.title}
                  className="professional-card p-8 text-center card-hover"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                >
                  <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="font-space font-bold text-xl mb-4">{program.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                    {program.description}
                  </p>
                  
                  <div className="space-y-2">
                    {program.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Section */}
          <motion.div 
            className="text-center mt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="professional-card max-w-4xl mx-auto p-12">
              <h3 className="font-space font-bold text-4xl mb-6">
                Interested In <span className="text-gradient">Mentoring GAMERS TAG?</span>
              </h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join our advisory network and help shape the future of gaming while supporting the next generation of gaming entrepreneurs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary text-lg px-8 py-4">
                  Become A Mentor
                </button>
                <button className="btn-secondary text-lg px-8 py-4">
                  Contact Our Team
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}