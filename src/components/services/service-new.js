import ContactBanner from '@/components/contact_banner'
import Container from '@/components/container'
import EmailBanner from '@/components/email_banner'
import FaqsNew from '@/components/faqs-new'
import SanityBlock from '@/components/sanity/sanity_block'
import {
  BanknotesIcon,
  ClockIcon,
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
import {
  A11y,
  Autoplay,
  Keyboard,
  Navigation,
  Pagination,
  Scrollbar
} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const ServiceNew = ({ service }) => {
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
      <section className='mt-10 overflow-hidden'>
        <Container classList='md:px-5'>
          <div className='grid border border-gray-100 bg-gray-100 md:grid-cols-2 '>
            <div className='order-2 lg:order-1 flex h-full flex-col justify-center space-y-5 px-10 py-10'>
              <div className='-mt-16 md:mt-0 font-display font-bold text-lg'>
                <div className='flex mt-20 lg:mt-0 flex-col text-sm lg:flex-row lg:space-x-5 md:items-center'>
                  <div className='text-gold-base'>In-Person Medical Supervision</div>
                  <img
                    className='h-7 hidden lg:block w-auto'
                    src='/imagelab-square.png'
                    alt='ImageLab logo'
                  />
                  <div className='text-gold-base'>1:1 Personalized Care</div>
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
              <p className='leading-relaxed font-bold font-display text-xl'>{service.comparisonTitle}</p>
              <p className='leading-relaxed font-display text-lg'>{service.subTitle}</p>

              <div className='flex flex-col lg:flex-row items-center justify-between w-full bg-gray'>
                <div className='flex basis-1/3 flex-row space-x-5 lg:space-x-0 lg:flex-col justify-center items-center w-full bg-green'>
                  <p className='leading-relaxed font-display text-lg'>Starting at</p>
                  <p className='leading-relaxed font-display text-5xl line-through decoration-gold-base mb--2'>${service.regularPrice}</p>
                  <p className='leading-relaxed font-display text-lg'>{service.per}</p>
                </div>
                <div className='flex basis-2/3 flex-col justify-center items-center w-full bg-gold-base text-white rounded-sm p-3'>
                  <p className='leading-relaxed font-display text-lg underline'>{service.discountText}
                  </p>
                  <p className='leading-relaxed font-display text-7xl'>${service.discountPrice}</p>
                </div>
              </div>
              <ul
                role='list'
                className='flex flex-wrap md:justify-center px-10 md:px-0'
              >
                {service.benefits &&
                  service.benefits.map((b, i) => (
                    <>
                      <br></br>
                      <li key={i} className='flex flex-row w-full space-x-2 md:w-1/2'>
                        <div>
                          <CheckCircleIcon className='h-5 w-5 text-gold-base' />
                        </div>
                        <p >{b}</p>
                      </li>
                    </>
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
            <div className='mt-4 md:mt-0 order-1 lg:order-2 md:h-full'>
              <Image
                draggable='false'
                src={service.heroImage.asset.url}
                alt={service?.heroImage?.alt}
                className='h-[35vh] w-full object-cover md:h-full'
                height={900}
                width={900}
                priority
              />
            </div>
          </div>
        </Container>
      </section>
      {service.showResults && (
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
                {service.beforeAfterImages.images.map((image, index) => (
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
      <section className='pt-20 pb-10'>
        <Container classList='px-5'>
        <div style={{
            backgroundColor: '#65B8B4'
          }} className='w-full flex flex-col items-center p-10 mb-20 rounded-md'>
            <div style={{
              textDecorationSkipInk: 'none'
            }} className='text-center text-4xl md:text-6xl font-display text-white font-light'><SanityBlock blocks={service.featureText} /></div>
            <Link
              href={`/book-now`}
              className='rounded border font-bold border-teal-600 bg-teal-600 mt-7 px-10 py-2 w-full text-center text-white hover:bg-teal-700'
            >
              Get Started Now
            </Link>
          </div>
          <h2 className='text-3xl font-display text-center'>3 Simple Steps to <span className='font-bold text-gold-base'>Start Losing Weight</span> - <span className='underline'>Get Started Now!</span></h2>
          <div class="flex flex-col md:flex-row justify-between w-full">
            <div class="basis-1/3 flex flex-col items-center mt-5">
              <div className='flex flex-row items-center'>
                <div className='h-10 w-10 bg-gold-base rounded-full text-white flex flex-row font-display justify-center items-center mr-2'>1</div>
                <p className='font-display text-xl text-gold-base'>{service.stepOneText}</p>
              </div>
              <img
                src={service.stepOneImage.asset.url}
                alt={service?.stepOneImage?.alt}
                className='mt-5 px-3 w-auto'
                priority
              />
            </div>
            <div class="basis-1/3 flex flex-col items-center mt-5">
              <div className='flex flex-row items-center'>
                <div className='h-10 w-10 bg-gold-base rounded-full text-white flex flex-row font-display justify-center items-center mr-2'>2</div>
                <p className='font-display text-xl text-gold-base'>{service.stepTwoText}</p>
              </div>
              <img
                src={service.stepTwoImage.asset.url}
                alt={service?.stepTwoImage?.alt}
                className='mt-5 px-3 w-auto'
                priority
              />
            </div>
            <div class="basis-1/3 flex flex-col items-center mt-5">
              <div className='flex flex-row items-center'>
                <div className='h-10 w-10 bg-gold-base rounded-full text-white flex flex-row font-display justify-center items-center mr-2'>3</div>
                <p className='font-display text-xl text-gold-base'>{service.stepThreeText}</p>
              </div>
              <img
                src={service.stepThreeImage.asset.url}
                alt={service?.stepThreeImage?.alt}
                className='mt-5 px-3 w-auto'
                priority
              />
            </div>
          </div>
        </Container>
      </section>
      <section className='py-16'>
        <Container classList='px-5'>
          <div className='w-full flex flex-col md:flex-row'>
            <div className='basis-1/2 flex flex-col items-start mb-5 md:mb-0 space-y-2 md:space-y-5'>
              <p className='font-display font-thin text-lg'>Here at ImageLab, we offer</p>
              <h2 className='font-display text-4xl md:text-7xl'><span className='text-gold-base'>Real</span> Medications.</h2>
              <h2 className='font-display text-4xl md:text-7xl'><span className='text-gold-base'>Real</span> Supervision.</h2>
              <h2 className='font-display text-4xl md:text-7xl'><span className='text-gold-base'>Real</span> Results.</h2>
            </div>
            <div className='basis-1/2 flex flex-col items-end space-y-5'>
              <div className='border rounded-md p-5 w-full border-teal-900'>
                <div className='flex flex-row space-x-1'>
                  <StarIcon className='h-5 w-5 text-gold-base' />
                  <StarIcon className='h-5 w-5 text-gold-base' />
                  <StarIcon className='h-5 w-5 text-gold-base' />
                  <StarIcon className='h-5 w-5 text-gold-base' />
                  <StarIcon className='h-5 w-5 text-gold-base' />
                </div>
                <p className='font-display text-lg mt-2'>“{service.testimony}”</p>
                <p className='text-right font-bold font-display text-lg text-gold-base'>{service.testimonyPerson}</p>
                <p className='text-right font-display'>ImageLab Patient</p>
              </div>
            </div>
          </div>

        </Container>
      </section>
      <section className='py-16 bg-teal-50'>
        <Container classList='px-5'>
          <div className='w-full flex flex-col text-center items-center'>
            <h2 className='pb-5 font-display text-4xl md:text-6xl'>Why choose <span className='text-gold-base'>In-Person</span> versus Telehealth?</h2>
            <ul
              role='list'
              className='flex flex-col justify-center space-y-2 border-teal-900 p-5'
            >
              {service.inPerson &&
                service.inPerson.map((body, i) => (
                  <li key={i} className='flex h-full flex-row space-x-5 items-center text-left'>
                    <div>
                      <CheckCircleIcon className='h-10 w-10 text-gold-base' />
                    </div>
                    <p className='font-display text-2xl font-thin'><span className='text-gold-base font-bold'>{body.short}</span>: {body.long}</p>
                  </li>
                ))}
            </ul>
            <Link
              href={`/book-now`}
              className='rounded border font-bold border-teal-600 bg-teal-600 mt-7 px-10 py-2 w-full text-center text-white hover:bg-teal-700'
            >
              Get Started Now
            </Link>
          </div>

        </Container>
      </section>
      <section className='py-10'>
        <Container classList='px-5'>
          <h2 className='pb-5 font-display text-4xl md:text-6xl text-center mb-5'>Program Information</h2>
          {/* <div className='grid gap-10 lg:grid-cols-12'> */}
          <div className='order-1 flex w-full flex-col rounded border border-teal-900 p-10 lg:order-2 lg:col-span-6 mt-5'>
            <div className='flex flex-col space-y-5 md:flex-row md:space-x-5 md:space-y-0'>
              <div className='flex h-10 w-10 md:h-20 md:w-20 items-center justify-center rounded bg-teal-50'>
                <PuzzlePieceIcon className='h-5 w-5 md:h-10 md:w-10 text-teal-700' />
              </div>
              <div className='h-full w-full'>
                <h3 className='font-display text-2xl text-left'>Dosing Plan</h3>
                <img
                  className='rounded'
                  src={service.dosingPlan.asset.url}
                  alt={service?.dosingPlan?.alt}
                  priority
                />
              </div>
            </div>
          </div>
          <div className='order-2 flex flex-col space-y-10 lg:order-1 lg:col-span-6'>

          </div>
          <div className='order-1 flex w-full flex-col rounded border border-teal-900 p-10 lg:order-2 lg:col-span-6 mt-5'>
            <div className='flex flex-col space-y-5 md:flex-row md:space-x-5 md:space-y-0'>
              <div className='flex h-10 w-10 md:h-20 md:w-20 items-center justify-center rounded bg-teal-50'>
                <PuzzlePieceIcon className='h-5 w-5 md:h-10 md:w-10  text-teal-700' />
              </div>
              <div className='flex flex-col w-full'>
                <h2 className='font-display text-2xl'>How It Works</h2>
                <div className='prose text-black w-full max-w-full'>
                  <SanityBlock blocks={service.howItWorks} />
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </Container>
      </section>
      <section className='pt-10 pb-20'>
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
      <FaqsNew data={service.faqs} />
      {/* <div className='-mt-10'>
        <ContactBanner />
      </div> */}
      {/* <EmailBanner /> */}
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
      {service.disclaimer && (
        <p className='p-5 w-full text-sm'>{service.disclaimer}</p>
      )}
    </>
  )
}

export default ServiceNew
