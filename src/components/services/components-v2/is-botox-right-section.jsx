import HowItWorksCard from '@/components/v2-components/HowItWorksCard'
import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image'
import React from 'react'

import sty from './is-botox-right-section.module.css'



const IsBotoxRightSection = ({ data }) => {
  return (
    <section className='py-[80px] max-sm:py-[60px] bg-[#ecf6f6]' data-section='is-botox-right'>
      <div className='max-sm:w-full'>
        <div className='flex max-w-[800px] flex-col items-center justify-center gap-[20px] mx-auto px-[20px] max-sm:px-[10px]'>
          <div className={sty.text__jICcE}>
            <h2>
              <span style={{ color: '#080909' }}>{data.text} </span>
              <span style={{ color: '#0C7A7B', fontStyle: 'italic' }}>
                {data.highlightedText}
              </span>
            </h2>
          </div>
          <p className={sty.text___8QlX6}>{data.description}</p>
        </div>
        <div className='mt-[40px] w-full overflow-auto pb-[20px]'>
          <div className='mx-auto w-fit px-[20px] max-sm:px-[10px]'>
            <div className='mx-auto flex w-fit max-w-[1400px] gap-[40px] max-md:gap-[20px]'>
              {data.cards.map((card, index) => (
                <HowItWorksCard
                  key={index}
                  icon={
                    card.icon && (
                      <Image
                        src={builder.image(card.icon).url()}
                        alt='icon'
                        width={24}
                        height={24}
                        className='w-[24px]'
                      />
                    )
                  }
                  image={card.image}
                  title={<div className='text-[24px]'>{card.title}</div>}
                >
                  <div className={sty.text__xhVdi}>{card.description}</div>
                </HowItWorksCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IsBotoxRightSection
