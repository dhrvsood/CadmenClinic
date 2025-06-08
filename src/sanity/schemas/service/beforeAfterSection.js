export default {
    name: 'beforeAfterSection',
    title: 'Before & After Section',
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'Section Title',
        type: 'string'
      },
      {
        name: 'highlightedText',
        title: 'Highlighted Text',
        type: 'string',
        description: 'e.g., "After',
        validation: (Rule) => Rule.required()
      },
      {
        name: 'description',
        title: 'Section Description',
        type: 'text'
      },
      {
        name: 'testimonials',
        title: 'Testimonials',
        type: 'array',
        of: [{ type: 'testimonialCard' }]
      },
      {
        name: 'act',
        title: 'Act Button',
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
          title: `${title || ''} ${subtitle || ''}`.trim()
        };
      }
    }
  };
  