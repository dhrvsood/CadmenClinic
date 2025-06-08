export default {
  name: 'servicelanding',
  title: 'Service Landing',
  type: 'document',
  fields: [
    {
      name: 'nav',
      title: 'Include in navigation?',
      type: 'boolean',
      initialValue: false
    },
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
      name: 'top1',
      title: 'Service Top Text 1',
      type: 'string',
      validation: (Rule) => Rule.required().min(1)
    },
    {
      name: 'top2',
      title: 'Service Top Text 2',
      type: 'string',
      validation: (Rule) => Rule.required().min(1)
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
      name: 'serviceSlug',
      title: 'Service Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: (Rule) => Rule.required()
    },
    {
      name: 'categoryOrder',
      title: 'Category Order',
      type: 'number',
      validation: (Rule) => Rule.required().integer().min(1)
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
      name: 'comparisonTitle',
      title: 'Comparison Title',
      type: 'string',
    },
    {
      name: 'subTitle',
      title: 'Sub Title',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'promo',
      title: 'Promo',
      type: 'string'
    },
    {
      name: 'discountText',
      title: 'Discount Text',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'regularPrice',
      title: 'Regular Price',
      type: 'number',
      validation: (Rule) => Rule.required().integer()
    },
    {
      name: 'discountPrice',
      title: 'Discount Price',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'per',
      title: 'Per [Item]',
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
      name: 'featureText',
      title: 'Feature Text',
      type: 'blockContent',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'howItWorks',
      title: 'How it works',
      type: 'blockContent',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required()
    },
    {
      name: 'conditions',
      title: 'Conditions',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'condition' } }],
      validation: (Rule) => Rule.required()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
      max: 1,
      validation: (Rule) => Rule.required()
    },
    {
      name: 'categoryString',
      title: 'Category String',
      type: 'string',
      validation: (Rule) => Rule.required()
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
                      name: 'firstPrice',
                      type: 'number',
                      title: 'First-time Price',
                      validation: (Rule) =>
                        Rule.custom((price) =>
                          (price * 100) % 1 === 0
                            ? true
                            : 'First-time Price should have 2 decimal precision'
                        )
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
      name: 'showResults',
      title: 'Show Results',
      type: 'boolean',
      description: 'Toggle to show or hide the results'
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
      name: 'useFlex',
      title: 'useFlex',
      type: 'boolean',
      description: 'Use flex box for feature/before after section'
    },
    {
      name: 'flexWidth',
      title: 'Flex Width',
      type: 'number',
      description: 'Pixels for before after width if flex box is used'
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
