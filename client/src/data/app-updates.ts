export interface AppUpdate {
  id: string;
  version: string;
  name: string;
  image: string;
  description: string;
  releasedOn: string;
  featured?: boolean;
  updateLevel?: string;
  platform: string;
  category: string;
  whatsNew: string[];
  technicalDetails?: {
    size: string;
    compatibility: string;
    languages: string[];
  };
}

export const appUpdates: AppUpdate[] = [
  {
    id: "v2-5-0",
    version: "v2.5.0",
    name: "Revolutionary Gaming Experience",
    image: "/api/placeholder/800/450",
    description: "Introducing groundbreaking features that transform how you connect with the gaming community. Enhanced performance, new social features, and improved user interface designed specifically for the modern gamer.",
    releasedOn: "2024-12-15",
    featured: true,
    updateLevel: "Huge",
    platform: "Play Store",
    category: "Major Release",
    whatsNew: [
      "Complete UI/UX redesign with gaming-focused interface",
      "New real-time chat system with enhanced gaming integrations",
      "Advanced profile customization for professional gamers",
      "Improved performance with 50% faster loading times",
      "New gaming achievement tracking system"
    ],
    technicalDetails: {
      size: "45 MB",
      compatibility: "Android 7.0+, iOS 13.0+",
      languages: ["English", "Spanish", "French", "German", "Japanese", "Korean", "Chinese"]
    }
  },
  {
    id: "v2-4-8",
    version: "v2.4.8",
    name: "Performance Boost & Bug Fixes",
    image: "/api/placeholder/800/450",
    description: "Critical performance improvements and bug fixes to enhance your gaming experience. Optimized for better stability and faster response times.",
    releasedOn: "2024-11-28",
    featured: false,
    updateLevel: "Light",
    platform: "Play Store",
    category: "Bug Fix",
    whatsNew: [
      "Fixed crash issues on older devices",
      "Improved memory usage by 30%",
      "Enhanced notification system reliability",
      "Fixed social sharing functionality",
      "Improved offline mode capabilities"
    ]
  },
  {
    id: "v2-4-5",
    version: "v2.4.5",
    name: "Gaming Tournament Integration",
    image: "/api/placeholder/800/450",
    description: "New tournament features and esports integration. Connect with tournaments, track your performance, and compete with gamers worldwide.",
    releasedOn: "2024-11-10",
    featured: true,
    updateLevel: "Medium",
    platform: "Play Store",
    category: "Feature Update",
    whatsNew: [
      "Tournament discovery and registration",
      "Live tournament bracket tracking",
      "Enhanced team formation tools",
      "New achievement badges for tournaments",
      "Integrated streaming capabilities"
    ]
  },
  {
    id: "v2-3-0",
    version: "v2.3.0",
    name: "Gaming Analytics Dashboard",
    image: "/api/placeholder/800/450",
    description: "Comprehensive analytics dashboard for tracking your gaming performance, achievements, and progress across multiple games.",
    releasedOn: "2024-09-18",
    featured: false,
    updateLevel: "Medium",
    platform: "App Store",
    category: "Feature Update",
    whatsNew: [
      "Personal gaming analytics dashboard",
      "Performance tracking across games",
      "Achievement progression visualization",
      "Gaming time management tools",
      "Comparative performance insights"
    ]
  },
  {
    id: "v2-2-1",
    version: "v2.2.1",
    name: "Security & Privacy Enhancements",
    image: "/api/placeholder/800/450",
    description: "Important security updates and privacy improvements to keep your gaming data safe and secure.",
    releasedOn: "2024-08-05",
    featured: false,
    updateLevel: "Light",
    platform: "Both Stores",
    category: "Security Update",
    whatsNew: [
      "Enhanced data encryption protocols",
      "Improved privacy controls",
      "Two-factor authentication support",
      "Secure payment processing updates",
      "GDPR compliance improvements"
    ]
  }
];

export const getAppUpdateById = (id: string): AppUpdate | undefined => {
  return appUpdates.find(update => update.id === id);
};

export const getFeaturedUpdates = (): AppUpdate[] => {
  return appUpdates.filter(update => update.featured);
};

export const getUpdatesByCategory = (category: string): AppUpdate[] => {
  return appUpdates.filter(update => update.category === category);
};