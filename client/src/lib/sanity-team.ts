import { client } from './sanity'

export interface SanityTeamMember {
  _id: string
  name: string
  position: string
  department: string
  bio: string
  shortBio: string
  profileImage: {
    asset: {
      _id: string
      url: string
    }
    alt?: string
  }
  profileTemplate: 'template-a' | 'template-b' | 'template-c'
  linkedinUrl?: string
  twitterUrl?: string
  githubUrl?: string
  email?: string
  expertise: string[]
  joinedDate?: string
  isActive: boolean
  isFounder: boolean
  sortOrder: number
  templateA?: {
    leadershipPhilosophy?: string
    education?: Array<{
      institution: string
      degree: string
      field?: string
      period: string
      description?: string
      achievements?: string[]
    }>
    projects?: Array<{
      name: string
      period: string
      role?: string
      description?: string
      technologies?: string[]
      achievements?: string[]
      link?: string
      category?: string
    }>
    testimonials?: Array<{
      name: string
      position: string
      company?: string
      content: string
      relationship?: string
      linkedinUrl?: string
    }>
    achievements?: string[]
    incubators?: Array<{
      name: string
      organization?: string
      period?: string
      description?: string
      status?: string
    }>
    sports?: string[]
    inspirations?: string[]
    personalStatement?: string
  }
  templateB?: {
    mentorTitle?: string
    subtitle?: string
    hashtag?: string
    awards?: string
    company?: string
    location?: string
    longDescription?: string
    careerPath?: Array<{
      role: string
      company: string
      duration: string
      description?: string
    }>
    mentoringAreas?: string[]
    socialLinks?: {
      linkedin?: string
      twitter?: string
      website?: string
    }
  }
}

export async function getTeamMember(memberId: string): Promise<SanityTeamMember | null> {
  try {
    const query = `*[_type == "teamMember" && _id == $memberId][0]{
      _id,
      name,
      position,
      department,
      bio,
      shortBio,
      profileImage{
        asset->{
          _id,
          url
        },
        alt
      },
      profileTemplate,
      linkedinUrl,
      twitterUrl,
      githubUrl,
      email,
      expertise,
      joinedDate,
      isActive,
      isFounder,
      sortOrder,
      templateA{
        leadershipPhilosophy,
        education[]{
          institution,
          degree,
          field,
          period,
          description,
          achievements
        },
        projects[]{
          name,
          period,
          role,
          description,
          technologies,
          achievements,
          link,
          category
        },
        testimonials[]{
          name,
          position,
          company,
          content,
          relationship,
          linkedinUrl
        },
        achievements,
        incubators[]{
          name,
          organization,
          period,
          description,
          status
        },
        sports,
        inspirations,
        personalStatement
      },
      templateB{
        mentorTitle,
        subtitle,
        hashtag,
        awards,
        company,
        location,
        longDescription,
        careerPath[]{
          role,
          company,
          duration,
          description
        },
        mentoringAreas,
        socialLinks{
          linkedin,
          twitter,
          website
        }
      }
    }`

    const member = await client.fetch(query, { memberId })
    return member
  } catch (error) {
    console.error('Error fetching team member:', error)
    return null
  }
}

export async function getAllTeamMembers(): Promise<SanityTeamMember[]> {
  try {
    const query = `*[_type == "teamMember" && isActive == true] | order(sortOrder asc){
      _id,
      name,
      position,
      department,
      bio,
      shortBio,
      profileImage{
        asset->{
          _id,
          url
        },
        alt
      },
      profileTemplate,
      linkedinUrl,
      twitterUrl,
      githubUrl,
      email,
      expertise,
      joinedDate,
      isActive,
      isFounder,
      sortOrder
    }`

    const members = await client.fetch(query)
    return members
  } catch (error) {
    console.error('Error fetching team members:', error)
    return []
  }
}

export async function getTeamMembersByTemplate(template: string): Promise<SanityTeamMember[]> {
  try {
    const query = `*[_type == "teamMember" && isActive == true && profileTemplate == $template] | order(sortOrder asc){
      _id,
      name,
      position,
      department,
      bio,
      shortBio,
      profileImage{
        asset->{
          _id,
          url
        },
        alt
      },
      profileTemplate,
      linkedinUrl,
      twitterUrl,
      githubUrl,
      email,
      expertise,
      joinedDate,
      isActive,
      isFounder,
      sortOrder
    }`

    const members = await client.fetch(query, { template })
    return members
  } catch (error) {
    console.error('Error fetching team members by template:', error)
    return []
  }
}