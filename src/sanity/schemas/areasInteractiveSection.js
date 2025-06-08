import { useFormValue } from "sanity";

export default {
  name: 'areasInteractiveSection',
  title: 'Areas Interactive Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description:
        'The header title, e.g., "What can Lip Fillers Help With"',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'highlightedText',
      title: 'Highlighted Text',
      type: 'string',
      description:
        'Highlighted Text, e.g., Help With',
      hidden: ({parent}) => !parent?.interactiveImage
    },
    {
      name: 'interactiveImage',
      title: 'Use Interactive Image Dots',
      type: 'boolean'
    },
    {
      name: 'pills',
      title: 'Interactive Pills',
      type: 'array',
      hidden: ({parent}) => parent?.interactiveImage,
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Pill Text',
              type: 'string',
              description: 'Text displayed on the pill',
              validation: (Rule) => Rule.required()
            },
            {
              name: 'content',
              title: 'Description',
              type: 'text',
              description: 'Description displayed on the pill',
              validation: (Rule) => Rule.required()
            },
            {
              name: 'selected',
              title: 'Default Selected',
              type: 'boolean',
              description:
                'Indicates if this pill is the default selected one',
              initialValue: false
            }
          ]
        }
      ],
      description:
        'List of pills that allow users to select which area they want to view details for'
    },
    {
      name: 'pillsWithImage',
      title: 'Interactive Pills',
      type: 'array',
      hidden: ({parent}) => !parent?.interactiveImage,
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Pill Text',
              type: 'string',
              description: 'Text displayed on the pill',
              validation: (Rule) => Rule.required()
            },
            {
              name: 'content',
              title: 'Description',
              type: 'text',
              description: 'Description displayed on the pill',
              validation: (Rule) => Rule.required()
            },
            {
              name: 'left',
              title: 'From Left',
              type: 'number',
              description: 'Percentage from the left side of the image',
              validation: (Rule) => Rule.required()
            },
            {
              name: 'top',
              title: 'From Top',
              type: 'number',
              description: 'Percentage from the top side of the image',
              validation: (Rule) => Rule.required()
            },
            {
              name: 'selected',
              title: 'Default Selected',
              type: 'boolean',
              description:
                'Indicates if this pill is the default selected one',
              initialValue: false
            }
          ]
        }
      ],
      description:
        'List of pills that allow users to select which area they want to view details for'
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
};
