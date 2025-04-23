import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import Button from '../v2-components/Button'
import styles from './TestimonialsSlider.module.css'
import TestimonialCardBig from '../TestimonialCardBig'

const TestimonialsSlider = ({
  children,
  settings,
  isDarkBg,
  ctaLink,
  ctaText,
  handleButtonClick
}) => {
  let sliderRef = React.useRef(null)

  const next = () => {
    sliderRef.slickNext()
  }
  const previous = () => {
    sliderRef.slickPrev()
  }

  return (
    <div className={styles.wrapper}>
      <Slider
        ref={(slider) => {
          sliderRef = slider
        }}
        {...settings}
        className={styles.slider}
      >
        {children.map((child, i) => (
          <div key={i} className={styles.slide}>
            {child}
          </div>
        ))}
      </Slider>
      <div className={styles.bottomStrip}>
        <div className={styles.nav}>
          <div
            className={isDarkBg ? styles.prevDark : styles.prevLite}
            onClick={previous}
          >
            <Image
              src={`/arrows/prev-arrow${isDarkBg ? '-blue' : '-white'}.svg`}
              width={14}
              height={14}
              alt=''
            />
          </div>
          <div
            className={isDarkBg ? styles.nextDark : styles.nextLite}
            onClick={next}
          >
            <Image
              src={`/arrows/next-arrow${isDarkBg ? '-blue' : '-white'}.svg`}
              width={14}
              height={14}
              alt=''
            />
          </div>
        </div>
        {ctaLink && ctaText && (
          <Button
            link={ctaLink}
            color={isDarkBg ? 'white' : ''}
            onClick={handleButtonClick}
          >
            {ctaText}
          </Button>
        )}
      </div>
    </div>
  )
}

export default TestimonialsSlider
