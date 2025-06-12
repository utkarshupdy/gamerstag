import { defineType, defineField } from 'sanity'
import { Newspaper } from 'lucide-react'

export const newsSchema = defineType({
  name: 'news',
  title: 'News Articles',
  type: 'document',
  icon: Newspaper,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required().max(90).warning('Keep title under 90 characters for optimal display')
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
      name: 'featuredImage',
      title: 'Featured Image (16:9 Aspect Ratio)',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required().max(750).warning('Keep description under 750 words for optimal reading')
    }),
    defineField({
      name: 'content',
      title: 'Full Content',
      type: 'blockContent'
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Gaming News', value: 'gaming' },
          { title: 'Esports', value: 'esports' },
          { title: 'Technology', value: 'technology' },
          { title: 'Industry Updates', value: 'industry' },
          { title: 'Community', value: 'community' },
          { title: 'Product Updates', value: 'product' },
          { title: 'Announcements', value: 'announcements' }
        ]
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    }),
    defineField({
      name: 'source',
      title: 'News Source',
      type: 'object',
      fields: [
        {
          name: 'name',
          title: 'Source Name',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'url',
          title: 'Source URL',
          type: 'url',
          validation: Rule => Rule.required()
        },
        {
          name: 'logo',
          title: 'Source Logo',
          type: 'image'
        }
      ],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string'
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'featured',
      title: 'Featured Article',
      type: 'boolean',
      description: 'Mark as featured to highlight in news listings'
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description (SEO)',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.max(160).warning('Keep meta description under 160 characters for SEO')
    }),
    defineField({
      name: 'metaKeywords',
      title: 'Meta Keywords (SEO)',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    }),
    defineField({
      name: 'readTime',
      title: 'Estimated Read Time (minutes)',
      type: 'number',
      validation: Rule => Rule.min(1).max(60)
    })
  ],
  preview: {
    select: {
      title: 'title',
      media: 'featuredImage',
      category: 'category',
      publishedAt: 'publishedAt'
    },
    prepare(selection) {
      const { title, media, category, publishedAt } = selection
      return {
        title,
        subtitle: `${category?.toUpperCase()} - ${new Date(publishedAt).toLocaleDateString()}`,
        media
      }
    }
  },
  orderings: [
    {
      title: 'Published Date (Newest First)',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }]
    },
    {
      title: 'Published Date (Oldest First)',
      name: 'publishedAtAsc',
      by: [{ field: 'publishedAt', direction: 'asc' }]
    },
    {
      title: 'Title A-Z',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }]
    }
  ]
})