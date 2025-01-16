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

const CategorySelect = ({
  sortedCategories,
  categories,
  handleCategoryChange
}) => {
  const handleChange = (e) => {
    const categoryKey = e.target.value
    const index = sortedCategories.indexOf(categoryKey)
    handleCategoryChange(categories[categoryKey], categoryKey, index)
  }

  return (
    <div className='flex w-full flex-col px-5 py-10'>
      <select
        onChange={handleChange}
        className='w-full rounded border px-3 py-2'
      >
        <option value='' disabled defaultValue>
          Select a category
        </option>
        {sortedCategories.map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>
    </div>
  )
}

const CategoryButton = ({ isActive, onClick, children }) => (
  <div className='text-xs md:text-sm'>
    <button
      className={`mx-auto border px-5 py-3 text-center uppercase lg:w-40 xl:w-52 ${
        isActive
          ? 'rounded border-customBlack bg-customBlack text-white'
          : 'border-gray-100 bg-gray-100'
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  </div>
)

const SlideContent = ({ cat, bookNow, categoryTitle }) => (
  <div className='relative cursor-grab'>
    <Image
      className='h-[450px] w-full rounded object-cover object-center'
      draggable='false'
      src={cat.heroImage.asset.url}
      alt={cat.heroImage.alt ? cat.heroImage.alt : cat.title}
      width={500}
      height={500}
    />
    <div className='absolute bottom-0 left-0 right-0 h-[60%] rounded-bl rounded-br bg-gradient-to-t from-black to-transparent' />
    <div className='absolute bottom-3 left-3 flex flex-col p-5'>
      <h3 className='text-left font-serif text-2xl text-white'>{cat.title}</h3>
      <p className='h-[100px] py-2 text-left text-sm text-white'>
        {cat.subTitle}
      </p>
      <div>
        (<Link
          href={`/services${cat.slug}`}
          className='rounded border border-white px-3 py-2 text-sm text-white hover:bg-white hover:text-black'
        >
          Learn More
        </Link>)
        {/* } */}
      </div>
    </div>
  </div>
)

const ServicesCarousel = ({ categories, bookNow, title }) => {
  const swiperRef = useRef(null)
  const [category, setCategory] = useState(categories['Injectables'])
  const [categoryTitle, setCategoryTitle] = useState('Injectables')
  const [progress, setProgress] = useState(0)
  const [activeClass, setActiveClass] = useState('0')

  const handleCategoryChange = (category, title, index) => {
    setCategory(category)
    setCategoryTitle(title)
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

  const sortedCategories = Object.keys(categories)

  return (
    <>
      <CarouselJsonLd
        ofType='service'
        data={category.services.map((service) => ({
          courseName: service.title,
          description: service.subTitle,
          url: `/services/${service.slug}`,
        }))}
      />
      <section className='relative py-10'>
        <Container classList='px-5'>
          <h2 className='text-center font-display text-5xl font-light tracking-wide'>
            {title ? title : 'Explore All Services'}
          </h2>
          <div className='flex md:hidden'>
            <CategorySelect
              sortedCategories={sortedCategories}
              categories={categories}
              handleCategoryChange={handleCategoryChange}
            />
          </div>
          <div className='mx-auto hidden flex-row justify-evenly space-x-5 px-5 py-10 md:flex'>
            {sortedCategories.map((key, index) => (
              <CategoryButton
                key={key}
                isActive={activeClass === index.toString()}
                onClick={() => handleCategoryChange(categories[key], key, index)}
              >
                {key}
              </CategoryButton>
            ))}
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
            {category &&
              orderBy(
                category.services,
                [(service) => service.categoryOrder || Infinity, 'title'],
                ['asc', 'asc']
              ).map((cat, i) => (
                <SwiperSlide key={i}>
                  <SlideContent cat={cat} bookNow={bookNow} categoryTitle={categoryTitle} />
                </SwiperSlide>
              ))}
          </Swiper>
          <div className='flex flex-row items-center justify-between space-x-10 px-5 py-10 md:px-0'>
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
          <div className='flex justify-center'>
            <Link
              href='/services'
              className='rounded bg-beaver/90 px-5 py-3 font-light uppercase text-white hover:bg-beaver'
            >
              See All Services
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}

export default ServicesCarousel
