import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { 
  Calendar, 
  Users, 
  Target, 
  Rocket, 
  Trophy, 
  Building2, 
  Globe,
  Zap,
  Star,
  ArrowRight
} from "lucide-react";

// Icon mapping for Sanity data
const iconMap = {
  rocket: Rocket,
  users: Users,
  target: Target,
  trophy: Trophy,
  building2: Building2,
  globe: Globe,
  zap: Zap,
  star: Star,
  calendar: Calendar
};

const milestones = [
  {
    year: "2021",
    month: "February",
    title: "The Idea Spark",
    description: "The vision for GAMERS TAG was born - to create a revolutionary super app for the global gaming community.",
    icon: Rocket,
    achievements: [
      "Initial concept development",
      "Market research started", 
      "Vision formation"
    ]
  },
  {
    year: "2021",
    month: "March",
    title: "Company Foundation",
    description: "GAMERS TAG officially started as a company, laying the groundwork for our gaming revolution.",
    icon: Building2,
    achievements: [
      "Company establishment",
      "Team formation begins",
      "Strategic planning"
    ]
  },
  {
    year: "2021",
    month: "December",
    title: "First Wireframes",
    description: "Initial wireframes and UI concepts were created, bringing our vision to visual reality.",
    icon: Target,
    achievements: [
      "Initial wireframes completed",
      "UI/UX design started",
      "User flow mapping"
    ]
  },
  {
    year: "2022",
    month: "Early",
    title: "MVP Chat App",
    description: "Built our first chat application as MVP, testing core communication features for gamers.",
    icon: Users,
    achievements: [
      "First MVP launched",
      "Chat functionality",
      "User testing initiated"
    ]
  },
  {
    year: "2022",
    month: "August",
    title: "NASSCOM Incubation",
    description: "Selected for NASSCOM 10000 Startups Incubation Program - our first major recognition.",
    icon: Trophy,
    achievements: [
      "NASSCOM selection",
      "Mentorship access",
      "Network expansion"
    ]
  },
  {
    year: "2022",
    month: "October",
    title: "Razorpay Partnership",
    description: "Joined Razorpay Rize incubation program, strengthening our fintech capabilities.",
    icon: Zap,
    achievements: [
      "Razorpay Rize member",
      "Payment integration",
      "Fintech expertise"
    ]
  },
  {
    year: "2022",
    month: "November",
    title: "Social Network Launch",
    description: "Released our first social networking platform for gamers, building initial community.",
    icon: Globe,
    achievements: [
      "Social platform live",
      "Community building",
      "User engagement"
    ]
  },
  {
    year: "2022",
    month: "November",
    title: "Microsoft Partnership",
    description: "Joined Microsoft Founder Hub Program, gaining access to enterprise tools and mentorship.",
    icon: Star,
    achievements: [
      "Microsoft partnership",
      "Cloud infrastructure",
      "Scaling support"
    ]
  },
  {
    year: "2023",
    month: "January",
    title: "Cisco Incubation",
    description: "Selected for Cisco Launchpad incubation, enhancing our technology and networking capabilities.",
    icon: Building2,
    achievements: [
      "Cisco Launchpad member",
      "Tech infrastructure",
      "Industry connections"
    ]
  },
  {
    year: "2023",
    month: "February",
    title: "PDEU Incubation",
    description: "Joined Pandit Deendayal Energy University startup incubation program.",
    icon: Users,
    achievements: [
      "PDEU partnership",
      "Academic support",
      "Research collaboration"
    ]
  },
  {
    year: "2023",
    month: "Mid",
    title: "Tournament Platform",
    description: "Pivoted to tournament hosting B2C app, focusing on esports tournament management.",
    icon: Trophy,
    achievements: [
      "Platform pivot",
      "Tournament features",
      "Esports focus"
    ]
  },
  {
    year: "2023",
    month: "August",
    title: "AIC-PECF Program",
    description: "Selected for Atal Incubation Centre - PECF startup incubation program.",
    icon: Target,
    achievements: [
      "AIC-PECF selection",
      "Government support",
      "Innovation hub access"
    ]
  },
  {
    year: "2024",
    month: "January",
    title: "GAMERS TAG V1",
    description: "Created the first complete version of GAMERS TAG with comprehensive gaming features.",
    icon: Rocket,
    achievements: [
      "Full platform launch",
      "12 core features",
      "Comprehensive ecosystem"
    ]
  },
  {
    year: "2024",
    month: "September",
    title: "Closed Beta Release",
    description: "Released first closed version of GAMERS TAG to select users for testing and feedback.",
    icon: Zap,
    achievements: [
      "Closed beta launch",
      "User feedback",
      "Performance optimization"
    ]
  },
  {
    year: "2025",
    month: "March",
    title: "New Logo Launch",
    description: "Unveiled our new brand identity with refreshed logo, marking our evolution.",
    icon: Star,
    achievements: [
      "Brand refresh",
      "New logo design",
      "Visual identity update"
    ]
  }
];

const visionGoals = [
  {
    target: "2025",
    title: "Global Beta Launch",
    description: "Complete global launch with enhanced features and expanded gaming community",
    metrics: ["1M+ Users", "50+ Countries", "Public Release"]
  },
  {
    target: "2027",
    title: "Industry Leadership",
    description: "Become the leading gaming super app with comprehensive B2B, B2C, and B2B2C solutions",
    metrics: ["10M+ Users", "Gaming Ecosystem", "Industry Standard"]
  },
  {
    target: "2030",
    title: "Gaming Revolution",
    description: "Achieve our vision of empowering 100M+ individuals in the global gaming industry",
    metrics: ["100M+ Users", "Gaming Career Hub", "Industry Impact"]
  }
];

export default function Journey() {
  const ref = useRef(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [currentMilestone, setCurrentMilestone] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);

  // Scroll tracking for timeline
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"]
  });

  // Fetch journey data from Sanity
  const { data: journeyData, isLoading } = useQuery<any[]>({
    queryKey: ['/api/journey'],
    enabled: true
  });

  // Use Sanity data if available, otherwise fallback to static data
  const milestonesToShow = (journeyData && journeyData.length > 0) ? journeyData : milestones;

  // Auto-scroll functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoScrolling && timelineRef.current) {
      interval = setInterval(() => {
        setCurrentMilestone((prev) => {
          const next = prev + 1;
          if (next >= milestonesToShow.length) {
            setIsAutoScrolling(false);
            return 0;
          }
          
          // Scroll to the milestone
          const milestoneElement = document.getElementById(`milestone-${next}`);
          if (milestoneElement) {
            milestoneElement.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'center' 
            });
          }
          
          return next;
        });
      }, 3000); // 3 seconds per milestone
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoScrolling, milestonesToShow.length]);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <Navigation />
      
      {/* Interactive Dark Background with Animated Elements */}
      <div className="absolute inset-0">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-25">
          <div className="grid-pattern animate-pulse"></div>
        </div>
        
        {/* Moving Red Glow Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/5 w-88 h-88 bg-[#E5042F]/7 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/6 right-1/4 w-84 h-84 bg-[#E5042F]/11 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2.1s'}}></div>
          <div className="absolute top-3/5 left-1/3 w-76 h-76 bg-[#E5042F]/9 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3.8s'}}></div>
          <div className="absolute bottom-1/2 right-1/6 w-68 h-68 bg-[#E5042F]/6 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.4s'}}></div>
        </div>
        
        {/* Journey Timeline Circuit Lines */}
        <div className="absolute inset-0 opacity-18">
          <div className="absolute top-0 left-1/6 w-px h-full bg-gradient-to-b from-transparent via-[#E5042F] to-transparent animate-pulse" style={{animationDelay: '1.3s'}}></div>
          <div className="absolute top-0 right-1/5 w-px h-full bg-gradient-to-b from-transparent via-[#E5042F] to-transparent animate-pulse" style={{animationDelay: '2.9s'}}></div>
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#E5042F] to-transparent animate-pulse" style={{top: '25%', animationDelay: '0.6s'}}></div>
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#E5042F] to-transparent animate-pulse" style={{top: '75%', animationDelay: '2.3s'}}></div>
        </div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/42"></div>
      </div>
      
      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-32 pb-12 sm:pb-20 px-4 text-center overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 border border-[#E5042F]/30 rounded-full bg-black/20 backdrop-blur-sm">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#E5042F]" />
              <span className="text-white font-medium text-sm sm:text-base">Our Journey</span>
              <div className="w-2 h-2 bg-[#E5042F] rounded-full animate-pulse"></div>
            </div>
            <h1 className="font-orbitron font-bold text-3xl sm:text-5xl md:text-7xl mb-4 sm:mb-6 leading-tight">
              <span className="text-white">Our Journey in the </span>
              <span className="text-[#E5042F]">Gaming World</span>
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
              From a vision in 2021 to revolutionizing the gaming industry today. Discover the milestones, challenges, and achievements that shaped GAMERS TAG.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Controls */}
      <section className="py-8 sm:py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mb-6 sm:mb-8"
          >
            <motion.button
              onClick={() => setIsAutoScrolling(!isAutoScrolling)}
              className={`relative px-4 sm:px-8 py-2 sm:py-3 font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 flex items-center space-x-1 sm:space-x-2 group ${
                isAutoScrolling 
                  ? 'bg-[#E5042F] text-white border-2 border-[#E5042F] shadow-[0_0_25px_#E5042F50]' 
                  : 'bg-black/90 text-[#E5042F] border-2 border-[#E5042F]/50 hover:border-[#E5042F] hover:bg-[#E5042F]/10 hover:shadow-[0_0_20px_#E5042F30]'
              }`}
              style={{
                clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-2 h-2 sm:w-3 sm:h-3 border-t-2 border-l-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
              <div className="absolute top-0 right-0 w-2 h-2 sm:w-3 sm:h-3 border-t-2 border-r-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 sm:w-3 sm:h-3 border-b-2 border-l-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 sm:w-3 sm:h-3 border-b-2 border-r-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
              
              <span className="relative z-10">
                {isAutoScrolling ? 'Stop' : 'Start'}
              </span>
              {!isAutoScrolling && <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 relative z-10" />}
            </motion.button>
            <div className="text-gray-400 text-xs sm:text-sm text-center">
              {isAutoScrolling && `Milestone ${currentMilestone + 1} of ${milestonesToShow.length}`}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vertical Timeline Section */}
      <section className="py-12 sm:py-24 px-4" ref={ref}>
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-8 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">Our Timeline</h2>
            <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Key milestones in our journey to transform the gaming industry
            </p>
          </motion.div>

          {/* Vertical Timeline Container */}
          <div ref={timelineRef} className="relative">
            {/* Central Timeline Line - Hidden on mobile, use left-aligned line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#E5042F]/20 via-[#E5042F] to-[#E5042F]/20 h-full"></div>
            
            {/* Mobile Timeline Line - Left aligned */}
            <div className="md:hidden absolute left-8 w-1 bg-gradient-to-b from-[#E5042F]/20 via-[#E5042F] to-[#E5042F]/20 h-full"></div>
            
            {/* Animated Progress Line */}
            <motion.div 
              className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-[#E5042F] to-white origin-top"
              style={{
                height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
              }}
            />

            {/* Timeline Items */}
            <div className="space-y-12 sm:space-y-16 md:space-y-24">
              {milestonesToShow.map((milestone, index) => {
                const IconComponent = typeof milestone.icon === 'string' 
                  ? iconMap[milestone.icon as keyof typeof iconMap] || Rocket
                  : milestone.icon;
                
                const isLeft = index % 2 === 0;
                
                return (
                  <motion.div
                    key={`${milestone.year}-${milestone.month}-${index}`}
                    id={`milestone-${index}`}
                    initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className={`relative flex items-center flex-row md:${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                      <motion.div 
                        className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-4 flex items-center justify-center transition-all duration-500 ${
                          currentMilestone === index && isAutoScrolling
                            ? 'border-white bg-[#E5042F] shadow-[0_0_30px_#E5042F]'
                            : 'border-[#E5042F] bg-black hover:bg-[#E5042F] hover:border-white'
                        }`}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <IconComponent className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 transition-colors duration-300 ${
                          currentMilestone === index && isAutoScrolling
                            ? 'text-white'
                            : 'text-[#E5042F] group-hover:text-white'
                        }`} />
                      </motion.div>
                      
                      {/* Year Badge */}
                      <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2">
                        <div className="bg-[#E5042F] text-white px-2 py-1 sm:px-3 sm:py-1 text-xs font-bold rounded-full border border-white/30">
                          {milestone.year}
                        </div>
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className={`w-full ml-16 pl-4 md:w-5/12 md:ml-0 ${isLeft ? 'md:mr-auto md:pr-8 lg:md:pr-16' : 'md:ml-auto md:pl-8 lg:md:pl-16'}`}>
                      <motion.div 
                        className="group cursor-pointer"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className={`bg-black/90 backdrop-blur-xl border-2 border-[#E5042F]/50 p-4 sm:p-6 md:p-8 transform transition-all duration-500 group-hover:border-[#E5042F] group-hover:shadow-[0_0_30px_#E5042F70] group-hover:bg-black ${
                          currentMilestone === index && isAutoScrolling
                            ? 'border-white shadow-[0_0_40px_#E5042F]'
                            : ''
                        }`}
                        style={{
                          clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'
                        }}>
                          
                          {/* Corner Accents */}
                          <div className="absolute top-0 left-0 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 border-t-2 border-l-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                          <div className="absolute top-0 right-0 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 border-t-2 border-r-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                          <div className="absolute bottom-0 left-0 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 border-b-2 border-l-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                          <div className="absolute bottom-0 right-0 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 border-b-2 border-r-2 border-[#E5042F] group-hover:border-white transition-colors duration-300"></div>
                          
                          {/* Date */}
                          <div className="mb-3 sm:mb-4">
                            <span className="text-[#E5042F] text-xs sm:text-sm font-medium tracking-wider uppercase">
                              {milestone.month} {milestone.year}
                            </span>
                          </div>
                          
                          {/* Title */}
                          <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 tracking-wider group-hover:text-[#E5042F] transition-colors duration-300 leading-tight">
                            {milestone.title}
                          </h3>
                          
                          {/* Description */}
                          <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 group-hover:text-white transition-colors duration-300 text-sm sm:text-base">
                            {milestone.description}
                          </p>

                          {/* Achievements */}
                          <div className="space-y-2 sm:space-y-3">
                            <h4 className="text-white text-xs sm:text-sm font-semibold mb-3 sm:mb-4 group-hover:text-[#E5042F] transition-colors duration-300 uppercase tracking-wide">
                              Key Achievements
                            </h4>
                            {milestone.achievements.map((achievement, achievementIndex) => (
                              <div key={achievementIndex} className="flex items-center space-x-2 sm:space-x-3">
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#E5042F] rounded-full flex-shrink-0 group-hover:bg-white transition-colors duration-300" />
                                <span className="text-gray-400 group-hover:text-white transition-colors duration-300 text-xs sm:text-sm leading-relaxed">
                                  {achievement}
                                </span>
                              </div>
                            ))}
                          </div>
                          
                          {/* Connector Line to Timeline - Hidden on mobile */}
                          <div className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 w-8 lg:w-16 h-0.5 bg-gradient-to-r ${
                            isLeft 
                              ? 'right-0 translate-x-full from-[#E5042F] to-transparent' 
                              : 'left-0 -translate-x-full from-transparent to-[#E5042F]'
                          }`}></div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Future Goals */}
      <section className="py-12 sm:py-24 px-4 bg-black/50">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-8 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Our <span className="text-[#E5042F]">Vision For The Future</span>
            </h2>
            <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Where we're headed and the impact we plan to make in the gaming industry
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {visionGoals.map((goal, index) => (
              <motion.div
                key={goal.target}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="bg-black border-2 border-white/30 hover:border-[#E5042F] transition-all duration-500 relative transform hover:scale-[1.03] hover:shadow-2xl hover:shadow-[#E5042F]/20 p-4 sm:p-6 lg:p-8 h-full">
                  {/* Corner accents - HUD style */}
                  <div className="absolute -top-1 -left-1 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-l-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-r-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-l-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-r-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
                  
                  {/* Year indicator top-center */}
                  <div className="absolute top-3 sm:top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-6 sm:w-16 sm:h-8 border border-white group-hover:border-[#E5042F] bg-black flex items-center justify-center transition-all duration-300">
                      <span className="text-white group-hover:text-[#E5042F] text-xs sm:text-sm font-bold transition-colors duration-300">{goal.target}</span>
                    </div>
                  </div>
                  
                  {/* Status indicator top-right */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-2 h-2 bg-white rounded-full group-hover:bg-[#E5042F] transition-colors duration-300"></div>
                  
                  <div className="pt-8 sm:pt-12 text-center">
                    {/* Title */}
                    <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 tracking-wider group-hover:text-[#E5042F] transition-colors duration-300 leading-tight">
                      {goal.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed mb-6 sm:mb-8 group-hover:text-white transition-colors duration-300 text-sm sm:text-base">
                      {goal.description}
                    </p>

                    {/* Metrics */}
                    <div className="space-y-2 sm:space-y-3">
                      {goal.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="border border-white/30 group-hover:border-[#E5042F] bg-black/50 px-3 py-2 sm:px-4 sm:py-2 transition-all duration-300">
                          <span className="text-white group-hover:text-[#E5042F] text-xs sm:text-sm font-medium transition-colors duration-300">{metric}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Bottom HUD line */}
                    <div className="absolute bottom-2 sm:bottom-3 left-1/2 transform -translate-x-1/2 w-6 sm:w-8 h-0.5 bg-white/30 group-hover:bg-[#E5042F]/80 transition-colors duration-300"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="group"
          >
            <div className="bg-black border-2 border-white/30 hover:border-[#E5042F] transition-all duration-500 relative transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#E5042F]/20 p-16 text-center">
              {/* Corner accents - HUD style */}
              <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
              <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
              <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-white group-hover:border-[#E5042F] transition-colors duration-300"></div>
              
              {/* Animated scan lines */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 group-hover:via-[#E5042F] transition-all duration-500"></div>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 group-hover:via-[#E5042F] transition-all duration-500"></div>
              
              {/* Status indicators */}
              <div className="absolute top-6 left-6 w-3 h-3 bg-white rounded-full group-hover:bg-[#E5042F] animate-pulse transition-colors duration-300"></div>
              <div className="absolute top-6 right-6 w-3 h-3 bg-white rounded-full group-hover:bg-[#E5042F] animate-pulse transition-colors duration-300" style={{animationDelay: '0.5s'}}></div>
              
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 group-hover:text-[#E5042F] transition-colors duration-300">
                Be Part Of Our{" "}
                <span className="text-[#E5042F] group-hover:text-white transition-colors duration-300">Continuing Story</span>
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto group-hover:text-white transition-colors duration-300">
                Join us as we continue to build the future of gaming and create opportunities for millions of gamers worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-[#E5042F] hover:bg-[#E5042F]/80 text-white text-lg px-8 py-4 border-2 border-[#E5042F] hover:border-white transition-all duration-300 relative group">
                  <span className="relative z-10">Join Our Mission</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </button>
                <button className="bg-black text-white text-lg px-8 py-4 border-2 border-white hover:border-[#E5042F] hover:text-[#E5042F] transition-all duration-300 relative group">
                  <span className="relative z-10">Contact Our Team</span>
                  <div className="absolute inset-0 bg-[#E5042F] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </button>
              </div>
              
              {/* Bottom HUD line */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-white/30 group-hover:bg-[#E5042F]/80 transition-colors duration-300"></div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}