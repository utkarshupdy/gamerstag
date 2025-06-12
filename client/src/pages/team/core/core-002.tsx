import { motion } from "framer-motion";
import { Link } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { SEOHead } from "@/components/seo-head";
import { SharpButton } from "@/components/ui/sharp-button";
import { 
  ArrowLeft,
  MapPin, 
  Users, 
  Award, 
  ExternalLink,
  Linkedin,
  Twitter,
  Globe,
  Star,
  TrendingUp,
  Calendar,
  MessageCircle,
  CheckCircle2,
  Target,
  Briefcase,
  GraduationCap,
  Building,
  Mail,
  Phone,
  Shield,
  Code,
  Server,
  Database
} from "lucide-react";

// Adesh Kumar Patra data
const memberData = {
  id: "adesh-kumar-patra",
  name: "Adesh Kumar Patra",
  title: "Director of Engineering / CTO & Co-Founder",
  subtitle: "Architecting the Future of Gaming Technology",
  hashtag: "#TechLeader #GameTechFounder #BackendArchitect",
  awards: "IIT Guwahati Graduate, Ex-Amazon SDE Intern, Tech Innovation Leader",
  company: "GAMERS TAG",
  location: "India",
  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=center",
  expertise: ["Backend Architecture", "Full-Stack Development", "Cloud Infrastructure (AWS)", "Blockchain Development", "System Optimization", "Team Leadership", "DevOps & CI/CD", "Database Design"],
  description: "As Director of Engineering/CTO and Founding Member, I lead the entire tech division (25+ developers) across backend, frontend, and DevOps—driving product innovation, scalability, and technical excellence at GAMERS TAG.",
  longDescription: "I specialize in building scalable, high-performance gaming infrastructure that serves millions of users worldwide. My expertise spans from architecting complex backend systems to leading cross-functional teams in delivering cutting-edge gaming solutions. With experience at Amazon and a strong foundation from IIT Guwahati, I bring both startup agility and enterprise-scale knowledge to our technical challenges. I'm passionate about creating technology that empowers gamers globally and transforms the gaming industry through innovation.",
  achievements: [
    "Led backend team building scalable servers for social-gaming app with 10M+ users",
    "Migrated entire codebase from JS to TS, improving code quality and maintainability",
    "Introduced crypto payment systems and developed proprietary AdTech platform",
    "Built modular SaaS-based Admin Panel increasing operational efficiency by 70%",
    "Optimized core algorithms improving API response times by 20%",
    "Enhanced Field Price App integration increasing farmer awareness by 45%",
    "Developed AI agents for automated content scraping and curation"
  ],
  careerPath: [
    {
      role: "Director of Engineering / CTO & Co-Founder",
      company: "GAMERS TAG",
      duration: "Sep 2024 - Present",
      description: "Leading entire tech division (25+ developers) across backend, frontend, and DevOps—driving product innovation and technical excellence"
    },
    {
      role: "Lead Backend Developer",
      company: "GAMERS TAG",
      duration: "Apr 2024 - Aug 2024",
      description: "Led team of 15 developers, overseeing sprint planning, code reviews, and backend workflows with AWS deployment"
    },
    {
      role: "Software Development Intern",
      company: "Amazon",
      duration: "May 2024 - July 2024",
      description: "Integrated Field Price App with Amazon Kisan App, built vendor management portal, worked with Java, ReactJS, AWS"
    },
    {
      role: "Backend Developer Intern",
      company: "GAMERS TAG",
      duration: "Jan 2024 - Mar 2024",
      description: "Worked on backend of social-gaming app enabling tournament management, social features, and real-time mini-games"
    }
  ],
  education: [
    {
      degree: "Bachelor of Technology (B.Tech) - Computer Science",
      institution: "Indian Institute of Technology, Guwahati",
      year: "Graduating May 2026"
    }
  ],
  certifications: [
    "AWS Solutions Architect",
    "Full Stack Web Development",
    "Blockchain Development Certification",
    "Advanced Data Structures & Algorithms"
  ],
  languages: ["English", "Hindi", "Bengali"],
  contact: {
    email: "adesh@gamerstag.com",
    linkedin: "https://www.linkedin.com/in/adeshkpatra",
    twitter: "https://twitter.com/adeshkpatra"
  },
  workingOn: [
    "Scalable gaming infrastructure architecture",
    "AI-powered content automation systems", 
    "Crypto payment integration platforms",
    "Real-time gaming communication systems"
  ],
  mentorshipAreas: [
    "Backend Development",
    "System Architecture",
    "Team Leadership",
    "Startup Technology Strategy"
  ]
};

export default function AdeshKumarPatraProfile() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <SEOHead 
        title={`${memberData.name} - ${memberData.title} | GAMERS TAG`}
        description={memberData.description}
      />
      
      <Navigation />
      
      {/* Advanced HUD Interactive Background - Same as mentor page */}
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
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-20 bg-gradient-to-b from-[#E5042F]/40 to-transparent"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 20}%`
            }}
            animate={{
              opacity: [0, 1, 0],
              scaleY: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
        
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
            <span>SECURITY_PROTOCOLS_ACTIVE</span>
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

      {/* Back Navigation */}
      <div className="relative z-10 pt-24 px-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/team">
            <motion.button
              className="inline-flex items-center space-x-2 bg-white text-black px-6 py-3 font-medium transition-all duration-300 border-2 border-white hover:bg-[#E5042F] hover:text-white hover:border-[#E5042F] mb-8"
              style={{
                clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
              }}
              whileHover={{ x: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Team Members</span>
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            
            {/* Profile Image & Quick Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1"
            >
              <div className="relative">
                {/* Profile Image Container with HUD styling */}
                <motion.div 
                  className="relative mb-8 group cursor-pointer"
                  whileHover={{ scale: 1.05, y: -5, rotateX: 5 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="relative w-80 h-80 mx-auto border-2 border-[#E5042F] bg-gradient-to-br from-[#E5042F]/20 to-black overflow-hidden transition-all duration-700 group-hover:border-white/60"
                       style={{
                         clipPath: 'polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 30px 100%, 0 calc(100% - 30px))'
                       }}>
                    <img
                      src={memberData.image}
                      alt={memberData.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* White HUD Glassmorphic overlay */}
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/12 via-white/6 to-white/12 opacity-0 group-hover:opacity-90 transition-all duration-700 ease-out"></div>
                    
                    {/* Enhanced HUD scanning effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
                      <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-transparent via-white to-transparent animate-pulse"></div>
                      <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-white to-transparent animate-pulse"></div>
                    </div>
                    
                    {/* Inner glow effect */}
                    <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(255,255,255,0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    {/* Enhanced Corner Markers with glow */}
                    <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-white transition-all duration-700 group-hover:border-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>
                    <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-white transition-all duration-700 group-hover:border-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>
                    <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-white transition-all duration-700 group-hover:border-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>
                    <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-white transition-all duration-700 group-hover:border-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>
                    
                    {/* Status Indicator */}
                    <div className="absolute top-4 right-4">
                      <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse group-hover:bg-white group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.8)] transition-all duration-500"></div>
                    </div>
                  </div>
                </motion.div>

                {/* Quick Info Cards */}
                <div className="space-y-4">
                  <motion.div 
                    className="group bg-black/80 border border-[#E5042F]/30 p-4 relative overflow-hidden cursor-pointer transition-all duration-700 hover:border-white/60 hover:bg-black/40"
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
                      transformStyle: 'preserve-3d'
                    }}
                    whileHover={{ scale: 1.05, y: -3, rotateX: 5 }}
                    transition={{ duration: 0.7 }}
                  >
                    {/* White HUD Glassmorphic overlay */}
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/12 via-white/6 to-white/12 opacity-0 group-hover:opacity-90 transition-all duration-700 ease-out"></div>
                    
                    {/* HUD scanning lines */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/80 to-transparent animate-pulse"></div>
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/80 to-transparent animate-pulse"></div>
                    </div>
                    
                    {/* Inner glow */}
                    <div className="absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="relative z-10">
                      <div className="flex items-center space-x-3 mb-2 relative z-10">
                        <Building className="w-5 h-5 text-[#E5042F] group-hover:text-white group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.8)] transition-all duration-500" />
                        <span className="font-medium text-white group-hover:text-white group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.6)] transition-all duration-500">{memberData.company}</span>
                      </div>
                      <div className="flex items-center space-x-3 mb-2 relative z-10">
                        <MapPin className="w-5 h-5 text-[#E5042F] group-hover:text-white group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.8)] transition-all duration-500" />
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-500">{memberData.location}</span>
                      </div>
                      <div className="flex items-center space-x-3 relative z-10">
                        <Award className="w-5 h-5 text-[#E5042F] group-hover:text-white group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.8)] transition-all duration-500" />
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-500">Co-Founder</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Contact Links */}
                  <div className="space-y-3">
                    {memberData.contact.linkedin && (
                      <motion.a
                        href={memberData.contact.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center space-x-3 bg-black/60 border border-[#E5042F]/30 p-3 relative overflow-hidden cursor-pointer transition-all duration-700 hover:border-white/60 hover:bg-black/40"
                        style={{
                          clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                          transformStyle: 'preserve-3d'
                        }}
                        whileHover={{ scale: 1.05, y: -3, rotateX: 5 }}
                        transition={{ duration: 0.7 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {/* White HUD Glassmorphic overlay */}
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-white/10 opacity-0 group-hover:opacity-90 transition-all duration-700 ease-out"></div>
                        
                        {/* HUD scanning effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-pulse"></div>
                        </div>
                        
                        <Linkedin className="w-5 h-5 text-[#E5042F] relative z-10 group-hover:text-white group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.8)] transition-all duration-500" />
                        <span className="text-white relative z-10 group-hover:text-white transition-colors duration-500">LinkedIn Profile</span>
                        <ExternalLink className="w-4 h-4 text-gray-400 ml-auto relative z-10 group-hover:text-white group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.6)] transition-all duration-500" />
                      </motion.a>
                    )}
                    
                    {memberData.contact.twitter && (
                      <motion.a
                        href={memberData.contact.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center space-x-3 bg-black/60 border border-[#E5042F]/30 p-3 relative overflow-hidden cursor-pointer transition-all duration-700 hover:border-white/60 hover:bg-black/40"
                        style={{
                          clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                          transformStyle: 'preserve-3d'
                        }}
                        whileHover={{ scale: 1.05, y: -3, rotateX: 5 }}
                        transition={{ duration: 0.7 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {/* White HUD Glassmorphic overlay */}
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-white/10 opacity-0 group-hover:opacity-90 transition-all duration-700 ease-out"></div>
                        
                        {/* HUD scanning effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-pulse"></div>
                        </div>
                        
                        <Twitter className="w-5 h-5 text-[#E5042F] relative z-10 group-hover:text-white group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.8)] transition-all duration-500" />
                        <span className="text-white relative z-10 group-hover:text-white transition-colors duration-500">Twitter Profile</span>
                        <ExternalLink className="w-4 h-4 text-gray-400 ml-auto relative z-10 group-hover:text-white group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.6)] transition-all duration-500" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2"
            >
              {/* Header */}
              <div className="mb-8">
                <div className="inline-flex items-center space-x-2 bg-[#E5042F]/10 border border-[#E5042F]/20 px-4 py-2 text-sm font-medium text-[#E5042F] mb-4"
                     style={{
                       clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                     }}>
                  <Shield className="w-4 h-4" />
                  <span>Core Team Member</span>
                </div>
                
                <h1 className="font-orbitron font-bold text-4xl md:text-5xl text-white mb-4">
                  {memberData.name}
                </h1>
                
                <h2 className="text-2xl text-[#E5042F] font-medium mb-2">
                  {memberData.title}
                </h2>
                
                <p className="text-xl text-gray-300 mb-4">
                  {memberData.subtitle}
                </p>
                
                <p className="text-[#E5042F] font-medium mb-2">
                  {memberData.hashtag}
                </p>
                
                <p className="text-gray-400">
                  {memberData.awards}
                </p>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="font-orbitron font-bold text-xl text-white mb-4">About</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {memberData.description}
                </p>
                <p className="text-gray-300 leading-relaxed">
                  {memberData.longDescription}
                </p>
              </div>

              {/* Expertise */}
              <div className="mb-8">
                <h3 className="font-orbitron font-bold text-xl text-white mb-4">Expertise</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {memberData.expertise.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -3, rotateX: 5 }}
                      className="group flex items-center space-x-3 bg-black/40 border border-[#E5042F]/30 p-3 relative overflow-hidden cursor-pointer transition-all duration-700 hover:border-white/30 hover:bg-black/30"
                      style={{
                        clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
                        transformStyle: 'preserve-3d'
                      }}
                    >
                      {/* Clean white glassmorphic overlay */}
                      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/8 via-white/4 to-white/8 opacity-0 group-hover:opacity-90 transition-all duration-700 ease-out"></div>
                      
                      {/* Subtle inner glow */}
                      <div className="absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                      
                      <CheckCircle2 className="w-4 h-4 text-[#E5042F] flex-shrink-0 relative z-10 group-hover:text-white group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] transition-all duration-500" />
                      <span className="text-gray-300 relative z-10 group-hover:text-white transition-colors duration-500">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievement & Career Sections */}
      <section className="relative px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="font-orbitron font-bold text-2xl text-white mb-6">Key Achievements</h3>
              <div className="space-y-4">
                {memberData.achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="group flex space-x-4 bg-black/40 border border-[#E5042F]/30 p-4 relative overflow-hidden cursor-pointer transition-all duration-700 hover:border-white/30 hover:bg-black/30"
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                    }}
                  >
                    {/* Clean white glassmorphic overlay */}
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/8 via-white/4 to-white/8 opacity-0 group-hover:opacity-90 transition-all duration-700 ease-out"></div>
                    
                    {/* Subtle inner glow */}
                    <div className="absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                    <div className="flex-shrink-0 w-2 h-2 bg-[#E5042F] rounded-full mt-2 relative z-10 group-hover:bg-white group-hover:shadow-[0_0_6px_rgba(255,255,255,0.6)] transition-all duration-500"></div>
                    <p className="text-gray-300 leading-relaxed relative z-10 group-hover:text-white transition-colors duration-300">{achievement}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Career Path */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="font-orbitron font-bold text-2xl text-white mb-6">Career Journey</h3>
              <div className="space-y-6">
                {memberData.careerPath.map((role, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="group relative bg-black/40 border border-[#E5042F]/30 p-6 cursor-pointer transition-all duration-700 hover:border-white/30 hover:bg-black/30 overflow-hidden"
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
                    }}
                  >
                    {/* Clean white glassmorphic overlay */}
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/8 via-white/4 to-white/8 opacity-0 group-hover:opacity-90 transition-all duration-700 ease-out"></div>
                    
                    {/* Subtle inner glow */}
                    <div className="absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-4 h-4 bg-[#E5042F] rounded-full relative z-10 group-hover:bg-white group-hover:shadow-[0_0_6px_rgba(255,255,255,0.6)] transition-all duration-500"></div>
                      </div>
                      <div className="flex-1 relative z-10">
                        <h4 className="font-bold text-white text-lg mb-1 group-hover:text-white transition-colors duration-300">{role.role}</h4>
                        <p className="text-[#E5042F] font-medium mb-1 group-hover:text-white transition-colors duration-300">{role.company}</p>
                        <p className="text-gray-400 text-sm mb-3 group-hover:text-gray-200 transition-colors duration-300">{role.duration}</p>
                        <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">{role.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education & Skills Section */}
      <section className="relative px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="font-orbitron font-bold text-xl text-white mb-6">Education</h3>
              <div className="space-y-4">
                {memberData.education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -3, rotateX: 5 }}
                    className="group bg-black/40 border border-[#E5042F]/30 p-4 relative overflow-hidden cursor-pointer transition-all duration-700 hover:border-white/30 hover:bg-black/30"
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    {/* Clean white glassmorphic overlay */}
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/8 via-white/4 to-white/8 opacity-0 group-hover:opacity-90 transition-all duration-700 ease-out"></div>
                    
                    {/* Subtle inner glow */}
                    <div className="absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                    
                    <h4 className="font-bold text-white mb-1 relative z-10 group-hover:text-white transition-colors duration-500">{edu.degree}</h4>
                    <p className="text-[#E5042F] text-sm mb-1 relative z-10 group-hover:text-white transition-colors duration-500">{edu.institution}</p>
                    <p className="text-gray-400 text-sm relative z-10 group-hover:text-gray-200 transition-colors duration-500">{edu.year}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="font-orbitron font-bold text-xl text-white mb-6">Certifications</h3>
              <div className="space-y-3">
                {memberData.certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -3, rotateX: 5 }}
                    className="group flex items-center space-x-3 bg-black/40 border border-[#E5042F]/30 p-3 relative overflow-hidden cursor-pointer transition-all duration-700 hover:border-white/30 hover:bg-black/30"
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    {/* Clean white glassmorphic overlay */}
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/8 via-white/4 to-white/8 opacity-0 group-hover:opacity-90 transition-all duration-700 ease-out"></div>
                    
                    {/* Subtle inner glow */}
                    <div className="absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                    
                    <Award className="w-4 h-4 text-[#E5042F] flex-shrink-0 relative z-10 group-hover:text-white group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] transition-all duration-500" />
                    <span className="text-gray-300 text-sm relative z-10 group-hover:text-white transition-colors duration-500">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Currently Working On */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="font-orbitron font-bold text-xl text-white mb-6">Currently Working On</h3>
              <div className="space-y-3">
                {memberData.workingOn.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -3, rotateX: 5 }}
                    className="group flex items-center space-x-3 bg-black/40 border border-[#E5042F]/30 p-3 relative overflow-hidden cursor-pointer transition-all duration-700 hover:border-white/30 hover:bg-black/30"
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    {/* Clean white glassmorphic overlay */}
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/8 via-white/4 to-white/8 opacity-0 group-hover:opacity-90 transition-all duration-700 ease-out"></div>
                    
                    {/* Subtle inner glow */}
                    <div className="absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                    
                    <Target className="w-4 h-4 text-[#E5042F] flex-shrink-0 relative z-10 group-hover:text-white group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] transition-all duration-500" />
                    <span className="text-gray-300 text-sm relative z-10 group-hover:text-white transition-colors duration-500">{project}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-black/60 border border-[#E5042F]/30 p-8"
            style={{
              clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'
            }}
          >
            <h3 className="font-orbitron font-bold text-2xl text-white mb-4">
              Connect with {memberData.name.split(' ')[0]}
            </h3>
            <p className="text-gray-300 mb-6">
              Interested in cybersecurity for gaming platforms or want to learn more about our security initiatives?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {memberData.contact.linkedin && (
                <a
                  href={memberData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SharpButton variant="red" className="w-full sm:w-auto">
                    <Linkedin className="w-4 h-4 mr-2" />
                    Connect on LinkedIn
                  </SharpButton>
                </a>
              )}
              <Link href="/team">
                <SharpButton variant="white" className="w-full sm:w-auto">
                  <Users className="w-4 h-4 mr-2" />
                  View Full Team
                </SharpButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Core Team Members Section */}
      <section className="relative py-20 bg-gradient-to-b from-black/90 to-black border-t border-[#E5042F]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-3 px-6 py-3 mb-6 bg-gradient-to-r from-[#E5042F]/20 to-black/40 border border-[#E5042F]/40 rounded-none backdrop-blur-sm"
                 style={{
                   clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))'
                 }}>
              <Users className="w-6 h-6 text-[#E5042F]" />
              <span className="text-white font-bold text-lg">OTHER CORE TEAM MEMBERS</span>
              <div className="w-2 h-2 bg-[#E5042F] rounded-full animate-pulse"></div>
            </div>
            
            <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-white mb-6">
              Meet the Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The brilliant minds working together to build the future of gaming
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Joshua - Owner */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <Link href="/team/core/owner-001">
                <div className="relative bg-black/90 border-2 border-[#E5042F]/50 p-6 h-full transform transition-all duration-500 group-hover:border-[#E5042F] group-hover:shadow-[0_0_30px_#E5042F70] overflow-hidden"
                     style={{
                       clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'
                     }}>
                  
                  {/* White overlay effect */}
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  
                  {/* Scanning lines effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E5042F] to-transparent animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E5042F] to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
                    <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-[#E5042F] to-transparent animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#E5042F] to-transparent animate-pulse" style={{animationDelay: '1.5s'}}></div>
                  </div>

                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                  <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>

                  <div className="relative z-10">
                    {/* Profile Image */}
                    <div className="relative mb-6">
                      <div className="relative w-32 h-32 mx-auto border-2 border-[#E5042F] bg-gradient-to-br from-[#E5042F]/20 to-black overflow-hidden"
                           style={{
                             clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))'
                           }}>
                        <img
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=center"
                          alt="Joshua J Kanatt"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 right-2 w-3 h-3 bg-[#E5042F] rounded-full animate-pulse"></div>
                      </div>
                    </div>

                    {/* Name and Role */}
                    <div className="text-center mb-4">
                      <h3 className="font-orbitron font-bold text-xl text-white mb-2 group-hover:text-[#E5042F] transition-colors duration-300">
                        Joshua J Kanatt
                      </h3>
                      <p className="text-[#E5042F] font-medium text-sm">
                        Founder & CEO
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm text-center leading-relaxed group-hover:text-gray-300 transition-colors duration-300 mb-4">
                      Visionary Founder & CEO building game-changing technology at GAMERS TAG.
                    </p>

                    {/* HUD View Profile Button */}
                    <div className="text-center">
                      <div className="relative">
                        <div className="inline-flex items-center space-x-2 bg-black/80 border-2 border-[#E5042F] text-[#E5042F] px-6 py-3 text-sm font-bold group-hover:bg-[#E5042F] group-hover:text-white transition-all duration-500 relative overflow-hidden"
                             style={{
                               clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
                             }}>
                          {/* HUD scanning effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                          
                          <span className="relative z-10">VIEW PROFILE</span>
                          <ExternalLink className="w-4 h-4 relative z-10" />
                          
                          {/* Corner indicators */}
                          <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                          <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                          <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                          <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Harsh Singh */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <Link href="/team/core/core-003">
                <div className="relative bg-black/90 border-2 border-[#E5042F]/50 p-6 h-full transform transition-all duration-500 group-hover:border-[#E5042F] group-hover:shadow-[0_0_30px_#E5042F70] overflow-hidden"
                     style={{
                       clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'
                     }}>
                  
                  {/* White overlay effect */}
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  
                  {/* Scanning lines effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E5042F] to-transparent animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E5042F] to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
                    <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-[#E5042F] to-transparent animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#E5042F] to-transparent animate-pulse" style={{animationDelay: '1.5s'}}></div>
                  </div>

                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                  <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>

                  <div className="relative z-10">
                    {/* Profile Image */}
                    <div className="relative mb-6">
                      <div className="relative w-32 h-32 mx-auto border-2 border-[#E5042F] bg-gradient-to-br from-[#E5042F]/20 to-black overflow-hidden"
                           style={{
                             clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))'
                           }}>
                        <img
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=center"
                          alt="Harsh Singh"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 right-2 w-3 h-3 bg-[#E5042F] rounded-full animate-pulse"></div>
                      </div>
                    </div>

                    {/* Name and Role */}
                    <div className="text-center mb-4">
                      <h3 className="font-orbitron font-bold text-xl text-white mb-2 group-hover:text-[#E5042F] transition-colors duration-300">
                        Harsh Singh
                      </h3>
                      <p className="text-[#E5042F] font-medium text-sm">
                        Lead Frontend Developer
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm text-center leading-relaxed group-hover:text-gray-300 transition-colors duration-300 mb-4">
                      Frontend Lead architecting responsive, high-performance user interfaces for gaming platforms.
                    </p>

                    {/* View Profile Button */}
                    <div className="text-center">
                      <div className="inline-flex items-center space-x-2 bg-[#E5042F] text-white px-4 py-2 text-sm font-bold group-hover:bg-white group-hover:text-black transition-all duration-300">
                        <span>View Profile</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Paul Dickinson */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <Link href="/team/core/core-004">
                <div className="relative bg-black/90 border-2 border-[#E5042F]/50 p-6 h-full transform transition-all duration-500 group-hover:border-[#E5042F] group-hover:shadow-[0_0_30px_#E5042F70] overflow-hidden"
                     style={{
                       clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'
                     }}>
                  
                  {/* White overlay effect */}
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  
                  {/* Scanning lines effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E5042F] to-transparent animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E5042F] to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
                    <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-[#E5042F] to-transparent animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#E5042F] to-transparent animate-pulse" style={{animationDelay: '1.5s'}}></div>
                  </div>

                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                  <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>

                  <div className="relative z-10">
                    {/* Profile Image */}
                    <div className="relative mb-6">
                      <div className="relative w-32 h-32 mx-auto border-2 border-[#E5042F] bg-gradient-to-br from-[#E5042F]/20 to-black overflow-hidden"
                           style={{
                             clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))'
                           }}>
                        <img
                          src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=center"
                          alt="Paul Dickinson"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 right-2 w-3 h-3 bg-[#E5042F] rounded-full animate-pulse"></div>
                      </div>
                    </div>

                    {/* Name and Role */}
                    <div className="text-center mb-4">
                      <h3 className="font-orbitron font-bold text-xl text-white mb-2 group-hover:text-[#E5042F] transition-colors duration-300">
                        Paul Dickinson
                      </h3>
                      <p className="text-[#E5042F] font-medium text-sm">
                        Director of Operations
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm text-center leading-relaxed group-hover:text-gray-300 transition-colors duration-300 mb-4">
                      Operations Director ensuring seamless business operations and strategic execution.
                    </p>

                    {/* View Profile Button */}
                    <div className="text-center">
                      <div className="inline-flex items-center space-x-2 bg-[#E5042F] text-white px-4 py-2 text-sm font-bold group-hover:bg-white group-hover:text-black transition-all duration-300">
                        <span>View Profile</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Hemanth Joseph */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <Link href="/team/core/hemanth-joseph">
                <div className="relative bg-black/90 border-2 border-[#E5042F]/50 p-6 h-full transform transition-all duration-500 group-hover:border-[#E5042F] group-hover:shadow-[0_0_30px_#E5042F70] overflow-hidden"
                     style={{
                       clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'
                     }}>
                  
                  {/* White overlay effect */}
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  
                  {/* Scanning lines effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E5042F] to-transparent animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E5042F] to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
                    <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-[#E5042F] to-transparent animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#E5042F] to-transparent animate-pulse" style={{animationDelay: '1.5s'}}></div>
                  </div>

                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                  <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>

                  <div className="relative z-10">
                    {/* Profile Image */}
                    <div className="relative mb-6">
                      <div className="relative w-32 h-32 mx-auto border-2 border-[#E5042F] bg-gradient-to-br from-[#E5042F]/20 to-black overflow-hidden"
                           style={{
                             clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))'
                           }}>
                        <img
                          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=center"
                          alt="Hemanth Joseph"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 right-2 w-3 h-3 bg-[#E5042F] rounded-full animate-pulse"></div>
                      </div>
                    </div>

                    {/* Name and Role */}
                    <div className="text-center mb-4">
                      <h3 className="font-orbitron font-bold text-xl text-white mb-2 group-hover:text-[#E5042F] transition-colors duration-300">
                        Hemanth Joseph
                      </h3>
                      <p className="text-[#E5042F] font-medium text-sm">
                        Chief Security Officer
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm text-center leading-relaxed group-hover:text-gray-300 transition-colors duration-300 mb-4">
                      Chief Security Officer ensuring robust cybersecurity and data protection for gaming platforms.
                    </p>

                    {/* View Profile Button */}
                    <div className="text-center">
                      <div className="inline-flex items-center space-x-2 bg-[#E5042F] text-white px-4 py-2 text-sm font-bold group-hover:bg-white group-hover:text-black transition-all duration-300">
                        <span>View Profile</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}