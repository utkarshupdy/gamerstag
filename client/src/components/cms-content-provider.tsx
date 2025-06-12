import { createContext, useContext, ReactNode } from 'react'
import { useHomePageContent, useSiteSettings, useWebsiteContent } from '@/hooks/use-cms-content'

interface CMSContentContextType {
  homePageContent: any
  siteSettings: any
  navigationContent: any
  footerContent: any
  heroContent: any
  isLoading: boolean
  error: any
}

const CMSContentContext = createContext<CMSContentContextType | undefined>(undefined)

export function CMSContentProvider({ children }: { children: ReactNode }) {
  const { data: homePageContent, isLoading: homeLoading, error: homeError } = useHomePageContent()
  const { data: siteSettings, isLoading: settingsLoading, error: settingsError } = useSiteSettings()
  const { data: navigationContent, isLoading: navLoading, error: navError } = useWebsiteContent('navigation')
  const { data: footerContent, isLoading: footerLoading, error: footerError } = useWebsiteContent('footer')
  const { data: heroContent, isLoading: heroLoading, error: heroError } = useWebsiteContent('hero')

  const isLoading = homeLoading || settingsLoading || navLoading || footerLoading || heroLoading
  const error = homeError || settingsError || navError || footerError || heroError

  const value = {
    homePageContent: homePageContent || getDefaultHomeContent(),
    siteSettings: siteSettings || getDefaultSiteSettings(),
    navigationContent: navigationContent?.[0]?.content || getDefaultNavigationContent(),
    footerContent: footerContent?.[0]?.content || getDefaultFooterContent(),
    heroContent: heroContent?.[0]?.content || getDefaultHeroContent(),
    isLoading,
    error
  }

  return (
    <CMSContentContext.Provider value={value}>
      {children}
    </CMSContentContext.Provider>
  )
}

export function useCMSContent() {
  const context = useContext(CMSContentContext)
  if (context === undefined) {
    throw new Error('useCMSContent must be used within a CMSContentProvider')
  }
  return context
}

// Fallback content functions
function getDefaultHomeContent() {
  return {
    heroSection: {
      mainHeading: 'REVOLUTIONIZING THE FUTURE OF GAMING',
      subHeading: 'SUPER APP FOR GAMING & ESPORTS',
      description: 'The world\'s first all-in-one gaming super app, designed to connect, empower, and revolutionize the gaming community worldwide.',
      primaryButton: { text: 'Download Now', link: '#' },
      secondaryButton: { text: 'Learn More', link: '/about' }
    },
    featuresSection: {
      heading: 'Core Features of the App',
      description: 'Discover the powerful features that make GAMERS TAG the ultimate gaming platform'
    },
    problemsSolvedSection: {
      heading: 'Problems Solved',
      description: 'Comprehensive solutions addressing every challenge in the gaming ecosystem'
    },
    benefitsSection: {
      heading: 'Core Benefits',
      description: 'Experience the advantages that set GAMERS TAG apart from the competition'
    },
    subFeaturesSection: {
      heading: 'Sub Features',
      description: 'Detailed functionality breakdown from all our core features'
    },
    teamSection: {
      heading: 'Meet Our Core Team',
      description: 'The visionary minds behind GAMERS TAG innovation',
      viewAllLink: '/team'
    },
    testimonialsSection: {
      heading: 'What Gamers Say',
      description: 'Authentic reviews from our gaming community',
      viewAllLink: '/testimonials'
    },
    gallerySection: {
      heading: 'Experience the Revolution',
      description: 'Witness the future of gaming through our visual showcase',
      viewAllLink: '/gallery'
    },
    newsSection: {
      heading: 'Latest Updates',
      description: 'Stay informed with the latest developments and announcements',
      viewAllLink: '/news'
    }
  }
}

function getDefaultSiteSettings() {
  return {
    title: 'GAMERS TAG - Super App for Gaming & Esports',
    tagline: 'Super App for Gaming & Esports',
    description: 'The world\'s first all-in-one gaming super app, revolutionizing the future of Gaming and Esports with cutting-edge technology.',
    contactInfo: {
      email: 'contact@gamerstag.com',
      phone: '+91-9876543210',
      address: 'Kochi, Kerala, India'
    },
    socialMedia: [
      { platform: 'Instagram', url: 'https://www.instagram.com/gamerstag/', username: '@gamerstag' },
      { platform: 'Facebook', url: 'https://www.facebook.com/Gamers-Tag-102219632395268', username: 'GamersTag' },
      { platform: 'YouTube', url: 'https://www.youtube.com/channel/UCWH3iUkctZvdLmTYqjoMEcA', username: 'GamersTag' },
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/company/gamers-tag', username: 'gamers-tag' },
      { platform: 'Twitter', url: 'https://x.com/Gamerstag_GT', username: '@Gamerstag_GT' }
    ],
    downloadLinks: {
      playStore: 'https://play.google.com/store/apps/details?id=com.gamerstag',
      appStore: '#',
      playStoreEnabled: true,
      appStoreEnabled: false
    }
  }
}

function getDefaultNavigationContent() {
  return {
    heading: 'GAMERS TAG',
    subHeading: 'Super App for Gaming & Esports',
    links: [
      { text: 'Home', url: '/', icon: 'Home', external: false },
      { text: 'Team', url: '/team', icon: 'Users', external: false },
      { text: 'News', url: '/news', icon: 'Newspaper', external: false },
      { text: 'App Updates', url: '/app-updates', icon: 'Download', external: false },
      { text: 'Testimonials', url: '/testimonials', icon: 'Star', external: false }
    ]
  }
}

function getDefaultFooterContent() {
  return {
    heading: 'GAMERS TAG',
    description: 'The world\'s first all-in-one gaming super app, revolutionizing the future of Gaming and Esports with cutting-edge technology.',
    socialLinks: [
      { platform: 'Instagram', url: 'https://www.instagram.com/gamerstag/', icon: 'Instagram' },
      { platform: 'Facebook', url: 'https://www.facebook.com/Gamers-Tag-102219632395268', icon: 'Facebook' },
      { platform: 'YouTube', url: 'https://www.youtube.com/channel/UCWH3iUkctZvdLmTYqjoMEcA', icon: 'Youtube' },
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/company/gamers-tag', icon: 'Linkedin' },
      { platform: 'Twitter', url: 'https://x.com/Gamerstag_GT', icon: 'Twitter' }
    ],
    downloadLinks: {
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.gamerstag',
      appStoreUrl: '#',
      playStoreAvailable: true,
      appStoreAvailable: false
    },
    contactInfo: {
      email: 'contact@gamerstag.com',
      phone: '+91-9876543210',
      address: 'Kochi, Kerala, India',
      workingHours: '24/7 Support'
    }
  }
}

function getDefaultHeroContent() {
  return {
    heading: 'REVOLUTIONIZING THE FUTURE OF GAMING',
    subHeading: 'SUPER APP FOR GAMING & ESPORTS',
    description: 'The world\'s first all-in-one gaming super app, designed to connect, empower, and revolutionize the gaming community worldwide.',
    buttonText: 'Download Now',
    buttonLink: 'https://play.google.com/store/apps/details?id=com.gamerstag'
  }
}