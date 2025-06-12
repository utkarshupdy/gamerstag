import { useParams, useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, MapPin, Calendar, Award, Quote, Users, Briefcase, GraduationCap, Target, Lightbulb, Code, Star, Building, Wrench } from 'lucide-react';
import { Link } from 'wouter';
import { CyberpunkButton } from '@/components/cyberpunk-button';
import { CyberpunkBox } from '@/components/cyberpunk-box';
import { PageBackground } from '@/components/page-background';
import { allDemoTeamMembers } from '@/lib/sanity-demo-data';

interface SanityTeamMember {
  _id: string;
  _type: string;
  name: string;
  position: string;
  department: string;
  bio: string;
  shortBio?: string;
  personalDetails?: {
    aboutMe: string;
    whatIDo: string;
    mission: string;
  };
  profileImage?: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  linkedinUrl?: string;
  website?: string;
  expertise?: string[];
  education?: string[];
  achievements?: string[];
  incubators?: string[];
  certifications?: string[];
  technologies?: string[];
  experience?: string[];
  projects?: string[];
  specializations?: string[];
  quote?: string;
  isActive: boolean;
  isFounder: boolean;
  sortOrder: number;
}

export default function TeamMemberDetail() {
  const { slug } = useParams();
  const [, setLocation] = useLocation();

  // Find team member by slug (convert name to slug format)
  const member = allDemoTeamMembers?.find((m: SanityTeamMember) => 
    m.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') === slug
  );

  if (!member) {
    return (
      <PageBackground>
        <div className="min-h-screen flex items-center justify-center">
          <CyberpunkBox className="p-8 text-center">
            <h1 className="text-2xl font-orbitron text-white mb-4">Team Member Not Found</h1>
            <Link href="/team">
              <CyberpunkButton>Back to Team</CyberpunkButton>
            </Link>
          </CyberpunkBox>
        </div>
      </PageBackground>
    );
  }

  return (
    <PageBackground variant="dark">
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-6">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link href="/team">
              <CyberpunkButton 
                variant="outline" 
                className="flex items-center gap-2"
                glowEffect={false}
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Team
              </CyberpunkButton>
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Profile Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1"
            >
              <CyberpunkBox variant="panel" className="p-6 sticky top-8">
                {/* Profile Image Placeholder */}
                <div className="w-full aspect-square bg-gradient-to-br from-[#E5042F]/20 to-purple-600/20 rounded-lg mb-6 flex items-center justify-center border-2 border-[#E5042F]/30">
                  <Users className="w-16 h-16 text-[#E5042F]" />
                </div>

                <h1 className="font-orbitron font-bold text-2xl text-white mb-2">
                  {member.name}
                </h1>
                
                <p className="text-[#E5042F] font-semibold mb-4">
                  {member.position}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Briefcase className="w-4 h-4 text-[#E5042F]" />
                    <span className="text-sm">{member.department?.toUpperCase()}</span>
                  </div>
                  
                  {member.isFounder && (
                    <div className="flex items-center gap-2 text-gray-300">
                      <Award className="w-4 h-4 text-[#E5042F]" />
                      <span className="text-sm">FOUNDING MEMBER</span>
                    </div>
                  )}
                </div>

                {/* Social Links */}
                <div className="space-y-3">
                  {member.linkedinUrl && (
                    <a 
                      href={member.linkedinUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-[#E5042F] transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">LinkedIn Profile</span>
                    </a>
                  )}
                  
                  {member.website && (
                    <a 
                      href={member.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-[#E5042F] transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Personal Website</span>
                    </a>
                  )}
                </div>
              </CyberpunkBox>
            </motion.div>

            {/* Right Column - Detailed Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Bio Section */}
              <CyberpunkBox variant="panel" className="p-6">
                <h2 className="font-orbitron font-bold text-xl text-white mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#E5042F]" />
                  About
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {member.bio}
                </p>
              </CyberpunkBox>

              {/* Personal Details Section */}
              {member.personalDetails && (
                <div className="space-y-6">
                  {/* About Me */}
                  <CyberpunkBox variant="panel" className="p-6">
                    <h2 className="font-orbitron font-bold text-xl text-white mb-4 flex items-center gap-2">
                      <Target className="w-5 h-5 text-[#E5042F]" />
                      Personal Journey
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                      {member.personalDetails.aboutMe}
                    </p>
                  </CyberpunkBox>

                  {/* What I Do */}
                  <CyberpunkBox variant="panel" className="p-6">
                    <h2 className="font-orbitron font-bold text-xl text-white mb-4 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-[#E5042F]" />
                      What I Do
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                      {member.personalDetails.whatIDo}
                    </p>
                  </CyberpunkBox>

                  {/* Mission */}
                  <CyberpunkBox variant="panel" className="p-6">
                    <h2 className="font-orbitron font-bold text-xl text-white mb-4 flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-[#E5042F]" />
                      Mission & Vision
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                      {member.personalDetails.mission}
                    </p>
                  </CyberpunkBox>
                </div>
              )}

              {/* Quote Section */}
              {member.quote && (
                <CyberpunkBox variant="panel" className="p-6">
                  <h2 className="font-orbitron font-bold text-xl text-white mb-4 flex items-center gap-2">
                    <Quote className="w-5 h-5 text-[#E5042F]" />
                    Vision & Philosophy
                  </h2>
                  <blockquote className="text-gray-300 italic leading-relaxed border-l-4 border-[#E5042F] pl-4">
                    "{member.quote}"
                  </blockquote>
                </CyberpunkBox>
              )}

              {/* Expertise Section */}
              {member.expertise && member.expertise.length > 0 && (
                <CyberpunkBox variant="panel" className="p-6">
                  <h2 className="font-orbitron font-bold text-xl text-white mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#E5042F]" />
                    Areas of Expertise
                  </h2>
                  <div className="grid md:grid-cols-2 gap-3">
                    {member.expertise.map((skill, index) => (
                      <div 
                        key={index}
                        className="bg-black/40 border border-[#E5042F]/30 px-3 py-2 rounded text-sm text-gray-300 hover:border-[#E5042F] transition-colors"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </CyberpunkBox>
              )}

              {/* Education Section */}
              {member.education && member.education.length > 0 && (
                <CyberpunkBox variant="panel" className="p-6">
                  <h2 className="font-orbitron font-bold text-xl text-white mb-4 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-[#E5042F]" />
                    Education
                  </h2>
                  <div className="space-y-3">
                    {member.education.map((edu, index) => (
                      <div 
                        key={index}
                        className="bg-black/20 border-l-4 border-[#E5042F] pl-4 py-2"
                      >
                        <p className="text-gray-300">{edu}</p>
                      </div>
                    ))}
                  </div>
                </CyberpunkBox>
              )}

              {/* Achievements Section */}
              {member.achievements && member.achievements.length > 0 && (
                <CyberpunkBox variant="panel" className="p-6">
                  <h2 className="font-orbitron font-bold text-xl text-white mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#E5042F]" />
                    Key Achievements
                  </h2>
                  <div className="grid gap-3">
                    {member.achievements.map((achievement, index) => (
                      <div 
                        key={index}
                        className="flex items-center gap-3 bg-black/20 p-3 rounded border border-[#E5042F]/20 hover:border-[#E5042F]/50 transition-colors"
                      >
                        <div className="w-2 h-2 bg-[#E5042F] rounded-full flex-shrink-0"></div>
                        <p className="text-gray-300">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </CyberpunkBox>
              )}

              {/* Incubators & Programs Section */}
              {member.incubators && member.incubators.length > 0 && (
                <CyberpunkBox variant="panel" className="p-6">
                  <h2 className="font-orbitron font-bold text-xl text-white mb-4 flex items-center gap-2">
                    <Building className="w-5 h-5 text-[#E5042F]" />
                    Incubators & Programs
                  </h2>
                  <div className="grid md:grid-cols-2 gap-3">
                    {member.incubators.map((incubator, index) => (
                      <div 
                        key={index}
                        className="bg-gradient-to-r from-[#E5042F]/10 to-purple-600/10 border border-[#E5042F]/30 px-4 py-3 rounded text-sm text-gray-300 hover:border-[#E5042F] transition-colors"
                      >
                        {incubator}
                      </div>
                    ))}
                  </div>
                </CyberpunkBox>
              )}

              {/* Certifications Section */}
              {member.certifications && member.certifications.length > 0 && (
                <CyberpunkBox variant="panel" className="p-6">
                  <h2 className="font-orbitron font-bold text-xl text-white mb-4 flex items-center gap-2">
                    <Star className="w-5 h-5 text-[#E5042F]" />
                    Certifications
                  </h2>
                  <div className="space-y-3">
                    {member.certifications.map((cert, index) => (
                      <div 
                        key={index}
                        className="bg-black/20 border-l-4 border-[#E5042F] pl-4 py-2"
                      >
                        <p className="text-gray-300">{cert}</p>
                      </div>
                    ))}
                  </div>
                </CyberpunkBox>
              )}

              {/* Technologies Section */}
              {member.technologies && member.technologies.length > 0 && (
                <CyberpunkBox variant="panel" className="p-6">
                  <h2 className="font-orbitron font-bold text-xl text-white mb-4 flex items-center gap-2">
                    <Code className="w-5 h-5 text-[#E5042F]" />
                    Technologies & Tools
                  </h2>
                  <div className="grid md:grid-cols-2 gap-3">
                    {member.technologies.map((tech, index) => (
                      <div 
                        key={index}
                        className="bg-black/40 border border-[#E5042F]/30 px-3 py-2 rounded text-sm text-gray-300 hover:border-[#E5042F] transition-colors font-mono"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </CyberpunkBox>
              )}

              {/* Experience Section */}
              {member.experience && member.experience.length > 0 && (
                <CyberpunkBox variant="panel" className="p-6">
                  <h2 className="font-orbitron font-bold text-xl text-white mb-4 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-[#E5042F]" />
                    Professional Experience
                  </h2>
                  <div className="space-y-3">
                    {member.experience.map((exp, index) => (
                      <div 
                        key={index}
                        className="bg-black/20 border-l-4 border-[#E5042F] pl-4 py-2"
                      >
                        <p className="text-gray-300">{exp}</p>
                      </div>
                    ))}
                  </div>
                </CyberpunkBox>
              )}

              {/* Projects Section */}
              {member.projects && member.projects.length > 0 && (
                <CyberpunkBox variant="panel" className="p-6">
                  <h2 className="font-orbitron font-bold text-xl text-white mb-4 flex items-center gap-2">
                    <Wrench className="w-5 h-5 text-[#E5042F]" />
                    Key Projects
                  </h2>
                  <div className="grid gap-3">
                    {member.projects.map((project, index) => (
                      <div 
                        key={index}
                        className="flex items-center gap-3 bg-black/20 p-3 rounded border border-[#E5042F]/20 hover:border-[#E5042F]/50 transition-colors"
                      >
                        <div className="w-2 h-2 bg-[#E5042F] rounded-full flex-shrink-0"></div>
                        <p className="text-gray-300">{project}</p>
                      </div>
                    ))}
                  </div>
                </CyberpunkBox>
              )}

              {/* Specializations Section */}
              {member.specializations && member.specializations.length > 0 && (
                <CyberpunkBox variant="panel" className="p-6">
                  <h2 className="font-orbitron font-bold text-xl text-white mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-[#E5042F]" />
                    Specializations
                  </h2>
                  <div className="grid md:grid-cols-2 gap-3">
                    {member.specializations.map((spec, index) => (
                      <div 
                        key={index}
                        className="bg-gradient-to-r from-[#E5042F]/10 to-purple-600/10 border border-[#E5042F]/30 px-3 py-2 rounded text-sm text-gray-300 hover:border-[#E5042F] transition-colors"
                      >
                        {spec}
                      </div>
                    ))}
                  </div>
                </CyberpunkBox>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </PageBackground>
  );
}