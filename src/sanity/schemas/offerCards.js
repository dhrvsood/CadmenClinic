export default {
  title: 'Offer Cards',
  name: 'offerCards',
  type: 'document',
  fields: [
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image'
    },
    {
      name: 'service',
      title: 'Service',
      type: 'string',
    },
    {
      name: 'percentOff',
      title: 'Percent Off',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string',
    },
    {
      name: 'unitText',
      title: 'Unit Text',
      type: 'string',
    },
    {
      name: 'priceFrom',
      title: 'Price From',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'serviceId',
      title: 'Service ID',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
  ]
}
