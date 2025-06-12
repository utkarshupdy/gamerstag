import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { SEOHead } from '@/components/seo/SEOHead';
import { StructuredData } from '@/components/seo/StructuredData';
import { pageMetadata } from '@/lib/seo/metadata';
import { Link } from "wouter";
import { 
  Users, 
  Star, 
  ExternalLink, 
  Award, 
  Globe, 
  Crown,
  ArrowRight,
  Code,
  DollarSign,
  UserCheck,
  Palette,
  Target,
  Shield,
  Gamepad2,
  Megaphone,
  Linkedin
} from "lucide-react";
import { coreTeamMembers, businessTeamMembers, getTeamMembersByDepartment } from '@/data/team-members';

const teamStats = [
  { number: "95+", label: "Team Members", icon: Users, color: "from-[#E5042F] to-[#171717]" },
  { number: "9", label: "Departments", icon: Globe, color: "from-[#E5042F] to-[#171717]" },
  { number: "6", label: "Core Members", icon: Crown, color: "from-[#E5042F] to-[#171717]" },
  { number: "2021", label: "Founded", icon: Award, color: "from-[#E5042F] to-[#171717]" }
];

// Department configuration
const departmentIcons: Record<string, any> = {
  engineering: Code,
  finance: DollarSign,
  hr: UserCheck,
  design: Palette,
  marketing: Megaphone,
  qa: Shield,
  esports: Gamepad2,
  security: Shield
};

const departmentColors: Record<string, string> = {
  engineering: "from-blue-500/20 to-blue-900/20",
  finance: "from-green-500/20 to-green-900/20", 
  hr: "from-purple-500/20 to-purple-900/20",
  design: "from-pink-500/20 to-pink-900/20",
  marketing: "from-orange-500/20 to-orange-900/20",
  qa: "from-cyan-500/20 to-cyan-900/20",
  esports: "from-red-500/20 to-red-900/20",
  security: "from-yellow-500/20 to-yellow-900/20"
};

const departmentNames: Record<string, string> = {
  engineering: "Engineering & Development",
  finance: "Finance & Analytics", 
  hr: "Human Resources",
  design: "Design & Creative",
  marketing: "Marketing & Social Media",
  qa: "Quality Assurance",
  esports: "Esports & Gaming",
  security: "Security & Compliance"
};

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const departmentTeamMembers = getTeamMembersByDepartment();
  
  // Debug log to ensure we have all core members
  console.log('Core team count:', coreTeamMembers.length);
  console.log('Core team members:', coreTeamMembers.map(m => m.name));

  return (
    <>
      <SEOHead {...pageMetadata.team} />
      <StructuredData 
        type="Organization" 
        data={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'GAMERS TAG',
          url: 'https://gamerstag.com/team',
          employee: coreTeamMembers.map(member => ({
            '@type': 'Person',
            name: member.fullName || member.name,
            jobTitle: member.role,
            url: `https://gamerstag.com/team/${member.slug}`
          }))
        }}
      />
      
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        <Navigation />

        {/* Enhanced Background Effects */}
        <div className="absolute inset-0">
          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid-pattern animate-pulse"></div>
          </div>
          
          {/* Moving Glow Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-[#E5042F]/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-[#E5042F]/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-[#E5042F]/6 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
          </div>
          
          {/* HUD Scanning Lines */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#E5042F] to-transparent animate-pulse" style={{top: '20%'}}></div>
            <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#E5042F] to-transparent animate-pulse" style={{top: '60%', animationDelay: '1.5s'}}></div>
            <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#E5042F] to-transparent animate-pulse" style={{top: '80%', animationDelay: '0.5s'}}></div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 px-6 py-3 mb-8 border border-[#E5042F]/30 rounded-none bg-black/20 backdrop-blur-sm"
                   style={{
                     clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
                   }}>
                <Users className="w-5 h-5 text-[#E5042F]" />
                <span className="text-white font-medium">Meet Our Team</span>
                <div className="w-2 h-2 bg-[#E5042F] rounded-full animate-pulse"></div>
              </div>

              <h1 className="font-orbitron font-bold text-4xl md:text-6xl lg:text-7xl mb-6 text-white">
                The Minds Behind
                <span className="block text-[#E5042F] mt-2">GAMERS TAG</span>
              </h1>

              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
                Meet the passionate innovators, creative visionaries, and gaming enthusiasts who are building the future of gaming technology and community.
              </p>

              {/* Enhanced Stats with HUD Design */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                {teamStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -8 }}
                    className="relative group cursor-pointer"
                  >
                    <div className="relative bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl border border-gray-700/50 rounded-none p-6 overflow-hidden transition-all duration-300 group-hover:border-[#E5042F]/80 group-hover:bg-gradient-to-br group-hover:from-[#E5042F]/10 group-hover:to-black/95"
                         style={{
                           clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))'
                         }}>
                      
                      {/* HUD Corner Elements */}
                      <div className="absolute top-0 right-0 w-4 h-4 bg-[#E5042F] opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-2 right-2 w-1 h-1 bg-white/80 rounded-full animate-pulse"></div>
                      
                      {/* HUD Lines */}
                      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#E5042F]/50 via-[#E5042F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E5042F] to-[#E5042F]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Icon */}
                      <div className="flex items-center justify-center mb-4">
                        <motion.div
                          whileHover={{ rotate: 15, scale: 1.15 }}
                          transition={{ duration: 0.3 }}
                        >
                          <stat.icon className="w-8 h-8 text-[#E5042F] group-hover:text-white transition-colors duration-300 drop-shadow-[0_0_12px_rgba(229,4,47,0.6)]" />
                        </motion.div>
                      </div>
                      
                      {/* Number */}
                      <div className="text-center mb-3">
                        <div className="font-orbitron font-bold text-2xl md:text-3xl text-white group-hover:text-[#E5042F] transition-colors duration-300 group-hover:drop-shadow-[0_0_16px_rgba(229,4,47,0.8)]">
                          {stat.number}
                        </div>
                      </div>
                      
                      {/* Label */}
                      <div className="text-center">
                        <div className="text-gray-400 text-xs font-medium uppercase tracking-wider group-hover:text-gray-300 transition-colors duration-300">
                          {stat.label}
                        </div>
                      </div>
                      
                      {/* HUD Data Stream */}
                      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_24%,rgba(229,4,47,0.03)_25%,rgba(229,4,47,0.03)_26%,transparent_27%,transparent_74%,rgba(229,4,47,0.03)_75%,rgba(229,4,47,0.03)_76%,transparent_77%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Core Team Members Section */}
        <section className="relative spacing-responsive-section border-t border-[#E5042F]/20">
          <div className="container-responsive">
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
                <Crown className="w-6 h-6 text-[#E5042F]" />
                <span className="text-white font-bold text-lg">CORE TEAM MEMBERS</span>
                <div className="w-2 h-2 bg-[#E5042F] rounded-full animate-pulse"></div>
              </div>
              
              <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-white mb-6">
                Leadership & Innovation
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The visionary leaders and key decision makers driving GAMERS TAG's success
              </p>
            </motion.div>

            <div className="team-grid-responsive">
              {coreTeamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group cursor-pointer"
                >
                  {/* Advanced HUD Core Team Card */}
                  <div className="relative bg-black h-[580px] overflow-hidden border-2 border-[#E5042F] group-hover:border-white transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(229,4,47,0.6)]">
                    
                    {/* HUD Corner Cutouts - Exact match to reference */}
                    <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                    <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                    <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                    <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>

                    {/* Status Indicator - Top Right */}
                    <div className="absolute top-5 right-5 z-10">
                      <motion.div 
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-4 h-4 bg-white group-hover:bg-[#E5042F] transition-colors duration-300 shadow-[0_0_15px_rgba(255,255,255,0.9)]"
                      />
                    </div>

                    {/* Inner Content Frame */}
                    <div className="absolute inset-4 border border-[#E5042F]/40 group-hover:border-white/60 transition-colors duration-300">
                      
                      {/* Content Layout */}
                      <div className="relative h-full flex flex-col p-6">
                        
                        {/* Profile Image Section - Larger and Centered */}
                        <div className="flex justify-center mb-6">
                          <div className="relative w-32 h-32 border-2 border-[#E5042F] group-hover:border-white transition-colors duration-300 bg-gradient-to-br from-[#E5042F]/30 to-black">
                            {member.image ? (
                              <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <Crown className="w-20 h-20 text-[#E5042F] group-hover:text-white transition-colors duration-300" />
                              </div>
                            )}
                            
                            {/* Image Corner Markers */}
                            <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                            <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                            <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                          </div>
                        </div>

                        {/* Name Section */}
                        <div className="text-center mb-2">
                          <h3 className="font-orbitron font-bold text-xl text-white tracking-wider uppercase leading-tight group-hover:text-white transition-colors duration-300">
                            {member.name}
                          </h3>
                        </div>

                        {/* Red Accent Line */}
                        <div className="w-full h-0.5 bg-[#E5042F] group-hover:bg-white transition-colors duration-300 mb-2"></div>

                        {/* Role Section */}
                        <div className="text-center mb-4">
                          <p className="text-gray-300 text-sm font-medium group-hover:text-gray-200 transition-colors duration-300">
                            {member.role}
                          </p>
                        </div>

                        {/* Description */}
                        <div className="text-center mb-4 flex-1">
                          <p className="text-gray-400 text-xs leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                            {member.bio}
                          </p>
                        </div>

                        {/* Key Expertise Section */}
                        <div className="mb-4">
                          <h4 className="text-white font-bold text-xs mb-2 tracking-wide border-b border-[#E5042F]/30 pb-1 group-hover:border-white/30 transition-colors duration-300">
                            KEY EXPERTISE
                          </h4>
                          <div className="grid grid-cols-2 gap-2">
                            {(member.expertise || []).slice(0, 4).map((skill, skillIndex) => (
                              <motion.div 
                                key={skillIndex}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: skillIndex * 0.1 }}
                                className="border border-[#E5042F]/60 bg-[#E5042F]/10 px-2 py-1.5 text-gray-300 text-xs font-medium group-hover:border-white/60 group-hover:bg-white/10 group-hover:text-white transition-all duration-300 text-center"
                              >
                                {skill}
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* View Profile Button - Fixed Positioning */}
                        <div className="mt-auto pt-2">
                          <Link href={`/team/${member.slug}`}>
                            <button className="w-full bg-[#E5042F] text-white font-bold py-3 text-center transition-all duration-300 hover:bg-white hover:text-black relative overflow-hidden border-2 border-[#E5042F] hover:border-white group/button">
                              <span className="relative z-10 flex items-center justify-center space-x-2 font-orbitron tracking-wider text-sm text-white group-hover/button:text-black transition-colors duration-300">
                                <span className="group-hover/button:text-black">View Profile</span>
                                <ExternalLink className="w-4 h-4 text-white group-hover/button:text-black transition-colors duration-300" />
                              </span>
                              
                              {/* Button Corner Accents */}
                              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white/60"></div>
                              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white/60"></div>
                              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white/60"></div>
                              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white/60"></div>
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Scanning Lines Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E5042F] to-transparent animate-pulse"></div>
                      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E5042F] to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
                      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-[#E5042F] to-transparent animate-pulse" style={{animationDelay: '0.5s'}}></div>
                      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#E5042F] to-transparent animate-pulse" style={{animationDelay: '1.5s'}}></div>
                    </div>

                    {/* HUD Data Stream Pattern */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none bg-[repeating-linear-gradient(90deg,transparent_0,transparent_98px,rgba(229,4,47,0.03)_100px)]"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Team Section */}
        <section className="relative py-20 border-t border-[#E5042F]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center space-x-3 px-6 py-3 mb-6 bg-gradient-to-r from-gray-900/80 to-black/80 border border-gray-700/50 rounded-none backdrop-blur-sm"
                   style={{
                     clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))'
                   }}>
                <DollarSign className="w-6 h-6 text-[#E5042F]" />
                <span className="text-white font-bold text-lg">Business Team</span>
                <span className="text-[#E5042F] font-bold text-sm">{businessTeamMembers.length} Members</span>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {businessTeamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group cursor-pointer"
                >
                  {/* Business Team Card - Matching Screenshot Design */}
                  <div className={`relative bg-black h-[500px] overflow-hidden border-2 transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(229,4,47,0.6)] ${
                    index === businessTeamMembers.length - 1 ? 'border-[#E5042F] group-hover:border-white' : 'border-gray-600 group-hover:border-[#E5042F]'
                  }`}>
                    
                    {/* HUD Corner Cutouts */}
                    <div className={`absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 transition-colors duration-300 ${
                      index === businessTeamMembers.length - 1 ? 'border-[#E5042F] group-hover:border-white' : 'border-gray-600 group-hover:border-[#E5042F]'
                    }`}></div>
                    <div className={`absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 transition-colors duration-300 ${
                      index === businessTeamMembers.length - 1 ? 'border-[#E5042F] group-hover:border-white' : 'border-gray-600 group-hover:border-[#E5042F]'
                    }`}></div>
                    <div className={`absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 transition-colors duration-300 ${
                      index === businessTeamMembers.length - 1 ? 'border-[#E5042F] group-hover:border-white' : 'border-gray-600 group-hover:border-[#E5042F]'
                    }`}></div>
                    <div className={`absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 transition-colors duration-300 ${
                      index === businessTeamMembers.length - 1 ? 'border-[#E5042F] group-hover:border-white' : 'border-gray-600 group-hover:border-[#E5042F]'
                    }`}></div>

                    {/* Status Indicator - Top Right */}
                    <div className="absolute top-5 right-5 z-10">
                      <motion.div 
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className={`w-4 h-4 transition-colors duration-300 shadow-[0_0_15px_rgba(255,255,255,0.9)] ${
                          index === businessTeamMembers.length - 1 ? 'bg-white group-hover:bg-[#E5042F]' : 'bg-gray-600 group-hover:bg-white'
                        }`}
                      />
                    </div>

                    {/* Inner Content Frame */}
                    <div className={`absolute inset-4 border transition-colors duration-300 ${
                      index === businessTeamMembers.length - 1 ? 'border-[#E5042F]/40 group-hover:border-white/60' : 'border-gray-600/40 group-hover:border-[#E5042F]/60'
                    }`}>
                      
                      {/* Content Layout */}
                      <div className="relative h-full flex flex-col p-6">
                        
                        {/* Profile Image Section */}
                        <div className="flex justify-center mb-6">
                          <div className={`relative w-24 h-24 border-2 transition-colors duration-300 bg-gradient-to-br to-black ${
                            index === businessTeamMembers.length - 1 ? 'border-[#E5042F] group-hover:border-white from-[#E5042F]/30' : 'border-gray-600 group-hover:border-[#E5042F] from-gray-600/30'
                          }`}>
                            {member.image ? (
                              <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <Crown className={`w-12 h-12 transition-colors duration-300 ${
                                  index === businessTeamMembers.length - 1 ? 'text-[#E5042F] group-hover:text-white' : 'text-gray-600 group-hover:text-[#E5042F]'
                                }`} />
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Name Section */}
                        <div className="text-center mb-2">
                          <h3 className={`font-orbitron font-bold text-lg tracking-wider uppercase leading-tight transition-colors duration-300 ${
                            index === businessTeamMembers.length - 1 ? 'text-white group-hover:text-[#E5042F]' : 'text-white group-hover:text-white'
                          }`}>
                            {member.name}
                          </h3>
                        </div>

                        {/* Job Role Badge */}
                        <div className="flex justify-center mb-4">
                          <div className={`px-3 py-1 text-xs font-bold tracking-wider transition-colors duration-300 ${
                            index === businessTeamMembers.length - 1 ? 'bg-[#E5042F]/20 border border-[#E5042F] text-[#E5042F] group-hover:bg-white/20 group-hover:border-white group-hover:text-white' : 'bg-gray-600/20 border border-gray-600 text-gray-400 group-hover:bg-[#E5042F]/20 group-hover:border-[#E5042F] group-hover:text-[#E5042F]'
                          }`}>
                            {member.role}
                          </div>
                        </div>

                        {/* Description */}
                        <div className="text-center mb-4">
                          <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                            {member.bio}
                          </p>
                          {member.title && (
                            <p className="text-gray-500 text-xs mt-3 italic font-medium">"{member.title}"</p>
                          )}
                        </div>

                        {/* Key Skills Section */}
                        <div className="mb-6">
                          <h4 className={`text-white font-bold text-xs mb-3 tracking-wide border-b pb-1 transition-colors duration-300 ${
                            index === businessTeamMembers.length - 1 ? 'border-[#E5042F]/30 group-hover:border-white/30' : 'border-gray-600/30 group-hover:border-[#E5042F]/30'
                          }`}>
                            Key Skills
                          </h4>
                          <div className="grid grid-cols-2 gap-2">
                            {(member.expertise || []).slice(0, 2).map((skill, skillIndex) => (
                              <motion.div 
                                key={skillIndex}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: skillIndex * 0.1 }}
                                className={`px-2 py-1.5 text-xs font-medium text-center transition-all duration-300 ${
                                  index === businessTeamMembers.length - 1 ? 'border border-[#E5042F]/60 bg-[#E5042F]/10 text-gray-300 group-hover:border-white/60 group-hover:bg-white/10 group-hover:text-white' : 'border border-gray-600/60 bg-gray-600/10 text-gray-400 group-hover:border-[#E5042F]/60 group-hover:bg-[#E5042F]/10 group-hover:text-gray-300'
                                }`}
                              >
                                {skill}
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* View Profile Button */}
                        <div className="mt-4">
                          <a 
                            href={member.linkedin || '#'} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block"
                          >
                            <button className="w-full bg-[#E5042F] text-white hover:bg-white hover:text-black active:bg-white active:text-black font-bold py-3 text-center transition-all duration-300 relative overflow-hidden border-2 border-[#E5042F] hover:border-white">
                              <span className="relative z-10 flex items-center justify-center space-x-2 font-orbitron tracking-wider text-sm text-white group-hover:text-black transition-colors duration-300">
                                <span>View Profile</span>
                                <ExternalLink className="w-4 h-4 text-white group-hover:text-black transition-colors duration-300" />
                              </span>
                              
                              {/* Button Corner Accents */}
                              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white/60"></div>
                              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white/60"></div>
                              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white/60"></div>
                              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white/60"></div>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Scanning Lines Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none">
                      <div className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent to-transparent animate-pulse ${
                        index === businessTeamMembers.length - 1 ? 'via-[#E5042F]' : 'via-gray-600'
                      }`}></div>
                      <div className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent to-transparent animate-pulse ${
                        index === businessTeamMembers.length - 1 ? 'via-[#E5042F]' : 'via-gray-600'
                      }`} style={{animationDelay: '1s'}}></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Department-based Team Sections */}
        {Object.keys(departmentTeamMembers).length > 0 && (
          <section className="relative py-20 border-t border-[#E5042F]/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <div className="inline-flex items-center space-x-3 px-6 py-3 mb-6 bg-gradient-to-r from-gray-900/80 to-black/80 border border-gray-700/50 rounded-none backdrop-blur-sm"
                     style={{
                       clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))'
                     }}>
                  <Users className="w-6 h-6 text-[#E5042F]" />
                  <span className="text-white font-bold text-lg">TEAM DEPARTMENTS</span>
                  <div className="w-2 h-2 bg-[#E5042F] rounded-full animate-pulse"></div>
                </div>
                
                <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-white mb-6">
                  Our Specialized Teams
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Expert professionals working across different departments to deliver exceptional gaming experiences
                </p>
              </motion.div>

              <div className="space-y-16">
                {Object.entries(departmentTeamMembers).map(([department, members], deptIndex) => {
                  const DeptIcon = departmentIcons[department] || Users;
                  const deptColor = departmentColors[department] || "from-gray-500/20 to-gray-900/20";
                  const deptName = departmentNames[department] || department;
                  
                  return (
                    <motion.div
                      key={department}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: deptIndex * 0.1 }}
                      className="group"
                    >
                      {/* Department Header */}
                      <div className="flex items-center justify-between mb-12">
                        <div className="flex items-center space-x-4">
                          <div className={`p-4 bg-gradient-to-br ${deptColor} border border-gray-700/50 rounded-none`}
                               style={{
                                 clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
                               }}>
                            <DeptIcon className="w-8 h-8 text-[#E5042F]" />
                          </div>
                          <div>
                            <h3 className="font-orbitron font-bold text-2xl md:text-3xl text-white mb-2">
                              {deptName}
                            </h3>
                            <p className="text-gray-400">
                              {members.length} member{members.length !== 1 ? 's' : ''}
                            </p>
                          </div>
                        </div>
                        
                        <div className="hidden md:flex items-center space-x-2">
                          <div className="w-16 h-[2px] bg-gradient-to-r from-[#E5042F] to-transparent"></div>
                          <div className="w-3 h-3 bg-[#E5042F] rounded-full animate-pulse"></div>
                        </div>
                      </div>

                      {/* Department Members Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {members.map((member, index) => (
                          <motion.div
                            key={member.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="group cursor-pointer"
                          >
                            {/* Department Team Card - Matching Business Team Design */}
                            <div className="relative bg-black h-[450px] overflow-hidden border-2 border-gray-600 group-hover:border-[#E5042F] transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(229,4,47,0.6)]">
                              
                              {/* HUD Corner Cutouts */}
                              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-gray-600 group-hover:border-[#E5042F] transition-colors duration-300"></div>
                              <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-gray-600 group-hover:border-[#E5042F] transition-colors duration-300"></div>
                              <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-gray-600 group-hover:border-[#E5042F] transition-colors duration-300"></div>
                              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-gray-600 group-hover:border-[#E5042F] transition-colors duration-300"></div>

                              {/* Status Indicator - Top Right */}
                              <div className="absolute top-5 right-5 z-10">
                                <motion.div 
                                  animate={{ opacity: [1, 0.3, 1] }}
                                  transition={{ duration: 2, repeat: Infinity }}
                                  className="w-4 h-4 bg-gray-600 group-hover:bg-white transition-colors duration-300 shadow-[0_0_15px_rgba(255,255,255,0.9)]"
                                />
                              </div>

                              {/* Inner Content Frame */}
                              <div className="absolute inset-4 border border-gray-600/40 group-hover:border-[#E5042F]/60 transition-colors duration-300">
                                
                                {/* Content Layout */}
                                <div className="relative h-full flex flex-col p-6">
                                  
                                  {/* Profile Image Section */}
                                  <div className="flex justify-center mb-6">
                                    <div className="relative w-24 h-24 border-2 border-gray-600 group-hover:border-[#E5042F] transition-colors duration-300 bg-gradient-to-br from-gray-600/30 to-black">
                                      {member.image ? (
                                        <img
                                          src={member.image}
                                          alt={member.name}
                                          className="w-full h-full object-cover"
                                        />
                                      ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                          <DeptIcon className="w-12 h-12 text-gray-600 group-hover:text-[#E5042F] transition-colors duration-300" />
                                        </div>
                                      )}
                                    </div>
                                  </div>

                                  {/* Name Section */}
                                  <div className="text-center mb-2">
                                    <h3 className="font-orbitron font-bold text-lg text-white tracking-wider uppercase leading-tight group-hover:text-white transition-colors duration-300">
                                      {member.name}
                                    </h3>
                                  </div>

                                  {/* Job Role Badge */}
                                  <div className="flex justify-center mb-4">
                                    <div className="bg-gray-600/20 border border-gray-600 text-gray-400 group-hover:bg-[#E5042F]/20 group-hover:border-[#E5042F] group-hover:text-[#E5042F] px-3 py-1 text-xs font-bold tracking-wider transition-colors duration-300">
                                      {member.role}
                                    </div>
                                  </div>

                                  {/* Bio Description */}
                                  <div className="text-center mb-4 flex-1">
                                    {member.bio && (
                                      <p className="text-gray-400 text-xs leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                        {member.bio}
                                      </p>
                                    )}
                                  </div>

                                  {/* Key Skills Section (if available) */}
                                  {member.expertise && member.expertise.length > 0 && (
                                    <div className="mb-4">
                                      <h4 className="text-white font-bold text-xs mb-3 tracking-wide border-b border-gray-600/30 group-hover:border-[#E5042F]/30 pb-1 transition-colors duration-300">
                                        Key Skills
                                      </h4>
                                      <div className="grid grid-cols-2 gap-2">
                                        {member.expertise.slice(0, 2).map((skill, skillIndex) => (
                                          <motion.div 
                                            key={skillIndex}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: skillIndex * 0.1 }}
                                            className="border border-gray-600/60 bg-gray-600/10 px-2 py-1.5 text-gray-400 text-xs font-medium group-hover:border-[#E5042F]/60 group-hover:bg-[#E5042F]/10 group-hover:text-gray-300 transition-all duration-300 text-center"
                                          >
                                            {skill}
                                          </motion.div>
                                        ))}
                                      </div>
                                    </div>
                                  )}

                                  {/* View Profile Button */}
                                  <div className="mt-4">
                                    <a 
                                      href={member.linkedin || '#'} 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className="block"
                                    >
                                      <button className="w-full bg-[#E5042F] text-white hover:bg-white hover:text-black active:bg-white active:text-black font-bold py-3 text-center transition-all duration-300 relative overflow-hidden border-2 border-[#E5042F] hover:border-white">
                                        <span className="relative z-10 flex items-center justify-center space-x-2 font-orbitron tracking-wider text-sm text-white hover:text-black transition-colors duration-300">
                                          <span>View Profile</span>
                                          <ExternalLink className="w-4 h-4 text-white hover:text-black transition-colors duration-300" />
                                        </span>
                                        
                                        {/* Button Corner Accents */}
                                        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white/60"></div>
                                        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white/60"></div>
                                        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white/60"></div>
                                        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white/60"></div>
                                      </button>
                                    </a>
                                  </div>
                                </div>
                              </div>

                              {/* Scanning Lines Effect */}
                              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none">
                                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent animate-pulse"></div>
                                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        <Footer />
      </div>
    </>
  );
}