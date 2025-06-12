import { motion } from "framer-motion";
import { Link } from "wouter";
import { Heart, Smartphone, Download, ExternalLink, Instagram, Facebook, Youtube, Linkedin, Twitter, Gamepad2, Trophy, Zap, Star, Globe, Shield, Crown } from "lucide-react";
import { EnhancedButton } from "./EnhancedButton";
import { CyberpunkButton } from "./CyberpunkButton";
import { useGameSounds } from "@/hooks/use-sound";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { pageTransition } = useGameSounds();

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/gamerstag/", label: "Instagram", color: "hover:text-pink-400" },
    { icon: Facebook, href: "https://www.facebook.com/Gamers-Tag-102219632395268", label: "Facebook", color: "hover:text-blue-500" },
    { icon: Youtube, href: "https://www.youtube.com/channel/UCWH3iUkctZvdLmTYqjoMEcA", label: "YouTube", color: "hover:text-red-500" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/gamers-tag", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: Twitter, href: "https://x.com/Gamerstag_GT", label: "Twitter", color: "hover:text-blue-300" }
  ];

  const quickLinks = [
    { name: "About", href: "/about" },
    { name: "Features", href: "/features" },
    { name: "Team", href: "/team" },
    { name: "Journey", href: "/journey" },
    { name: "Mentors", href: "/mentors" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" }
  ];

  const featureLinks = [
    { name: "Pro Gaming Profile", href: "/features/pro-gaming-profile" },
    { name: "Next-Gen Onboarding", href: "/features/next-gen-onboarding" },
    { name: "GACCOUNTS", href: "/features/gaccounts" },
    { name: "GCONNECT", href: "/features/gconnect" },
    { name: "GT Chats", href: "/features/chats" },
    { name: "GT Jobs", href: "/features/jobs" },
    { name: "GT Hire", href: "/features/hire" },
    { name: "GT News", href: "/features/news" }
  ];

  return (
    <footer className="relative bg-black/90 backdrop-blur-xl border-t border-[#E5042F]/20 mt-20 overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid-pattern animate-pulse"></div>
        </div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-[#E5042F]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-48 h-48 bg-[#E5042F]/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Cyberpunk Lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#E5042F] to-transparent animate-pulse"></div>
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#E5042F] to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Download Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 bg-[#E5042F]/10 border border-[#E5042F]/30 rounded-full px-4 py-2 text-sm font-medium text-[#E5042F] mb-6">
            <Crown className="w-4 h-4" />
            <span>Download Now</span>
          </div>
          
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-white mb-6">
            <span className="text-[#E5042F]">GAMERS TAG</span>
          </h2>
          
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="flex items-center space-x-2 text-white/80">
              <Trophy className="w-5 h-5 text-[#E5042F]" />
              <span className="text-lg font-medium">One of the Best Gaming App in the World</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-white/20"></div>
            <div className="flex items-center space-x-2 text-white/80">
              <Zap className="w-5 h-5 text-[#E5042F]" />
              <span className="text-lg font-medium">One of the Best Esports App in the World</span>
            </div>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            The world's first all-in-one gaming super app, revolutionizing the future of Gaming and Esports with cutting-edge technology.
          </p>
          
          {/* Stunning Red Download Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="https://play.google.com/store/apps/details?id=com.gamerstag.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative bg-black/80 backdrop-blur-xl border-2 border-[#E5042F] px-8 py-4 transition-all duration-300 group-hover:border-[#E5042F] group-hover:shadow-[0_0_30px_#E5042F70] group-hover:bg-[#E5042F]/10"
                   style={{
                     clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))'
                   }}>
                
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#E5042F] opacity-70"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#E5042F] opacity-70"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#E5042F] opacity-70"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#E5042F] opacity-70"></div>
                
                {/* Scan Line Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E5042F]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                
                <div className="relative flex items-center space-x-4 z-10">
                  <div className="w-12 h-12 bg-[#E5042F]/20 border border-[#E5042F]/50 group-hover:bg-[#E5042F]/30 group-hover:border-[#E5042F] transition-all duration-300 flex items-center justify-center"
                       style={{
                         clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                       }}>
                    <Smartphone className="w-6 h-6 text-[#E5042F] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-400 group-hover:text-white/80 transition-colors duration-300 font-medium">DOWNLOAD NOW</div>
                    <div className="text-xl font-bold text-white font-orbitron group-hover:text-[#E5042F] transition-colors duration-300">Google Play Store</div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-[#E5042F] group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
            </motion.a>
            
            {/* Coming Soon App Store */}
            <div className="relative opacity-60">
              <div className="relative bg-black/50 backdrop-blur-xl border-2 border-gray-600 px-8 py-4"
                   style={{
                     clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))'
                   }}>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-600/20 border border-gray-600/50 flex items-center justify-center"
                       style={{
                         clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                       }}>
                    <Download className="w-6 h-6 text-gray-400" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-500 font-medium">COMING SOON</div>
                    <div className="text-xl font-bold text-gray-400 font-orbitron">App Store</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="flex items-center space-x-3 mb-6 cursor-pointer group"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 10,
                  rotateX: 5,
                }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ 
                  transformStyle: "preserve-3d",
                  perspective: "1000px"
                }}
              >
                <motion.div 
                  className="w-12 h-12 bg-[#E5042F]/20 border border-[#E5042F]/50 flex items-center justify-center group-hover:bg-[#E5042F]/40 group-hover:border-[#E5042F] transition-all duration-300"
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                  }}
                  whileHover={{
                    rotateY: 15,
                    rotateX: 10,
                    z: 30,
                    boxShadow: "0 15px 30px rgba(229, 4, 47, 0.3)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img 
                    src="/logo.png"
                    alt="GAMERS TAG Logo"
                    className="w-6 h-6 object-contain filter brightness-0 invert transition-all duration-300"
                    whileHover={{
                      scale: 1.1,
                      rotate: 5
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
                <motion.h3 
                  className="text-2xl font-bold text-white font-orbitron group-hover:text-[#E5042F] transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  GAMERS TAG
                </motion.h3>
              </motion.div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-[#E5042F]" />
                  <span className="text-sm text-gray-300">Super App for Gaming and Esports</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-[#E5042F]" />
                  <span className="text-sm text-gray-300">Global Esports Network</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-[#E5042F]" />
                  <span className="text-sm text-gray-300">Join GT Revolution now</span>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-3 flex-wrap">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    onMouseEnter={() => pageTransition()}
                  >
                    <div className="w-10 h-10 bg-[#E5042F]/80 border-2 border-[#E5042F] group-hover:bg-white group-hover:border-white transition-all duration-300 flex items-center justify-center social-icon-container"
                         style={{
                           clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))'
                         }}>
                      {/* Corner Accents */}
                      <div className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-[#E5042F] group-hover:border-[#E5042F] opacity-70"></div>
                      <div className="absolute top-0 right-0 w-2 h-2 border-r-2 border-t-2 border-[#E5042F] group-hover:border-[#E5042F] opacity-70"></div>
                      <div className="absolute bottom-0 left-0 w-2 h-2 border-l-2 border-b-2 border-[#E5042F] group-hover:border-[#E5042F] opacity-70"></div>
                      <div className="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-[#E5042F] group-hover:border-[#E5042F] opacity-70"></div>
                      
                      <social.icon className="w-4 h-4 text-white social-icon transition-colors duration-300" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-white mb-6 font-orbitron">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-[#E5042F] transition-all duration-300 block py-1 hover:translate-x-2 relative group"
                    >
                      <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0 h-px bg-[#E5042F] group-hover:w-4 transition-all duration-300"></span>
                      <span className="group-hover:ml-6 transition-all duration-300">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Features */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold text-white mb-6 font-orbitron">Features</h4>
              <ul className="space-y-3">
                {featureLinks.slice(0, 6).map((link, index) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-[#E5042F] transition-all duration-300 block py-1 text-sm hover:translate-x-2 relative group"
                    >
                      <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0 h-px bg-[#E5042F] group-hover:w-4 transition-all duration-300"></span>
                      <span className="group-hover:ml-6 transition-all duration-300">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-lg font-semibold text-white mb-6 font-orbitron">Stay Connected</h4>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Our vision is to be <span className="text-[#E5042F] font-medium">one of the best gaming platforms in the world</span> and the <span className="text-[#E5042F] font-medium">best Esports platform in the world</span>. Join us on this revolutionary journey.
              </p>
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-black/50 border border-[#E5042F]/30 text-white placeholder-gray-400 focus:outline-none focus:border-[#E5042F] focus:bg-black/70 transition-all duration-300"
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                    }}
                  />
                </div>
                <CyberpunkButton
                  variant="cyber"
                  size="sm"
                  className="w-full"
                  glowEffect={true}
                >
                  Subscribe Now
                </CyberpunkButton>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="pt-12 border-t border-[#E5042F]/20 flex flex-col md:flex-row justify-between items-center relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {/* Animated Line */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E5042F] to-transparent animate-pulse"></div>
          
          <p className="text-gray-400 text-sm mb-4 md:mb-0 font-medium">
            © {currentYear} GAMERS TAG. All rights reserved. <span className="text-[#E5042F]">Built by Worlds best Designer, PM's, Developers</span>
          </p>
          
          <div className="flex items-center space-x-6 text-sm text-gray-400 flex-wrap justify-center">
            <Link href="/terms" className="hover:text-[#E5042F] transition-colors duration-300 relative group">
              <span>Terms of Service</span>
              <span className="absolute bottom-0 left-0 w-0 h-px bg-[#E5042F] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <span className="hidden sm:inline text-[#E5042F]">•</span>
            <Link href="/privacy" className="hover:text-[#E5042F] transition-colors duration-300 relative group">
              <span>Privacy Policy</span>
              <span className="absolute bottom-0 left-0 w-0 h-px bg-[#E5042F] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <span className="hidden sm:inline text-[#E5042F]">•</span>
            <span className="flex items-center">
              Ready to step into future of gaming
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
