import { motion, useScroll, useTransform } from "framer-motion";
import { useParams } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { SEOHead } from '@/components/seo-head';
import { Link } from "wouter";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "@/components/theme-provider";
import AdeshKumarPatraProfile from "../adesh-kumar-patra"
import { 
  ArrowLeft,
  ExternalLink,
  Linkedin,
  Mail,
  MapPin,
  Calendar,
  Target,
  Zap,
  Award,
  Code,
  Users,
  Briefcase,
  Globe,
  TrendingUp,
  Star,
  Building,
  GraduationCap,
  Lightbulb,
  Trophy,
  Brain,
  Rocket,
  Shield,
  Heart,
  GamepadIcon,
  Sparkles,
  Crown,
  ChevronRight,
  Play,
  Pause
} from "lucide-react";
import { completeTeamData } from '@/lib/complete-team-data';

export default function CoreMemberDetail() {
  const { id } = useParams();
  const { theme, isLight } = useTheme();
  const [activeSection, setActiveSection] = useState('overview');
  const [isPlaying, setIsPlaying] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.7]);

  // Track mouse position for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Find the team member by ID or handle owner-001 specifically
  let member = completeTeamData.find(m => m._id === id);
  
  // Handle specific core member IDs
  if (id === 'owner-001') {
    member = { 
      _id: 'owner-001', 
      _type: 'teamMember',
      name: 'Joshua J Kanatt',
      position: 'Founder & CEO',
      department: 'Executive',
      bio: 'Visionary Builder of Game-Changing Tech',
      shortBio: 'Founder & CEO of GAMERS TAG',
      linkedinUrl: 'https://www.linkedin.com/in/joshuakanatt/',
      expertise: ['Product Management', 'AI', 'Gaming', 'SaaS'],
      isActive: true,
      isFounder: true,
      sortOrder: 1
    };
  } 
  // else if (id === 'core-001') {
  //   member = completeTeamData.find(m => m._id === 'core-001' || m.name === 'Hemanth Joseph');
  // } else if (id === 'core-002') {
  //   member = completeTeamData.find(m => m._id === 'core-002' || m.name === 'Adesh Kumar Patra');
  // } else if (id === 'core-003') {
  //   member = completeTeamData.find(m => m._id === 'core-003' || m.name === 'Harsh Singh');
  // } else if (id === 'core-004') {
  //   member = completeTeamData.find(m => m._id === 'core-004' || m.name === 'Paul Dickinson');
  // }

  // Joshua's comprehensive data
  const joshuaData = {
    name: "Joshua J Kanatt",
    title: "Founder & Chief Executive Officer",
    subtitle: "Visionary Builder of Game-Changing Tech",
    website: "https://www.joshuakanatt.com/",
    linkedin: "https://www.linkedin.com/in/joshuakanatt/",
    quote: "I'm proud to say this \" We're the next big thing in gaming \". We've built our super app with strong engineering vision and a clear 5-year goal, ready to boost the industry and accelerate its growth. Our mission is to expand the game industry's potential in multiple areas and also creating multiple monetizable opportunities for B2C users. With our young limitless mindset and world-class team obsessed with winning and growth, we're on a mission to increase the gaming industry 5x in 8 years, creating multiple strong pipelines for stakeholders and high-ROI chances for businesses.",
    
    education: [
      {
        institution: "Deakin Business School, Australia",
        degree: "GMBA, Leadership & Management",
        period: "Dec 2023 – Apr 2025",
        status: "current"
      },
      {
        institution: "Stanford Graduate School of Business",
        degree: "Stanford Seed Spark Program",
        period: "Feb 2023 – Jul 2023",
        status: "completed"
      },
      {
        institution: "IMT Ghaziabad",
        degree: "PGDM, Data Science",
        period: "Completed",
        status: "completed"
      },
      {
        institution: "Liverpool John Moores University, UK",
        degree: "M.S. in Data Science",
        period: "Completed",
        status: "completed"
      },
      {
        institution: "IIIT Bangalore",
        degree: "PG Program in Data Science",
        period: "Completed",
        status: "completed"
      },
      {
        institution: "Hindusthan College of Engineering & Tech",
        degree: "B.Tech in Computer Science",
        period: "Completed",
        status: "completed"
      }
    ],

    expertise: [
      "Product Management & Strategy",
      "Full-Stack Product Ownership",
      "SaaS, AI, Fintech, Gaming, EdTech",
      "UI/UX (Neumorphic, 3D Design, Figma)",
      "Data Science & ML Integration",
      "Deep Market & User Research",
      "Go-To-Market Execution",
      "Business Development",
      "Performance Marketing & SEO",
      "Fundraising, Valuation, and Pitching",
      "Financial Modeling & Investor Relations",
      "HR Systems & Talent Management",
      "Strategic Planning & Analytics",
      "Community Building & Affiliate Marketing",
      "Creative Direction & Brand Identity"
    ],

    incubators: [
      "Stanford Seed Spark Program (Stanford GSB)",
      "Razorpay Rize",
      "NASSCOM 10000 Startups",
      "Cisco LaunchPad",
      "Wadhwani Foundation",
      "Atal Innovation Mission (AIM)",
      "PDEU Innovation & Incubation Centre",
      "Kerala Startup Mission (KSUM)"
    ],

    achievements: [
      "50+ Products launched",
      "350+ Professionals led",
      "200+ Businesses consulted",
      "24+ Game Tech products architected",
      "20,000+ Wireframes created",
      "96% User acceptance for Neumorphic V2 3D UI"
    ],

    testimonials: [
      {
        name: "Rahul Jha",
        role: "Mineral Processing & Beneficiation Expert | Chromite & Graphite Recovery",
        relation: "Studied together in Global MBA program",
        text: "I had the pleasure of studying alongside Joshua during our Global MBA program, and I can confidently say that he is one of the kindest, most helpful, and intelligent individuals I've met. Always ready to support his peers, Joshua consistently demonstrated a collaborative spirit and a genuine willingness to share his knowledge and insights. What stands out most about Joshua is his sharp intellect and strategic thinking."
      },
      {
        name: "Shashank Shekhar",
        role: "Global MBA | Strategic thinker | Brand & MARCOM | Product Management",
        relation: "Studied together in Global MBA program",
        text: "I was fortunate enough to work closely with Joshua throughout our Global MBA program, and I can say without hesitation that he is one of the most motivated and talented professionals I have encountered. His excellent analytical skills played a critical role in dissecting issues at hand, while his design thinking perspective enabled us to come up with creative and viable solutions."
      },
      {
        name: "Anju George",
        role: "Product Management | Data Analyst | SQL | Python | Tableau | Machine Learning",
        relation: "Studied together in Data Science program",
        text: "I had the opportunity to work with Joshua Kanatt during our Postgraduate program in Data Science, and he was consistently impressive in both his technical skills and teamwork. Joshua has a solid understanding of data science concepts and quickly adapt to new tools and technologies, especially Python and Tableau. His analytical thinking and problem-solving skills made him a key contributor to our group projects."
      },
      {
        name: "Lokesh Suwalka",
        role: "Ex Web Developer Intern At @GAMERS TAG | MERN Stack",
        relation: "Reported directly to Joshua",
        text: "I had the incredible opportunity to work with Joshua Kanatt, the visionary founder of Gamers Tag Private Limited. His unwavering dedication, exceptional leadership, and relentless drive are truly inspiring. What sets Joshua Sir apart is not just his ability to lead, but his ability to lead with purpose. He singlehandedly manages multiple teams across the company with remarkable ease and efficiency."
      },
      {
        name: "Jayndra Todawat",
        role: "SWE Intern @Rahi Platform Technologies | Specialist @Codeforces | Knight @Leetcode",
        relation: "Reported directly to Joshua",
        text: "I had the pleasure of interning under Joshua Kanatt at GamersTag as a Flutter Developer, and it was one of the most enriching professional experiences I've had so far. Joshua's leadership style is a perfect blend of vision, support, and empowerment. He fostered an environment where I felt both challenged and encouraged to grow, while always being approachable and open to new ideas."
      },
      {
        name: "Swapnil Adsul",
        role: "PICT'25 | 5⭐ @Codechef | Expert @Codeforces | App Developer | Node Js | React Js",
        relation: "Reported directly to Joshua",
        text: "Working with Joshua Kanatt, the CEO of Gamers Tag, was an incredible privilege. Under his leadership at Gamers Tag, I had the opportunity to learn new things, grow professionally, and contribute my own ideas. He created an environment where creativity and innovation were always encouraged, making it easy to share thoughts and be part of meaningful discussions."
      },
      {
        name: "Amruth N",
        role: "Cyber Strategy Consultant, Deloitte USI | Aerospace Engineer, IIST",
        relation: "Reported directly to Joshua",
        text: "It has been a truly impactful experience working with Joshua at GAMERS TAG. His knowledge across multiple domains and his wide range of skills make him stand out. His core expertise in product architecture and his ability to build a startup from the ground up are truly impressive. One of Joshua's greatest strengths is his problem-solving ability."
      },
      {
        name: "Shreyansh Khandelwal",
        role: "App developer | Organiser @Aaruush",
        relation: "Reported directly to Joshua",
        text: "I had the privilege of working under joshua kanatt at GamersTag during my time as a Flutter Developer, and I can confidently say that he is one of the most inspiring leaders I've come across. Joshua is not just a CEO but a true visionary in the eSports and gaming industry, driven by an unrelenting passion to build something extraordinary."
      },
      {
        name: "Shivanshu Shukla",
        role: "Full Stack Engineer | ReactJS | NextJS | MongoDB | ExpressJS | NodeJS",
        relation: "Reported directly to Joshua",
        text: "I had the pleasure of working closely with Joshua during my time at Gamers Tag. As a leader, he demonstrated exceptional vision, strategic thinking, and a genuine commitment to the success of the company and its employees. His ability to inspire and lead with integrity made a significant impact on our team."
      },
      {
        name: "Pardha Saradhi",
        role: "Full-Stack intern | Founder/president of CodeXP Club | Web Development",
        relation: "Reported directly to Joshua",
        text: "I had the incredible opportunity to intern under Joshua sir, and it was truly an amazing experience. He created a relaxed and supportive environment, giving me the freedom to explore and develop my skills. With his guidance, I was able to contribute to the development of the website, learning so much along the way."
      },
      {
        name: "Ambuj Dhakad",
        role: "Strategy – EY Parthenon | IIM Kozhikode | Co-Founder, Gamers Tag",
        relation: "Worked with Joshua on the same team",
        text: "I had the pleasure of working alongside closely with Joshua during the exhilarating journey at GamersTag, a startup he built from scratch. Joshua's technical prowess combined with my strategic narratives created a synergy that made every pitch a remarkable experience. Joshua's commitment, managerial skills, technical skills, and ability to innovate under pressure have been instrumental in the exponential growth."
      },
      {
        name: "Abel Antony Benny",
        role: "Finance Professional | ACCA | MBA | Financial Modeling",
        relation: "Reported directly to Joshua",
        text: "I am honored to write this recommendation for Joshua Kanatt, the Founder and CEO of GAMERS TAG. During my time as a Financial Business Consultant with the company, I was consistently impressed by Joshua's incredible leadership expertise and sharp decision-making. His deep understanding of financial concepts and ability to pinpoint critical aspects of financial strategy left me in awe."
      },
      {
        name: "Shubh Agarwal",
        role: "KIET'26(CSE AI&ML) | Ex-Intern @GAMERS TAG | Flutter Developer | Java Developer",
        relation: "Reported directly to Joshua",
        text: "I had the privilege of working under Joshua Kanatt Sir at GAMERS TAG Pvt. Ltd., and it was a truly remarkable experience. Joshua Sir's exceptional leadership, strategic mindset, and technical expertise played a pivotal role in shaping the direction of our projects and ensuring their success."
      },
      {
        name: "Sundaram Pandey",
        role: "Final year at IIT Roorkee | Data Science | Software Development",
        relation: "Reported directly to Joshua",
        text: "I had the privilege of working under Joshua Kanatt's guidance at Gamers Tag, and it was truly an exceptional experience. Joshua Sir is an inspiring leader who combines deep technical expertise with outstanding people management skills. His ability to envision the bigger picture while paying attention to the smallest details is remarkable."
      },
      {
        name: "Arjun Gopi K",
        role: "DevOps engineer @ TCS",
        relation: "Reported directly to Joshua",
        text: "I had the privilege of working under Joshua Kanatt at Gamers Tag, and it was an incredible learning experience. Joshua Sir is not just a leader but a true mentor who genuinely cares about the growth and development of his team members. His approach to leadership is both inspiring and empowering."
      },
      {
        name: "Sukhmani Kaur",
        role: "HR & Ops Generalist @Tutcart | B. Com. (Hons)",
        relation: "Reported directly to Joshua",
        text: "I had the privilege of working as an HR Manager Intern under Joshua Kanatt's leadership at Gamers Tag. Joshua is a visionary CEO with a strong dedication to the gaming industry and his team's development. He has cultivated a work culture that values innovation, continuous learning, and individual growth."
      },
      {
        name: "Divyansh Gandotra",
        role: "Video editor | colourist | Marketer | content creation",
        relation: "Reported directly to Joshua",
        text: "I am pleased to recommend Mr. Joshua Kanatt, the founder of Gamers Tag, as an exceptional leader and mentor. During my time as a video editor intern at Gamers Tag, I had the privilege of working directly under Joshua's guidance and was constantly impressed by his professionalism, vision, and dedication."
      },
      {
        name: "Anusha Popat",
        role: "Graphic Designer | Animator | Illustrator | 3D and 2D Animation",
        relation: "Reported directly to Joshua",
        text: "Joshua Kannat Sir proved to be an exceptional instructor and leader during my tenure at Gamers Tag. He has continuously shown a profound awareness of marketing tactics, promotional standards, and client needs throughout my graphic design internship."
      }
    ],

    projects: [
      {
        name: "GENzY Pay.Ai",
        period: "Nov 2024 – Jan 2025",
        role: "Founder & Product Lead",
        description: "Digital Payment App for Gen Z with AI-powered financial insights and social payment features.",
        technologies: ["AI/ML", "Fintech", "Mobile App", "Payment Systems"],
        achievements: [
          "Built comprehensive AI-powered payment platform",
          "Integrated social payment features for Gen Z users",
          "Developed advanced financial analytics dashboard",
          "Created innovative user experience design"
        ],
        link: "https://www.linkedin.com/in/joshuakanatt/details/projects/1743676174960/single-media-viewer/?profileId=ACoAACDNnyYBET3QMeh03JN14gIQyYin9lLCOCA"
      },
      {
        name: "Flash Pay",
        period: "Mar 2024 – Jun 2024",
        role: "Product Lead",
        description: "AI-Powered Decentralized Payment Solution with blockchain integration and smart contracts.",
        technologies: ["AI/ML", "Blockchain", "Decentralized Finance", "Smart Contracts"],
        achievements: [
          "Developed decentralized payment infrastructure",
          "Integrated AI-powered transaction optimization",
          "Built smart contract ecosystem",
          "Achieved 99.9% transaction success rate"
        ],
        link: "https://www.linkedin.com/in/joshuakanatt/details/projects/1743678058424/single-media-viewer/?profileId=ACoAACDNnyYBET3QMeh03JN14gIQyYin9lLCOCA"
      },
      {
        name: "Rap Pay",
        period: "Nov 2023 – Feb 2024",
        role: "Product Manager",
        description: "Fast & Smooth Digital Payments platform with instant transaction processing.",
        technologies: ["Fintech", "Mobile Development", "API Integration", "Real-time Processing"],
        achievements: [
          "Achieved sub-second transaction processing",
          "Integrated multiple payment gateways",
          "Built user-friendly mobile interface",
          "Served 10,000+ active users"
        ],
        link: "https://www.linkedin.com/in/joshuakanatt/details/projects/1743676486567/single-media-viewer/?profileId=ACoAACDNnyYBET3QMeh03JN14gIQyYin9lLCOCA"
      },
      {
        name: "Nextera.Ai Banking",
        period: "May 2023 – Jul 2023",
        role: "Research Analyst",
        description: "Research, Analysis & Workflow optimization for next-generation banking solutions.",
        technologies: ["AI/ML", "Banking Technology", "Workflow Automation", "Data Analysis"],
        achievements: [
          "Conducted comprehensive banking industry research",
          "Developed AI-driven workflow optimization",
          "Created detailed analysis reports",
          "Identified key market opportunities"
        ],
        link: "https://www.linkedin.com/in/joshuakanatt/details/projects/1743677122541/single-media-viewer/?profileId=ACoAACDNnyYBET3QMeh03JN14gIQyYin9lLCOCA"
      },
      {
        name: "New Age Banking",
        period: "Sep 2024 – Nov 2024",
        role: "Product Manager",
        description: "Product Management Research for innovative banking solutions and digital transformation.",
        technologies: ["Product Management", "Banking Innovation", "Digital Transformation", "Market Research"],
        achievements: [
          "Led product management research initiatives",
          "Identified emerging banking trends",
          "Developed strategic product roadmaps",
          "Created comprehensive market analysis"
        ],
        link: "https://www.linkedin.com/in/joshuakanatt/details/projects/1743677595600/single-media-viewer/?profileId=ACoAACDNnyYBET3QMeh03JN14gIQyYin9lLCOCA"
      },
      {
        name: "ATOM",
        period: "Oct 2024 – Jan 2025",
        role: "AI Product Lead",
        description: "AI-Driven Customer Service Agent using User-Guided Access with advanced conversational AI.",
        technologies: ["AI/ML", "Natural Language Processing", "Customer Service", "Automation"],
        achievements: [
          "Built advanced conversational AI system",
          "Implemented user-guided access controls",
          "Achieved 95% customer satisfaction",
          "Reduced response time by 80%"
        ],
        link: "https://www.canva.com/design/DAGUvao0bsM/XKNQrrwV_pww4CgwTzNQtQ/view"
      },
      {
        name: "Pulsegen.Ai",
        period: "Feb 2025 – Apr 2025",
        role: "Founder & Product Architect",
        description: "Advanced Product Management Platform with AI-powered analytics and workflow automation.",
        technologies: ["AI/ML", "Product Management", "Analytics", "Workflow Automation"],
        achievements: [
          "Created next-generation product management platform",
          "Integrated AI-powered analytics dashboard",
          "Built comprehensive workflow automation",
          "Served 500+ product managers"
        ],
        link: "https://www.linkedin.com/in/joshuakanatt/details/projects/2070209343/multiple-media-viewer/?profileId=ACoAACDNnyYBET3QMeh03JN14gIQyYin9lLCOCA&treasuryMediaId=1743679449079"
      },
      {
        name: "Find2Found",
        period: "May 2024 – Sep 2024",
        role: "Product Lead",
        description: "AI-Driven Email Lead Generation Platform with advanced targeting and automation capabilities.",
        technologies: ["AI/ML", "Email Marketing", "Lead Generation", "Data Analytics"],
        achievements: [
          "Built AI-powered lead generation system",
          "Achieved 40% higher conversion rates",
          "Generated 100,000+ qualified leads",
          "Automated email marketing workflows"
        ],
        link: "https://www.linkedin.com/in/joshuakanatt/details/projects/694240182/multiple-media-viewer/?profileId=ACoAACDNnyYBET3QMeh03JN14gIQyYin9lLCOCA&treasuryMediaId=1727271093986"
      },
      {
        name: "BERT for Emotion & Text-Sense Detection",
        period: "Apr 2022 – Dec 2022",
        role: "AI Researcher",
        description: "Advanced machine learning model for emotion detection and text sentiment analysis.",
        technologies: ["Python", "BERT", "NLP", "Machine Learning", "TensorFlow"],
        achievements: [
          "Achieved 94% accuracy in emotion detection",
          "Processed 1M+ text samples",
          "Published research findings",
          "Optimized BERT model performance"
        ],
        link: "https://www.canva.com/design/DAFCGn5melU/xUnk4o_P59AzereEejv0Dg/view"
      },
      {
        name: "Lead Score Data Analysis",
        period: "Mar 2022 – Nov 2022",
        role: "Data Scientist",
        description: "Comprehensive data analysis and predictive modeling for lead scoring optimization.",
        technologies: ["Python", "Data Science", "Machine Learning", "Predictive Analytics"],
        achievements: [
          "Built predictive lead scoring models",
          "Improved lead quality by 60%",
          "Analyzed 500,000+ lead records",
          "Created automated scoring pipeline"
        ],
        link: "https://www.linkedin.com/in/joshuakanatt/details/projects/1711178976596/single-media-viewer/?profileId=ACoAACDNnyYBET3QMeh03JN14gIQyYin9lLCOCA"
      },
      {
        name: "Breast Cancer Diagnosis",
        period: "Oct 2021 – Mar 2022",
        role: "ML Engineer",
        description: "Medical diagnosis system using 14 different machine learning models for breast cancer detection.",
        technologies: ["Python", "Machine Learning", "Medical AI", "Data Analysis"],
        achievements: [
          "Developed 14 ML diagnostic models",
          "Achieved 97% diagnostic accuracy",
          "Processed medical imaging data",
          "Created comparative model analysis"
        ],
        link: "https://www.linkedin.com/in/joshuakanatt/details/projects/1711184089483/single-media-viewer/?profileId=ACoAACDNnyYBET3QMeh03JN14gIQyYin9lLCOCA"
      },
      {
        name: "Credit-Card Fraud Detection",
        period: "Oct 2021 – Dec 2021",
        role: "ML Engineer",
        description: "Advanced fraud detection system using machine learning algorithms for credit card transactions.",
        technologies: ["Python", "Machine Learning", "Fraud Detection", "Real-time Analytics"],
        achievements: [
          "Built real-time fraud detection system",
          "Achieved 99.2% fraud detection accuracy",
          "Reduced false positives by 45%",
          "Processed millions of transactions"
        ],
        link: "https://www.canva.com/design/DAEe8C65CpI/2W3gQKxz7I8SqfWbGJTLag/view"
      },
      {
        name: "ParkiT",
        period: "Feb 2016 – Oct 2020",
        role: "Founder & Product Architect",
        description: "Advanced IoT & ML-Based Parking System with real-time space detection and smart allocation algorithms.",
        technologies: ["IoT", "Machine Learning", "Sensors", "Mobile App", "Cloud Computing"],
        achievements: [
          "Deployed across 50+ parking facilities",
          "Reduced parking search time by 60%",
          "Integrated smart payment systems",
          "Won multiple innovation awards"
        ],
        link: "https://www.youtube.com/watch?v=0DWpTjIezVg"
      },
      {
        name: "Content House",
        period: "Dec 2023 – Mar 2024",
        role: "Business Development Lead",
        description: "Studio Spaces for Streamers & Creators with professional equipment and content creation facilities.",
        technologies: ["Business Strategy", "Facility Management", "Creator Tools", "Booking System"],
        achievements: [
          "Established 10+ creator studio spaces",
          "Served 200+ content creators",
          "Built comprehensive booking platform",
          "Generated $500K+ in revenue"
        ],
        link: "https://drive.google.com/file/d/1NoJsimmBVSw8kmo8llgHZUUBFeez6Abo/view"
      },
      {
        name: "Bingo Pro, Eatnow, Tambola",
        period: "2021 - Present",
        role: "Game Developer & Designer",
        description: "Multiplayer 2D/3D Games for Gamers Tag platform with advanced gaming mechanics.",
        technologies: ["Game Development", "Unity", "Multiplayer Systems", "3D Graphics"],
        achievements: [
          "Created multiple successful games",
          "Built multiplayer gaming infrastructure",
          "Integrated with GAMERS TAG platform",
          "Achieved 100,000+ active players"
        ],
        link: "https://gamerstag.com"
      },
      {
        name: "ElecKart E-commerce Optimization",
        period: "Jan 2021 – Aug 2021",
        role: "Product Manager",
        description: "E-commerce platform optimization with advanced analytics and user experience improvements.",
        technologies: ["E-commerce", "Analytics", "UX/UI Design", "Performance Optimization"],
        achievements: [
          "Improved conversion rates by 35%",
          "Optimized product search algorithms",
          "Enhanced user experience design",
          "Increased revenue by 50%"
        ],
        link: "https://www.canva.com/design/DAFVZx2D3wA/YjJgKLeF7BDK1sxCTnIsEg/view"
      },
      {
        name: "8 Other Projects Portfolio",
        period: "Dec 2021 – Mar 2023",
        role: "Product Designer & Developer",
        description: "Comprehensive portfolio of 8 additional projects spanning various domains and technologies.",
        technologies: ["Multi-technology", "Product Design", "Development", "Research"],
        achievements: [
          "Completed 8 diverse projects",
          "Explored multiple technology domains",
          "Built comprehensive project portfolio",
          "Demonstrated versatile skill set"
        ],
        link: "https://www.figma.com/design/YxetyYhq6VMFtl9p9QRpn3/Other-Projects---Joshua-Kanatt?node-id=0-1&t=6ZwDUoE0qXluo3s7-1"
      },
      {
        name: "Sim Metals Management Research",
        period: "2023",
        role: "Business Analyst",
        description: "Detailed research report on metals industry management and market analysis.",
        technologies: ["Business Analysis", "Market Research", "Industry Analysis", "Reporting"],
        achievements: [
          "Conducted comprehensive industry research",
          "Created detailed market analysis",
          "Identified growth opportunities",
          "Delivered strategic recommendations"
        ],
        link: "https://www.linkedin.com/in/joshuakanatt/details/projects/1743685768974/single-media-viewer/?profileId=ACoAACDNnyYBET3QMeh03JN14gIQyYin9lLCOCA"
      },
      {
        name: "Southwest Airlines Strategic Analysis",
        period: "Apr 2024 – Jun 2024",
        role: "Strategic Analyst",
        description: "HPO & Strategic Analysis of Southwest Airlines operations and market positioning.",
        technologies: ["Strategic Analysis", "Business Intelligence", "Market Research", "Operations Analysis"],
        achievements: [
          "Analyzed airline operations strategy",
          "Identified operational improvements",
          "Created strategic recommendations",
          "Delivered comprehensive analysis report"
        ],
        link: "https://www.linkedin.com/in/joshuakanatt/details/projects/1743684058016/single-media-viewer/?profileId=ACoAACDNnyYBET3QMeh03JN14gIQyYin9lLCOCA"
      }
    ],

    sports: ["Badminton", "Football", "Basketball", "Volleyball", "Cricket"],
    inspirations: ["Lionel Messi", "Derrick Rose", "Kobe Bryant", "Lewis Hamilton"],

    bio: "I'm a founder on a mission to increase global gaming valuation to 5x in next 5 years and set new global standards for startups. I've built one of the world's most innovative gaming super platforms, integrating deep design principles, advanced gamification, AI, SaaS, and community-first strategies. A rare combination of Founder & CEO who is a Product Leader, Technologist, Marketer, Analyst, AI Researcher, Financial Strategist, HR Architect, and Startup expert."
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) {
        setActiveSection(prev => {
          const sections = ['overview', 'education', 'expertise', 'achievements', 'testimonials', 'projects'];
          const currentIndex = sections.indexOf(prev);
          return sections[(currentIndex + 1) % sections.length];
        });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  // Show Joshua's profile for owner-001, or other core members for their respective IDs
  if (!member && !['owner-001', 'core-001', 'core-002', 'core-003', 'core-004'].includes(id || '')) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Profile Not Found</h1>
          <p className="mb-4">Member ID: {id}</p>
          <Link href="/team">
            <button className="bg-[#E5042F] text-white px-6 py-3 hover:bg-white hover:text-black transition-colors duration-300">
              Back to Team
            </button>
          </Link>
        </div>
      </div>
    );
  }

  // For owner-001, always show Joshua's profile regardless of member object
  const isOwner = id === 'owner-001';

  const sections = [
    { id: 'overview', label: 'Overview', icon: Target },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'expertise', label: 'Expertise', icon: Brain },
    { id: 'achievements', label: 'Achievements', icon: Trophy },
    { id: 'testimonials', label: 'Testimonials', icon: Users },
    { id: 'projects', label: 'Projects', icon: Briefcase }
  ];

  return (
    <>
      {/* <AdeshKumarPatraProfile /> */}
      {/* <AdeshKumarPatraProfile /> */}
      {/* <AdeshKumarPatraProfile/> */}
      <SEOHead
        title="Joshua J Kanatt - Founder & CEO | GAMERS TAG"
        description="Meet Joshua J Kanatt, Founder & CEO of GAMERS TAG. Visionary builder of game-changing tech with expertise in AI, SaaS, Gaming, and Product Management."
        keywords="Joshua Kanatt, GAMERS TAG founder, gaming industry leader, product management, AI, SaaS"
      />

      <div className={`min-h-screen relative overflow-hidden ${isLight ? 'bg-gray-100 text-black' : 'bg-black text-white'}`} ref={containerRef}>
        <Navigation />

        {/* Interactive Electric Grid Background */}
        <div className="fixed inset-0 z-0">
          <div className={`absolute inset-0 ${isLight ? 'bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100' : 'bg-gradient-to-br from-black via-gray-950 to-black'}`}></div>
          
          {/* 3D Electric Grid Base */}
          <motion.div 
            className="absolute inset-0 opacity-8"
            animate={{
              backgroundPosition: ['0px 0px', '120px 120px', '0px 0px'],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '120px 120px',
              transform: 'perspective(1000px) rotateX(3deg)',
            }}
          />

          {/* Interactive Cursor Glow */}
          <motion.div
            className="absolute w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"
            animate={{
              x: `${mousePosition.x - 50}%`,
              y: `${mousePosition.y - 50}%`,
            }}
            transition={{
              type: "spring",
              damping: 50,
              stiffness: 200
            }}
          />

          {/* 3D Electric Circuit Lines - Horizontal */}
          <div className="absolute inset-0">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={`h-${i}`}
                className="absolute w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                style={{
                  top: `${10 + i * 8}%`,
                  boxShadow: '0 0 10px rgba(255,255,255,0.3), 0 2px 4px rgba(0,255,255,0.2)',
                  transform: 'perspective(1000px) rotateX(3deg)'
                }}
                animate={{
                  opacity: [0, 0.9, 0],
                  scaleX: [0, 1, 0],
                  x: ['-100%', '0%', '100%'],
                }}
                transition={{
                  duration: 6 + Math.random() * 4,
                  delay: Math.random() * 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* 3D Electric Circuit Lines - Vertical */}
          <div className="absolute inset-0">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={`v-${i}`}
                className="absolute h-full w-1 bg-gradient-to-b from-transparent via-cyan-400/25 to-transparent"
                style={{
                  left: `${12 + i * 9}%`,
                  boxShadow: '0 0 8px rgba(0,255,255,0.4), 2px 0 6px rgba(255,255,255,0.2)',
                  transform: 'perspective(1000px) rotateY(2deg)'
                }}
                animate={{
                  opacity: [0, 0.7, 0],
                  scaleY: [0, 1, 0],
                  y: ['-100%', '0%', '100%'],
                }}
                transition={{
                  duration: 8 + Math.random() * 5,
                  delay: Math.random() * 12,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Cursor-Following Electric Trails */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`trail-${i}`}
                className="absolute w-px h-16 bg-gradient-to-b from-white/40 to-transparent"
                style={{
                  x: `${mousePosition.x + (i - 4) * 10}%`,
                  y: `${mousePosition.y}%`,
                }}
                animate={{
                  opacity: [0.8, 0.2, 0.8],
                }}
                transition={{
                  opacity: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              />
            ))}
          </div>



          {/* Data Pulse Streams */}
          <div className="absolute inset-0">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`pulse-${i}`}
                className="absolute w-2 h-2 bg-white/60 rounded-full"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30}%`,
                }}
                animate={{
                  y: [0, 300, 600],
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 6,
                  delay: i * 1,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>

          {/* Minimal Ambient Lighting */}
          <div className="absolute inset-0">
            <motion.div 
              className="absolute w-48 h-48 bg-white/2 rounded-full blur-3xl"
              style={{
                x: `${mousePosition.x - 25}%`,
                y: `${mousePosition.y - 25}%`,
              }}
            />
            <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-cyan-400/2 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <Link href="/team">
                <button className="flex items-center space-x-2 text-[#E5042F] hover:text-white transition-colors duration-300 group">
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                  <span className="font-medium">Back to Team</span>
                </button>
              </Link>
            </motion.div>

            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              {/* Interactive HUD Profile Frame */}
              <motion.div 
                className="relative inline-block mb-8 group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="relative mx-auto" style={{ width: '512px', height: '512px' }}>
                  {/* Main HUD Frame */}
                  <div className="absolute inset-0 overflow-hidden">
                    {/* Clipped Hexagonal Frame */}
                    <div 
                      className="w-full h-full bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm border-2 border-white/40 group-hover:border-[#E5042F]/80 transition-all duration-300"
                      style={{
                        clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)'
                      }}
                    >
                      <img 
                        src="/jjk.jpg" 
                        alt="HJ"
                        className="w-full h-full object-cover"
                        style={{
                          clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)'
                        }}
                      />
                    </div>

                    {/* HUD Corner Elements */}
                    <div className="absolute -top-3 -left-3 w-8 h-8">
                      <div className="w-full h-2 bg-white group-hover:bg-[#E5042F] transition-colors duration-300"></div>
                      <div className="w-2 h-full bg-white group-hover:bg-[#E5042F] transition-colors duration-300"></div>
                    </div>
                    <div className="absolute -top-3 -right-3 w-8 h-8">
                      <div className="w-full h-2 bg-white group-hover:bg-[#E5042F] transition-colors duration-300"></div>
                      <div className="w-2 h-full bg-white group-hover:bg-[#E5042F] transition-colors duration-300 ml-auto"></div>
                    </div>
                    <div className="absolute -bottom-3 -left-3 w-8 h-8">
                      <div className="w-2 h-full bg-white group-hover:bg-[#E5042F] transition-colors duration-300"></div>
                      <div className="w-full h-2 bg-white group-hover:bg-[#E5042F] transition-colors duration-300 mt-auto"></div>
                    </div>
                    <div className="absolute -bottom-3 -right-3 w-8 h-8">
                      <div className="w-2 h-full bg-white group-hover:bg-[#E5042F] transition-colors duration-300 ml-auto"></div>
                      <div className="w-full h-2 bg-white group-hover:bg-[#E5042F] transition-colors duration-300 mt-auto"></div>
                    </div>

                    {/* Scanning Lines Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E5042F]/20 to-transparent opacity-0 group-hover:opacity-100"
                      animate={{
                        x: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  </div>
                  
                  {/* Enhanced Status Indicator */}
                  <motion.div 
                    className="absolute -top-6 -right-6 flex items-center space-x-2 bg-black/90 px-4 py-2 border border-[#E5042F]/50 group-hover:border-[#E5042F] transition-all duration-300"
                    style={{
                      clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)'
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-400 font-mono font-bold">CEO ACTIVE</span>
                  </motion.div>

                  {/* ID Tag */}
                  <motion.div 
                    className="absolute -bottom-6 -left-6 bg-black/90 px-3 py-1 border border-white/50 group-hover:border-[#E5042F] transition-all duration-300"
                    style={{
                      clipPath: 'polygon(0% 0%, 90% 0%, 100% 100%, 10% 100%)'
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="text-xs text-white font-mono">ID: GT-001</span>
                  </motion.div>
                </div>
              </motion.div>

              <h1 className="font-orbitron font-bold text-5xl md:text-7xl text-white mb-4 leading-tight">
                {joshuaData.name}
              </h1>
              
              <div className="space-y-2 mb-6">
                <p className="text-2xl text-[#E5042F] font-semibold">{joshuaData.title}</p>
                <p className="text-xl text-gray-300">{joshuaData.subtitle}</p>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-6 mb-8">
                <motion.a
                  href={joshuaData.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 bg-black/50 border border-[#E5042F]/30 px-4 py-2 hover:border-[#E5042F] transition-colors duration-300"
                >
                  <Globe className="w-5 h-5 text-[#E5042F]" />
                  <span>Website</span>
                </motion.a>
                
                <motion.a
                  href={joshuaData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 bg-black/50 border border-[#E5042F]/30 px-4 py-2 hover:border-[#E5042F] transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5 text-[#E5042F]" />
                  <span>LinkedIn</span>
                </motion.a>
              </div>

              {/* HUD Quote Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="max-w-4xl mx-auto group cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative bg-black/40 backdrop-blur-sm border border-white/20 group-hover:border-[#E5042F]/50 transition-all duration-300 p-8">
                  {/* HUD Corner Brackets */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white/60 group-hover:border-[#E5042F] transition-colors duration-300"></div>
                  <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white/60 group-hover:border-[#E5042F] transition-colors duration-300"></div>
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white/60 group-hover:border-[#E5042F] transition-colors duration-300"></div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white/60 group-hover:border-[#E5042F] transition-colors duration-300"></div>

                  {/* Corner Accent Lines */}
                  <div className="absolute top-0 left-6 w-12 h-px bg-white/30 group-hover:bg-[#E5042F]/70 transition-colors duration-300"></div>
                  <div className="absolute top-0 right-6 w-12 h-px bg-white/30 group-hover:bg-[#E5042F]/70 transition-colors duration-300"></div>
                  <div className="absolute bottom-0 left-6 w-12 h-px bg-white/30 group-hover:bg-[#E5042F]/70 transition-colors duration-300"></div>
                  <div className="absolute bottom-0 right-6 w-12 h-px bg-white/30 group-hover:bg-[#E5042F]/70 transition-colors duration-300"></div>

                  {/* Quote Content */}
                  <div className="relative flex items-start space-x-4">
                    <motion.div
                      className="mt-1 flex-shrink-0"
                      animate={{
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Sparkles className="w-6 h-6 text-white group-hover:text-[#E5042F] transition-colors duration-300" />
                    </motion.div>
                    
                    <div className="flex-1">
                      <p className="text-xl text-white font-light italic leading-relaxed tracking-wide group-hover:text-gray-100 transition-colors duration-300">
                        "{joshuaData.quote}"
                      </p>
                      
                      {/* Quote Attribution */}
                      <div className="mt-4 flex items-center justify-end space-x-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-12 h-px bg-[#E5042F]/50"></div>
                        <span className="text-sm text-[#E5042F] font-mono">FOUNDER STATEMENT</span>
                      </div>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-[#E5042F]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </motion.div>
            </motion.div>

            {/* Navigation Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex justify-center mb-12"
            >
              <div className="flex space-x-1 bg-black/30 p-2 border border-[#E5042F]/20 backdrop-blur-sm">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => {
                        setActiveSection(section.id);
                        setIsPlaying(false);
                      }}
                      className={`flex items-center space-x-2 px-6 py-3 transition-all duration-300 ${
                        activeSection === section.id
                          ? 'bg-[#E5042F] text-white'
                          : 'text-gray-400 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{section.label}</span>
                    </button>
                  );
                })}
                
                {/* Auto-play Control */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center justify-center w-12 h-12 text-gray-400 hover:text-[#E5042F] transition-colors duration-300"
                  title={isPlaying ? "Pause auto-rotation" : "Resume auto-rotation"}
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>
              </div>
            </motion.div>

            {/* Content Sections */}
            <div className="min-h-[600px]">
              {/* Overview Section */}
              {activeSection === 'overview' && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.6 }}
                  className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
                >
                  {/* Interactive About Card */}
                  <motion.div 
                    className="bg-black/30 border border-[#E5042F]/20 p-8 backdrop-blur-sm group cursor-pointer relative overflow-hidden hover:border-white/80 hover:bg-white/5 transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {/* HUD Corner Elements */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/30 group-hover:border-white transition-colors duration-300"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/30 group-hover:border-white transition-colors duration-300"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/30 group-hover:border-white transition-colors duration-300"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/30 group-hover:border-white transition-colors duration-300"></div>

                    {/* Additional HUD Lines */}
                    <div className="absolute top-0 left-4 w-8 h-px bg-white/30 group-hover:bg-white transition-colors duration-300"></div>
                    <div className="absolute top-0 right-4 w-8 h-px bg-white/30 group-hover:bg-white transition-colors duration-300"></div>
                    <div className="absolute bottom-0 left-4 w-8 h-px bg-white/30 group-hover:bg-white transition-colors duration-300"></div>
                    <div className="absolute bottom-0 right-4 w-8 h-px bg-white/30 group-hover:bg-white transition-colors duration-300"></div>
                    <div className="absolute top-4 left-0 w-px h-8 bg-white/30 group-hover:bg-white transition-colors duration-300"></div>
                    <div className="absolute top-4 right-0 w-px h-8 bg-white/30 group-hover:bg-white transition-colors duration-300"></div>
                    <div className="absolute bottom-4 left-0 w-px h-8 bg-white/30 group-hover:bg-white transition-colors duration-300"></div>
                    <div className="absolute bottom-4 right-0 w-px h-8 bg-white/30 group-hover:bg-white transition-colors duration-300"></div>

                    {/* White Glow Effect */}
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                    {/* Scanning Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E5042F]/10 to-transparent opacity-0 group-hover:opacity-100"
                      animate={{
                        x: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />

                    <motion.h3 
                      className="text-2xl font-bold text-white mb-6 flex items-center space-x-3 relative z-10"
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Target className="w-6 h-6 text-[#E5042F] group-hover:text-white transition-colors duration-300" />
                      </motion.div>
                      <span>About</span>
                    </motion.h3>
                    
                    <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-white transition-colors duration-300 relative z-10">
                      {joshuaData.bio}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-6 relative z-10">
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      >
                        <h4 className="text-[#E5042F] font-semibold mb-3 flex items-center space-x-2 group-hover:text-white transition-colors duration-300">
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 15 }}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                          >
                            <GamepadIcon className="w-5 h-5" />
                          </motion.div>
                          <span>Sports</span>
                        </h4>
                        <div className="space-y-2">
                          {joshuaData.sports.map((sport, index) => (
                            <motion.div 
                              key={index} 
                              className="flex items-center space-x-2"
                              whileHover={{ x: 3 }}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <motion.div 
                                className="w-2 h-2 bg-[#E5042F] rounded-full group-hover:bg-white transition-colors duration-300"
                                whileHover={{ scale: 1.5 }}
                              />
                              <span className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300">{sport}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                      
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      >
                        <h4 className="text-[#E5042F] font-semibold mb-3 flex items-center space-x-2 group-hover:text-white transition-colors duration-300">
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 15 }}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                          >
                            <Star className="w-5 h-5" />
                          </motion.div>
                          <span>Inspirations</span>
                        </h4>
                        <div className="space-y-2">
                          {joshuaData.inspirations.map((inspiration, index) => (
                            <motion.div 
                              key={index} 
                              className="flex items-center space-x-2"
                              whileHover={{ x: 3 }}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <motion.div 
                                className="w-2 h-2 bg-[#E5042F] rounded-full group-hover:bg-white transition-colors duration-300"
                                whileHover={{ scale: 1.5 }}
                              />
                              <span className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300">{inspiration}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Leadership Philosophy Card */}
                  <motion.div 
                    className="bg-black/30 border border-[#E5042F]/20 p-8 backdrop-blur-sm group cursor-pointer relative overflow-hidden hover:border-white/80 hover:bg-white/5 transition-all duration-300"
                    whileHover={{ scale: 1.01, y: -3 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {/* HUD Corner Elements */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/20 group-hover:border-[#E5042F] transition-colors duration-300"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/20 group-hover:border-[#E5042F] transition-colors duration-300"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/20 group-hover:border-[#E5042F] transition-colors duration-300"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/20 group-hover:border-[#E5042F] transition-colors duration-300"></div>

                    {/* Scanning Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100"
                      animate={{
                        x: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />

                    <motion.h3 
                      className="text-2xl font-bold text-white mb-6 flex items-center space-x-3 relative z-10"
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Users className="w-8 h-8 text-[#E5042F] group-hover:text-white transition-colors duration-300" />
                      </motion.div>
                      <span>Leadership Philosophy</span>
                    </motion.h3>
                    
                    <div className="space-y-4 relative z-10">
                      <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                        I don't just lead, I build from the ground up, every single day. I'm a founder who's hands-on across every department, from Product to Technology, from Marketing to Sales, from Design to Analytics, from Research to Finance, from HR to Investor Relations.
                      </p>
                      
                      <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                        I've worked deep in the trenches and high at the strategy table, ensuring that every line of code, every campaign, every pitch, and every process aligns with the bigger vision. I collaborate, inspire, and architect a culture where every single member feels like a founder.
                      </p>
                      
                      <div className="bg-[#E5042F]/10 p-4 border-l-4 border-[#E5042F] group-hover:bg-[#E5042F]/20 transition-all duration-300">
                        <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300 font-light italic" style={{ fontFamily: 'Jost' }}>
                          "My leadership style is simple: be the chill founder who builds entrepreneurs. I empower my team to take ownership, to challenge conventions, and to bring the absolute best version of themselves to the table. I believe in building people, not just products. By fostering their strengths and championing their ideas, we don't just build a company, we build dreams, legacies, and the future of gaming itself."
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Quick Stats */}
                  <div className="space-y-6">
                    <motion.div 
                      className="bg-black/30 border border-[#E5042F]/20 p-6 backdrop-blur-sm group cursor-pointer relative overflow-hidden"
                      whileHover={{ scale: 1.01, y: -3 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {/* HUD Corner Elements */}
                      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/20 group-hover:border-[#E5042F] transition-colors duration-300"></div>
                      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/20 group-hover:border-[#E5042F] transition-colors duration-300"></div>
                      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/20 group-hover:border-[#E5042F] transition-colors duration-300"></div>
                      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/20 group-hover:border-[#E5042F] transition-colors duration-300"></div>

                      <motion.h3 
                        className="text-xl font-bold text-white mb-4 flex items-center space-x-3 relative z-10"
                        whileHover={{ x: 5 }}
                      >
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.5 }}
                        >
                          <TrendingUp className="w-6 h-6 text-[#E5042F] group-hover:text-white transition-colors duration-300" />
                        </motion.div>
                        <span>Impact Metrics</span>
                      </motion.h3>
                      
                      <div className="grid grid-cols-2 gap-4 relative z-10">
                        {joshuaData.achievements.map((achievement, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ 
                              scale: 1.08, 
                              y: -8,
                              rotateY: 5,
                              boxShadow: "0 15px 35px rgba(229, 4, 47, 0.4)"
                            }}
                            className="text-center p-4 bg-[#E5042F]/10 border border-[#E5042F]/30 cursor-pointer group/metric hover:bg-[#E5042F]/25 hover:border-[#E5042F]/80 transition-all duration-300 relative overflow-hidden"
                            style={{
                              clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)'
                            }}
                          >
                            {/* Pulse effect */}
                            <motion.div
                              className="absolute inset-0 bg-[#E5042F]/20 opacity-0 group-hover/metric:opacity-100"
                              animate={{
                                scale: [1, 1.05, 1],
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            />
                            
                            {/* Data stream effect */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-[#E5042F]/0 via-[#E5042F]/15 to-[#E5042F]/0"
                              initial={{ x: '-100%' }}
                              whileHover={{ x: '100%' }}
                              transition={{ duration: 0.8, ease: "easeInOut" }}
                            />
                            
                            <div className="relative z-10">
                              <motion.div 
                                className="text-2xl font-bold text-[#E5042F] mb-1 group-hover/metric:text-white transition-colors duration-300 font-mono"
                                whileHover={{ scale: 1.15, rotateX: 10 }}
                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                              >
                                {achievement.split(' ')[0]}
                              </motion.div>
                              <div className="text-sm text-gray-300 group-hover/metric:text-gray-100 transition-colors duration-300 font-light">
                                {achievement.split(' ').slice(1).join(' ')}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div 
                      className="bg-black/30 border border-[#E5042F]/20 p-6 backdrop-blur-sm group cursor-pointer relative overflow-hidden"
                      whileHover={{ scale: 1.01, y: -3 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {/* HUD Corner Elements */}
                      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/20 group-hover:border-[#E5042F] transition-colors duration-300"></div>
                      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/20 group-hover:border-[#E5042F] transition-colors duration-300"></div>
                      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/20 group-hover:border-[#E5042F] transition-colors duration-300"></div>
                      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/20 group-hover:border-[#E5042F] transition-colors duration-300"></div>

                      {/* Scanning Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-b from-transparent via-[#E5042F]/8 to-transparent opacity-0 group-hover:opacity-100"
                        animate={{
                          y: ['-100%', '100%'],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />

                      <motion.h3 
                        className="text-xl font-bold text-white mb-4 flex items-center space-x-3 relative z-10"
                        whileHover={{ x: 5 }}
                      >
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Building className="w-6 h-6 text-[#E5042F] group-hover:text-white transition-colors duration-300" />
                        </motion.div>
                        <span>Incubators & Programs</span>
                      </motion.h3>
                      
                      <div className="space-y-3 relative z-10">
                        {joshuaData.incubators.map((incubator, index) => (
                          <motion.div 
                            key={index} 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.15 }}
                            whileHover={{ x: 8, scale: 1.03 }}
                            className="flex items-center space-x-3 p-3 hover:bg-[#E5042F]/15 hover:border-l-4 hover:border-[#E5042F] transition-all duration-300 cursor-pointer group/incubator relative overflow-hidden"
                            style={{
                              clipPath: 'polygon(0% 0%, 97% 0%, 100% 50%, 97% 100%, 0% 100%)'
                            }}
                          >
                            {/* Progress bar effect */}
                            <motion.div
                              className="absolute left-0 top-0 h-full bg-[#E5042F]/20 opacity-0 group-hover/incubator:opacity-100"
                              initial={{ width: '0%' }}
                              whileHover={{ width: '100%' }}
                              transition={{ duration: 0.6, ease: "easeOut" }}
                            />
                            
                            <motion.div 
                              className="w-3 h-3 bg-[#E5042F] group-hover/incubator:bg-white transition-colors duration-300 relative z-10"
                              style={{
                                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
                              }}
                              whileHover={{ 
                                rotate: 360,
                                scale: 1.3
                              }}
                              transition={{ duration: 0.5 }}
                            />
                            
                            <span className="text-gray-300 text-sm group-hover/incubator:text-white transition-colors duration-300 font-medium relative z-10">
                              {incubator}
                            </span>
                            
                            {/* Data indicator */}
                            <motion.div
                              className="ml-auto w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover/incubator:opacity-100 relative z-10"
                              animate={{
                                scale: [1, 1.2, 1],
                              }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            />
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}

              {/* Education Section */}
              {activeSection === 'education' && (
                <motion.div
                  key="education"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-3xl font-bold text-white mb-8 flex items-center space-x-3">
                    <GraduationCap className="w-8 h-8 text-[#E5042F]" />
                    <span>Educational Journey</span>
                  </h3>
                  
                  <div className="grid lg:grid-cols-2 gap-6">
                    {joshuaData.education.map((edu, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ 
                          y: -8, 
                          scale: 1.02,
                          boxShadow: edu.status === 'current' 
                            ? "0 15px 35px rgba(229, 4, 47, 0.4)" 
                            : "0 10px 25px rgba(229, 4, 47, 0.2)"
                        }}
                        className={`bg-black/30 border p-6 backdrop-blur-sm relative overflow-hidden cursor-pointer group transition-all duration-300 ${
                          edu.status === 'current' 
                            ? 'border-[#E5042F] bg-[#E5042F]/10 hover:bg-white/5 hover:border-white/80' 
                            : 'border-[#E5042F]/20 hover:border-white/80 hover:bg-white/5'
                        }`}
                      >
                        {/* Animated corner elements */}
                        <motion.div
                          className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#E5042F]/30 group-hover:border-[#E5042F] transition-colors duration-300"
                          whileHover={{ scale: 1.2 }}
                        />
                        <motion.div
                          className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#E5042F]/30 group-hover:border-[#E5042F] transition-colors duration-300"
                          whileHover={{ scale: 1.2 }}
                        />
                        
                        {edu.status === 'current' && (
                          <motion.div 
                            className="absolute top-4 right-4"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            <span className="bg-[#E5042F] text-white text-xs px-2 py-1 font-bold animate-pulse">
                              CURRENT
                            </span>
                          </motion.div>
                        )}
                        
                        <motion.h4 
                          className="text-[#E5042F] font-bold text-lg mb-2 group-hover:text-white transition-colors duration-300"
                          whileHover={{ x: 5 }}
                        >
                          {edu.institution}
                        </motion.h4>
                        <motion.p 
                          className="text-white font-semibold mb-2 group-hover:text-[#E5042F] transition-colors duration-300"
                          whileHover={{ x: 3 }}
                        >
                          {edu.degree}
                        </motion.p>
                        <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">{edu.period}</p>
                        
                        {/* Progress bar with enhanced animation */}
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#E5042F]/20">
                          <motion.div
                            className="h-full bg-[#E5042F] group-hover:bg-white transition-colors duration-300"
                            initial={{ width: 0 }}
                            animate={{ width: edu.status === 'current' ? '70%' : '100%' }}
                            whileHover={{ height: '3px' }}
                            transition={{ delay: index * 0.2, duration: 1 }}
                          />
                        </div>
                        
                        {/* White Glow Effect */}
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        
                        {/* Hover shimmer effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: '100%' }}
                          transition={{ duration: 0.6, ease: "easeInOut" }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Expertise Section */}
              {activeSection === 'expertise' && (
                <motion.div
                  key="expertise"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-3xl font-bold text-white mb-8 flex items-center space-x-3">
                    <Brain className="w-8 h-8 text-[#E5042F]" />
                    <span>Areas of Expertise</span>
                  </h3>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {joshuaData.expertise.map((skill, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-black/30 border border-[#E5042F]/20 p-4 backdrop-blur-sm hover:border-white/80 hover:bg-white/5 transition-all duration-300 group relative overflow-hidden"
                      >
                        {/* White Glow Effect */}
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-[#E5042F] rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                          <span className="text-white group-hover:text-[#E5042F] transition-colors duration-300">
                            {skill}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Achievements Section */}
              {activeSection === 'achievements' && (
                <motion.div
                  key="achievements"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-3xl font-bold text-white mb-8 flex items-center space-x-3">
                    <Trophy className="w-8 h-8 text-[#E5042F]" />
                    <span>Key Achievements</span>
                  </h3>
                  
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      {joshuaData.achievements.map((achievement, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ 
                            x: 10, 
                            scale: 1.02,
                            boxShadow: "0 8px 25px rgba(255, 255, 255, 0.2)"
                          }}
                          className="bg-black/30 border border-[#E5042F]/20 p-6 backdrop-blur-sm flex items-center space-x-4 cursor-pointer group hover:bg-white/5 hover:border-white/80 transition-all duration-300 relative overflow-hidden"
                        >
                          {/* White Glow Effect */}
                          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                          {/* Animated background shimmer */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E5042F]/5 to-transparent"
                            initial={{ x: '-100%' }}
                            whileHover={{ x: '100%' }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                          />
                          
                          <motion.div 
                            className="w-12 h-12 bg-[#E5042F]/20 border border-[#E5042F]/50 flex items-center justify-center group-hover:bg-[#E5042F]/30 group-hover:border-[#E5042F] transition-all duration-300 relative z-10"
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                          >
                            <Award className="w-6 h-6 text-[#E5042F] group-hover:text-white transition-colors duration-300" />
                          </motion.div>
                          <div className="relative z-10">
                            <motion.h4 
                              className="text-white font-bold text-lg group-hover:text-[#E5042F] transition-colors duration-300"
                              whileHover={{ x: 5 }}
                            >
                              {achievement}
                            </motion.h4>
                            <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">Professional milestone</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="bg-black/30 border border-[#E5042F]/20 p-8 backdrop-blur-sm">
                      <h4 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                        <Rocket className="w-6 h-6 text-[#E5042F]" />
                        <span>Vision & Mission</span>
                      </h4>
                      <div className="space-y-6">
                        <div>
                          <h5 className="text-[#E5042F] font-semibold mb-3">Mission</h5>
                          <p className="text-gray-300">
                            Increase global gaming valuation to 5x in the next 5 years and set new global standards for startups.
                          </p>
                        </div>
                        <div>
                          <h5 className="text-[#E5042F] font-semibold mb-3">Vision</h5>
                          <p className="text-gray-300">
                            Building the world's most innovative gaming super platform that creates multiple monetizable opportunities for players worldwide.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Testimonials Section */}
              {activeSection === 'testimonials' && (
                <motion.div
                  key="testimonials"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-3xl font-bold text-white mb-8 flex items-center space-x-3">
                    <Users className="w-8 h-8 text-[#E5042F]" />
                    <span>Professional Testimonials</span>
                  </h3>
                  
                  <div className="grid lg:grid-cols-2 gap-6">
                    {joshuaData.testimonials.map((testimonial, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="bg-black/30 border border-[#E5042F]/20 p-6 backdrop-blur-sm hover:border-white/80 hover:bg-white/5 transition-all duration-300 group relative overflow-hidden"
                      >
                        {/* Corner Elements with White HUD Effect */}
                        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/30 group-hover:border-white transition-colors duration-300"></div>
                        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/30 group-hover:border-white transition-colors duration-300"></div>
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/30 group-hover:border-white transition-colors duration-300"></div>
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/30 group-hover:border-white transition-colors duration-300"></div>

                        {/* Additional HUD Lines */}
                        <div className="absolute top-0 left-4 w-8 h-px bg-white/30 group-hover:bg-white transition-colors duration-300"></div>
                        <div className="absolute top-0 right-4 w-8 h-px bg-white/30 group-hover:bg-white transition-colors duration-300"></div>
                        <div className="absolute bottom-0 left-4 w-8 h-px bg-white/30 group-hover:bg-white transition-colors duration-300"></div>
                        <div className="absolute bottom-0 right-4 w-8 h-px bg-white/30 group-hover:bg-white transition-colors duration-300"></div>
                        <div className="absolute top-4 left-0 w-px h-8 bg-white/30 group-hover:bg-white transition-colors duration-300"></div>
                        <div className="absolute top-4 right-0 w-px h-8 bg-white/30 group-hover:bg-white transition-colors duration-300"></div>
                        <div className="absolute bottom-4 left-0 w-px h-8 bg-white/30 group-hover:bg-white transition-colors duration-300"></div>
                        <div className="absolute bottom-4 right-0 w-px h-8 bg-white/30 group-hover:bg-white transition-colors duration-300"></div>

                        {/* White Glow Effect */}
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                        <div className="relative z-10">
                          <div className="flex items-start mb-4">
                            <motion.div
                              className="mr-3 mt-1"
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.5 }}
                            >
                              <Users className="w-5 h-5 text-[#E5042F]" />
                            </motion.div>
                            <div className="flex-1">
                              <p className="text-gray-300 italic leading-relaxed group-hover:text-white transition-colors duration-300 mb-4">
                                "{testimonial.text}"
                              </p>
                            </div>
                          </div>
                          
                          <div className="border-t border-[#E5042F]/20 pt-4">
                            <h4 className="text-white font-bold text-lg group-hover:text-[#E5042F] transition-colors duration-300">
                              {testimonial.name}
                            </h4>
                            <p className="text-[#E5042F] text-sm font-medium mb-1">{testimonial.role}</p>
                            <p className="text-gray-400 text-xs">{testimonial.relation}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Projects Section */}
              {activeSection === 'projects' && (
                <motion.div
                  key="projects"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-3xl font-bold text-white mb-8 flex items-center space-x-3">
                    <Briefcase className="w-8 h-8 text-[#E5042F]" />
                    <span>Major Projects</span>
                  </h3>
                  
                  <div className="space-y-8">
                    {joshuaData.projects.map((project, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, y: -8 }}
                        className="bg-black/30 border border-[#E5042F]/20 p-8 backdrop-blur-sm hover:border-white/80 hover:bg-white/5 transition-all duration-300 group relative overflow-hidden"
                      >
                        {/* Corner Elements with White HUD Effect */}
                        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white/30 group-hover:border-white transition-colors duration-300"></div>
                        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white/30 group-hover:border-white transition-colors duration-300"></div>
                        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white/30 group-hover:border-white transition-colors duration-300"></div>
                        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white/30 group-hover:border-white transition-colors duration-300"></div>

                        {/* Extended HUD Lines for Projects */}
                        <div className="absolute top-0 left-6 w-12 h-px bg-white/30 group-hover:bg-white transition-colors duration-300"></div>
                        <div className="absolute top-0 right-6 w-12 h-px bg-white/30 group-hover:bg-white transition-colors duration-300"></div>
                        <div className="absolute bottom-0 left-6 w-12 h-px bg-white/30 group-hover:bg-white transition-colors duration-300"></div>
                        <div className="absolute bottom-0 right-6 w-12 h-px bg-white/30 group-hover:bg-white transition-colors duration-300"></div>
                        <div className="absolute top-6 left-0 w-px h-12 bg-white/30 group-hover:bg-white transition-colors duration-300"></div>
                        <div className="absolute top-6 right-0 w-px h-12 bg-white/30 group-hover:bg-white transition-colors duration-300"></div>
                        <div className="absolute bottom-6 left-0 w-px h-12 bg-white/30 group-hover:bg-white transition-colors duration-300"></div>
                        <div className="absolute bottom-6 right-0 w-px h-12 bg-white/30 group-hover:bg-white transition-colors duration-300"></div>

                        {/* Scanning Effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                          animate={{
                            x: ['-100%', '100%'],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />

                        {/* White Glow Effect */}
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                        <div className="relative z-10">
                          <div className="flex items-start justify-between mb-6">
                            <div>
                              <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-[#E5042F] transition-colors duration-300">
                                {project.name}
                              </h4>
                            </div>
                            <div className="text-right">
                              <span className="text-gray-400 text-sm bg-black/50 px-3 py-1 border border-[#E5042F]/30">
                                {project.period}
                              </span>
                            </div>
                          </div>

                          <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                            {project.description}
                          </p>

                          <div className="mb-6">
                            <h5 className="text-white font-semibold mb-3">Technologies Used</h5>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, techIndex) => (
                                <motion.span
                                  key={techIndex}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: techIndex * 0.05 }}
                                  whileHover={{ scale: 1.1 }}
                                  className="bg-[#E5042F]/20 border border-[#E5042F]/50 text-[#E5042F] px-3 py-1 text-sm font-medium hover:bg-[#E5042F]/30 transition-all duration-300"
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </div>
                          </div>

                          <div className="mb-6">
                            <h5 className="text-white font-semibold mb-3">Key Achievements</h5>
                            <div className="grid md:grid-cols-2 gap-3">
                              {project.achievements.map((achievement, achIndex) => (
                                <motion.div
                                  key={achIndex}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: achIndex * 0.1 }}
                                  className="flex items-start text-gray-300 group-hover:text-white transition-colors duration-300"
                                >
                                  <motion.div
                                    className="w-2 h-2 bg-[#E5042F] rounded-full mr-3 mt-2 flex-shrink-0"
                                    whileHover={{ scale: 1.5 }}
                                  />
                                  <span className="text-sm">{achievement}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          {project.link && (
                            <div className="flex gap-3">
                              <motion.a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center space-x-2 bg-[#E5042F] text-white px-6 py-3 hover:bg-[#E5042F]/80 transition-all duration-300 font-medium"
                              >
                                <ExternalLink className="w-4 h-4" />
                                <span>View Project</span>
                              </motion.a>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}