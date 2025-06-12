import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

// Base Sanity document type
export interface SanityDocument {
  _id: string
  _type: string
  _createdAt: string
  _updatedAt: string
  _rev: string
}

// Image type
export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
  crop?: {
    top: number
    bottom: number
    left: number
    right: number
  }
}

// Slug type
export interface SanitySlug {
  _type: 'slug'
  current: string
}

// Block content type
export interface SanityBlock {
  _type: 'block'
  _key: string
  style: string
  children: Array<{
    _type: 'span'
    _key: string
    text: string
    marks?: string[]
  }>
}

// Page type
export interface SanityPage extends SanityDocument {
  _type: 'page'
  title: string
  slug: SanitySlug
  seoTitle?: string
  seoDescription?: string
  seoKeywords?: string[]
  ogImage?: SanityImage
  content?: Array<SanityBlock | SanityImage | SanityHeroSection | SanityFeature | SanityTeamMember | SanityTestimonial>
  isPublished: boolean
  publishedAt?: string
}

// Hero Section type
export interface SanityHeroSection {
  _type: 'heroSection'
  headline: string
  subheadline?: string
  description?: string
  ctaText?: string
  ctaLink?: string
  backgroundImage?: SanityImage
  backgroundVideo?: string
  variant: 'default' | 'gaming' | 'cyberpunk' | 'minimal'
}

// Feature type
export interface SanityFeature extends SanityDocument {
  _type: 'feature'
  title: string
  subtitle?: string
  description?: string
  shortDescription?: string
  icon?: string
  image?: SanityImage
  ctaText?: string
  ctaLink?: string
  category?: 'gaming-profile' | 'social' | 'analytics' | 'marketplace' | 'news' | 'jobs' | 'community'
  isComingSoon: boolean
  isPremium: boolean
  sortOrder?: number
}

// Team Member type
export interface SanityTeamMember extends SanityDocument {
  _type: 'teamMember'
  name: string
  position: string
  department?: 'leadership' | 'engineering' | 'design' | 'marketing' | 'operations' | 'hr' | 'business'
  bio?: string
  shortBio?: string
  profileImage?: SanityImage
  linkedinUrl?: string
  twitterUrl?: string
  githubUrl?: string
  email?: string
  expertise?: string[]
  joinedDate?: string
  isActive: boolean
  isFounder: boolean
  sortOrder?: number
}

// Testimonial type
export interface SanityTestimonial extends SanityDocument {
  _type: 'testimonial'
  content: string
  author: string
  authorPosition?: string
  authorCompany?: string
  authorImage?: SanityImage
  rating?: number
  category?: 'gaming' | 'platform' | 'community' | 'features' | 'general'
  isVerified: boolean
  isFeatured: boolean
  submittedAt?: string
}

// Blog Post type
export interface SanityBlogPost extends SanityDocument {
  _type: 'blogPost'
  title: string
  slug: SanitySlug
  excerpt?: string
  content?: Array<SanityBlock | SanityImage>
  featuredImage?: SanityImage
  author?: string
  category?: 'gaming-news' | 'esports' | 'industry' | 'product' | 'tutorials' | 'company'
  tags?: string[]
  seoTitle?: string
  seoDescription?: string
  isPublished: boolean
  publishedAt?: string
}

// Incubator type
export interface SanityIncubator extends SanityDocument {
  _type: 'incubator'
  name: string
  logo?: SanityImage
  description?: string
  website?: string
  partnership?: {
    startDate?: string
    status?: 'active' | 'completed' | 'in-progress'
    benefits?: string[]
    achievements?: string[]
  }
  location?: string
  category?: 'tech-accelerator' | 'gaming' | 'startup' | 'corporate'
  sortOrder?: number
}

// Mentor type
export interface SanityMentor extends SanityDocument {
  _type: 'mentor'
  name: string
  title: string
  company?: string
  bio?: string
  profileImage?: SanityImage
  expertise?: string[]
  experience?: number
  socialLinks?: {
    linkedin?: string
    twitter?: string
    website?: string
  }
  mentorshipAreas?: ('gaming' | 'technology' | 'business' | 'product' | 'marketing' | 'leadership' | 'fundraising')[]
  availability: 'available' | 'limited' | 'unavailable'
  isActive: boolean
  sortOrder?: number
}

// Navigation type
export interface SanityNavigation extends SanityDocument {
  _type: 'navigation'
  title: string
  menuItems: Array<{
    label: string
    href: string
    isExternal: boolean
    icon?: string
    submenu?: Array<{
      label: string
      href: string
      description?: string
    }>
  }>
}

// Settings type
export interface SanitySettings extends SanityDocument {
  _type: 'settings'
  title: string
  description?: string
  logo?: SanityImage
  favicon?: SanityImage
  socialMedia?: {
    twitter?: string
    linkedin?: string
    discord?: string
    youtube?: string
    instagram?: string
  }
  contact?: {
    email?: string
    phone?: string
    address?: string
  }
  seo?: {
    metaTitle?: string
    metaDescription?: string
    keywords?: string[]
    ogImage?: SanityImage
  }
}

// Company Wall type
export interface SanityCompanyWall extends SanityDocument {
  _type: 'companyWall'
  title: string
  slug: SanitySlug
  description: string
  featuredImage: SanityImage
  template: 'left' | 'right' | 'center' | 'left-alt'
  primaryButton?: {
    text: string
    link: string
  }
  secondaryButton?: {
    text: string
    link: string
  }
  publishedAt: string
  featured?: boolean
  priority?: number
}