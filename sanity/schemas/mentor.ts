import { defineType, defineField } from 'sanity'

export const mentorSchema = defineType({
  name: 'mentor',
  title: 'Mentor',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'title',
      title: 'Professional Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'company',
      title: 'Company/Organization',
      type: 'string'
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'text',
      rows: 4
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'expertise',
      title: 'Areas of Expertise',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'experience',
      title: 'Years of Experience',
      type: 'number'
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        defineField({
          name: 'linkedin',
          title: 'LinkedIn URL',
          type: 'url'
        }),
        defineField({
          name: 'twitter',
          title: 'Twitter URL',
          type: 'url'
        }),
        defineField({
          name: 'website',
          title: 'Personal Website',
          type: 'url'
        })
      ]
    }),
    defineField({
      name: 'longDescription',
      title: 'Detailed Biography',
      type: 'text',
      rows: 6
    }),
    defineField({
      name: 'careerPath',
      title: 'Career Journey',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'role', title: 'Position', type: 'string' },
          { name: 'company', title: 'Company', type: 'string' },
          { name: 'duration', title: 'Duration', type: 'string' },
          { name: 'description', title: 'Description', type: 'text' }
        ]
      }]
    }),
    defineField({
      name: 'achievements',
      title: 'Key Achievements',
      type: 'array',
      of: [{ type: 'text' }]
    }),
    defineField({
      name: 'education',
      title: 'Education & Credentials',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'degree', title: 'Degree/Certification', type: 'string' },
          { name: 'institution', title: 'Institution', type: 'string' },
          { name: 'year', title: 'Year/Status', type: 'string' }
        ]
      }]
    }),
    defineField({
      name: 'testimonials',
      title: 'Mentee Testimonials',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'name', title: 'Mentee Name', type: 'string' },
          { name: 'role', title: 'Mentee Role', type: 'string' },
          { name: 'rating', title: 'Rating', type: 'number', validation: Rule => Rule.min(1).max(5) },
          { name: 'text', title: 'Testimonial', type: 'text' }
        ]
      }]
    }),
    defineField({
      name: 'mentorshipAreas',
      title: 'Mentorship Focus Areas',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'rating',
      title: 'Overall Rating',
      type: 'number',
      validation: Rule => Rule.min(1).max(5)
    }),
    defineField({
      name: 'reviewCount',
      title: 'Number of Reviews',
      type: 'number'
    }),
    defineField({
      name: 'menteeCount',
      title: 'Total Mentees',
      type: 'string'
    }),
    defineField({
      name: 'sessionsCompleted',
      title: 'Sessions Completed',
      type: 'number'
    }),
    defineField({
      name: 'responseTime',
      title: 'Response Time',
      type: 'string'
    }),
    defineField({
      name: 'availability',
      title: 'Availability Status',
      type: 'string',
      options: {
        list: [
          { title: 'Available', value: 'available' },
          { title: 'Limited', value: 'limited' },
          { title: 'Unavailable', value: 'unavailable' }
        ]
      },
      initialValue: 'available'
    }),
    defineField({
      name: 'isActive',
      title: 'Active Mentor',
      type: 'boolean',
      initialValue: true
    }),
    defineField({
      name: 'sortOrder',
      title: 'Display Order',
      type: 'number'
    })
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'title',
      media: 'profileImage'
    }
  }
})