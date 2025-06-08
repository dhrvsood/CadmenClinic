export default {
    name: 'faqSection',
    title: 'FAQ Section',
    type: 'object',
    fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          description: 'E.g., "Frequently Asked"',
          validation: (Rule) => Rule.required()
        },
        {
          name: 'highlightedText',
          title: 'Highlighted Text',
          type: 'string',
          description: 'E.g., "Questions"',
          validation: (Rule) => Rule.required()
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          description: 'E.g., "Visit our Lip Filler FAQ for answers to more common ..."',
        },
      {
        name: 'items',
        title: 'FAQ Items',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'question',
                title: 'Question',
                type: 'string',
                description: 'The FAQ question',
                validation: (Rule) => Rule.required()
              },
              {
                name: 'answer',
                title: 'Answer',
                type: 'text',
                description: 'The detailed answer (rich text)',
                validation: (Rule) => Rule.required()
              }
            ]
          }
        ],
        description: 'A list of frequently asked questions and their answers'
      }
    ]
  };
  