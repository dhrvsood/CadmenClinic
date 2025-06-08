export default {
  name: 'reviews',
  type: 'document',
  title: 'Reviews',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image'
    },
    {
      name: 'content',
      type: 'text',
      title: 'Content'
    }
  ]
}
