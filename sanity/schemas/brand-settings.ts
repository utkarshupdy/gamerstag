import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'brandSettings',
  title: 'Brand Settings',
  type: 'document',
  icon: () => '🎨',
  fields: [
    defineField({
      name: 'title',
      title: 'Settings Name',
      type: 'string',
      initialValue: 'Global Brand Settings',
      readOnly: true,
    }),
    
    // Color Management
    defineField({
      name: 'colors',
      title: 'Brand Colors',
      type: 'object',
      fields: [
        {
          name: 'primary',
          title: 'Primary Brand Color',
          type: 'color',
          description: 'Main brand color (currently red #E5042F)',
          validation: Rule => Rule.required(),
        },
        {
          name: 'white',
          title: 'White/Light Color',
          type: 'color',
          description: 'Primary white/light color for text and backgrounds',
          validation: Rule => Rule.required(),
        },
        {
          name: 'secondary',
          title: 'Secondary Accent Color',
          type: 'color',
          description: 'Secondary brand color (currently cyan)',
        },
        {
          name: 'dark',
          title: 'Dark Color',
          type: 'color',
          description: 'Primary dark color for backgrounds and text',
        },
        {
          name: 'background',
          title: 'Background Color',
          type: 'color',
          description: 'Main background color for the website',
        },
      ],
    }),

    // Typography Management
    defineField({
      name: 'fonts',
      title: 'Typography Settings',
      type: 'object',
      fields: [
        {
          name: 'primary',
          title: 'Primary Font (Headers)',
          type: 'string',
          description: 'Font for headings and brand text (e.g., Orbitron)',
          initialValue: 'Orbitron',
          options: {
            list: [
              { title: 'Orbitron', value: 'Orbitron' },
              { title: 'Space Grotesk', value: 'Space Grotesk' },
              { title: 'Jost', value: 'Jost' },
              { title: 'Inter', value: 'Inter' },
              { title: 'Roboto', value: 'Roboto' },
              { title: 'Poppins', value: 'Poppins' },
              { title: 'Montserrat', value: 'Montserrat' },
              { title: 'Custom', value: 'custom' },
            ],
          },
        },
        {
          name: 'primaryCustom',
          title: 'Custom Primary Font Name',
          type: 'string',
          description: 'Enter custom font name if "Custom" is selected above',
          hidden: ({ parent }) => parent?.primary !== 'custom',
        },
        {
          name: 'secondary',
          title: 'Secondary Font (Navigation & UI)',
          type: 'string',
          description: 'Font for navigation and UI elements',
          initialValue: 'Space Grotesk',
          options: {
            list: [
              { title: 'Space Grotesk', value: 'Space Grotesk' },
              { title: 'Orbitron', value: 'Orbitron' },
              { title: 'Jost', value: 'Jost' },
              { title: 'Inter', value: 'Inter' },
              { title: 'Roboto', value: 'Roboto' },
              { title: 'Custom', value: 'custom' },
            ],
          },
        },
        {
          name: 'secondaryCustom',
          title: 'Custom Secondary Font Name',
          type: 'string',
          description: 'Enter custom font name if "Custom" is selected above',
          hidden: ({ parent }) => parent?.secondary !== 'custom',
        },
        {
          name: 'description',
          title: 'Description Font (Body Text)',
          type: 'string',
          description: 'Font for descriptions, paragraphs, and body text',
          initialValue: 'Jost',
          options: {
            list: [
              { title: 'Jost', value: 'Jost' },
              { title: 'Inter', value: 'Inter' },
              { title: 'Roboto', value: 'Roboto' },
              { title: 'Space Grotesk', value: 'Space Grotesk' },
              { title: 'Poppins', value: 'Poppins' },
              { title: 'Open Sans', value: 'Open Sans' },
              { title: 'Custom', value: 'custom' },
            ],
          },
        },
        {
          name: 'descriptionCustom',
          title: 'Custom Description Font Name',
          type: 'string',
          description: 'Enter custom font name if "Custom" is selected above',
          hidden: ({ parent }) => parent?.description !== 'custom',
        },
        {
          name: 'button',
          title: 'Button Font',
          type: 'string',
          description: 'Font for all button text',
          initialValue: 'Jost',
          options: {
            list: [
              { title: 'Jost', value: 'Jost' },
              { title: 'Orbitron', value: 'Orbitron' },
              { title: 'Space Grotesk', value: 'Space Grotesk' },
              { title: 'Inter', value: 'Inter' },
              { title: 'Roboto', value: 'Roboto' },
              { title: 'Custom', value: 'custom' },
            ],
          },
        },
        {
          name: 'buttonCustom',
          title: 'Custom Button Font Name',
          type: 'string',
          description: 'Enter custom font name if "Custom" is selected above',
          hidden: ({ parent }) => parent?.button !== 'custom',
        },
      ],
    }),

    // Logo Management
    defineField({
      name: 'logos',
      title: 'Logo Assets',
      type: 'object',
      fields: [
        {
          name: 'mainLogo',
          title: 'Main Logo',
          type: 'image',
          description: 'Primary logo used across the website',
          options: {
            hotspot: true,
          },
          validation: Rule => Rule.required(),
        },
        {
          name: 'logoIcon',
          title: 'Logo Icon',
          type: 'image',
          description: 'Icon-only version of the logo',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'logoLight',
          title: 'Light Version Logo',
          type: 'image',
          description: 'Logo version for dark backgrounds',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'logoDark',
          title: 'Dark Version Logo',
          type: 'image',
          description: 'Logo version for light backgrounds',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'favicon',
          title: 'Favicon',
          type: 'image',
          description: 'Browser favicon (32x32px recommended)',
          options: {
            hotspot: true,
          },
        },
      ],
    }),

    // Brand Text
    defineField({
      name: 'brandText',
      title: 'Brand Text',
      type: 'object',
      fields: [
        {
          name: 'name',
          title: 'Brand Name',
          type: 'string',
          description: 'Main brand name',
          initialValue: 'GAMERS TAG',
          validation: Rule => Rule.required(),
        },
        {
          name: 'tagline',
          title: 'Brand Tagline',
          type: 'string',
          description: 'Brand tagline or subtitle',
          initialValue: 'Gaming Super App',
        },
        {
          name: 'description',
          title: 'Brand Description',
          type: 'text',
          description: 'Short brand description for SEO and social media',
          initialValue: 'The world\'s first gaming super app connecting gamers, esports professionals, and gaming companies worldwide.',
        },
      ],
    }),

    // Advanced Settings
    defineField({
      name: 'advanced',
      title: 'Advanced Settings',
      type: 'object',
      fields: [
        {
          name: 'customCSS',
          title: 'Custom CSS',
          type: 'text',
          description: 'Additional CSS for custom styling (use with caution)',
          rows: 10,
        },
        {
          name: 'fontImportURLs',
          title: 'Font Import URLs',
          type: 'array',
          of: [{ type: 'url' }],
          description: 'Google Fonts or custom font URLs to import',
        },
        {
          name: 'enableDarkMode',
          title: 'Enable Dark Mode Toggle',
          type: 'boolean',
          description: 'Allow users to switch between light and dark themes',
          initialValue: true,
        },
      ],
    }),
  ],
  
  preview: {
    select: {
      title: 'title',
      primaryColor: 'colors.primary.hex',
      brandName: 'brandText.name',
    },
    prepare({ title, primaryColor, brandName }) {
      return {
        title: title || 'Brand Settings',
        subtitle: `${brandName || 'GAMERS TAG'} • ${primaryColor || '#E5042F'}`,
      }
    },
  },
})