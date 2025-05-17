import Button from '@/components/v2-components/Button'
import { ctaToBooking } from '@/helpers/cta_to_booking'
import React from 'react'

import sty from './hero-section-v2.module.css'

export const HeroSectionV2 = ({
  data,
  serviceId,
}) => {

  const handleClick = () => {
    ctaToBooking(serviceId)
  }

  return (
    <>
      <section
        className={`relative min-h-[100vh] bg-cover bg-center max-md:h-auto ${sty.sectionContainer}`}
        style={{
          backgroundImage: `url(${data.heroImage.asset.url})`
        }}
        data-section='hero-v2'
      >
        <div className='absolute inset-0 bg-[#190C0080]'></div>

        <div className='relative z-10 mx-auto flex h-full max-w-[1200px] flex-col items-center justify-center px-6 pb-[80px] pt-[90px] text-center max-sm:px-[10px] max-sm:pt-[80px] max-sm:pb-[60px]'>
          <div
            className={`mb-6 flex flex-wrap items-center justify-center md:p-[10px] gap-[10px] md:border border-[#FFFFFF60] rounded-full max-sm:flex-col-reverse max-sm:mb-[40px]`}
          >
            <div
              className='
              flex items-center justify-center gap-1.5 rounded-full border-[0.5px] border-[#FFFFFF60] bg-white/20 px-[20px] py-[8px]'
            >
              <p className='text-[2vw] font-normal italic text-white max-md:text-[32px]'>
                ${data.cost}
              </p>
              <p className='text-[1vw] not-italic text-white max-md:text-base'>
                /{data.unit}
              </p>
            </div>
            <div className='px-[20px]'>
              <p className='mt-1 text-[0.85vw] font-medium uppercase text-white max-md:text-sm'>
                {data.promoBadge}
              </p>
            </div>
          </div>
          <div className='mb-[32px] flex flex-col items-center justify-center gap-[16px]'>
            <h1 className='text-[6vw] font-normal text-white max-md:text-[84px]'>
              <span className='font-medium italic'>
                {data.title}
              </span>
            </h1>
            <p className='max-w-[27vw] font-manrope text-[1vw] font-normal leading-[1.4] text-white/90 max-md:max-w-[600px] max-md:text-lg'>
              {data.description}
            </p>
          </div>
          <Button color='white' onClick={handleClick}>
            Book Now
          </Button>
          <div className={`mt-[60px] flex items-center rounded-full border-[1px] border-[#FFFFFF4D] p-[0.25vw]`}>
            <div className={`flex items-center gap-[0.75vw] rounded-full border-[1px] border-[#FFFFFF4D] px-[0.75vw] py-[0.35vw] max-md:gap-[10px] max-md:px-[10px] max-md:py-[5px]`}>
              <div className='flex space-x-1'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  className='h-3 w-3 text-white'
                >
                  <path d='M12 2l2.95 6.01L22 9.24l-5 4.88L18.9 21 12 17.27 5.1 21 7 14.12 2 9.24l7.05-1.23L12 2z' />
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  className='h-3 w-3 text-white'
                >
                  <path d='M12 2l2.95 6.01L22 9.24l-5 4.88L18.9 21 12 17.27 5.1 21 7 14.12 2 9.24l7.05-1.23L12 2z' />
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  className='h-3 w-3 text-white'
                >
                  <path d='M12 2l2.95 6.01L22 9.24l-5 4.88L18.9 21 12 17.27 5.1 21 7 14.12 2 9.24l7.05-1.23L12 2z' />
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  className='h-3 w-3 text-white'
                >
                  <path d='M12 2l2.95 6.01L22 9.24l-5 4.88L18.9 21 12 17.27 5.1 21 7 14.12 2 9.24l7.05-1.23L12 2z' />
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  className='h-3 w-3 text-white'
                >
                  <path d='M12 2l2.95 6.01L22 9.24l-5 4.88L18.9 21 12 17.27 5.1 21 7 14.12 2 9.24l7.05-1.23L12 2z' />
                </svg>
              </div>

              <div className='text-[0.85vw] text-sm font-medium text-white max-md:text-[16px]'>
                {data?.reviews.rating}/ 5.0
              </div>
            </div>
            <div className='px-[1vw] text-[0.85vw] text-white/70 max-md:px-[10px] max-md:text-[16px]'>
              {data?.reviews.reviewCount}+ reviews
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSectionV2
