import { 
  User, 
  Sparkles, 
  Share2, 
  Link2, 
  MessageCircle, 
  Briefcase, 
  UserPlus, 
  Newspaper,
  CreditCard,
  Palette,
  Volume2,
  Eye,
  Shield,
  Target,
  Crown,
  Star,
  Globe,
  Users,
  Award,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  Zap,
  Building,
  Calendar,
  Filter,
  Search,
  Bell,
  Edit,
  Gamepad2,
  Monitor,
  Headphones,
  Smartphone
} from "lucide-react";

export interface FeatureData {
  icon: any;
  title: string;
  subtitle: string;
  quote: string;
  color: string;
  description: string;
  aboutFeature: string;
  craftingSection: string;
  problems: Array<{
    title: string;
    description: string;
    icon: any;
  }>;
  benefits: Array<{
    title: string;
    description: string;
    icon: any;
  }>;
  features: string[];
  subFeatures?: Array<{
    title: string;
    description: string;
  }>;
  future: string;
}

export const comprehensiveFeatureData: Record<string, FeatureData> = {
  "pro-gaming-profile": {
    icon: User,
    title: "Pro GAMING PROFILE",
    subtitle: "Create Your Legacy with us",
    quote: "Build your unique, Be known. Elevate Your Esports Career. Your Professional Gaming Blueprint.",
    color: "red",
    description: "Forge your ultimate professional gamer profile with GAMERS TAG, creating a powerful gaming identity to get noticed in the esports and gaming world. This interface is meticulously crafted to showcase your skill and passion, a masterpiece of digital gaming portfolio design. Dive into a next-gen gaming profile builder that redefines esports presence.",
    aboutFeature: "Your GAMERS TAG profile is your master key to the gaming industry. It's a professional portfolio meticulously designed to showcase your skills, experience, and achievements across various games. Link all your accounts, display your unique GTID, and build a powerful personal brand. This central hub helps you connect, grow, and turn your gaming passion into a recognized career. We believe an exceptional gamer profile should be a true reflection of your dedication. From dynamic stat integrations to custom highlight reels, our cutting-edge gaming identity platform ensures that presenting your esports journey is as smooth and impactful as your best plays. This is not just a gaming profile; it's a testament to your ambition and the pursuit of gaming career perfection.",
    craftingSection: "Our professional gamer profile design was brought to life by some of the finest designers and top UI/UX specialists in gaming. They meticulously built components from extensive wireframes and unique design components, a rigorous process that spanned two years. Every element, from the subtle nuances of each color palette to the precise placement of every icon, was chosen for optimal usability and aesthetic appeal. This dedication to perfection ensures our design truly meets the demands of the global gaming community and sets new industry standards for online gaming resumes and esports portfolios.",
    problems: [
      {
        title: "Anonymity & Obscurity",
        description: "We eliminate the problem of your gaming talent being hidden behind different aliases across various games, providing a centralized, professional platform for gamer recognition.",
        icon: Eye
      },
      {
        title: "Lack of Credibility & Verification",
        description: "Our robust system combats the difficulty in proving your skills and building a professional reputation in a fragmented online world, ensuring verifiable esports credentials and gaming professionalism.",
        icon: Shield
      },
      {
        title: "Missed Opportunities & Talent Discovery",
        description: "Say goodbye to limitations in esports scouting and gaming sponsorships. Without a central gamer profile, brands, teams, and fans struggle to see your full potential, which our feature comprehensively solves.",
        icon: Target
      },
      {
        title: "Scouting Inefficiency",
        description: "We streamline the process for esports organizations to find verified gaming talent easily, significantly reducing talent acquisition time for esports teams.",
        icon: Search
      },
      {
        title: "Fragmented Achievements",
        description: "We unify your scattered gaming accomplishments, providing a single, compelling narrative of your complete esports journey and gaming prowess.",
        icon: Award
      }
    ],
    benefits: [
      {
        title: "Gain Elite Recognition",
        description: "Create a professional gamer profile that makes you prominently stand out to top esports teams, gaming sponsors, and recruiters, boosting your esports career prospects.",
        icon: Crown
      },
      {
        title: "Build Your Digital Brand",
        description: "Control your narrative and build a powerful, authentic gaming identity that opens doors to new career opportunities in gaming and influencer collaborations.",
        icon: Star
      },
      {
        title: "Unified Digital Presence",
        description: "Consolidate your entire gaming life into one impressive GAMERS TAG profile, serving as your all-in-one gaming resume and digital personal brand.",
        icon: Globe
      },
      {
        title: "Enhanced Discoverability & Scouting",
        description: "Significantly increase your chances of being scouted by professional esports organizations and leading gaming brands, accelerating your path to pro gaming.",
        icon: TrendingUp
      },
      {
        title: "Showcase Diverse Skills",
        description: "Highlight diverse gaming abilities, cross-game proficiency, and achievements in one comprehensive place, proving your versatility as a gamer and competitive edge.",
        icon: Zap
      },
      {
        title: "Frictionless Networking",
        description: "Easily share your professional profile to connect with fellow gamers, industry veterans, and potential teammates, streamlining your gaming network expansion.",
        icon: Users
      }
    ],
    features: [
      "Professional Gaming Portfolio",
      "Unique GTID Display", 
      "Cross-Platform Account Linking",
      "Achievement Showcase",
      "Skills & Experience Display",
      "Personal Brand Builder",
      "Industry Recognition Tools",
      "Esports Team Visibility",
      "Career Analytics Dashboard",
      "Sponsor Connect Platform",
      "Dynamic Stat Integrations",
      "Custom Highlight Reels",
      "Verifiable Credentials",
      "Gaming Resume Builder",
      "Talent Discovery Platform"
    ],
    subFeatures: [
      {
        title: "Gaming Portfolio",
        description: "Create comprehensive gaming portfolios with advanced customization options and professional templates"
      },
      {
        title: "GTID Display",
        description: "Showcase your unique gaming identifier that connects all your gaming accounts and achievements"
      },
      {
        title: "Account Linking",
        description: "Connect all your gaming platforms, social media, and streaming accounts in one unified profile"
      },
      {
        title: "Achievement Showcase",
        description: "Display your gaming accomplishments, stats, and milestones in an engaging visual format"
      }
    ],
    future: "The mission of Pro GAMING PROFILE is to empower every gamer to transform their passion into a thriving profession, establishing the most comprehensive and impactful digital identity for gaming talent worldwide. We aim to provide a dynamic platform where gamers showcase their entire esports journey, achievements, and professional aspirations. Our vision is to be the global standard for professional gaming profiles, the best gaming portfolio platform in the world, and the ultimate tool for esports athletes to build their personal brand. We will be the leading platform for professional gaming profiles in India and the best online resume for gamers globally, driving esports career growth and professionalization in gaming. Our continuous innovation focuses on adaptive profile customization, AI-driven opportunity matching, and integrating blockchain for verifiable achievements, ensuring the ultimate professional gaming presence."
  },
  "next-gen-onboarding": {
    icon: Sparkles,
    title: "NEXT-GEN GAMING ONBOARDING EXPERIENCE",
    subtitle: "Start Your Gaming Journey Right",
    quote: "Cinematic | Gamified | Unforgettable. Start Your Gaming Journey Right. Immerse from First Touch.",
    color: "blue",
    description: "Step directly into the GAMERS TAG universe with an exciting, game-like onboarding experience you won't find anywhere else. This introduction is a masterclass in immersive gaming app design, making your entry into the next-gen gaming community truly unforgettable.",
    aboutFeature: "We believe your journey on GAMERS TAG should feel like an adventure from the very first second. We replaced boring sign-up forms with a cinematic, gamified onboarding process. You're not just joining an app; you're entering the vibrant world of next-gen gaming. This unforgettable introduction shows GAMERS TAG is built by gamers, for gamers. Our app currently boasts an onboarding sequence meticulously designed to deliver unparalleled user satisfaction and an immersive gaming environment. From dynamic animations to interactive tutorials, our cutting-edge UI/UX ensures that your introduction to the GAMERS TAG ecosystem is as smooth and exciting as your favorite games. This is not just an app onboarding process; it's a testament to design excellence and the pursuit of gaming app engagement perfection.",
    craftingSection: "Our professional onboarding experience was brought to life by talented designers and top UI/UX specialists in gaming. They meticulously built components from extensive wireframes and unique design elements, a rigorous process that spanned two years. Every element, from the subtle nuances of each color palette to the precise placement of every interactive element, was chosen for optimal usability and aesthetic appeal. This dedication to perfection ensures our design truly meets the demands of the global gaming community and sets new industry standards for app user acquisition and first-time user experience.",
    problems: [
      {
        title: "Boring First Impressions",
        description: "We eliminate dull and immediately disengaging app registrations, providing a dynamic, cinematic entry that captivates users from the first touch, ensuring high initial engagement.",
        icon: AlertTriangle
      },
      {
        title: "Lack of Excitement & Immersion",
        description: "Our gamified process actively combats other platforms' failure to capture the energy and passion of the gaming community from the start, delivering an immersive user journey.",
        icon: Zap
      },
      {
        title: "High Drop-off Rates",
        description: "Say goodbye to users abandoning the app early due to tedious onboarding. Our visually compelling and intuitive experience drives enhanced user retention and app stickiness.",
        icon: TrendingUp
      },
      {
        title: "Information Overload",
        description: "We transform information delivery, making crucial app features and benefits easy to digest through interactive elements, avoiding new user confusion.",
        icon: Shield
      },
      {
        title: "Disconnected User Journey",
        description: "We seamlessly integrate the user into the GAMERS TAG universe, ensuring they feel part of the gaming community from the very beginning.",
        icon: Users
      }
    ],
    benefits: [
      {
        title: "Instant Immersion & Excitement",
        description: "Feel the thrill of gaming from the moment you open the GAMERS TAG app, creating an unforgettable first impression and immediate app delight.",
        icon: Star
      },
      {
        title: "Memorable Start & Engagement",
        description: "A fun and gamified beginning makes you eager to explore everything the platform offers, boosting user exploration and feature adoption.",
        icon: Crown
      },
      {
        title: "Gamer-Centric Design Philosophy",
        description: "Immediately signals that GAMERS TAG profoundly understands and celebrates gamer culture, fostering a strong sense of community belonging.",
        icon: Users
      },
      {
        title: "Superior User Retention",
        description: "An engaging and seamless start cultivates sustained exploration and loyalty, significantly improving long-term app usage and customer lifetime value.",
        icon: TrendingUp
      },
      {
        title: "Simplified Feature Introduction",
        description: "Users quickly grasp the app's potential through an interactive and clear introduction to its core gaming features and functionalities.",
        icon: CheckCircle2
      },
      {
        title: "Positive Brand Association",
        description: "Establishes a strong, positive emotional connection with the GAMERS TAG brand right from the start, building brand affinity among gamers.",
        icon: Award
      }
    ],
    features: [
      "Cinematic Introduction Sequence",
      "Gamified Registration Process",
      "Interactive Tutorial System",
      "Dynamic Animation Effects",
      "Personalized Welcome Experience",
      "Gaming Culture Integration",
      "Progressive Feature Discovery",
      "Immersive UI/UX Design",
      "Community Integration Welcome",
      "Achievement-Based Onboarding"
    ],
    subFeatures: [
      {
        title: "Cinematic Intro",
        description: "Experience an immersive introduction sequence that showcases the gaming universe you're entering"
      },
      {
        title: "Gamified Registration",
        description: "Complete your registration through an engaging, game-like process that's fun and interactive"
      },
      {
        title: "Interactive Tutorials",
        description: "Learn platform features through hands-on tutorials designed like gaming missions"
      },
      {
        title: "Dynamic Animations",
        description: "Enjoy smooth, gaming-inspired animations that make every interaction feel responsive and engaging"
      }
    ],
    future: "The mission of the NEXT-GEN GAMING ONBOARDING EXPERIENCE is to redefine the initial user journey, making it an exhilarating entry into the GAMERS TAG ecosystem. We aim to create the most immersive and gamified onboarding process globally, setting the benchmark for user engagement in gaming applications. Our vision is to ensure every new user feels instantly connected, recognizing GAMERS TAG as the best gaming platform with unique onboarding and the most exciting onboarding experience for gamers. We will be the leading app with gamified onboarding in India and the premier choice for gamers seeking a dynamic introduction to a super app for gaming and esports. Our continuous innovation focuses on personalized onboarding paths, adaptive content delivery based on user preferences, and leveraging AI for a truly tailored first experience, ensuring the ultimate gaming app welcome."
  },
  "gaccounts": {
    icon: Share2,
    title: "GACCOUNTS",
    subtitle: "Unite Your Social Platform Universe",
    quote: "Unite Your Social Platform Universe. Centralize Your Digital Gaming Presence. Master Your Online Brand.",
    color: "purple",
    description: "Use your GAMERS TAG profile to link every social media, streaming, and gaming account you own into one simple, powerful hub. This interface is meticulously crafted to give you unparalleled control and visibility over your digital gaming presence, making it the ultimate social media manager for gamers.",
    aboutFeature: "Your influence is spread across YouTube, Twitch, X, Instagram, and more. GACCOUNTS by GAMERS TAG brings them all together. This feature lets you link all external profiles directly to your GAMERS TAG identity. Stop sharing dozens of links and struggling with fragmented online presence. Now, give out just one—your GAMERS TAG profile—to showcase your entire online universe and grow your community faster. We believe an exceptional social media hub should seamlessly consolidate your digital life. From dynamic link previews to integrated audience insights, our cutting-edge account linking platform ensures that managing and promoting your online gaming brand is as smooth and impactful as your content. This is not just a social media aggregator; it's a testament to simplifying digital identity for gamers and the pursuit of online brand perfection.",
    craftingSection: "Our award-winning GACCOUNTS design was brought to life by some of the world's youngest, finest designers and top UI/UX specialists focusing on creator tools. They meticulously built components from the results of over 20,000 wireframes and 10,000 unique components, a rigorous process that spanned two years. Every element, from the subtle nuances of each platform icon (selected after numerous research and analysis rounds) to the precise placement of every link, was chosen for optimal usability and aesthetic appeal. This dedication to perfection is evident in the fact that our design was rigorously tested with over 10,000 gaming content creators and esports personalities to ensure it truly meets the demands of the global gaming community and sets new industry standards for online presence management and digital branding for influencers.",
    problems: [
      {
        title: "Link Chaos & Inefficiency",
        description: "We eliminate the messy and inefficient process of sharing multiple links for all your profiles, providing a single, comprehensive hub for content creators and esports personalities, streamlining online promotion.",
        icon: Link2
      },
      {
        title: "Fragmented Audience & Cross-Platform Growth",
        description: "Our solution actively combats your followers on one platform struggling to find you on another, facilitating seamless audience growth and cross-platform engagement.",
        icon: Users
      },
      {
        title: "Hard to Manage & Brand Inconsistency",
        description: "Say goodbye to the constant challenge of tracking and promoting different accounts. Our unified system ensures consistent digital brand building and online identity management.",
        icon: Shield
      },
      {
        title: "Inefficient Branding",
        description: "We solve the struggle for creators to present a unified brand across disparate platforms, guaranteeing personal brand consistency and professional appeal.",
        icon: Star
      },
      {
        title: "Discovery Barriers for Collaborations",
        description: "Our feature removes the difficulty for potential sponsors or collaborators to see your full digital footprint, streamlining partnership opportunities in gaming.",
        icon: Search
      },
      {
        title: "Lost Analytics",
        description: "We solve the problem of piecing together analytics from various platforms by providing a central overview of your combined digital reach.",
        icon: TrendingUp
      }
    ],
    benefits: [
      {
        title: "One Link to Rule Them All",
        description: "Simplify your life with a single GAMERS TAG link that points to your entire online gaming world, serving as your unified digital identity and personal branding powerhouse.",
        icon: Globe
      },
      {
        title: "Accelerated Audience Growth",
        description: "Easily cross-promote your channels, helping fans discover all the gaming content you create, significantly boosting audience engagement and follower acquisition.",
        icon: TrendingUp
      },
      {
        title: "Professional Brand Image",
        description: "Present a clean, organized, and impressive view of your brand to gaming sponsors, collaborators, and esports organizations, enhancing your credibility.",
        icon: Crown
      },
      {
        title: "Significant Time-Savings",
        description: "Reduces the effort of managing multiple online presences, allowing more valuable time for gaming content creation, streaming, and gameplay.",
        icon: Zap
      },
      {
        title: "Enhanced Collaboration Potential",
        description: "Facilitates easier connections for gaming partnerships, influencer marketing, and team collaborations, opening new avenues for growth.",
        icon: Users
      },
      {
        title: "Comprehensive Digital Overview",
        description: "Gain a holistic view of your online presence and influence, empowering strategic decisions for your gaming career and personal brand development.",
        icon: Award
      }
    ],
    features: [
      "Social Media Integration Hub",
      "Unified Link Management",
      "Cross-Platform Analytics",
      "Brand Consistency Tools",
      "Dynamic Link Previews",
      "Audience Insights Dashboard",
      "Content Creator Tools",
      "Sponsorship Visibility",
      "Collaboration Facilitation",
      "Digital Identity Management"
    ],
    subFeatures: [
      {
        title: "Social Media Hub",
        description: "Connect all your social media accounts in one unified dashboard for streamlined management"
      },
      {
        title: "Link Management",
        description: "Manage all your profile links from a single location with smart organization tools"
      },
      {
        title: "Cross-Platform Analytics",
        description: "Get insights from all your connected platforms with comprehensive analytics dashboard"
      },
      {
        title: "Brand Consistency",
        description: "Maintain consistent branding across all your social media and gaming platforms"
      }
    ],
    future: "The mission of GACCOUNTS is to centralize and simplify the digital footprint of every gamer and content creator, becoming the ultimate unified social media hub for gamers globally. We aim to eliminate the chaos of managing fragmented online gaming identities and empower seamless digital presence. Our vision is to be the most essential tool for gamer identity management, recognized as the best platform to unite social profiles for gamers and the leading social media manager for content creators. We will be the top unified social media hub in India and the premier global platform for digital brand consolidation, making every creator's online presence powerful and organized. Our continuous innovation focuses on AI-driven content suggestions, automated cross-platform posting, and advanced analytics integration, ensuring the ultimate social media management experience for gamers."
  },
  "gconnect": {
    icon: Link2,
    title: "GCONNECT",
    subtitle: "Unite Your Gaming Universe",
    quote: "All your gaming worlds now in one place. Unite Your Gaming Universe. Connect with Gamers Seamlessly. Your Ultimate Gaming Network.",
    color: "green",
    description: "With GAMERS TAG, you can finally showcase every game you play and every in-game ID you own on a single, unified profile. This interface is meticulously crafted to facilitate effortless gamer connections, making it the ultimate gaming profile builder for online multiplayer and esports team-building.",
    aboutFeature: "Show the world every game you dominate. GConnect by GAMERS TAG lets you add all your specific in-game accounts and IDs to your professional profile. Whether it's Efootball 24 Mobile, Valorant, Mobile Legends, or any other title, create a card displaying your in-game name and ID. This makes it incredibly easy for others to find you, add you, and challenge you. We believe an exceptional gamer connection platform should bridge all gaming worlds. From dynamic game card creations to integrated friend requests, our cutting-edge gaming network builder ensures that expanding your gaming community is as smooth and exciting as your best plays. This is not just an in-game ID aggregator; it's a testament to fostering gamer camaraderie and the pursuit of seamless gaming connections.",
    craftingSection: "Our award-winning GConnect design was brought to life by some of the world's youngest, finest designers and top UI/UX specialists focusing on social gaming features. They meticulously built components from the results of over 20,000 wireframes and 10,000 unique components, a rigorous process that spanned two years. Every element, from the subtle nuances of each game icon (selected after numerous research and analysis rounds) to the precise placement of every ID field, was chosen for optimal usability and aesthetic appeal. This dedication to perfection is evident in the fact that our design was rigorously tested with over 10,000 competitive gamers and casual players to ensure it truly meets the demands of the global gaming community and sets new industry standards for online player discovery and multiplayer matchmaking.",
    problems: [
      {
        title: "Messy Game IDs & Inefficiency",
        description: "We eliminate the confusing and inefficient process of sharing different game IDs for different titles across online gaming platforms, providing a centralized solution for gamer identification.",
        icon: Shield
      },
      {
        title: "Finding Teammates is Hard",
        description: "Our platform actively combats the struggle to connect with the right players for a specific game, streamlining multiplayer gaming and team formation for esports.",
        icon: Users
      },
      {
        title: "Hidden Skills & Limited Discovery",
        description: "Say goodbye to your talent in various games going unnoticed. Our feature ensures your gamer versatility is fully showcased, boosting gamer visibility and competitive profile.",
        icon: Eye
      },
      {
        title: "Fragmented In-Game Networks",
        description: "We solve the problem of players struggling to unify their friend lists across different gaming platforms, creating a cohesive gaming social network.",
        icon: Link2
      },
      {
        title: "Difficulty in Player Discovery",
        description: "We streamline the process of discovering new players with similar interests or skill levels across diverse gaming titles, enhancing community building.",
        icon: Search
      },
      {
        title: "Inefficient Challenge System",
        description: "We make it easy to challenge or be challenged by other players, fostering competitive play and skill development.",
        icon: Target
      }
    ],
    benefits: [
      {
        title: "Build Your Comprehensive Gaming Portfolio",
        description: "Create an impressive display of all the games you play and your in-game prowess directly on your GAMERS TAG profile, showcasing your gaming versatility and achievements.",
        icon: Award
      },
      {
        title: "Connect Faster & Seamlessly",
        description: "Make it incredibly simple for friends, potential teammates, and rivals to find and add you in-game, streamlining online multiplayer connections and gaming social interactions.",
        icon: Zap
      },
      {
        title: "Strengthen Your Gaming Community",
        description: "Effortlessly find and connect with other GAMERS TAG users who play the same games, fostering a vibrant and active gaming community around your favorite titles.",
        icon: Users
      },
      {
        title: "Enhanced Matchmaking & Team Formation",
        description: "Easily discover and form balanced teams with compatible players for competitive gaming, ranked matches, and casual play.",
        icon: Crown
      },
      {
        title: "Streamlined Player Discovery",
        description: "Effortlessly find and connect with new gamers who share your favorite titles, playstyles, and competitive aspirations, expanding your gaming network.",
        icon: Globe
      },
      {
        title: "Showcase Cross-Game Mastery",
        description: "Present a holistic view of your skills across different genres and games, highlighting your adaptability as a gamer and all-round talent.",
        icon: Star
      }
    ],
    features: [
      "Multi-Game ID Management",
      "Dynamic Game Cards",
      "Cross-Platform Friend Lists",
      "Player Discovery System",
      "Challenge & Match System",
      "Gaming Community Builder",
      "Skill Showcase Platform",
      "Team Formation Tools",
      "Competitive Profile Display",
      "Social Gaming Network"
    ],
    subFeatures: [
      {
        title: "Game ID Management",
        description: "Organize and display all your gaming IDs across different platforms in one centralized location"
      },
      {
        title: "Dynamic Game Cards",
        description: "Create customizable cards for each game you play, showcasing your skills and achievements"
      },
      {
        title: "Player Discovery",
        description: "Find and connect with compatible players who share your gaming interests and skill level"
      },
      {
        title: "Challenge System",
        description: "Challenge other players and organize matches across multiple gaming platforms"
      }
    ],
    future: "The mission of GCONNECT is to flawlessly integrate every gamer's in-game identity into a single, comprehensive profile, fostering seamless connections and community building across all gaming titles. We aim to become the definitive global database for gamer IDs and in-game profiles, making it effortless for players to find and collaborate. Our vision is to be the most powerful gaming profile builder in the world, recognized as the best platform to connect with gamers easily and the essential tool for finding teammates across multiple games. We will be the top gaming connections platform in India and the premier hub for discovering and playing with fellow gamers globally. Our continuous innovation focuses on AI-driven player matching, real-time in-game status integration, and advanced social networking features, ensuring the ultimate gaming connectivity experience."
  },
  "gt-chat": {
    icon: MessageCircle,
    title: "GT CHAT Feature",
    subtitle: "Goodbye, Boring Messaging experience",
    quote: "Fast, fun, and fully gamified by gamers. Best Gamified Chat Experience Ever. Communicate Like a Pro Gamer.",
    color: "cyan",
    description: "Experience a chat system built exclusively for gamers on GAMERS TAG, making communication faster, more fun, and more interactive. This interface is meticulously crafted to be your ultimate in-app gaming chat, redefining online communication for the gaming community.",
    aboutFeature: "Standard messaging apps are boring and generic. GAMERS TAG Chats are built for gaming culture and the demands of competitive play. We've created a fast, fun, and fully gamified communication experience designed for everything from coordinating your next team match to connecting with new friends and organizing esports strategies. We believe an exceptional gaming chat should be an extension of your gameplay. From dynamic in-chat reactions to custom game-specific emojis, our cutting-edge chat UI/UX ensures that every conversation is as engaging and strategic as the games you play. This is not just a messaging app; it's a testament to fostering gamer camaraderie and the pursuit of seamless gaming communication perfection.",
    craftingSection: "Our award-winning GT CHAT design was brought to life by some of the world's youngest, finest designers and top UI/UX specialists focusing on interactive communication for gaming. They meticulously built components from the results of over 20,000 wireframes and 10,000 unique components, a rigorous process that spanned two years. Every element, from the subtle nuances of each notification sound (selected after numerous research and analysis rounds) to the precise placement of every chat bubble, was chosen for optimal usability and aesthetic appeal. This dedication to perfection is evident in the fact that our design was rigorously tested with over 10,000 esports teams and online gaming communities to ensure it truly meets the demands of the global gaming community and sets new industry standards for in-app chat functionality and gamer social features.",
    problems: [
      {
        title: "Dull & Generic Communication",
        description: "We eliminate generic chat apps that lack the energy and features gamers expect, providing a vibrant, gamified chat that feels truly integrated with the gaming world.",
        icon: AlertTriangle
      },
      {
        title: "Disjointed Experience & Context Switching",
        description: "Our seamless integration actively combats constantly switching between a game and a separate chat app, ensuring uninterrupted gameplay flow and focused communication.",
        icon: Link2
      },
      {
        title: "Weak Community Tools & Engagement",
        description: "Say goodbye to basic, non-gaming chat platforms that hinder real gaming community building. Our interactive features drive enhanced user engagement and team cohesion.",
        icon: Users
      },
      {
        title: "Lack of Gaming Context & Strategy",
        description: "We solve the problem of general chat apps not supporting quick, game-specific communication or strategies, facilitating efficient team coordination and esports tactics.",
        icon: Target
      },
      {
        title: "Inefficient Team Communication",
        description: "We provide advanced tools for coordinating complex strategies in esports and multiplayer games, making team communication intuitive and effective.",
        icon: Shield
      },
      {
        title: "Missing Gamer-Specific Features",
        description: "We address the absence of features like quick-reaction emotes, tactical drawing tools, and in-game status updates common in dedicated gaming communication apps.",
        icon: Gamepad2
      }
    ],
    benefits: [
      {
        title: "Chat Like a Pro Gamer",
        description: "Use a chat system that speaks your language and fits seamlessly into your gaming life, offering an intuitive gaming communication experience for esports teams and friends.",
        icon: Crown
      },
      {
        title: "Stay Deeply Engaged",
        description: "Interactive and gamified elements make every conversation on GAMERS TAG more fun and dynamic, boosting user interaction and social connectivity.",
        icon: Star
      },
      {
        title: "Build Your Gaming Network",
        description: "Easily connect and coordinate with your team, fans, and other gaming professionals within the GAMERS TAG ecosystem, fostering strong community bonds.",
        icon: Users
      },
      {
        title: "Improved Team Coordination & Strategy",
        description: "Facilitates highly efficient team strategy and in-game communication, essential for competitive gaming success and esports performance.",
        icon: Award
      },
      {
        title: "Seamless In-App Integration",
        description: "Enjoy a unified communication experience within the same platform where you manage your gaming profile and find jobs, eliminating the need for external apps.",
        icon: Globe
      },
      {
        title: "Express Yourself with Gamer Flair",
        description: "Utilize gamer-specific emotes, stickers, and reactions that resonate with gaming culture, making conversations more expressive and fun.",
        icon: Zap
      }
    ],
    features: [
      "Gamified Chat Interface",
      "Gaming-Specific Emojis",
      "Team Coordination Tools",
      "In-Chat Reactions",
      "Strategy Discussion Boards",
      "Voice Chat Integration",
      "Gaming Status Updates",
      "Tournament Communication",
      "Community Chat Rooms",
      "Interactive Gaming Elements"
    ],
    future: "The mission of GT CHAT is to redefine in-app communication for the gaming community, delivering the most engaging, gamified, and seamless messaging experience worldwide. We aim to transcend traditional chat functionalities, fostering real-time collaboration and vibrant social interactions for gamers. Our vision is to be the best in-app chat for gaming communities, recognized as the leading gamified chat experience for gamers and the essential communication tool for esports teams and fans. We will be the top gaming chat app in India and the premier global platform for interactive gamer communication, making every message an immersive gaming experience. Our continuous innovation focuses on AI-powered language translation for global teams, integrated voice chat with noise suppression, and dynamic context-aware chat suggestions, ensuring the ultimate gaming communication hub."
  },
  "gt-jobs": {
    icon: Briefcase,
    title: "GT JOBS",
    subtitle: "Apply for Top Gaming and Tech Jobs",
    quote: "Work in the industry you love. Apply for Top Gaming & Tech Jobs. Your Esports Career Starts Here. Unlock Your Gaming Potential.",
    color: "orange",
    description: "The best way to find gaming jobs is with GAMERS TAG. Discover thousands of esports and tech career opportunities and apply in seconds. This interface is meticulously crafted to be your gaming career launchpad, connecting you to dream jobs in the gaming industry with unparalleled ease.",
    aboutFeature: "Your dream career in gaming is now within reach. The GAMERS TAG Jobs portal is the ultimate destination for finding and applying for jobs in the gaming and tech industries. We connect passionate gamers like you with top companies, esports organizations, and game development studios. Browse exclusive listings for roles in game development, marketing, esports management, design, community management, and more, and apply instantly with your professional GAMERS TAG profile. We are building the launchpad for over 500,000 gaming careers, empowering a new generation of gaming professionals. This feature is your go-to for esports job opportunities and gaming industry careers, meticulously designed for seamless job discovery and application.",
    craftingSection: "Our award-winning GT JOBS design was brought to life by some of the world's youngest, finest designers and top UI/UX specialists focusing on recruitment platforms for specialized industries. They meticulously built components from the results of over 20,000 wireframes and 10,000 unique components, a rigorous process that spanned two years. Every element, from the subtle nuances of each job category filter (selected after numerous research and analysis rounds) to the precise placement of every 'Apply Now' button, was chosen for optimal usability and aesthetic appeal. This dedication to perfection is evident in the fact that our design was rigorously tested with over 10,000 job seekers in gaming and esports professionals to ensure it truly meets the demands of the global gaming community and sets new industry standards for online job searching and career development platforms.",
    problems: [
      {
        title: "Limited Gaming Industry Access",
        description: "We eliminate the difficulty in finding legitimate gaming and esports job opportunities, providing exclusive access to industry-specific roles and career paths.",
        icon: Search
      },
      {
        title: "Generic Job Platforms",
        description: "Our specialized platform actively combats general job sites that don't understand gaming culture or industry requirements, offering tailored gaming career solutions.",
        icon: Target
      },
      {
        title: "Inefficient Application Process",
        description: "Say goodbye to lengthy application procedures. Our streamlined system allows instant applications using your GAMERS TAG profile, saving time and effort.",
        icon: Zap
      },
      {
        title: "Lack of Industry Network",
        description: "We solve the problem of limited connections within the gaming industry, facilitating direct communication with recruiters and gaming professionals.",
        icon: Users
      },
      {
        title: "Skills Verification Challenges",
        description: "We address the difficulty in proving gaming skills and experience to potential employers, providing verifiable gaming credentials and achievements.",
        icon: Shield
      },
      {
        title: "Career Development Gaps",
        description: "We bridge the gap between gaming passion and professional opportunities, offering clear career progression paths in the gaming industry.",
        icon: TrendingUp
      }
    ],
    benefits: [
      {
        title: "Access Exclusive Gaming Jobs",
        description: "Discover thousands of job opportunities specifically in gaming, esports, and tech industries that aren't available on general job platforms.",
        icon: Award
      },
      {
        title: "Instant Application Process",
        description: "Apply to jobs in seconds using your comprehensive GAMERS TAG profile, eliminating repetitive form filling and accelerating your job search.",
        icon: Zap
      },
      {
        title: "Industry-Specific Matching",
        description: "Get matched with jobs that align with your gaming skills, experience, and career aspirations, increasing your chances of landing the perfect role.",
        icon: Target
      },
      {
        title: "Direct Recruiter Communication",
        description: "Connect directly with hiring managers and recruiters in the gaming industry through our integrated communication system.",
        icon: MessageCircle
      },
      {
        title: "Career Growth Tracking",
        description: "Monitor your job application progress and career development within the gaming industry ecosystem.",
        icon: TrendingUp
      },
      {
        title: "Global Gaming Opportunities",
        description: "Access both local and international gaming job opportunities, expanding your career possibilities beyond geographical boundaries.",
        icon: Globe
      }
    ],
    features: [
      "Gaming Industry Job Portal",
      "Instant Profile Application",
      "Skills-Based Job Matching",
      "Recruiter Communication Hub",
      "Application Progress Tracking",
      "Global Job Opportunities",
      "Industry Networking Tools",
      "Career Development Resources",
      "Esports Career Pathways",
      "Gaming Company Database"
    ],
    subFeatures: [
      {
        title: "Quick Apply",
        description: "Streamlined resume upload and fast Q&A answering for efficient applications, significantly reducing job application time."
      },
      {
        title: "Global Jobs",
        description: "Access local and global job opportunities within the app, expanding your career search beyond geographical boundaries for international gaming jobs."
      },
      {
        title: "One-Tap Share",
        description: "Easily share relevant gaming job listings via WhatsApp, Telegram, and other platforms, facilitating job sharing convenience within your network."
      },
      {
        title: "Real-Time Status",
        description: "Transparently track the progress of your job applications, providing application transparency and peace of mind."
      },
      {
        title: "Recruiter Chat",
        description: "In-app chat functionality to communicate directly with job posters, enabling direct communication with recruiters for clarifications and follow-ups."
      },
      {
        title: "Save Jobs",
        description: "Bookmark desirable gaming industry jobs to apply for later, for organized job hunting and career planning."
      },
      {
        title: "Easy Job Apply",
        description: "Instant job application feature with pre-filled profile information for seamless application submission."
      },
      {
        title: "Job Profile",
        description: "Set up your comprehensive job profile for streamlined application processes and enhanced recruiter visibility."
      }
    ],
    future: "The mission of GT JOBS is to become the definitive career platform for the gaming industry, connecting talented individuals with their dream jobs in gaming, esports, and technology. We aim to facilitate over 500,000 successful job placements in the gaming sector, empowering the next generation of gaming professionals. Our vision is to be the most trusted gaming jobs platform globally, recognized as the best career launchpad for esports professionals and the essential tool for gaming industry recruitment. We will be the leading gaming jobs platform in India and the premier global hub for gaming career opportunities, making every gaming passion a professional reality. Our continuous innovation focuses on AI-driven job matching, skill assessment integration, and predictive career path recommendations, ensuring the ultimate gaming career development platform."
  },
  "gt-jobs-now": {
    icon: UserPlus,
    title: "GT JOBS NOW",
    subtitle: "Hire the Sharpest Minds in Gaming",
    quote: "Find top talent fast. Hire the Sharpest Minds in Gaming. Your Next Star Player Awaits. Recruit Gaming Excellence.",
    color: "indigo",
    description: "Turn your company into a gaming talent magnet with GAMERS TAG's revolutionary hiring platform. Connect with verified gaming professionals, esports athletes, and tech specialists who are ready to elevate your organization to the next level.",
    aboutFeature: "Finding the right gaming talent has never been easier. GT JOBS NOW by GAMERS TAG connects you directly with a curated pool of verified gaming professionals, esports athletes, content creators, and tech specialists. Post job openings, browse comprehensive gaming profiles, and hire the best talent in the industry with unprecedented speed and accuracy. We believe exceptional hiring should be as strategic as the best games. From advanced filtering systems to direct candidate communication, our cutting-edge recruitment platform ensures that finding your next star team member is as smooth and successful as your best campaigns. This is not just a hiring platform; it's a testament to building winning teams and the pursuit of gaming talent acquisition perfection.",
    craftingSection: "Our award-winning GT JOBS NOW design was brought to life by some of the world's youngest, finest designers and top UI/UX specialists focusing on recruitment technology. They meticulously built components from the results of over 20,000 wireframes and 10,000 unique components, a rigorous process that spanned two years. Every element, from the subtle nuances of each candidate filter (selected after numerous research and analysis rounds) to the precise placement of every hire button, was chosen for optimal usability and aesthetic appeal. This dedication to perfection is evident in the fact that our design was rigorously tested with over 10,000 hiring managers and HR professionals to ensure it truly meets the demands of the global gaming industry and sets new industry standards for specialized talent acquisition and gaming recruitment platforms.",
    problems: [
      {
        title: "Gaming Talent Scarcity",
        description: "We eliminate the challenge of finding qualified candidates who truly understand gaming culture and industry requirements, providing access to verified gaming professionals.",
        icon: Search
      },
      {
        title: "Inefficient Recruitment Process",
        description: "Our streamlined platform actively combats lengthy hiring processes that lose top talent to competitors, enabling rapid candidate evaluation and hiring decisions.",
        icon: Zap
      },
      {
        title: "Skills Verification Challenges",
        description: "Say goodbye to uncertainty about candidate capabilities. Our platform provides comprehensive gaming profiles with verifiable skills and achievements.",
        icon: Shield
      },
      {
        title: "Cultural Fit Concerns",
        description: "We solve the problem of hiring candidates who don't align with gaming culture, ensuring all professionals on our platform share gaming passion and understanding.",
        icon: Users
      },
      {
        title: "Limited Talent Pool Access",
        description: "We address the difficulty in reaching diverse gaming talent, providing access to professionals across all gaming disciplines and experience levels.",
        icon: Globe
      },
      {
        title: "High Recruitment Costs",
        description: "We reduce traditional recruitment expenses while improving hiring quality through our efficient, technology-driven talent acquisition platform.",
        icon: TrendingUp
      }
    ],
    benefits: [
      {
        title: "Access Verified Gaming Talent",
        description: "Connect with a curated pool of verified gaming professionals, ensuring you hire candidates with proven skills and genuine gaming passion.",
        icon: Award
      },
      {
        title: "Rapid Hiring Process",
        description: "Streamline your recruitment with advanced filtering, direct communication, and comprehensive candidate profiles, reducing time-to-hire significantly.",
        icon: Zap
      },
      {
        title: "Industry-Specific Expertise",
        description: "Find candidates who understand gaming culture, industry trends, and the unique demands of working in gaming and esports environments.",
        icon: Crown
      },
      {
        title: "Global Talent Reach",
        description: "Access gaming talent from around the world, enabling you to build diverse, skilled teams regardless of geographical constraints.",
        icon: Globe
      },
      {
        title: "Cost-Effective Recruitment",
        description: "Reduce recruitment costs while improving hiring quality through our efficient, technology-driven talent acquisition platform.",
        icon: TrendingUp
      },
      {
        title: "Direct Candidate Engagement",
        description: "Communicate directly with potential hires through our integrated messaging system, facilitating better candidate relationships and hiring decisions.",
        icon: MessageCircle
      }
    ],
    features: [
      "Gaming Talent Database",
      "Advanced Candidate Filtering",
      "Skills Verification System",
      "Direct Recruiter Messaging",
      "Rapid Application Review",
      "Gaming Industry Insights",
      "Team Building Tools",
      "Cultural Fit Assessment",
      "Global Talent Access",
      "Recruitment Analytics Dashboard"
    ],
    subFeatures: [
      {
        title: "Talent Database",
        description: "Access comprehensive database of verified gaming professionals with detailed skills and experience"
      },
      {
        title: "Advanced Filtering",
        description: "Filter candidates by skills, experience, location, and gaming specializations for precise matching"
      },
      {
        title: "Skills Verification",
        description: "Verify candidate gaming skills through integrated assessment and portfolio validation systems"
      },
      {
        title: "Direct Messaging",
        description: "Communicate directly with potential hires through integrated recruitment messaging platform"
      }
    ],
    future: "The mission of GT JOBS NOW is to revolutionize talent acquisition in the gaming industry, becoming the premier platform for connecting exceptional gaming professionals with leading organizations worldwide. We aim to facilitate the creation of winning teams that drive innovation and success in gaming, esports, and technology. Our vision is to be the most trusted recruitment platform for gaming companies globally, recognized as the best source for gaming talent acquisition and the essential tool for building high-performance gaming teams. We will be the leading gaming recruitment platform in India and the premier global hub for gaming talent solutions, making every hire a strategic advantage. Our continuous innovation focuses on AI-powered candidate matching, predictive hiring analytics, and automated screening processes, ensuring the ultimate gaming talent acquisition experience."
  },
  "gt-news": {
    icon: Newspaper,
    title: "GT NEWS",
    subtitle: "Read gaming news in short scroll",
    quote: "Stay ahead with bite-sized gaming intel. Read Gaming News in Short Scroll. Your Gaming Knowledge Hub. Never Miss a Beat.",
    color: "teal",
    description: "Stay up-to-date with the latest gaming, esports, and tech news through GAMERS TAG's curated news feed. Get bite-sized, relevant updates that keep you informed without overwhelming your schedule.",
    aboutFeature: "Information overload is real, but missing important gaming news isn't an option. GT NEWS by GAMERS TAG delivers the most relevant gaming, esports, and tech updates in a digestible, scroll-friendly format. Our curated content ensures you stay informed about industry trends, game releases, tournament results, and technology breakthroughs that matter to your gaming journey. We believe exceptional news consumption should be as engaging as your favorite games. From personalized content algorithms to interactive news elements, our cutting-edge news platform ensures that staying informed is as smooth and enjoyable as your best gaming sessions. This is not just a news aggregator; it's a testament to informed gaming culture and the pursuit of knowledge-driven gaming excellence.",
    craftingSection: "Our award-winning GT NEWS design was brought to life by some of the world's youngest, finest designers and top UI/UX specialists focusing on content consumption platforms. They meticulously built components from the results of over 20,000 wireframes and 10,000 unique components, a rigorous process that spanned two years. Every element, from the subtle nuances of each content card (selected after numerous research and analysis rounds) to the precise placement of every share button, was chosen for optimal usability and aesthetic appeal. This dedication to perfection is evident in the fact that our design was rigorously tested with over 10,000 gaming enthusiasts and content consumers to ensure it truly meets the demands of the global gaming community and sets new industry standards for mobile news consumption and gaming content curation.",
    problems: [
      {
        title: "Information Overload",
        description: "We eliminate the overwhelming flood of irrelevant gaming news, providing curated, relevant content that matches your gaming interests and schedule.",
        icon: AlertTriangle
      },
      {
        title: "Scattered News Sources",
        description: "Our unified platform actively combats the need to check multiple gaming news websites and platforms, centralizing all important gaming information in one place.",
        icon: Link2
      },
      {
        title: "Time-Consuming News Consumption",
        description: "Say goodbye to lengthy articles that consume gaming time. Our bite-sized format delivers essential information quickly and efficiently.",
        icon: Zap
      },
      {
        title: "Irrelevant Content Filtering",
        description: "We solve the problem of generic gaming news that doesn't match your specific interests, providing personalized content curation.",
        icon: Target
      },
      {
        title: "Delayed Industry Updates",
        description: "We address the challenge of staying current with fast-moving gaming industry developments, ensuring real-time news delivery.",
        icon: TrendingUp
      },
      {
        title: "Poor Mobile Reading Experience",
        description: "We eliminate the frustration of poorly formatted news on mobile devices, providing an optimized reading experience for gamers on the go.",
        icon: Monitor
      }
    ],
    benefits: [
      {
        title: "Stay Gaming-Informed Efficiently",
        description: "Consume the most relevant gaming news in minutes, not hours, keeping you updated without disrupting your gaming schedule.",
        icon: Zap
      },
      {
        title: "Personalized Content Curation",
        description: "Receive news tailored to your gaming interests, favorite games, and industry focus areas, ensuring maximum relevance.",
        icon: Target
      },
      {
        title: "Mobile-Optimized Reading",
        description: "Enjoy a seamless news reading experience designed specifically for mobile gaming enthusiasts and busy gamers.",
        icon: Monitor
      },
      {
        title: "Industry Trend Awareness",
        description: "Stay ahead of gaming industry trends, market developments, and emerging opportunities that could impact your gaming career.",
        icon: TrendingUp
      },
      {
        title: "Community Discussion Integration",
        description: "Engage with other gamers about news stories, sharing insights and perspectives within the GAMERS TAG community.",
        icon: Users
      },
      {
        title: "Comprehensive Gaming Coverage",
        description: "Access news across all gaming platforms, genres, and industry sectors, ensuring comprehensive gaming knowledge.",
        icon: Globe
      }
    ],
    features: [
      "Curated Gaming News Feed",
      "Bite-Sized Content Format",
      "Personalized News Algorithm",
      "Mobile-Optimized Reading",
      "Industry Trend Analysis",
      "Interactive News Elements",
      "Social Sharing Integration",
      "Bookmark & Save Features",
      "Real-Time News Updates",
      "Community Discussion Threads"
    ],
    future: "The mission of GT NEWS is to become the definitive source for gaming industry information, delivering the most relevant and timely news to gamers worldwide. We aim to create an informed gaming community that stays ahead of industry trends and opportunities. Our vision is to be the most trusted gaming news platform globally, recognized as the best source for gaming industry intelligence and the essential tool for staying informed in the gaming ecosystem. We will be the leading gaming news platform in India and the premier global hub for gaming information consumption, making every news moment valuable and actionable. Our continuous innovation focuses on AI-powered content personalization, predictive trend analysis, and interactive news experiences, ensuring the ultimate gaming information platform."
  },
  "gt-news-now": {
    icon: Edit,
    title: "GT NEWS NOW",
    subtitle: "Post your News in Gaming, Tech, Esports and Others",
    quote: "Your voice, your news, your community. Post Your News in Gaming & Tech. Share Your Gaming Insights. Become a Gaming Thought Leader.",
    color: "pink",
    description: "Transform your gaming insights into impactful news stories with GAMERS TAG's content creation platform. Share your expertise, opinions, and discoveries with the global gaming community and establish yourself as a gaming thought leader.",
    aboutFeature: "Every gamer has valuable insights, unique perspectives, and breaking news to share. GT NEWS NOW by GAMERS TAG empowers you to become a content creator and thought leader in the gaming community. Write articles, share discoveries, announce events, and contribute to the global gaming conversation. Whether you're sharing tournament results, reviewing new games, or discussing industry trends, our platform gives you the tools to reach and engage with fellow gamers worldwide. We believe exceptional content creation should be as rewarding as achieving your gaming goals. From intuitive writing tools to audience engagement analytics, our cutting-edge publishing platform ensures that sharing your gaming knowledge is as smooth and impactful as your best plays. This is not just a content management system; it's a testament to empowering gaming voices and the pursuit of community-driven gaming journalism excellence.",
    craftingSection: "Our award-winning GT NEWS NOW design was brought to life by some of the world's youngest, finest designers and top UI/UX specialists focusing on content creation platforms. They meticulously built components from the results of over 20,000 wireframes and 10,000 unique components, a rigorous process that spanned two years. Every element, from the subtle nuances of each editing tool (selected after numerous research and analysis rounds) to the precise placement of every publish button, was chosen for optimal usability and aesthetic appeal. This dedication to perfection is evident in the fact that our design was rigorously tested with over 10,000 gaming content creators and esports journalists to ensure it truly meets the demands of the global gaming community and sets new industry standards for mobile content creation and gaming journalism platforms.",
    problems: [
      {
        title: "Limited Gaming Content Platforms",
        description: "We eliminate the scarcity of dedicated platforms for gaming content creation, providing a specialized environment for gaming journalism and community contributions.",
        icon: Search
      },
      {
        title: "Complex Publishing Processes",
        description: "Our streamlined platform actively combats complicated content management systems, enabling quick and easy article creation and publication.",
        icon: Zap
      },
      {
        title: "Limited Audience Reach",
        description: "Say goodbye to content that goes unnoticed. Our integrated platform ensures your gaming insights reach engaged, relevant audiences within the gaming community.",
        icon: Users
      },
      {
        title: "Lack of Gaming-Specific Tools",
        description: "We solve the problem of generic publishing platforms that don't cater to gaming content needs, providing specialized tools for gaming journalism.",
        icon: Edit
      },
      {
        title: "Poor Mobile Creation Experience",
        description: "We address the difficulty of creating quality content on mobile devices, offering an optimized mobile content creation experience.",
        icon: Edit
      },
      {
        title: "Limited Community Engagement",
        description: "We eliminate the barrier between content creators and their audience, facilitating direct engagement and community building around gaming content.",
        icon: MessageCircle
      }
    ],
    benefits: [
      {
        title: "Establish Gaming Thought Leadership",
        description: "Build your reputation as a gaming expert by consistently sharing valuable insights, opinions, and news with the gaming community.",
        icon: Crown
      },
      {
        title: "Reach Engaged Gaming Audiences",
        description: "Connect with passionate gamers who actively seek quality gaming content, ensuring your articles reach interested and engaged readers.",
        icon: Users
      },
      {
        title: "Streamlined Content Creation",
        description: "Create and publish high-quality gaming content quickly using our intuitive, mobile-optimized writing and editing tools.",
        icon: Zap
      },
      {
        title: "Community Building & Networking",
        description: "Connect with other gaming content creators, industry professionals, and community members through your published content.",
        icon: Globe
      },
      {
        title: "Content Performance Analytics",
        description: "Track how your gaming content performs, understand your audience, and optimize your content strategy for maximum impact.",
        icon: TrendingUp
      },
      {
        title: "Monetization Opportunities",
        description: "Transform your gaming expertise into potential revenue streams through our integrated content creator support systems.",
        icon: Award
      }
    ],
    features: [
      "Gaming Content Editor",
      "Mobile-Optimized Publishing",
      "Audience Engagement Tools",
      "Content Performance Analytics",
      "Gaming Community Integration",
      "Multimedia Content Support",
      "Social Media Integration",
      "Content Scheduling System",
      "Collaboration Tools",
      "Revenue Generation Options"
    ],
    subFeatures: [
      {
        title: "Content Editor",
        description: "Create engaging gaming content with advanced editing tools designed specifically for gaming journalism"
      },
      {
        title: "Mobile Publishing",
        description: "Publish gaming articles and news directly from your mobile device with optimized mobile tools"
      },
      {
        title: "Audience Engagement",
        description: "Connect with your readers through comments, reactions, and community interaction features"
      },
      {
        title: "Performance Analytics",
        description: "Track article performance, reader engagement, and content metrics to optimize your strategy"
      }
    ],
    future: "The mission of GT NEWS NOW is to democratize gaming journalism and content creation, empowering every gamer to contribute to the global gaming narrative. We aim to foster a vibrant ecosystem of gaming content creators who drive meaningful conversations and share valuable insights. Our vision is to be the most empowering content creation platform for gamers globally, recognized as the best tool for gaming journalism and the essential platform for gaming thought leadership. We will be the leading gaming content creation platform in India and the premier global hub for community-driven gaming journalism, making every gamer's voice heard and valued. Our continuous innovation focuses on AI-powered writing assistance, automated content optimization, and advanced audience targeting, ensuring the ultimate gaming content creation experience."
  },
  "gt-card": {
    icon: CreditCard,
    title: "GT CARD",
    subtitle: "Attain your Unique Gaming card",
    quote: "Your Gaming Identity, Your Digital Card. Showcase Your Gaming Legacy. Your Unique Gaming Passport.",
    color: "gold",
    description: "Get your unique GAMERS TAG digital card, a personalized identity showcasing your gaming achievements and connections. This is your digital gaming ID card and a personalized gamer profile that represents your gaming journey.",
    aboutFeature: "The GT CARD is your digital representation within the GAMERS TAG ecosystem and the broader gaming community. It's a sleek, customizable card that displays your GTID, key gaming stats, preferred games, achievements, and linked accounts. Share it effortlessly to connect with other gamers, teams, and industry professionals, making networking in the gaming world more dynamic and personal. We believe an exceptional gaming identity card should be as unique as your gaming journey. From customizable designs to dynamic achievement displays, our cutting-edge digital card platform ensures that representing your gaming identity is as smooth and impressive as your best gaming moments. This is not just a digital card; it's a testament to your gaming legacy and the pursuit of digital identity perfection.",
    craftingSection: "Our award-winning GT CARD design was brought to life by some of the world's youngest, finest designers and top UI/UX specialists focusing on digital identity platforms. They meticulously built components from the results of over 20,000 wireframes and 10,000 unique components, a rigorous process that spanned two years. Every element, from the subtle nuances of each card template (selected after numerous research and analysis rounds) to the precise placement of every achievement badge, was chosen for optimal usability and aesthetic appeal. This dedication to perfection is evident in the fact that our design was rigorously tested with over 10,000 gamers and digital identity enthusiasts to ensure it truly meets the demands of the global gaming community and sets new industry standards for digital gaming identity and personal branding platforms.",
    problems: [
      {
        title: "Fragmented Gaming Identity",
        description: "We eliminate the challenge of representing your complete gaming identity across different platforms, providing a unified digital gaming card solution.",
        icon: Link2
      },
      {
        title: "Inefficient Gaming Networking",
        description: "Our digital card actively combats the cumbersome process of sharing gaming profiles and achievements, enabling instant connection and recognition.",
        icon: Users
      },
      {
        title: "Limited Personal Branding Tools",
        description: "Say goodbye to generic gaming profiles. Our customizable card system allows for unique personal branding that reflects your gaming personality and achievements.",
        icon: Star
      },
      {
        title: "Lack of Professional Gaming Representation",
        description: "We solve the problem of inadequate professional gaming identity tools, providing a sophisticated digital card for serious gamers and esports professionals.",
        icon: Crown
      },
      {
        title: "Poor Achievement Showcase",
        description: "We address the difficulty in effectively displaying gaming accomplishments, providing dynamic and visually appealing achievement presentation.",
        icon: Award
      },
      {
        title: "Inconsistent Gaming Identity",
        description: "We eliminate the frustration of maintaining different gaming identities across platforms, offering a consistent, comprehensive gaming card solution.",
        icon: Shield
      }
    ],
    benefits: [
      {
        title: "Unique Gaming Identity",
        description: "Create a distinctive digital gaming card that perfectly represents your gaming journey, achievements, and personality in the gaming community.",
        icon: Star
      },
      {
        title: "Instant Gaming Networking",
        description: "Share your complete gaming profile instantly with other gamers, teams, and industry professionals through your personalized GT CARD.",
        icon: Zap
      },
      {
        title: "Professional Gaming Representation",
        description: "Present yourself professionally in the gaming industry with a sophisticated digital card that showcases your credibility and achievements.",
        icon: Crown
      },
      {
        title: "Dynamic Achievement Display",
        description: "Showcase your gaming accomplishments, milestones, and progress through an engaging and visually appealing digital card format.",
        icon: Award
      },
      {
        title: "Customizable Personal Branding",
        description: "Design your gaming card to reflect your unique style, favorite games, and personal gaming brand, making you memorable in the gaming community.",
        icon: Palette
      },
      {
        title: "Cross-Platform Recognition",
        description: "Use your GT CARD across all gaming platforms and communities, ensuring consistent recognition and identity wherever you game.",
        icon: Globe
      }
    ],
    features: [
      "Personalized Digital Gaming Card",
      "Customizable Card Designs",
      "Achievement Badge Display",
      "Gaming Stats Integration",
      "GTID Showcase",
      "Social Media Integration",
      "QR Code Generation",
      "Professional Gaming Templates",
      "Dynamic Content Updates",
      "Cross-Platform Sharing"
    ],
    subFeatures: [
      {
        title: "Digital Gaming Card",
        description: "Create personalized digital cards that showcase your gaming identity and achievements"
      },
      {
        title: "Custom Designs",
        description: "Choose from multiple design templates and customize your card to match your gaming style"
      },
      {
        title: "Achievement Badges",
        description: "Display your gaming achievements and milestones with dynamic badge systems"
      },
      {
        title: "QR Code Sharing",
        description: "Generate QR codes for instant card sharing and networking at gaming events"
      }
    ],
    future: "The mission of GT CARD is to revolutionize digital gaming identity, providing every gamer with a unique, professional, and comprehensive digital representation of their gaming journey. We aim to become the global standard for gaming identity cards, facilitating connections and recognition throughout the gaming ecosystem. Our vision is to be the most innovative digital gaming identity platform globally, recognized as the best tool for gaming personal branding and the essential card for professional gaming representation. We will be the leading digital gaming card platform in India and the premier global hub for gaming identity solutions, making every gamer's digital presence powerful and memorable. Our continuous innovation focuses on blockchain-based achievement verification, AR/VR card experiences, and AI-powered personalization, ensuring the ultimate digital gaming identity platform."
  },
  "gt-ui": {
    icon: Palette,
    title: "GT UI",
    subtitle: "World-Class Design UI/UX",
    quote: "Design that speaks gaming language. World-Class Design UI/UX. Interface Excellence Redefined. Gaming Design Perfection.",
    color: "purple",
    description: "Experience world-class interface design optimized specifically for gaming culture and esports communities. Our UI/UX sets new standards for gaming app design, combining aesthetic excellence with functional perfection.",
    aboutFeature: "Great games deserve great design, and great gamers deserve exceptional interfaces. GT UI by GAMERS TAG represents the pinnacle of gaming-focused user interface and user experience design. Every element, from color schemes to interaction patterns, has been meticulously crafted to resonate with gaming culture while delivering unparalleled usability. We believe exceptional gaming UI/UX should feel as natural as using your favorite gaming gear. From intuitive navigation flows to gaming-inspired visual elements, our cutting-edge design system ensures that every interaction feels smooth, responsive, and perfectly aligned with gaming expectations. This is not just a user interface; it's a testament to design excellence and the pursuit of gaming UX perfection.",
    craftingSection: "Our award-winning GT UI design was brought to life by some of the world's youngest, finest designers and top UI/UX specialists focusing on gaming interfaces. They meticulously built components from the results of over 20,000 wireframes and 10,000 unique components, a rigorous process that spanned two years. Every element, from the subtle nuances of each color palette (selected after numerous research and analysis rounds) to the precise placement of every interactive element, was chosen for optimal usability and aesthetic appeal. This dedication to perfection is evident in the fact that our design was rigorously tested with over 10,000 gamers and UI/UX professionals to ensure it truly meets the demands of the global gaming community and sets new industry standards for gaming app design and user experience optimization.",
    problems: [
      {
        title: "Generic App Interfaces",
        description: "We eliminate generic, non-gaming interfaces that don't resonate with gaming culture, providing designs specifically crafted for gamers by gamers.",
        icon: AlertTriangle
      },
      {
        title: "Poor Gaming User Experience",
        description: "Our specialized design actively combats frustrating user experiences in gaming apps, ensuring every interaction is smooth, intuitive, and gaming-optimized.",
        icon: Target
      },
      {
        title: "Inconsistent Design Language",
        description: "Say goodbye to inconsistent design elements across gaming platforms. Our unified design system ensures coherent, professional gaming interfaces.",
        icon: Shield
      },
      {
        title: "Non-Responsive Gaming Interfaces",
        description: "We solve the problem of gaming apps that don't work well across different devices, providing responsive, adaptive design for all gaming scenarios.",
        icon: Monitor
      },
      {
        title: "Lack of Gaming Aesthetic",
        description: "We address the absence of gaming-inspired visual elements in app design, infusing every interface with authentic gaming culture and aesthetics.",
        icon: Gamepad2
      },
      {
        title: "Accessibility Limitations",
        description: "We eliminate design barriers that prevent inclusive gaming experiences, ensuring our interfaces are accessible to all gamers regardless of abilities.",
        icon: Users
      }
    ],
    benefits: [
      {
        title: "Gaming-Optimized Interface",
        description: "Experience an interface designed specifically for gamers, with every element optimized for gaming culture, preferences, and usage patterns.",
        icon: Gamepad2
      },
      {
        title: "Intuitive User Experience",
        description: "Navigate seamlessly through features with an interface that feels as natural as your favorite game controls, enhancing productivity and enjoyment.",
        icon: Zap
      },
      {
        title: "Aesthetic Gaming Excellence",
        description: "Enjoy visually stunning interfaces that reflect gaming culture while maintaining professional standards and modern design principles.",
        icon: Star
      },
      {
        title: "Responsive Multi-Device Design",
        description: "Access consistent, optimized experiences across all devices, from mobile phones to gaming monitors, ensuring perfect functionality everywhere.",
        icon: Monitor
      },
      {
        title: "Performance-Driven Design",
        description: "Benefit from interfaces optimized for speed and efficiency, ensuring smooth performance even during intensive gaming sessions.",
        icon: TrendingUp
      },
      {
        title: "Inclusive Gaming Design",
        description: "Experience design that welcomes all gamers, with accessibility features and inclusive design principles built into every interface element.",
        icon: Users
      }
    ],
    features: [
      "Gaming-Inspired Design System",
      "Responsive Interface Architecture", 
      "Performance-Optimized Components",
      "Accessibility-First Design",
      "Gaming Culture Integration",
      "Multi-Device Compatibility",
      "Interactive Animation System",
      "Customizable Interface Themes",
      "Professional Gaming Aesthetics",
      "User Experience Analytics"
    ],
    subFeatures: [
      {
        title: "Gaming Design System",
        description: "Experience interfaces designed specifically for gaming culture with HUD-inspired elements"
      },
      {
        title: "Responsive Architecture",
        description: "Enjoy consistent experiences across all devices with adaptive interface design"
      },
      {
        title: "Performance Optimization",
        description: "Navigate through lightning-fast interfaces optimized for gaming performance standards"
      },
      {
        title: "Interactive Animations",
        description: "Engage with smooth, gaming-inspired animations that enhance user experience"
      }
    ],
    future: "The mission of GT UI is to establish the global standard for gaming interface design, creating the most intuitive, beautiful, and functional gaming app experiences worldwide. We aim to inspire the next generation of gaming interface design while making technology more accessible and enjoyable for gamers. Our vision is to be the most innovative gaming UI/UX platform globally, recognized as the best design system for gaming applications and the essential framework for gaming interface excellence. We will be the leading gaming design platform in India and the premier global hub for gaming UI/UX innovation, making every gaming interface a masterpiece of design and functionality. Our continuous innovation focuses on AI-powered personalization, voice-controlled interfaces, and immersive AR/VR design elements, ensuring the ultimate gaming interface experience."
  },
  "gt-sound": {
    icon: Volume2,
    title: "GT SOUND",
    subtitle: "Immersive Audio Experience",
    quote: "Audio that amplifies your gaming soul. Immersive Audio Experience. Sound Excellence Redefined. Gaming Audio Perfection.",
    color: "orange",
    description: "Immerse yourself in world-class audio design optimized for gaming and esports communities. Our sound system delivers exceptional audio experiences that enhance every aspect of your gaming journey.",
    aboutFeature: "Great games deserve great audio, and great gamers deserve exceptional sound experiences. GT SOUND by GAMERS TAG represents the pinnacle of gaming-focused audio design and implementation. Every sound effect, notification tone, and audio interaction has been meticulously crafted to enhance the gaming experience while providing clear, immersive audio feedback. We believe exceptional gaming audio should feel as natural as hearing your favorite game's soundtrack. From spatial audio positioning to gaming-optimized audio compression, our cutting-edge sound system ensures that every audio moment enhances your gaming experience. This is not just an audio system; it's a testament to sonic excellence and the pursuit of gaming audio perfection.",
    craftingSection: "Our award-winning GT SOUND design was brought to life by some of the world's finest audio engineers and sound designers specializing in gaming audio. They meticulously crafted audio components from thousands of sound samples and audio design principles, a rigorous process that spanned two years. Every element, from the subtle nuances of each notification sound (selected after numerous testing and analysis rounds) to the precise calibration of every audio level, was chosen for optimal clarity and immersive appeal. This dedication to perfection is evident in the fact that our audio design was rigorously tested with over 10,000 gamers and audio professionals to ensure it truly meets the demands of the global gaming community and sets new industry standards for gaming app audio and immersive sound experiences.",
    problems: [
      {
        title: "Generic Audio Experiences",
        description: "We eliminate generic, non-gaming audio that doesn't enhance the gaming experience, providing audio specifically designed for gaming culture and preferences.",
        icon: AlertTriangle
      },
      {
        title: "Poor Audio Quality",
        description: "Our high-quality audio actively combats poor sound experiences in gaming apps, ensuring every audio element is clear, immersive, and professionally produced.",
        icon: Headphones
      },
      {
        title: "Inconsistent Audio Design",
        description: "Say goodbye to inconsistent audio elements across gaming platforms. Our unified audio system ensures coherent, professional gaming soundscapes.",
        icon: Shield
      },
      {
        title: "Non-Optimized Gaming Audio",
        description: "We solve the problem of audio that doesn't work well with gaming scenarios, providing optimized sound for all gaming environments and devices.",
        icon: Target
      },
      {
        title: "Lack of Immersive Audio",
        description: "We address the absence of truly immersive audio experiences in gaming apps, creating spatial and dynamic audio that enhances engagement.",
        icon: Volume2
      },
      {
        title: "Audio Accessibility Issues",
        description: "We eliminate audio barriers that prevent inclusive gaming experiences, ensuring our sound design is accessible to all gamers regardless of hearing abilities.",
        icon: Users
      }
    ],
    benefits: [
      {
        title: "Gaming-Optimized Audio",
        description: "Experience audio designed specifically for gamers, with every sound optimized for gaming culture, preferences, and usage scenarios.",
        icon: Headphones
      },
      {
        title: "Immersive Sound Experience",
        description: "Enjoy rich, spatial audio that enhances your gaming experience with professional-quality sound design and implementation.",
        icon: Volume2
      },
      {
        title: "Crystal Clear Communication",
        description: "Benefit from optimized voice chat and communication audio that ensures clear team coordination and social interaction.",
        icon: MessageCircle
      },
      {
        title: "Multi-Device Audio Optimization",
        description: "Access consistent, high-quality audio across all devices, from mobile phones to high-end gaming headsets, ensuring perfect sound everywhere.",
        icon: Monitor
      },
      {
        title: "Performance-Driven Audio",
        description: "Experience audio optimized for performance and efficiency, ensuring smooth operation even during intensive gaming sessions.",
        icon: TrendingUp
      },
      {
        title: "Inclusive Audio Design",
        description: "Enjoy audio experiences designed for all gamers, with accessibility features and inclusive audio design principles built into every sound element.",
        icon: Users
      }
    ],
    features: [
      "Gaming-Optimized Audio Engine",
      "Spatial Audio Positioning",
      "High-Quality Sound Effects",
      "Voice Chat Optimization",
      "Multi-Device Audio Support",
      "Accessibility Audio Features",
      "Dynamic Audio Compression",
      "Gaming Ambience Systems",
      "Professional Audio Processing",
      "Real-time Audio Analytics"
    ],
    subFeatures: [
      {
        title: "Audio Engine",
        description: "Experience crystal-clear audio optimized specifically for gaming environments and interactions"
      },
      {
        title: "Spatial Audio",
        description: "Immerse yourself in 3D spatial audio that enhances gaming awareness and communication"
      },
      {
        title: "Voice Chat",
        description: "Communicate clearly with optimized voice chat systems designed for competitive gaming"
      },
      {
        title: "Multi-Device Support",
        description: "Enjoy consistent audio quality across all your gaming devices and platforms"
      }
    ],
    future: "The mission of GT SOUND is to establish the global standard for gaming audio experiences, creating the most immersive, clear, and functional gaming app audio worldwide. We aim to inspire the next generation of gaming audio design while making technology more accessible and enjoyable for all gamers. Our vision is to be the most innovative gaming audio platform globally, recognized as the best audio system for gaming applications and the essential framework for gaming audio excellence. We will be the leading gaming audio platform in India and the premier global hub for gaming audio innovation, making every gaming sound experience a masterpiece of audio engineering and design. Our continuous innovation focuses on AI-powered audio personalization, 3D spatial audio integration, and immersive haptic feedback systems, ensuring the ultimate gaming audio experience."
  }
};