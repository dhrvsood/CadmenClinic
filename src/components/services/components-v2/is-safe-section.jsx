import PointIcon from '@/components/plasmic/image_lab_2024/icons/PlasmicIcon__Point'
import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image'
import React from 'react'

import sty from './is-safe-section.module.css'



const IsSafeSection = ({ data }) => {
  const sectionImage = data.image

  return (
    <section data-section='is-safe'>
      <div className='py-[80px] px-[20px] max-sm:py-[60px] max-sm:px-[10px] max-w-[1400px] mx-auto'>
        <div className='flex gap-[60px] max-sm:flex-col'>
          <div className='flex flex-col gap-[20px] max-w-[660px]'>
            <div className={sty.freeBox__nVSbq}>
              <div className={sty.heading10}>
                <h2>
                  <span>{data.title}</span>{' '}
                  <span style={{ fontStyle: 'italic', color: '#D19D51' }}>
                    {data.highlightedText}
                  </span>
                </h2>
              </div>
              <p className={sty.supportingText9}>{data.subHeading}</p>
            </div>
            <p className={sty.supportingText10}>{data.briefDescription}</p>
          </div>

          {sectionImage && (
            <div className='overflow-hidden rounded-[20px] max-sm:mt-[20px]'>
              <Image
                src={sectionImage}
                alt={data.image?.alt || 'Safety illustration'}
                width={686}
                height={400}
                className='w-full h-full object-cover'
              />
            </div>
          )}
          {data.sideEffectsBlock && (
            <div className={sty.freeBox__jO8Jy}>
              <div className={sty.text__icUjI}>
                <strong>{data.sideEffectsBlock?.subtitle}</strong>
              </div>
              <p className={sty.text__aA1Ty}>{data.sideEffectsBlock?.intro}</p>

              <div className={sty.freeBox__eryy}>
                <div className={sty.freeBox__ku4V3}>
                  {data.sideEffectsBlock?.sideEffects?.map((effect, index) => (
                    <div key={index} className={sty.title26}>
                      <PointIcon className={sty.svg__hTxk6} role='img' />
                      <p className={sty.text__uRcy7}>{effect}</p>
                    </div>
                  ))}
                </div>
              </div>
              <p className={sty.text__etmtV}>
                {data.sideEffectsBlock?.conclusion}
              </p>
            </div>
          )}
        </div>

        <div className={sty.freeBox___1Ae9U}>
          <div className={sty.freeBox___0NBz} />
        </div>
      </div>
    </section>
  )
}

export default IsSafeSection
