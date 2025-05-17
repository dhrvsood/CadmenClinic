import BotoxProcessCard from '@/components/v2-components/BotoxProcessCard'
import Button from '@/components/v2-components/Button'
import { ctaToBooking } from '@/helpers/cta_to_booking'
import Image from 'next/image'
import React from 'react'

import sty from './our-process-section.module.css'

export const OurProcessSection = ({ data, serviceId }) => {
  const handleClick = () => {
    ctaToBooking(serviceId)
  }

  return (
    <section className={sty.ourBotoxProcessSection} data-section='our-process'>
      <div className='px-[40px] my-auto max-md:px-[10px]'>
        <div className='mx-auto max-w-[600px]'>
          <h2 className='mb-[20px] text-center text-[64px] max-sm:text-[40px]'>
            <span style={{ color: '#FFFFFF' }}>{data.title}</span>{' '}
            <span style={{ color: '#E4C08C', fontStyle: 'italic' }}>
              {data.highlightedText}
            </span>
          </h2>
          {data.intro && <p className={sty.text__s6AqX}>{data.intro}</p>}
        </div>
        <div className={sty.freeBox__ehNsr}>
          <div className='mx-auto mt-20 grid max-w-[1200px] grid-cols-[1fr_1fr_1fr] gap-14 max-md:grid-cols-[1fr]'>
            {data.steps.map((step, index) => (
              <BotoxProcessCard
                key={`step-${index}`}
                title={step.title}
                description={step.description}
                icon={step.icon}
              />
            ))}
          </div>
          <div className='mt-[40px]'>
            <Button
              className={sty.processCta}
              color='white'
              onClick={handleClick}
            >
              <span className={sty.text__sciw}>{data.button.text}</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurProcessSection
