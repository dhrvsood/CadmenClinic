export default {
    name: 'understandingRisksSection',
    title: 'Understanding the Risks Section',
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
            description: 'e.g., "Understanding the Risks"',
            validation: (Rule) => Rule.required()
          },
          {
            name: 'highlightedText',
            title: 'Highlighted Text',
            type: 'string',
            description: 'e.g., "of Lip Fillers"',
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
        description: 'Section title split into parts for custom styling'
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        description: 'A short description of the risks associated with lip fillers',
        validation: (Rule) => Rule.required()
      },
      {
        name: 'riskCards',
        title: 'Risk Cards',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Card Title',
                type: 'string',
                description: 'Title of the risk card',
                validation: (Rule) => Rule.required()
              },
              {
                name: 'descriptions',
                title: 'Descriptions',
                type: 'array',
                of: [{ type: 'string' }],
                description: 'A list of risk descriptions (each as a string)',
                validation: (Rule) => Rule.required()
              },
              {
                name: 'backgroundImage',
                title: 'Background Image',
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
                description: 'Background image for the risk card'
              }
            ]
          }
        ],
        description:
          'An array of risk cards, each with a title, risk descriptions, and a background image'
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
  