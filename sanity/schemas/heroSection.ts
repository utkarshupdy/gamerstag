import { defineType, defineField } from 'sanity'

export const heroSectionSchema = defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'object',
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'subheadline',
      title: 'Subheadline',
      type: 'text',
      rows: 2
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4
    }),
    defineField({
      name: 'ctaText',
      title: 'Call to Action Text',
      type: 'string'
    }),
    defineField({
      name: 'ctaLink',
      title: 'Call to Action Link',
      type: 'string'
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'backgroundVideo',
      title: 'Background Video URL',
      type: 'url'
    }),
    defineField({
      name: 'variant',
      title: 'Hero Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Default', value: 'default' },
          { title: 'Gaming', value: 'gaming' },
          { title: 'Cyberpunk', value: 'cyberpunk' },
          { title: 'Minimal', value: 'minimal' }
        ]
      },
      initialValue: 'default'
    })
  ],
  preview: {
    select: {
      title: 'headline',
      subtitle: 'subheadline',
      media: 'backgroundImage'
    }
  }
})