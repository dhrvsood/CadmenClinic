export default {
    name: 'learnMore',
    title: 'Learn More Section',
    type: 'object',
    fields: [
      {
        name: 'titleStart',
        title: 'Title Start',
        type: 'string',
        description: 'The beginning of the title (e.g., "Want to learn more about if")',
        validation: (Rule) => Rule.required()
      },
      {
        name: 'highlightedText',
        title: 'Highlighted Text',
        type: 'string',
        description: 'The highlighted part of the title (e.g., "Lip Fillers is right")',
        validation: (Rule) => Rule.required()
      },
      {
        name: 'titleEnd',
        title: 'Title End',
        type: 'string',
        description: 'The ending of the title (e.g., "for you?")',
        validation: (Rule) => Rule.required()
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        description: 'Additional text, e.g., "Schedule a Consultation with Our Team to discuss a treatment plan tailored to you."'
      },
      {
        name: 'cta',
        title: 'Call To Action',
        type: 'object',
        fields: [
          {
            name: 'text',
            title: 'CTA Text',
            type: 'string',
            initialValue: 'Book Now'
          },
          {
            name: 'link',
            title: 'CTA Link',
            type: 'url'
          }
        ]
      }
    ]
  };
  