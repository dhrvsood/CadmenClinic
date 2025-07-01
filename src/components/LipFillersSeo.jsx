import { ctaToBooking } from '@/helpers/cta_to_booking'
import { NextSeo } from 'next-seo'
import * as React from 'react'

import { PlasmicLipFillersSeo } from './plasmic/cadmenclinic_migration/PlasmicLipFillersSeo'
import HeroSectionV2 from './services/components-v2/hero-section-v2'

const pageData = {
  cta: {
    text: 'Book Now',
    link: '#'
  },
  backgroundImage: '/hero-bgs/lip-filler-seo-hero-bg.webp',
  pricing: {
    price: '400',
    unit: 'treatment',
    promoBadge: 'NEW PATIENTS DEAL'
  },
  reviews: {
    rating: '4.9',
    reviewCount: '240'
  },
  title: 'Top Lip Filler Services',
  description:
    'Enhance your confidence with lip filler treatments at ImageLab. Achieve beautifully defined, balanced lips with personalized care from our expert team. Using premium products and techniques, we’ll tailor your results to complement your natural beauty.'
}

function LipFillersSeo_(props, ref) {
  const handleBookNow = () => {
    ctaToBooking('52bf840f-fa30-472f-a89e-073cb60bc786')
  }

  return (
    <>
      <NextSeo
        title='Lip Fillers and Augmentation | Lip Injections - ImageLab Med Spa'
        description='We offer lip fillers and injections alongside personalized skincare to enhance beauty and address your aesthetic needs. Learn more today.'
        canonical={`https://www.imagelabmedspa.com/services/lip-fillers`}
        openGraph={{
          url: 'https://www.imagelabmedspa.com/services/lip-fillers',
          title:
            'Lip Fillers and Augmentation | Lip Injections - ImageLab Med Spa',
          description:
            'We offer lip fillers and injections alongside personalized skincare to enhance beauty and address your aesthetic needs. Learn more today.',
          siteName: 'ImageLab Med Spa'
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image'
        }}
      />
      <PlasmicLipFillersSeo
        root={{ ref }}
        {...props}
        heroSlot={
          <HeroSectionV2
            data={pageData}
            serviceId='52bf840f-fa30-472f-a89e-073cb60bc786'
            title={
              <h1 className='text-[6vw] font-normal text-white max-md:text-[84px]'>
                <span className='font-medium italic'>Top Lip Filler </span>Services
              </h1>
            }
            isStandalone
          />
        }
        heroCta={{ onClick: handleBookNow }}
        beforeAfterSlider={{ handleButtonClick: handleBookNow }}
        whatAreCta={{ onClick: handleBookNow }}
        processCta={{ onClick: handleBookNow }}
        pricingCta={{ onClick: handleBookNow }}
        learnMoreCta={{ onClick: handleBookNow }}
        preparingCta={{ onClick: handleBookNow }}
        expectCta={{ onClick: handleBookNow }}
        guideCta={{ onClick: handleBookNow }}
        botoxAppointmentMobileButton={{ onClick: handleBookNow }}
      />
    </>
  )
}

const LipFillersSeo = React.forwardRef(LipFillersSeo_)

export default LipFillersSeo
