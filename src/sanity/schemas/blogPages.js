export default {
    name: 'blogpages',
    title: 'Blog Pages',
    type: 'document',
    fields: [
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 165
            },
            validation: (Rule) => Rule.required()
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required().min(1)
        },
        {
            name: 'seoTitle',
            title: 'SEO Title',
            type: 'string',
            options: {
                maxLength: 165
            },
            validation: (Rule) => Rule.required().max(165)
        },
        {
            name: 'seoDescription',
            title: 'SEO Description',
            type: 'string',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [
                {
                    type: 'block',
                },
                { 
                    type: 'image', 
                    options: { 
                      hotspot: true 
                    }, 
                    fields: [
                      {
                        name: 'alt',
                        type: 'string',
                        title: 'Alt Text'
                      },
                      {
                        title: 'Size',
                        name: 'size',
                        type: 'string',
                        validation: (Rule) => Rule.required(),
                        options: {
                          list: [
                            { title: 'Small', value: 'sm' },
                            { title: 'Medium', value: 'md' },
                            { title: 'XL', value: 'xl' },
                          ],
                        }
                      },
                      {
                        title: 'Display',
                        name: 'display',
                        type: 'string',
                        validation: (Rule) => Rule.required(),
                        options: {
                          list: [
                            { title: 'Inline-Left', value: 'inline-left' },
                            { title: 'Inline-Right', value: 'inline-right' },
                            { title: 'Left', value: 'left' },
                            { title: 'Right', value: 'right' },
                            { title: 'Center', value: 'center' },
                          ],
                        }
                      }
                    ]
                  },
            ],
        },
        {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        },
        {
            name: 'heroImage',
            title: 'Hero image',
            type: 'image',
            validation: (Rule) => Rule.required(),
            options: {
                hotspot: true
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alt Text'
                }
            ]
        },
        {
            name: 'faqs',
            title: 'FAQs',
            type: 'array',
            // validation: (Rule) => Rule.va,
            of: [
              {
                type: 'object',
                fields: [
                  {
                    name: 'question',
                    title: 'Question',
                    type: 'string'
                  },
                  {
                    name: 'answer',
                    title: 'Answer',
                    type: 'text'
                  }
                ]
              }
            ]
        },
        {
            name: 'relatedBlogs',
            title: 'Related Posts',
            type: 'array',
            of: [
              { type: 'reference', to: [{ type: 'blogpages' }] },
            ],
        },      
    ],
}
