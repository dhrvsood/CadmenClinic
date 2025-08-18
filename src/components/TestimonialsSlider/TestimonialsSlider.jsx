import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

import styles from './TestimonialsSlider.module.css'
import BookNowButton from '../ui/BookNowButton'

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
              src={`../../icons/prev-arrow-white.svg`}
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
              src={`../../icons/next-arrow-white.svg`}
              width={14}
              height={14}
              alt=''
            />
          </div>
        </div>
        {ctaLink && ctaText && (
          <BookNowButton text={ctaText} ctaId={ctaLink} color={isDarkBg ? "white" : ""}/>
        )}
      </div>
    </div>
  )
}

export default TestimonialsSlider
