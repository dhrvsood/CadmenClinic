export default {
  name: 'botoxpages',
  title: 'Botox Pages',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(1)
    },
    {
      name: 'subtitle',
      title: 'Sub Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(1)
    },
    {
      title: 'Service Reference',
      name: 'serviceReference',
      type: 'reference',
      to: [{type: 'service'}],
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
          name: 'description',
          title: 'description',
          type: 'string',
        },
        {
          name: 'packages',
          title: 'Packages',
          type: 'array',
          validation: (Rule) => Rule.required(),
          of: [
            {
              type: 'object',
              title: 'Package Section',
              fields: [
                {
                  name: 'title',
                  type: 'string',
                  title: 'Package Title'
                },
                {
                  name: 'measurementUnit',
                  title: 'Unit of Measurement',
                  type: 'string'
                },
                {
                  name: 'packageItems',
                  type: 'array',
                  title: 'Package',
                  of: [
                    {
                      type: 'object',
                      title: 'Item',
                      fields: [
                        {
                          name: 'name',
                          type: 'string',
                          title: 'Name'
                        },
                        {
                          name: 'standardPrice',
                          type: 'number',
                          title: 'Standard Price',
                          validation: (Rule) =>
                            Rule.custom((price) =>
                              (price * 100) % 1 === 0
                                ? true
                                : 'Standard Price should have 2 decimal precision'
                            )
                        },
                        {
                          name: 'memberPrice',
                          type: 'number',
                          title: 'Member Price',
                          validation: (Rule) =>
                            Rule.custom((price) =>
                              (price * 100) % 1 === 0
                                ? true
                                : 'Standard Price should have 2 decimal precision'
                            )
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: 'packagesImage',
          title: 'Pricing Companion image',
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
