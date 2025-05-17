import Button from '@/components/v2-components/Button'
import HowItWorksCard from '@/components/v2-components/HowItWorksCard'
import { ctaToBooking } from '@/helpers/cta_to_booking'
import classNames from 'classnames'
import React from 'react'

import sty from './patient-guidelines-section.module.css'

const PostTreatmentGuideSection = ({ data, serviceId }) => {
  const handleClick = () => {
    ctaToBooking(serviceId)
  }

  return (
    <section
      className={classNames(sty.postTreatmentGuideSection)}
      data-section='patient-guidelines'
    >
      <div className='w-full py-[80px] max-sm:py-[60px] flex flex-col items-center'>
        <div className='px-[20px] max-sm:px-[10px] mx-auto'>
          <div className='flex max-w-[840px] max-sm:w-full flex-col items-center gap-[20px]'>
            <h2 className='text-center text-[64px] max-sm:text-[48px]'>
              <span style={{ color: '#FFFFFF' }}>
                {data?.title?.textBefore}
              </span>{' '}
              <span style={{ color: '#E4C08C', fontStyle: 'italic' }}>
                {data?.title?.highlightedText}{' '}
              </span>
              <span style={{ color: '#FFFFFF' }}>{data?.title?.textAfter}</span>
            </h2>
            <p className={classNames(sty.p__r0Kd4)}>{data.description}</p>
          </div>
        </div>
        <div className='mt-[40px] flex w-full overflow-x-auto px-[20px] max-sm:px-[10px] max-w-[1400px] mx-auto px-4'>
          <div className='flex gap-[20px] max-sm:gap-[10px] pb-[20px]'>
            {(data.cards || []).map((card, index) => (
              <HowItWorksCard
                key={index}
                icon={card.icon}
                image={null}
                small={true}
                title={
                  <div className={classNames(sty.text__yFfnh)}>
                    <span>{card.title}</span>
                    <span style={{ fontWeight: 700 }}>
                      {card.titleHighlight}
                    </span>
                  </div>
                }
              >
                <ul className={classNames(sty.ul__snzob)}>
                  {card.tips.map((tip, index) => (
                    <li key={index} className={classNames(sty.li__erM8I)}>
                      {tip}
                    </li>
                  ))}
                </ul>
              </HowItWorksCard>
            ))}
          </div>
        </div>
        {data?.cta?.text && (
          <div className='mx-auto mt-[40px] px-[20px] max-sm:px-[10px] max-sm:mt-0 max-sm:w-full'>
            <div className={sty.mtt7}>
              <Button
                color='white'
                className={sty.guideCta}
                onClick={handleClick}
              >
                {data?.cta?.text}
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default PostTreatmentGuideSection
