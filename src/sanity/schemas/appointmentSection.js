export default {
    name: 'appointmentSection',
    title: 'Appointment Section',
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'Title Block',
        type: 'object',
        fields: [
          {
            name: 'beforeHighlight',
            title: 'Text Before Highlight',
            type: 'string',
            description: 'Text before the highlighted part, e.g., "Preparing for Your"',
          },
          {
            name: 'highlight',
            title: 'Highlighted Text',
            type: 'string',
            description: 'Text to highlight, e.g., "Lip Filler Appointment"',
          },
          {
            name: 'afterHighlight',
            title: 'Text After Highlight',
            type: 'string',
            description: 'Text after the highlighted part, optional',
          }
        ]
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        description: 'A short paragraph explaining the section'
      },
      {
        name: 'tips',
        title: 'Preparation Tips',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Tip Title',
                type: 'string',
                description: 'e.g., "Avoid Blood Thinners"',
              },
              {
                name: 'description',
                title: 'Tip Description',
                type: 'text',
                description:
                  'Detailed explanation (e.g., "Avoid aspirin and fish oil before treatment to minimize bruising.")'
              }
            ]
          }
        ],
        description: 'List of preparation tips with titles and details'
      },
      {
        name: 'lipFillerAppointmentLeftImage',
        title: 'Appointment Left Image',
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
        description: 'Optional background image for the section'
      },
      {
        name: 'lipFillerAppointmentRightImage',
        title: 'Appointment Right Image',
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
        description: 'Optional background image for the section'
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
        before: 'title.beforeHighlight',
        highlight: 'title.highlight',
        after: 'title.afterHighlight'
      },
      prepare({ before, highlight, after }) {
        const parts = [before, highlight, after].filter(Boolean);
        return {
          title: parts.join(' ') || 'Untitled Title Block'
        };
      }
    }
  };
  