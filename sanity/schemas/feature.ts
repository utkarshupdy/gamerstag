import { defineType, defineField } from 'sanity'

export const featureSchema = defineType({
  name: 'feature',
  title: 'Feature',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Feature Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'subtitle',
      title: 'Feature Subtitle',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 2
    }),
    defineField({
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Lucide React icon name (e.g., "GamepadIcon", "UsersIcon")'
    }),
    defineField({
      name: 'image',
      title: 'Feature Image',
      type: 'image',
      options: {
        hotspot: true
      }
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
      name: 'category',
      title: 'Feature Category',
      type: 'string',
      options: {
        list: [
          { title: 'Gaming Profile', value: 'gaming-profile' },
          { title: 'Social', value: 'social' },
          { title: 'Analytics', value: 'analytics' },
          { title: 'Marketplace', value: 'marketplace' },
          { title: 'News', value: 'news' },
          { title: 'Jobs', value: 'jobs' },
          { title: 'Community', value: 'community' }
        ]
      }
    }),
    defineField({
      name: 'isComingSoon',
      title: 'Coming Soon',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      name: 'isPremium',
      title: 'Premium Feature',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
      description: 'Lower numbers appear first'
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image'
    }
  }
})