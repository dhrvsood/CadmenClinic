import { ctaToBooking } from '@/helpers/cta_to_booking'
import { NextSeo } from 'next-seo'
import * as React from 'react'

import { PlasmicBotoxSeo } from './plasmic/cadmenclinic_migration/PlasmicBotoxSeo'
import HeroSectionV2 from './services/components-v2/hero-section-v2'

const pageData = {
  cta: {
    text: 'Book Now',
    link: '#'
  },
  backgroundImage: '/hero-bgs/botox-seo-hero-bg.webp',
  pricing: {
    price: '9.99',
    unit: 'unit botox',
    promoBadge: 'NEW PATIENTS DEAL'
  },
  reviews: {
    rating: '4.9',
    reviewCount: '240'
  },
  title: 'Top Botox Services',
  description:
    'Discover smoother, more youthful-looking skin with personalized care from our expert team, exclusive offers, and premium-quality results tailored just for you.'
}

function BotoxSeo_(props, ref) {
  const handleBookNow = () => {
    ctaToBooking('844863b9-2438-4d68-9008-d12ee4990636')
  }

  return (
    <>
      <NextSeo
        title='Botox® Chicago | Wrinkle Relaxer Treatment | ImageLab Med Spa'
        description='Eliminate wrinkles with Botox® and other neuromodulators in Chicago. Our non-surgical treatments smooth and rejuvenate your skin. Learn more.'
        canonical={`https://www.imagelabmedspa.com/services/botox-and-wrinkle-relaxers`}
        openGraph={{
          url: 'https://www.imagelabmedspa.com/services/botox-and-wrinkle-relaxers',
          title:
            'Botox® Chicago | Wrinkle Relaxer Treatment | ImageLab Med Spa',
          description:
            'Eliminate wrinkles with Botox® and other neuromodulators in Chicago. Our non-surgical treatments smooth and rejuvenate your skin. Learn more.',
          siteName: 'ImageLab Med Spa'
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image'
        }}
      />
      <PlasmicBotoxSeo
        root={{ ref }}
        {...props}
        heroSlot={
          <HeroSectionV2
            data={pageData}
            serviceId='844863b9-2438-4d68-9008-d12ee4990636'
            title={
              <h1 className='text-[6vw] font-normal text-white max-md:text-[84px]'>
                <span className='font-medium italic'>Top Botox </span>Services
              </h1>
            }
            isStandalone
          />
        }
        topBotoxServicesButton={{ onClick: handleBookNow }}
        beforeAfterSlider={{ handleButtonClick: handleBookNow }}
        whatIsBotoxButton={{ onClick: handleBookNow }}
        ourBotoxProcessButton={{ onClick: handleBookNow }}
        affordableBotoxButton={{ onClick: handleBookNow }}
        ctaButton={{ onClick: handleBookNow }}
        botoxAppointmentButton={{ onClick: handleBookNow }}
        botoxAppointmentMobileButton={{ onClick: handleBookNow }}
        afterTheTreatmentButton={{ onClick: handleBookNow }}
        postTreatmentGuideButton={{ onClick: handleBookNow }}
        joinTheClubButton={{ onClick: handleBookNow }}
      />
    </>
  )
}

const BotoxSeo = React.forwardRef(BotoxSeo_)

export default BotoxSeo
