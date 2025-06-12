import { useQuery } from '@tanstack/react-query'
import { 
  fetchPageData, 
  fetchAllPages, 
  fetchTeamMembers, 
  fetchFeatures, 
  fetchTestimonials, 
  fetchIncubators, 
  fetchMentors, 
  fetchSiteSettings, 
  fetchNavigation,
  client,
  queries
} from '@/lib/sanity'
import type { 
  SanityPage, 
  SanityTeamMember, 
  SanityFeature, 
  SanityTestimonial, 
  SanityIncubator, 
  SanityMentor, 
  SanitySettings, 
  SanityNavigation,
  SanityBlogPost
} from '@/types/sanity'

// Hook for fetching a specific page by slug
export function usePage(slug: string) {
  return useQuery({
    queryKey: ['sanity', 'page', slug],
    queryFn: () => fetchPageData(slug),
    enabled: !!slug,
  })
}

// Hook for fetching all pages
export function usePages() {
  return useQuery({
    queryKey: ['sanity', 'pages'],
    queryFn: fetchAllPages,
  })
}

// Hook for fetching team members
export function useTeamMembers(department?: string) {
  return useQuery({
    queryKey: ['sanity', 'teamMembers', department],
    queryFn: async () => {
      if (department) {
        return await client.fetch(queries.getTeamMembersByDepartment(department))
      }
      return await fetchTeamMembers()
    },
  })
}

// Hook for fetching founders
export function useFounders() {
  return useQuery({
    queryKey: ['sanity', 'founders'],
    queryFn: async () => {
      const teamMembers = await fetchTeamMembers()
      return teamMembers?.filter(member => member.isFounder) || []
    },
  })
}

// Hook for fetching features
export function useFeatures(category?: string) {
  return useQuery({
    queryKey: ['sanity', 'features', category],
    queryFn: async () => {
      if (category) {
        return await client.fetch(queries.getFeaturesByCategory(category))
      }
      return await fetchFeatures()
    },
  })
}

// Hook for fetching testimonials
export function useTestimonials(category?: string, featured?: boolean) {
  return useQuery({
    queryKey: ['sanity', 'testimonials', category, featured],
    queryFn: async () => {
      if (featured) {
        return await client.fetch(queries.getFeaturedTestimonials)
      }
      if (category) {
        return await client.fetch(queries.getTestimonialsByCategory(category))
      }
      return await fetchTestimonials()
    },
  })
}

// Hook for fetching incubators
export function useIncubators(activeOnly?: boolean) {
  return useQuery({
    queryKey: ['sanity', 'incubators', activeOnly],
    queryFn: async () => {
      if (activeOnly) {
        return await client.fetch(queries.getActiveIncubators)
      }
      return await fetchIncubators()
    },
  })
}

// Hook for fetching mentors
export function useMentors(expertise?: string, availableOnly?: boolean) {
  return useQuery({
    queryKey: ['sanity', 'mentors', expertise, availableOnly],
    queryFn: async () => {
      if (availableOnly) {
        return await client.fetch(queries.getAvailableMentors)
      }
      if (expertise) {
        return await client.fetch(queries.getMentorsByExpertise(expertise))
      }
      return await fetchMentors()
    },
  })
}

// Hook for fetching blog posts
export function useBlogPosts(category?: string) {
  return useQuery({
    queryKey: ['sanity', 'blogPosts', category],
    queryFn: async () => {
      if (category) {
        return await client.fetch(queries.getBlogPostsByCategory(category))
      }
      return await client.fetch(queries.getAllBlogPosts)
    },
  })
}

// Hook for fetching a specific blog post
export function useBlogPost(slug: string) {
  return useQuery({
    queryKey: ['sanity', 'blogPost', slug],
    queryFn: () => client.fetch(queries.getBlogPostBySlug(slug)),
    enabled: !!slug,
  })
}

// Hook for fetching site settings
export function useSiteSettings() {
  return useQuery({
    queryKey: ['sanity', 'settings'],
    queryFn: fetchSiteSettings,
    staleTime: 1000 * 60 * 30, // Cache for 30 minutes
  })
}

// Hook for fetching navigation
export function useNavigation() {
  return useQuery({
    queryKey: ['sanity', 'navigation'],
    queryFn: fetchNavigation,
    staleTime: 1000 * 60 * 30, // Cache for 30 minutes
  })
}

// Hook for fetching hero sections
export function useHeroSections() {
  return useQuery({
    queryKey: ['sanity', 'heroSections'],
    queryFn: () => client.fetch(queries.getHeroSections),
  })
}