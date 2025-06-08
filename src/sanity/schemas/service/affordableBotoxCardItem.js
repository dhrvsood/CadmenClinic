export default {
    name: 'affordableBotoxCardItem',
    title: 'Affordable Treatment Card',
    type: 'object',
    fields: [
      {
        name: 'brandName',
        title: 'Brand Name',
        type: 'string',
        description: 'e.g., "Revanesse", "RHA Collection", etc.',
        validation: (Rule) => Rule.required()
      },
      {
        name: 'discountedPrice',
        title: 'Discounted Price',
        type: 'number',
        description: 'The discounted price value'
      },
      {
        name: 'unitText',
        title: 'Unit Text',
        type: 'string',
        description: 'e.g., "/Unit member price"'
      },
      {
        name: 'regularPrice',
        title: 'Regular Price',
        type: 'number',
        description: 'The regular price value'
      },
      {
        name: 'regularPriceUnit',
        title: 'Regular Price Unit',
        type: 'string',
        description: 'e.g., "/Per unit"'
      },
      {
        name: 'regularPriceLabel',
        title: 'Regular Price Label',
        type: 'string',
        description: 'e.g., "regular price"'
      },
      {
        name: 'items',
        title: 'Card Items',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Item Title',
                type: 'string',
                description: 'e.g., "Enhanced Lip Definition"',
                validation: (Rule) => Rule.required()
              },
              {
                name: 'description',
                title: 'Item Description',
                type: 'text',
                description: 'Detailed description of the feature'
              },
            ]
          }
        ]
      }
    ],
    preview: {
      select: {
        title: 'brandName',
      }
    }
  };
  