import { defineType, defineField } from 'sanity'

export const blogPostSchema = defineType({
  name: 'blogPost',
  title: 'Blog Post',
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
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image' }
      ]
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string'
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Gaming News', value: 'gaming-news' },
          { title: 'Esports', value: 'esports' },
          { title: 'Industry Updates', value: 'industry' },
          { title: 'Product Updates', value: 'product' },
          { title: 'Tutorials', value: 'tutorials' },
          { title: 'Company News', value: 'company' }
        ]
      }
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string'
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'isPublished',
      title: 'Published',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime'
    })
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author',
      media: 'featuredImage'
    },
    prepare(selection) {
      const { title, author } = selection
      return {
        title,
        subtitle: author ? `by ${author}` : 'No author'
      }
    }
  }
})