import { defineType, defineField } from 'sanity'

export const incubatorSchema = defineType({
  name: 'incubator',
  title: 'Incubator',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Incubator Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4
    }),
    defineField({
      name: 'website',
      title: 'Website URL',
      type: 'url'
    }),
    defineField({
      name: 'partnership',
      title: 'Partnership Details',
      type: 'object',
      fields: [
        defineField({
          name: 'startDate',
          title: 'Partnership Start Date',
          type: 'date'
        }),
        defineField({
          name: 'status',
          title: 'Partnership Status',
          type: 'string',
          options: {
            list: [
              { title: 'Active', value: 'active' },
              { title: 'Completed', value: 'completed' },
              { title: 'In Progress', value: 'in-progress' }
            ]
          }
        }),
        defineField({
          name: 'benefits',
          title: 'Partnership Benefits',
          type: 'array',
          of: [{ type: 'string' }]
        }),
        defineField({
          name: 'achievements',
          title: 'Key Achievements',
          type: 'array',
          of: [{ type: 'string' }]
        })
      ]
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string'
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Tech Accelerator', value: 'tech-accelerator' },
          { title: 'Gaming Focused', value: 'gaming' },
          { title: 'Startup Incubator', value: 'startup' },
          { title: 'Corporate Program', value: 'corporate' }
        ]
      }
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
      subtitle: 'partnership.status',
      media: 'logo'
    }
  }
})