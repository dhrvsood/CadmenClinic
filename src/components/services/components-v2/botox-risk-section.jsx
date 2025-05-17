import imageUrlBuilder from '@sanity/image-url'
import classNames from 'classnames'
import Image from 'next/image'
import React from 'react'

import sty from './botox-risk-section.module.css'



const BotoxRisksSection = ({ data }) => {
  return (
    <section className={classNames(sty.botoxRisksSection)} data-section='botox-risks'>
      <div className='px-[20px] py-[80px] max-sm:py-[60px] max-sm:px-[10px] max-w-[1400px] mx-auto'>
        <div className={classNames(sty.freeBox___1ZJ)}>
          <div className={classNames(sty.freeBox__aPtj8)}>
            <div className='flex flex-col gap-[20px] md:sticky md:top-[120px]'>
              <div className={classNames(sty.text__alFt)}>
                <span style={{ color: '#080909' }}>
                  {data?.title?.textBefore}{' '}
                </span>
                <span style={{ color: '#D19D51', fontStyle: 'italic' }}>
                  {data?.title?.highlightedText}
                </span>
                <span style={{ color: '#080909' }}>
                  {' '}
                  {data?.title?.textAfter}
                </span>
              </div>
              <div className={classNames(sty.text__ycpuq)}>
                {data?.description}
              </div>
            </div>
          </div>
          <div className={classNames(sty.freeBox__f26Db)}>
            <div className='flex flex-col gap-[20px]'>
              {(data?.riskCards || []).map((item, idx) => (
                <div key={idx} className='relative flex flex-col gap-[10px]'>
                  <Image
                    src={builder.image(item.backgroundImage).url()}
                    alt={item.title}
                    width={1264}
                    height={1100}
                    className={classNames(item.img__xv4Cq)}
                  />
                  <div className='md:absolute relative md:bottom-[10px] md:left-[10px] md:right-[10px] rounded-[20px] bg-[#074444c6] p-[20px]'>
                    <div className='flex flex-col gap-[10px]'>
                      <h3 className={sty.risksCardTitle}>{item.title}</h3>
                      {(item.descriptions || []).map((description, index) => (
                        <div key={index} className={sty.risksCardDecription}>
                          {description}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BotoxRisksSection
