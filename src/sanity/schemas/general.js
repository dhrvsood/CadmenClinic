export default {
  name: 'general',
  title: 'General Terms',
  type: 'document',
  fields: [
    {
      name: 'numReviews',
      title: 'Number of reviews',
      type: 'number',
      validation: (Rule) => Rule.required().integer().min(1)
    },
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: 'object',
          fields: [{
            name: 'text',
            title: 'Text',
            type: 'string',
          }, {
            name: 'person',
            title: 'Person',
            type: 'string',
          }]
        }
      ]
    },
    {
      name: 'testimonialTitle',
      title: 'Testimonial Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'testimonialSubtitle',
      title: 'Testimonial Subtitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
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
      type: 'image'
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
      name: 'beforeAfterImages',
      title: 'Before and After Images',
      type: 'object',
      fields: [
        {
          name: 'images',
          title: 'Images',
          type: 'array',
          of: [
            {
              type: 'image',
              options: { hotspot: true },
              fields: [
                {
                  name: 'alt',
                  title: 'Alternative Text',
                  type: 'string',
                  description:
                    'A short description of the image for accessibility'
                },
                {
                  name: 'category',
                  title: 'Category',
                  type: 'string',
                  description:
                    'Category of the service'
                },
                {
                  name: 'title',
                  title: 'Service Title',
                  type: 'string',
                  description:
                    'Title of the service'
                },
                {
                  name: 'slug',
                  title: 'Service Slug',
                  type: 'string',
                  description:
                    'Slug of the service'
                },
                {
                  name: 'generalTerms',
                  title: 'Include in General Terms?',
                  type: 'boolean',
                  initialValue: false
                },
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'serviceSelectionTitle',
      title: 'Service Selection Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(1)
    },
    {
      name: 'process',
      title: 'Service Selection Process',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: 'object',
          fields: [{
            name: 'step',
            title: 'Step',
            type: 'string',
          }, {
            name: 'name',
            title: 'Name',
            type: 'string',
          }, {
            name: 'description',
            title: 'Description',
            type: 'string',
          }]
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
