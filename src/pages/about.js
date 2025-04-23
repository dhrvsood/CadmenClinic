import ContactBanner from '@/components/contact_banner'
import Container from '@/components/container'
import ProvidersCarousel from '@/components/providers_carousel'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Link from 'next/link'
import clinicInterior from '../../public/cadmen_clinic_cover.jpeg';

const About = () => (
  <>
    <NextSeo
      title='About Us | CADMEN Clinic'
      description='Learn about our expert team, advanced cosmetic services & personalized care at our Toronto medspa, offering Botox, fillers, laser treatments & more. Visit today.'
      canonical='https://www.cadmenclinic.ca/about'
      openGraph={{
        url: 'https://www.cadmenclinic.ca/about',
        title: 'About Us | CADMEN Clinic',
        description:
          'Learn about our expert team, advanced cosmetic services & personalized care at our Toronto medspa, offering Botox, fillers, laser treatments & more. Visit today.',
        images: [
          {
            url: 'https://www.cadmenclinic.ca/media/interior-1.jpg',
            width: 800,
            height: 800,
            alt: 'Interior of CADMEN Clinic',
            type: 'image/jpeg'
          }
        ],
        siteName: 'CADMEN Clinic'
      }}
    />
    <section className='overflow-hidden'>
      <Container classList='md:px-5'>
        <div className='grid h-full md:h-[520px] md:grid-cols-2 lg:h-[550px] '>
          <div className='order-2 flex h-full flex-col justify-center space-y-5 bg-gray-100 px-5 py-5 md:order-1 md:py-0 lg:px-10'>
            <h1 className='font-display text-4xl font-light tracking-wide xl:text-6xl'>
              Learn More About CADMEN
            </h1>
            <p className='leading-relaxed'>
              We&apos;re focused on clear, natural-looking results, guided by the
              principle that everyone deserves to achieve their desired skin
              goals. Our skilled providers will guide you every step of the way
              through our carefully curated selection of medically-proven
              procedures. CADMEN is cosmetic dermatology for enhancing natural
              beauty!
            </p>
            <div className='flex w-full'>
              <Link
                href='https://cadmenclinic.ca.zenoti.com/webstoreNew/services'
                className='w-full rounded border border-beaver/90 bg-beaver/90 px-10 py-3 text-center font-light text-white hover:bg-beaver lg:flex lg:w-auto'
              >
                Book Now
              </Link>
            </div>
          </div>
          <div className='order-1 h-[250px] md:order-2 md:h-full'>
            <Image
              draggable='false'
              src={clinicInterior}
              alt='Picture Cadmen Interior'
              sizes='100vw'
              className='h-full w-full object-cover object-center'
              width={1000}
              height={1000}
              quality={100}
              priority={true}
            />
          </div>
        </div>
      </Container>
    </section>

    <ProvidersCarousel />
    <ContactBanner />
  </>
)

export default About
