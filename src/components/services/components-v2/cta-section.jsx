import Button from '@/components/v2-components/Button'
import { ctaToBooking } from '@/helpers/cta_to_booking'
import React from 'react'

import sty from './cta-section.module.css'

const CtaSection = ({ data, serviceId }) => {
  const ctaText = data?.cta?.text || 'Book Now'

  const handleClick = () => {
    ctaToBooking(serviceId)
  }

  return (
    <section className={sty.ctaSection} data-section='cta'>
      <div className='__wab_flex-container ρfc'>
        <div className='flex flex-col items-center justify-center gap-[40px]'>
          <div className={sty.heading9}>
            <h2>
              <span style={{ color: '#FFFFFF' }}>{data.titleStart}</span>
              <span style={{ color: '#E4C08C' }}> {data.highlightedText}</span>
              <span style={{ color: '#FFFFFF' }}> {data.titleEnd}</span>
            </h2>
          </div>

          <p className={sty.supportingText8}>{data.description}</p>
        </div>
        <Button
          className={sty.learnMoreCta}
          onClick={handleClick}
          color='white'
        >
          {ctaText}
        </Button>
      </div>
    </section>
  )
}

export default CtaSection
