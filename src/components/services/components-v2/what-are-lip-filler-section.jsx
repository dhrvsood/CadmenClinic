import PointIcon from '@/components/plasmic/image_lab_2024/icons/PlasmicIcon__Point'
import Button from '@/components/v2-components/Button'
import { ctaToBooking } from '@/helpers/cta_to_booking'
import Image from 'next/image'
import React from 'react'

import sty from './what-are-lip-filler-section.module.css'



export const WhatAreLipFillersSection = ({ data, serviceId }) => {
  const handleClick = () => {
    ctaToBooking(serviceId)
  }

  return (
    <section data-section='what-are-lip-fillers'>
      <div className='px-[20px] py-[80px] max-sm:px-[10px] max-sm:py-[60px]'>
        <div className='mx-auto mb-[40px] flex max-w-[840px] flex-col items-center gap-[20px]'>
          <div className={sty.heading6}>
            <h2>
              <span style={{ fontStyle: 'italic', color: '#D19D51' }}>
                {data.highlightedText}
              </span>{' '}
              <span style={{ color: '#080909' }}>{data.title}</span>
            </h2>
          </div>
          <p className={sty.supportingText5}>
            <span style={{ color: '#434445' }}>{data.intro}</span>
          </p>
        </div>
        <div className='mx-auto flex max-w-[1400px] gap-28'>
          <div className='flex max-w-[627px] flex-col items-start gap-[40px]'>
            <div className={sty.freeBox__aCsdO}>
              <div className={sty.freeBox__fdr5P}>
                <div className={sty.text__ngfFa}>{data.subtitle}</div>
                <div className='flex flex-col gap-[10px]'>
                  <p className={sty.text__xbVt}>{data.description}</p>
                  <p className={sty.text__eDiP}>{data.keyPointsTitle}</p>
                  {data.keyPoints.map((keyPoint, index) => (
                    <div
                      key={`key-point-${index}-${keyPoint.title}`}
                      className='flex'
                    >
                      <PointIcon className={sty.svg__ycTdU} role='img' />
                      <p className={sty.text__ttoOg}>
                        {/* <strong>{keyPoint.title}:{' '}</strong> */}
                        {keyPoint.description}
                      </p>
                    </div>
                  ))}
                </div>
                <div className={sty.freeBox__taMrL}>
                  <div className='__wab_flex-container ρfc'>
                    <p className={sty.text__h3KdR}>{data.footerText}</p>
                  </div>
                </div>
              </div>
            </div>
            <Button className={sty.whatAreCta} onClick={handleClick}>
              {data.act.text}
            </Button>
          </div>
          <div className='max-sm:hidden'>
            <div className='__wab_flex-container ρfc'>
              <div className={sty.freeBox___6Feg}>
                {data.image && (
                  <div className='overflow-hidden rounded-[20px]'>
                    <Image
                      alt=''
                      className={sty.img__h6ZO}
                      width={1300}
                      height={1036}
                      loading='lazy'
                      src={data.image}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatAreLipFillersSection
