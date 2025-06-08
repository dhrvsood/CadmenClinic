export default {
  
    name: 'contactSection',
    title: 'Contact Section',
    type: 'object',
    fields: [
      {
        name: 'generate',
        title: 'Generate with default data',
        type: 'boolean',
        description: 'If you dont want to change any data'
      },
      {
        name: 'title',
        title: 'Section Title',
        type: 'object',
        fields: [
          {
            name: 'textBefore',
            title: 'Text Before Highlight',
            type: 'string'
          },
          {
            name: 'highlightedText',
            title: 'Highlighted Text',
            type: 'string'
          },
          {
            name: 'textAfter',
            title: 'Text After Highlight',
            type: 'string'
          }
        ]
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text'
      },
      {
        name: 'cards',
        title: 'Contact Cards',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'title', title: 'Title', type: 'string' },
              { name: 'linkTo', title: 'Link To', type: 'string' },
              { name: 'linkText', title: 'Link Text', type: 'string' },
              { name: 'icon', title: 'Icon Path', type: 'string' },
              { name: 'newTab', title: 'Open in New Tab', type: 'boolean' }
            ]
          }
        ]
      },
      {
        name: 'workingHours',
        title: 'Working Hours',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'days', title: 'Days', type: 'string' },
              { name: 'hours', title: 'Hours', type: 'string' }
            ]
          }
        ]
      }
    ],
    preview: {
      prepare() {
      
        return {
          title: 'Contact Section'
        };
      }
    }
  };