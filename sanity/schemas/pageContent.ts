import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'pageContent',
  title: 'Page Content',
  type: 'document',
  icon: () => '📄',
  fields: [
    defineField({
      name: 'page',
      title: 'Page',
      type: 'string',
      options: {
        list: [
          { title: 'Home', value: 'home' },
          { title: 'About', value: 'about' },
          { title: 'Team', value: 'team' },
          { title: 'Gallery', value: 'gallery' },
          { title: 'Testimonials', value: 'testimonials' },
          { title: 'Contact', value: 'contact' },
          { title: 'Journey', value: 'journey' },
          { title: 'Mentors', value: 'mentors' },
          { title: 'Incubators', value: 'incubators' },
          { title: 'News', value: 'news' },
          { title: 'App Updates', value: 'app-updates' }
        ]
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'sectionName',
      title: 'Section Name',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'string'
    }),
    defineField({
      name: 'subHeading',
      title: 'Sub Heading',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text'
    }),
    defineField({
      name: 'content',
      title: 'Rich Content',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true }
        }
      ]
    }),
    defineField({
      name: 'ctaButton',
      title: 'Call-to-Action Button',
      type: 'object',
      fields: [
        { name: 'text', title: 'Button Text', type: 'string' },
        { name: 'link', title: 'Button Link', type: 'string' },
        { name: 'style', title: 'Button Style', type: 'string', options: {
          list: [
            { title: 'Primary', value: 'primary' },
            { title: 'Secondary', value: 'secondary' },
            { title: 'Gaming', value: 'gaming' }
          ]
        }}
      ]
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      initialValue: 0
    }),
    defineField({
      name: 'isVisible',
      title: 'Is Visible',
      type: 'boolean',
      initialValue: true
    })
  ],
  orderings: [
    {
      title: 'Page & Order',
      name: 'pageAndOrder',
      by: [
        { field: 'page', direction: 'asc' },
        { field: 'displayOrder', direction: 'asc' }
      ]
    }
  ],
  preview: {
    select: {
      title: 'sectionName',
      subtitle: 'page',
      order: 'displayOrder'
    },
    prepare(selection) {
      const { title, subtitle, order } = selection
      return {
        title: title,
        subtitle: `${subtitle} page - Order: ${order}`
      }
    }
  }
})