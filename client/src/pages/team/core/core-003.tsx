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
  Database,
  Smartphone
} from "lucide-react";

// Harsh Singh data
const memberData = {
  id: "harsh-singh",
  name: "Harsh Singh",
  title: "Lead Flutter Developer & Core Tech Member",
  subtitle: "Crafting Exceptional Mobile Gaming Experiences",
  hashtag: "#FlutterExpert #MobileDev #GameTech",
  awards: "AKTU Graduate, Mobile Development Expert, Tech Innovation Leader",
  company: "GAMERS TAG",
  location: "India",
  image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&crop=center",
  expertise: ["Flutter Development", "Mobile App Architecture", "Cross-Platform Development", "DevOps & CI/CD", "API Integration", "Backend Development", "Java & Spring Boot", "Cloud Platforms (AWS, GCP)"],
  description: "As Lead Flutter Developer and Core Tech Member, I specialize in building high-performance mobile applications that deliver exceptional user experiences for millions of gamers worldwide.",
  longDescription: "I bring expertise in cross-platform mobile development with a focus on creating scalable, performant gaming applications. My experience spans from developing consumer-facing apps for 1,000+ users to architecting robust backend systems. I'm passionate about optimizing mobile performance, implementing seamless user interfaces, and building the technical infrastructure that powers the next generation of gaming experiences. With a strong foundation in both frontend and backend technologies, I contribute to our platform's end-to-end development lifecycle.",
  achievements: [
    "Developed PlatUI Figma-to-Flutter plugin boosting productivity by 70% for 1,000+ developers",
    "Architected high-performance Java backend improving conversion efficiency by 40%",
    "Optimized cross-device functionality reducing load times by 30% on average",
    "Enhanced code quality through comprehensive testing, reducing bugs by 30%",
    "Streamlined deployment using Docker and Jenkins, cutting deployment times by 50%",
    "Built MBooking app achieving 30% faster transaction rates with multiple payment gateways",
    "Created Eduverse LMS increasing user engagement by 40% with real-time features"
  ],
  careerPath: [
    {
      role: "Lead Flutter Developer",
      company: "GAMERS TAG",
      duration: "Feb 2025 - Present",
      description: "Leading mobile development initiatives and architecting cross-platform gaming applications"
    },
    {
      role: "Flutter Developer and DevOps Engineer",
      company: "UX52",
      duration: "Oct 2024 - Dec 2024",
      description: "Developed mobile applications while implementing CI/CD pipelines and deployment automation"
    },
    {
      role: "Flutter Developer",
      company: "The Last Two Brain Cells (L2BC)",
      duration: "Jul 2024 - Oct 2024",
      description: "Designed and launched Gester app for 1,000+ PG residents, transforming meal management services"
    },
    {
      role: "Java and Flutter Intern",
      company: "Seequenze Technologies",
      duration: "Apr 2024 - Jul 2024",
      description: "Developed PlatUI plugin and architected Java backend systems with comprehensive testing frameworks"
    }
  ],
  education: [
    {
      degree: "Bachelor of Technology - Computer Science Engineering",
      institution: "Dr. APJ Abdul Kalam Technical University (AKTU)",
      year: "2022-2026 (CGPA: 8.0)"
    }
  ],
  certifications: [
    "Flutter Advanced Development",
    "AWS Cloud Practitioner",
    "Docker & Kubernetes Fundamentals",
    "Java Spring Boot Certification"
  ],
  languages: ["English", "Hindi"],
  contact: {
    email: "harsh@gamerstag.com",
    linkedin: "https://www.linkedin.com/in/harsh-singh-639316291"
  },
  workingOn: [
    "Cross-platform gaming mobile applications",
    "Performance optimization for mobile gaming", 
    "DevOps automation and deployment pipelines",
    "Real-time mobile gaming features"
  ],
  mentorshipAreas: [
    "Flutter & Mobile Development",
    "Cross-Platform Architecture",
    "DevOps & Deployment",
    "Mobile Gaming UX/UI"
  ]
};

export default function HarshSinghProfile() {
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
            <span>MOBILE_SYSTEMS_ACTIVE</span>
          </div>
        </div>
        
        <div className="absolute top-4 right-4">
          <div className="flex items-center space-x-2 text-[#E5042F] text-xs font-mono">
            <span>DEV_STATUS: ONLINE</span>
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
            <motion.div
              className="inline-flex items-center space-x-2 text-[#E5042F] hover:text-white transition-colors mb-8 cursor-pointer"
              whileHover={{ x: -5 }}
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Team</span>
            </motion.div>
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
                        <Smartphone className="w-5 h-5 text-[#E5042F] group-hover:text-white group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.8)] transition-all duration-500" />
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-500">Mobile Lead</span>
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
                  <Smartphone className="w-4 h-4" />
                  <span>Core Tech Member</span>
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
                  <div
                    key={index}
                    className="flex items-center space-x-3 bg-black/40 border border-[#E5042F]/30 p-3"
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                    }}
                  >
                    <Target className="w-4 h-4 text-[#E5042F] flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{project}</span>
                  </div>
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
              Interested in mobile development or want to learn more about our Flutter initiatives?
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
            {[
              {
                id: "owner-001",
                name: "Joshua J. Kanatt",
                title: "Founder & CEO", 
                description: "Visionary Builder of Game-Changing Tech Ecosystem",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=center"
              },
              {
                id: "core-001",
                name: "Hemanth V. Joseph",
                title: "Chief Security Officer",
                description: "Kerala's Pioneering Ethical Hacker and Cybersecurity Expert", 
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=center"
              },
              {
                id: "core-004", 
                name: "Paul Dickinson",
                title: "Director of Operations",
                description: "Strategic Operations Leader driving organizational excellence",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=center"
              }
            ].map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <Link href={`/team/core/${member.id}`}>
                  <div className="relative bg-black h-[400px] overflow-hidden border-2 border-[#E5042F] group-hover:border-white transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(229,4,47,0.6)]">
                    
                    {/* HUD Corner Cutouts */}
                    <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                    <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                    <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                    <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>

                    {/* Profile Image */}
                    <div className="h-64 overflow-hidden relative">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      
                      {/* Status Indicator */}
                      <div className="absolute top-4 right-4">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="font-orbitron font-bold text-xl text-white mb-2 group-hover:text-white transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-[#E5042F] font-medium mb-3 group-hover:text-white transition-colors duration-300">
                        {member.title}
                      </p>
                      <p className="text-gray-400 text-sm line-clamp-3 group-hover:text-gray-300 transition-colors duration-300">
                        {member.description}
                      </p>
                    </div>

                    {/* HUD Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Scanning line */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E5042F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}