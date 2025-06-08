export default {
    name: 'affordableBotoxSection',
    title: 'Affordable Section',
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'Section Title',
        type: 'string',
        description: 'Main title, e.g., "Affordable Lip Fillers Treatments"',
        validation: (Rule) => Rule.required()
      },
      {
        name: 'highlightedText',
        title: 'Highlighted Text',
        type: 'string',
        description: 'Sub title, e.g., "Tailored to You"'
      },
      {
        name: 'description',
        title: 'Section Description',
        type: 'text',
        description: 'A short description for the section'
      },
      {
        name: 'cards',
        title: 'Treatment Cards',
        type: 'array',
        of: [{ type: 'affordableBotoxCardItem' }],
        description: 'List of affordable treatment cards'
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
  