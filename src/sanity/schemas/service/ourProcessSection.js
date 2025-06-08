export default {
    name: 'ourProcessSection',
    title: 'Our Process Section',
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'Section Title',
        type: 'string',
        description: 'e.g., "Our Lip Fillers Process"',
        validation: (Rule) => Rule.required()
      },
      {
        name: 'highlightedText',
        title: 'Highlighted Text',
        type: 'string',
        description: 'e.g., "Radiant, Confident You',
        validation: (Rule) => Rule.required()
      },
      {
        name: 'intro',
        title: 'Introduction',
        type: 'text',
        description: 'A brief introduction to the process'
      },
      {
        name: 'steps',
        title: 'Process Steps',
        type: 'array',
        of: [{ type: 'processStep' }],
        description: 'List of process steps'
      },
      {
        name: 'button',
        title: 'Book now',
        type: 'object',
        fields: [
          { name: 'text', title: 'Button Text', type: 'string' },
          { name: 'link', title: 'Button Link', type: 'url' }
        ]
      },
    ],
    preview: {
      select: {
        title: 'title',
        subtitle: 'highlightedText'
      },
      prepare(selection) {
        const { title, subtitle } = selection;
        return {
          title: title + ' ' + subtitle,
        };
      }
    }
  };
  