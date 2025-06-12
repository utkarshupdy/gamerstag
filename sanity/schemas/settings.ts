import { defineType, defineField } from 'sanity'

export const settingsSchema = defineType({
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'logo',
      title: 'Site Logo',
      type: 'image'
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image'
    }),
    defineField({
      name: 'socialMedia',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        defineField({
          name: 'twitter',
          title: 'Twitter URL',
          type: 'url'
        }),
        defineField({
          name: 'linkedin',
          title: 'LinkedIn URL',
          type: 'url'
        }),
        defineField({
          name: 'discord',
          title: 'Discord URL',
          type: 'url'
        }),
        defineField({
          name: 'youtube',
          title: 'YouTube URL',
          type: 'url'
        }),
        defineField({
          name: 'instagram',
          title: 'Instagram URL',
          type: 'url'
        })
      ]
    }),
    defineField({
      name: 'contact',
      title: 'Contact Information',
      type: 'object',
      fields: [
        defineField({
          name: 'email',
          title: 'Contact Email',
          type: 'email'
        }),
        defineField({
          name: 'phone',
          title: 'Phone Number',
          type: 'string'
        }),
        defineField({
          name: 'address',
          title: 'Address',
          type: 'text',
          rows: 3
        })
      ]
    }),
    defineField({
      name: 'seo',
      title: 'Default SEO Settings',
      type: 'object',
      fields: [
        defineField({
          name: 'metaTitle',
          title: 'Default Meta Title',
          type: 'string'
        }),
        defineField({
          name: 'metaDescription',
          title: 'Default Meta Description',
          type: 'text',
          rows: 3
        }),
        defineField({
          name: 'keywords',
          title: 'Default Keywords',
          type: 'array',
          of: [{ type: 'string' }]
        }),
        defineField({
          name: 'ogImage',
          title: 'Default Open Graph Image',
          type: 'image'
        })
      ]
    })
  ],
  preview: {
    select: {
      title: 'title',
      media: 'logo'
    }
  }
})