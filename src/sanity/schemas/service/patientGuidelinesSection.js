export default {
    name: 'patientGuidelinesSection',
    title: 'Patient Guidelines Section',
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'Section Title',
        type: 'object',
        fields: [
          {
            name: 'textBefore',
            title: 'Text Before Highlight',
            type: 'string',
            description: 'E.g., "Patient"',
            validation: (Rule) => Rule.required()
          },
          {
            name: 'highlightedText',
            title: 'Highlighted Text',
            type: 'string',
            description: 'E.g., "Guidelines"',
            validation: (Rule) => Rule.required()
          },
          {
            name: 'textAfter',
            title: 'Text After',
            type: 'string',
            description: 'text after, e.g., "Essential Information for a Successful Treatment"'
          }
        ],
        description: 'The section title with part of it highlighted'
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        description: 'E.g., "Following aftercare instructions is essential for ensuring safe and long-lasting results. Here are some recommendations:"',
      },
      {
        name: 'cards',
        title: 'Cards',
        type: 'array',
        of: [
          {
            type: 'object',
            title: 'Card',
            fields: [
              {
                name: 'title',
                title: 'Card Title',
                type: 'string',
                validation: (Rule) => Rule.required()
              },
              {
                name: 'titleHighlight',
                title: 'Card Highlight Title',
                type: 'string',
                validation: (Rule) => Rule.required()
              },
              {
                name: 'tips',
                title: 'Tips',
                type: 'array',
                of: [{ type: 'string' }],
                validation: (Rule) => Rule.required().min(1),
                description: 'A list of bullet points shown in the card'
              },
              {
                name: 'icon',
                title: 'Icon Image',
                type: 'image',
                options: { hotspot: true },
                fields: [
                  {
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string',
                  }
                ],
                description: 'Small icon shown above the card title'
              },
            ]
          }
        ]
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
        textBefore: 'title.textBefore',
        highlightedText: 'title.highlightedText',
        textAfter: 'title.textAfter'
      },
      prepare({ textBefore, highlightedText, textAfter }) {
        return {
          title: `${textBefore} ${highlightedText} ${textAfter}`
        };
      }
    },
  };
  