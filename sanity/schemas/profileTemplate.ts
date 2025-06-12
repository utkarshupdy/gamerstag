import { defineType, defineField } from 'sanity'

export const profileTemplateSchema = defineType({
  name: 'profileTemplate',
  title: 'Profile Templates',
  type: 'document',
  fields: [
    defineField({
      name: 'templateId',
      title: 'Template ID',
      type: 'string',
      description: 'Unique identifier for this template',
      options: {
        list: [
          { title: 'Profile Template A (Comprehensive)', value: 'template-a' },
          { title: 'Profile Template B (Mentor Profile)', value: 'template-b' },
          { title: 'Profile Template C (Minimal)', value: 'template-c' }
        ]
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'name',
      title: 'Template Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Description of this template and its features'
    }),
    defineField({
      name: 'features',
      title: 'Template Features',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of features included in this template'
    }),
    defineField({
      name: 'isActive',
      title: 'Active Template',
      type: 'boolean',
      description: 'Enable this template for team member selection',
      initialValue: true
    }),
    defineField({
      name: 'sortOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Order in template selection dropdown',
      initialValue: 10
    })
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'templateId',
      isActive: 'isActive'
    },
    prepare(selection) {
      const { title, subtitle, isActive } = selection
      const status = !isActive ? ' (INACTIVE)' : ''
      return {
        title: title + status,
        subtitle: subtitle?.toUpperCase()
      }
    }
  }
})