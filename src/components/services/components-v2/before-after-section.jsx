import TestimonialsSlider from '@/components/TestimonialsSlider/TestimonialsSlider'
import TestimonialCard from '@/components/v2-components/TestimonialCard'
import useIsScreen from '@/helpers/useIsMobile'
import classNames from 'classnames'
import Image from 'next/image'
import React from 'react'
import sty from './before-after-section.module.css'

export const BeforeAfterSection = ({ data }) => {
  const isMobile = useIsScreen('mobileOnly')
  const isMidsize = useIsScreen('midsize')
  return (
    <section className='mb-[80px] max-sm:mb-[48px]'>
      <div className='max-w-[1400px] mx-auto flex flex-col items-center justify-center gap-[40px]'>
        <div className={sty.headerContainer}>
          <div className='__wab_flex-container ρfc'>
            <h2 className={classNames(sty.headerTitle, sty.sectionTitle)}>
              {data.title}{' '}
              <span className={sty.highlightedText}>
                {data.highlightedText}
              </span>
            </h2>
            <p className={sty.headerDescription}>{data.description}</p>
          </div>
        </div>

        <div className={sty.sliderContainer}>
          <TestimonialsSlider
            className={sty.testimonialsSlider}
            ctaLink={data?.act?.link ? data.act.link : '#'}
            ctaText={data.act.text}
            isDarkBg={false}
            settings={
              isMobile
                ? {
                  dots: false,
                  arrows: false,
                  infinite: true,
                  speed: 500,
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
                : isMidsize
                  ? {
                    dots: false,
                    arrows: false,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                  : {
                    dots: false,
                    arrows: false,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 3,
                    slidesToScroll: 1
                  }
            }
          >
            {data.testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                className={sty.testimonialCard}
                insta={testimonial.insta}
                patient={testimonial.clientName}
                subtitle={testimonial.resultDescription}
                title={testimonial.title}
              >
                <Image
                  src={testimonial.tImage}
                  alt=''
                  width={1042}
                  height={1042}
                  className={sty.testimonialImage}
                />
              </TestimonialCard>
            ))}
          </TestimonialsSlider>
        </div>
      </div>
    </section>
  )
}

export default BeforeAfterSection
