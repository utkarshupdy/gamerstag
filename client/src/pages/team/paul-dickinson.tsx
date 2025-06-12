import { SEOHead } from '@/components/seo-head';
import { EnhancedCard } from '@/components/EnhancedCard';
import { EnhancedButton } from '@/components/EnhancedButton';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, MapPin, Calendar, Briefcase, Award, Target, Users, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PaulDickinsonProfile() {
  const member = {
    name: "Paul P Dickinson",
    role: "Core Team Member",
    type: "Team Member",
    linkedin: "https://www.linkedin.com/in/paul-dickinson-038511190/",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=600&fit=crop&crop=face",
    location: "India",
    joinedDate: "2022",
    about: "Paul P Dickinson is a versatile core team member at GAMERS TAG, bringing expertise in business operations and strategic development. His multifaceted skills in project management, business analysis, and team coordination have been essential in scaling GAMERS TAG's operations and ensuring smooth execution of the company's ambitious vision.",
    journey: "Paul's journey to GAMERS TAG was shaped by his belief in the transformative power of gaming and technology. With a background in business operations and a keen interest in the gaming industry, he recognized the potential of GAMERS TAG's mission early on. His journey from a business professional to a core team member demonstrates his commitment to revolutionizing how the gaming industry operates.",
    workingInGT: "In his role as a core team member, Paul focuses on operational excellence, project coordination, and strategic planning. He ensures that different teams work cohesively towards common goals, manages project timelines, and contributes to business strategy development. His work enables the smooth execution of complex initiatives and helps maintain GAMERS TAG's rapid growth trajectory.",
    workingWithGT: "Paul brings a structured, results-oriented approach to team collaboration. He facilitates cross-functional communication, leads project planning sessions, and ensures that strategic initiatives are executed effectively. His ability to see the big picture while managing detailed operations makes him a valuable bridge between different aspects of the business and technical teams.",
    achievements: [
      "Streamlined operational processes improving team efficiency by 40%",
      "Led cross-functional projects resulting in successful feature launches",
      "Developed strategic partnerships contributing to company growth",
      "Implemented project management frameworks adopted across teams"
    ],
    skills: [
      "Project Management",
      "Business Operations",
      "Strategic Planning",
      "Team Coordination",
      "Process Optimization",
      "Partnership Development"
    ],
    quote: "Success in the gaming industry requires perfect execution of bold visions. At GAMERS TAG, we're turning ambitious dreams into reality through disciplined execution and passionate teamwork."
  };

  return (
    <>
      <SEOHead
        title={`${member.name} - ${member.role} | GAMERS TAG Operations Leader`}
        description={`Meet ${member.name}, Core Team Member at GAMERS TAG. Learn about his expertise in business operations and strategic development for gaming careers.`}
        keywords={`Paul Dickinson, GAMERS TAG team, business operations, project management, strategic planning, gaming industry`}
        url="/team/paul-dickinson"
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
                  Meet the Team
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
                        onClick={() => window.location.href = 'team/core/core-003'}
                        className="w-full"
                      >
                        View Profile
                      </EnhancedButton>
                    </div>
                  </EnhancedCard>
                </motion.div>

                {/* Hemanth Joseph - Core Tech Member */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <EnhancedCard className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border-slate-700 p-6 h-full hover:border-[#E5042F]/50 transition-all duration-500 group">
                    <div className="relative group/image mb-4">
                      <img
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face"
                        alt="Hemanth Joseph"
                        className="w-20 h-20 rounded-xl object-cover mx-auto transition-all duration-500 group-hover/image:shadow-[0_0_30px_rgba(229,4,47,0.3)]"
                      />
                      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover/image:opacity-100 transition-all duration-700 ease-out rounded-xl"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/10 opacity-0 group-hover/image:opacity-90 transition-all duration-700 ease-out rounded-xl"></div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-white mb-2">Hemanth Joseph</h3>
                      <p className="text-[#E5042F] font-medium mb-3">Core Tech Member</p>
                      <p className="text-gray-300 text-sm mb-4">Cybersecurity expert and ethical hacker ensuring platform security and integrity.</p>
                      <EnhancedButton
                        variant="outline"
                        size="sm"
                        onClick={() => window.location.href = '/team/core/core-001'}
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
                        onClick={() => window.location.href = '/team/core/core-002'}
                        className="w-full"
                      >
                        View Profile
                      </EnhancedButton>
                    </div>
                  </EnhancedCard>
                </motion.div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Inspired by Paul's Strategic Excellence?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Join GAMERS TAG's operations team and help execute the vision that's transforming gaming careers.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <EnhancedButton
                  size="lg"
                  onClick={() => window.location.href = '/features/jobs'}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  <Briefcase className="w-5 h-5 mr-2" />
                  View Operations Roles
                </EnhancedButton>
                <EnhancedButton
                  variant="outline"
                  size="lg"
                  onClick={() => window.location.href = '/incubators'}
                >
                  <Users className="w-5 h-5 mr-2" />
                  Meet the Team
                </EnhancedButton>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}