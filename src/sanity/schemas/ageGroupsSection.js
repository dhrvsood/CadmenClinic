export default {
  name: 'ageGroupsSection',
  title: 'Age Groups Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        {
          name: 'beforeHighlight',
          title: 'Text Before Highlight',
          type: 'string',
          description: 'e.g., "Lip Fillers for Different"',
          validation: Rule => Rule.required()
        },
        {
          name: 'highlight',
          title: 'Highlighted Text',
          type: 'string',
          description: 'e.g., "Age Groups:"',
          validation: Rule => Rule.required()
        },
        {
          name: 'afterHighlight',
          title: 'Text After Highlight',
          type: 'string',
          description: 'e.g., "When Should You Start?"'
        }
      ],
      description: 'Main title split into 3 parts with highlighted middle text'
    },
    {
      name: 'description',
      title: 'Intro Paragraph',
      type: 'text',
      description: 'Introductory paragraph before toggled content',
      validation: Rule => Rule.required()
    },
    {
      name: 'boxTitle',
      title: 'Box Title',
      type: 'string',
      description: 'When’s the Best Time for You to Start?'
    },
    {
      name: 'boxDescription',
      title: 'Box Description',
      type: 'text',
      description: 'Supporting sentence'
    },
    {
      name: 'ageOptions',
      title: 'Age Groups',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'years',
              title: 'Label (Years)',
              type: 'string',
              description: 'e.g., "20 years", "30 years"',
              validation: Rule => Rule.required()
            },
            {
              name: 'selected',
              title: 'Default Selected',
              type: 'boolean',
              description: 'Mark this as the default selected pill'
            },
            {
              name: 'title',
              title: 'Card Title',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'description',
              title: 'Card Description',
              type: 'text',
              validation: Rule => Rule.required()
            },
            {
              name: 'items',
              title: 'Bullet Items',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'title',
                      title: 'Item Title',
                      type: 'string'
                    },
                    {
                      name: 'description',
                      title: 'Item Description',
                      type: 'text'
                    }
                  ]
                }
              ],
              description: 'Grouped bullet points under each card'
            }
          ]
        }
      ],
      description: 'All age groups and their respective content cards'
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
        title: parts.join(' ') || 'Untitled Age Groups Section'
      };
    }
  }
};
