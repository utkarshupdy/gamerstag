import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import { SEOHead } from "@/components/seo-head";
import { EnhancedCard } from "@/components/EnhancedCard";
import { 
  Users, 
  TrendingUp, 
  Star, 
  Activity,
  BarChart3,
  Gamepad2,
  MessageCircle,
  Briefcase
} from "lucide-react";

export default function Dashboard() {
  const stats = [
    {
      title: "Total Users",
      value: "2,847",
      change: "+12.5%",
      icon: Users,
      color: "text-cyan-400"
    },
    {
      title: "Active Players",
      value: "1,924",
      change: "+8.2%",
      icon: Gamepad2,
      color: "text-purple-400"
    },
    {
      title: "Monthly Growth",
      value: "23.8%",
      change: "+4.1%",
      icon: TrendingUp,
      color: "text-green-400"
    },
    {
      title: "User Rating",
      value: "4.9",
      change: "+0.2",
      icon: Star,
      color: "text-yellow-400"
    }
  ];

  const recentActivity = [
    { type: "New User Registration", user: "GamerPro_2024", time: "2 minutes ago", icon: Users },
    { type: "Job Posted", company: "Gaming Studios Inc", time: "15 minutes ago", icon: Briefcase },
    { type: "Chat Message", user: "EliteGamer", time: "23 minutes ago", icon: MessageCircle },
    { type: "Profile Updated", user: "StreamKing", time: "1 hour ago", icon: Activity }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <SEOHead 
        title="Dashboard - GAMERS TAG Admin"
        description="Administrative dashboard for GAMERS TAG super app management"
      />
      
      {/* Interactive Dark Background with Animated Elements */}
      <div className="absolute inset-0">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-25">
          <div className="grid-pattern animate-pulse"></div>
        </div>
        
        {/* Moving Red Glow Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/5 right-1/5 w-80 h-80 bg-[#E5042F]/8 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#E5042F]/12 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-3/4 right-1/3 w-64 h-64 bg-[#E5042F]/6 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
        </div>
        
        {/* Admin Dashboard Circuit Lines */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-0 left-1/5 w-px h-full bg-gradient-to-b from-transparent via-[#E5042F] to-transparent animate-pulse" style={{animationDelay: '0.8s'}}></div>
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#E5042F] to-transparent animate-pulse" style={{animationDelay: '2.2s'}}></div>
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#E5042F] to-transparent animate-pulse" style={{top: '30%', animationDelay: '1.1s'}}></div>
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#E5042F] to-transparent animate-pulse" style={{top: '70%', animationDelay: '0.3s'}}></div>
        </div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <Navigation />
      
      <div className="pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-orbitron font-bold text-white text-glow mb-2">
              Admin Dashboard
            </h1>
            <p className="text-gray-300">
              Welcome to the GAMERS TAG administrative control center
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <EnhancedCard className="p-6 h-full" hoverEffect="glow">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm font-medium mb-1">
                        {stat.title}
                      </p>
                      <p className="text-2xl font-bold text-white mb-1">
                        {stat.value}
                      </p>
                      <p className="text-green-400 text-sm font-medium">
                        {stat.change}
                      </p>
                    </div>
                    <div className={`p-3 rounded-lg bg-gradient-to-r from-purple-600/20 to-pink-600/20 ${stat.color}`}>
                      <stat.icon className="w-6 h-6" />
                    </div>
                  </div>
                </EnhancedCard>
              </motion.div>
            ))}
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Analytics Chart */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <EnhancedCard className="p-6 h-96" hoverEffect="lift">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white">User Analytics</h3>
                  <BarChart3 className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="h-64 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <BarChart3 className="w-12 h-12 text-black" />
                    </div>
                    <p className="text-gray-300">Interactive analytics chart</p>
                    <p className="text-gray-400 text-sm">Real-time user engagement data</p>
                  </div>
                </div>
              </EnhancedCard>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <EnhancedCard className="p-6 h-96" hoverEffect="scale">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white">Recent Activity</h3>
                  <Activity className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="space-y-4 overflow-y-auto h-64">
                  {recentActivity.map((activity, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-all duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="p-2 rounded-lg bg-gradient-to-r from-purple-600/20 to-pink-600/20">
                        <activity.icon className="w-4 h-4 text-cyan-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-white text-sm font-medium">
                          {activity.type}
                        </p>
                        <p className="text-gray-400 text-xs">
                          {activity.user || activity.company}
                        </p>
                      </div>
                      <p className="text-gray-500 text-xs">
                        {activity.time}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </EnhancedCard>
            </motion.div>
          </div>

          {/* Quick Actions */}
          <motion.div
            className="mt-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <EnhancedCard className="p-6" hoverEffect="glow">
              <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: "Manage Users", icon: Users, color: "from-cyan-400 to-blue-600" },
                  { name: "View Analytics", icon: BarChart3, color: "from-purple-400 to-pink-600" },
                  { name: "Moderate Content", icon: MessageCircle, color: "from-green-400 to-emerald-600" },
                  { name: "System Settings", icon: Activity, color: "from-orange-400 to-red-600" }
                ].map((action, index) => (
                  <motion.button
                    key={action.name}
                    className={`p-4 rounded-lg bg-gradient-to-r ${action.color} text-white font-medium hover:scale-105 transition-all duration-300`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  >
                    <action.icon className="w-6 h-6 mx-auto mb-2" />
                    <span className="text-sm">{action.name}</span>
                  </motion.button>
                ))}
              </div>
            </EnhancedCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
}