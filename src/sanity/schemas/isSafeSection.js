export default {
  name: 'isSafeSection',
  title: 'Is Safe Section',
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
      name: 'subHeading',
      title: 'Subheading',
      type: 'string',
      description: 'Supporting text (e.g., "Addressing Common Concerns")'
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
        }
      ],
      description: 'Optional image to display in the section'
    },
    {
      name: 'briefDescription',
      title: 'Brief Description',
      type: 'text',
      description: 'A short summary of safety concerns'
    },
    {
      name: 'sideEffectsBlock',
      title: 'Side Effects Block',
      type: 'object',
      fields: [
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
          description: 'Short subheading below the title',
          validation: (Rule) => Rule.required()
        },
        {
          name: 'intro',
          title: 'Intro Paragraph',
          type: 'text',
          description: 'Introductory paragraph under the subtitle'
        },
        {
          name: 'sideEffects',
          title: 'Side Effects',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'Bullet points listing potential side effects'
        },
        {
          name: 'conclusion',
          title: 'Conclusion Text',
          type: 'text',
          description: 'Final paragraph discussing rare risks and provider advice'
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
    }
  ]
};
