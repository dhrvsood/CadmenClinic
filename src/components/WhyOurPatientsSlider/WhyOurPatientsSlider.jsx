import Button from '@/components/Button'
import Image from 'next/image'
import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

import styles from './WhyOurPatientsSlider.module.css'
import Link from 'next/link'

const WhyOurPatientsSlider = ({ children, settings, handleButtonClick }) => {
  let sliderRef = React.useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const slidesToShow = settings?.slidesToShow

  const totalPages = Math.ceil(children.length / slidesToShow)

  const next = () => {
    sliderRef.slickNext()
  }

  const previous = () => {
    sliderRef.slickPrev()
  }

  const goToPage = (pageIndex) => {
    sliderRef.slickGoTo(pageIndex * slidesToShow)
  }

  const handleBeforeChange = (_, newIndex) => {
    setCurrentSlide(Math.ceil(newIndex / slidesToShow))
  }

  return (
    <div className={styles.section}>
      <Slider
        className={styles.slider}
        ref={(slider) => (sliderRef = slider)}
        {...settings}
        beforeChange={handleBeforeChange}
      >
        {children.map((child, i) => (
          // <div key={i} className={styles.card}>
          <div key={i} className="px-[8px]">
            {child}
          </div>
        ))}
      </Slider>
      <div className={styles.bottom}>
        <Link href='https://cadmenclinic.ca.zenoti.com/webstoreNew/services' className='mt-[40px]'>
          <button className='button max-sm:w-full'>Book Now</button>
        </Link>

        {children.length > settings.slidesToShow && (
          <div className={styles.navigation}>
            <div className={styles.dotsMobile}>
              {Array.from({ length: totalPages }).map((_, index) => (
                <div
                  key={index}
                  className={`${styles.dot} ${index === currentSlide ? styles.dotActive : ''
                    }`}
                  onClick={() => goToPage(index)}
                />
              ))}
            </div>
            <div className={styles.nav}>
              <div
                className={`${styles.prev} ${!currentSlide ? styles.disabled : ''}`}
                onClick={previous}
              >
                <Image
                  src={`/arrows/prev-arrow-white.svg`}
                  width={14}
                  height={14}
                  alt=''
                />
              </div>
              <div className={styles.dots}>
                {Array.from({ length: totalPages }).map((_, index) => (
                  <div
                    key={index}
                    className={`${styles.dot} ${index === currentSlide ? styles.dotActive : ''
                      }`}
                    onClick={() => goToPage(index)}
                  />
                ))}
              </div>
              <div
                className={`${styles.next} ${currentSlide === totalPages - 1 ? styles.disabled : ''
                  }`}
                onClick={next}
              >
                <Image
                  src={`/arrows/next-arrow-white.svg`}
                  width={14}
                  height={14}
                  alt=''
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default WhyOurPatientsSlider
