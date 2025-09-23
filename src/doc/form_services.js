const formServices = [
  // CONSULTATION
  {
    category: 'Consultation',
    icon: '/icons/portrait-icon.svg',
    services: [
      {
        code: 'IC101',
        title: 'Hair Restoration Consultation',
        // description:'Come in for a free consultation to discuss our award-winning hair restoration treatments. Our team has decades of experience in hair loss treatments and consultations – come in and see why over 2,100 clients have trusted for their hair restoration journey!',
        category: 'Consultation',
        notes: '',
        id: '9161df85-ab43-4b81-a5a8-1a5aa8eff1b9',
        price: {
          original: 'free',
          discounted: '',
          percent: ''
        },
        image: '/booking-photos/injectables-consult.webp',
        points: [
          {
            title: 'Customized treatment plan',
            body: "Come in for a free consultation to discuss our award-winning hair restoration treatments. Our team has decades of experience in hair loss treatments and consultations – come in and see why over 2,100 clients have trusted for their hair restoration journey!"
          },
        ],
        duration: '30 mins'
      },
      {
        code: 'GAC101',
        slugs: ['visia-skin-analysis'],
        title: 'General Aesthetic Consultation',
        description:
          'Our general aesthetic consultation includes a computerized skin analysis and medical intake, to tailor treatments that address your specific skincare concerns. Whether you seek rejuvenation, correction, or enhancement, our experts will create a personalized plan to help you achieve your desired look',
        category: 'Consultation',
        notes: '',
        id: '6f0346d5-f8cd-4f89-833e-e7189b854f01',
        price: {
          original: 'free',
          discounted: '',
          percent: ''
        },
        image: '/booking-photos/general-consult.webp',
        points: [
          {
            title: 'Personalized plan',
            body: 'Our general aesthetic consultation includes a computerized skin analysis and medical intake, to tailor treatments that address your specific skincare concerns. Whether you seek rejuvenation, correction, or enhancement, our experts will create a personalized plan to help you achieve your desired look.'
          }
        ],
        duration: '30 mins'
      },
    ]
  },

  // HAIR RESTORATION
  {
    category: 'Hair Restoration',
    icon: '/icons/head-hair-icon.svg',
    services: [
      {
        code: 'S0013',
        slugs: ['prp-hair-restoration'],
        stay: true,
        title: 'PRP Hair Restoration',
        description:
          "Promote new hair growth and achieve thicker, fuller hair using your body's own plasma",
        category: 'Hair Restoration',
        notes: '',
        id: '01864f55-152e-4718-8827-c42f13a1d17d',
        price: {
          original: '$599',
          discounted: '$299 / First Session',
          percent: '50% off'
        },
        image: '/booking-photos/prp.webp',
        points: [
          {
            title: 'Natural hair regrowth with your own platelets',
            body: 'Stimulate hair growth using Platelet-Rich Plasma (PRP) derived from your own blood to rejuvenate hair follicles and promote stronger, thicker hair.'
          },
          {
            title: 'Non-surgical and minimally invasive',
            body: 'This safe, non-invasive treatment targets thinning or balding areas, offering a natural solution for hair restoration with minimal downtime.'
          },
        ],
        duration: '30 mins'
      },
      {
        code: 'S0015',
        slugs: [],
        title: 'Exosome Hair Therapy',
        description:
          'Boost hair regeneration with the combined power of microneedling and exosomes',
        category: 'Hair Restoration',
        notes: '',
        id: '60959f06-e338-4ab4-a1e0-eba10bafc46f',
        price: {
          original: '$799',
          discounted: '$399 / First Session',
          percent: '50% off'
        },
        image: '/booking-photos/mironeedling-exosomes.webp',
        points: [
          {
            title: 'Promote thicker, healthier hair',
            body: 'Exosomes, packed with regenerative proteins, enhance the results of microneedling, encouraging natural hair regrowth and improving scalp health.'
          },
          {
            title: 'Customized, minimally invasive treatment',
            body: 'This non-surgical solution is tailored to your unique needs, helping you achieve stronger, denser hair with minimal downtime and lasting results.'
          },
        ],
        duration: '30 mins'
      },
      {
        code: 'S0014',
        slugs: [],
        title: 'Mesotherapy Vitamins',
        description:
          'Combine microneedling with PRP to enhance hair growth and scalp health',
        category: 'Hair Restoration',
        notes: '',
        id: '06718072-ce12-4c7a-bebc-1465b01df998',
        price: {
          original: '$399',
          discounted: '$199 / First Session',
          percent: '50% off'
        },
        image: '/booking-photos/microneedling-prp.webp',
        points: [
          {
            title: 'Revitalize Your Scalp and Stimulate Growth',
            body: 'Complex blend of amino acids, minerals, vitamins, and co-enzymes to stimulate hair follicle growth.'
          },
          {
            title: 'Non-surgical and minimally invasive',
            body: 'This safe, non-invasive treatment targets thinning or balding areas, offering a natural solution for hair restoration with minimal downtime.'
          },
        ],
        duration: '30 mins'
      },
    ]
  },

  // SKIN TREATMENTS
  {
    category: 'Skin Treatments',
    icon: '/icons/syringe-icon.svg',
    services: [
      // Botox / Dysport
      {
        code: 'botox',
        slugs: ['botox-and-wrinkle-relaxers'],
        title: 'Botox / Dysport',
        description:
          'Soften the appearance of fine lines and wrinkles with our effective neuromodulator treatments',
        category: 'Skin Treatments',
        notes: '',
        id: '3a2b077b-3e98-4f16-9183-8c0cb9aeccfb',
        price: {
          original: '$14.00',
          discounted: '$9.99 / unit',
          percent: '30% off'
        },
        image: '/booking-photos/botox.webp',
        points: [
          {
            title: 'Targeted consultation and evaluation',
            body: 'Our experts will assess your facial anatomy and discuss your aesthetic goals to determine the most suitable neuromodulator for your needs.'
          },
          {
            title: 'Customized treatment for natural results',
            body: 'Whether you want to reduce fine lines, smooth wrinkles, or prevent signs of aging, we’ll create a personalized plan to achieve a refreshed, youthful appearance.'
          },
        ],
        duration: '30 mins'
      },
      // Lip Filler
      {
        code: 'LipFiller',
        slugs: ['lip-filler'],
        title: 'Lip Filler',
        description:
          'Achieve fuller, more defined lips with precise hyaluronic acid-based fillers',
        category: 'Skin Treatments',
        notes: '',
        id: '95122e0f-849d-4e79-9f96-a4e5ae09c48d',
        price: {
          original: '$799',
          discounted: '$599 / Syringe',
          percent: '30% off'
        },
        image: '/booking-photos/lip-filler.webp',
        points: [
          {
            title: 'Enhance lip volume',
            body: 'Achieve fuller, more defined lips with natural-looking results.'
          },
          {
            title: 'Define and shape your lips',
            body: 'Subtle contouring to create beautifully balanced, symmetrical lips that complement your features.'
          },
        ],
        duration: '30 mins'
      },
      // Dermal Filler
      {
        code: 'DermalFiller',
        slugs: ['dermal-fillers'],
        title: 'Dermal Filler',
        
        description:
          'Enhance facial volume and contour your cheeks, lips, and jawline with natural-looking results',
        category: 'Skin Treatments',
        notes: '',
        id: '662c6e71-73c3-47d3-8af9-e4277c1a2783',
        price: {
          original: '$799',
          discounted: '$599 / Syringe',
          percent: '30% off'
        },
        image: '/booking-photos/dermal-fillers.webp',
        points: [
          {
            title: 'Enhance facial volume',
            body: 'With natural-looking results'
          },
          {
            title: 'Contour your cheeks, lips, and jawline',
            body: 'Achieve a sculpted, youthful appearance with precise contouring'
          },
        ],
        duration: '50 mins'
      },
      // SCULPTRA
      {
        code: 'Sculptra&Radiesse',
        title: 'SCULPTRA',
        description:
          'Stimulate collagen production for long-lasting facial rejuvenation and natural fullness',
        category: 'Skin Treatments',
        notes: '',
        id: '7aca0b0a-fc81-42ea-b644-4583e8acb9b0',
        price: {
          original: '$1,099',
          discounted: '$899 / Vial',
          percent: '20% off'
        },
        image: '/booking-photos/biostimulatory-fillers.webp',
        points: [
          {
            title: 'Comprehensive consultation and evaluation',
            body: 'Our specialists will assess your skin’s needs and discuss your goals to determine if Sculptra is the ideal choice for restoring volume and enhancing collagen production.'
          },
          {
            title: 'Tailored treatment for gradual, natural rejuvenation',
            body: "We’ll create a personalized plan to achieve subtle, long-lasting improvements, giving you a refreshed and youthful look that develops naturally."
          },
        ],
        duration: '50 mins'
      },
      // Microneedling Facial
      {
        code: 'S0006',
        slugs: ['microneedling'],
        stay: true,
        title: 'Microneedling Facial',
        description:
          'Stimulate collagen and elastin production for a smoother, more vibrant complexion with SkinPen microneedling',
        category: 'Skin Treatments',
        notes: '',
        id: '6fde4a3d-0a6e-4a1e-97e5-32368abdcda3',
        price: {
          original: '$599',
          discounted: '$299',
          percent: '50% off'
        },
        image: '/booking-photos/microneedling.webp',
        points: [
          {
            title: 'Stimulate collagen for smoother skin',
            body: 'Tiny, controlled micro-injuries trigger your skin’s natural healing process, promoting collagen and elastin production for smoother, firmer skin.'
          },
          {
            title: 'Target fine lines, scars, and texture',
            body: 'Improve the appearance of acne scars, fine lines, and uneven skin texture for a more youthful, rejuvenated complexion.'
          },
        ],
        duration: '30 mins'
      },
      // PRP Facial
      {
        code: 'S0007',
        slugs: ['blood-facial-prp-microneedling'],
        stay: true,
        title: 'PRP Facial',
        description:
          'Reverse signs of aging with microneedling combined with PRP for youthful, radiant skin',
        category: 'Skin Treatments',
        notes: '',
        id: '0dcbef15-8fa6-4ed0-b5e3-f774f6ad5529',
        price: {
          original: '$749',
          discounted: '$599',
          percent: '20% off'
        },
        image: '/booking-photos/blood-facial.webp',
        points: [
          {
            title: 'Revitalize your skin with your own blood',
            body: 'This powerful treatment combines microneedling with platelet-rich plasma (PRP) to stimulate collagen production and promote skin healing, using your own blood to enhance results.'
          },
          {
            title: 'Target fine lines, texture, and overall radiance',
            body: 'Reduce the appearance of fine lines, acne scars, and uneven texture, while boosting skin tone and elasticity for a rejuvenated, youthful glow.'
          },
        ],
        duration: '30 mins'
      },
      // Plasms Injections - Full Face
      {
        code: 'S5674',
        slugs: ['plasma-injections-prp'],
        stay: true,
        title: 'Plasma Injections (PRP) - Full Face',
        description:
          'Use your body’s own plasma to naturally build collagen for smoother, firmer skin',
        category: 'Skin Treatments',
        notes: '',
        id: 'fe7cb8c6-86f7-49e1-96b0-3ce86b3b47e3',
        price: {
          original: '$749',
          discounted: '$599',
          percent: '20% off'
        },
        image: '/booking-photos/plasma-injections-full.webp',
        points: [
          {
            title: "Harness your body’s natural healing power",
            body: 'Promote collagen production and skin rejuvenation using platelet-rich plasma derived from your own blood.'
          },
          {
            title: 'Restore radiance and improve skin texture',
            body: 'Reduce fine lines, improve elasticity, and achieve a smoother, more youthful complexion with this natural and minimally invasive treatment.'
          },
        ],
        duration: ''
      },
      // Plasma Injections - Undereye
      {
        code: 'S0012',
        slugs: [],
        title: 'Plasma Injections (PRP) - Undereye',
        description:
          'Revitalize the delicate under-eye area with PRP to reduce bags and dark circles',
        category: 'Skin Treatments',
        notes: '',
        id: '818079c7-8a3e-4a8c-bbee-b674600333e9',
        price: {
          original: '$599',
          discounted: '$499',
          percent: '20% off'
        },
        image: '/booking-photos/plasma-injections-undereye.webp',
        points: [
          {
            title: 'Rejuvenate tired, hollow under eyes',
            body: "Use your body’s natural platelet-rich plasma to restore volume and brightness to the delicate under-eye area."
          },
          {
            title: 'Reduce dark circles and improve skin texture',
            body: "Boost collagen production to minimize the appearance of dark circles, fine lines, and puffiness for a refreshed look."
          },
        ],
        duration: ''
      },
      // Chemical Peels
      {
        code: 'S0125',
        slugs: ['chemical-peels'],
        title: 'Chemical Peels',
        description:
          'Revitalize your skin with our anti-aging chemical peel, designed to exfoliate and rejuvenate',
        category: 'Skin Treatments',
        notes: '',
        id: '10479d9c-6bbe-4bd3-a020-449ecb100499',
        price: {
          original: '$499',
          discounted: '$399',
          percent: '20% off'
        },
        image: '/booking-photos/chem-peels.webp',
        points: [
          {
            title: 'Renew and refresh your skin',
            body: 'Exfoliate and remove dead skin cells to reveal a smoother, more radiant complexion, addressing concerns like dullness, acne, and uneven texture.'
          },
          {
            title: 'Customized treatment for your skin needs',
            body: 'Our specialists tailor the peel to target your unique skin concerns, from fine lines and pigmentation to acne scars and sun damage.'
          },
        ],
        duration: ''
      },
      // Botox Sweat Reduction
      {
        code: 'S0018',
        slugs: ['botox-sweat-reduction'],
        title: 'Botox Sweat Reduction',
        description:
          'Reduce symptoms of excessive sweating, or hyperhidrosis, with targeted Botox injections',
        category: 'Skin Treatments',
        notes: '',
        id: '552bb365-5f45-4c82-84b9-c743ed75c0b9',
        price: {
          original: '$999',
          discounted: '$799',
          percent: '20% off'
        },
        image: '/booking-photos/botox-sweat-reduction.webp',
        points: [
          {
            title: 'Effective treatment for excessive sweating',
            body: 'Target overactive sweat glands to significantly reduce perspiration in areas like the underarms, hands, or feet.'
          },
          {
            title: 'Quick and minimally invasive',
            body: 'This safe, FDA-approved treatment delivers noticeable results with minimal downtime, so you can get back to your routine with ease.'
          },
        ],
        duration: ''
      }
    ]
  },
  // WELLNESS
  {
    category: 'Wellness',
    icon: '/icons/wellness.svg',
    services: [
      // Kybella
      {
        code: 'kybella',
        slugs: ['kybella'],
        title: 'Kybella / Fat Melting',
        category: 'Wellness',
        notes: '',
        id: '18ac585d-c861-4acf-92b6-f2c474c9ec1c',
        price: {
          original: '$999',
          discounted: '$799',
          percent: '20% off'
        },
        image: '/booking-photos/kybella.webp',
        points: [
          {
            title: 'Reduce stubborn chin fat',
            body: 'Target and permanently dissolve fat beneath the chin for a slimmer, more contoured profile.'
          },
          {
            title: 'Non-surgical fat reduction',
            body: 'Achieve noticeable results without the need for surgery or lengthy recovery time.'
          }
        ],
        duration: '60 mins'
      },

      // NAD+ IV Drip
      {
        code: 'nad_plus_iv',
        slugs: ['nad_plus_iv'],
        title: 'Färsk NAD+ IV Drip',
        category: 'Wellness',
        notes: '',
        id: '3c29c6d4-a7e4-4454-bbb1-d2c9ed4ee370',
        price: {
          original: '$599',
          discounted: '$499',
          percent: '20% off'
        },
        image: '/booking-photos/kybella.webp',
        points: [
          {
            title: '',
            body: 'Significantly improves your energy levels and cognitive functions (including memory and focus) while promoting anti-aging and cellular regeneration to make you look and feel young.'
          },
        ],
        duration: '60 mins'
      },
      // Immune IV Drip
      {
        code: 'immune_iv',
        slugs: ['immune_iv'],
        title: 'Färsk Immune IV Drip',
        category: 'Wellness',
        notes: '',
        id: '740f9512-b0e9-4536-8ff6-8c5a958ca50e',
        price: {
          original: '$499',
          discounted: '$399',
          percent: '20% off'
        },
        image: '/booking-photos/kybella.webp',
        points: [
          {
            title: '',
            body: 'Provides a nourishing and youthful glow to the skin while enhancing elasticity and targeting fine lines and wrinkles.'
          },
        ],
        duration: '30 mins'
      },
      // Radiance IV Drip
      {
        code: 'radiance_iv',
        slugs: ['radiance_iv'],
        title: 'Färsk Radiance IV Drip',
        category: 'Wellness',
        notes: '',
        id: '7a844718-9ded-497f-9553-ab58cdbb5756',
        price: {
          original: '$499',
          discounted: '$399',
          percent: '20% off'
        },
        image: '/booking-photos/kybella.webp',
        points: [
          {
            title: '',
            body: 'This treatment is specifically developed to supply the necessary vitamins, minerals, and amino acids for improved and effective immune functions.'
          },
        ],
        duration: '30 mins'
      },
      // Energy IV Drip
      {
        code: 'energy_iv',
        slugs: ['energy_iv'],
        title: 'Färsk Energy IV Drip',
        category: 'Wellness',
        notes: '',
        id: '7321f011-d7e3-4e36-9c70-9574ac5c88af',
        price: {
          original: '$399',
          discounted: '$299',
          percent: '25% off'
        },
        image: '/booking-photos/kybella.webp',
        points: [
          {
            title: '',
            body: 'Provides you with the adequate number of essential vitamins and minerals that help significantly boost your energy levels immediately.'
          },
        ],
        duration: '30 mins'
      },
      {
        code: 'semaglutide',
        title: 'Semaglutide',
        category: 'Wellness',
        comingSoon: true,
        price: {
          original: 'Coming soon!',
          discounted: '',
          percent: ''
        },
      }
    ]
  },
]

export default formServices
