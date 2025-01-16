import ContactBanner from '@/components/contact_banner'
import BaseButton from '@/components/base_button'
import Container from '@/components/container'
import Reviews from '@/components/reviews'
import ServicesCarousel from '@/components/services_carousel'
import { categories } from '@/doc/categories'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Link from 'next/link'

const Home = () => {
  return (
    <>
      <NextSeo
        title="CADMEN Clinic | Toronto’s Best Med Clinic Experience"
        description='Offering Botox, fillers, laser treatments, and personalized skincare in Chicago for enhancing beauty and addressing your various aesthetic needs. Learn more.'
        canonical='https://www.imagelabmedspa.com/'
        openGraph={{
          url: 'https://www.imagelabmedspa.com/',
          title:
            "CADMEN Clinic | Medspa Chicago Aesthetic & Beauty Clinic",
          description:
            'Offering Botox, fillers, laser treatments, and personalized skincare in Chicago for enhancing beauty and addressing your various aesthetic needs. Learn more.',
          images: [
            {
              url: 'https://www.imagelabmedspa.com/og_image.jpg',
              width: 800,
              height: 800,
              alt: 'Interior of CADMEN Clinic',
              type: 'image/jpeg'
            }
          ],
          siteName: 'CADMEN Clinic'
        }}
      />
      {/* Landing */}
      <section className='overflow-hidden mb-5 mt-10'>
        <Container classList='md:px-5'>
          <div className='grid h-full md:h-[560px] md:grid-cols-2 lg:h-[580px] '>
            <div className='order-2 flex h-full flex-col justify-center space-y-5 bg-gray-100 px-5 py-5 md:order-1 md:py-0 lg:px-10'>
              <h1 className='font-display text-5xl font-light tracking-wide md:text-6xl xl:text-7xl'>
                <span className='block pr-3 text-center md:text-left lg:inline'>
                  Discover Your &nbsp;
                </span>
                <span className='block pr-3 text-center md:text-left'>
                  Best Self
                </span>
              </h1>
              <p className='leading-relaxed'>
                Embark on a path to uncovering your unique beauty. Our team of
                highly skilled aesthetic providers specialize in a wide array of
                advanced cosmetic treatments tailored to meet your individual
                needs and aspirations.
              </p>
              <div className='flex w-full'>
                <Link
                  href='https://cadmenclinic.janeapp.com/'
                  className='w-full rounded border border-beaver/90 bg-beaver/90 px-10 py-3 text-center font-light text-white hover:bg-beaver lg:flex lg:w-auto'
                >
                  Book Now
                </Link>
              </div>
            </div>
            <div className='order-1 h-[250px] md:order-2 md:h-full'>
              <Image
                draggable='false'
                src='/media/home.png'
                alt='Picture Woman Home'
                sizes='100vw'
                className='h-full w-full object-cover object-center'
                width={1000}
                height={1000}
                priority
                quality={100}
              />
            </div>
          </div>
        </Container>
      </section>
      
      <ServicesCarousel
        categories={categories}
        bookNow={false}
        title="Toronto’s Best Med Clinic Experience"
      />
      <ContactBanner />
      {/* Info Section */}
      <section className='relative overflow-hidden'>
        <Container classList='relative z-10 md:px-5 mb-10 mt-10'>
          <div className='grid items-center gap-10 border border-gray-100 bg-gray-50 md:grid-cols-2'>
            <div className='order-2 flex flex-col items-start space-y-5 px-10 pb-10 md:order-1 md:py-10 md:pb-10'>
              <h2 className='font-display text-4xl font-light tracking-wide md:text-5xl'>
                High Quality and Superior Care
              </h2>
              <p className='leading-relaxed'>
                We have helped numerous clients achieve their desired results with our advanced non-surgical hair loss and skin treatments.
              </p>
              <div className='pb-0 pt-5 md:pb-10 lg:pb-0'>
                <BaseButton text='More About Us' path='/about' />
              </div>
            </div>
            <div className='order-1 h-full w-full md:order-2'>
              <Image
                className='h-full w-full object-cover object-center'
                draggable='false'
                src='/media/treatment.webp'
                alt='Smiling woman'
                width={500}
                height={500}
              />
            </div>
          </div>
        </Container>
      </section>
      <Reviews />
    </>
  )
}
export default Home
