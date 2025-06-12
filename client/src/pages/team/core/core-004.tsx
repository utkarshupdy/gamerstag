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
  Settings
} from "lucide-react";

// Paul Dickinson data
const memberData = {
  id: "paul-dickinson",
  name: "Paul Dickinson",
  title: "Director of Operations & Co-Founder",
  subtitle: "Driving Operational Excellence in Gaming Innovation",
  hashtag: "#OperationsLeader #SportsManagement #EventExpert",
  awards: "Sports Management Master's, ICC Cricket World Cup 2023, PKL10 Expert",
  company: "GAMERS TAG",
  location: "Kochi, Kerala, India",
  image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=center",
  expertise: ["Operations Management", "Sports Event Management", "Project Management", "Team Leadership", "Strategic Planning", "Vendor Management", "Human Resources", "Business Development"],
  description: "As Director of Operations and Co-Founder, I lead GAMERS TAG's strategic vision and operational excellence, driving growth, partnerships, and innovation in the world of gaming and esports.",
  longDescription: "I bring a unique combination of IT engineering background and sports management expertise to drive operational excellence at GAMERS TAG. My experience spans from managing large-scale international sporting events like the ICC Cricket World Cup 2023 to building operational frameworks for gaming platforms. I'm passionate about creating efficient systems that enable our team to deliver exceptional gaming experiences while scaling our operations globally. My expertise in both technology and sports management allows me to bridge the gap between gaming innovation and operational execution.",
  achievements: [
    "Successfully managed operations for ICC Cricket World Cup 2023 as Procurement & Hospitality Manager",
    "Led venue operations for Pro Kabaddi League Season 10 with 1000+ attendees",
    "Developed operational frameworks increasing GAMERS TAG's efficiency by 60%",
    "Managed volunteer teams of 20+ members for major sporting events",
    "Implemented procurement strategies reducing operational costs by 25%",
    "Built vendor management systems improving supplier relationships",
    "Created HR frameworks for talent acquisition and team development"
  ],
  careerPath: [
    {
      role: "Director of Operations & Co-Founder",
      company: "GAMERS TAG",
      duration: "Apr 2023 - Present",
      description: "Leading strategic vision and operational excellence, driving growth, partnerships, and innovation in gaming and esports"
    },
    {
      role: "Venue Operations and Hospitality Coordinator",
      company: "Mashal Sports - Pro Kabaddi League Season 10",
      duration: "Dec 2023 - Mar 2024",
      description: "Managed venue operations and hospitality services for major sporting events with 1000+ attendees"
    },
    {
      role: "Procurement Manager & Hospitality Coordinator",
      company: "ICC Men's Cricket World Cup 2023",
      duration: "Oct 2023 - Nov 2023",
      description: "Led procurement strategies and hospitality coordination for global sporting event with international audience"
    },
    {
      role: "Supervisor - Field Operations",
      company: "World Table Tennis",
      duration: "Feb 2023 - Mar 2023",
      description: "Managed multiple departments for WTT Star Contender Goa 2023, including field operations and volunteer coordination"
    }
  ],
  education: [
    {
      degree: "Master's Degree - Sports Management",
      institution: "AISTS INDIA",
      year: "Jan 2022 - Jan 2023 (Grade: A)"
    },
    {
      degree: "Bachelor of Technology - Information Technology",
      institution: "Rajagiri School of Engineering & Technology",
      year: "2010 - 2014"
    }
  ],
  certifications: [
    "Sports Management Professional",
    "Project Management Certification",
    "Event Management Specialist",
    "Operations Excellence Certificate"
  ],
  languages: ["English", "Hindi", "Malayalam"],
  contact: {
    email: "paul@gamerstag.com",
    linkedin: "https://www.linkedin.com/in/paul-dickinson-038511190"
  },
  workingOn: [
    "Global operational strategy for gaming platform scaling",
    "Partnership development with gaming organizations", 
    "Event management systems for esports tournaments",
    "Operational efficiency optimization frameworks"
  ],
  mentorshipAreas: [
    "Operations Management",
    "Sports & Event Management",
    "Team Leadership",
    "Strategic Planning"
  ]
};

export default function PaulDickinsonProfile() {
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
            <span>OPERATIONS_ACTIVE</span>
          </div>
        </div>
        
        <div className="absolute top-4 right-4">
          <div className="flex items-center space-x-2 text-[#E5042F] text-xs font-mono">
            <span>OPS_STATUS: OPTIMIZED</span>
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
                        <Settings className="w-5 h-5 text-[#E5042F] group-hover:text-white group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.8)] transition-all duration-500" />
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-500">Operations Director</span>
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
                  <Settings className="w-4 h-4" />
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
              Interested in operations management or want to learn more about our strategic initiatives?
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

      <Footer />
    </div>
  );
}