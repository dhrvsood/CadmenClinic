export default {
    name: 'afterTreatmentSection',
    title: 'After Treatment Section',
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'object',
        fields: [
          {
            name: 'textBefore',
            title: 'Text Before Highlight',
            type: 'string',
            description: 'e.g., "What to Expect"',
            validation: (Rule) => Rule.required()
          },
          {
            name: 'highlightedText',
            title: 'Highlighted Text',
            type: 'string',
            description: 'e.g., "During and After"',
            validation: (Rule) => Rule.required()
          },
          {
            name: 'textAfter',
            title: 'Text After Highlight',
            type: 'string',
            description: 'e.g., "Your Lip Filler Treatment"',
            validation: (Rule) => Rule.required()
          }
        ],
        description: 'Title with a styled highlight in the middle'
      },
      {
        name: 'treatmentSteps',
        title: 'Treatment Steps',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'stepTitle',
                title: 'Step Title',
                type: 'string',
                description: 'e.g., "During the Procedure" or "Post-Treatment Care"',
                validation: (Rule) => Rule.required()
              },
              {
                name: 'items',
                title: 'Step Details',
                type: 'array',
                of: [
                  {
                    type: 'object',
                    fields: [
                      {
                        name: 'title',
                        title: 'Title',
                        type: 'string',
                        description: 'Short tip title, e.g., "Numbing Options"',
                        validation: (Rule) => Rule.required()
                      },
                      {
                        name: 'description',
                        title: 'Description',
                        type: 'text',
                        description: 'Details of the step',
                        validation: (Rule) => Rule.required()
                      },
                    ]
                  }
                ]
              }
            ]
          }
        ],
        description: 'Steps covering during and after treatment care'
      },
      {
        name: 'backgroundImage',
        title: 'Background Image',
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
      }
    ]
  };
  