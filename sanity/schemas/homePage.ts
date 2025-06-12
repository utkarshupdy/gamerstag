import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  icon: () => '🏠',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {
          name: 'mainHeading',
          title: 'Main Heading',
          type: 'string'
        },
        {
          name: 'subHeading',
          title: 'Sub Heading',
          type: 'text'
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text'
        },
        {
          name: 'primaryButton',
          title: 'Primary Button',
          type: 'object',
          fields: [
            { name: 'text', title: 'Button Text', type: 'string' },
            { name: 'link', title: 'Button Link', type: 'string' }
          ]
        },
        {
          name: 'secondaryButton',
          title: 'Secondary Button',
          type: 'object',
          fields: [
            { name: 'text', title: 'Button Text', type: 'string' },
            { name: 'link', title: 'Button Link', type: 'string' }
          ]
        }
      ]
    }),
    defineField({
      name: 'featuresSection',
      title: 'Core Features Section',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Section Heading',
          type: 'string'
        },
        {
          name: 'description',
          title: 'Section Description',
          type: 'text'
        },
        {
          name: 'features',
          title: 'Features',
          type: 'array',
          of: [{ type: 'reference', to: [{ type: 'feature' }] }]
        }
      ]
    }),
    defineField({
      name: 'problemsSolvedSection',
      title: 'Problems Solved Section',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Section Heading',
          type: 'string'
        },
        {
          name: 'description',
          title: 'Section Description',
          type: 'text'
        },
        {
          name: 'problems',
          title: 'Problems',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'title', title: 'Problem Title', type: 'string' },
              { name: 'description', title: 'Problem Description', type: 'text' },
              { name: 'icon', title: 'Icon Name', type: 'string' },
              { name: 'featureReference', title: 'Related Feature', type: 'reference', to: [{ type: 'feature' }] }
            ]
          }]
        }
      ]
    }),
    defineField({
      name: 'benefitsSection',
      title: 'Core Benefits Section',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Section Heading',
          type: 'string'
        },
        {
          name: 'description',
          title: 'Section Description',
          type: 'text'
        },
        {
          name: 'benefits',
          title: 'Benefits',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'title', title: 'Benefit Title', type: 'string' },
              { name: 'description', title: 'Benefit Description', type: 'text' },
              { name: 'icon', title: 'Icon Name', type: 'string' },
              { name: 'featureReference', title: 'Related Feature', type: 'reference', to: [{ type: 'feature' }] }
            ]
          }]
        }
      ]
    }),
    defineField({
      name: 'subFeaturesSection',
      title: 'Sub Features Section',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Section Heading',
          type: 'string'
        },
        {
          name: 'description',
          title: 'Section Description',
          type: 'text'
        },
        {
          name: 'subFeatures',
          title: 'Sub Features',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'title', title: 'Sub Feature Title', type: 'string' },
              { name: 'description', title: 'Sub Feature Description', type: 'text' },
              { name: 'featureReference', title: 'Related Feature', type: 'reference', to: [{ type: 'feature' }] }
            ]
          }]
        }
      ]
    }),
    defineField({
      name: 'teamSection',
      title: 'Team Section',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Section Heading',
          type: 'string'
        },
        {
          name: 'description',
          title: 'Section Description',
          type: 'text'
        },
        {
          name: 'viewAllLink',
          title: 'View All Button Link',
          type: 'string'
        }
      ]
    }),
    defineField({
      name: 'testimonialsSection',
      title: 'Testimonials Section',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Section Heading',
          type: 'string'
        },
        {
          name: 'description',
          title: 'Section Description',
          type: 'text'
        },
        {
          name: 'viewAllLink',
          title: 'View All Button Link',
          type: 'string'
        }
      ]
    }),
    defineField({
      name: 'gallerySection',
      title: 'Gallery Section',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Section Heading',
          type: 'string'
        },
        {
          name: 'description',
          title: 'Section Description',
          type: 'text'
        },
        {
          name: 'viewAllLink',
          title: 'View All Button Link',
          type: 'string'
        }
      ]
    }),
    defineField({
      name: 'newsSection',
      title: 'News Section',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Section Heading',
          type: 'string'
        },
        {
          name: 'description',
          title: 'Section Description',
          type: 'text'
        },
        {
          name: 'viewAllLink',
          title: 'View All Button Link',
          type: 'string'
        }
      ]
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          validation: (Rule) => Rule.max(60)
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          validation: (Rule) => Rule.max(160)
        },
        {
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          of: [{ type: 'string' }]
        },
        {
          name: 'ogImage',
          title: 'Open Graph Image',
          type: 'image'
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