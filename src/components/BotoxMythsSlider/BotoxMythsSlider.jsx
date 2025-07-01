import Image from 'next/image'
import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

import styles from './BotoxMythsSlider.module.css'

const BotoxMythsSlider = ({ children, settings }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  let sliderRef = React.useRef(null)

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
    <div className={styles.wrapper}>
      <Slider
        ref={(slider) => {
          sliderRef = slider
        }}
        {...settings}
        className={styles.slider}
        beforeChange={handleBeforeChange}
      >
        {children.map((child, i) => (
          <div key={i} className={styles.slide}>
            {child}
          </div>
        ))}
      </Slider>
      <div className={styles.bottomStrip}>
        <div className={styles.dots}>
          {Array.from({ length: totalPages }).map((_, index) => (
            <div
              key={index}
              className={`${styles.dot} ${
                index === currentSlide ? styles.dotActive : ''
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
              src={`/arrows/prev-arrow-${!currentSlide ? 'blue' : 'white'}.svg`}
              width={14}
              height={14}
              alt=''
            />
          </div>
          <div
            className={`${styles.next} ${
              currentSlide === totalPages - 1 ? styles.disabled : ''
            }`}
            onClick={next}
          >
            <Image
              src={`/arrows/next-arrow-${
                currentSlide === totalPages - 1 ? 'blue' : 'white'
              }.svg`}
              width={14}
              height={14}
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BotoxMythsSlider
