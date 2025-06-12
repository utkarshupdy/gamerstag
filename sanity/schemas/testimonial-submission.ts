import { defineType, defineField } from 'sanity'

export const testimonialSubmissionSchema = defineType({
  name: 'testimonialSubmission',
  title: 'Testimonial Submission',
  type: 'document',
  fields: [
    defineField({
      name: 'content',
      title: 'Testimonial Content',
      type: 'text',
      rows: 6,
      validation: Rule => Rule.required().min(10).max(1000)
    }),
    defineField({
      name: 'author',
      title: 'Author Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'authorEmail',
      title: 'Author Email',
      type: 'email',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'authorPosition',
      title: 'Author Position/Role',
      type: 'string'
    }),
    defineField({
      name: 'authorCompany',
      title: 'Author Company/Organization',
      type: 'string'
    }),
    defineField({
      name: 'rating',
      title: 'Rating (1-5 stars)',
      type: 'number',
      validation: Rule => Rule.min(1).max(5).required(),
      initialValue: 5
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Pro Gamer', value: 'Pro Gamer' },
          { title: 'Content Creator', value: 'Creator' },
          { title: 'Business Professional', value: 'Business' },
          { title: 'Casual Gamer', value: 'Casual Gamer' },
          { title: 'Gaming Community', value: 'Community' }
        ]
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'source',
      title: 'Submission Source',
      type: 'string',
      options: {
        list: [
          { title: 'Google Play Store', value: 'Google Play Store' },
          { title: 'App Store', value: 'App Store' },
          { title: 'Website Form', value: 'Website Form' },
          { title: 'Social Media', value: 'Social Media' },
          { title: 'Email', value: 'Email' },
          { title: 'Direct Contact', value: 'Direct Contact' }
        ]
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'socialMediaLink',
      title: 'Social Media Profile Link',
      type: 'url',
      description: 'Link to social media profile (LinkedIn, Twitter, Instagram, etc.)'
    }),
    defineField({
      name: 'websiteUrl',
      title: 'Personal/Company Website',
      type: 'url'
    }),
    defineField({
      name: 'gamingPlatforms',
      title: 'Gaming Platforms Used',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'PC/Steam', value: 'PC' },
          { title: 'PlayStation', value: 'PlayStation' },
          { title: 'Xbox', value: 'Xbox' },
          { title: 'Nintendo Switch', value: 'Nintendo' },
          { title: 'Mobile Gaming', value: 'Mobile' },
          { title: 'VR Gaming', value: 'VR' }
        ]
      }
    }),
    defineField({
      name: 'isApproved',
      title: 'Approved for Public Display',
      type: 'boolean',
      initialValue: false,
      description: 'Admin approval required before testimonial appears on website'
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured Testimonial',
      type: 'boolean',
      initialValue: false,
      description: 'Display prominently on homepage and key pages'
    }),
    defineField({
      name: 'submissionDate',
      title: 'Submission Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    }),
    defineField({
      name: 'approvalDate',
      title: 'Approval Date',
      type: 'datetime'
    }),
    defineField({
      name: 'adminNotes',
      title: 'Admin Notes',
      type: 'text',
      rows: 3,
      description: 'Internal notes for review and approval process'
    }),
    defineField({
      name: 'ipAddress',
      title: 'Submission IP Address',
      type: 'string',
      readOnly: true,
      description: 'For security and spam prevention'
    }),
    defineField({
      name: 'userAgent',
      title: 'User Agent',
      type: 'string',
      readOnly: true,
      description: 'Browser/device information for analytics'
    })
  ],
  preview: {
    select: {
      title: 'author',
      subtitle: 'content',
      media: 'isApproved'
    },
    prepare(selection) {
      const { title, subtitle, media } = selection
      return {
        title: title,
        subtitle: `${subtitle?.slice(0, 60)}...`,
        media: media ? '✅' : '⏳'
      }
    }
  },
  orderings: [
    {
      title: 'Submission Date (Newest First)',
      name: 'submissionDateDesc',
      by: [{ field: 'submissionDate', direction: 'desc' }]
    },
    {
      title: 'Approval Status',
      name: 'approvalStatus',
      by: [{ field: 'isApproved', direction: 'desc' }, { field: 'submissionDate', direction: 'desc' }]
    }
  ]
})