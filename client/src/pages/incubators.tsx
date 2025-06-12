import { useState } from 'react';
import { SEOHead } from '@/components/seo-head';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Badge } from '@/components/ui/badge';
import { useIncubators } from '@/hooks/useSanity';
import { urlFor } from '@/lib/sanity';
import type { SanityIncubator } from '@/types/sanity';
import { ExternalLink, Users, Briefcase, MapPin, Globe, Rocket, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

const incubators = [
  {
    name: "NASSCOM 10,000 Start-ups",
    description: "GAMERS TAG was selected as one of the programme's members, gaining access to NASSCOM's mentorship network, investor showcases, and industry events to accelerate our growth.",
    website: "https://10000startups.nasscom.in/",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&crop=center",
    benefits: ["Mentorship Network", "Investor Showcases", "Industry Events", "Growth Acceleration"],
    type: "Tech Incubator"
  },
  {
    name: "Microsoft for Startups – Founder Hub",
    description: "As a Founder Hub incubatee, GAMERS TAG receives up to $150k in Azure credits, technical support, and co-selling opportunities with Microsoft's sales teams.",
    website: "https://startups.microsoft.com/",
    logo: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=200&h=100&fit=crop&crop=center",
    benefits: ["$150k Azure Credits", "Technical Support", "Co-selling Opportunities", "Sales Team Access"],
    type: "Global Tech Platform"
  },
  {
    name: "Razorpay Rize",
    description: "Through Razorpay Rize, we tapped into specialised payment infrastructure credits, community workshops, and one-on-one mentorship to streamline our monetisation features.",
    website: "https://razorpay.com/rize/",
    logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=100&fit=crop&crop=center",
    benefits: ["Payment Infrastructure", "Community Workshops", "One-on-one Mentorship", "Monetization Support"],
    type: "Fintech Accelerator"
  },
  {
    name: "PDPU Innovation & Incubation Centre",
    description: "Incubated at Pandit Deendayal Energy University, we leveraged their state-of-the-art lab facilities, student talent pool, and regional industry partnerships to refine our MVP.",
    website: "https://www.pdpu.ac.in/innovation-incubation.html",
    logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&h=100&fit=crop&crop=center",
    benefits: ["Lab Facilities", "Student Talent Pool", "Industry Partnerships", "MVP Development"],
    type: "University Incubator"
  },
  {
    name: "Atal Incubation Centre (AIC) – PEC",
    description: "Part of the 2023 cohort, GAMERS TAG benefited from AIC's seed funding support, infrastructure, and mentorship from serial entrepreneurs.",
    website: "https://www.pec.edu/aic",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop&crop=center",
    benefits: ["Seed Funding", "Infrastructure Support", "Serial Entrepreneur Mentorship", "2023 Cohort"],
    type: "Government Initiative"
  },
  {
    name: "Wadhwani Foundation Cohort LiftOff 12.2",
    description: "Selected for LiftOff 12.2, we joined a cohort of high-growth startups for intensive capacity-building workshops and access to global expert networks.",
    website: "https://wadhwanifoundation.org/",
    logo: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=200&h=100&fit=crop&crop=center",
    benefits: ["Capacity Building", "Global Expert Networks", "High-growth Cohort", "Intensive Workshops"],
    type: "Foundation Program"
  },
  {
    name: "Stanford Seed Spark Program",
    description: "As Seed Spark participants, we undertook a tailored leadership curriculum from Stanford GSB faculty and gained connections to Silicon Valley advisors to scale our impact.",
    website: "https://seedprogram.org/seed-spark",
    logo: "https://images.unsplash.com/photo-1607706189992-eae578626c86?w=200&h=100&fit=crop&crop=center",
    benefits: ["Stanford GSB Curriculum", "Leadership Training", "Silicon Valley Advisors", "Impact Scaling"],
    type: "Elite Education Program"
  },
  {
    name: "Startup India",
    description: "GAMERS TAG is officially recognized under the Startup India initiative by DPIIT, Government of India. This empowers us to access a wide range of benefits including government funding, tax exemptions, easier compliance, and participation in national-level startup support programs.",
    website: "https://www.startupindia.gov.in",
    logo: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=200&h=100&fit=crop&crop=center",
    benefits: ["DPIIT Recognition", "Seed Fund & Tax Benefits", "Access to Government Tenders", "Intellectual Property (IP) Support"],
    type: "Government Initiative",
    status: "DPIIT-Recognized Startup"
  },
  {
    name: "Kerala Startup Mission (KSUM)",
    description: "GAMERS TAG is a registered startup under the Kerala Startup Mission (KSUM). Through this, we benefit from the vibrant Kerala tech ecosystem, state-backed incubation support, funding schemes, and access to infrastructure like Fab Labs and co-working spaces.",
    website: "https://startupmission.kerala.gov.in",
    logo: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=100&fit=crop&crop=center",
    benefits: ["Idea Grant & Seed Funding", "Mentorship & Investor Access", "Product Development Support", "Access to KSUM Events & Infra"],
    type: "Government Initiative",
    status: "Registered Startup Member"
  }
];

export default function Incubators() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredIncubators = selectedFilter === 'all' 
    ? incubators 
    : incubators.filter(incubator => 
        incubator.type.toLowerCase().includes(selectedFilter.toLowerCase())
      );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <>
      <SEOHead
        title="Incubators & Partners - GAMERS TAG | Gaming Startup Incubation"
        description="Discover the prestigious incubators and organizations that have supported GAMERS TAG's journey. From NASSCOM 10,000 Startups to Stanford Seed Spark Program, see our partnerships that drive gaming innovation."
        keywords="gaming incubators, startup accelerators, NASSCOM 10000 startups, Microsoft for startups, gaming partnerships, esports incubation, tech accelerators"
        canonical="/incubators"
      />
      
      <div className="min-h-screen bg-black relative overflow-hidden">
        <Navigation />
        
        {/* Interactive Dark Background with Animated Elements */}
        <div className="absolute inset-0">
          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="grid-pattern animate-pulse"></div>
          </div>
          
          {/* Moving Red Glow Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#E5042F]/12 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-[#E5042F]/18 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.2s'}}></div>
            <div className="absolute top-1/2 left-1/6 w-64 h-64 bg-[#E5042F]/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2.5s'}}></div>
            <div className="absolute bottom-1/2 right-1/6 w-72 h-72 bg-[#E5042F]/14 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.7s'}}></div>
          </div>
          
          {/* Scanning Lines */}
          <div className="absolute inset-0 opacity-25">
            <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#E5042F] to-transparent animate-pulse" style={{top: '15%'}}></div>
            <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#E5042F] to-transparent animate-pulse" style={{top: '45%', animationDelay: '2s'}}></div>
            <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#E5042F] to-transparent animate-pulse" style={{top: '75%', animationDelay: '1.3s'}}></div>
          </div>
          
          {/* Cyberpunk Circuit Lines */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#E5042F] to-transparent animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#E5042F] to-transparent animate-pulse" style={{animationDelay: '1.8s'}}></div>
          </div>
          
          {/* Dark Overlay to Keep Text Readable */}
          <div className="absolute inset-0 bg-black/45"></div>
        </div>
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 text-center overflow-hidden">
          <div className="relative max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 px-6 py-3 mb-8 border border-[#E5042F]/30 rounded-full bg-black/20 backdrop-blur-sm">
                <Rocket className="w-5 h-5 text-[#E5042F]" />
                <span className="text-white font-medium">Our Incubators & Partners</span>
                <div className="w-2 h-2 bg-[#E5042F] rounded-full animate-pulse"></div>
              </div>
              
              <h1 className="font-orbitron font-bold text-5xl md:text-7xl mb-6">
                <span className="text-white">Elite </span>
                <span className="text-white">Incubators</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Backed by the world's most prestigious gaming and tech incubators, GAMERS TAG is supported by industry leaders who believe in our vision to revolutionize gaming careers.
              </p>
              

            </motion.div>
          </div>
        </section>

        {/* Enhanced Filter Section */}
        <section className="px-4 pb-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {['all', 'Tech', 'University', 'Government', 'Foundation', 'Global'].map((filter) => (
                <motion.button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-6 py-3 capitalize font-medium border-2 transition-all duration-300 relative overflow-hidden ${
                    selectedFilter === filter 
                      ? 'bg-[#E5042F] text-white border-[#E5042F] shadow-[0_0_20px_#E5042F70]' 
                      : 'bg-black/60 text-gray-300 border-[#E5042F]/30 hover:border-[#E5042F] hover:text-white hover:bg-[#E5042F]/20'
                  }`}
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">
                    {filter === 'all' ? 'All Partners' : `${filter} Partners`}
                  </span>
                  {selectedFilter === filter && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#E5042F] to-white opacity-20"
                      initial={{ x: '-100%' }}
                      animate={{ x: '100%' }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Animated Sharp HUD Cards Grid */}
        <section className="px-4 pb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredIncubators.map((incubator, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    rotateY: 5,
                    z: 50
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20 
                  }}
                >
                  <div className="group relative h-full">
                    {/* Sharp HUD Card with Angular Design */}
                    <div className="relative bg-black/80 backdrop-blur-xl border-2 border-[#E5042F]/50 p-6 h-full transform transition-all duration-500 group-hover:border-[#E5042F] group-hover:shadow-[0_0_30px_#E5042F70] group-hover:bg-black/90" 
                         style={{
                           clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'
                         }}>
                      
                      {/* Corner Accents */}
                      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                      
                      {/* Scan Line Animation */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#E5042F] to-transparent animate-pulse"></div>
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse" style={{animationDelay: '0.5s'}}></div>
                      </div>

                      {/* Header with Logo and Title */}
                      <div className="flex items-center gap-4 mb-6 relative z-10">
                        <div className="relative">
                          <motion.img
                            src={incubator.logo}
                            alt={`${incubator.name} logo`}
                            className="w-16 h-16 rounded-lg object-cover border-2 border-[#E5042F]/30 group-hover:border-white transition-all duration-300"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.8 }}
                          />
                          <div className="absolute inset-0 bg-[#E5042F]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-2 font-orbitron group-hover:text-[#E5042F] transition-colors duration-300">
                            {incubator.name}
                          </h3>
                          <Badge className="bg-[#E5042F]/20 border-[#E5042F]/50 text-[#E5042F] text-xs px-3 py-1 group-hover:bg-white/20 group-hover:text-white group-hover:border-white/50 transition-all duration-300">
                            {incubator.type}
                          </Badge>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <div className="mb-6 relative z-10">
                        <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                          {incubator.description}
                        </p>
                      </div>
                      
                      {/* Benefits Grid */}
                      <div className="mb-6 relative z-10">
                        <h4 className="text-white font-semibold mb-3 font-orbitron group-hover:text-[#E5042F] transition-colors duration-300">
                          Key Benefits
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {incubator.benefits.map((benefit, idx) => (
                            <motion.div 
                              key={idx} 
                              className="text-xs text-gray-400 bg-[#E5042F]/10 px-3 py-2 border border-[#E5042F]/20 group-hover:bg-white/10 group-hover:text-white group-hover:border-white/30 transition-all duration-300"
                              style={{
                                clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                              }}
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.2 }}
                            >
                              {benefit}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      
                      {/* CTA Button */}
                      <motion.button
                        onClick={() => window.open(incubator.website, '_blank')}
                        className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#E5042F]/20 border-2 border-[#E5042F]/50 text-[#E5042F] font-medium group-hover:bg-[#E5042F] group-hover:text-white group-hover:border-[#E5042F] transition-all duration-300 relative z-10"
                        style={{
                          clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span>Visit Website</span>
                        <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                      </motion.button>
                    </div>

                    {/* Holographic Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#E5042F]/10 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                         style={{
                           clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'
                         }}>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}