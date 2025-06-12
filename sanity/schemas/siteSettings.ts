import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: () => '⚙️',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'logo',
      title: 'Site Logo',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image'
    }),
    defineField({
      name: 'tagline',
      title: 'Site Tagline',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'text'
    }),
    defineField({
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      fields: [
        { name: 'email', title: 'Email', type: 'string' },
        { name: 'phone', title: 'Phone', type: 'string' },
        { name: 'address', title: 'Address', type: 'text' }
      ]
    }),
    defineField({
      name: 'socialMedia',
      title: 'Social Media Links',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'platform', title: 'Platform', type: 'string' },
          { name: 'url', title: 'URL', type: 'string' },
          { name: 'username', title: 'Username', type: 'string' }
        ]
      }]
    }),
    defineField({
      name: 'downloadLinks',
      title: 'App Download Links',
      type: 'object',
      fields: [
        { name: 'playStore', title: 'Google Play Store', type: 'string' },
        { name: 'appStore', title: 'Apple App Store', type: 'string' },
        { name: 'playStoreEnabled', title: 'Play Store Available', type: 'boolean' },
        { name: 'appStoreEnabled', title: 'App Store Available', type: 'boolean' }
      ]
    }),
    defineField({
      name: 'seo',
      title: 'Default SEO Settings',
      type: 'object',
      fields: [
        { name: 'metaTitle', title: 'Default Meta Title', type: 'string' },
        { name: 'metaDescription', title: 'Default Meta Description', type: 'text' },
        { name: 'keywords', title: 'Default Keywords', type: 'array', of: [{ type: 'string' }] },
        { name: 'ogImage', title: 'Default OG Image', type: 'image' }
      ]
    }),
    defineField({
      name: 'maintenance',
      title: 'Maintenance Mode',
      type: 'object',
      fields: [
        { name: 'enabled', title: 'Enable Maintenance Mode', type: 'boolean' },
        { name: 'message', title: 'Maintenance Message', type: 'text' }
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