import { client } from './sanity'

// Home page content queries
export const homePageQuery = `*[_type == "homePage"][0]{
  title,
  heroSection,
  featuresSection,
  problemsSolvedSection,
  benefitsSection,
  subFeaturesSection,
  teamSection,
  testimonialsSection,
  gallerySection,
  newsSection,
  seo
}`

export const websiteContentQuery = `*[_type == "websiteContent" && section == $section && isActive == true] | order(order asc){
  title,
  content,
  order
}`

export const pageContentQuery = `*[_type == "pageContent" && page == $page && isVisible == true] | order(displayOrder asc){
  sectionName,
  heading,
  subHeading,
  description,
  content,
  ctaButton,
  backgroundImage,
  displayOrder
}`

export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  title,
  logo,
  favicon,
  tagline,
  description,
  contactInfo,
  socialMedia,
  downloadLinks,
  seo,
  maintenance
}`

// Fetch functions
export async function fetchHomePageContent() {
  return await client.fetch(homePageQuery)
}

export async function fetchWebsiteContentBySection(section: string) {
  return await client.fetch(websiteContentQuery, { section })
}

export async function fetchPageContent(page: string) {
  return await client.fetch(pageContentQuery, { page })
}

export async function fetchSiteSettings() {
  return await client.fetch(siteSettingsQuery)
}

export async function fetchNavigationContent() {
  return await client.fetch(websiteContentQuery, { section: 'navigation' })
}

export async function fetchFooterContent() {
  return await client.fetch(websiteContentQuery, { section: 'footer' })
}

export async function fetchHeroContent() {
  return await client.fetch(websiteContentQuery, { section: 'hero' })
}

export async function fetchAboutContent() {
  return await client.fetch(websiteContentQuery, { section: 'about' })
}