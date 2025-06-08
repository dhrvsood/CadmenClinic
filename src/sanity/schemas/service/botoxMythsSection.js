export default {
    name: 'botoxMythsSection',
    title: 'Botox Myths Explained',
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'Section Title',
        type: 'string',
        description: 'Main title for the myths section',
        validation: (Rule) => Rule.required()
      },
      {
        name: 'cards',
        title: 'Myth Cards',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Card Title',
                type: 'string',
                description: 'Title of the myth (e.g., "Myth 1")',
                validation: (Rule) => Rule.required()
              },
              {
                name: 'fact',
                title: 'Fact',
                type: 'text',
                description: 'A short subtitle for the myth card'
              },
            ]
          }
        ],
        description: 'A list of cards explaining common myths about lip fillers.'
      }
    ]
  };
  