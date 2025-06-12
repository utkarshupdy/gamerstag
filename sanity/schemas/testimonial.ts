import { defineType, defineField } from 'sanity'

export const testimonialSchema = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'content',
      title: 'Testimonial Content',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'author',
      title: 'Author Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'authorPosition',
      title: 'Author Position',
      type: 'string'
    }),
    defineField({
      name: 'authorCompany',
      title: 'Author Company',
      type: 'string'
    }),
    defineField({
      name: 'authorImage',
      title: 'Author Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: Rule => Rule.min(1).max(5)
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Gaming', value: 'gaming' },
          { title: 'Platform', value: 'platform' },
          { title: 'Community', value: 'community' },
          { title: 'Features', value: 'features' },
          { title: 'General', value: 'general' }
        ]
      }
    }),
    defineField({
      name: 'isVerified',
      title: 'Verified Testimonial',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submitted Date',
      type: 'datetime'
    })
  ],
  preview: {
    select: {
      title: 'author',
      subtitle: 'authorPosition',
      media: 'authorImage',
      content: 'content'
    },
    prepare(selection) {
      const { title, subtitle, content } = selection
      return {
        title,
        subtitle: subtitle || 'No position',
        description: content ? `${content.substring(0, 100)}...` : ''
      }
    }
  }
})