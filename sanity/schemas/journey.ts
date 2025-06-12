import { defineType } from 'sanity';

export const journeySchema = defineType({
  name: 'journey',
  title: 'Journey Milestone',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'year',
      title: 'Year',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'month',
      title: 'Month',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Lucide icon name (e.g., "rocket", "users", "building2")',
      validation: Rule => Rule.required()
    },
    {
      name: 'achievements',
      title: 'Key Achievements',
      type: 'array',
      of: [{ type: 'string' }],
      validation: Rule => Rule.required().min(1).max(5)
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: Rule => Rule.required()
    },
    {
      name: 'isPublished',
      title: 'Published',
      type: 'boolean',
      initialValue: true
    }
  ],
  orderings: [
    {
      title: 'Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }]
    },
    {
      title: 'Date',
      name: 'dateDesc',
      by: [
        { field: 'year', direction: 'desc' },
        { field: 'month', direction: 'desc' }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      year: 'year',
      month: 'month'
    },
    prepare(selection) {
      const { title, year, month } = selection;
      return {
        title: title,
        subtitle: `${month} ${year}`
      };
    }
  }
});