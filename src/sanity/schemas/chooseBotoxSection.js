export default {
  name: 'chooseBotoxSection',
  title: 'Choose Botox Section',
  type: 'object',
  fields: [
    {
      name: 'contentBlocks',
      title: 'Content Blocks',
      type: 'array',
      of: [
        {
          name: 'contentBlock',
          title: 'Content Block',
          type: 'object',
          fields: [
            {
              name: 'icon',
              title: 'Layered Icon',
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
              description: 'Layered icon (e.g., checkSvg3.svg)'
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              description: 'e.g., "Why Clients Trust ImageLab Medspa"',
              validation: (Rule) => Rule.required()
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              description: 'Paragraph describing why clients choose ImageLab Medspa'
            },
            {
              name: 'benefits',
              title: 'Benefits',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'title',
                      title: 'Benefit Title',
                      type: 'string',
                      description: 'e.g., "Experienced Team"'
                    },
                    {
                      name: 'description',
                      title: 'Benefit Description',
                      type: 'text',
                      description:
                        'Detailed explanation (e.g., "Years of experience in lip augmentation ensure customized, precise results.")'
                    }
                  ]
                }
              ],
              description: 'List of preparation tips with titles and details'
            },
            {
              name: 'mainImage',
              title: 'Main Image',
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
              description: 'Image accompanying the content block'
            }
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      firstTitle: 'contentBlocks.0.title'
    },
    prepare({ firstTitle }) {
      return {
        title: firstTitle ? firstTitle : 'Choose Botox Section'
      };
    }
  }
};
