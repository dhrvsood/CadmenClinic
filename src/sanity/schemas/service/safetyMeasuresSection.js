export default {
    name: 'safetyMeasuresSection',
    title: 'Safety Measures Section',
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'object',
        fields: [
          {
            name: 'textBefore',
            title: 'Text Before Highlight',
            type: 'string',
            description: 'e.g., "Safety Measures"',
            validation: (Rule) => Rule.required()
          },
          {
            name: 'highlightedText',
            title: 'Highlighted Text',
            type: 'string',
            description: 'The highlighted part, e.g., "for Your Treatment"',
            validation: (Rule) => Rule.required()
          },
          {
            name: 'textAfter',
            title: 'Text After Highlight',
            type: 'string',
            description: 'e.g., "Safety Measures"',
            validation: (Rule) => Rule.required()
          },
        ],
        description: 'Title with a portion highlighted'
      },
      {
        name: 'cards',
        title: 'Safety Measure Cards',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'image',
                title: 'Image',
                type: 'image',
                options: { hotspot: true },
                fields: [
                  {
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string',
                    validation: (Rule) => Rule.required()
                  }
                ],
                description: 'Image representing the safety measure'
              },
              {
                name: 'title',
                title: 'Card Title',
                type: 'string',
                description: 'e.g., "Certified Providers"',
                validation: (Rule) => Rule.required()
              },
              {
                name: 'description',
                title: 'Card Description',
                type: 'string',
                description: 'A brief description of this safety measure',
                validation: (Rule) => Rule.required()
              }
            ]
          }
        ],
        description: 'List of safety measure cards'
      }
    ],
    preview: {
      select: {
        textBefore: 'title.textBefore',
        highlightedText: 'title.highlightedText',
        textAfter: 'title.textAfter'
      },
      prepare({ textBefore, highlightedText, textAfter }) {
        return {
          title: `${textBefore} ${highlightedText} ${textAfter}`
        };
      }
    },
  };
  