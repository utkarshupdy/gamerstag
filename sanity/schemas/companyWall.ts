import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'companyWall',
  title: 'Company Wall',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'template',
      title: 'Template Layout',
      type: 'string',
      options: {
        list: [
          {title: 'Left Aligned', value: 'left'},
          {title: 'Right Aligned', value: 'right'},
          {title: 'Center Aligned', value: 'center'},
          {title: 'Left Aligned (Alt)', value: 'left-alt'}
        ]
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'primaryButton',
      title: 'Primary Button',
      type: 'object',
      fields: [
        defineField({
          name: 'text',
          title: 'Button Text',
          type: 'string'
        }),
        defineField({
          name: 'link',
          title: 'Button Link',
          type: 'url'
        })
      ]
    }),
    defineField({
      name: 'secondaryButton',
      title: 'Secondary Button (Optional)',
      type: 'object',
      fields: [
        defineField({
          name: 'text',
          title: 'Button Text',
          type: 'string'
        }),
        defineField({
          name: 'link',
          title: 'Button Link',
          type: 'url'
        })
      ]
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Display this item prominently'
    }),
    defineField({
      name: 'priority',
      title: 'Priority',
      type: 'number',
      description: 'Higher numbers appear first',
      validation: Rule => Rule.min(0).max(100)
    })
  ],
  preview: {
    select: {
      title: 'title',
      media: 'featuredImage',
      template: 'template'
    },
    prepare(selection) {
      const {title, media, template} = selection
      return {
        title,
        subtitle: `Template: ${template}`,
        media
      }
    }
  },
  orderings: [
    {
      title: 'Priority, Newest first',
      name: 'priorityDesc',
      by: [
        {field: 'priority', direction: 'desc'},
        {field: 'publishedAt', direction: 'desc'}
      ]
    }
  ]
})