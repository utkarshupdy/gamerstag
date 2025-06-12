import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Link } from "wouter";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Clock, 
  MessageSquare, 
  Users, 
  Handshake,
  GraduationCap,
  ArrowRight,
  Globe,
  Building2,
  Gamepad,
  Award,
  UserCheck
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Get in touch with our team",
    contact: "contactus@gamerstag.in",
    action: "Send Email",
    href: "mailto:contactus@gamerstag.in"
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our team",
    contact: "+91 9072 944 123",
    action: "Call Now",
    href: "tel:+919072944123"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Our headquarters",
    contact: "Kochi, Kerala, India",
    action: "Get Directions",
    href: "https://maps.google.com/?q=Kochi,Kerala,India"
  },
  {
    icon: Clock,
    title: "Business Hours",
    description: "Monday - Friday",
    contact: "9:00 AM - 6:00 PM IST",
    action: "Schedule Meeting",
    href: "#"
  }
];

const applicationTypes = [
  {
    icon: MessageSquare,
    title: "Contact Us",
    description: "General inquiries and support",
    link: "/connect/contact",
    bgColor: "bg-[#E5042F]/10"
  },
  {
    icon: Users,
    title: "Join our Team",
    description: "Career opportunities - Submit your resume",
    link: "/connect/careers",
    bgColor: "bg-[#E5042F]/10"
  },
  {
    icon: GraduationCap,
    title: "Join as Mentor",
    description: "Share your expertise with our community",
    link: "/connect/mentor",
    bgColor: "bg-[#E5042F]/10"
  },
  {
    icon: Handshake,
    title: "Invest in Us",
    description: "Investment opportunities and funding",
    link: "/connect/invest",
    bgColor: "bg-[#E5042F]/10"
  },
  {
    icon: Building2,
    title: "College Partnership",
    description: "Educational institution collaborations",
    link: "/connect/college",
    bgColor: "bg-[#E5042F]/10"
  },
  {
    icon: Gamepad,
    title: "Esports Partnership",
    description: "Esports hosting and event partnerships",
    link: "/connect/esports",
    bgColor: "bg-[#E5042F]/10"
  },
  {
    icon: Award,
    title: "Brand Partnership",
    description: "Brand collaboration opportunities",
    link: "/connect/brand",
    bgColor: "bg-[#E5042F]/10"
  },
  {
    icon: UserCheck,
    title: "Campus Ambassador",
    description: "Represent GAMERS TAG in your college",
    link: "/connect/ambassador",
    bgColor: "bg-[#E5042F]/10"
  }
];

export default function Connect() {
  return (
    <>
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        <Navigation />

        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E5042F]/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#E5042F]/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
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
              <h1 className="font-orbitron font-bold text-5xl md:text-7xl text-white mb-6 leading-tight">
                Connect With
                <span className="block text-[#E5042F]">GAMERS TAG</span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose how you'd like to connect with us - whether for support, career opportunities, partnerships, or mentorship
              </p>
            </motion.div>
          </div>
        </section>

        {/* Application Types Section */}
        <section className="relative py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-white mb-6">
                Choose Your <span className="text-[#E5042F]">Connection</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Select the type of application that best fits your needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {applicationTypes.map((type, index) => {
                const IconComponent = type.icon;
                return (
                  <motion.div
                    key={type.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group"
                  >
                    <Link href={type.link}>
                      <div className="relative bg-black/80 backdrop-blur-sm border border-gray-700/50 hover:border-[#E5042F]/60 transition-all duration-500 p-8 h-full hover:shadow-[0_0_30px_rgba(229,4,47,0.2)]">
                        
                        {/* Corner Accents */}
                        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-gray-600 group-hover:border-[#E5042F] transition-colors duration-300"></div>
                        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-gray-600 group-hover:border-[#E5042F] transition-colors duration-300"></div>
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-gray-600 group-hover:border-[#E5042F] transition-colors duration-300"></div>
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-gray-600 group-hover:border-[#E5042F] transition-colors duration-300"></div>

                        <div className="text-center">
                          {/* Icon */}
                          <div className={`w-16 h-16 mx-auto mb-6 ${type.bgColor} rounded-lg flex items-center justify-center group-hover:bg-[#E5042F]/20 transition-colors duration-300`}>
                            <IconComponent className="w-8 h-8 text-white group-hover:text-[#E5042F] transition-colors duration-300" />
                          </div>

                          {/* Title */}
                          <h3 className="font-bold text-xl text-white mb-3 group-hover:text-[#E5042F] transition-colors duration-300">
                            {type.title}
                          </h3>

                          {/* Description */}
                          <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                            {type.description}
                          </p>

                          {/* Action Button */}
                          <div className="flex items-center justify-center space-x-2 text-[#E5042F] group-hover:text-white transition-colors duration-300">
                            <span className="text-sm font-medium">Get Started</span>
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="relative py-20 border-t border-[#E5042F]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-white mb-6">
                Contact <span className="text-[#E5042F]">Information</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Reach out to us directly through any of these channels
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <motion.div
                    key={method.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <a href={method.href} className="block">
                      <div className="relative bg-black/60 backdrop-blur-sm border border-gray-700/50 hover:border-[#E5042F]/60 transition-all duration-500 p-6 text-center hover:shadow-[0_0_20px_rgba(229,4,47,0.2)]">
                        
                        {/* Icon */}
                        <div className="w-12 h-12 mx-auto mb-4 bg-[#E5042F]/20 rounded-lg flex items-center justify-center group-hover:bg-[#E5042F]/30 transition-colors duration-300">
                          <IconComponent className="w-6 h-6 text-[#E5042F] group-hover:text-white transition-colors duration-300" />
                        </div>

                        {/* Title */}
                        <h3 className="font-bold text-lg text-white mb-2 group-hover:text-[#E5042F] transition-colors duration-300">
                          {method.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-400 text-sm mb-3 group-hover:text-gray-300 transition-colors duration-300">
                          {method.description}
                        </p>

                        {/* Contact Info */}
                        <p className="text-white font-medium mb-4">
                          {method.contact}
                        </p>

                        {/* Action */}
                        <div className="text-[#E5042F] group-hover:text-white transition-colors duration-300">
                          <span className="text-sm font-medium">{method.action}</span>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}