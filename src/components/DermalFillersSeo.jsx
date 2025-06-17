import { ctaToBooking } from '@/helpers/cta_to_booking'
import { NextSeo } from 'next-seo'
import * as React from 'react'

import { PlasmicDermalFillersSeo } from './plasmic/cadmenclinic_migration/PlasmicDermalFillersSeo'
import HeroSectionV2 from './services/components-v2/hero-section-v2'

const pageData = {
  cta: {
    text: 'Book Now',
    link: '#'
  },
  backgroundImage: '/hero-bgs/dermal-fillers-seo-hero-bg.webp',
  pricing: {
    price: '525',
    unit: 'syringe',
    promoBadge: 'NEW PATIENTS DEAL'
  },
  reviews: {
    rating: '4.9',
    reviewCount: '280'
  },
  title: 'Top Dermal Filler Services',
  description:
    'Enhance your confidence with dermal filler treatments at ImageLab. Achieve beautifully contoured, youthful-looking features with personalized care from our expert team and premium-quality results tailored to your needs.'
}

function DermalFillersSeo_(props, ref) {
  const handleBookNow = () => {
    ctaToBooking('4a873bb4-8780-46ed-996a-77fec4b76cda')
  }

  return (
    <>
      <NextSeo
        title='Dermal Fillers Chicago | Lip Fillers | ImageLab Med Spa'
        description='Enhance your facial contours with dermal and lip fillers in Chicago. Our non-surgical treatments expertly restore volume and smooth wrinkles. Learn more.'
        canonical={`https://www.imagelabmedspa.com/services/dermal-fillers`}
        openGraph={{
          url: 'https://www.imagelabmedspa.com/services/dermal-fillers',
          title: 'Dermal Fillers Chicago | Lip Fillers | ImageLab Med Spa',
          description:
            'Enhance your facial contours with dermal and lip fillers in Chicago. Our non-surgical treatments expertly restore volume and smooth wrinkles. Learn more.',
          siteName: 'ImageLab Med Spa'
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image'
        }}
      />
      <PlasmicDermalFillersSeo
        root={{ ref }}
        {...props}
        heroSlot={
          <HeroSectionV2
            data={pageData}
            serviceId='4a873bb4-8780-46ed-996a-77fec4b76cda'
            title={
              <h1 className='text-[6vw] font-normal text-white max-md:text-[84px]'>
                <span className='font-medium italic'>Top Dermal Filler </span>Services
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
      />
    </>
  )
}

const DermalFillersSeo = React.forwardRef(DermalFillersSeo_)

export default DermalFillersSeo
