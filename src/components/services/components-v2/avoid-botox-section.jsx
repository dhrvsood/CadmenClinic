import classNames from 'classnames'
import Image from 'next/image'
import React from 'react'

import sty from './avoid-botox-section.module.css'

const AvoidBotoxSection = ({ data }) => {
  return (
    <section data-section='avoid-botox'>
      <div className='flex flex-col items-center px-[20px] py-[80px] max-sm:py-[60px] max-sm:px-[10px] max-w-[1400px] mx-auto'>
        <div className='flex flex-col items-center gap-[20px] mb-[40px] max-w-[840px]'>
          <h2 className={sty.introTitle}>
            <span className={sty.normalTitle}>{data.title}</span>{' '}
            <span className={sty.highlightedText}>{data.highlightedText}</span>
          </h2>
          <p className={sty.introDescription}>{data.description}</p>
        </div>
        <div className={sty.cardsContainer}>
          <div className={classNames(sty.cardsWrapper)}>
            <div className={sty.cardsGrid}>
              {data?.cards.map((card, index) => (
                <div key={index} className={sty.cardItem}>
                  <div className='flex w-full items-center justify-center min-h-[80px] bg-[#f8f8f8] rounded-[16px] border border-[#eaecee]'>
                    <h4 className='text-[24px] text-center'>{card.title}</h4>
                  </div>
                  <Image
                    alt={card.image?.alt || ''}
                    width={855}
                    height={573}
                    className={sty.cardImage}
                    src={card.image}
                  />
                  {card.description && (
                    <div className={sty.cardDescription}>
                      {card.description}
                    </div>
                  )}
                  {card.content && (
                    <ul className={classNames(sty.cardList)}>
                      {card.content?.map((item, i) => (
                        <li key={i} className={classNames(sty.cardListItem)}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AvoidBotoxSection
