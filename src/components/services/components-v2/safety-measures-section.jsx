import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image'
import React from 'react'

import sty from './safety-measures-section.module.css'



const SafetyMeasuresSection = ({ data }) => {
  return (
    <section className={sty.safetyMeasuresSection} data-section='safety-measures'>
      <div className={sty.safetyMeasuresHeader}>
        <div className={sty.text__tWmn0}>
          <span style={{ color: '#080909' }}>{data.title.textBefore}</span>{' '}
          <span style={{ color: '#D19D51', fontStyle: 'italic' }}>
            {data.title.highlightedText}
          </span>{' '}
          <span style={{ color: 'var(--token-Wbstd3pZYZQR)', fontWeight: 400 }}>
            {data.title.textAfter}
          </span>
        </div>
      </div>

      <div className={sty.freeBox__fDsIc}>
        <div className={sty.safetyMeasuresContent}>
          {(data?.cards || []).map((card, index) => {
            return (
              <div key={index} className={sty.freeBox__zufJd}>
                <div className={sty.text__rtqDl}>{index}</div>
                <div className='__wab_flex-container ρfc'>
                  <div className={sty.freeBox__hBzxZ}>
                    <div className={sty.freeBox___50DtW}>
                      {card.image && (
                        <Image
                          alt=''
                          width={864}
                          height={681}
                          className={sty.img__nTtCt}
                          src={builder.image(card.image).url()}
                        />
                      )}
                    </div>
                    <div className={sty.freeBox__cbid3}>
                      <div className={sty.text__wjKbh}>{card.title}</div>
                      <div className={sty.text__mZa29}>{card.description}</div>
                    </div>
                  </div>
                  <div className='__wab_flex-container ρfc' />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SafetyMeasuresSection
