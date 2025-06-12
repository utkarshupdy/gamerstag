import { client } from './sanity'

// Fetch home page content
export async function fetchHomePageContent() {
  const query = `*[_type == "homePage"][0]{
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
  
  return await client.fetch(query)
}

// Fetch website content by section
export async function fetchWebsiteContent(section: string) {
  const query = `*[_type == "websiteContent" && section == $section && isActive == true] | order(order asc){
    title,
    content,
    order
  }`
  
  return await client.fetch(query, { section })
}

// Fetch page content
export async function fetchPageContent(page: string) {
  const query = `*[_type == "pageContent" && page == $page && isVisible == true] | order(displayOrder asc){
    sectionName,
    heading,
    subHeading,
    description,
    content,
    ctaButton,
    backgroundImage,
    displayOrder
  }`
  
  return await client.fetch(query, { page })
}

// Fetch site settings
export async function fetchSiteSettings() {
  const query = `*[_type == "siteSettings"][0]{
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
  
  return await client.fetch(query)
}

// Fetch navigation content
export async function fetchNavigationContent() {
  const query = `*[_type == "websiteContent" && section == "navigation" && isActive == true][0]{
    content
  }`
  
  return await client.fetch(query)
}

// Fetch footer content
export async function fetchFooterContent() {
  const query = `*[_type == "websiteContent" && section == "footer" && isActive == true][0]{
    content
  }`
  
  return await client.fetch(query)
}

// Fetch hero section content
export async function fetchHeroContent() {
  const query = `*[_type == "websiteContent" && section == "hero" && isActive == true][0]{
    content
  }`
  
  return await client.fetch(query)
}

// Fetch about section content
export async function fetchAboutContent() {
  const query = `*[_type == "websiteContent" && section == "about" && isActive == true][0]{
    content
  }`
  
  return await client.fetch(query)
}

// Fetch contact information
export async function fetchContactInfo() {
  const query = `*[_type == "websiteContent" && section == "contact" && isActive == true][0]{
    content
  }`
  
  return await client.fetch(query)
}

// Fetch social media links
export async function fetchSocialMediaLinks() {
  const query = `*[_type == "websiteContent" && section == "social" && isActive == true][0]{
    content
  }`
  
  return await client.fetch(query)
}

// Fetch download links
export async function fetchDownloadLinks() {
  const query = `*[_type == "websiteContent" && section == "download" && isActive == true][0]{
    content
  }`
  
  return await client.fetch(query)
}

// Fetch company information
export async function fetchCompanyInfo() {
  const query = `*[_type == "websiteContent" && section == "company" && isActive == true][0]{
    content
  }`
  
  return await client.fetch(query)
}

// Generic content fetcher for any section
export async function fetchContentBySection(section: string) {
  const query = `*[_type == "websiteContent" && section == $section && isActive == true] | order(order asc)`
  
  return await client.fetch(query, { section })
}

// Fetch all active content grouped by section
export async function fetchAllWebsiteContent() {
  const query = `*[_type == "websiteContent" && isActive == true] | order(section asc, order asc){
    section,
    title,
    content,
    order
  }`
  
  return await client.fetch(query)
}