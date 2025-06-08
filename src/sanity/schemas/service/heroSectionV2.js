export default {
    name: 'heroSectionV2',
    title: 'Hero Section V2',
    type: 'document',
    fields: [
        {
          name: 'pricing',
          title: 'Pricing',
          type: 'object',
          fields: [
            { name: 'price', title: 'Price', type: 'number' },
            { name: 'unit', title: 'Unit', type: 'string', description: 'E.g., "treatment"' },
            { name: 'promoBadge', title: 'Promo Badge', type: 'string', description: 'E.g., "new patients deal"' }
          ]
        },
        {
          name: 'title',
          title: 'Title',
          type: 'array',
          of: [
            {
              type: 'block',
              styles: [],
              lists: [],
              marks: {
                decorators: [
                  { title: 'Strong', value: 'strong' },
                  { title: 'Emphasis', value: 'em' },
                ],
                annotations: []
              }
            }
          ]
        },
        {
          name: 'subTitle',
          title: 'Subtitle',
          type: 'text',
          description: "Continue a longer title here."
        },
        {
          name: 'backgroundImage',
          title: 'Large Background Image',
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', title: 'Alt Text', type: 'string', validation: (Rule) => Rule.required() }
          ],
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'mobileBackgroundImage',
          title: 'Mobile Background Image',
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', title: 'Alt Text', type: 'string', validation: (Rule) => Rule.required() }
          ]
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          description: 'E.g., "Youthful Skin", "Discover smoother, more youthful-looking skin..."'
        },
        {
          name: 'cta',
          title: 'Call To Action',
          type: 'object',
          fields: [
            { name: 'text', title: 'Button Text', type: 'string' },
            { name: 'link', title: 'Button Link', type: 'string' }
          ]
        },
        {
          name: 'reviews',
          title: 'Reviews',
          type: 'object',
          fields: [
            { name: 'rating', title: 'Rating', type: 'number', validation: (Rule) => Rule.min(0).max(5) },
            { name: 'reviewCount', title: 'Review Count', type: 'string' }
          ]
        }
      ]
    };