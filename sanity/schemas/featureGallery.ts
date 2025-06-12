import { defineField, defineType } from 'sanity'

export const featureGallerySchema = defineType({
  name: 'featureGallery',
  title: 'Feature Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'featureKey',
      title: 'Feature Key',
      type: 'string',
      options: {
        list: [
          { title: 'Pro Gaming Profile', value: 'pro-gaming-profile' },
          { title: 'Next-Gen Gaming Onboarding', value: 'next-gen-onboarding' },
          { title: 'GACCOUNTS', value: 'gaccounts' },
          { title: 'GCONNECT', value: 'gconnect' },
          { title: 'GT Chats', value: 'gt-chats' },
          { title: 'GT Jobs', value: 'gt-jobs' },
          { title: 'GT Hire', value: 'gt-hire' },
          { title: 'GT News', value: 'gt-news' },
          { title: 'Creator Voice', value: 'creator-voice' },
          { title: 'GT Card', value: 'gt-card' },
          { title: 'GT UI/UX', value: 'gt-ui-ux' },
          { title: 'GT Sound', value: 'gt-sound' }
        ]
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'type',
      title: 'Content Type',
      type: 'string',
      options: {
        list: [
          { title: 'Image', value: 'image' },
          { title: 'Video', value: 'video' }
        ]
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'media',
      title: 'Media File',
      type: 'image',
      options: {
        hotspot: true
      },
      hidden: ({ document }) => document?.type === 'video'
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      hidden: ({ document }) => document?.type === 'image'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'platform',
      title: 'Social Platform',
      type: 'string',
      options: {
        list: [
          { title: 'Instagram', value: 'instagram' },
          { title: 'Twitter', value: 'twitter' },
          { title: 'YouTube', value: 'youtube' },
          { title: 'TikTok', value: 'tiktok' },
          { title: 'LinkedIn', value: 'linkedin' },
          { title: 'Facebook', value: 'facebook' },
          { title: 'Other', value: 'other' }
        ]
      }
    }),
    defineField({
      name: 'externalUrl',
      title: 'External URL',
      type: 'url',
      description: 'Link to the original post'
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
      description: 'Show this item prominently in the gallery'
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    })
  ],
  preview: {
    select: {
      title: 'title',
      featureKey: 'featureKey',
      media: 'media',
      type: 'type'
    },
    prepare(selection) {
      const { title, featureKey, media, type } = selection
      return {
        title: title,
        subtitle: `${featureKey} - ${type}`,
        media: media
      }
    }
  },
  orderings: [
    {
      title: 'Published Date, New',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }]
    },
    {
      title: 'Feature',
      name: 'featureKey',
      by: [{ field: 'featureKey', direction: 'asc' }]
    }
  ]
})