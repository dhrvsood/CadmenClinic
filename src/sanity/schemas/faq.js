export default {
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    {
      name: 'question',
      title: 'Question',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'question',
        maxLength: 96
      }
    },
    {
      name: 'answer',
      title: 'Answer',
      type: 'text'
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'faqCategory'}]
    }
  ]
}
