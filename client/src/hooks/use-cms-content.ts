import { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { 
  fetchHomePageContent, 
  fetchWebsiteContentBySection, 
  fetchPageContent, 
  fetchSiteSettings 
} from '@/lib/sanity-queries'

// Hook for home page content
export function useHomePageContent() {
  return useQuery({
    queryKey: ['homePage'],
    queryFn: fetchHomePageContent,
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}

// Hook for website content by section
export function useWebsiteContent(section: string) {
  return useQuery({
    queryKey: ['websiteContent', section],
    queryFn: () => fetchWebsiteContentBySection(section),
    staleTime: 5 * 60 * 1000,
    enabled: !!section
  })
}

// Hook for page-specific content
export function usePageContent(page: string) {
  return useQuery({
    queryKey: ['pageContent', page],
    queryFn: () => fetchPageContent(page),
    staleTime: 5 * 60 * 1000,
    enabled: !!page
  })
}

// Hook for site settings
export function useSiteSettings() {
  return useQuery({
    queryKey: ['siteSettings'],
    queryFn: fetchSiteSettings,
    staleTime: 10 * 60 * 1000, // 10 minutes for settings
  })
}

// Specialized hooks for common sections
export function useNavigationContent() {
  return useWebsiteContent('navigation')
}

export function useFooterContent() {
  return useWebsiteContent('footer')
}

export function useHeroContent() {
  return useWebsiteContent('hero')
}

export function useAboutContent() {
  return useWebsiteContent('about')
}

export function useContactContent() {
  return useWebsiteContent('contact')
}

export function useSocialMediaContent() {
  return useWebsiteContent('social')
}

export function useDownloadContent() {
  return useWebsiteContent('download')
}

export function useCompanyContent() {
  return useWebsiteContent('company')
}