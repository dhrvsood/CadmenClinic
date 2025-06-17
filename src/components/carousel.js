// Import Swiper styles
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

const Carousel = () => {
  return (
    <div className='mx-auto max-w-3xl'>
      <Swiper
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 2000 }}
        loop
        pagination={{ clickable: true }}
      >
        {Array.from({ length: 4 }).map((item, index) => (
          <SwiperSlide key={index} className='bg-white'>
            <img src={`/slider/${index + 1}.jpg`} alt={`Image ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Carousel
