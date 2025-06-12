import { defineType, defineField } from 'sanity'

export const navigationSchema = defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Navigation Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'menuItems',
      title: 'Menu Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: Rule => Rule.required()
            }),
            defineField({
              name: 'href',
              title: 'URL/Path',
              type: 'string',
              validation: Rule => Rule.required()
            }),
            defineField({
              name: 'isExternal',
              title: 'External Link',
              type: 'boolean',
              initialValue: false
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              description: 'Lucide React icon name'
            }),
            defineField({
              name: 'submenu',
              title: 'Submenu Items',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'label',
                      title: 'Label',
                      type: 'string'
                    }),
                    defineField({
                      name: 'href',
                      title: 'URL/Path',
                      type: 'string'
                    }),
                    defineField({
                      name: 'description',
                      title: 'Description',
                      type: 'text',
                      rows: 2
                    })
                  ]
                }
              ]
            })
          ]
        }
      ]
    })
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
})