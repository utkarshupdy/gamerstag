import { motion } from "framer-motion";
import { useRef } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { SEOHead } from '@/components/seo-head';
import { Link } from "wouter";
import { 
  ExternalLink, 
  Linkedin,
  ArrowRight,
  User,
  Zap,
  Shield,
  Target
} from "lucide-react";
import { completeTeamData } from '@/lib/complete-team-data';

// Filter and organize team data
const coreMembers = completeTeamData.filter(member => 
  member.isFounder || member.position.includes('Core')
).sort((a, b) => a.sortOrder - b.sortOrder);

const teamMembers = completeTeamData.filter(member => 
  !member.isFounder && !member.position.includes('Core')
).sort((a, b) => a.sortOrder - b.sortOrder);

export default function TeamNew() {
  return (
    <>
      <SEOHead
        title="Meet Our Team | GAMERS TAG - Gaming Industry Leaders"
        description="Meet the innovative minds behind GAMERS TAG. Our diverse team of gaming industry experts, developers, and visionaries building the future of gaming."
        keywords="GAMERS TAG team, gaming industry leaders, game developers, esports professionals, gaming startup team"
      />
      
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        <Navigation />

        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E5042F]/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#E5042F]/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="h-full w-full bg-[linear-gradient(rgba(229,4,47,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(229,4,47,0.1)_1px,transparent_1px)] bg-[length:50px_50px]"></div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center space-x-3 px-6 py-3 mb-8 bg-black/60 border border-[#E5042F]/30 backdrop-blur-sm">
                <Target className="w-5 h-5 text-[#E5042F]" />
                <span className="text-white font-bold text-sm tracking-wider">MEET THE TEAM</span>
                <div className="w-2 h-2 bg-[#E5042F] animate-pulse"></div>
              </div>
              
              <h1 className="font-bold text-5xl md:text-7xl text-white mb-6 leading-tight">
                Building the
                <span className="block text-[#E5042F]">Future of Gaming</span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our team is made up of some of the world's top tech talent in gaming. An interesting fact: the average age of our team is just 23
              </p>
            </motion.div>
          </div>
        </section>

        {/* Core Team Section */}
        <section className="relative py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center space-x-3 px-6 py-3 mb-6 bg-[#E5042F]/10 border border-[#E5042F]/30 backdrop-blur-sm">
                <Shield className="w-5 h-5 text-[#E5042F]" />
                <span className="text-white font-bold text-sm tracking-wider">CORE LEADERSHIP</span>
              </div>
              
              <h2 className="font-bold text-4xl md:text-5xl text-white mb-6">
                Leadership Team
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {coreMembers.map((member, index) => (
                <motion.div
                  key={member._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group cursor-pointer"
                >
                  <Link href={`/team/core/${member._id}`}>
                    <div className="relative bg-black h-[500px] border border-[#E5042F]/40 hover:border-[#E5042F] transition-all duration-500 hover:shadow-[0_0_40px_rgba(229,4,47,0.3)]">
                      
                      {/* Corner Cutouts */}
                      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>

                      {/* Status Indicator */}
                      <div className="absolute top-4 right-4 z-10">
                        <div className="w-3 h-3 bg-[#E5042F] animate-pulse shadow-[0_0_10px_rgba(229,4,47,0.8)]"></div>
                      </div>

                      {/* Content */}
                      <div className="relative h-full flex flex-col p-8">
                        
                        {/* Profile Image Frame */}
                        <div className="flex justify-center mb-6">
                          <div className="relative w-32 h-32 border-2 border-[#E5042F]/60 group-hover:border-white transition-colors duration-300">
                            <div className="w-full h-full bg-gradient-to-br from-[#E5042F]/20 to-black flex items-center justify-center">
                              <User className="w-16 h-16 text-[#E5042F] group-hover:text-white transition-colors duration-300" />
                            </div>
                            
                            {/* Image Corner Markers */}
                            <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                            <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                            <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                          </div>
                        </div>

                        {/* Name */}
                        <div className="text-center mb-2">
                          <h3 className="font-bold text-xl text-white group-hover:text-[#E5042F] transition-colors duration-300 leading-tight">
                            {member.name}
                          </h3>
                        </div>

                        {/* Role */}
                        <div className="text-center mb-4">
                          <p className="text-[#E5042F] text-sm font-medium group-hover:text-white transition-colors duration-300">
                            {member.position}
                          </p>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-[#E5042F]/30 group-hover:bg-white/30 transition-colors duration-300 mb-4"></div>

                        {/* Bio */}
                        <div className="text-center mb-6 flex-1">
                          <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                            {member.shortBio}
                          </p>
                        </div>

                        {/* Key Expertise */}
                        {member.expertise && member.expertise.length > 0 && (
                          <div className="mb-6">
                            <h4 className="text-white font-bold text-xs mb-3 tracking-wide">
                              KEY EXPERTISE
                            </h4>
                            <div className="grid grid-cols-2 gap-2">
                              {member.expertise.slice(0, 4).map((skill, skillIndex) => (
                                <div 
                                  key={skillIndex}
                                  className="border border-[#E5042F]/40 bg-[#E5042F]/10 px-2 py-1.5 text-gray-300 text-xs font-medium group-hover:border-white/40 group-hover:bg-white/10 group-hover:text-white transition-all duration-300 text-center"
                                >
                                  {skill}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* View Profile Button */}
                        <div className="mt-auto">
                          <div className="w-full bg-[#E5042F] text-white hover:bg-white hover:text-black font-bold py-3 text-center transition-all duration-300 relative overflow-hidden border border-[#E5042F] hover:border-black flex items-center justify-center space-x-2">
                            <span className="text-sm tracking-wider">View Profile</span>
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>

                      {/* Hover Effects */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E5042F] to-transparent animate-pulse"></div>
                        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E5042F] to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Members Section */}
        <section className="relative py-20 border-t border-[#E5042F]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center space-x-3 px-6 py-3 mb-6 bg-gray-900/40 border border-gray-700/40 backdrop-blur-sm">
                <Zap className="w-5 h-5 text-[#E5042F]" />
                <span className="text-white font-bold text-sm tracking-wider">TEAM MEMBERS</span>
                <span className="text-[#E5042F] font-bold text-sm">{teamMembers.length}+</span>
              </div>
              
              <h2 className="font-bold text-4xl md:text-5xl text-white mb-6">
                Our Amazing Team
              </h2>
              
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
                We're not just a team, we're a story. We are grateful to every current and former member of Gamers Tag who has been part of this dream journey.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (index % 8) * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group cursor-pointer"
                >
                  <div className="relative bg-black h-[320px] border border-gray-700/50 hover:border-[#E5042F]/60 transition-all duration-500 hover:shadow-[0_0_20px_rgba(229,4,47,0.2)]">
                    
                    {/* Corner Accents */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-gray-600 group-hover:border-[#E5042F] transition-colors duration-300"></div>
                    <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-gray-600 group-hover:border-[#E5042F] transition-colors duration-300"></div>
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-gray-600 group-hover:border-[#E5042F] transition-colors duration-300"></div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-gray-600 group-hover:border-[#E5042F] transition-colors duration-300"></div>

                    {/* Status Dot */}
                    <div className="absolute top-3 right-3 z-10">
                      <div className="w-2 h-2 bg-gray-600 group-hover:bg-[#E5042F] animate-pulse transition-colors duration-300"></div>
                    </div>

                    {/* Content */}
                    <div className="relative h-full flex flex-col p-6">
                      
                      {/* Avatar */}
                      <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-gray-700/30 to-black border border-gray-600 group-hover:border-[#E5042F] transition-colors duration-300 flex items-center justify-center">
                          <User className="w-8 h-8 text-gray-600 group-hover:text-[#E5042F] transition-colors duration-300" />
                        </div>
                      </div>

                      {/* Name */}
                      <div className="text-center mb-2">
                        <h3 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 leading-tight">
                          {member.name}
                        </h3>
                      </div>

                      {/* Role */}
                      <div className="text-center mb-4">
                        <p className="text-gray-400 text-xs font-medium group-hover:text-[#E5042F] transition-colors duration-300">
                          {member.position}
                        </p>
                      </div>

                      {/* Department Badge */}
                      <div className="flex justify-center mb-4">
                        <div className="bg-gray-800/50 border border-gray-600 text-gray-400 group-hover:bg-[#E5042F]/20 group-hover:border-[#E5042F] group-hover:text-[#E5042F] px-3 py-1 text-xs font-bold tracking-wider transition-all duration-300">
                          {member.department?.toUpperCase()}
                        </div>
                      </div>

                      {/* Key Skills */}
                      {member.expertise && member.expertise.length > 0 && (
                        <div className="mb-4 flex-1">
                          <div className="grid grid-cols-1 gap-2">
                            {member.expertise.slice(0, 2).map((skill, skillIndex) => (
                              <div 
                                key={skillIndex}
                                className="border border-gray-700/60 bg-gray-800/30 px-2 py-1.5 text-gray-400 text-xs font-medium group-hover:border-[#E5042F]/60 group-hover:bg-[#E5042F]/10 group-hover:text-gray-300 transition-all duration-300 text-center"
                              >
                                {skill}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* LinkedIn Link */}
                      <div className="mt-auto">
                        {member.linkedinUrl && (
                          <a 
                            href={member.linkedinUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-full bg-gray-800 text-gray-300 hover:bg-[#E5042F] hover:text-white font-bold py-2 text-center transition-all duration-300 border border-gray-700 hover:border-[#E5042F] flex items-center justify-center space-x-2"
                          >
                            <Linkedin className="w-4 h-4" />
                            <span className="text-xs tracking-wider">CONNECT</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}