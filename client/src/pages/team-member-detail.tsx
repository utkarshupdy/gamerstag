import { motion } from "framer-motion";
import { useParams, Link } from "wouter";
import { useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TeamMemberSEO } from "@/components/seo/EnhancedSEO";
import { 
  ArrowLeft,
  ExternalLink,
  Linkedin,
  Globe,
  Mail,
  Star,
  Award,
  Briefcase,
  GraduationCap,
  Target,
  Users,
  Quote,
  Building2
} from "lucide-react";
import { coreTeamMembers } from "@/data/team-members";
import { getTeamMemberSEO, generateTeamMemberStructuredData } from "@/lib/seo/team-member-slugs";

export default function TeamMemberDetail() {
  const { slug } = useParams<{ slug: string }>();
  const member = coreTeamMembers.find(m => m.slug === slug);
  const seoData = getTeamMemberSEO(slug || '');

  if (!member) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Team Member Not Found</h1>
          <Link href="/team">
            <Button className="bg-[#E5042F] hover:bg-[#C5032A]">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Team
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <TeamMemberSEO member={seoData || member} />
      
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#E5042F]/20 via-black to-black"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link href="/team">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black mb-8">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Team
                </Button>
              </Link>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <Badge className="bg-[#E5042F] text-white">
                      <Star className="w-4 h-4 mr-2" />
                      Core Team
                    </Badge>
                    <span className="text-gray-400">{member.type}</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-[#E5042F] to-white bg-clip-text text-transparent">
                    {member.fullName || member.name}
                  </h1>
                  
                  <h2 className="text-2xl text-[#E5042F] font-semibold mb-6">
                    {member.role}
                  </h2>

                  {member.title && (
                    <p className="text-xl text-gray-300 mb-6">
                      {member.title}
                    </p>
                  )}
                  
                  <p className="text-lg text-gray-300 leading-relaxed mb-8">
                    {member.bio}
                  </p>
                  
                  <div className="flex items-center space-x-4">
                    {member.socialLinks?.linkedin && (
                      <Button asChild className="bg-[#0077B5] hover:bg-[#005885] text-white">
                        <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="w-5 h-5 mr-2" />
                          LinkedIn
                        </a>
                      </Button>
                    )}
                    {member.socialLinks?.website && (
                      <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                        <a href={member.socialLinks.website} target="_blank" rel="noopener noreferrer">
                          <Globe className="w-5 h-5 mr-2" />
                          Website
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
                
                {/* Profile Image */}
                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="group"
                  >
                    <div className="bg-black border-2 border-white/30 group-hover:border-[#E5042F] transition-all duration-500 relative overflow-hidden aspect-square">
                      {/* Corner accents */}
                      <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-white group-hover:border-[#E5042F] transition-colors duration-300 z-10"></div>
                      <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-white group-hover:border-[#E5042F] transition-colors duration-300 z-10"></div>
                      <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-white group-hover:border-[#E5042F] transition-colors duration-300 z-10"></div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-white group-hover:border-[#E5042F] transition-colors duration-300 z-10"></div>
                      
                      {/* Status indicator */}
                      <div className="absolute top-4 right-4 w-3 h-3 bg-white rounded-full group-hover:bg-[#E5042F] animate-pulse transition-colors duration-300 z-10"></div>
                      
                      <div className="w-full h-full bg-gradient-to-br from-[#E5042F]/20 to-black flex items-center justify-center relative">
                        {member.image ? (
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <Star className="w-32 h-32 text-[#E5042F] group-hover:scale-110 transition-transform duration-300" />
                        )}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Biography Section */}
        {member.biography && (
          <section className="py-24 px-4 bg-black/30">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-black border-2 border-white/30 hover:border-[#E5042F] transition-all duration-500 relative p-8"
              >
                {/* Corner accents */}
                <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-white hover:border-[#E5042F] transition-colors duration-300"></div>
                <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-white hover:border-[#E5042F] transition-colors duration-300"></div>
                <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-white hover:border-[#E5042F] transition-colors duration-300"></div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-white hover:border-[#E5042F] transition-colors duration-300"></div>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  {member.biography}
                </p>
              </motion.div>
            </div>
          </section>
        )}

        {/* What I Do Section */}
        {member.whatIDo && (
          <section className="py-24 px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What I Do</h2>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-black border-2 border-white/30 hover:border-[#E5042F] transition-all duration-500 relative p-8"
              >
                {/* Corner accents */}
                <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-white hover:border-[#E5042F] transition-colors duration-300"></div>
                <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-white hover:border-[#E5042F] transition-colors duration-300"></div>
                <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-white hover:border-[#E5042F] transition-colors duration-300"></div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-white hover:border-[#E5042F] transition-colors duration-300"></div>
                
                <div className="flex items-start space-x-4">
                  <Briefcase className="w-8 h-8 text-[#E5042F] mt-2 flex-shrink-0" />
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {member.whatIDo}
                  </p>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Education Section */}
        {member.education && member.education.length > 0 && (
          <section className="py-24 px-4 bg-black/30">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Education</h2>
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {member.education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-black border-2 border-white/30 hover:border-[#E5042F] transition-all duration-500 relative p-6"
                  >
                    {/* Corner accents */}
                    <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-white hover:border-[#E5042F] transition-colors duration-300"></div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-white hover:border-[#E5042F] transition-colors duration-300"></div>
                    <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-white hover:border-[#E5042F] transition-colors duration-300"></div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-white hover:border-[#E5042F] transition-colors duration-300"></div>
                    
                    <div className="flex items-start space-x-4">
                      <GraduationCap className="w-6 h-6 text-[#E5042F] mt-1 flex-shrink-0" />
                      <p className="text-gray-300 leading-relaxed">
                        {edu}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Expertise Section */}
        {member.expertise && member.expertise.length > 0 && (
          <section className="py-24 px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Areas of Expertise</h2>
              </motion.div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {member.expertise.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-black border border-white/30 hover:border-[#E5042F] transition-all duration-300 p-4 text-center group"
                  >
                    <Target className="w-5 h-5 text-[#E5042F] mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Incubators & Programs Section */}
        {member.incubators && member.incubators.length > 0 && (
          <section className="py-24 px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Incubators & Programs</h2>
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {member.incubators.map((program, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-black border-2 border-white/30 hover:border-[#E5042F] transition-all duration-500 relative p-6"
                  >
                    {/* Corner accents */}
                    <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-white hover:border-[#E5042F] transition-colors duration-300"></div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-white hover:border-[#E5042F] transition-colors duration-300"></div>
                    <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-white hover:border-[#E5042F] transition-colors duration-300"></div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-white hover:border-[#E5042F] transition-colors duration-300"></div>
                    
                    <div className="flex items-start space-x-4">
                      <Award className="w-6 h-6 text-[#E5042F] mt-1 flex-shrink-0" />
                      <p className="text-gray-300 leading-relaxed">
                        {program}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Career Journey Section - Special for Abhinav */}
        {member.slug === 'abhinav-jain-ranka' && (
          <section className="py-24 px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Career Journey</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  14+ years of financial leadership across India's most recognized companies
                </p>
              </motion.div>
              
              <div className="space-y-8">
                {/* PharmEasy */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-black border-2 border-white/30 hover:border-[#E5042F] transition-all duration-500 relative p-8"
                >
                  <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-white hover:border-[#E5042F] transition-colors duration-300"></div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-white hover:border-[#E5042F] transition-colors duration-300"></div>
                  <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-white hover:border-[#E5042F] transition-colors duration-300"></div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-white hover:border-[#E5042F] transition-colors duration-300"></div>
                  
                  <div className="flex items-start space-x-6">
                    <div className="bg-[#E5042F] p-3 rounded-full flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h3 className="text-2xl font-bold text-white">Chief Financial Officer</h3>
                        <span className="text-[#E5042F] font-semibold">2017 – Present</span>
                      </div>
                      <p className="text-xl text-gray-300 mb-4">PharmEasy (Threpsi Solutions Pvt Ltd)</p>
                      <ul className="text-gray-300 space-y-2">
                        <li>• Raised over $1.5B across Series B–E and debt lines</li>
                        <li>• Led acquisition & integration of MedLife, Thyrocare, Aknamed, DocOn</li>
                        <li>• Drove IPO strategy, DRHP/RHP development, and investor engagement</li>
                        <li>• Optimized working capital cycle and created strategic tax savings over ₹110M annually</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                {/* Lead Fund Advisor */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-black border-2 border-white/30 hover:border-[#E5042F] transition-all duration-500 relative p-8"
                >
                  <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-white hover:border-[#E5042F] transition-colors duration-300"></div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-white hover:border-[#E5042F] transition-colors duration-300"></div>
                  <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-white hover:border-[#E5042F] transition-colors duration-300"></div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-white hover:border-[#E5042F] transition-colors duration-300"></div>
                  
                  <div className="flex items-start space-x-6">
                    <div className="bg-[#E5042F] p-3 rounded-full flex-shrink-0">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h3 className="text-2xl font-bold text-white">Lead Fund Advisor</h3>
                        <span className="text-[#E5042F] font-semibold">2015 – 2017</span>
                      </div>
                      <p className="text-xl text-gray-300 mb-4">Resurgence Capital / One Thirty Capital</p>
                      <ul className="text-gray-300 space-y-2">
                        <li>• Conducted equity research, financial modeling, and deal due diligence</li>
                        <li>• Managed relationships with fund managers and tracked pharma & IT sectors</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                {/* Finance Lead & Controller */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-black border-2 border-white/30 hover:border-[#E5042F] transition-all duration-500 relative p-8"
                >
                  <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-white hover:border-[#E5042F] transition-colors duration-300"></div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-white hover:border-[#E5042F] transition-colors duration-300"></div>
                  <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-white hover:border-[#E5042F] transition-colors duration-300"></div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-white hover:border-[#E5042F] transition-colors duration-300"></div>
                  
                  <div className="flex items-start space-x-6">
                    <div className="bg-[#E5042F] p-3 rounded-full flex-shrink-0">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h3 className="text-2xl font-bold text-white">Finance Lead & Controller</h3>
                        <span className="text-[#E5042F] font-semibold">2013 – 2015</span>
                      </div>
                      <p className="text-xl text-gray-300 mb-4">Capsugel Healthcare (KKR Portfolio Company)</p>
                      <ul className="text-gray-300 space-y-2">
                        <li>• Finalized books under US GAAP, led corporate budgeting and SAP implementation</li>
                        <li>• Coordinated with KKR on financial strategy and compliance initiatives</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        )}

        {/* Testimonial Section - Enhanced for Abhinav */}
        {member.testimonial && (
          <section className="py-24 px-4 bg-black/30">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {member.slug === 'abhinav-jain-ranka' ? 'Mentee Testimonials' : 'What Others Say'}
                </h2>
                {member.slug === 'abhinav-jain-ranka' && (
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Real impact from financial leadership and mentorship
                  </p>
                )}
              </motion.div>
              
              <div className={member.slug === 'abhinav-jain-ranka' ? 'grid md:grid-cols-2 gap-8' : 'max-w-4xl mx-auto text-center'}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-black border-2 border-white/30 hover:border-[#E5042F] transition-all duration-500 relative p-12"
                >
                  {/* Corner accents */}
                  <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-white hover:border-[#E5042F] transition-colors duration-300"></div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-white hover:border-[#E5042F] transition-colors duration-300"></div>
                  <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-white hover:border-[#E5042F] transition-colors duration-300"></div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-white hover:border-[#E5042F] transition-colors duration-300"></div>
                  
                  <Quote className="w-12 h-12 text-[#E5042F] mx-auto mb-6" />
                  <blockquote className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6 italic">
                    "{member.testimonial.quote}"
                  </blockquote>
                  <cite className="text-[#E5042F] font-semibold">
                    — {member.testimonial.author}
                  </cite>
                </motion.div>

                {member.slug === 'abhinav-jain-ranka' && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-black border-2 border-white/30 hover:border-[#E5042F] transition-all duration-500 relative p-12"
                  >
                    {/* Corner accents */}
                    <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-white hover:border-[#E5042F] transition-colors duration-300"></div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-white hover:border-[#E5042F] transition-colors duration-300"></div>
                    <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-white hover:border-[#E5042F] transition-colors duration-300"></div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-white hover:border-[#E5042F] transition-colors duration-300"></div>
                    
                    <Quote className="w-12 h-12 text-[#E5042F] mx-auto mb-6" />
                    <blockquote className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6 italic">
                      "His insights on structuring IPOs and managing investor relations helped me avoid costly pitfalls. An absolute powerhouse of financial strategy."
                    </blockquote>
                    <cite className="text-[#E5042F] font-semibold">
                      — Kunal Mehta, CFO, Fintech Scale-up
                    </cite>
                  </motion.div>
                )}
              </div>
            </div>
          </section>
        )}

        <Footer />
      </div>
    </>
  );
}