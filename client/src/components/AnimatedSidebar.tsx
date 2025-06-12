import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";
import { useGameSounds } from "@/hooks/use-sound";
import { 
  LayoutGrid,
  Users,
  BarChart3,
  Newspaper,
  Briefcase,
  Star,
  CreditCard,
  RefreshCw,
  Megaphone,
  Settings,
  Sun,
  LogOut,
  User,
  Menu,
  X,
  Shield
} from "lucide-react";

interface SidebarItem {
  name: string;
  href: string;
  icon: React.ComponentType<any>;
  isActive?: boolean;
}

export default function AnimatedSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const { buttonClick, buttonHover } = useGameSounds();

  const adminItems: SidebarItem[] = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutGrid },
    { name: "Users Management", href: "/users", icon: Users },
    { name: "Product Analytics", href: "/analytics", icon: BarChart3 },
    { name: "News Management", href: "/news", icon: Newspaper },
    { name: "Jobs Management", href: "/jobs", icon: Briefcase },
    { name: "Reviews", href: "/reviews", icon: Star },
    { name: "Transactions", href: "/transactions", icon: CreditCard },
    { name: "App Updates", href: "/updates", icon: RefreshCw },
    { name: "Advertisements", href: "/ads", icon: Megaphone },
    { name: "Settings", href: "/settings", icon: Settings },
  ];

  const bottomItems: SidebarItem[] = [
    { name: "Light Mode", href: "#", icon: Sun },
    { name: "Logout", href: "/logout", icon: LogOut },
  ];

  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    },
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.02,
        staggerDirection: -1
      }
    }
  };

  const itemVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    },
    closed: {
      opacity: 0,
      x: -20,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  return (
    <>
      {/* Sidebar Toggle Button - Hidden on mobile to avoid conflicts */}
      <motion.button
        className="hidden md:block fixed top-6 left-6 z-50 p-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl border border-white/10 text-white hover:border-cyan-400/50 transition-all duration-300"
        style={{
          clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
        }}
        onClick={() => {
          setIsOpen(!isOpen);
          buttonClick();
        }}
        onMouseEnter={buttonHover}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-5 h-5" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="w-5 h-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed left-0 top-0 h-full w-80 bg-gradient-to-b from-purple-900/90 to-pink-900/90 backdrop-blur-xl border-r border-white/10 z-50 overflow-y-auto"
            variants={sidebarVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Header */}
            <motion.div
              className="p-6 border-b border-white/10"
              variants={itemVariants}
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center neon-glow">
                  <span className="font-orbitron font-bold text-sm text-black">GT</span>
                </div>
                <div>
                  <h2 className="font-orbitron font-bold text-white text-lg text-glow">GAMERS TAG</h2>
                </div>
              </div>
              
              <motion.div
                className="mt-4 flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-cyan-400/30"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 text-black" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Admin</p>
                  <p className="text-cyan-400 text-xs">admin1</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Navigation Items */}
            <div className="p-4 space-y-2">
              {adminItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link href={item.href}>
                    <div
                      className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 cursor-pointer group relative ${
                        location === item.href
                          ? "bg-gradient-to-r from-cyan-400/20 to-purple-600/20 border-l-4 border-cyan-400 text-cyan-400 shadow-lg shadow-cyan-400/20"
                          : "hover:bg-gradient-to-r hover:from-white/5 hover:to-white/10 text-gray-300 hover:text-white hover:border-l-2 hover:border-cyan-400/50"
                      }`}
                      onClick={() => {
                        buttonClick();
                        setIsOpen(false);
                      }}
                      onMouseEnter={buttonHover}
                    >
                      <item.icon className={`w-5 h-5 transition-all duration-300 ${
                        location === item.href 
                          ? "text-cyan-400 drop-shadow-lg" 
                          : "text-gray-400 group-hover:text-cyan-300 group-hover:scale-110"
                      }`} />
                      <span className={`font-medium transition-all duration-300 ${
                        location === item.href ? "text-glow" : ""
                      }`}>{item.name}</span>
                      {location === item.href && (
                        <motion.div
                          className="ml-auto w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          layoutId="activeIndicator"
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Bottom Items */}
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10 space-y-2 bg-gradient-to-t from-purple-900/50 to-transparent">
              {bottomItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-white/5 hover:to-white/10 transition-all duration-300 cursor-pointer group text-gray-300 hover:text-white hover:border-l-2 hover:border-cyan-400/50"
                    onClick={() => {
                      buttonClick();
                      if (item.name === "Logout") {
                        setIsOpen(false);
                      }
                    }}
                    onMouseEnter={buttonHover}
                  >
                    <item.icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-300 group-hover:scale-110 transition-all duration-300" />
                    <span className="font-medium">{item.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}