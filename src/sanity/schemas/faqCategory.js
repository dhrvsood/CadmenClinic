export default {
  name: 'faqCategory',
  title: 'FAQ Category',
  type: 'document',
  fields: [
    {
      name: 'category',
      title: 'Category',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'category',
        maxLength: 96
      }
    }
  ]
}
