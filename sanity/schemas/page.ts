import { defineType, defineField } from 'sanity'

export const pageSchema = defineType({
  name: 'page',
  title: 'Pages',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Page Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      description: 'Title that appears in search engines'
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      description: 'Description that appears in search engines',
      rows: 3
    }),
    defineField({
      name: 'seoKeywords',
      title: 'SEO Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Keywords for SEO optimization'
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Image for social media sharing'
    }),
    defineField({
      name: 'content',
      title: 'Page Content',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image' },
        { type: 'heroSection' },
        { type: 'feature' },
        { type: 'teamMember' },
        { type: 'testimonial' }
      ]
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
      slug: 'slug.current',
      media: 'ogImage'
    },
    prepare(selection) {
      const { title, slug } = selection
      return {
        title,
        subtitle: slug ? `/${slug}` : 'No slug'
      }
    }
  }
})