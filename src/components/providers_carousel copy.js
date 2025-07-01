import Container from '@/components/container'
import { providers } from '@/doc/providers'
import {
  ArrowSmallLeftIcon,
  ArrowSmallRightIcon
} from '@heroicons/react/24/solid'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import 'swiper/css'
import { A11y, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const SlideContent = ({ provider }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className='relative h-full w-full cursor-grab'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        draggable='false'
        className='h-[500px] w-full object-cover object-center'
        src={provider.image}
        alt={provider.name}
        width={500}
        height={100}
        priority={false}
      />
      <div className='absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-t from-gray-700 to-transparent' />
      <div className='absolute bottom-3 left-3 flex flex-col p-5'>
        <h4 className='font-display text-2xl font-light tracking-wide text-white'>
          {provider.name}
        </h4>
      </div>
      <div
        className={`absolute inset-0 z-[20] ${
          isHovered ? '' : 'hidden'
        } h-full bg-black bg-opacity-80 p-10 text-white`}
      >
        <p className='text-sm'>{provider.bio}</p>
        <blockquote className='pt-5 text-sm italic'>
          &quot;{provider.quote}&quot;
        </blockquote>
      </div>
    </div>
  )
}

const ProvidersCarousel = ({ categories }) => {
  const swiperRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const [activeClass, setActiveClass] = useState('0')

  const handleCategoryChange = (category, index) => {
    setCategory(category)
    setActiveClass(index.toString())

    // Wait until the category is set and the DOM is updated
    setTimeout(() => {
      progressLength()
    }, 0)
  }

  const navigateSlide = (direction) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      if (direction === 'next') {
        swiperRef.current.swiper.slideNext()
      } else if (direction === 'prev') {
        swiperRef.current.swiper.slidePrev()
      }
    }
  }

  const progressLength = () => {
    const swiper = swiperRef.current && swiperRef.current.swiper

    if (!swiper) return

    let slidesPerView
    const width = window.innerWidth

    // Determine the slidesPerView based on breakpoints
    if (width >= 1024) {
      slidesPerView = 3
    } else if (width >= 768) {
      slidesPerView = 2
    } else {
      slidesPerView = 1
    }

    // Calculate the end point based on slidesPerView
    const end = swiper.slides.length / slidesPerView

    // Calculate the active index based on slidesPerView
    const activeIndex = swiper.activeIndex / slidesPerView

    let progress = ((activeIndex + 1) / end) * 100

    setProgress(progress)
  }
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.on('slideChange', progressLength)

      // Set the progress when the page is loaded
      progressLength()
    }

    // Optionally, you can update the progress when the window resizes
    window.addEventListener('resize', progressLength)

    return () => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.off('slideChange', progressLength)
      }
      window.removeEventListener('resize', progressLength)
    }
  }, [])
  return (
    <section className='bg-teal-50 py-20'>
      <Container classList='px-5'>
        <h2 className='pb-10 text-center font-display text-5xl font-light tracking-wide'>
          Our Team
        </h2>
        <div className='mx-auto mt-0 mb-10'>
          <p className='text-center py-3 text-left mx-5'>
            Our team at ImageLab is composed of highly trained professionals with years of experience in the cosmetic dermatology field. Each member is dedicated to providing personalized care and guiding you toward achieving your skin goals with precision, safety, and attention to detail.
          </p>
        </div>
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50
            }
          }}
          modules={[A11y, Navigation]}
          tabIndex={0}
          keyboard={{
            enabled: true,
            onlyInViewport: true
          }}
          ref={swiperRef}
          spaceBetween={50}
          onSlideChange={progressLength}
          a11y={{
            containerMessage: 'Home hero carousel of images',
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
            firstSlideMessage: 'This is the first slide',
            lastSlideMessage: 'This is the last slide',
            slideRole: 'Group',
            slideLabelMessage: '{{index}} / {{slidesLength}}'
          }}
        >
          {providers.map((provider, i) => (
            <SwiperSlide key={i}>
              <SlideContent provider={provider} />
            </SwiperSlide>
          ))}
        </Swiper>

        {providers.length > 3 && (
        <div className='flex flex-row items-center justify-between space-x-10 px-5 pt-10 md:px-0'>
          <div className='h-[3px] w-full grow items-center border border-solid border-gray-50 bg-gray-100'>
            <div
              id='progress-bar'
              style={{ width: `${progress}%` }}
              className='h-[1px] border border-teal-700 bg-teal-700'
            />
          </div>
          <div className='flex flex-row space-x-5'>
            <button
              onClick={() => navigateSlide('prev')}
              aria-label='Previous Slide'
            >
              <span className='sr-only'>Previous Slide</span>
              <ArrowSmallLeftIcon className='h-8 w-8' />
            </button>
            <button
              onClick={() => navigateSlide('next')}
              aria-label='Next Slide'
            >
              <span className='sr-only'>Next Slide</span>
              <ArrowSmallRightIcon className='h-8 w-8' />
            </button>
          </div>
        </div>
        )}
      </Container>
    </section>
  )
}

export default ProvidersCarousel
