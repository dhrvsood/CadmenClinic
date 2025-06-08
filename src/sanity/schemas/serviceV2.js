export default {
  name: 'serviceV2',
  title: 'Service V2',
  type: 'document',
  fields: [
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        { type: 'heroSection' }, 
        { type: 'heroSectionV2' }, 
        { type: 'benefitsSection' }, 
        { type: 'beforeAfterSection' }, 
        { type: 'whatAreLipFillersSection' }, 
        { type: 'ourProcessSection' }, 
        { type: 'affordableBotoxSection' }, 
        { type: 'areasInteractiveSection' }, 
        { type: 'botoxResultsSection' }, 
        { type: 'learnMore' }, 
        { type: 'isSafeSection' }, 
        { type: 'isBotoxRightSection' }, 
        { type: 'appointmentSection' }, 
        { type: 'ageGroupsSection' },
        { type: 'chooseBotoxSection' },
        { type: 'understandingRisksSection' },
        { type: 'avoidBotoxSection' },
        { type: 'safetyMeasuresSection' },
        { type: 'botoxMythsSection' },
        { type: 'patientGuidelinesSection' },
        { type: 'faqSection' },
        { type: 'contactSection' },
        { type: 'joinClubSection' },

        
      ],
      // validation: (Rule) => Rule.required()
    },
    {
      name: 'nav',
      title: 'Include in navigation?',
      type: 'boolean',
      initialValue: true
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(1)
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: (Rule) => Rule.required()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
      max: 1,
      validation: (Rule) => Rule.required()
    },
    {
      name: 'categoryOrder',
      title: 'Category Order',
      type: 'number',
      validation: (Rule) => Rule.required().integer().min(1)
    },
    {
      name: 'serviceId',
      title: 'Service ID',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      options: {
        maxLength: 70
      },
      validation: (Rule) => Rule.required().max(70)
    },
    {
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'string',
      options: {
        maxLength: 165
      },
      validation: (Rule) => Rule.required().max(165)
    },
    {
      name: 'seoImage',
      title: 'SEO Image',
      type: 'image'
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage'
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    }
  }
}
