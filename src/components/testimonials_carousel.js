import Container from '@/components/container'
import {
  ArrowSmallLeftIcon,
  ArrowSmallRightIcon
} from '@heroicons/react/24/solid'
import { orderBy } from 'lodash'
import { CarouselJsonLd } from 'next-seo'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import 'swiper/css'
import { A11y, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import FadeInOnScroll from './fadeIn'
const SlideContent = ({ cat }) => (
  <div className='flex flex-col justify-between relative cursor-grab rounded-md border border-black text-black px-5 py-5 h-[275px] lg:h-[375px] xl:h-[275px]'>
    <p className='text-left text-sm font-bold'>
      "{cat.text}"
    </p>
    <div className='flex flex-row w-full justify-center items-center space-x-2 mt-3'>
      <p class="font-bold">{cat.person}</p>
      <Image src='/google-logo.png' alt='Google Logo' width={30} height={30}></Image>
    </div>
    {/* <Image
      className='h-[450px] w-full rounded object-cover object-center'
      draggable='false'
      src={cat.heroImage.asset.url}
      alt={cat.heroImage.alt ? cat.heroImage.alt : cat.title}
      width={500}
      height={500}
    /> */}
    {/* <div className='absolute bottom-0 left-0 right-0 h-[60%] rounded-bl rounded-br bg-gradient-to-t from-black to-transparent' />
    <div className='absolute bottom-3 left-3 flex flex-col p-5'>
      <h4 className='text-left font-serif text-2xl text-white'>{cat.title}</h4>
      <p className='h-[100px] py-2 text-left text-sm text-white'>
        {cat.subTitle}
      </p>
      <div>
        <Link
          href={`/services/${cat.slug}`}
          className='rounded border border-white px-3 py-2 text-sm text-white hover:bg-white hover:text-black'
        >
          Learn More
        </Link>
      </div>
    </div> */}
  </div>
)

const TestimonialsCarousel = ({ testimonials }) => {
  const swiperRef = useRef(null)
  // const [category, setCategory] = useState(categories['Injectables'])
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

    //const numOfSlides = swiperRef.current.swiper.slides.length

    let progressCalc = ((activeIndex + 1) / end) * 100
    const progress = progressCalc >= 100 ? 100 : progressCalc

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

  // const sortedCategories = Object.keys(categories)

  return (
    <>
        <CarouselJsonLd
          ofType='service'
          data={testimonials}
          />
        <section className='-mt-10 relative w-full'>
          <FadeInOnScroll>
          <Container>
            <Swiper
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30
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
              className='w-[275px] md:w-full'
            >
              {
                testimonials.map((cat, i) => (
                  <SwiperSlide key={i}>
                    <SlideContent cat={cat} />
                  </SwiperSlide>
                ))}
            </Swiper>
            <div className='flex flex-row items-center justify-between space-x-10 px-5 md:px-0 mt-8'>
              <div className='h-[3px] w-full items-center border border-solid border-gray-50 bg-gray-100'>
                <div
                  id='progress-bar'
                  style={{ width: `${progress}%` }}
                  className='h-[1px] border border-beaver bg-beaver'
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
          </Container>
        </FadeInOnScroll>
        </section>
    </>
  )
}

export default TestimonialsCarousel
