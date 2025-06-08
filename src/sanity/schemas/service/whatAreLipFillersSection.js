export default {
    name: 'whatAreLipFillersSection',
    title: 'What Are Lip Fillers Section',
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'Section Title',
        type: 'string',
        description: 'The main heading for the section (e.g., "What Are Lip Fillers?")',
        validation: (Rule) => Rule.required()
      },
      {
        name: 'highlightedText',
        title: 'Highlighted Text',
        type: 'string',
        description: 'E.g., "What Are Lip Fillers"',
        validation: (Rule) => Rule.required()
      },
      {
        name: 'intro',
        title: 'Introduction',
        type: 'text',
        description: 'A brief introductory text for the section.'
      },
      {
        name: 'subtitle',
        title: 'Subtitle',
        type: 'string',
        description: 'subtitle (e.g., "Science Behind Lip Fillers")',
        validation: (Rule) => Rule.required()
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        description: 'description (e.g., "Lip fillers are FDA-approved and trusted...")',
        validation: (Rule) => Rule.required()
      },
      {
        name: 'keyPointsTitle',
        title: 'Key Points Ttile',
        type: 'string',
        description: 'Key Points Ttile (e.g., "Here’s how they work:")',
        validation: (Rule) => Rule.required()
      },
      {
        name: 'keyPoints',
        title: 'Key Points',
        type: 'array',
        of: [
          {
            type: 'object',
            name: 'point',
            fields: [
              {
                name: 'title',
                title: 'Title',
                type: 'string',
                validation: Rule => Rule.required()
              },
              {
                name: 'description',
                title: 'Description',
                type: 'text',
                rows: 3,
                validation: Rule => Rule.required()
              }
            ]
          }
        ],
        description: 'Bullet points highlighting the main takeaways about lip fillers.'
      },
      {
        name: 'footerText',
        title: 'Footer Text',
        type: 'text',
        description: 'description (e.g., "Lip fillers offer a safe, versatile solution for...")',
        validation: (Rule) => Rule.required()
      },
      {
        name: 'image',
        title: 'Section Image',
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
        description: 'An optional image that illustrates the concept.'
      },
      {
        name: 'act',
        title: 'Act Button',
        type: 'object',
        fields: [
          { name: 'text', title: 'Button Text', type: 'string' }
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
          title: `${subtitle || ''} ${title || ''}`.trim()
        };
      }
    }
  };
  