export default {
    name: 'isBotoxRightSection',
    title: 'Is Botox Right For You - Section',
    type: 'object',
    fields: [
      {
        name: 'text',
        title: 'Main Text',
        type: 'string',
        description: 'e.g., "Are Lip Fillers Right"',
        validation: (Rule) => Rule.required()
      },
      {
        name: 'highlightedText',
        title: 'Highlighted Text',
        type: 'string',
        description: 'e.g., "for You?" (Styled differently)',
        validation: (Rule) => Rule.required()
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        description:
          'A short paragraph explaining the purpose of this section'
      },
    {
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Card',
          fields: [
            {
              name: 'title',
              title: 'Card Title',
              type: 'string',
              validation: (Rule) => Rule.required()
            },
            {
              name: 'description',
              title: 'Card Description',
              type: 'text',
              rows: 4,
              validation: (Rule) => Rule.required()
            },
            {
              name: 'icon',
              title: 'Icon Image',
              type: 'image',
              options: { hotspot: true },
              fields: [
                {
                  name: 'alt',
                  title: 'Alt Text',
                  type: 'string',
                }
              ],
              description: 'Small icon shown above the card title'
            },
            {
              name: 'image',
              title: 'Main Card Image',
              type: 'image',
              options: { hotspot: true },
              fields: [
                {
                  name: 'alt',
                  title: 'Alt Text',
                  type: 'string',
                }
              ],
              description: 'Main visual image inside the card'
            }
          ]
        }
      ]
    },
    ],
    preview: {
      select: {
        title: 'text',
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