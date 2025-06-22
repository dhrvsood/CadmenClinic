import ContactBanner from '@/components/contact_banner'
import TestimonialsCarousel from '@/components/testimonials_carousel'
import BeforeAfterCarousel from '@/components/before_and_after_carousel'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { categoriesQuery, servicesQuery } from '@/sanity/lib/queries'
import { StarIcon } from '@heroicons/react/24/solid'
import ServicesCarousel from '@/components/services_carousel'
import { Parallax } from 'react-scroll-parallax';
import { useMediaQuery } from '@react-hook/media-query';
import FadeInOnScroll from '@/components/fadeIn'

const shiftImages = (images) => {
  const shiftedImages = [...images]; // Create a copy of the original array
  const firstImage = shiftedImages.shift(); // Remove the first image
  shiftedImages.push(firstImage); // Add the first image to the end
  return shiftedImages;
};

const process = [
  {
    step: 1,
    name: 'Safety First',
    description:
      'Ensuring your safety is our paramount concern, as evidenced by our carefully curated services dedicated to your well-being. Furthermore, our treatments are exclusively conducted by licensed professionals.'
  },
  {
    step: 2,
    name: 'Science-Backed',
    description:
      "We prioritize rigorous testing and solid scientific research to guide our selection of services, ensuring we never offer any 'miracle' or 'fad' treatments that don't deliver real results."
  },
  {
    step: 3,
    name: 'Results Driven',
    description:
      'Bid farewell to invasive procedures with lengthy recovery periods – our chosen services promise impactful results with minimal downtime.'
  }
]


const GeneralTerms = ({ data, categories }) => {
  const isSmallViewport = useMediaQuery('(max-width: 640px)');
  return (
    <>
      <NextSeo
        title='#1 Trusted Med Spa in Chicago | ImageLab Med Spa'
        description='Discover your beauty potential with our skilled team, offering tailored advanced cosmetic treatments to match your personal desires.'
        canonical='https://www.imagelabmedspa.com/imagelab-best-medspa-chicago'
        openGraph={{
          url: 'https://www.imagelabmedspa.com/imagelab-best-medspa-chicago',
          title: '#1 Trusted Med Spa in Chicago | ImageLab Med Spa',
          description:
            'Discover your beauty potential with our skilled team, offering tailored advanced cosmetic treatments to match your personal desires.',
          images: [
            {
              url: 'https://www.imagelabmedspa.com/og_image.jpg',
              width: 800,
              height: 800,
              alt: 'Interior of ImageLab Med Spa',
              type: 'image/jpeg'
            }
          ],
          siteName: 'ImageLab Med Spa'
        }}
      />
      <section>
        <div className='smooth-point grid md:grid-cols-3 md:gap-5 bg-teal-50 mt-10 w-full'>
          <div className='col-span-1 md:order-2 md:col-span-2 flex flex-col justify-center text-center space-y-5 py-5 px-5 w-full'>
            <FadeInOnScroll>
              <h1 className='font-display text-5xl font-light tracking-wide xl:text-5xl mt-5'>
              {data.testimonialTitle}
              </h1>
            </FadeInOnScroll>
            <FadeInOnScroll>
              <p className='leading-relaxed mb-5 text-sm md:text-md'>
              {data.testimonialSubtitle}
              </p>
            </FadeInOnScroll>
            <FadeInOnScroll>
              <div className='flex flex-row w-full justify-center md:justify-start space-x-2 items-center'>
                <p className='w-15 font-bold'>Google Reviews</p>
                <div className='flex flex-row space-x-1'>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i}>
                      <StarIcon className='h-5 w-5 text-yellow-400' />
                    </div>
                  ))}
                </div>
                <p className='font-bold '>{data.numReviews}+</p>
              </div>
            </FadeInOnScroll>
            <TestimonialsCarousel className='w-full' testimonials={data.testimonials} />
            <FadeInOnScroll>
              <div className='flex w-full mt-8'>
                <Link
                  href='https://cadmenclinic.ca.zenoti.com/webstoreNew/services'
                  className='w-full text-bold rounded border border-teal-600 bg-teal-600 px-10 py-3 text-right text-white hover:bg-teal-700 flex justify-center font-bold'
                >
                  Get Started Now
                </Link>
              </div>
            </FadeInOnScroll>


          </div>
          <div className='hidden md:block md:order-1 md:col-span-1 h-full md:h-full'>
            {/* <FadeInOnScroll> */}
            `         <Parallax speed={-20} className='relative z-0 h-full'>
              <Image
                draggable='false'
                src={data.heroImage.asset.url}
                alt={data.heroImage.alt}
                className='h-[700px] object-cover object-center'
                width={1000}
                height={1000}
                priority
                quality={100}
              />
            </Parallax>`
            {/* </FadeInOnScroll> */}
          </div>
        </div>
      </section>
      <section className='relative px-5 pt-10 z-10 bg-white pb-10'>
        <FadeInOnScroll>
          <h2 className='smooth-point text-center font-display text-5xl mb-5 font-light tracking-wide'>
            Before & After
          </h2>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <BeforeAfterCarousel images={data.beforeAfterImages.images} />
        </FadeInOnScroll>
        <div className='block sm:hidden'>
          <FadeInOnScroll>
            <BeforeAfterCarousel className='block sm:hidden' images={shiftImages(data.beforeAfterImages.images)} />
          </FadeInOnScroll>
        </div>
        <FadeInOnScroll>
          <ServicesCarousel className='smooth-point' categories={categories} bookNow={true} />
        </FadeInOnScroll>
        {/* <Container classList='md:px-5'> */}
        <div className='border border-teal-500 bg-teal-400 py-10'>
          <FadeInOnScroll>
            <div className="flex flex-col md:flex-row md:space-x-3 mx-2">
              <h2 className='px-5 pb-5 md:pb-10 font-display text-4xl text-white sm:px-20 underline'>
                {data.serviceSelectionTitle}
              </h2>
              <Link
                href='https://cadmenclinic.ca.zenoti.com/webstoreNew/services'
                className='rounded mx-5 mb-5 md:w-1/3 border border-white py-2 h-full text-center font-medium tracking-wider text-white hover:bg-white hover:text-black'
              >
                Schedule Consultation
              </Link>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll>
            <ul
              role='list'
              className='grid gap-10 px-5 text-white md:grid-cols-3 md:px-20'
            >
              {data.process.map((p, i) => (
                <li key={i} className='flex flex-col space-y-5'>
                  <div className='font-display text-6xl'>{p.step}.</div>
                  <h3 className='font-display text-2xl font-light'>{p.name}</h3>
                  <p>{p.description}</p>
                </li>
              ))}
            </ul>
          </FadeInOnScroll>
        </div>
        {/* </Container> */}
      </section>
      <section class="relative z-0">

        <div className="flex flex-col md:grid md:grid-cols-3 mt--10 md:h-[500px] mx-5"><Parallax speed={isSmallViewport ? 0 : -20} className="h-[300px] relative z-0 md:h-[600px]">
          <Image
            draggable='false'
            src='/media/interior-1.jpg'
            alt='Picture Interior 1'
            className='h-full object-cover object-center'
            width={1000}
            height={1000}
            priority
            quality={100} />
        </Parallax><Parallax speed={isSmallViewport ? 0 : -15} className="h-[300px] relative z-10 md:h-[600px]">
            <Image
              draggable='false'
              src='/media/interior-2.jpg'
              alt='Picture Interior 2'
              className='h-full object-cover object-center'
              width={1000}
              height={1000}
              priority
              quality={100} />
          </Parallax><Parallax speed={isSmallViewport ? 0 : -10} className="h-[300px] relative z-20 md:h-[600px]">
            <Image
              draggable='false'
              src='/media/interior-3.jpg'
              alt='Picture Interior 3'
              className='h-full object-cover object-center'
              width={1000}
              height={1000}
              priority
              quality={100} />
          </Parallax>
        </div>
      </section>
      <section class="md:pt-1 z-30 relative bg-white">
        <FadeInOnScroll>
          <ContactBanner className='smooth-point' />
        </FadeInOnScroll>
      </section>
    </>
  )
}

export default GeneralTerms

export async function getStaticProps(ctx) {
  const res = await client.fetch(categoriesQuery)
  const services = (await client.fetch(servicesQuery)).filter(obj => obj.hasOwnProperty('beforeAfterImages') && obj.beforeAfterImages != null)
  const cats = res.reduce((acc, c) => {
    acc[c.title] = { services: c.services }
    return acc
  }, {})

  const images = services.map((service) => data.beforeAfterImages.images.map((image) =>
  ({
    title: data.title,
    slug: data.slug,
    url: image.asset ? image.asset.url : '',
    generalTerms: image.generalTerms,
    alt: image.alt,
    category: Object.keys(cats).find(cat => cats[cat].services.some(s => s.title === data.title)),
  })
  )).flat(1)
    .filter(image => image.generalTerms)
    .sort((a, b) => {
      if (a.alt === 'Botox 1') return -1;
      if (b.alt === 'Botox 1') return 1;
      if (a.alt === 'Filler 1') return -1;
      if (b.alt === 'Filler 1') return 1;
      if (a.slug === 'botox-and-wrinkle-relaxers') return -1;
      if (b.slug === 'botox-and-wrinkle-relaxers') return 1;
      if (a.slug === 'bbl-and-moxi') return -1;
      if (b.slug === 'bbl-and-moxi') return 1;
      return 0;
    });
  // Reversing the object order
  const categories = Object.keys(cats)
    .reverse()
    .reduce((acc, key) => {
      acc[key] = cats[key]
      return acc
    }, {})

  const images2 = images.slice(1)
  images2.push(images[0])


  return {
    props: { categories, images, images2 },
    revalidate: 60 // In seconds
  }
}
