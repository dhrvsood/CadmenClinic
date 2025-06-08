export default {
    name: 'benefitsSection',
    title: 'Benefits Section',
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'e.g., "Benefits of Lip Filler Treatments for a "',
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
        name: 'description',
        title: 'Section Description',
        type: 'text'
      },
      {
        name: 'benefitCards',
        title: 'Benefit Cards',
        type: 'array',
        of: [{ type: 'benefitCard' }]
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
  