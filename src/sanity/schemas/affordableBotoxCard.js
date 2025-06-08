export default {
    name: 'affordableBotoxCard',
    title: 'Affordable Treatment Card',
    type: 'object',
    fields: [
      {
        name: 'brandName',
        title: 'Brand Name',
        type: 'string',
        description: 'e.g., "Revanesse", "RHA Collection", "Restylane Kysse", "Juvederm Collection"',
        validation: (Rule) => Rule.required()
      },
      {
        name: 'registration',
        title: 'Registration Symbol',
        type: 'string',
        description: 'Optional, e.g., "®"'
      },
      {
        name: 'label',
        title: 'Label',
        type: 'string',
        description: 'e.g., "Most Popular"'
      },
      {
        name: 'discountedPrice',
        title: 'Discounted Price',
        type: 'number',
        description: 'Discounted price value'
      },
      {
        name: 'unitText',
        title: 'Unit Text',
        type: 'string',
        description: 'E.g., "/Unit member price"'
      },
      {
        name: 'regularPrice',
        title: 'Regular Price',
        type: 'number',
        description: 'Regular price value'
      },
      {
        name: 'regularPriceUnit',
        title: 'Regular Price Unit',
        type: 'string',
        description: 'E.g., "/Per unit"'
      },
      {
        name: 'regularPriceLabel',
        title: 'Regular Price Label',
        type: 'string',
        description: 'E.g., "regular price"'
      },
      {
        name: 'items',
        title: 'Card Items',
        type: 'array',
        of: [{ type: 'affordableBotoxCardItem' }],
        description: 'List of features or benefits for this card'
      }
    ]
  };
  