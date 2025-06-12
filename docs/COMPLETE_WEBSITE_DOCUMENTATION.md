# GAMERS TAG - Complete Website Documentation

## Table of Contents

1. [Project Overview](#project-overview)
2. [Architecture & Technology Stack](#architecture--technology-stack)
3. [Frontend Implementation](#frontend-implementation)
4. [Backend Systems](#backend-systems)
5. [Content Management](#content-management)
6. [Performance Optimization](#performance-optimization)
7. [SEO Implementation](#seo-implementation)
8. [Brand Management System](#brand-management-system)
9. [Real-time Features](#real-time-features)
10. [File Structure](#file-structure)
11. [API Integration](#api-integration)
12. [User Experience Features](#user-experience-features)
13. [Security Implementation](#security-implementation)
14. [Deployment & Hosting](#deployment--hosting)
15. [Maintenance & Updates](#maintenance--updates)

---

## Project Overview

GAMERS TAG is a cutting-edge gaming industry networking platform that connects professionals through innovative digital mentorship and career development tools. The website serves as the primary digital presence for the GAMERS TAG super app ecosystem.

### Key Features
- **Dynamic Company Wall**: Rotating announcements with HUD-style design
- **Team Showcase**: Interactive team member profiles with gaming aesthetics
- **News & Updates**: Real-time content management through Sanity CMS
- **Gallery System**: Dynamic image showcase with optimization
- **Testimonial System**: Rotating user testimonials with social proof
- **Real-time Notifications**: HUD-style popup notifications for new users
- **Advanced SEO**: Comprehensive optimization for gaming industry keywords
- **Brand Management**: Global control over fonts, colors, and logos
- **Performance Optimization**: Sub-2-second load times with Core Web Vitals optimization

### Target Audience
- Gaming industry professionals
- Esports athletes and teams
- Game developers and designers
- Gaming content creators
- Investors and stakeholders in gaming

---

## Architecture & Technology Stack

### Frontend Technologies
```typescript
// Core Framework
- React 18.x with TypeScript
- Vite for build optimization
- Wouter for client-side routing
- Tailwind CSS for styling
- Framer Motion for animations

// UI Components
- Radix UI for accessible components
- Shadcn/ui component library
- Lucide React for icons
- React Icons for brand logos

// State Management
- TanStack Query for server state
- React Hook Form for form management
- Zustand for client state (optional)

// Performance
- React.lazy for code splitting
- Intersection Observer for lazy loading
- Web Vitals monitoring
- Font optimization with preloading
```

### Backend Technologies
```typescript
// Server Runtime
- Node.js 20.x with TypeScript
- Express.js for API framework
- WebSocket (ws) for real-time features

// Database & ORM
- PostgreSQL 15+ for primary database
- Drizzle ORM for type-safe queries
- Redis for caching (optional)

// Authentication & Security
- bcryptjs for password hashing
- express-session for session management
- Helmet for security headers
- Rate limiting with express-rate-limit

// External Services
- Sanity CMS for content management
- AWS S3 for file storage
- SMTP for email notifications
```

### Development Tools
```json
{
  "linting": "ESLint with TypeScript rules",
  "formatting": "Prettier with consistent configuration",
  "testing": "Jest with React Testing Library",
  "bundling": "Vite with optimal configuration",
  "deployment": "Docker with multi-stage builds",
  "monitoring": "Custom performance tracking"
}
```

---

## Frontend Implementation

### Component Architecture

#### Page Components (`client/src/pages/`)
```typescript
// Home Page (/) - Main landing page
- Company Wall carousel
- Hero section with brand messaging
- Feature highlights
- Call-to-action sections

// Team Page (/team) - Team member showcase
- Interactive team grid
- Individual member profiles
- Role-based filtering
- Social media integration

// News Page (/news) - Latest updates
- Article grid with pagination
- Category filtering
- Search functionality
- Featured article highlighting

// About Page (/about) - Company information
- Mission and vision
- Company history
- Achievements and milestones
- Incubator information

// Gallery Page (/gallery) - Visual showcase
- Masonry layout for images
- Lightbox viewing
- Category organization
- Lazy loading optimization
```

#### Shared Components (`client/src/components/`)
```typescript
// Navigation System
Navigation.tsx - Main navigation bar with dropdowns
AnimatedSidebar.tsx - Mobile navigation sidebar
BreadcrumbNavigation.tsx - Page hierarchy navigation

// UI Components
GamingButton.tsx - HUD-style buttons with animations
LoadingSpinner.tsx - Gaming-themed loading states
ErrorBoundary.tsx - Error handling with fallbacks
Modal.tsx - Accessible modal dialogs

// Content Components
CompanyWall.tsx - Homepage carousel slider
TeamMemberCard.tsx - Individual team member display
NewsCard.tsx - Article preview cards
TestimonialCard.tsx - User testimonial display
GalleryGrid.tsx - Image gallery with masonry layout

// Performance Components
CLSOptimizer.tsx - Cumulative Layout Shift prevention
OptimizedImage.tsx - Lazy loading with placeholder
FontOptimizer.tsx - Font loading optimization
ResourcePreloader.tsx - Critical resource preloading
```

### Styling System

#### Tailwind Configuration (`tailwind.config.ts`)
```typescript
export default {
  darkMode: ["class"],
  content: ["./client/src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E5042F", // GAMERS TAG red
        secondary: "#1a1a1a", // Dark backgrounds
        accent: "#ffffff", // White text/elements
      },
      fontFamily: {
        primary: ["Orbitron", "monospace"], // Headers
        secondary: ["Space Grotesk", "sans-serif"], // Navigation
        description: ["Jost", "sans-serif"], // Body text
        button: ["Jost", "sans-serif"], // Buttons
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "pulse-red": "pulseRed 2s infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
  ],
}
```

#### Global Styles (`client/src/index.css`)
```css
/* Font Management System */
:root {
  --font-primary: 'Orbitron', monospace;
  --font-secondary: 'Space Grotesk', sans-serif;
  --font-description: 'Jost', sans-serif;
  --font-button: 'Jost', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}

/* Gaming UI Elements */
.hud-border {
  position: relative;
  border: 2px solid var(--brand-primary);
  clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
}

.hud-corner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 12px;
  height: 12px;
  border-top: 2px solid var(--brand-primary);
  border-left: 2px solid var(--brand-primary);
}

/* Performance Optimizations */
.font-primary { font-family: var(--font-primary); }
.font-secondary { font-family: var(--font-secondary); }
.font-description { font-family: var(--font-description); }
.font-button { font-family: var(--font-button); }

/* Smooth Animations */
* {
  transition: color 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;
}

/* Layout Optimization */
.container-optimization {
  min-height: 100vh;
  contain: layout style paint;
}
```

### State Management

#### API Integration (`client/src/lib/queryClient.ts`)
```typescript
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
      retry: (failureCount, error) => {
        if (error?.status === 404) return false;
        return failureCount < 3;
      },
    },
    mutations: {
      onError: (error) => {
        console.error('Mutation error:', error);
      },
    },
  },
});

// API request helper with automatic error handling
export async function apiRequest<T>(
  url: string,
  options: RequestInit = {}
): Promise<T> {
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}
```

#### Custom Hooks (`client/src/hooks/`)
```typescript
// Data Fetching Hooks
useTeamMembers.ts - Fetch and manage team data
useNews.ts - Handle news articles and pagination
useGallery.ts - Manage gallery images with lazy loading
useTestimonials.ts - Rotating testimonials management
useSearch.ts - Global search functionality

// UI State Hooks
useTheme.ts - Dark/light theme management
useNavigation.ts - Navigation state and mobile menu
useNotifications.ts - Real-time notification system
useBrandSettings.ts - Global brand configuration

// Performance Hooks
useIntersectionObserver.ts - Lazy loading implementation
useWebVitals.ts - Performance monitoring
usePreloadImages.ts - Image preloading optimization
```

---

## Backend Systems

### API Architecture

#### Express Server Setup (`server/index.ts`)
```typescript
import express from 'express';
import session from 'express-session';
import { setupRoutes } from './routes';
import { errorHandler } from './middleware/errorHandler';
import { corsMiddleware } from './middleware/cors';

const app = express();
const PORT = process.env.PORT || 5000;

// Security and performance middleware
app.use(helmet());
app.use(compression());
app.use(corsMiddleware);
app.use(express.json({ limit: '10mb' }));

// Session management
app.use(session({
  secret: process.env.SESSION_SECRET!,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  },
}));

// API routes
setupRoutes(app);

// Error handling
app.use(errorHandler);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
```

#### Database Schema (`shared/schema.ts`)
```typescript
import { pgTable, text, timestamp, integer, boolean, jsonb } from 'drizzle-orm/pg-core';

// Core tables for GAMERS TAG platform
export const users = pgTable('users', {
  id: text('id').primaryKey(),
  email: text('email').notNull().unique(),
  username: text('username').notNull().unique(),
  passwordHash: text('password_hash').notNull(),
  firstName: text('first_name'),
  lastName: text('last_name'),
  avatar: text('avatar_url'),
  bio: text('bio'),
  role: text('role').default('user'),
  isVerified: boolean('is_verified').default(false),
  isActive: boolean('is_active').default(true),
  preferences: jsonb('preferences').default({}),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const teams = pgTable('teams', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  slug: text('slug').notNull().unique(),
  description: text('description'),
  logo: text('logo_url'),
  position: text('position'),
  department: text('department'),
  linkedIn: text('linkedin_url'),
  github: text('github_url'),
  isActive: boolean('is_active').default(true),
  priority: integer('priority').default(0),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const news = pgTable('news', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  slug: text('slug').notNull().unique(),
  content: text('content'),
  excerpt: text('excerpt'),
  featuredImage: text('featured_image'),
  category: text('category'),
  tags: jsonb('tags').default([]),
  authorId: text('author_id').references(() => users.id),
  publishedAt: timestamp('published_at'),
  viewCount: integer('view_count').default(0),
  isPublished: boolean('is_published').default(false),
  isFeatured: boolean('is_featured').default(false),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const gallery = pgTable('gallery', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description'),
  imageUrl: text('image_url').notNull(),
  thumbnailUrl: text('thumbnail_url'),
  category: text('category'),
  tags: jsonb('tags').default([]),
  uploadedBy: text('uploaded_by').references(() => users.id),
  isPublic: boolean('is_public').default(true),
  viewCount: integer('view_count').default(0),
  createdAt: timestamp('created_at').defaultNow(),
});

export const testimonials = pgTable('testimonials', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  gtId: text('gt_id').notNull(),
  avatar: text('avatar_url'),
  content: text('content').notNull(),
  rating: integer('rating').default(5),
  position: text('position'),
  company: text('company'),
  isApproved: boolean('is_approved').default(false),
  isFeatured: boolean('is_featured').default(false),
  createdAt: timestamp('created_at').defaultNow(),
});
```

### API Endpoints

#### Core API Routes (`server/routes/`)
```typescript
// GET /api/teams - Fetch all team members
// GET /api/teams/:id - Get specific team member
// POST /api/teams - Create new team member (admin)
// PUT /api/teams/:id - Update team member (admin)
// DELETE /api/teams/:id - Remove team member (admin)

// GET /api/news - Fetch news articles with pagination
// GET /api/news/:slug - Get specific article
// POST /api/news - Create new article (admin)
// PUT /api/news/:id - Update article (admin)
// DELETE /api/news/:id - Delete article (admin)

// GET /api/gallery - Fetch gallery images
// GET /api/gallery/:id - Get specific image
// POST /api/gallery - Upload new image (admin)
// DELETE /api/gallery/:id - Remove image (admin)

// GET /api/testimonials - Fetch testimonials
// POST /api/testimonials - Submit new testimonial
// PUT /api/testimonials/:id - Update testimonial (admin)
// DELETE /api/testimonials/:id - Remove testimonial (admin)

// GET /api/search?q=query - Global search across content
// GET /api/health - Health check endpoint
// GET /api/sitemap.xml - Dynamic sitemap generation
```

---

## Content Management

### Sanity CMS Integration

#### Content Types
```typescript
// Brand Settings Schema
export const brandSettings = defineType({
  name: 'brandSettings',
  title: 'Brand Settings',
  type: 'document',
  fields: [
    {
      name: 'colors',
      title: 'Brand Colors',
      type: 'object',
      fields: [
        { name: 'primary', title: 'Primary Color', type: 'string' },
        { name: 'secondary', title: 'Secondary Color', type: 'string' },
        { name: 'accent', title: 'Accent Color', type: 'string' },
      ],
    },
    {
      name: 'fonts',
      title: 'Typography',
      type: 'object',
      fields: [
        { name: 'primary', title: 'Primary Font', type: 'string' },
        { name: 'secondary', title: 'Secondary Font', type: 'string' },
        { name: 'description', title: 'Description Font', type: 'string' },
        { name: 'button', title: 'Button Font', type: 'string' },
      ],
    },
    {
      name: 'logos',
      title: 'Brand Logos',
      type: 'object',
      fields: [
        { name: 'mainLogo', title: 'Main Logo', type: 'image' },
        { name: 'logoIcon', title: 'Logo Icon', type: 'image' },
        { name: 'favicon', title: 'Favicon', type: 'image' },
      ],
    },
  ],
});

// Company Wall Schema
export const companyWall = defineType({
  name: 'companyWall',
  title: 'Company Wall',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'featuredImage', title: 'Featured Image', type: 'image' },
    {
      name: 'template',
      title: 'Layout Template',
      type: 'string',
      options: {
        list: [
          { title: 'Left Aligned', value: 'left' },
          { title: 'Right Aligned', value: 'right' },
          { title: 'Center Aligned', value: 'center' },
        ],
      },
    },
    {
      name: 'primaryButton',
      title: 'Primary Button',
      type: 'object',
      fields: [
        { name: 'text', title: 'Button Text', type: 'string' },
        { name: 'link', title: 'Button Link', type: 'url' },
      ],
    },
    {
      name: 'secondaryButton',
      title: 'Secondary Button',
      type: 'object',
      fields: [
        { name: 'text', title: 'Button Text', type: 'string' },
        { name: 'link', title: 'Button Link', type: 'url' },
      ],
    },
    { name: 'publishedAt', title: 'Published At', type: 'datetime' },
    { name: 'featured', title: 'Featured', type: 'boolean' },
    { name: 'priority', title: 'Priority', type: 'number' },
  ],
});
```

#### Content Management Workflow
```typescript
// Automatic content fetching with fallbacks
export async function fetchCompanyWallItems() {
  try {
    const items = await sanityClient.fetch(`
      *[_type == "companyWall"] | order(priority desc, publishedAt desc) {
        _id,
        title,
        slug,
        description,
        featuredImage {
          asset-> {
            _id,
            url
          },
          alt
        },
        template,
        primaryButton,
        secondaryButton,
        publishedAt,
        featured,
        priority
      }
    `);
    return items;
  } catch (error) {
    console.warn('Sanity CMS unavailable, using fallback data');
    return fallbackCompanyWallData;
  }
}

// Real-time content updates
export function useRealtimeContent<T>(query: string, fallback: T) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['sanity', query],
    queryFn: () => sanityClient.fetch(query),
    staleTime: 30 * 1000, // 30 seconds
    refetchInterval: 60 * 1000, // 1 minute
    fallbackData: fallback,
  });

  return { data: data || fallback, isLoading, error };
}
```

---

## Performance Optimization

### Core Web Vitals Optimization

#### Cumulative Layout Shift (CLS) Prevention
```typescript
// CLS Optimizer Component
export function CLSOptimizer({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen relative" style={{ contain: 'layout style paint' }}>
      {children}
    </div>
  );
}

// Optimized Image Component with Aspect Ratio
export function OptimizedImage({ 
  src, 
  alt, 
  width, 
  height, 
  className 
}: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  
  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio: `${width}/${height}` }}
    >
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}
```

#### Font Loading Optimization
```css
/* Font preloading in index.html */
<link rel="preload" href="/fonts/orbitron.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/space-grotesk.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/jost.woff2" as="font" type="font/woff2" crossorigin>

/* Font display optimization */
@font-face {
  font-family: 'Orbitron';
  src: url('/fonts/orbitron.woff2') format('woff2');
  font-display: swap;
  font-weight: 400 900;
}
```

#### Performance Monitoring
```typescript
// Web Vitals tracking
export function usePerformanceMonitoring() {
  useEffect(() => {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(console.log);
      getFID(console.log);
      getFCP(console.log);
      getLCP(console.log);
      getTTFB(console.log);
    });
  }, []);
}

// Performance budget monitoring
const performanceBudget = {
  CLS: 0.1,      // Cumulative Layout Shift
  FID: 100,      // First Input Delay (ms)
  LCP: 2500,     // Largest Contentful Paint (ms)
  FCP: 1800,     // First Contentful Paint (ms)
  TTFB: 600,     // Time to First Byte (ms)
};
```

### Caching Strategy

#### Browser Caching
```typescript
// Service worker for static asset caching
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('gamers-tag-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/static/css/main.css',
        '/static/js/main.js',
        '/fonts/orbitron.woff2',
        '/fonts/space-grotesk.woff2',
        '/fonts/jost.woff2',
      ]);
    })
  );
});

// API response caching
const cacheConfig = {
  teams: 5 * 60 * 1000,        // 5 minutes
  news: 2 * 60 * 1000,         // 2 minutes
  gallery: 10 * 60 * 1000,     // 10 minutes
  testimonials: 15 * 60 * 1000, // 15 minutes
};
```

---

## SEO Implementation

### Meta Tags and Structured Data

#### Dynamic SEO Component
```typescript
interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  openGraph?: OpenGraphData;
  jsonLd?: object;
}

export function SEOComponent({ title, description, canonical, openGraph, jsonLd }: SEOProps) {
  const fullTitle = `${title} | GAMERS TAG - Gaming Super App`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="GAMERS TAG" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      
      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}
```

#### Structured Data Schemas
```typescript
// Organization Schema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "GAMERS TAG",
  "description": "The world's first all-in-one super app for gaming and esports",
  "url": "https://gamers-tag.com",
  "logo": "https://gamers-tag.com/logo.png",
  "sameAs": [
    "https://www.linkedin.com/company/gamers-tag",
    "https://twitter.com/gamerstag",
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "contact@gamers-tag.com"
  }
};

// WebSite Schema with Search Action
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "GAMERS TAG",
  "url": "https://gamers-tag.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://gamers-tag.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};
```

### Content Optimization

#### Gaming Industry Keywords
```typescript
const primaryKeywords = [
  'gaming super app',
  'esports networking platform',
  'gaming industry professionals',
  'game developer community',
  'esports career development',
  'gaming mentor network',
  'professional gaming platform',
];

const longTailKeywords = [
  'how to network in gaming industry',
  'esports career opportunities platform',
  'connect with gaming professionals',
  'gaming industry job opportunities',
  'esports team management tools',
  'professional game development network',
];
```

#### Content Strategy
```markdown
1. **Homepage**: Focus on "gaming super app" and "esports networking"
2. **Team Page**: Target "gaming industry professionals" and "esports experts"
3. **News Page**: Optimize for "gaming industry news" and "esports updates"
4. **About Page**: Target "gaming platform development" and "esports innovation"
5. **Features Pages**: Focus on specific feature keywords and use cases
```

---

## Brand Management System

### Global Brand Control

#### CSS Variable System
```css
:root {
  /* Brand Colors */
  --brand-primary: #E5042F;
  --brand-primary-rgb: 229, 4, 47;
  --brand-secondary: #1a1a1a;
  --brand-accent: #ffffff;
  --brand-background: #000000;

  /* Typography */
  --font-primary: 'Orbitron', monospace;
  --font-secondary: 'Space Grotesk', sans-serif;
  --font-description: 'Jost', sans-serif;
  --font-button: 'Jost', sans-serif;

  /* Spacing */
  --spacing-unit: 8px;
  --container-max-width: 1200px;
  
  /* Animation */
  --transition-speed: 0.3s;
  --animation-curve: cubic-bezier(0.4, 0, 0.2, 1);
}
```

#### Brand Settings Integration
```typescript
// Automatic brand application from Sanity CMS
export function useBrandSettings() {
  const { data: brandSettings } = useQuery({
    queryKey: ['brand-settings'],
    queryFn: fetchBrandSettings,
    staleTime: 5 * 60 * 1000,
  });

  useEffect(() => {
    if (brandSettings) {
      // Apply colors
      document.documentElement.style.setProperty(
        '--brand-primary', 
        brandSettings.colors.primary
      );
      
      // Apply fonts
      document.documentElement.style.setProperty(
        '--font-description', 
        brandSettings.fonts.description
      );
      
      // Apply logos
      updateLogos(brandSettings.logos);
    }
  }, [brandSettings]);

  return brandSettings;
}
```

---

## Real-time Features

### Notification System

#### HUD-Style Notifications
```typescript
// User login notification component
export function UserLoginNotification({ newUser, onClose }: NotificationProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (newUser) {
      setIsVisible(true);
      
      // Auto-close after 4 seconds
      const timer = setTimeout(() => {
        handleClose();
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [newUser]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 400, opacity: 0 }}
          className="fixed bottom-4 right-4 z-50"
        >
          <div className="bg-black/90 backdrop-blur-sm border border-[#E5042F]/50 rounded-lg p-4 min-w-[320px]">
            {/* HUD corner decorations */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#E5042F]"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#E5042F]"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#E5042F]"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#E5042F]"></div>
            
            {/* Content */}
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-[#E5042F]" />
              <div>
                <h4 className="text-white font-semibold text-sm">{newUser.name}</h4>
                <p className="text-[#E5042F] text-xs">GT ID: {newUser.gtId}</p>
                <p className="text-gray-400 text-xs">New user joined GAMERS TAG app</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
```

### WebSocket Integration

#### Real-time Updates
```typescript
// WebSocket client for real-time features
export class WebSocketClient {
  private ws: WebSocket | null = null;
  private reconnectInterval: number = 5000;
  private maxReconnectAttempts: number = 5;
  private reconnectAttempts: number = 0;

  connect(sessionId: string) {
    const wsUrl = `${process.env.VITE_WS_URL}?sessionId=${sessionId}`;
    this.ws = new WebSocket(wsUrl);

    this.ws.onopen = () => {
      console.log('WebSocket connected');
      this.reconnectAttempts = 0;
    };

    this.ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      this.handleMessage(message);
    };

    this.ws.onclose = () => {
      console.log('WebSocket disconnected');
      this.attemptReconnect(sessionId);
    };

    this.ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
  }

  private handleMessage(message: any) {
    switch (message.type) {
      case 'new_user_joined':
        showUserNotification(message.data);
        break;
      case 'content_updated':
        invalidateContentCache();
        break;
      case 'system_announcement':
        showSystemNotification(message.data);
        break;
    }
  }

  sendMessage(type: string, data: any) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify({ type, data }));
    }
  }

  private attemptReconnect(sessionId: string) {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      setTimeout(() => {
        this.reconnectAttempts++;
        this.connect(sessionId);
      }, this.reconnectInterval);
    }
  }
}
```

---

## User Experience Features

### Interactive Elements

#### Gaming-Style Buttons
```typescript
export function GamingButton({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className,
  ...props 
}: ButtonProps) {
  const baseClasses = [
    'relative',
    'inline-flex',
    'items-center',
    'justify-center',
    'font-button',
    'font-semibold',
    'tracking-wide',
    'transition-all',
    'duration-300',
    'overflow-hidden',
    'group',
  ];

  const variantClasses = {
    primary: [
      'bg-[#E5042F]',
      'text-white',
      'border-2',
      'border-[#E5042F]',
      'hover:bg-[#E5042F]/80',
      'hover:shadow-[0_0_20px_rgba(229,4,47,0.6)]',
    ],
    secondary: [
      'bg-transparent',
      'text-[#E5042F]',
      'border-2',
      'border-[#E5042F]',
      'hover:bg-[#E5042F]',
      'hover:text-white',
    ],
    ghost: [
      'bg-transparent',
      'text-white',
      'border-2',
      'border-white/30',
      'hover:border-white',
      'hover:bg-white/10',
    ],
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {/* HUD scanning line animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      />
      
      {/* Corner brackets */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white/40 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white/40 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white/40 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white/40 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
```

### Navigation System

#### Responsive Navigation
```typescript
export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Main navigation items
  const mainNavItems = [
    { name: 'Home', href: '/' },
    { name: 'Team', href: '/team' },
    { name: 'News', href: '/news' },
    { name: 'App Updates', href: '/app-updates' },
    { name: 'Testimonials', href: '/testimonials' },
  ];

  // Features dropdown with icons
  const featuresDropdown = [
    { name: 'Pro Gaming Profile', href: '/features/pro-gaming-profile', icon: User },
    { name: 'Next-Gen Onboarding', href: '/features/next-gen-onboarding', icon: Sparkles },
    { name: 'GACCOUNTS', href: '/features/gaccounts', icon: Share2 },
    { name: 'GCONNECT', href: '/features/gconnect', icon: Link2 },
    { name: 'GT Chat', href: '/features/gt-chat', icon: MessageCircle },
    // ... more features
  ];

  return (
    <motion.nav
      className="fixed top-4 left-4 right-4 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="relative bg-black/20 backdrop-blur-xl p-4">
        {/* Logo and brand */}
        <div className="flex justify-between items-center">
          <Link href="/">
            <motion.div className="flex items-center space-x-3 cursor-pointer group">
              <div className="relative bg-black/80 backdrop-blur-xl border-2 border-[#E5042F]/50 w-14 h-14 flex items-center justify-center">
                <img 
                  src="/logo.png"
                  alt="GAMERS TAG Logo"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-primary font-bold text-xl text-white group-hover:text-[#E5042F] transition-colors">
                  GAMERS TAG
                </span>
                <span className="text-xs text-[#E5042F]">
                  Super App for Gaming & Esports
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-3">
            {mainNavItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <motion.div
                  className="px-4 py-2 font-button font-medium text-white bg-white/10 border-2 border-white/20 hover:bg-[#E5042F] hover:border-[#E5042F] transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
```

---

## Security Implementation

### Authentication & Authorization

#### Session Management
```typescript
// Secure session configuration
app.use(session({
  store: new PgSession({
    conString: process.env.DATABASE_URL,
    tableName: 'session',
    createTableIfMissing: true,
  }),
  secret: process.env.SESSION_SECRET!,
  resave: false,
  saveUninitialized: false,
  rolling: true,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    sameSite: 'strict',
  },
  name: 'gt.session',
}));
```

#### Input Validation
```typescript
// Zod validation schemas
export const userRegistrationSchema = z.object({
  email: z.string().email('Invalid email address'),
  username: z.string()
    .min(3, 'Username must be at least 3 characters')
    .max(20, 'Username must be less than 20 characters')
    .regex(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Password must contain uppercase, lowercase, and number'),
});

// Validation middleware
export function validateRequest(schema: z.ZodSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          error: 'Validation failed',
          details: error.errors,
        });
      }
      next(error);
    }
  };
}
```

#### Rate Limiting
```typescript
// API rate limiting
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many API requests',
  standardHeaders: true,
  legacyHeaders: false,
});

// Strict rate limiting for authentication
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5, // 5 attempts per 15 minutes
  message: 'Too many authentication attempts',
  skipSuccessfulRequests: true,
});

app.use('/api', apiLimiter);
app.use('/api/auth/login', authLimiter);
app.use('/api/auth/register', authLimiter);
```

---

## Deployment & Hosting

### Production Environment

#### Docker Configuration
```dockerfile
# Multi-stage build for production optimization
FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

FROM node:20-alpine AS runner

WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
RUN chown -R nextjs:nodejs /app
USER nextjs

EXPOSE 5000

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:5000/health || exit 1

CMD ["node", "dist/server/index.js"]
```

#### Environment Configuration
```env
# Production environment variables
NODE_ENV=production
PORT=5000
HOST=0.0.0.0

# Database with SSL
DATABASE_URL=postgresql://user:pass@prod-db:5432/gamers_tag?sslmode=require

# Security
SESSION_SECRET=ultra-secure-production-session-secret-key
CORS_ORIGIN=https://gamers-tag.com,https://www.gamers-tag.com

# External Services
SANITY_PROJECT_ID=production_project_id
SANITY_DATASET=production
SANITY_API_TOKEN=production_token

# CDN and Storage
AWS_ACCESS_KEY_ID=production_key
AWS_SECRET_ACCESS_KEY=production_secret
AWS_REGION=us-east-1
S3_BUCKET=gamers-tag-production
CLOUDFRONT_DOMAIN=cdn.gamers-tag.com

# Monitoring
SENTRY_DSN=production_sentry_dsn
LOG_LEVEL=info
```

### CI/CD Pipeline

#### GitHub Actions Workflow
```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run test
      - run: npm run lint
      - run: npm run build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to server
        run: |
          echo "${{ secrets.DEPLOY_KEY }}" > deploy_key
          chmod 600 deploy_key
          ssh -i deploy_key -o StrictHostKeyChecking=no ${{ secrets.DEPLOY_USER }}@${{ secrets.DEPLOY_HOST }} '
            cd /var/www/gamers-tag &&
            git pull origin main &&
            npm ci &&
            npm run build &&
            pm2 restart gamers-tag
          '
```

---

## Maintenance & Updates

### Content Management Workflow

#### Regular Updates
```markdown
1. **Daily**: Monitor performance metrics and error logs
2. **Weekly**: Update news content and team information
3. **Monthly**: Review and update SEO content
4. **Quarterly**: Performance optimization and security updates
```

#### Content Update Process
```typescript
// Automated content validation
export async function validateContent(content: any) {
  const issues: string[] = [];

  // Check for required fields
  if (!content.title || content.title.length < 10) {
    issues.push('Title must be at least 10 characters');
  }

  // Check for SEO optimization
  if (!content.metaDescription || content.metaDescription.length < 120) {
    issues.push('Meta description should be at least 120 characters');
  }

  // Check for image optimization
  if (content.featuredImage && !content.featuredImage.alt) {
    issues.push('Featured image missing alt text');
  }

  return issues;
}
```

### Performance Monitoring

#### Health Checks
```typescript
// Comprehensive health monitoring
export async function performHealthCheck() {
  const healthChecks = {
    database: await checkDatabaseConnection(),
    cache: await checkCacheConnection(),
    externalAPIs: await checkExternalServices(),
    fileStorage: await checkFileStorage(),
    performance: await checkPerformanceMetrics(),
  };

  const isHealthy = Object.values(healthChecks).every(check => check.status === 'healthy');

  return {
    status: isHealthy ? 'healthy' : 'degraded',
    checks: healthChecks,
    timestamp: new Date().toISOString(),
  };
}
```

#### Analytics Integration
```typescript
// Performance analytics
export function trackPerformanceMetrics() {
  // Core Web Vitals tracking
  import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
    getCLS((metric) => sendToAnalytics('CLS', metric));
    getFID((metric) => sendToAnalytics('FID', metric));
    getFCP((metric) => sendToAnalytics('FCP', metric));
    getLCP((metric) => sendToAnalytics('LCP', metric));
    getTTFB((metric) => sendToAnalytics('TTFB', metric));
  });
}

// User interaction tracking
export function trackUserInteractions() {
  // Button clicks
  document.addEventListener('click', (event) => {
    const button = event.target.closest('button');
    if (button) {
      sendToAnalytics('button_click', {
        text: button.textContent,
        location: window.location.pathname,
      });
    }
  });

  // Page views
  window.addEventListener('popstate', () => {
    sendToAnalytics('page_view', {
      page: window.location.pathname,
      referrer: document.referrer,
    });
  });
}
```

---

## Summary

This comprehensive website documentation covers all aspects of the GAMERS TAG platform:

### Frontend Excellence
- Modern React architecture with TypeScript
- Gaming-inspired UI with HUD elements
- Performance-optimized with Core Web Vitals focus
- Responsive design with mobile-first approach

### Backend Robustness
- Secure Express.js API with PostgreSQL
- Real-time WebSocket integration
- Comprehensive authentication system
- Production-ready deployment configuration

### Content Management
- Sanity CMS integration with fallback systems
- Dynamic content updates
- Brand management with global control
- SEO optimization throughout

### Performance & SEO
- Sub-2-second load times
- Core Web Vitals optimization
- Comprehensive SEO implementation
- Gaming industry keyword targeting

### User Experience
- Real-time notifications
- Interactive gaming elements
- Smooth animations and transitions
- Accessibility compliance

The platform is production-ready with comprehensive monitoring, security measures, and scalability considerations built-in.