export interface TeamMember {
  id: number;
  name: string;
  role: string;
  type: 'OWNER' | 'Team Member' | 'SUPPORTERS';
  linkedin?: string;
  website?: string;
  isCore?: boolean;
  slug?: string;
  fullName?: string;
  title?: string;
  bio?: string;
  education?: string[];
  expertise?: string[];
  department?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    instagram?: string;
    youtube?: string;
    facebook?: string;
    discord?: string;
    telegram?: string;
    website?: string;
  };
  testimonial?: {
    quote: string;
    author: string;
  };
  biography?: string;
  whatIDo?: string;
  image?: string;
  incubators?: string[];
}

export const teamMembers: TeamMember[] = [
  // Core Team Members
  { 
    id: 0, 
    name: "JOSHUA J KANATT", 
    fullName: "Joshua J Kanatt",
    role: "Founder & Chief Executive Officer", 
    title: "Visionary Builder of Game-Changing Tech",
    type: "OWNER", 
    linkedin: "https://www.linkedin.com/in/joshuakanatt/", 
    isCore: true,
    slug: "core/owner-001",
    bio: "Visionary Founder & CEO building game-changing technology at GAMERS TAG. Leading one of the world's most innovative gaming super platforms.",
    expertise: [
      "Product Management",
      "Strategic Leadership",
      "SaaS",
      "AI"
    ]
  },
  { 
    id: 1, 
    name: "HARSH SINGH", 
    fullName: "Harsh Singh",
    role: "Lead Flutter Developer & Core Tech Member", 
    title: "Lead Flutter Developer & Core Tech Member",
    type: "Team Member", 
    linkedin: "https://www.linkedin.com/in/harsh-singh-639316291/", 
    isCore: true,
    slug: "core/core-003",
    bio: "Leading frontend development with expertise in modern web technologies and user interface design.",
    expertise: [
      "React",
      "TypeScript", 
      "Frontend Architecture", 
      "UI/UX Implementation"
    ]
  },
  { 
    id: 2, 
    name: "PAUL DICKINSON", 
    fullName: "Paul P Dickinson",
    role: "Director of Operations & Co-Founder", 
    title: "Director of Operations & Co-Founder",
    type: "Team Member", 
    linkedin: "https://www.linkedin.com/in/paul-dickinson-038511190/", 
    isCore: true,
    slug: "core/core-004",
    bio: "Director of Operations ensuring seamless business processes and organizational efficiency.",
    expertise: [
      "Operations Management",
      "Strategic Planning",
      "Process Optimization", 
      "Business Development"
    ]
  },
  { 
    id: 3, 
    name: "ADESH KUMAR PATRA", 
    fullName: "Adesh Kumar Patra",
    role: "Director of Engineering / CTO & Co-Founder", 
    title: "Director of Engineering / CTO & Co-Founder",
    type: "Team Member", 
    isCore: true,
    slug: "core/core-002",
    bio: "Director of Engineering & Founding Member leading technical innovation and engineering excellence across all development initiatives.",
    expertise: [
      "Engineering Leadership",
      "Technical Strategy",
      "Software Architecture", 
      "Team Management"
    ],
    department: "engineering"
  },
  { 
    id: 4, 
    name: "HEMANTH V JOSEPH", 
    fullName: "Hemanth V Joseph",
    role: "Chief Security Officer & Co-Founder", 
    title: "Chief Security Officer & Co-Founder",
    type: "Team Member", 
    isCore: true,
    slug: "core/hemanth-joseph",
    bio: "Chief Security Officer ensuring comprehensive security protocols and safeguarding all digital assets and operations.",
    expertise: [
      "Cybersecurity",
      "Security Architecture",
      "Risk Management", 
      "Compliance"
    ],
    department: "security"
  },
  { 
    id: 5, 
    name: "MONISH GOUTHAM", 
    fullName: "Monish Goutham",
    role: "Lead Marketing Manager", 
    title: "Lead Marketing Manager",
    type: "Team Member", 
    linkedin: "https://www.linkedin.com/in/monish-goutham/",
    isCore: true,
    slug: "monish-goutham",
    bio: "IIM Trichy PGPM'26 | Media Relations Coordinator | Ex-Oracle Health | YouTube Content Creator (75k+) with 50M+ Views. Currently pursuing MBA at Indian Institute of Management Trichy with B.E. in Computer Science from BNMIT. Former System Engineer at Oracle Health with expertise in Windows server management and root cause analysis. Successful YouTube channel operator with strong customer engagement strategies and business acumen.",
    expertise: [
      "Digital Marketing",
      "Content Creation",
      "Media Relations", 
      "Business Strategy",
      "Customer Engagement",
      "YouTube Content",
      "System Engineering"
    ],
    department: "marketing",
    education: [
      "MBA - Indian Institute of Management Trichy (PGPM'26)",
      "B.E. Computer Science - BNMIT"
    ],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/monish-goutham/"
    }
  },

  // Business Team Members
  {
    id: 100,
    name: "DIBIN JOSE VADAKKAN",
    fullName: "Dibin Jose Vadakkan", 
    role: "Financial Analyst",
    title: "Financial Analyst",
    type: "Team Member",
    department: "business",
    bio: "Dedicated financial professional driving data-driven decisions",
    linkedin: "https://www.linkedin.com/in/dibin-jose-vadakkan",
    expertise: [
      "Financial Analysis",
      "Data Analysis",
      "Financial Modeling", 
      "Reporting"
    ]
  },
  {
    id: 101,
    name: "MARIYA JOSHY",
    fullName: "Mariya Joshy",
    role: "Financial Analyst", 
    title: "Financial Analyst",
    type: "Team Member",
    department: "business",
    bio: "Financial expert supporting strategic business decisions",
    linkedin: "https://www.linkedin.com/in/mariya-joshy-97bba4222",
    expertise: [
      "Financial Planning",
      "Analysis",
      "Budget Control",
      "Financial Reporting"
    ]
  },

  // Senior Tech Team
  { 
    id: 5, 
    name: "TINTU TOMY", 
    fullName: "Tintu Tomy",
    role: "Senior Financial Analyst & Core Team Member", 
    title: "Senior Financial Analyst",
    type: "Team Member", 
    linkedin: "https://www.linkedin.com/in/tintu-tomy-93655a24",
    department: "finance",
    bio: "Expert in financial analysis and strategic planning",
    expertise: [
      "Financial Analysis",
      "Strategic Planning", 
      "Budget Management",
      "Financial Reporting"
    ]
  },
  { 
    id: 6, 
    name: "NITHIN GEORGE", 
    fullName: "Nithin George",
    role: "Core Tech Member", 
    type: "Team Member", 
    linkedin: "https://www.linkedin.com/in/nithin-george-308a9458/",
    department: "engineering"
  },
  { 
    id: 8, 
    name: "MOHD AMBER RIZVI", 
    fullName: "Mohd Amber Rizvi",
    role: "Core Tech Member", 
    type: "Team Member", 
    linkedin: "https://www.linkedin.com/in/mohd-amber-rizvi-93a55a201",
    department: "engineering"
  },
  { 
    id: 9, 
    name: "SHIVANSH VERMA", 
    fullName: "Shivansh Verma",
    role: "Core Tech Member", 
    type: "Team Member", 
    linkedin: "https://www.linkedin.com/in/meet-shivanshverma",
    department: "engineering"
  },

  // HR Team
  { 
    id: 7, 
    name: "FATHIMA NIHMA", 
    fullName: "Fathima Nihma",
    role: "HR Manager", 
    type: "Team Member", 
    linkedin: "https://www.linkedin.com/in/fathima-nihma",
    department: "hr"
  },
  { 
    id: 13, 
    name: "HIMANI SHARMA", 
    fullName: "Himani Sharma",
    role: "HR Manager", 
    type: "Team Member", 
    linkedin: "https://www.linkedin.com/in/himanisharma062",
    department: "hr"
  },
  { 
    id: 14, 
    name: "SUHITHA SURESH", 
    fullName: "Suhitha Suresh",
    role: "HR Manager", 
    type: "Team Member", 
    linkedin: "https://www.linkedin.com/in/suhitha1722",
    department: "hr"
  },
  { 
    id: 15, 
    name: "RISHITHA JAIN", 
    fullName: "Rishitha Jain",
    role: "HR Manager", 
    type: "Team Member", 
    linkedin: "https://www.linkedin.com/in/rishita-jain-24890b30a",
    department: "hr"
  },
  { 
    id: 16, 
    name: "SUKHMANI KAUR", 
    fullName: "Sukhmani Kaur",
    role: "HR Manager", 
    type: "Team Member", 
    linkedin: "https://www.linkedin.com/in/itssukhmanikaur",
    department: "hr"
  },

  // Development Team
  { 
    id: 11, 
    name: "JAYANDRA TODAWAT", 
    fullName: "Jayandra Todawat",
    role: "Developer", 
    type: "Team Member", 
    linkedin: "https://www.linkedin.com/in/jayndra-todawat",
    department: "engineering"
  },
  { 
    id: 12, 
    name: "SAKSHI DHONI", 
    fullName: "Sakshi Dhoni",
    role: "Developer", 
    type: "Team Member", 
    linkedin: "https://www.linkedin.com/in/sakshidhoni",
    department: "engineering"
  },
  { 
    id: 19, 
    name: "ARJUN GOPI K", 
    fullName: "Arjun Gopi K",
    role: "Developer", 
    type: "Team Member", 
    linkedin: "https://www.linkedin.com/in/arjun-gopi-k-324178253",
    department: "engineering"
  },
  { 
    id: 21, 
    name: "MANISH VERMA", 
    fullName: "Manish Verma",
    role: "Developer", 
    type: "Team Member",
    department: "engineering"
  },
  { 
    id: 22, 
    name: "ANKITA SONI", 
    fullName: "Ankita Soni",
    role: "Developer", 
    type: "Team Member", 
    linkedin: "https://www.linkedin.com/in/aankita-soni",
    department: "engineering"
  },

  // Social Media Team
  { 
    id: 10, 
    name: "DITTO JOHNSON", 
    fullName: "Ditto Johnson",
    role: "Social Media Manager", 
    type: "Team Member", 
    linkedin: "https://www.linkedin.com/in/ditto-johnson-941267249",
    department: "marketing"
  },
  { 
    id: 25, 
    name: "AISWARYA MADHU", 
    fullName: "Aiswarya Madhu",
    role: "Social Media Manager", 
    type: "Team Member", 
    linkedin: "https://www.linkedin.com/in/vallathaiswarya",
    department: "marketing"
  },
  { 
    id: 26, 
    name: "GAUTAM KRISHNA K", 
    fullName: "Gautam Krishna K",
    role: "Social Media Manager", 
    type: "Team Member", 
    linkedin: "https://www.linkedin.com/in/ACoAAEQ2Et4B8sLMLpi2zVd6IxWnwojTH8EyK-s",
    department: "marketing"
  },

  // Design Team
  { 
    id: 20, 
    name: "HANIYA ABDUL RAHMAN", 
    fullName: "Haniya Abdul Rahman",
    role: "Design Team Member", 
    type: "Team Member", 
    linkedin: "https://www.linkedin.com/in/haniya-ar",
    department: "design"
  },
  { 
    id: 28, 
    name: "NITHIN DHAWANE", 
    fullName: "Nithin Dhawane",
    role: "Design Team Member", 
    type: "Team Member", 
    linkedin: "https://www.linkedin.com/in/nitin-dhawane-39b07515a",
    department: "design"
  },
  { 
    id: 29, 
    name: "KEVIN GEORGE", 
    fullName: "Kevin George",
    role: "Design Team Member", 
    type: "Team Member", 
    linkedin: "https://www.linkedin.com/in/kevin-george-58b5701a1",
    department: "design"
  },

  // Finance Team
  { 
    id: 18, 
    name: "DIBIN JOSE VADAKKAN", 
    fullName: "Dibin Jose Vadakkan",
    role: "Financial Analyst", 
    type: "Team Member", 
    linkedin: "https://www.linkedin.com/in/dibin-jose-vadakkan-69109179",
    department: "finance"
  },
  { 
    id: 32, 
    name: "MARIYA JOSHY", 
    fullName: "Mariya Joshy",
    role: "Financial Analyst", 
    type: "Team Member", 
    linkedin: "https://www.linkedin.com/in/mariya-joshy-97bba4222",
    department: "finance"
  },
  { 
    id: 33, 
    name: "ABHISHEK S NAIR", 
    fullName: "Abhishek S Nair",
    role: "Financial Analyst", 
    type: "Team Member", 
    linkedin: "https://www.linkedin.com/in/abhishek-s-nair50",
    department: "finance"
  },

  // Brand Management
  { 
    id: 17, 
    name: "SHAMIL MOHAMED", 
    fullName: "Shamil Mohamed",
    role: "Brand Manager", 
    type: "Team Member", 
    linkedin: "https://www.linkedin.com/in/muhammed-shamil-thottungal",
    department: "marketing"
  },
  { 
    id: 41, 
    name: "PHILIP GEORGE", 
    fullName: "Philip George",
    role: "Brand Manager", 
    type: "Team Member", 
    linkedin: "https://www.linkedin.com/in/philip-george-408786216",
    department: "marketing"
  },

  // Quality Assurance
  { 
    id: 23, 
    name: "JILHA JOSE", 
    fullName: "Jilha Jose",
    role: "App Tester", 
    type: "Team Member", 
    linkedin: "https://www.linkedin.com/in/jilha-jos/",
    department: "qa"
  },
  { 
    id: 24, 
    name: "ARDRA SHASHIDHARAN", 
    fullName: "Ardra Shashidharan",
    role: "App Tester", 
    type: "Team Member", 
    linkedin: "https://www.linkedin.com/in/ardra-sasidharan-05a861211",
    department: "qa"
  },

  // Esports Team
  { 
    id: 30, 
    name: "JEETHU SINGH", 
    fullName: "Jeethu Singh",
    role: "Esports Manager", 
    type: "Team Member", 
    linkedin: "https://www.linkedin.com/in/jeetu-singh-574665292",
    department: "esports"
  },
  { 
    id: 31, 
    name: "INDRAJITH AJITH", 
    fullName: "Indrajith Ajith",
    role: "Esports Manager", 
    type: "Team Member",
    department: "esports"
  }
];

// Export core team members for easy access
export const coreTeamMembers = teamMembers.filter(member => member.isCore === true);

// Export business team members
export const businessTeamMembers = teamMembers.filter(member => 
  member.department === 'business' || member.department === 'finance'
);

// Export team members by department
export const getTeamMembersByDepartment = () => {
  const departmentMembers = teamMembers.filter(member => member.department && !member.isCore);
  return departmentMembers.reduce((acc, member) => {
    const dept = member.department!;
    if (!acc[dept]) {
      acc[dept] = [];
    }
    acc[dept].push(member);
    return acc;
  }, {} as Record<string, typeof teamMembers>);
};