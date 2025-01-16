// Import Swiper styles
import { StarIcon } from '@heroicons/react/24/solid'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar
} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Container from './container'
import { reviews } from '@/doc/reviews'

const Reviews = ({ whiteBackground }) => (
  <section className={`mt-10 py-16 ${whiteBackground ? 'bg-white' : 'bg-dawnPink'}`}>
    <Container classList='px-5 lg:px-0'>
      <h2 className='text-center font-display text-4xl font-light tracking-wide md:text-5xl'>
        Reviews
      </h2>
      <div className='flex justify-center py-10'>
        <a
          href='https://www.google.com/search?q=cadmen+clinic&oq=cadmen+clinic&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg8MgYIAhBFGDwyBggDEEUYPNIBCDM1ODNqMGoxqAIAsAIA&sourceid=chrome&ie=UTF-8#lrd=0x882b350228b56b63:0x114171d25aa4df4d,1,,,,'
          target='_blank'
          className='border-2 border-beaver px-5 py-2 text-sm hover:bg-beaver hover:text-white'
        >
          Read all Google Reviews
        </a>
      </div>
      <div className='md:hidden'>
        <Swiper
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 2000 }}
          loop
          grabCursor={true}
          pagination={{ clickable: true }}
          className='flex flex-col items-center justify-center rounded border-2 border-beaver bg-white'
          autoHeight={true}
          tabIndex={0}
          keyboard={{
            enabled: true,
            onlyInViewport: true
          }}
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
          {reviews.map((item, index) => (
            <SwiperSlide key={index} className='p-10'>
              <div>
                <blockquote className='space-y-3'>
                  <p className='text-lg italic'>{item.review}</p>
                  <p className='font-bold'>- {item.name}</p>
                </blockquote>
                <div className='flex flex-row space-x-1'>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i}>
                      <StarIcon className='h-5 w-5 text-yellow-400' />
                    </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='hidden md:block'>
        <ul role='list' className='columns-1 gap-10 sm:columns-2 lg:columns-3'>
          {reviews.map((item, index) => (
            <li
              key={index}
              style={{ boxShadow: '-10px 10px 0px #8F7162' }}
              className='mb-10 break-inside-avoid rounded border border-beaver bg-white p-10'
            >
              <blockquote className='space-y-3'>
                <p className='text-lg italic'>{item.review}</p>
                <p className='font-bold'>- {item.name}</p>
              </blockquote>
              <div className='flex flex-row space-x-1'>
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i}>
                    <StarIcon className='h-5 w-5 text-yellow-400' />
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  </section>
)

export default Reviews
