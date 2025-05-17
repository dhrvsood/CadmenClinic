import ContactBanner from '@/components/contact_banner'
import Container from '@/components/container'
import EmailBanner from '@/components/email_banner'
import Faqs from '@/components/faqs'
import SanityBlock from '@/components/sanity/sanity_block'
import {
  BanknotesIcon,
  ClockIcon,
  PuzzlePieceIcon
} from '@heroicons/react/24/outline'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import {
  A11y,
  Autoplay,
  Keyboard,
  Navigation,
  Pagination,
  Scrollbar
} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const Service = ({ service }) => {
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
        canonical={`https://www.imagelabmedspa.com/services/${service?.slug.current}`}
        openGraph={{
          url: `https://www.imagelabmedspa.com/services/${service?.slug.current}`,
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
      <section className='mt-10 overflow-hidden'>
        <Container classList='md:px-5'>
          <div className='grid border border-gray-100 bg-gray-100 md:grid-cols-2'>
            <div className='order-2 flex h-full flex-col justify-center space-y-5 px-10 py-10 xl:py-20'>
              <div className='-mt-16 pb-2 md:mt-0'>
                {service?.promo && (
                  <div className='border border-gold-base bg-gold-base p-3 text-center text-xs font-medium uppercase tracking-wider text-white'>
                    {service?.promo}
                  </div>
                )}
              </div>
              <h1
                className={`font-display font-light tracking-wide ${
                  service?.title.length > 28
                    ? 'text-4xl xl:text-5xl'
                    : 'text-4xl xl:text-6xl'
                }`}
              >
                {service?.title}
              </h1>
              <p className='leading-relaxed'>{service?.subTitle}</p>
              <div>
                <p className='flex flex-row items-center space-x-3'>
                  <span>
                    <ClockIcon className='h-4 w-4' />
                  </span>
                  <span>{service?.duration} minute duration</span>
                </p>
                <p className='flex flex-row items-center space-x-3'>
                  <span>
                    <BanknotesIcon className='h-4 w-4' />
                  </span>
                  <span>starting at ${service?.cost}</span>
                </p>
              </div>
              <div className='flex w-full'>
                <Link
                  style={{
                    boxShadow: 'rgb(168 206 204) -9px 9px 0px 0px'
                  }}
                  href='/book-now'
                  className='w-full rounded border border-teal-600 bg-teal-600 px-10 py-3 text-center font-light text-white hover:bg-teal-700'
                >
                  Book Now
                </Link>
              </div>
            </div>
            <div className='order-1 h-full'>
              <Image
                draggable='false'
                src={service?.heroImage.asset.url}
                alt={service?.heroImage?.alt}
                className='h-[30vh] w-full object-cover md:h-full'
                height={900}
                width={900}
                priority
              />
            </div>
          </div>
        </Container>
      </section>
      {service?.showResults && (
        <section className='-mb-5 pt-10'>
          <Container classList='px-5'>
            <div className='rounded border border-teal-700 py-5 md:px-10'>
              <h2 className='pb-5 text-center font-display text-4xl md:text-6xl'>
                Results
              </h2>
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                centeredSlides={true}
                grabCursor={true}
                keyboard={{
                  enabled: true,
                  onlyInViewport: true
                }}
                pagination={{
                  clickable: true
                }}
                modules={[
                  Keyboard,
                  Autoplay,
                  Navigation,
                  Pagination,
                  Scrollbar,
                  A11y
                ]}
                breakpoints={{
                  // when window width is >= 768px
                  768: {
                    slidesPerView: 1
                  }
                }}
              >
                {service?.beforeAfterImages.images.map((image, index) => (
                  <SwiperSlide key={index} className='mb-10 rounded sm:mb-5'>
                    <img
                      src={image.asset.url}
                      alt={`Descriptive text about image ${index}`} // Replace with actual description
                      className='ms:px-10 mx-auto w-full rounded object-contain object-center px-5 md:h-[600px] md:px-0'
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Container>
        </section>
      )}
      <section className='py-20'>
        <Container classList='px-5'>
          <div className='grid gap-10 lg:grid-cols-12'>
            <div className='order-2 flex flex-col space-y-10 lg:order-1 lg:col-span-4'>
              <div className='h-full rounded border border-teal-900'>
                <h2 className='px-5 py-2 font-display text-2xl'>Benefits</h2>
                <ul
                  role='list'
                  className='flex flex-col justify-center space-y-2 border-t border-teal-900 p-5'
                >
                  {service?.benefits &&
                    service?.benefits.map((b, i) => (
                      <li key={i} className='flex h-full flex-row space-x-2'>
                        <div>
                          <CheckCircleIcon className='h-5 w-5 text-gold-base' />
                        </div>
                        <p>{b}</p>
                      </li>
                    ))}
                </ul>
              </div>
              <div className='h-full rounded border border-teal-900 bg-teal-50'>
                <h2 className='px-5 py-2 font-display text-2xl'>
                  Treatable Conditions
                </h2>
                <ul
                  role='list'
                  className='flex flex-col space-y-2 border-t border-teal-900 p-5'
                >
                  {service?.conditions &&
                    service?.conditions.map((c, i) => (
                      <li
                        key={i}
                        className='flex flex-row items-center space-x-2'
                      >
                        <div>
                          <Image
                            src={c?.icon?.asset?.url}
                            alt={c.title}
                            height='23'
                            width='23'
                          />
                        </div>
                        <div>{c.title}</div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className='order-1 flex w-full flex-col rounded border border-teal-900 p-10 lg:order-2 lg:col-span-8'>
              <div className='flex flex-col space-y-5 md:flex-row md:space-x-5 md:space-y-0'>
                <div className='flex h-20 w-20 items-center justify-center rounded bg-teal-50'>
                  <PuzzlePieceIcon className='h-10 w-10 text-teal-700' />
                </div>
                <div className='flex flex-col'>
                  <h2 className='font-display text-2xl'>How It Works</h2>
                  <div className='prose text-black'>
                    <SanityBlock blocks={service?.howItWorks} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className='pb-20'>
        <Container classList='px-5'>
          <h2 className='pb-5 font-display text-4xl md:text-6xl'>Pricing</h2>
          <p>{service?.pricingDescription}</p>
          <div className='grid gap-10 lg:grid-cols-12'>
            <ul role='list' className='lg:col-span-8'>
              {service?.packages.map(($package) => (
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
                              <div className='xs:hidden'>
                                Standard $
                                {new Intl.NumberFormat('en-US', {
                                  minimumFractionDigits: 2,
                                  maximumFractionDigits: 2
                                }).format(Number(item.standardPrice))}
                              </div>
                              <div className='font-bold xs:hidden'>
                                Member $
                                {new Intl.NumberFormat('en-US', {
                                  minimumFractionDigits: 2,
                                  maximumFractionDigits: 2
                                }).format(Number(item.memberPrice))}
                              </div>
                            </div>
                          </li>
                          <li className='hidden p-5 text-center xs:block sm:w-32'>
                            $
                            {new Intl.NumberFormat('en-US', {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2
                            }).format(Number(item.standardPrice))}
                          </li>

                          <li className='border-l-none hidden bg-teal-50 p-5 text-center xs:block xs:w-24 xs:border-l xs:border-teal-700 sm:w-32'>
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
            <div className='hidden lg:col-span-4 lg:block'>
              <Image
                src={service?.packagesImage.asset.url}
                alt={service?.packagesImage.alt}
                draggable='false'
                sizes='100vw'
                className='h-[95%] rounded object-cover object-center'
                width={500}
                height={500}
              />
            </div>
          </div>
        </Container>
      </section>
      <Faqs data={service?.faqs} />
      <div className='-mt-10'>
        <ContactBanner />
      </div>
      <EmailBanner />
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
    </>
  )
}

export default Service
