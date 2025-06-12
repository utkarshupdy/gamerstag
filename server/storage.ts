import { users, type User, type InsertUser, type Testimonial, type InsertTestimonial, type FeatureGallery, type InsertFeatureGallery, type News, type InsertNews } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  getTestimonials(): Promise<Testimonial[]>;
  getTestimonialsByFeature(feature: string): Promise<Testimonial[]>;
  createFeatureGallery(gallery: InsertFeatureGallery): Promise<FeatureGallery>;
  getFeatureGallery(featureKey: string): Promise<FeatureGallery[]>;
  createNews(news: InsertNews): Promise<News>;
  getNews(): Promise<News[]>;
  getNewsBySlug(slug: string): Promise<News | undefined>;
  getNewsByCategory(category: string): Promise<News[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private testimonials: Map<number, Testimonial>;
  private featureGallery: Map<number, FeatureGallery>;
  private news: Map<number, News>;
  currentUserId: number;
  currentTestimonialId: number;
  currentGalleryId: number;
  currentNewsId: number;

  constructor() {
    this.users = new Map();
    this.testimonials = new Map();
    this.featureGallery = new Map();
    this.news = new Map();
    this.currentUserId = 1;
    this.currentTestimonialId = 1;
    this.currentGalleryId = 1;
    this.currentNewsId = 1;
    
    // Add sample data
    this.addSampleTestimonials();
    this.addSampleGalleryItems();
    this.addSampleNews();
  }

  private addSampleTestimonials() {
    const sampleTestimonials = [
      {
        name: "Alex Chen",
        gtId: "GT_ALEX_2024",
        email: "alex.chen@example.com",
        comment: "The Pro Gaming Profile feature completely transformed how I present myself to esports teams. I got recruited within 2 weeks!",
        rating: 5,
        features: ["pro-gaming-profile"],
        selectedFeature: "pro-gaming-profile"
      },
      {
        name: "Sarah Williams",
        gtId: "GT_SARAH_PRO",
        email: "sarah.w@example.com",
        comment: "GT Card made networking at gaming events so much easier. Just scan and connect!",
        rating: 5,
        features: ["gt-card"],
        selectedFeature: "gt-card"
      },
      {
        name: "Marcus Rodriguez",
        gtId: "GT_MARCUS_ELITE",
        email: "marcus.r@example.com",
        comment: "Amazing profile system. Finally, a platform that understands what gamers need for career growth.",
        rating: 4,
        features: ["pro-gaming-profile"],
        selectedFeature: "pro-gaming-profile"
      },
      {
        name: "Emma Thompson",
        gtId: "GT_EMMA_STREAM",
        email: "emma.t@example.com",
        comment: "The digital gaming card is sleek and professional. Perfect for content creators!",
        rating: 5,
        features: ["gt-card"],
        selectedFeature: "gt-card"
      },
      {
        name: "David Park",
        gtId: "GT_DAVID_COMP",
        email: "david.p@example.com",
        comment: "Best gaming portfolio platform I've used. Clean interface and great features.",
        rating: 4,
        features: ["pro-gaming-profile"],
        selectedFeature: "pro-gaming-profile"
      },
      {
        name: "Jessica Miller",
        gtId: "GT_JESS_APEX",
        email: "jessica.m@example.com",
        comment: "Finally got noticed by Team Liquid thanks to my professional profile. The achievement showcase is incredible!",
        rating: 5,
        features: ["pro-gaming-profile"],
        selectedFeature: "pro-gaming-profile"
      },
      {
        name: "Tyler Brooks",
        gtId: "GT_TYLER_FPS",
        email: "tyler.b@example.com",
        comment: "The career analytics dashboard showed me exactly where to improve. Went from amateur to semi-pro in 6 months.",
        rating: 5,
        features: ["pro-gaming-profile"],
        selectedFeature: "pro-gaming-profile"
      },
      {
        name: "Maria Santos",
        gtId: "GT_MARIA_MOBA",
        email: "maria.s@example.com",
        comment: "The unified presence feature is game-changing. All my gaming achievements in one professional profile.",
        rating: 4,
        features: ["pro-gaming-profile"],
        selectedFeature: "pro-gaming-profile"
      },
      {
        name: "Kevin Wu",
        gtId: "GT_KEVIN_STRAT",
        email: "kevin.w@example.com",
        comment: "GT Card networking at tournaments is seamless. Made connections that led to my first sponsorship deal.",
        rating: 5,
        features: ["gt-card"],
        selectedFeature: "gt-card"
      },
      {
        name: "Ashley Johnson",
        gtId: "GT_ASH_CONTENT",
        email: "ashley.j@example.com",
        comment: "Perfect for content creators. The personalized branding options match my streaming aesthetic perfectly.",
        rating: 5,
        features: ["gt-card"],
        selectedFeature: "gt-card"
      }
    ];

    sampleTestimonials.forEach(testimonial => {
      const id = this.currentTestimonialId++;
      this.testimonials.set(id, {
        id,
        ...testimonial,
        createdAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000)
      });
    });
  }

  private addSampleGalleryItems() {
    const sampleGalleryItems = [
      {
        featureKey: "pro-gaming-profile",
        title: "Elite Profile Showcase",
        type: "image",
        url: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800",
        description: "Professional esports player profile highlighting achievements and career statistics",
        platform: "instagram"
      },
      {
        featureKey: "pro-gaming-profile",
        title: "Profile Creation Walkthrough",
        type: "video",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        description: "Complete guide to building your professional gaming profile from scratch",
        platform: "youtube"
      },
      {
        featureKey: "pro-gaming-profile",
        title: "Achievement Analytics Dashboard",
        type: "image",
        url: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800",
        description: "Advanced analytics showing career progression and performance metrics",
        platform: "twitter"
      },
      {
        featureKey: "pro-gaming-profile",
        title: "Team Recruitment Success Story",
        type: "video",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        description: "How professional profiles led to successful team acquisitions",
        platform: "youtube"
      },
      {
        featureKey: "pro-gaming-profile",
        title: "Cross-Platform Integration Demo",
        type: "image",
        url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
        description: "Seamless integration across all major gaming platforms and social networks",
        platform: "instagram"
      },
      {
        featureKey: "gt-card",
        title: "Digital Card Gallery",
        type: "image",
        url: "https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?w=800",
        description: "Collection of custom GT Card designs for different gaming genres",
        platform: "twitter"
      },
      {
        featureKey: "gt-card",
        title: "Event Networking Demo",
        type: "video",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        description: "Real-world usage of GT Cards at major gaming conventions and tournaments",
        platform: "instagram"
      },
      {
        featureKey: "gt-card",
        title: "QR Code Sharing Feature",
        type: "image",
        url: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=800",
        description: "Instant connection through QR code scanning and digital card exchange",
        platform: "instagram"
      },
      {
        featureKey: "gt-card",
        title: "Custom Card Templates",
        type: "image",
        url: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800",
        description: "Various GT Card templates for different gaming genres and styles",
        platform: "twitter"
      },
      {
        featureKey: "pro-gaming-profile",
        title: "Esports Team Showcase",
        type: "image",
        url: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=800",
        description: "Professional gaming teams showcasing their player profiles",
        platform: "twitter"
      },
      {
        featureKey: "pro-gaming-profile",
        title: "Achievement Highlight Reel",
        type: "video",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        description: "Compilation of major gaming achievements and milestones tracked through profiles",
        platform: "youtube"
      },
      {
        featureKey: "gt-card",
        title: "Tournament Networking",
        type: "video",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        description: "GT Cards being used for networking at major gaming tournaments and conventions",
        platform: "instagram"
      }
    ];

    sampleGalleryItems.forEach(item => {
      const id = this.currentGalleryId++;
      this.featureGallery.set(id, {
        id,
        ...item,
        createdAt: new Date(Date.now() - Math.random() * 60 * 24 * 60 * 60 * 1000)
      });
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.currentTestimonialId++;
    const testimonial: Testimonial = { 
      id,
      name: insertTestimonial.name,
      gtId: insertTestimonial.gtId || null,
      email: insertTestimonial.email,
      comment: insertTestimonial.comment,
      rating: insertTestimonial.rating,
      features: insertTestimonial.features,
      selectedFeature: insertTestimonial.selectedFeature || null,
      createdAt: new Date() 
    };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values()).sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async getTestimonialsByFeature(feature: string): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values())
      .filter(testimonial => testimonial.selectedFeature === feature)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  async createFeatureGallery(insertGallery: InsertFeatureGallery): Promise<FeatureGallery> {
    const id = this.currentGalleryId++;
    const gallery: FeatureGallery = {
      id,
      featureKey: insertGallery.featureKey,
      title: insertGallery.title,
      type: insertGallery.type,
      url: insertGallery.url,
      description: insertGallery.description || null,
      platform: insertGallery.platform || null,
      createdAt: new Date()
    };
    this.featureGallery.set(id, gallery);
    return gallery;
  }

  async getFeatureGallery(featureKey: string): Promise<FeatureGallery[]> {
    return Array.from(this.featureGallery.values())
      .filter(item => item.featureKey === featureKey)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }



  private addSampleNews() {
    const sampleNews = [
      {
        title: "Revolutionary Gaming Platform Launches with AI-Powered Features",
        slug: "revolutionary-gaming-platform-launches-ai-features",
        featuredImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800",
        shortDescription: "A new gaming ecosystem emerges with cutting-edge AI technology that transforms how gamers connect, compete, and create content across multiple platforms.",
        content: `<p>The gaming industry witnesses a groundbreaking launch as GAMERS TAG introduces its revolutionary platform that seamlessly integrates artificial intelligence with gaming experiences. This comprehensive ecosystem promises to transform how millions of gamers worldwide interact, compete, and build their digital presence.</p>

<p>The platform features advanced AI-powered matchmaking that analyzes player behavior, skill levels, and preferences to create optimal gaming experiences. Early beta testing shows a 85% improvement in player satisfaction compared to traditional matchmaking systems.</p>

<p>Key features include:</p>
<ul>
<li>AI-Enhanced Gaming Profiles with dynamic skill assessment</li>
<li>Cross-platform tournament organization and management</li>
<li>Real-time performance analytics and improvement suggestions</li>
<li>Integrated streaming and content creation tools</li>
<li>Advanced anti-cheat detection powered by machine learning</li>
</ul>

<p>"This represents the future of gaming - where technology enhances human potential rather than replacing it," said the development team lead. The platform officially launches worldwide next month with support for over 50 popular games.</p>`,
        category: "gaming",
        tags: ["AI", "Gaming Platform", "Technology", "Launch"],
        sourceName: "Gaming Tech Weekly",
        sourceUrl: "https://gamingtechweekly.com",
        sourceLogo: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=64",
        author: "Sarah Martinez",
        publishedAt: new Date("2024-12-08T10:00:00Z"),
        featured: true,
        readTime: 5,
        metaDescription: "Revolutionary gaming platform with AI-powered features launches, transforming how gamers connect and compete.",
        metaKeywords: ["gaming", "AI", "platform", "technology"]
      },
      {
        title: "Esports Championship Prize Pool Reaches Record $50 Million",
        slug: "esports-championship-prize-pool-record-50-million",
        featuredImage: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=800",
        shortDescription: "The upcoming Global Gaming Championship announces the largest prize pool in esports history, attracting teams from over 80 countries.",
        content: `<p>The esports industry reaches a new milestone as the Global Gaming Championship announces an unprecedented $50 million prize pool, marking the largest financial commitment in competitive gaming history.</p>

<p>This year's championship will feature teams from 80+ countries competing across multiple game titles including popular MOBAs, FPS games, and battle royales. The tournament structure spans six months with regional qualifiers leading to the grand finale.</p>

<p>Prize distribution includes:</p>
<ul>
<li>$15 million for the grand champion team</li>
<li>$8 million for runner-up</li>
<li>$5 million distributed among top 8 teams</li>
<li>$22 million for regional tournaments and development programs</li>
</ul>

<p>The championship also introduces new viewer engagement features, including interactive voting systems and real-time statistical analysis powered by advanced algorithms.</p>`,
        category: "esports",
        tags: ["Esports", "Championship", "Prize Pool", "Competition"],
        sourceName: "Esports Central",
        sourceUrl: "https://esportscentral.com",
        sourceLogo: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=64",
        author: "Michael Chen",
        publishedAt: new Date("2024-12-07T14:30:00Z"),
        featured: true,
        readTime: 4,
        metaDescription: "Global Gaming Championship announces record $50 million prize pool for esports competition.",
        metaKeywords: ["esports", "championship", "prize pool", "competition"]
      },
      {
        title: "New Gaming Hardware Standards Promise 8K Gaming at 120FPS",
        slug: "new-gaming-hardware-standards-8k-120fps",
        featuredImage: "https://images.unsplash.com/photo-1593640495253-23196b27a87f?w=800",
        shortDescription: "Industry leaders collaborate on new hardware standards that will enable 8K resolution gaming at 120 frames per second across all major platforms.",
        content: `<p>Major hardware manufacturers announce groundbreaking standards for next-generation gaming equipment, promising 8K resolution at 120 frames per second performance across all gaming platforms.</p>

<p>The collaborative effort involves leading companies working together to establish unified specifications that will drive innovation while maintaining affordability for mainstream consumers.</p>

<p>Technical specifications include:</p>
<ul>
<li>Advanced GPU architectures with 50% performance improvements</li>
<li>New memory standards supporting ultra-high bandwidth</li>
<li>Enhanced cooling solutions for sustained performance</li>
<li>Standardized ports and connectivity protocols</li>
</ul>

<p>Industry analysts predict these standards will accelerate adoption of high-resolution gaming and support the growing virtual reality and augmented reality gaming markets.</p>`,
        category: "technology",
        tags: ["Hardware", "8K Gaming", "Standards", "Technology"],
        sourceName: "Tech Gaming News",
        sourceUrl: "https://techgamingnews.com",
        sourceLogo: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=64",
        author: "Jennifer Park",
        publishedAt: new Date("2024-12-06T09:15:00Z"),
        featured: false,
        readTime: 6,
        metaDescription: "New gaming hardware standards enable 8K resolution at 120FPS across platforms.",
        metaKeywords: ["gaming hardware", "8K", "120FPS", "standards"]
      },
      {
        title: "Gaming Community Initiative Raises $2M for Digital Literacy",
        slug: "gaming-community-initiative-raises-2m-digital-literacy",
        featuredImage: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800",
        shortDescription: "Global gaming community unites to support digital literacy programs in underserved regions, demonstrating the positive social impact of gaming culture.",
        content: `<p>The gaming community demonstrates its commitment to positive social change by raising over $2 million for digital literacy programs targeting underserved communities worldwide.</p>

<p>This grassroots initiative emerged from gaming streamers, professional players, and community organizers who recognized the potential to leverage gaming's popularity for educational advancement.</p>

<p>Program highlights:</p>
<ul>
<li>Computer labs in 50 community centers across 15 countries</li>
<li>Gaming-based coding and digital skills workshops</li>
<li>Mentorship programs connecting gamers with students</li>
<li>Scholarship funds for technology education</li>
</ul>

<p>The initiative showcases how gaming communities can drive meaningful social impact while fostering the next generation of digital creators and technology professionals.</p>`,
        category: "community",
        tags: ["Community", "Digital Literacy", "Social Impact", "Education"],
        sourceName: "Gaming for Good",
        sourceUrl: "https://gamingforgood.org",
        sourceLogo: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=64",
        author: "Alex Rodriguez",
        publishedAt: new Date("2024-12-05T16:45:00Z"),
        featured: false,
        readTime: 3,
        metaDescription: "Gaming community raises $2M for digital literacy programs in underserved regions.",
        metaKeywords: ["gaming community", "digital literacy", "social impact", "education"]
      }
    ];

    sampleNews.forEach(newsItem => {
      const id = this.currentNewsId++;
      const news: News = {
        id,
        title: newsItem.title,
        slug: newsItem.slug,
        featuredImage: newsItem.featuredImage,
        shortDescription: newsItem.shortDescription,
        content: newsItem.content,
        category: newsItem.category,
        tags: newsItem.tags,
        sourceName: newsItem.sourceName,
        sourceUrl: newsItem.sourceUrl,
        sourceLogo: newsItem.sourceLogo || null,
        author: newsItem.author || null,
        publishedAt: newsItem.publishedAt,
        featured: newsItem.featured ?? null,
        readTime: newsItem.readTime || null,
        metaDescription: newsItem.metaDescription || null,
        metaKeywords: newsItem.metaKeywords || null,
        createdAt: new Date()
      };
      this.news.set(id, news);
    });
  }

  async createNews(insertNews: InsertNews): Promise<News> {
    const id = this.currentNewsId++;
    const news: News = {
      id,
      title: insertNews.title,
      slug: insertNews.slug,
      featuredImage: insertNews.featuredImage,
      shortDescription: insertNews.shortDescription,
      content: insertNews.content,
      category: insertNews.category,
      tags: insertNews.tags || [],
      sourceName: insertNews.sourceName,
      sourceUrl: insertNews.sourceUrl,
      sourceLogo: insertNews.sourceLogo || null,
      author: insertNews.author || null,
      publishedAt: insertNews.publishedAt || new Date(),
      featured: insertNews.featured ?? null,
      readTime: insertNews.readTime || null,
      metaDescription: insertNews.metaDescription || null,
      metaKeywords: insertNews.metaKeywords || null,
      createdAt: new Date()
    };
    this.news.set(id, news);
    return news;
  }

  async getNews(): Promise<News[]> {
    return Array.from(this.news.values())
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  }

  async getNewsBySlug(slug: string): Promise<News | undefined> {
    return Array.from(this.news.values()).find(news => news.slug === slug);
  }

  async getNewsByCategory(category: string): Promise<News[]> {
    return Array.from(this.news.values())
      .filter(news => news.category === category)
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
      .slice(0, 5);
  }
}

export const storage = new MemStorage();
