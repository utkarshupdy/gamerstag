# GAMERS TAG - The Ultimate Gaming Platform

A futuristic dark-themed website for GAMERS TAG super app, featuring cutting-edge neon aesthetics and glassmorphism design with comprehensive Sanity CMS integration.

## 🚀 Project Overview

GAMERS TAG is a revolutionary gaming platform that connects gamers, creators, and the gaming industry through an all-in-one super app experience. Built with modern web technologies and powered by a headless CMS architecture.

## 🛠️ Technology Stack

### Frontend Technologies
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Full type safety across the application
- **Vite** - Lightning-fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework with custom cyberpunk theming
- **Framer Motion** - Production-ready motion library for animations
- **Wouter** - Lightweight routing solution
- **TanStack Query** - Powerful data fetching and caching
- **React Hook Form** - Performant forms with minimal re-renders

### Backend Technologies
- **Node.js** - High-performance JavaScript runtime
- **Express.js** - Fast web framework
- **Drizzle ORM** - Type-safe database toolkit
- **PostgreSQL** - Advanced relational database
- **Passport.js** - Authentication middleware

### Content Management
- **Sanity CMS** - Headless CMS with real-time updates
- **GROQ** - Query language for content retrieval
- **Portable Text** - Rich text content rendering
- **Image optimization** - Automatic image transformation and CDN delivery

## 📁 Project Structure

```
├── client/                 # Frontend application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── ui/         # Shadcn/ui components
│   │   │   ├── cyberpunk-* # Custom cyberpunk-themed components
│   │   │   └── ...
│   │   ├── pages/          # Application pages
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility libraries and configurations
│   │   ├── types/          # TypeScript type definitions
│   │   └── ...
├── server/                 # Backend application
│   ├── routes.ts           # API route handlers
│   ├── storage.ts          # Data storage interface
│   └── ...
├── shared/                 # Shared types and schemas
├── sanity/                 # Sanity CMS configuration
│   └── schemas/            # Content type definitions
└── ...
```

## 🎨 Design System

### Visual Identity
- **Cyberpunk aesthetic** with neon red (#E5042F) primary color
- **Glassmorphism effects** with transparent backgrounds
- **Dark theme optimization** throughout the application
- **Custom animations** and interactive elements
- **Gaming-focused iconography** and visual elements

### Component Architecture
- **CyberpunkBox** - Styled container with neon borders and effects
- **CyberpunkButton** - Interactive buttons with hover animations
- **CyberpunkHUD** - Gaming-inspired heads-up display elements
- **EnhancedCard** - Cards with lift and glow effects
- **AnimatedSidebar** - Responsive navigation component

## 📊 Content Management

### Sanity CMS Integration
The project includes comprehensive Sanity CMS integration for managing all content:

#### Content Types
- **Team Members** - Professional profiles with social links and expertise
- **Features** - App features with descriptions and categorization
- **Testimonials** - User reviews with ratings and verification
- **Incubators** - Partnership details with logos and benefits
- **Mentors** - Mentor profiles with availability status
- **Pages** - Dynamic page management with SEO optimization
- **Blog Posts** - News and articles with rich content
- **Site Settings** - Global configuration and social media links

#### Environment Configuration
Create a `.env` file with the following variables:
```env
VITE_SANITY_PROJECT_ID=your-project-id
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2024-01-01
```

#### Demo Mode
When Sanity credentials are not configured, the application automatically falls back to structured demo data that represents authentic CMS content structure.

### Pages with CMS Integration
- **Team Page** (`/team`) - Displays team members from Sanity
- **Features Page** (`/features`) - Shows app features from CMS
- **Testimonials Page** (`/testimonials`) - User reviews from Sanity
- **Incubators Page** (`/incubators`) - Partnership data from CMS
- **Mentors Page** (`/mentors`) - Mentor profiles from Sanity
- **CMS Demo Page** (`/cms-demo`) - Comprehensive data showcase

## 👥 Team Leadership

### Adesh - Director of Engineering & Founding Member
**Background:** IIT Guwahati graduate and Ex-Amazon intern
**Specialization:** AI, Web3, crypto, and full-stack development
**Vision:** "Building highly engineered products with multiple patentable algorithms, latest tech, and complex AI-SaaS interactions that make gamers unique and create sensational products in gaming."

### Hemanth - Chief Security Officer & Founding Member
**Background:** Startup veteran and security expert
**Vision:** "The gaming industry stands at the precipice of unprecedented transformation. With GAMERS TAG's vision, we're not just building a platform – we're architecting the future where every gamer becomes a recognized professional, every achievement gets its due recognition, and the entire gaming ecosystem evolves into something extraordinary."

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager
- PostgreSQL database (optional - uses in-memory storage by default)

### Installation and Setup
1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd gamers-tag
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment configuration**
   Create `.env` file with Sanity credentials (optional for demo mode)

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Access the application**
   - Main application: `http://localhost:5000`
   - CMS demo: `http://localhost:5000/cms-demo`
   - Technology stack: `http://localhost:5000/tech-stack`

## 📱 Key Features

### Gaming Platform Features
- **Pro Gaming Profile** - Professional gamer identity platform
- **GT Connect** - Unified gaming account linking
- **GT Chats** - Gaming community communication
- **GT Jobs** - Gaming industry job opportunities
- **GT News** - Latest gaming news and updates
- **GT Card** - Digital gaming identity card

### Technical Features
- **Responsive design** - Optimized for all devices
- **SEO optimization** - Meta tags and structured data
- **Performance optimization** - Lazy loading and image optimization
- **Type safety** - Full TypeScript implementation
- **Real-time updates** - Live content management
- **Progressive enhancement** - Works without JavaScript

## 🔧 Development

### Code Quality
- **TypeScript** for type safety
- **ESLint** for code linting
- **Prettier** for code formatting
- **Component-based architecture**
- **Custom hooks** for reusable logic

### Performance Optimization
- **Vite HMR** for fast development
- **Code splitting** for optimal loading
- **Image optimization** via Sanity CDN
- **Lazy loading** for improved performance
- **Caching strategies** with TanStack Query

### Security
- **Environment variable protection**
- **Input validation** with Zod schemas
- **Authentication** with Passport.js
- **CORS configuration**
- **Security headers**

## 📖 API Documentation

### Sanity CMS Endpoints
The application uses GROQ queries to fetch content from Sanity CMS:

- **Team Members:** `*[_type == "teamMember" && isActive == true]`
- **Features:** `*[_type == "feature"]`
- **Testimonials:** `*[_type == "testimonial"]`
- **Incubators:** `*[_type == "incubator"]`
- **Mentors:** `*[_type == "mentor" && isActive == true]`

### REST API Routes
- `/api/users` - User management
- `/api/testimonials` - User testimonials
- `/api/auth` - Authentication endpoints

## 🌐 Deployment

### Production Build
```bash
npm run build
```

### Environment Variables
Ensure all production environment variables are configured:
- `VITE_SANITY_PROJECT_ID`
- `VITE_SANITY_DATASET`
- Database connection strings
- Authentication secrets

### Deployment Platforms
- **Replit Deployments** (Recommended)
- **Vercel** for frontend
- **Railway** for full-stack deployment
- **Netlify** for static deployment

## 📚 Additional Resources

### Important Pages
- **Technology Stack:** `/tech-stack` - Comprehensive technical overview
- **CMS Demo:** `/cms-demo` - Live Sanity CMS integration showcase
- **Team:** `/team` - Meet the GAMERS TAG team
- **Features:** `/features` - Explore platform capabilities

### Documentation
- **Sanity CMS Setup:** See `SANITY_CMS_SETUP.md` for detailed configuration
- **Component Guide:** Custom cyberpunk components documentation
- **API Reference:** Backend API endpoint documentation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For technical support or questions:
- **Email:** technical@gamerstag.com
- **Documentation:** Check `/tech-stack` page
- **CMS Issues:** Visit `/cms-demo` for integration status

---

**GAMERS TAG** - Revolutionizing the gaming industry with cutting-edge technology and visionary leadership.
