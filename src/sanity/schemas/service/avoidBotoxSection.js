export default {
    name: 'avoidBotoxSection',
    title: 'Avoid Botox Section',
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'e.g., "Who Should Avoid"',
        validation: (Rule) => Rule.required()
      },
      {
        name: 'highlightedText',
        title: 'Highlighted Text',
        type: 'string',
        description: 'e.g., "Lip Fillers"',
        validation: (Rule) => Rule.required()
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        description: 'e.g., "Lip Fillers"',
        validation: (Rule) => Rule.required()
      },
      {
        name: 'cards',
        title: 'Cards',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Card Title',
                type: 'string',
                description: 'Title of the card (e.g., a condition that may contraindicate fillers)',
                validation: (Rule) => Rule.required()
              },
              {
                name: 'image',
                title: 'Card Image',
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
                description: 'An image representing this card'
              },
              {
                name: 'content',
                title: 'Content',
                type: 'array',
                of: [{ type: 'string' }],
                description: 'A list of strings for the card content',
              },
              {
                name: 'description',
                title: 'Description',
                type: 'string',
                description: 'Additional description for the card',
              }
            ]
          }
        ],
        description: 'List of cards describing who should avoid lip fillers'
      }
    ],
    preview: {
      select: {
        title: 'title',
        subtitle: 'highlightedText'
      },
      prepare(selection) {
        const { title, subtitle } = selection;
        return {
          title: `${title || ''} ${subtitle || ''}`.trim()
        };
      }
    }
  };
  