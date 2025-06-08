export default {
  name: 'serviceareas',
  title: 'Service Areas',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(1)
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: (Rule) => Rule.required()
    },
    {
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      options: {
        maxLength: 70
      },
      validation: (Rule) => Rule.required().max(70)
    },
    {
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'string',
      options: {
        maxLength: 165
      },
      validation: (Rule) => Rule.required().max(165)
    },
    {
      name: 'seoImage',
      title: 'SEO Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'mapUrl',
      title: 'mapUrl',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'heroImage',
      title: 'Hero image',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text'
        }
      ]
    },
    {
      name: 'section1',
      title: 'section 1',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'title',
          type: 'string'
        },
        {
          name: 'content',
          title: 'content',
          type: 'blockContent',
        }
      ]
    },
    {
      name: 'section2',
      title: 'section 2',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'title',
          type: 'string'
        },
        {
          name: 'content',
          title: 'content',
          type: 'blockContent',
        }
      ]
    },
    {
      name: 'section3',
      title: 'section 3',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'title',
          type: 'string'
        },
        {
          name: 'content',
          title: 'content',
          type: 'blockContent',
        }
      ]
    },
    {
      name: 'section4',
      title: 'section 4',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'title',
          type: 'string'
        },
        {
          name: 'content',
          title: 'content',
          type: 'blockContent',
        }
      ]
    },
    {
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'question',
              title: 'Question',
              type: 'string'
            },
            {
              name: 'answer',
              title: 'Answer',
              type: 'text'
            }
          ]
        }
      ]
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage'
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    }
  }
}
