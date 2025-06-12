import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { 
  allDemoTeamMembers, 
  demoFeatures, 
  demoTestimonials, 
  demoIncubators, 
  demoMentors, 
  demoSiteSettings 
} from './sanity-demo-data'

// Check if Sanity credentials are available
const hasCredentials = import.meta.env.VITE_SANITY_PROJECT_ID && 
                      import.meta.env.VITE_SANITY_PROJECT_ID !== 'your-project-id'

// Sanity client configuration
export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'demo-project',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})

// Image URL builder
const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  if (!hasCredentials) {
    // Return structured image URL builder for demo mode
    const baseUrl = `https://images.unsplash.com/photo-1607853202273-797f1c22a38e`;
    let params = new URLSearchParams({ w: '400', h: '400', fit: 'crop', crop: 'center' });
    
    return {
      url: () => `${baseUrl}?${params.toString()}`,
      width: (w: number) => {
        params.set('w', w.toString());
        return {
          url: () => `${baseUrl}?${params.toString()}`,
          height: (h: number) => {
            params.set('h', h.toString());
            return { url: () => `${baseUrl}?${params.toString()}` };
          },
          fit: (f: string) => {
            params.set('fit', f);
            return { url: () => `${baseUrl}?${params.toString()}` };
          }
        };
      },
      height: (h: number) => {
        params.set('h', h.toString());
        return {
          url: () => `${baseUrl}?${params.toString()}`,
          width: (w: number) => {
            params.set('w', w.toString());
            return { url: () => `${baseUrl}?${params.toString()}` };
          },
          fit: (f: string) => {
            params.set('fit', f);
            return { url: () => `${baseUrl}?${params.toString()}` };
          }
        };
      },
      fit: (f: string) => {
        params.set('fit', f);
        return {
          url: () => `${baseUrl}?${params.toString()}`,
          width: (w: number) => {
            params.set('w', w.toString());
            return { url: () => `${baseUrl}?${params.toString()}` };
          },
          height: (h: number) => {
            params.set('h', h.toString());
            return { url: () => `${baseUrl}?${params.toString()}` };
          }
        };
      }
    };
  }
  return builder.image(source)
}

// Common GROQ queries
export const queries = {
  // Pages
  getAllPages: `*[_type == "page" && isPublished == true] | order(publishedAt desc)`,
  getPageBySlug: (slug: string) => `*[_type == "page" && slug.current == "${slug}" && isPublished == true][0]`,
  
  // Hero sections
  getHeroSections: `*[_type == "heroSection"] | order(_createdAt desc)`,
  
  // Features
  getAllFeatures: `*[_type == "feature"] | order(sortOrder asc, _createdAt desc)`,
  getFeaturesByCategory: (category: string) => `*[_type == "feature" && category == "${category}"] | order(sortOrder asc)`,
  
  // Team members
  getAllTeamMembers: `*[_type == "teamMember" && isActive == true] | order(sortOrder asc, _createdAt desc)`,
  getTeamMembersByDepartment: (department: string) => `*[_type == "teamMember" && department == "${department}" && isActive == true] | order(sortOrder asc)`,
  getFounders: `*[_type == "teamMember" && isFounder == true && isActive == true] | order(sortOrder asc)`,
  
  // Testimonials
  getAllTestimonials: `*[_type == "testimonial"] | order(_createdAt desc)`,
  getFeaturedTestimonials: `*[_type == "testimonial" && isFeatured == true] | order(_createdAt desc)`,
  getTestimonialsByCategory: (category: string) => `*[_type == "testimonial" && category == "${category}"] | order(_createdAt desc)`,
  
  // Blog posts
  getAllBlogPosts: `*[_type == "blogPost" && isPublished == true] | order(publishedAt desc)`,
  getBlogPostBySlug: (slug: string) => `*[_type == "blogPost" && slug.current == "${slug}" && isPublished == true][0]`,
  getBlogPostsByCategory: (category: string) => `*[_type == "blogPost" && category == "${category}" && isPublished == true] | order(publishedAt desc)`,
  
  // Incubators
  getAllIncubators: `*[_type == "incubator"] | order(sortOrder asc, _createdAt desc)`,
  getActiveIncubators: `*[_type == "incubator" && partnership.status == "active"] | order(sortOrder asc)`,
  
  // Mentors
  getAllMentors: `*[_type == "mentor" && isActive == true] | order(sortOrder asc, _createdAt desc)`,
  getAvailableMentors: `*[_type == "mentor" && isActive == true && availability == "available"] | order(sortOrder asc)`,
  getMentorsByExpertise: (expertise: string) => `*[_type == "mentor" && "${expertise}" in mentorshipAreas && isActive == true] | order(sortOrder asc)`,
  
  // Navigation
  getNavigation: `*[_type == "navigation"][0]`,
  
  // Settings
  getSiteSettings: `*[_type == "settings"][0]`,
  
  // Company Wall
  getAllCompanyWallItems: `*[_type == "companyWall"] | order(priority desc, publishedAt desc)`,
  getFeaturedCompanyWallItems: `*[_type == "companyWall" && featured == true] | order(priority desc, publishedAt desc)`,
}

// Utility functions for fetching data
export async function fetchPageData(slug: string) {
  if (!hasCredentials) {
    return null // Would return page data from demo when configured
  }
  try {
    const page = await client.fetch(queries.getPageBySlug(slug))
    return page
  } catch (error) {
    console.error('Error fetching page data:', error)
    return null
  }
}

export async function fetchAllPages() {
  if (!hasCredentials) {
    return [] // Would return pages from demo when configured
  }
  try {
    const pages = await client.fetch(queries.getAllPages)
    return pages
  } catch (error) {
    console.error('Error fetching pages:', error)
    return []
  }
}

export async function fetchTeamMembers() {
  if (!hasCredentials) {
    // Return structured demo data that represents authentic Sanity CMS content
    return allDemoTeamMembers
  }
  try {
    const teamMembers = await client.fetch(queries.getAllTeamMembers)
    return teamMembers
  } catch (error) {
    console.error('Error fetching team members:', error)
    return allDemoTeamMembers
  }
}

export async function fetchFeatures() {
  if (!hasCredentials) {
    return demoFeatures
  }
  try {
    const features = await client.fetch(queries.getAllFeatures)
    return features
  } catch (error) {
    console.error('Error fetching features:', error)
    return demoFeatures
  }
}

export async function fetchTestimonials() {
  if (!hasCredentials) {
    return demoTestimonials
  }
  try {
    const testimonials = await client.fetch(queries.getAllTestimonials)
    return testimonials
  } catch (error) {
    console.error('Error fetching testimonials:', error)
    return demoTestimonials
  }
}

export async function fetchIncubators() {
  if (!hasCredentials) {
    return demoIncubators
  }
  try {
    const incubators = await client.fetch(queries.getAllIncubators)
    return incubators
  } catch (error) {
    console.error('Error fetching incubators:', error)
    return demoIncubators
  }
}

export async function fetchMentors() {
  if (!hasCredentials) {
    return demoMentors
  }
  try {
    const mentors = await client.fetch(queries.getAllMentors)
    return mentors
  } catch (error) {
    console.error('Error fetching mentors:', error)
    return demoMentors
  }
}

export async function fetchSiteSettings() {
  if (!hasCredentials) {
    return demoSiteSettings
  }
  try {
    const settings = await client.fetch(queries.getSiteSettings)
    return settings
  } catch (error) {
    console.error('Error fetching site settings:', error)
    return demoSiteSettings
  }
}

export async function fetchNavigation() {
  if (!hasCredentials) {
    return null // Navigation would be configured in CMS
  }
  try {
    const navigation = await client.fetch(queries.getNavigation)
    return navigation
  } catch (error) {
    console.error('Error fetching navigation:', error)
    return null
  }
}

export async function fetchCompanyWallItems() {
  if (!hasCredentials) {
    // Demo data for Company Wall
    return [
      {
        _id: 'cw1',
        _type: 'companyWall' as const,
        _createdAt: '2024-12-01T00:00:00Z',
        _updatedAt: '2024-12-01T00:00:00Z',
        _rev: 'v1',
        title: 'GT Logo Launched',
        slug: { _type: 'slug' as const, current: 'gt-logo-launched' },
        description: 'We are excited to unveil our brand new GAMERS TAG logo, marking a significant milestone in our journey to revolutionize the gaming industry.',
        featuredImage: {
          _type: 'image' as const,
          asset: { _ref: 'image-1', _type: 'reference' as const }
        },
        template: 'left' as const,
        primaryButton: {
          text: 'View Post',
          link: 'https://www.linkedin.com/posts/gamers-tag_gaming-esports-startups-activity-7285909963841970176-RDhi?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAUQmboBV5LRGCOLhcRV46wfiKBgrXs9XAw'
        },
        secondaryButton: {
          text: 'Learn More',
          link: '/about'
        },
        publishedAt: '2024-12-01T00:00:00Z',
        featured: true,
        priority: 100
      },
      {
        _id: 'cw2',
        _type: 'companyWall' as const,
        _createdAt: '2024-12-02T00:00:00Z',
        _updatedAt: '2024-12-02T00:00:00Z',
        _rev: 'v1',
        title: 'GT Closed Beta Launched Successfully',
        slug: { _type: 'slug' as const, current: 'gt-closed-beta-launched' },
        description: 'Our closed beta testing phase has been completed successfully, bringing us one step closer to the official launch of GAMERS TAG.',
        featuredImage: {
          _type: 'image' as const,
          asset: { _ref: 'image-2', _type: 'reference' as const }
        },
        template: 'right' as const,
        primaryButton: {
          text: 'Join Beta',
          link: '/beta'
        },
        publishedAt: '2024-12-02T00:00:00Z',
        featured: true,
        priority: 90
      },
      {
        _id: 'cw3',
        _type: 'companyWall' as const,
        _createdAt: '2024-12-03T00:00:00Z',
        _updatedAt: '2024-12-03T00:00:00Z',
        _rev: 'v1',
        title: 'GAMERS TAG Set to Launch App Soon',
        slug: { _type: 'slug' as const, current: 'gamers-tag-app-launch-soon' },
        description: 'The countdown begins! GAMERS TAG is preparing for its official app launch, bringing the ultimate gaming super app to millions of gamers worldwide.',
        featuredImage: {
          _type: 'image' as const,
          asset: { _ref: 'image-3', _type: 'reference' as const }
        },
        template: 'center' as const,
        primaryButton: {
          text: 'Pre-Register',
          link: '/pre-register'
        },
        secondaryButton: {
          text: 'Get Notified',
          link: '/notify'
        },
        publishedAt: '2024-12-03T00:00:00Z',
        featured: true,
        priority: 85
      },
      {
        _id: 'cw4',
        _type: 'companyWall' as const,
        _createdAt: '2025-05-01T00:00:00Z',
        _updatedAt: '2025-05-01T00:00:00Z',
        _rev: 'v1',
        title: 'Welcome Monish Gautam as Product Marketing Manager',
        slug: { _type: 'slug' as const, current: 'welcome-monish-gautam' },
        description: 'We are proud to announce Monish Gautam joining our team as Product Marketing Manager in May 2025. IIM Trichy PGPM\'26, Ex-Oracle Health, YouTube Content Creator with 75k+ subscribers and 50M+ views.',
        featuredImage: {
          _type: 'image' as const,
          asset: { _ref: 'image-4', _type: 'reference' as const }
        },
        template: 'left-alt' as const,
        primaryButton: {
          text: 'Connect',
          link: 'https://www.linkedin.com/in/monish-goutham/?originalSubdomain=in'
        },
        secondaryButton: {
          text: 'View Profile',
          link: '/team'
        },
        publishedAt: '2025-05-01T00:00:00Z',
        featured: true,
        priority: 80
      }
    ]
  }
  try {
    const items = await client.fetch(queries.getAllCompanyWallItems)
    return items
  } catch (error) {
    console.error('Error fetching company wall items:', error)
    return []
  }
}