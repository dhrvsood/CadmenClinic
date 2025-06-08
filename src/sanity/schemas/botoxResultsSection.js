export default {
  name: 'botoxResultsSection',
  title: 'Results Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Header Title',
      type: 'string',
      description: 'e.g., "Factors That Affect How Long Lip Filler Results Last?"',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'highlightedText',
      title: 'Highlighted Text',
      type: 'string',
      description: 'Highlighted sub-title, e.g., "Help With"'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Description'
    },
    {
      name: 'selectPills',
      title: 'Select Pills',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Pill Text',
              type: 'string',
              description: 'e.g., "Metabolism"',
              validation: (Rule) => Rule.required()
            },
            {
              name: 'selected',
              title: 'Default Selected',
              type: 'boolean',
              initialValue: false
            },
          {  
            name: 'content',
            title: 'Card content',
            type: 'object',
            fields: [
            {
              name: 'title',
              title: 'Card Title',
              type: 'string',
              description: 'Title shown in result card'
            },
            {
              name: 'description',
              title: 'Card Description',
              type: 'text',
              description: 'Text shown in the BotoxResultCard'
            },
            {
              name: 'icon',
              title: 'Icon (Optional)',
              type: 'image',
              options: { hotspot: true }
            },
            {
              name: 'image',
              title: 'Main Image (Optional)',
              type: 'image',
              options: { hotspot: true }
            }
          ]
          }
          ]
        }
      ],
      description: 'Pills used for selecting a result type'
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'highlightedText'
    },
    prepare({ title, subtitle }) {
      return {
        title: `${title || ''} ${subtitle || ''}`.trim()
      };
    }
  }
};
