const formServices = [
  {
    category: 'Consultation',
    icon: '/icons/portrait-icon.svg',
    services: [
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
        image: '/booking-photos/general-consult.avif',
        points: [
          {
            title: 'Personalized plan',
            body: 'Our general aesthetic consultation includes a computerized skin analysis and medical intake, to tailor treatments that address your specific skincare concerns. Whether you seek rejuvenation, correction, or enhancement, our experts will create a personalized plan to help you achieve your desired look'
          }
        ],
        duration: '30 mins'
      },
      {
        code: 'IC101',
        title: 'Hair Restoration Consultation',
        description:
          'During the injectables consultation, we assess your facial structure and skin to recommend the best neuromodulators or fillers for your needs. Our goal is to provide natural-looking enhancements that smooth wrinkles, add volume, and rejuvenate your appearance.',
        category: 'Consultation',
        notes: '',
        id: '9fcca66b-6365-49d4-99ae-76b1232c0398',
        price: {
          original: 'free',
          discounted: '',
          percent: ''
        },
        image: '/booking-photos/injectables-consult.avif',
        points: [
          {
            title: 'Customized treatment plan',
            body: "During the injectables consultation, we assess your facial structure and skin to recommend the best neuromodulators or fillers for your needs. Our goal is to provide natural-looking enhancements that smooth wrinkles, add volume, and rejuvenate your appearance."
          },
        ],
        duration: '30 mins'
      },
      // {
      //   code: 'S2345',
      //   slugs: [
      //     'semaglutide-therapy',
      //     'semaglutide-therapy-imagelab',
      //     'tirzepatide-weight-loss-injections',
      //     'glp-1-weight-loss-injections-semaglutide',
      //     'semaglutide-clinic-imagelab',
      //     'slimshot-therapy-imagelab',
      //     'semaglutide-injections-imagelab'
      //   ],
      //   title: 'Weight Loss Consultation (Semaglutide)',
      //   description:
      //     'Discover how medically supervised Semaglutide injections can facilitate safe and effective weight loss during our comprehensive consultation. This includes personalized guidance for helping you achieve your weight management goals and a comprehensive medical intake.',
      //   category: 'Consultation',
      //   notes: '',
      //   id: '115ece44-9edf-4ce6-8b6e-6343785bc680',
      //   price: {
      //     original: 'free',
      //     discounted: '',
      //     percent: ''
      //   },
      //   image: '/booking-photos/weight-loss-consult.avif',
      //   points: [
      //     {
      //       title: 'In-depth assessment and medical review',
      //       body: 'Our specialists will evaluate your health history, lifestyle, and weight loss goals to determine if Semaglutide is the right solution.'
      //     },
      //     {
      //       title: 'Personalized weight loss plan',
      //       body: "We’ll create a customized plan that combines medical treatments, nutrition guidance, and lifestyle recommendations to help you achieve sustainable, long-term results."
      //     },
      //   ],
      //   duration: '30 mins'
      // }
    ]
  },
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
        category: 'Hair + Wellness',
        notes: '',
        id: '01864f55-152e-4718-8827-c42f13a1d17d',
        price: {
          original: '$800',
          discounted: '$640',
          percent: '20% off'
        },
        image: '/booking-photos/prp.avif',
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
        duration: ''
      },
      {
        code: 'S0014',
        slugs: [],
        title: 'Microneedling + PRP Hair',
        description:
          'Combine microneedling with PRP to enhance hair growth and scalp health',
        category: 'Hair + Wellness',
        notes: '',
        id: '2d5ba900-2e2c-4e54-97e7-e688cc84e60d',
        price: {
          original: '$1,000',
          discounted: '$800',
          percent: '20% off'
        },
        image: '/booking-photos/microneedling-prp.avif',
        points: [
          {
            title: 'Boost hair regrowth with advanced technology',
            body: 'Combine the power of microneedling and PRP to stimulate hair follicles and promote natural hair growth, improving thickness and density.'
          },
          {
            title: 'Personalized, tailored solution',
            body: 'Our experts will customize the treatment to your specific needs, helping you achieve fuller, healthier hair with minimal downtime'
          },
        ],
        duration: ''
      },
      {
        code: 'S0015',
        slugs: [],
        title: 'Microneedling + Exosomes Hair',
        description:
          'Boost hair regeneration with the combined power of microneedling and exosomes',
        category: 'Hair + Wellness',
        notes: '',
        id: 'ba81af0c-7691-4cf2-8bb5-69b1c1d51815',
        price: {
          original: '$700',
          discounted: '$560',
          percent: '20% off'
        },
        image: '/booking-photos/mironeedling-exosomes.avif',
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
        duration: ''
      }
    ]
  },
  {
    category: 'Skin Treatments',
    icon: '/icons/head-icon.svg',
    services: [
      {
        code: 'S0001',
        slugs: ['diamondglow-facial'],
        title: 'DiamondGlow Facial',
        description:
          'Refresh and nourish your skin with our signature facial for a glowing complexion',
        category: 'Skin',
        notes: '',
        id: '3132689b-a06e-455f-b524-976c5c4588da',
        price: {
          original: '$200',
          discounted: '$160',
          percent: '20% off'
        },
        image: '/booking-photos/diamondglow.avif',
        points: [
          {
            title: 'Boost hydration and radiance',
            body: 'Infuse your skin with customized serums to address specific concerns like dryness, dullness, or uneven texture, leaving your skin glowing and refreshed.'
          },
          {
            title: 'Exfoliate, extract, and infuse',
            body: 'Experience a next-level skin resurfacing treatment that deeply cleanses, exfoliates, and nourishes your skin in one seamless process.'
          },
        ],
        duration: ''
      },
      {
        code: 'S0006',
        slugs: ['microneedling', 'microneedling-imagelab'],
        stay: true,
        title: 'Microneedling',
        description:
          'Stimulate collagen and elastin production for a smoother, more vibrant complexion with SkinPen microneedling',
        category: 'Skin',
        notes: '',
        id: '4eb7f4a1-8cfd-4853-a5af-b68bac053757',
        price: {
          original: '$400',
          discounted: '$240',
          percent: '40% off'
        },
        image: '/booking-photos/microneedling.avif',
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
        duration: ''
      },
      {
        code: 'S0008',
        slugs: [],
        title: 'Microneedling + Exosomes',
        description:
          'Enhance microneedling with exosomes to boost skin regeneration and repair',
        category: 'Skin',
        notes: '',
        id: '6aa8223d-1132-4b82-8ce3-57f1c7c14950',
        price: {
          original: '$600',
          discounted: '$360',
          percent: '40% off'
        },
        image: '/booking-photos/microneedling-exosomes.avif',
        points: [
          {
            title: 'Enhanced skin rejuvenation',
            body: 'Combine the power of microneedling with exosome therapy to accelerate healing and boost collagen production, delivering more dramatic, long-lasting results.'
          },
          {
            title: 'Target a variety of skin concerns',
            body: 'Improve texture, reduce fine lines, minimize scars, and promote overall skin health for a smoother, youthful appearance.'
          },
        ],
        duration: ''
      },
      {
        code: 'S0125',
        slugs: ['chemical-peels'],
        title: 'Chemical Peels',
        description:
          'Revitalize your skin with our anti-aging chemical peel, designed to exfoliate and rejuvenate',
        category: 'Skin',
        notes: '',
        id: '625674f3-cd2a-49d1-83d9-afba0c3eb69e',
        price: {
          original: '$350',
          discounted: '$210',
          percent: '40% off'
        },
        image: '/booking-photos/chem-peels.avif',
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
      {
        code: 'S0007',
        slugs: ['blood-facial-prp-microneedling'],
        stay: true,
        title: 'Blood Facial (Microneedling + PRP)',
        description:
          'Reverse signs of aging with microneedling combined with PRP for youthful, radiant skin',
        category: 'Skin',
        notes: '',
        id: '8a8f9dd5-940d-43b2-9fa9-e26370bf9ac1',
        price: {
          original: '$765',
          discounted: '$612',
          percent: '20% off'
        },
        image: '/booking-photos/blood-facial.avif',
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
        duration: ''
      }
    ]
  },
  {
    category: 'Injectables',
    icon: '/icons/syringe-icon.svg',
    services: [
      {
        code: 'Neurotoxin',
        slugs: ['botox-and-wrinkle-relaxers'],
        title: 'Botox, Dysport, or Xeomin',
        description:
          'Soften the appearance of fine lines and wrinkles with our effective neuromodulator treatments',
        category: 'Injectables',
        notes: '',
        id: '844863b9-2438-4d68-9008-d12ee4990636',
        price: {
          original: '$14.00',
          discounted: '$9.99 /unit',
          percent: '30% off'
        },
        image: '/booking-photos/botox.avif',
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
      {
        code: 'Sculptra&Radiesse',
        title: 'Biostimulatory Fillers (Sculptra or Radiesse)',
        description:
          'Stimulate collagen production for long-lasting facial rejuvenation and natural fullness',
        category: 'Injectables',
        notes: '',
        id: 'ccdbce7f-7c0d-4e50-b095-730080226098',
        price: {
          original: '$900',
          discounted: '$630 /vial',
          percent: '30% off'
        },
        image: '/booking-photos/biostimulatory-fillers.avif',
        points: [
          {
            title: 'Comprehensive consultation and evaluation',
            body: 'Our specialists will assess your skin’s needs and discuss your goals to determine if Sculptra or Radiesse is the ideal choice for restoring volume and enhancing collagen production.'
          },
          {
            title: 'Tailored treatment for gradual, natural rejuvenation',
            body: "We’ll create a personalized plan to achieve subtle, long-lasting improvements, giving you a refreshed and youthful look that develops naturally."
          },
        ],
        duration: '50 mins'
      },
      {
        code: 'LipFiller',
        slugs: ['lip-filler'],
        title: 'Lip Filler',
        description:
          'Achieve fuller, more defined lips with precise hyaluronic acid-based fillers',
        category: 'Injectables',
        notes: '',
        id: '52bf840f-fa30-472f-a89e-073cb60bc786',
        price: {
          original: '$650',
          discounted: '$400',
          percent: '40% off'
        },
        image: '/booking-photos/lip-filler.avif',
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
        duration: '50 mins'
      },
      {
        code: 'DermalFiller',
        slugs: ['dermal-fillers'],
        title: 'Dermal Fillers',
        description:
          'Enhance facial volume and contour your cheeks, lips, and jawline with natural-looking results',
        category: 'Injectables',
        notes: '',
        id: '4a873bb4-8780-46ed-996a-77fec4b76cda',
        price: {
          original: '$750',
          discounted: '$525 /syringe',
          percent: '30% off'
        },
        image: '/booking-photos/dermal-fillers.avif',
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
      {
        code: 'S5674',
        slugs: ['plasma-injections-prp'],
        stay: true,
        title: 'Plasma Injections (PRP) - Full Face',
        description:
          'Use your body’s own plasma to naturally build collagen for smoother, firmer skin',
        category: 'Injectables',
        notes: '',
        id: '183e1abc-9625-48f1-8dd5-88d5a350bf44',
        price: {
          original: '$550',
          discounted: '$440',
          percent: '20% off'
        },
        image: '/booking-photos/plasma-injections-full.avif',
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
      {
        code: 'S0012',
        slugs: [],
        title: 'Plasma Injections (PRP) - Undereye',
        description:
          'Revitalize the delicate under-eye area with PRP to reduce bags and dark circles',
        category: 'Injectables',
        notes: '',
        id: '1b0cffb4-7004-4167-a311-1b53f69163df',
        price: {
          original: '$450',
          discounted: '$360',
          percent: '20% off'
        },
        image: '/booking-photos/plasma-injections-undereye.avif',
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
      {
        code: 'S0018',
        slugs: ['botox-sweat-reduction'],
        title: 'Botox Sweat Reduction',
        description:
          'Reduce symptoms of excessive sweating, or hyperhidrosis, with targeted Botox injections',
        category: 'Injectables',
        notes: '',
        id: '8fe3994d-0c4f-4349-bbfe-b660440a2a8c',
        price: {
          original: '$1,000',
          discounted: '$800',
          percent: '20% off'
        },
        image: '/booking-photos/botox-sweat-reduction.avif',
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
      },
      {
        code: 'S0021',
        slugs: ['kybella'],
        title: 'Kybella',
        description:
          'Non-surgical procedure to eliminate stubborn chin fat and sculpt the jawline',
        category: 'Injectables',
        notes: '',
        id: '4153304d-82d4-422c-80dc-f0733abd434f',
        price: {
          original: '$650',
          discounted: '$520 /vial',
          percent: '20% off'
        },
        image: '/booking-photos/kybella.avif',
        points: [
          {
            title: 'Reduce stubborn chin fat',
            body: 'Target and permanently dissolve fat beneath the chin for a slimmer, more contoured profile.'
          },
          {
            title: 'Non-surgical fat reduction',
            body: 'Achieve noticeable results without the need for surgery or lengthy recovery time.'
          },
        ],
        duration: ''
      }
    ]
  },

  {
    category: 'Lasers',
    icon: '/icons/laser-icon.svg',
    services: [
      {
        code: 'SBBL101',
        slugs: [],
        title: 'Sciton BBL',
        description:
          'Advanced laser treatment for correcting skin imperfections and improving skin tone',
        category: 'Lasers',
        notes: '',
        id: '077421e4-3b48-41ce-a7ca-b88992c617b5',
        price: {
          original: '$400',
          discounted: 'Starting at $200',
          percent: '50% off'
        },
        image: '/booking-photos/sciton.avif',
        points: [
          {
            title: 'Target a variety of skin concerns',
            body: 'Harness the power of light therapy to address issues like sun damage, age spots, redness, and uneven skin tone, leaving your complexion smoother and more radiant.'
          },
          {
            title: 'Stimulate collagen for youthful skin',
            body: 'BBL technology stimulates collagen production, improving skin elasticity and texture for a more youthful and vibrant appearance.'
          },
        ],
        duration: ''
      },
      {
        code: 'SM101',
        slugs: [],
        title: 'Sciton Moxi',
        description:
          'Gentle laser resurfacing treatment to improve skin texture and clarity',
        category: 'Lasers',
        notes: '',
        id: 'b5b6787e-c87e-4074-aff2-c7f695354e36',
        price: {
          original: '$500',
          discounted: 'Starting at $250',
          percent: '50% off'
        },
        image: '/booking-photos/sciton-moxi.avif',
        points: [
          {
            title: 'Non-ablative laser',
            body: 'MOXI is also a non-ablative laser similar to BBL, but it is much gentler and safe for virtually any skin type.'
          },
          {
            title: 'Optimal collagen stimulation',
            body: 'MOXI™ stimulates collagen and allows you to address issues such as uneven pigmentation, sun damage, fine lines and wrinkles, as well as improve skin tone and texture, all with no downtime.'
          },
        ],
        duration: '1 hour'
      },
      {
        code: 'SBBLM',
        slugs: ['bbl-and-moxi'],
        stay: true,
        title: 'Sciton BBL + Moxi',
        description:
          'Combined laser treatment for comprehensive skin rejuvenation and correction',
        category: 'Lasers',
        notes: '',
        id: '6dee55d9-08e2-473e-9a81-2672ff0632ce',
        price: {
          original: '$700',
          discounted: 'Starting at $350',
          percent: '50% off'
        },
        image: '/booking-photos/moxi-bbl.avif',
        points: [
          {
            title: 'Revitalize and correct skin imperfections',
            body: 'The optimal treatment duo for comprehensive skin revitalization.'
          },
          {
            title: 'Synergistic effects for enhanced results',
            body: 'MOXI enhances skin surface and texture, while BBL addresses areas with excessive red and brown pigmentation. The combined effect of these two treatments is truly synergistic.'
          },
        ],
        duration: '80 mins'
      },
      {
        code: 'S0029',
        slugs: ['laser-hair-removal'],
        stay: true,
        title: 'Laser Hair Removal - XS Area',
        description: 'Upper Lip, Chin, Breastbone, Fingers, Toes',
        category: 'Lasers',
        notes: '',
        id: 'a63aefd6-eb8d-440f-9a48-1dce1ffa1992',
        price: {
          original: '$155',
          discounted: '$78',
          percent: '50% off'
        },
        image: '/booking-photos/laser-hair-rem.avif',
        points: [
          {
            title: 'Precise and effective hair removal',
            body: 'Target small, sensitive areas like the upper lip, chin, breastbone, fingers, and toes with precision, ensuring smooth, hair-free skin.'
          },
          {
            title: 'Quick, comfortable treatments',
            body: 'Enjoy fast and virtually painless sessions that deliver long-lasting results with minimal downtime.'
          },
        ],
        duration: ''
      },
      {
        code: 'S0030',
        slugs: [],
        title: 'Laser Hair Removal - S Area',
        description: 'Cheeks, Neck, Underarm',
        category: 'Lasers',
        notes: '',
        id: '965828a3-86de-4fb5-bab9-04ccf793f48d',
        price: {
          original: '$195',
          discounted: '$98',
          percent: '50% off'
        },
        image: '/booking-photos/laser-hair-rem-s-area.avif',
        points: [
          {
            title: 'Efficient and lasting hair removal',
            body: 'Target larger areas like the cheeks, neck, and underarms for smooth, hair-free skin with precise laser technology.'
          },
          {
            title: 'Comfortable, quick sessions',
            body: 'Enjoy fast, virtually painless treatments that fit seamlessly into your schedule, offering long-term results with minimal downtime.'
          },
        ],
        duration: ''
      },
      {
        code: 'S0031',
        title: 'Laser Hair Removal - M Area',
        description: 'Bikini Line, Lower Arm',
        category: 'Lasers',
        notes: '',
        id: '8de58dee-13cf-4eeb-9e8e-04ccdd73b829',
        price: {
          original: '$295',
          discounted: '$148',
          percent: '50% off'
        },
        image: '/booking-photos/laser-hair-rem-m-area.avif',
        points: [
          {
            title: 'Precise and effective hair removal',
            body: 'Target areas like the bikini line and lower arms with advanced laser technology for smooth, hair-free skin that lasts.'
          },
          {
            title: 'Safe for all skin types',
            body: 'Our state-of-the-art laser technology provides effective hair removal for all skin tones and hair types, leaving your skin soft and silky.'
          },
        ],
        duration: ''
      },
      {
        code: 'S0032',
        slugs: [],
        title: 'Laser Hair Removal - L Area',
        description:
          'Buttocks, Thighs, Calves, Full Arms, Brazilian, Stomach, Lower Leg',
        category: 'Lasers',
        notes: '',
        id: 'b2157566-9e3c-4010-a16f-f071c1b6917b',
        price: {
          original: '$395',
          discounted: '$198',
          percent: '50% off'
        },
        image: '/booking-photos/laser-hair-rem-l-area.avif',
        points: [
          {
            title: 'Comprehensive hair removal for larger areas',
            body: 'Achieve smooth, hair-free skin on larger areas like the buttocks, thighs, calves, full arms, Brazilian area, stomach, and lower legs with precision and ease.'
          },
          {
            title: 'Fast, comfortable, and effective treatments',
            body: 'Experience quick sessions with minimal discomfort, designed to deliver long-lasting results without downtime.'
          },
        ],
        duration: ''
      },
      {
        code: 'S0033',
        slugs: [],
        title: 'Laser Hair Removal - XL Area',
        description: 'Full Legs, Full Back',
        category: 'Lasers',
        notes: '',
        id: '98e1b78b-5dbb-481d-bf93-05aadb29ef8f',
        price: {
          original: '$495',
          discounted: '$248',
          percent: '50% off'
        },
        image: '/booking-photos/laser-hair-rem-xl-area.avif',
        points: [
          {
            title: 'Complete hair removal for large areas',
            body: 'Achieve smooth, hair-free skin on expansive areas like full legs and full back with advanced, precision laser technology.'
          },
          {
            title: 'Efficient, comfortable treatments',
            body: 'Enjoy fast, virtually painless sessions designed to cover larger areas with minimal discomfort and no downtime.'
          },
        ],
        duration: ''
      }
    ]
  },

]

export default formServices
