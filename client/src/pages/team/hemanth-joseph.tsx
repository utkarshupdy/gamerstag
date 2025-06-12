import { SEOHead } from '@/components/seo-head';
import { EnhancedCard } from '@/components/EnhancedCard';
import { EnhancedButton } from '@/components/EnhancedButton';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, MapPin, Calendar, Briefcase, Award, Target, Users, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HemanthJosephProfile() {
  const member = {
    name: "Hemanth Joseph",
    role: "Core Team Member",
    type: "Team Member",
    linkedin: "https://www.hemanthjoseph.com/",
    website: "https://www.hemanthjoseph.com/",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face",
    location: "India",
    joinedDate: "2021",
    about: "Hemanth Joseph is a core team member at GAMERS TAG, bringing expertise in technology and product development. With a strong background in software engineering and a passion for gaming, Hemanth plays a crucial role in translating the company's vision into robust, scalable solutions that serve millions of gamers worldwide.",
    journey: "Hemanth's journey into the gaming industry began through his love for technology and gaming. Recognizing the potential of GAMERS TAG's vision early on, he joined the founding team to help build the technical foundation of what would become the world's largest gaming ecosystem. His journey from a tech enthusiast to a core team member showcases his dedication to making gaming a viable career path for everyone.",
    workingInGT: "As a core team member, Hemanth is instrumental in product development, technical architecture, and feature implementation. He works closely with the development team to ensure that GAMERS TAG's platform is robust, user-friendly, and scalable. His responsibilities include overseeing technical integrations, managing development timelines, and ensuring the platform can handle the growing user base while maintaining optimal performance.",
    workingWithGT: "Hemanth fosters a collaborative environment where technical excellence meets creative innovation. He mentors junior developers, leads technical discussions, and ensures that the team follows best practices in software development. His approach to teamwork emphasizes continuous learning, knowledge sharing, and maintaining high standards while encouraging experimentation and innovation in gaming technology.",
    achievements: [
      "Core contributor to GAMERS TAG's technical architecture",
      "Led multiple successful product launches and feature rollouts",
      "Built scalable systems supporting thousands of users",
      "Mentored and developed junior team members"
    ],
    skills: [
      "Software Engineering",
      "Product Development",
      "Technical Leadership",
      "System Architecture",
      "Team Mentoring",
      "Gaming Technology"
    ],
    quote: "Technology should empower gamers to achieve their dreams. At GAMERS TAG, we're building the tools that will transform how the world sees gaming careers."
  };

  return (
    <>
      <SEOHead
        title={`${member.name} - ${member.role} | GAMERS TAG Tech Leader`}
        description={`Meet ${member.name}, Core Team Member at GAMERS TAG. Learn about his technical expertise and role in building the world's largest gaming career ecosystem.`}
        keywords={`Hemanth Joseph, GAMERS TAG team, software engineering, gaming technology, product development, tech leadership`}
        url="/team/hemanth-joseph"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="absolute inset-0 bg-grid-white/10 bg-grid-pattern opacity-20" />
          <div className="relative max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <EnhancedButton
                variant="outline"
                className="mb-8"
                onClick={() => window.location.href = '/team'}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Team
              </EnhancedButton>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                {/* Profile Info */}
                <div className="lg:col-span-2">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="relative group">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-48 h-48 rounded-2xl object-cover shadow-2xl transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
                      />
                      
                      {/* White HUD Glassmorphic overlay */}
                      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out rounded-2xl"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/12 via-white/6 to-white/12 opacity-0 group-hover:opacity-90 transition-all duration-700 ease-out rounded-2xl"></div>
                      
                      {/* Enhanced HUD scanning effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl">
                        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
                        <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-transparent via-white to-transparent animate-pulse"></div>
                        <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-white to-transparent animate-pulse"></div>
                      </div>
                      
                      {/* Corner indicators */}
                      <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      
                      {/* Inner glow effect */}
                      <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(255,255,255,0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
                    </div>
                    <div className="flex-1">
                      <Badge variant="secondary" className="mb-4">
                        {member.type}
                      </Badge>
                      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        {member.name}
                      </h1>
                      <h2 className="text-2xl text-purple-400 mb-6">
                        {member.role}
                      </h2>
                      <div className="flex flex-wrap gap-4 mb-6">
                        <div className="flex items-center text-gray-300">
                          <MapPin className="w-4 h-4 mr-2" />
                          {member.location}
                        </div>
                        <div className="flex items-center text-gray-300">
                          <Calendar className="w-4 h-4 mr-2" />
                          Joined {member.joinedDate}
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <EnhancedButton
                          onClick={() => window.open(member.linkedin, '_blank')}
                          className="bg-blue-600 hover:bg-blue-700"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          LinkedIn
                        </EnhancedButton>
                        <EnhancedButton
                          variant="outline"
                          onClick={() => window.open(member.website, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Website
                        </EnhancedButton>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Quick Stats */}
                <div className="space-y-6">
                  <EnhancedCard className="bg-slate-800/50 backdrop-blur-sm border-slate-700 p-6">
                    <h3 className="text-lg font-bold text-white mb-4">Core Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </EnhancedCard>
                  
                  <EnhancedCard className="bg-slate-800/50 backdrop-blur-sm border-slate-700 p-6">
                    <h3 className="text-lg font-bold text-white mb-4">Key Achievements</h3>
                    <ul className="space-y-2">
                      {member.achievements.slice(0, 3).map((achievement, index) => (
                        <li key={index} className="flex items-start text-gray-300 text-sm">
                          <Award className="w-4 h-4 mr-2 mt-0.5 text-purple-400 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </EnhancedCard>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="px-4 pb-16">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <EnhancedCard className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border-purple-500/30 p-8 text-center">
                <blockquote className="text-xl md:text-2xl text-white italic leading-relaxed">
                  "{member.quote}"
                </blockquote>
                <cite className="text-purple-400 font-semibold mt-4 block">
                  — {member.name}
                </cite>
              </EnhancedCard>
            </motion.div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="px-4 pb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* About */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <EnhancedCard className="bg-slate-800/50 backdrop-blur-sm border-slate-700 p-8 h-full">
                  <div className="flex items-center mb-6">
                    <Users className="w-6 h-6 mr-3 text-purple-400" />
                    <h3 className="text-2xl font-bold text-white">About {member.name}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {member.about}
                  </p>
                </EnhancedCard>
              </motion.div>

              {/* Journey */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <EnhancedCard className="bg-slate-800/50 backdrop-blur-sm border-slate-700 p-8 h-full">
                  <div className="flex items-center mb-6">
                    <Target className="w-6 h-6 mr-3 text-purple-400" />
                    <h3 className="text-2xl font-bold text-white">The Journey</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {member.journey}
                  </p>
                </EnhancedCard>
              </motion.div>

              {/* Working in GAMERS TAG */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <EnhancedCard className="bg-slate-800/50 backdrop-blur-sm border-slate-700 p-8 h-full">
                  <div className="flex items-center mb-6">
                    <Briefcase className="w-6 h-6 mr-3 text-purple-400" />
                    <h3 className="text-2xl font-bold text-white">Working in GAMERS TAG</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {member.workingInGT}
                  </p>
                </EnhancedCard>
              </motion.div>

              {/* Working with GAMERS TAG */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <EnhancedCard className="bg-slate-800/50 backdrop-blur-sm border-slate-700 p-8 h-full">
                  <div className="flex items-center mb-6">
                    <Users className="w-6 h-6 mr-3 text-purple-400" />
                    <h3 className="text-2xl font-bold text-white">Working with the Team</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {member.workingWithGT}
                  </p>
                </EnhancedCard>
              </motion.div>
            </div>

            {/* All Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <EnhancedCard className="bg-slate-800/50 backdrop-blur-sm border-slate-700 p-8">
                <div className="flex items-center mb-6">
                  <Award className="w-6 h-6 mr-3 text-purple-400" />
                  <h3 className="text-2xl font-bold text-white">Key Achievements</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {member.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-purple-400 mt-3 mr-4 flex-shrink-0" />
                      <p className="text-gray-300 leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>
              </EnhancedCard>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Inspired by Hemanth's Technical Excellence?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Join GAMERS TAG's technical team and help build the future of gaming careers.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <EnhancedButton
                  size="lg"
                  onClick={() => window.location.href = '/features/jobs'}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  <Briefcase className="w-5 h-5 mr-2" />
                  View Tech Positions
                </EnhancedButton>
                <EnhancedButton
                  variant="outline"
                  size="lg"
                  onClick={() => window.location.href = '/team'}
                >
                  <Users className="w-5 h-5 mr-2" />
                  Meet the Team
                </EnhancedButton>
              </div>
            </motion.div>

            {/* Other Core Members Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Other Core Members</h2>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  Meet the other brilliant minds shaping the future of gaming at GAMERS TAG
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Joshua Kanatt - Founder & CEO */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <EnhancedCard className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border-slate-700 p-6 h-full hover:border-[#E5042F]/50 transition-all duration-500 group">
                    <div className="relative group/image mb-4">
                      <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
                        alt="Joshua Kanatt"
                        className="w-20 h-20 rounded-xl object-cover mx-auto transition-all duration-500 group-hover/image:shadow-[0_0_30px_rgba(229,4,47,0.3)]"
                      />
                      {/* Glassmorphic effect */}
                      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover/image:opacity-100 transition-all duration-700 ease-out rounded-xl"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/10 opacity-0 group-hover/image:opacity-90 transition-all duration-700 ease-out rounded-xl"></div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-white mb-2">Joshua Kanatt</h3>
                      <p className="text-[#E5042F] font-medium mb-3">Founder & CEO</p>
                      <p className="text-gray-300 text-sm mb-4">Visionary leader building the future of gaming careers and community connections.</p>
                      <EnhancedButton
                        variant="outline"
                        size="sm"
                        onClick={() => window.location.href = '/team/core/owner-001'}
                        className="w-full"
                      >
                        View Profile
                      </EnhancedButton>
                    </div>
                  </EnhancedCard>
                </motion.div>

                {/* Harsh Singh - Core Tech Member */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <EnhancedCard className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border-slate-700 p-6 h-full hover:border-[#E5042F]/50 transition-all duration-500 group">
                    <div className="relative group/image mb-4">
                      <img
                        src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300&h=300&fit=crop&crop=face"
                        alt="Harsh Singh"
                        className="w-20 h-20 rounded-xl object-cover mx-auto transition-all duration-500 group-hover/image:shadow-[0_0_30px_rgba(229,4,47,0.3)]"
                      />
                      {/* Glassmorphic effect */}
                      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover/image:opacity-100 transition-all duration-700 ease-out rounded-xl"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/10 opacity-0 group-hover/image:opacity-90 transition-all duration-700 ease-out rounded-xl"></div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-white mb-2">Harsh Singh</h3>
                      <p className="text-[#E5042F] font-medium mb-3">Core Tech Member</p>
                      <p className="text-gray-300 text-sm mb-4">Backend architecture specialist ensuring scalable, high-performance gaming infrastructure.</p>
                      <EnhancedButton
                        variant="outline"
                        size="sm"
                        onClick={() => window.location.href = '/team/core/core-003'}
                        className="w-full"
                      >
                        View Profile
                      </EnhancedButton>
                    </div>
                  </EnhancedCard>
                </motion.div>

                {/* Paul Dickinson - Core Member */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <EnhancedCard className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border-slate-700 p-6 h-full hover:border-[#E5042F]/50 transition-all duration-500 group">
                    <div className="relative group/image mb-4">
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
                        alt="Paul Dickinson"
                        className="w-20 h-20 rounded-xl object-cover mx-auto transition-all duration-500 group-hover/image:shadow-[0_0_30px_rgba(229,4,47,0.3)]"
                      />
                      {/* Glassmorphic effect */}
                      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover/image:opacity-100 transition-all duration-700 ease-out rounded-xl"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/10 opacity-0 group-hover/image:opacity-90 transition-all duration-700 ease-out rounded-xl"></div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-white mb-2">Paul Dickinson</h3>
                      <p className="text-[#E5042F] font-medium mb-3">Core Member</p>
                      <p className="text-gray-300 text-sm mb-4">Strategic operations leader driving business growth and community engagement initiatives.</p>
                      <EnhancedButton
                        variant="outline"
                        size="sm"
                        onClick={() => window.location.href = '/team/core/core-004'}
                        className="w-full"
                      >
                        View Profile
                      </EnhancedButton>
                    </div>
                  </EnhancedCard>
                </motion.div>

                {/* Adesh Kumar Patra - Core Member */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="md:col-start-2 lg:col-start-auto"
                >
                  <EnhancedCard className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border-slate-700 p-6 h-full hover:border-[#E5042F]/50 transition-all duration-500 group">
                    <div className="relative group/image mb-4">
                      <img
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face"
                        alt="Adesh Kumar Patra"
                        className="w-20 h-20 rounded-xl object-cover mx-auto transition-all duration-500 group-hover/image:shadow-[0_0_30px_rgba(229,4,47,0.3)]"
                      />
                      {/* Glassmorphic effect */}
                      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover/image:opacity-100 transition-all duration-700 ease-out rounded-xl"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/10 opacity-0 group-hover/image:opacity-90 transition-all duration-700 ease-out rounded-xl"></div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-white mb-2">Adesh Kumar Patra</h3>
                      <p className="text-[#E5042F] font-medium mb-3">Core Member</p>
                      <p className="text-gray-300 text-sm mb-4">Innovation catalyst focusing on emerging technologies and platform advancement strategies.</p>
                      <EnhancedButton
                        variant="outline"
                        size="sm"
                        onClick={() => window.location.href = 'team/core/core-002'}
                        className="w-full"
                      >
                        View Profile
                      </EnhancedButton>
                    </div>
                  </EnhancedCard>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}