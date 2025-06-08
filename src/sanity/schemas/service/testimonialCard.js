export default {
    name: 'testimonialCard',
    title: 'Testimonial Card',
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'E.g., "Gina\'s Results"'
      },
      {
        name: 'resultDescription',
        title: 'Result Description',
        type: 'string',
        description: 'E.g., "After two weeks with lip fillers"'
      },
      {
        name: 'testimonialImage',
        title: 'Testimonial Image',
        type: 'image',
        options: { hotspot: true },
        fields: [
          { name: 'alt', title: 'Alt Text', type: 'string', validation: (Rule) => Rule.required() }
        ]
      },
      {
        name: 'clientName',
        title: 'Client Name',
        type: 'string',
        description: 'E.g., "Anna Johnson"'
      },
      {
        name: 'insta',
        title: 'Instagram',
        type: 'string',
        description: 'E.g., "@annajohnson"'
      },
    ]
  };
  