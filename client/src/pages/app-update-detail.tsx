import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/seo-head";
import { 
  ArrowLeft,
  Download,
  Calendar,
  CheckCircle2,
  ExternalLink,
  Share2,
  Smartphone,
  Star,
  Zap,
  Shield,
  Sparkles,
  Clock
} from "lucide-react";

import { getAppUpdateById } from "@/data/app-updates";
import { coreTeamMembers } from "@/data/team-members";

const categoryIcons = {
  "Major Release": Sparkles,
  "Feature Update": Zap,
  "Bug Fix": Shield,
  "Security Update": Shield,
  "Gaming Features": Star,
  "Analytics": Zap
};

const categoryColors = {
  "Major Release": "bg-[#E5042F] text-white",
  "Feature Update": "bg-blue-500 text-white",
  "Bug Fix": "bg-green-500 text-white",
  "Security Update": "bg-purple-500 text-white",
  "Gaming Features": "bg-orange-500 text-white",
  "Analytics": "bg-blue-500 text-white"
};

export default function AppUpdateDetail() {
  const { id } = useParams<{ id: string }>();
  const updateData = id ? getAppUpdateById(id) : null;

  if (!updateData) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Update Not Found</h1>
          <Link href="/app-updates">
            <Button className="bg-[#E5042F] hover:bg-[#C5032A]">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to App Updates
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const CategoryIcon = categoryIcons[updateData.category as keyof typeof categoryIcons];

  return (
    <>
      <SEOHead 
        title={`${updateData.name} ${updateData.version} | GAMERS TAG`}
        description={updateData.description}
      />
      
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#E5042F]/20 via-black to-black"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link href="/app-updates">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black mb-8">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to App Updates
                </Button>
              </Link>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <Badge className={categoryColors[updateData.category as keyof typeof categoryColors]}>
                      <CategoryIcon className="w-4 h-4 mr-2" />
                      {updateData.category}
                    </Badge>
                    <span className="text-2xl font-mono text-[#E5042F]">{updateData.version}</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-[#E5042F] to-white bg-clip-text text-transparent">
                    {updateData.name}
                  </h1>
                  
                  <p className="text-xl text-gray-300 leading-relaxed mb-8">
                    {updateData.description}
                  </p>
                  
                  <div className="flex items-center space-x-6 mb-8">
                    <div className="flex items-center text-gray-400">
                      <Calendar className="w-5 h-5 mr-2" />
                      <span>Released: {new Date(updateData.releasedOn).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Download className="w-5 h-5 mr-2" />
                      <span>Available on {updateData.platform}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Button className="bg-[#E5042F] hover:bg-[#C5032A] text-white px-8 py-3">
                      <Download className="w-5 h-5 mr-2" />
                      View Update
                    </Button>
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-3">
                      <Share2 className="w-5 h-5 mr-2" />
                      Share Update
                    </Button>
                  </div>
                </div>
                
                {/* Update Image */}
                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="group"
                  >
                    <div className="bg-black border-2 border-white/30 group-hover:border-[#E5042F] transition-all duration-500 relative overflow-hidden">
                      {/* Corner accents */}
                      <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-white group-hover:border-[#E5042F] transition-colors duration-300 z-10"></div>
                      <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-white group-hover:border-[#E5042F] transition-colors duration-300 z-10"></div>
                      <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-white group-hover:border-[#E5042F] transition-colors duration-300 z-10"></div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-white group-hover:border-[#E5042F] transition-colors duration-300 z-10"></div>
                      
                      {/* Status indicator */}
                      <div className="absolute top-4 right-4 w-3 h-3 bg-white rounded-full group-hover:bg-[#E5042F] animate-pulse transition-colors duration-300 z-10"></div>
                      
                      <div className="aspect-video bg-gradient-to-br from-[#E5042F]/20 to-black flex items-center justify-center relative">
                        <Smartphone className="w-32 h-32 text-white group-hover:text-[#E5042F] group-hover:scale-110 transition-all duration-300" />
                        {/* Scan lines */}
                        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 group-hover:via-[#E5042F] transition-all duration-500"></div>
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 group-hover:via-[#E5042F] transition-all duration-500"></div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What's New Section */}
        <section className="py-24 px-4 bg-black/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What's New</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover all the new features and improvements in this update
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {updateData.whatsNew.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="bg-black border-2 border-white/30 hover:border-[#E5042F] transition-all duration-500 relative p-6 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#E5042F]/20">
                    {/* Corner accents */}
                    <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                    <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                    
                    {/* Number indicator */}
                    <div className="absolute top-4 left-4">
                      <div className="w-8 h-8 border-2 border-white group-hover:border-[#E5042F] bg-black flex items-center justify-center transition-all duration-300">
                        <span className="text-white group-hover:text-[#E5042F] text-xs font-bold transition-colors duration-300">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                    </div>
                    
                    {/* Status indicator */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full group-hover:bg-[#E5042F] animate-pulse transition-colors duration-300"></div>
                    
                    <div className="flex items-start space-x-4 pt-4">
                      <CheckCircle2 className="w-6 h-6 text-white group-hover:text-[#E5042F] transition-colors duration-300 mt-1 flex-shrink-0" />
                      <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                        {item}
                      </p>
                    </div>
                    
                    {/* Bottom HUD line */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-white/30 group-hover:bg-[#E5042F]/80 transition-colors duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Details Section */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Technical Details</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                System requirements and compatibility information
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="bg-black border-2 border-white/30 hover:border-[#E5042F] transition-all duration-500 relative p-6 text-center transform hover:scale-[1.05] hover:shadow-2xl hover:shadow-[#E5042F]/20">
                  {/* Corner accents */}
                  <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                  <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                  
                  <Download className="w-12 h-12 text-white group-hover:text-[#E5042F] transition-colors duration-300 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white group-hover:text-[#E5042F] transition-colors duration-300 mb-2">Size</h3>
                  <p className="text-gray-400 group-hover:text-white transition-colors duration-300">45 MB</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="bg-black border-2 border-white/30 hover:border-[#E5042F] transition-all duration-500 relative p-6 text-center transform hover:scale-[1.05] hover:shadow-2xl hover:shadow-[#E5042F]/20">
                  {/* Corner accents */}
                  <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                  <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                  
                  <Smartphone className="w-12 h-12 text-white group-hover:text-[#E5042F] transition-colors duration-300 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white group-hover:text-[#E5042F] transition-colors duration-300 mb-2">Compatibility</h3>
                  <p className="text-gray-400 group-hover:text-white transition-colors duration-300 text-sm">Android 7.0+, iOS 13.0+</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="bg-black border-2 border-white/30 hover:border-[#E5042F] transition-all duration-500 relative p-6 text-center transform hover:scale-[1.05] hover:shadow-2xl hover:shadow-[#E5042F]/20">
                  {/* Corner accents */}
                  <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                  <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                  
                  <Shield className="w-12 h-12 text-white group-hover:text-[#E5042F] transition-colors duration-300 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white group-hover:text-[#E5042F] transition-colors duration-300 mb-2">Requirements</h3>
                  <p className="text-gray-400 group-hover:text-white transition-colors duration-300 text-sm">{updateData.technicalDetails?.compatibility || "Android 7.0+, iOS 13.0+"}</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="bg-black border-2 border-white/30 hover:border-[#E5042F] transition-all duration-500 relative p-6 text-center transform hover:scale-[1.05] hover:shadow-2xl hover:shadow-[#E5042F]/20">
                  {/* Corner accents */}
                  <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                  <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                  
                  <Star className="w-12 h-12 text-white group-hover:text-[#E5042F] transition-colors duration-300 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white group-hover:text-[#E5042F] transition-colors duration-300 mb-2">Languages</h3>
                  <p className="text-gray-400 group-hover:text-white transition-colors duration-300 text-sm">{updateData.technicalDetails?.languages?.length || 7} supported</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Members Section */}
        <section className="py-24 px-4 bg-black/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Development Team</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet the core team members who brought you this update
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                coreTeamMembers.find(m => m.name === "JOSHUA KANATT"),
                coreTeamMembers.find(m => m.name === "ADESH KUMAR PATRA"), 
                coreTeamMembers.find(m => m.name === "HEMANTH JOSEPH"),
                coreTeamMembers.find(m => m.name === "Harsh singh"),
                coreTeamMembers.find(m => m.name === "Paul P Dickinson")
              ].filter((member): member is NonNullable<typeof member> => member !== undefined).map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="bg-black border-2 border-white/30 hover:border-[#E5042F] transition-all duration-500 relative p-6 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#E5042F]/20">
                    {/* Corner accents */}
                    <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                    <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                    
                    {/* Status indicator */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full group-hover:bg-[#E5042F] animate-pulse transition-colors duration-300"></div>
                    
                    <div className="text-center">
                      {/* Profile Image Placeholder */}
                      <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[#E5042F]/20 to-black border-2 border-[#E5042F]/60 group-hover:border-[#E5042F] transition-colors duration-300 flex items-center justify-center">
                        {member.image ? (
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <Star className="w-8 h-8 text-[#E5042F]" />
                        )}
                      </div>
                      
                      <h3 className="text-lg font-bold text-white group-hover:text-[#E5042F] transition-colors duration-300 mb-2">
                        {member.name}
                      </h3>
                      <p className="text-gray-400 group-hover:text-white transition-colors duration-300 text-sm mb-3">
                        {member.role}
                      </p>
                      <p className="text-gray-500 text-xs leading-relaxed">
                        {member.bio ? member.bio.substring(0, 80) + "..." : "Core team member driving innovation and excellence"}
                      </p>
                    </div>
                    
                    {/* Bottom HUD line */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-white/30 group-hover:bg-[#E5042F]/80 transition-colors duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section className="py-24 px-4 bg-black/50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Update?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Download the latest version and experience the improvements
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button className="bg-[#E5042F] hover:bg-[#C5032A] text-white px-12 py-4 text-lg">
                  <Download className="w-6 h-6 mr-3" />
                  Download {updateData.version}
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-12 py-4 text-lg">
                  <ExternalLink className="w-6 h-6 mr-3" />
                  View in Store
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}