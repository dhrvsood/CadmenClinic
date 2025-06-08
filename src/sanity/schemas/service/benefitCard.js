
export default {
    name: 'benefitCard',
    title: 'Benefit Card',
    type: 'object',
    fields: [
      {
        name: 'cardImage',
        title: 'Card Image',
        type: 'image',
        options: { hotspot: true },
        fields: [
          { name: 'alt', title: 'Alt Text', type: 'string', validation: (Rule) => Rule.required() }
        ]
      },
      {
        name: 'icon',
        title: 'Icon',
        type: 'string'
      },
      {
        name: 'title',
        title: 'Card Title - Strong',
        type: 'string'
      },
      {
        name: 'titleNormal',
        title: 'Card Title',
        type: 'string'
      },
      {
        name: 'supportingText',
        title: 'Supporting Text',
        type: 'text'
      }
    ]
  };
  