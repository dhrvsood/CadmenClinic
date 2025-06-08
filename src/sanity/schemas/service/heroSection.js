export default {
    name: 'heroSection',
    title: 'Hero Section',
    type: 'document',
    fields: [
        {
          name: 'pricing',
          title: 'Pricing',
          type: 'object',
          fields: [
            { name: 'originalPrice', title: 'Original Price', type: 'number' },
            { name: 'discountedPrice', title: 'Discounted Price', type: 'number' },
            { name: 'unit', title: 'Unit', type: 'string', description: 'E.g., "/treatment"' },
            { name: 'promoBadge', title: 'Promo Badge', type: 'string', description: 'E.g., "new patients deal"' }
          ]
        },
        {
          name: 'headline',
          title: 'Headline',
          type: 'string'
        },
        {
          name: 'supportingText',
          title: 'Supporting Text',
          type: 'text'
        },
        {
          name: 'leftImage',
          title: 'Left Image',
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', title: 'Alt Text', type: 'string', validation: (Rule) => Rule.required() }
          ]
        },
        {
          name: 'rightImage',
          title: 'Right Image',
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', title: 'Alt Text', type: 'string', validation: (Rule) => Rule.required() }
          ]
        },
        {
          name: 'captionTags',
          title: 'Caption Tags',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'E.g., "Youthful Skin", "Beauty Enhancement"'
        },
        {
          name: 'cta',
          title: 'Call To Action',
          type: 'object',
          fields: [
            { name: 'text', title: 'Button Text', type: 'string' },
            { name: 'link', title: 'Button Link', type: 'url' }
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