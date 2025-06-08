export default {
  name: 'joinClubSection',
  title: 'Join Club Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'subTitle',
      title: 'Subtitle',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Longer intro/copy under the subtitle',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        { name: 'alt', title: 'Alt Text', type: 'string', validation: (Rule) => Rule.required() }
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'badgeOneText',
      title: 'Badge One Text',
      type: 'string',
      description: 'E.g., “Confidence Boost”',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'badgeTwoText',
      title: 'Badge Two Text',
      type: 'string',
      description: 'E.g., “Smooth Skin”',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'cta',
      title: 'Call To Action',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Button Text',
          type: 'string',
          validation: (Rule) => Rule.required()
        },
        {
          name: 'link',
          title: 'Button Link',
          type: 'string',
        }
      ]
    }
  ]
};
