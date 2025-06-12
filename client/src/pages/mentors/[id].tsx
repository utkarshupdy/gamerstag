import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
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
  Phone
} from "lucide-react";

// Mentor data - Only Abhinav Jain Ranka
const mentorData = {
  "abhinav-jain": {
    id: "abhinav-jain",
    name: "Abhinav Jain Ranka",
    title: "Investor, Writer & Business Enthusiast",
    subtitle: "SVP(Finance)@CoinDCX, ExCFO-PharmEasy, Capsugel",
    hashtag: "#GrowthPartner - C.A., C.S. & B.Com.(H)",
    awards: "CA Business Leader 40Under40, BW Finance 40under40, CFO100 & FE'22 Finance Power List",
    company: "CoinDCX",
    location: "Mumbai, India",
    image: "/ajr.jpg",
    expertise: ["Fundraising Strategy & IPO Execution", "Mergers & Acquisitions (M&A)", "Strategic Tax Planning", "Cross-Border Accounting", "ERP Implementation", "Financial Modeling", "Working Capital Optimization", "Start-up to Scale-up Finance"],
    description: "As a seasoned CFO and finance strategist with over 14 years of experience, I've helped scale some of India's most recognized companies, including PharmEasy, where I led multi-billion-dollar fundraising rounds, IPO preparation, and large-scale M&A deals.",
    longDescription: "I specialize in aligning financial leadership with high-growth business goals spanning IPO readiness, due diligence, fundraising, business restructuring, and cross-border acquisitions. My leadership spans diverse industries from healthcare and pharma to tech, with extensive hands-on experience across Indian GAAP, IFRS, and US GAAP. I've worked with leading financial systems like SAP, D365, and Hyperion, and have built scalable finance automation solutions. I'm passionate about mentoring finance professionals and startup founders looking to navigate complex growth, funding, or exit scenarios.",
    achievements: [
      "Raised over $1.5B across Series B–E and debt lines at PharmEasy",
      "Led acquisition & integration of MedLife, Thyrocare, Aknamed, DocOn",
      "Drove IPO strategy, DRHP/RHP development, and investor engagement",
      "Optimized working capital cycle and created strategic tax savings over ₹110M annually",
      "CFO Next 100 Award – Excellence in M&A (2021)",
      "Core team member in the acquisition of Thyrocare (Listed Entity)",
      "Led ERP implementations with EY (D365), PwC (SAP), Deloitte (HFM)"
    ],
    careerPath: [
      {
        role: "Senior Vice President (SVP), Finance",
        company: "CoinDCX",
        duration: "2023 - Present",
        description: "Leading finance strategy for India's premier cryptocurrency exchange"
      },
      {
        role: "Chief Financial Officer",
        company: "PharmEasy (Threpsi Solutions Pvt Ltd)",
        duration: "2017 - 2023",
        description: "Led $1.5B+ fundraising, IPO strategy, and major M&A transactions"
      },
      {
        role: "Lead Fund Advisor",
        company: "Resurgence Capital / One Thirty Capital",
        duration: "2015 - 2017", 
        description: "Conducted equity research, financial modeling, and deal due diligence"
      },
      {
        role: "Finance Lead & Controller",
        company: "Capsugel Healthcare (KKR Portfolio Company)",
        duration: "2013 - 2015",
        description: "Finalized books under US GAAP, led corporate budgeting and SAP implementation"
      },
      {
        role: "Corporate Finance Manager",
        company: "Binani Industries Ltd",
        duration: "2012 - 2013",
        description: "Managed cross-border consolidations under IFRS/IGAAP"
      },
      {
        role: "Assistant Manager – Corporate Accounts",
        company: "Aditya Birla Nuvo Ltd",
        duration: "2009 - 2011",
        description: "Led IFRS implementation, BI system maintenance, and group company consolidations"
      }
    ],
    education: [
      {
        degree: "Chartered Accountant, ICAI",
        institution: "Institute of Chartered Accountants of India",
        year: "Cleared Final in 1st Attempt"
      },
      {
        degree: "Company Secretary, ICSI",
        institution: "Institute of Company Secretaries of India",
        year: "Certified"
      },
      {
        degree: "B.Com (Hons.)",
        institution: "Jai Narain Vyas University",
        year: "Graduate"
      }
    ],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/abhinavjainranka",
      twitter: "",
      website: ""
    },
    mentoringAreas: [
      "Fundraising Strategy & IPO Execution",
      "Mergers & Acquisitions (M&A)", 
      "Strategic Tax Planning & Restructuring",
      "Cross-Border Accounting & GAAP Compliance",
      "ERP Implementation (SAP, D365, HFM)",
      "Financial Modeling & Forecasting",
      "Working Capital & Treasury Optimization",
      "Start-up to Scale-up Finance Leadership"
    ],
    testimonials: [
      {
        name: "Alekh Dalal",
        role: "Founder, One Thirty Capital - Alternative Asset Management",
        rating: 5,
        text: "Abhinav is a thorough professional and has a strong detail oriented analytical approach to evaluating businesses, valuations, financials, and industries. He has been of tremendous value at One Thirty Capital and will be an asset wherever he is."
      },
      {
        name: "Yatharth Bhargova",
        role: "Strategic Finance Leader | CFO| Growth Mindset",
        rating: 5,
        text: "I worked with Abhinav in Pharmeasy. He is a great finance professional. He is calm under pressure and takes effective decision making. He partners with business partners and helps to get good value for them and for the business."
      },
      {
        name: "Sameer Patwardhan",
        role: "Finance Professional",
        rating: 5,
        text: "Abhinav is a thorough finance professional with deep understanding of finance function. He is very calm and composed in his approach and has very good analytical skills. He is a good mentor and guide."
      }
    ]
  }
};

// HUD Card Component
const HUDCard = ({ children, title, className = "" }: { children: React.ReactNode; title?: string; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className={`relative group ${className}`}
  >
    <div className="relative bg-black/60 backdrop-blur-lg border border-red-500/30 p-6 transition-all duration-300 group-hover:border-red-500/60 group-hover:shadow-lg group-hover:shadow-red-500/20"
         style={{
           clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
         }}>
      
      {/* Corner indicators */}
      <div className="absolute top-1 left-1 w-3 h-3 border-t border-l border-red-500 group-hover:border-white transition-colors duration-300"></div>
      <div className="absolute top-1 right-1 w-3 h-3 border-t border-r border-red-500 group-hover:border-white transition-colors duration-300"></div>
      <div className="absolute bottom-1 left-1 w-3 h-3 border-b border-l border-red-500 group-hover:border-white transition-colors duration-300"></div>
      <div className="absolute bottom-1 right-1 w-3 h-3 border-b border-r border-red-500 group-hover:border-white transition-colors duration-300"></div>
      
      {/* Scanning line effect */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></div>
      
      {title && (
        <h3 className="font-primary text-xl font-bold text-white mb-4 tracking-wide">
          {title}
        </h3>
      )}
      
      {children}
      
      {/* HUD grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_24%,rgba(229,4,47,0.03)_25%,rgba(229,4,47,0.03)_26%,transparent_27%,transparent_74%,rgba(229,4,47,0.03)_75%,rgba(229,4,47,0.03)_76%,transparent_77%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Bottom data stream effect */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-500/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  </motion.div>
);

// HUD Image Frame Component
const HUDImageFrame = ({ src, alt, className = "" }: { src: string; alt: string; className?: string }) => (
  <motion.div
    className={`relative group ${className}`}
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
  >
    <div className="relative bg-black/80 backdrop-blur-sm border-2 border-red-500/40 p-2 transition-all duration-500 group-hover:border-red-500 group-hover:shadow-2xl group-hover:shadow-red-500/40"
         style={{
           clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))'
         }}>
      
      {/* Corner brackets */}
      <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-red-500 group-hover:border-white transition-colors duration-300"></div>
      <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-red-500 group-hover:border-white transition-colors duration-300"></div>
      <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-red-500 group-hover:border-white transition-colors duration-300"></div>
      <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-red-500 group-hover:border-white transition-colors duration-300"></div>
      
      {/* Scanning lines */}
      <motion.div
        className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent"
        animate={{ 
          scaleX: [0, 1, 0],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Image with glow effect */}
      <div className="relative overflow-hidden"
           style={{
             clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
           }}>
        <img 
          src={src} 
          alt={alt}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
        />
        
        {/* Glow overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-red-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      
      {/* Corner dots */}
      {[0, 90, 180, 270].map((rotation, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 w-1 h-1 transform -translate-x-1/2 -translate-y-1/2"
          style={{ 
            transform: `translate(-50%, -50%) rotate(${rotation}deg) translateY(-120px)` 
          }}
          animate={{ 
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            delay: i * 0.5 
          }}
        >
          <div className="w-1 h-1 bg-red-500 rounded-full group-hover:bg-white transition-colors duration-300" />
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default function MentorDetail() {
  const { id } = useParams<{ id: string }>();
  const mentor = mentorData[id as keyof typeof mentorData];

  if (!mentor) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p>Mentor not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <SEOHead 
        title={`${mentor.name} - Mentor Profile | GAMERS TAG`}
        description={mentor.description}
        keywords={`${mentor.name}, mentor, finance, CFO, startup advisor, ${mentor.expertise.join(', ')}`}
        ogImage={mentor.image}
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-b from-black via-black/95 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link href="/mentors">
              <SharpButton variant="outline" size="sm" className="group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Mentors
              </SharpButton>
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Left Column - Image */}
            <div className="lg:col-span-1">
              <HUDImageFrame 
                src={mentor.image}
                alt={mentor.name}
                className="w-full max-w-md mx-auto"
              />
            </div>

            {/* Right Column - Basic Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="font-primary text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-[#E5042F] to-white bg-clip-text text-transparent">
                  {mentor.name}
                </h1>
                
                <div className="space-y-4 mb-8">
                  <h2 className="font-primary text-xl text-white font-medium leading-relaxed">
                    {mentor.title}
                  </h2>
                  <p className="text-gray-300 font-medium">
                    {mentor.subtitle}
                  </p>
                  <p className="text-[#E5042F] font-medium">
                    {mentor.hashtag}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {mentor.awards}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center text-gray-300">
                    <Building className="w-5 h-5 mr-2 text-[#E5042F]" />
                    <span>{mentor.company}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="w-5 h-5 mr-2 text-[#E5042F]" />
                    <span>{mentor.location}</span>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="flex gap-4">
                  {mentor.socialLinks.linkedin && (
                    <a 
                      href={mentor.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#E5042F] hover:bg-[#E5042F]/80 text-white px-4 py-2 transition-colors duration-300"
                      style={{
                        clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                      }}
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            
            {/* About Section */}
            <HUDCard title="ABOUT">
              <p className="text-gray-300 leading-relaxed mb-4">
                {mentor.description}
              </p>
              <p className="text-gray-400 leading-relaxed">
                {mentor.longDescription}
              </p>
            </HUDCard>

            {/* Two Column Layout */}
            <div className="grid lg:grid-cols-2 gap-8">
              
              {/* Key Achievements */}
              <HUDCard title="KEY ACHIEVEMENTS">
                <div className="space-y-3">
                  {mentor.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#E5042F] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>
              </HUDCard>

              {/* Expertise Areas */}
              <HUDCard title="EXPERTISE AREAS">
                <div className="grid grid-cols-1 gap-3">
                  {mentor.mentoringAreas.map((area, index) => (
                    <div 
                      key={index}
                      className="bg-red-500/10 border border-red-500/30 px-3 py-2 text-sm text-gray-300 hover:bg-red-500/20 hover:border-red-500/50 transition-all duration-300"
                      style={{
                        clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                      }}
                    >
                      {area}
                    </div>
                  ))}
                </div>
              </HUDCard>

            </div>

            {/* Career Path */}
            <HUDCard title="CAREER PATH">
              <div className="space-y-6">
                {mentor.careerPath.map((job, index) => (
                  <div key={index} className="border-l-2 border-red-500/30 pl-6 relative">
                    <div className="absolute -left-2 top-0 w-3 h-3 bg-[#E5042F] rounded-full border-2 border-black"></div>
                    <div className="space-y-2">
                      <h4 className="font-primary text-lg font-semibold text-white">{job.role}</h4>
                      <p className="text-[#E5042F] font-medium">{job.company}</p>
                      <p className="text-gray-400 text-sm">{job.duration}</p>
                      <p className="text-gray-300 text-sm">{job.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </HUDCard>

            {/* Education & Testimonials */}
            <div className="grid lg:grid-cols-2 gap-8">
              
              {/* Education */}
              <HUDCard title="EDUCATION">
                <div className="space-y-4">
                  {mentor.education.map((edu, index) => (
                    <div key={index} className="space-y-1">
                      <h4 className="font-primary text-base font-semibold text-white">{edu.degree}</h4>
                      <p className="text-gray-300 text-sm">{edu.institution}</p>
                      <p className="text-gray-400 text-sm">{edu.year}</p>
                    </div>
                  ))}
                </div>
              </HUDCard>

              {/* Testimonials */}
              <HUDCard title="TESTIMONIALS">
                <div className="space-y-6">
                  {mentor.testimonials.map((testimonial, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#E5042F] text-[#E5042F]" />
                        ))}
                      </div>
                      <p className="text-gray-300 text-sm italic">"{testimonial.text}"</p>
                      <div>
                        <p className="font-primary text-white text-sm font-semibold">{testimonial.name}</p>
                        <p className="text-gray-400 text-xs">{testimonial.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </HUDCard>

            </div>

            {/* Contact CTA */}
            <HUDCard>
              <div className="text-center py-8">
                <h3 className="font-primary text-2xl font-bold text-white mb-4">Ready to Connect?</h3>
                <p className="text-gray-300 mb-6">Get strategic guidance from an industry leader</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href={mentor.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#E5042F] hover:bg-[#E5042F]/80 text-white px-6 py-3 transition-colors duration-300"
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                    }}
                  >
                    <MessageCircle className="w-5 h-5" />
                    Connect on LinkedIn
                  </a>
                  <a 
                    href="mailto:contactus@gamerstag.in"
                    className="inline-flex items-center justify-center gap-2 border border-red-500/50 hover:border-red-500 text-white px-6 py-3 transition-colors duration-300 hover:bg-red-500/10"
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                    }}
                  >
                    <Mail className="w-5 h-5" />
                    Contact via Email
                  </a>
                </div>
              </div>
            </HUDCard>

          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}