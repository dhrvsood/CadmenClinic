import ContactBanner from '@/components/contact_banner'
import Container from '@/components/container'
import EmailBanner from '@/components/email_banner'
import FaqsLanding from '@/components/faqs-landing'
import SanityBlock from '@/components/sanity/sanity_block'
import {
  PuzzlePieceIcon
} from '@heroicons/react/24/outline'
import { CheckCircleIcon, StarIcon } from '@heroicons/react/24/solid'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import TestimonialsCarousel from '@/components/testimonials_carousel'
import BeforeAfterServiceCarousel from '@/components/before_and_after_service_carousel'
import { Parallax } from 'react-scroll-parallax';
import { useMediaQuery } from '@react-hook/media-query';
import FadeInOnScroll from '@/components/fadeIn'


const ServiceLanding = ({ service }) => {
  const isSmallViewport = useMediaQuery('(max-width: 640px)');
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const firstInteractiveElement = useRef(null) // Reference to the first interactive element in the modal

  const openModal = (image) => {
    setSelectedImage(image)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedImage(null)
  }

  const handleEscape = (event) => {
    if (event.key === 'Escape') {
      closeModal()
    }
  }

  useEffect(() => {
    if (isModalOpen) {
      window.addEventListener('keydown', handleEscape)
      firstInteractiveElement.current?.focus() // Focus the first interactive element when modal opens
    } else {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isModalOpen])

  return (
    <>
      <NextSeo
        title={service?.seoTitle}
        description={service?.seoDescription}
        canonical={`https://www.imagelabmedspa.com/services-new/${service.slug.current}`}
        openGraph={{
          url: `https://www.imagelabmedspa.com/services-new/${service.slug.current}`,
          title: `${service?.seoTitle}`,
          description: `${service?.seoDescription}`,
          siteName: 'ImageLab Med Spa'
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image'
        }}
      />
      <section>
        <div className='smooth-point grid md:grid-cols-3 md:gap-5 bg-teal-50 mt-10 w-full'>
          <div className='col-span-1 md:order-2 md:col-span-2 flex flex-col justify-center text-center space-y-5 py-5 px-0 md:px-5 w-full'>
            <FadeInOnScroll>
              <h1 className='font-display text-5xl font-light tracking-wide xl:text-5xl mt-5'>
                {service.testimonialTitle}
              </h1>
            </FadeInOnScroll>
            <FadeInOnScroll>
              <p className='leading-relaxed mb-5 text-sm md:text-md'>
                {service.testimonialSubtitle}
              </p>
            </FadeInOnScroll>
            <FadeInOnScroll>
              <div className='flex flex-col md:flex-row w-full justify-center md:justify-start space-x-2 items-center'>
                <p className='w-15 font-bold'>Google Reviews</p>
                <div className='flex flex-row space-x-1'>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i}>
                      <StarIcon className='h-5 w-5 text-yellow-400' />
                    </div>
                  ))}
                  <p className='font-bold '>{service.numReviews}+</p>
                </div>
              </div>
            </FadeInOnScroll>
            <TestimonialsCarousel className='w-full' testimonials={service.testimonials} />
            <FadeInOnScroll>
              <div className='flex w-full mt-8'>
                <Link
                  href={`/book-now`}
                  className='w-full text-bold rounded border border-teal-600 bg-teal-600 px-10 mx-5 md:mx-0 py-3 text-right text-white hover:bg-teal-700 flex justify-center font-bold'
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
                src={service.heroImage.asset.url}
                alt={service.heroImage.alt}
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
      <section className='relative z-10 overflow-hidden w-full bg-white'>
        {/* <Container classList='md:px-5'> */}
        <div className={`border border-gray-100 bg-gray-100 md:grid-cols-2 ${service.useFlex ? 'flex flex-col md:flex-row' : 'grid'}`}>
          <div className={`order-1 flex h-full col-span-1 flex-col justify-start space-y-5 px-10 py-0 pb-10 md:py-10 ${service.useFlex ? 'flex-grow xl:mx-16': ''}`}>
            <div className={`-mt-16 lg:mt-8 font-display font-bold text-lg ${service.useFlex ? '-mt-8' : ''}`}>
              <div className='flex mt-20 lg:mt-0 flex-col lg:flex-row lg:space-x-5 lg:items-center'>
                <div className='text-gold-base'>
                  <span>{service.top1}</span>
                </div>
                <img
                  className='h-7 hidden lg:block w-auto'
                  src='/imagelab-square.png'
                  alt='ImageLab logo'
                />
                <div className='text-gold-base'>
                  <span>{service.top2}</span>
                </div>
              </div>

            </div>
            <h1
              className={`font-display font-light tracking-wide ${service.title.length > 28
                ? 'text-4xl xl:text-5xl'
                : 'text-4xl xl:text-6xl'
                }`}
            >
              {service.title}
            </h1>
            <p className={`leading-relaxed font-bold font-display text-xl ${service.useFlex ? 'hidden' : ''}`}>{service.comparisonTitle}</p>
            <p className='leading-relaxed font-display text-xl'>{service.subTitle}</p>

            <div className={`flex flex-col lg:flex-row items-center w-full bg-gray ${service.useFlex ? 'justify-start' : 'justify-between'}`}>
              <div className='flex basis-1/3 flex-row space-x-5 lg:space-x-0 lg:flex-col justify-center items-center w-full bg-green'>
                <p className='leading-relaxed font-display text-lg'>Starting at</p>
                <p className='leading-relaxed font-display text-5xl line-through decoration-gold-base mb--2'>${service.regularPrice}</p>
                <p className='leading-relaxed font-display text-lg'>{service.per}</p>
              </div>
              <div className={`flex flex-col justify-center items-center w-full bg-gold-base text-white rounded-sm p-3 ${service.useFlex ? 'basis-2/3 xl:basis-3/5 py-5' : 'basis-2/3'}`}>
                <p className='leading-relaxed font-display text-lg underline mt-1'>{service.discountText}
                </p>
                <p className='leading-relaxed font-display text-7xl'>${service.discountPrice}</p>
              </div>
            </div>
            <ul role='list' className='grid grid-cols-1 md:grid-cols-2 md:gap-4'>
              {service.benefits && service.benefits.map((b, i) => (
                <li key={i} className={`flex flex-row items-center space-x-2 ${i === service.benefits.length - 1 && service.benefits.length % 2 !== 0 ? 'md:col-span-2' : ''}`}>
                  <div>
                    <CheckCircleIcon className='h-5 w-5 text-gold-base' />
                  </div>
                  <p>{b}</p>
                </li>
              ))}
            </ul>


            <div className='flex w-full'>
              <Link
                style={{
                  boxShadow: 'rgb(168 206 204) -9px 9px 0px 0px'
                }}
                href={`/book-now`}
                className='w-full font-bold rounded border border-teal-600 bg-teal-600 px-10 py-3 text-center text-bold font-light text-white hover:bg-teal-700'
              >
                Get Started Now
              </Link>
            </div>
          </div>
          <div className={`relative mt-4 md:mt-0 order-2 col-span-1 md:h-full ${service.useFlex ? 'mr-5 xl:mr-20' : ''}`}>
            <h1 className='text-3xl font-display text-center md:mt-16 mb-5'>Results</h1>
            <BeforeAfterServiceCarousel images={service.beforeAfterImages.images.map((image) => ({ category: service.categoryString, title: service.title, slug: service.serviceSlug.current, ...image }))} imageWidth={service.flexWidth}/>
          </div>
        </div>
        {/* </Container> */}
      </section>
      <section className='py-10'>
        <Container classList='px-5'>
          <div className='order-1 flex w-full flex-col rounded border border-teal-900 p-10 lg:order-2 lg:col-span-6 mt-5'>
            <div className='flex flex-col space-y-5 md:flex-row md:space-x-5 md:space-y-0'>
              <div className='flex h-10 w-10 md:h-20 md:w-20 items-center justify-center rounded bg-teal-50'>
                <PuzzlePieceIcon className='h-5 w-5 md:h-10 md:w-10  text-teal-700' />
              </div>
              <div className='flex flex-col w-full'>
                <h2 className='font-display text-2xl'>How It Works</h2>
                <div className='prose mt-5 text-black w-full max-w-full'>
                  <SanityBlock blocks={service.howItWorks} />
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </Container>
      </section>
      <section className='pt-5 pb-10'>
        <Container classList='px-5'>
          <h2 className='pb-5 font-display text-4xl md:text-6xl text-center'>Pricing</h2>
          <p>{service.pricingDescription}</p>
          <div className='grid gap-10 lg:grid-cols-12'>
            <ul role='list' className='lg:col-span-12'>
              {service.packages.map(($package) => (
                <li
                  key={$package.title}
                  className='mb-10 rounded border border-teal-700'
                >
                  <div className='flex flex-row border-b border-teal-700'>
                    <p className='grow bg-teal-50 p-3 text-xl font-bold xs:bg-transparent'>
                      {$package.title}
                    </p>
                    <p className='hidden p-3 text-center font-medium xs:block xs:w-24 sm:w-32'>
                      Standard
                    </p>
                    <p className='border-l-none hidden bg-gold-base text-white font-bold p-3 text-center xs:block xs:w-24 xs:border-l xs:border-teal-700 sm:w-32'>
                      First-Time
                    </p>
                    <p className='border-l-none hidden bg-teal-50 p-3 text-center font-medium xs:block xs:w-24 xs:border-l xs:border-teal-700 sm:w-32'>
                      Member
                    </p>
                  </div>
                  <ul role='list' className='flex flex-col'>
                    {Array.isArray($package?.packageItems) &&
                      $package.packageItems.map((item, i) => (
                        <div key={i} className='flex flex-row'>
                          <li className='flex grow flex-col justify-between p-5 xs:flex-row'>
                            <div>
                              <span className='text-lg font-medium'>
                                {item.name}
                              </span>
                              <span className='block pb-2 text-sm text-gray-400 md:pb-0 md:pl-0'>
                                {$package.measurementUnit}
                              </span>
                            </div>
                            <div>
                              <div className='sm:hidden'>
                                Standard $
                                {new Intl.NumberFormat('en-US', {
                                  minimumFractionDigits: 2,
                                  maximumFractionDigits: 2
                                }).format(Number(item.standardPrice))},
                              </div>
                              <div className='font-bold sm:hidden'>
                                First-Time $
                                {new Intl.NumberFormat('en-US', {
                                  minimumFractionDigits: 2,
                                  maximumFractionDigits: 2
                                }).format(Number(item.firstPrice))},
                              </div>
                              <div className='sm:hidden'>
                                Member $
                                {new Intl.NumberFormat('en-US', {
                                  minimumFractionDigits: 2,
                                  maximumFractionDigits: 2
                                }).format(Number(item.memberPrice))}
                              </div>
                            </div>
                          </li>

                          <li className='hidden p-5 text-center sm:block sm:w-32'>
                            $
                            {new Intl.NumberFormat('en-US', {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2
                            }).format(Number(item.standardPrice))}
                          </li>
                          <li className='border-l-none hidden bg-gold-base text-white p-5 text-center font-bold sm:block xs:w-24 xs:border-l xs:border-teal-700 sm:w-32'>
                            $
                            {new Intl.NumberFormat('en-US', {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2
                            }).format(Number(item.firstPrice))}
                          </li>

                          <li className='border-l-none hidden bg-teal-50 p-5 text-center sm:block xs:w-24 xs:border-l xs:border-teal-700 sm:w-32'>
                            $
                            {new Intl.NumberFormat('en-US', {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2
                            }).format(Number(item.memberPrice))}
                          </li>
                        </div>
                      ))}
                  </ul>
                </li>
              ))}
            </ul>
            {/* <div className='hidden lg:col-span-4 lg:block'>
              <Image
                src={service.packagesImage.asset.url}
                alt={service.packagesImage.alt}
                draggable='false'
                sizes='100vw'
                className='h-[95%] rounded object-cover object-center'
                width={500}
                height={500}
              />
            </div> */}
          </div>
        </Container>
      </section>
      <section className="z-10 relative">
        <FaqsLanding data={service.faqs} service={service} />
      </section>
      {isModalOpen && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'
          onClick={closeModal}
          role='dialog'
          aria-modal='true'
          aria-labelledby='modalTitle'
          aria-describedby='modalDescription'
        >
          <div className='rounded-lg bg-white p-4 shadow-lg' role='document'>
            <h2 id='modalTitle' className='sr-only'>
              Image Modal
            </h2>
            <p id='modalDescription' className='sr-only'>
              A larger view of the selected image.
            </p>
            <button
              ref={firstInteractiveElement}
              onClick={closeModal}
              className='focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
              aria-label='Close modal'
            >
              Close
            </button>
            <Image
              src={selectedImage.asset.url}
              alt={selectedImage.alt || 'Descriptive alternative text'}
              width={800} // Adjust size as needed
              height={800}
            />
          </div>
        </div>
      )}
      <section class="relative z-0">

        <div className="flex flex-col mb--10 md:mb-0 md:grid md:grid-cols-3 md:h-[500px]"><Parallax speed={isSmallViewport ? 0 : -20} className="h-[300px] relative z-0 md:h-[600px]">
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
      <section class="-mt-10 z-30 relative bg-white">
        <FadeInOnScroll>
          <ContactBanner className='smooth-point' />
        </FadeInOnScroll>
      </section>
    </>
  )
}

export default ServiceLanding
