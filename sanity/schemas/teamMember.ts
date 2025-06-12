import { defineType, defineField } from 'sanity'

export const teamMemberSchema = defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({
      name: 'profileTemplate',
      title: 'Profile Template',
      type: 'string',
      description: 'Select the profile template structure for this team member',
      options: {
        list: [
          { title: 'Profile Template A (Comprehensive)', value: 'template-a' },
          { title: 'Profile Template B (Standard)', value: 'template-b' },
          { title: 'Profile Template C (Minimal)', value: 'template-c' }
        ]
      },
      initialValue: 'template-b',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      description: 'Complete name as it should appear on the website',
      validation: Rule => Rule.required().min(2).max(50).error('Name must be between 2-50 characters')
    }),
    defineField({
      name: 'position',
      title: 'Position/Role',
      type: 'string',
      description: 'Job title or role within the company',
      validation: Rule => Rule.required().min(3).max(100).error('Position must be between 3-100 characters')
    }),
    defineField({
      name: 'department',
      title: 'Department',
      type: 'string',
      description: 'Select the department this team member belongs to',
      options: {
        list: [
          { title: 'Leadership & Management', value: 'leadership' },
          { title: 'Engineering & Development', value: 'engineering' },
          { title: 'Design & Creative', value: 'design' },
          { title: 'Marketing & Social Media', value: 'marketing' },
          { title: 'Operations & Business', value: 'operations' },
          { title: 'Human Resources', value: 'hr' },
          { title: 'Business Development', value: 'business' },
          { title: 'Quality Assurance', value: 'qa' },
          { title: 'Esports & Gaming', value: 'esports' },
          { title: 'Finance & Analytics', value: 'finance' },
          { title: 'Security & Compliance', value: 'security' }
        ]
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'text',
      description: 'Detailed biography for team member profile (recommended: 100-300 words)',
      rows: 4,
      validation: Rule => Rule.max(1000).warning('Keep biography under 1000 characters for better readability')
    }),
    defineField({
      name: 'shortBio',
      title: 'Short Bio',
      type: 'text',
      description: 'Brief one-sentence description for team listings (recommended: 50-100 characters)',
      rows: 2,
      validation: Rule => Rule.max(200).warning('Keep short bio under 200 characters')
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      description: 'Professional headshot photo (square format recommended, min 400x400px)',
      options: {
        hotspot: true,
        accept: 'image/*'
      },
      validation: Rule => Rule.required().error('Profile image is required for all team members')
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn Profile URL',
      type: 'url',
      description: 'Full LinkedIn profile URL (e.g., https://linkedin.com/in/username)',
      validation: Rule => Rule.uri({
        scheme: ['http', 'https']
      }).custom((url) => {
        if (url && !url.includes('linkedin.com')) {
          return 'Please enter a valid LinkedIn URL'
        }
        return true
      })
    }),
    defineField({
      name: 'twitterUrl',
      title: 'Twitter/X Profile URL',
      type: 'url',
      description: 'Full Twitter/X profile URL (e.g., https://twitter.com/username)',
      validation: Rule => Rule.uri({
        scheme: ['http', 'https']
      }).custom((url) => {
        if (url && !url.includes('twitter.com') && !url.includes('x.com')) {
          return 'Please enter a valid Twitter/X URL'
        }
        return true
      })
    }),
    defineField({
      name: 'githubUrl',
      title: 'GitHub Profile URL',
      type: 'url',
      description: 'Full GitHub profile URL (e.g., https://github.com/username)',
      validation: Rule => Rule.uri({
        scheme: ['http', 'https']
      }).custom((url) => {
        if (url && !url.includes('github.com')) {
          return 'Please enter a valid GitHub URL'
        }
        return true
      })
    }),
    defineField({
      name: 'email',
      title: 'Professional Email',
      type: 'email',
      description: 'Work email address (will not be displayed publicly unless specified)'
    }),
    defineField({
      name: 'expertise',
      title: 'Areas of Expertise',
      type: 'array',
      description: 'Key skills and areas of expertise (add 3-8 skills)',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      },
      validation: Rule => Rule.max(10).warning('Limit expertise areas to 10 for better display')
    }),
    defineField({
      name: 'joinedDate',
      title: 'Joined Date',
      type: 'date',
      description: 'Date when this team member joined the company',
      validation: Rule => Rule.max(new Date().toISOString().split('T')[0]).error('Join date cannot be in the future')
    }),
    defineField({
      name: 'isActive',
      title: 'Active Team Member',
      type: 'boolean',
      description: 'Uncheck to hide this team member from the website',
      initialValue: true
    }),
    defineField({
      name: 'isFounder',
      title: 'Company Founder',
      type: 'boolean',
      description: 'Check if this person is a company founder (displays special badge)',
      initialValue: false
    }),
    defineField({
      name: 'sortOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first (use 10, 20, 30... for easy reordering)',
      initialValue: 50,
      validation: Rule => Rule.min(0).max(999).error('Sort order must be between 0-999')
    }),

    // Profile Template A Fields (Comprehensive)
    defineField({
      name: 'templateA',
      title: 'Profile Template A - Comprehensive Profile',
      type: 'object',
      description: 'Advanced profile with education, projects, testimonials, and achievements',
      hidden: ({ parent }) => parent?.profileTemplate !== 'template-a',
      fields: [
        defineField({
          name: 'leadershipPhilosophy',
          title: 'Leadership Philosophy',
          type: 'text',
          description: 'Personal leadership philosophy and management style',
          rows: 4
        }),
        defineField({
          name: 'education',
          title: 'Education',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'institution', title: 'Institution', type: 'string', validation: Rule => Rule.required() },
              { name: 'degree', title: 'Degree/Program', type: 'string', validation: Rule => Rule.required() },
              { name: 'field', title: 'Field of Study', type: 'string' },
              { name: 'period', title: 'Period', type: 'string', validation: Rule => Rule.required() },
              { name: 'description', title: 'Description', type: 'text', rows: 2 },
              { name: 'achievements', title: 'Key Achievements', type: 'array', of: [{ type: 'string' }] }
            ]
          }]
        }),
        defineField({
          name: 'projects',
          title: 'Projects',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'name', title: 'Project Name', type: 'string', validation: Rule => Rule.required() },
              { name: 'period', title: 'Period', type: 'string', validation: Rule => Rule.required() },
              { name: 'role', title: 'Role', type: 'string' },
              { name: 'description', title: 'Description', type: 'text', rows: 3 },
              { name: 'technologies', title: 'Technologies', type: 'array', of: [{ type: 'string' }] },
              { name: 'achievements', title: 'Key Achievements', type: 'array', of: [{ type: 'string' }] },
              { name: 'link', title: 'Project Link', type: 'url' },
              { name: 'category', title: 'Category', type: 'string', options: {
                list: [
                  'AI/ML', 'Gaming', 'Fintech', 'Healthcare', 'Education', 'SaaS', 'Mobile', 'Web', 'Research', 'Other'
                ]
              }}
            ]
          }]
        }),
        defineField({
          name: 'testimonials',
          title: 'Testimonials',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'name', title: 'Name', type: 'string', validation: Rule => Rule.required() },
              { name: 'position', title: 'Position', type: 'string', validation: Rule => Rule.required() },
              { name: 'company', title: 'Company', type: 'string' },
              { name: 'content', title: 'Testimonial Content', type: 'text', rows: 4, validation: Rule => Rule.required() },
              { name: 'relationship', title: 'Professional Relationship', type: 'string' },
              { name: 'linkedinUrl', title: 'LinkedIn Profile', type: 'url' }
            ]
          }]
        }),
        defineField({
          name: 'achievements',
          title: 'Key Achievements',
          type: 'array',
          description: 'Quantifiable achievements and metrics',
          of: [{ type: 'string' }]
        }),
        defineField({
          name: 'incubators',
          title: 'Incubators & Programs',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'name', title: 'Program Name', type: 'string', validation: Rule => Rule.required() },
              { name: 'organization', title: 'Organization', type: 'string' },
              { name: 'period', title: 'Period', type: 'string' },
              { name: 'description', title: 'Description', type: 'text', rows: 2 },
              { name: 'status', title: 'Status', type: 'string', options: {
                list: ['Active', 'Completed', 'Alumni']
              }}
            ]
          }]
        }),
        defineField({
          name: 'sports',
          title: 'Sports & Interests',
          type: 'array',
          of: [{ type: 'string' }]
        }),
        defineField({
          name: 'inspirations',
          title: 'Inspirations',
          type: 'array',
          description: 'People who inspire this team member',
          of: [{ type: 'string' }]
        }),
        defineField({
          name: 'personalStatement',
          title: 'Personal Statement',
          type: 'text',
          description: 'Extended personal statement or mission',
          rows: 6
        })
      ]
    }),

    // Profile Template B Fields (Mentor Profile)
    defineField({
      name: 'templateB',
      title: 'Profile Template B - Mentor Profile',
      type: 'object',
      description: 'Professional mentor profile with career path, expertise, and testimonials',
      hidden: ({ parent }) => parent?.profileTemplate !== 'template-b',
      fields: [
        defineField({
          name: 'mentorTitle',
          title: 'Mentor Title',
          type: 'string',
          description: 'Professional title/designation as a mentor'
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
          description: 'Current position and company details'
        }),
        defineField({
          name: 'hashtag',
          title: 'Professional Hashtag',
          type: 'string',
          description: 'Professional hashtag or credentials'
        }),
        defineField({
          name: 'awards',
          title: 'Awards & Recognition',
          type: 'text',
          description: 'Awards, recognitions, and achievements',
          rows: 2
        }),
        defineField({
          name: 'company',
          title: 'Current Company',
          type: 'string'
        }),
        defineField({
          name: 'location',
          title: 'Location',
          type: 'string'
        }),
        defineField({
          name: 'longDescription',
          title: 'Extended Description',
          type: 'text',
          description: 'Detailed professional background and experience',
          rows: 6
        }),
        defineField({
          name: 'careerPath',
          title: 'Career Path',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'role', title: 'Role/Position', type: 'string', validation: Rule => Rule.required() },
              { name: 'company', title: 'Company', type: 'string', validation: Rule => Rule.required() },
              { name: 'duration', title: 'Duration', type: 'string', validation: Rule => Rule.required() },
              { name: 'description', title: 'Role Description', type: 'text', rows: 2 }
            ]
          }]
        }),
        defineField({
          name: 'mentoringAreas',
          title: 'Mentoring Areas',
          type: 'array',
          description: 'Areas of expertise for mentoring',
          of: [{ type: 'string' }]
        }),
        defineField({
          name: 'socialLinks',
          title: 'Social Media Links',
          type: 'object',
          fields: [
            { name: 'linkedin', title: 'LinkedIn URL', type: 'url' },
            { name: 'twitter', title: 'Twitter URL', type: 'url' },
            { name: 'website', title: 'Personal Website', type: 'url' }
          ]
        })
      ]
    })
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'position',
      media: 'profileImage',
      department: 'department',
      isActive: 'isActive',
      isFounder: 'isFounder',
      profileTemplate: 'profileTemplate'
    },
    prepare(selection) {
      const { title, subtitle, media, department, isActive, isFounder, profileTemplate } = selection
      const status = !isActive ? ' (INACTIVE)' : isFounder ? ' (FOUNDER)' : ''
      const template = profileTemplate === 'template-a' ? ' [Template A]' : 
                      profileTemplate === 'template-b' ? ' [Template B]' : 
                      profileTemplate === 'template-c' ? ' [Template C]' : ''
      return {
        title: title + status + template,
        subtitle: `${subtitle} - ${department?.toUpperCase() || 'NO DEPT'}`,
        media
      }
    }
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'sortOrder',
      by: [{ field: 'sortOrder', direction: 'asc' }]
    },
    {
      title: 'Department',
      name: 'department',
      by: [{ field: 'department', direction: 'asc' }]
    },
    {
      title: 'Name A-Z',
      name: 'nameAsc',
      by: [{ field: 'name', direction: 'asc' }]
    }
  ]
})