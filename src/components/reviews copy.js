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

const data = [
  {
    name: 'Eileen Castellanos',
    review:
      'I cannot rave enough about this place! The service is absolutely top-notch all around from the minute you walk-in to the minute you leave the door... cannot recommend this place enough :)'
  },
  {
    name: 'Maja M.',
    review:
      'Enjoyable experience! Staff was super easy to work with, and made me feel super comfortable. Treatment rooms are a great size! Super clean too! I got my Botox redone here:) my results are perfect! I swear this place put it in the exact spots it needed to, because my forehead looks amazing. Very skilled staff when it comes to Botox (Kristen is an expert!). I cannot wait to come back!'
  },
  {
    name: 'Sandra Z.',
    review:
      'Highly recommended!!! My daughter and I had spa day together and it was wonderful! I had an amazing experience getting a Diamond Glow Facial with Brina. She was very knowledgeable and friendly. I felt like she really took her time to analyze my skin and tell me what treatments would be most beneficial. She was very thorough and since the treatment my skin has been glowing! I feel like my makeup has even worn better and my face is brighter. The entire spa is beautiful, very modern and clean. Wonderful location with easy to find parking. The owners were very welcoming. We look forward to going again!'
  },
  {
    name: 'Dejan',
    review:
      "What truly sets ImageLab apart is their attention to detail and commitment to excellence. The staff goes above and beyond, taking the time to explain procedures thoroughly and ensuring that clients are comfortable every step of the way. The results have been outstanding, and I've witnessed a positive transformation in my skin and overall confidence."
  },
  {
    name: 'Abiram K.',
    review:
      'This is by far the best med spa in the city and the staff is super friendly! They are very patient and caring in their consultations and always recommend the best for your body. Thank you for the amazing service !'
  },
  {
    name: 'Shagun T.',
    review:
      "Had such a great experience here!! The people were amazing and made me feel really comfortable and at ease, since this was my first time getting any skin treatment and the ambience was great as well! I highly recommend for anyone who wants to try out the huge range of skin treatments available here (esp if it's your first time, you won't be disappointed)!"
  }
]

const Reviews = ({ whiteBackground }) => (
  <section className={`mt-10 py-16 ${whiteBackground ? 'bg-white' : 'bg-teal-50'}`}>
    <Container classList='px-5 lg:px-0'>
      <h2 className='text-center font-display text-4xl font-light tracking-wide md:text-5xl'>
        Reviews
      </h2>
      <div className='flex justify-center py-10'>
        <a
          href='https://www.google.com/maps/place/ImageLab/@41.942965,-87.679834,15z/data=!4m8!3m7!1s0x880fd38dd28f6369:0x52806094afd93b0a!8m2!3d41.942965!4d-87.679834!9m1!1b1!16s%2Fg%2F11st1rrp_d?entry=ttu'
          target='_blank'
          className='border-2 border-teal-600 px-5 py-2 text-sm hover:bg-teal-600 hover:text-white'
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
          className='flex flex-col items-center justify-center rounded border-2 border-teal-600 bg-white'
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
          {data.map((item, index) => (
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
          {data.map((item, index) => (
            <li
              key={index}
              style={{ boxShadow: '-10px 10px 0px #007478' }}
              className='mb-10 break-inside-avoid rounded border border-teal-400 bg-white p-10'
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
