import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'websiteContent',
  title: 'Website Content',
  type: 'document',
  icon: () => '📝',
  fields: [
    defineField({
      name: 'section',
      title: 'Content Section',
      type: 'string',
      options: {
        list: [
          { title: 'Navigation', value: 'navigation' },
          { title: 'Footer', value: 'footer' },
          { title: 'Hero Section', value: 'hero' },
          { title: 'About Section', value: 'about' },
          { title: 'Contact Info', value: 'contact' },
          { title: 'Social Media', value: 'social' },
          { title: 'Download Links', value: 'download' },
          { title: 'Company Info', value: 'company' }
        ]
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'title',
      title: 'Content Title',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string'
        },
        {
          name: 'subHeading',
          title: 'Sub Heading',
          type: 'string'
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text'
        },
        {
          name: 'buttonText',
          title: 'Button Text',
          type: 'string'
        },
        {
          name: 'buttonLink',
          title: 'Button Link',
          type: 'string'
        },
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true
          }
        },
        {
          name: 'links',
          title: 'Links',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'text', title: 'Link Text', type: 'string' },
              { name: 'url', title: 'URL', type: 'string' },
              { name: 'icon', title: 'Icon Name', type: 'string' },
              { name: 'external', title: 'External Link', type: 'boolean', initialValue: false }
            ]
          }]
        },
        {
          name: 'socialLinks',
          title: 'Social Media Links',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'platform', title: 'Platform', type: 'string' },
              { name: 'url', title: 'URL', type: 'string' },
              { name: 'icon', title: 'Icon Name', type: 'string' }
            ]
          }]
        },
        {
          name: 'contactInfo',
          title: 'Contact Information',
          type: 'object',
          fields: [
            { name: 'email', title: 'Email', type: 'string' },
            { name: 'phone', title: 'Phone', type: 'string' },
            { name: 'address', title: 'Address', type: 'text' },
            { name: 'workingHours', title: 'Working Hours', type: 'string' }
          ]
        },
        {
          name: 'downloadLinks',
          title: 'Download Links',
          type: 'object',
          fields: [
            { name: 'playStoreUrl', title: 'Google Play Store URL', type: 'string' },
            { name: 'appStoreUrl', title: 'Apple App Store URL', type: 'string' },
            { name: 'playStoreAvailable', title: 'Play Store Available', type: 'boolean', initialValue: true },
            { name: 'appStoreAvailable', title: 'App Store Available', type: 'boolean', initialValue: false }
          ]
        },
        {
          name: 'companyInfo',
          title: 'Company Information',
          type: 'object',
          fields: [
            { name: 'name', title: 'Company Name', type: 'string' },
            { name: 'tagline', title: 'Tagline', type: 'string' },
            { name: 'logo', title: 'Logo', type: 'image' },
            { name: 'foundedYear', title: 'Founded Year', type: 'number' },
            { name: 'location', title: 'Location', type: 'string' },
            { name: 'mission', title: 'Mission Statement', type: 'text' },
            { name: 'vision', title: 'Vision Statement', type: 'text' }
          ]
        }
      ]
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      initialValue: true
    })
  ],
  orderings: [
    {
      title: 'Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }]
    },
    {
      title: 'Section',
      name: 'sectionAsc',
      by: [{ field: 'section', direction: 'asc' }]
    }
  ],
  preview: {
    select: {
      title: 'title',
      section: 'section',
      order: 'order'
    },
    prepare(selection) {
      const { title, section, order } = selection
      return {
        title: title,
        subtitle: `${section} - Order: ${order}`
      }
    }
  }
})