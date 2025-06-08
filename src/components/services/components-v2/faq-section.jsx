import Faq from '@/components/v2-components/Faq'
import classNames from 'classnames'
import React from 'react'

import sty from './faq-section.module.css'

const FaqSection = ({ data }) => {
  return (
    <section key={data._id} data-section='faq'>
      <div className='px-[20px] py-[80px] max-sm:py-[60px] max-sm:px-[10px] max-w-[1000px] mx-auto'>
        <div className='mb-[40px]'>
          <div className={sty.textContainer}>
            <span style={{ color: '#080909' }}>{data.title}</span>{' '}
            <span style={{ fontStyle: 'italic', color: '#D19D51' }}>
              {data.highlightedText}
            </span>
          </div>
          <div className={sty.faqDesc}>{data.description}</div>
        </div>
        <div className='flex flex-col gap-[20px] max-sm:gap-[10px]'>
          {data.items?.map((faq, i) => (
            <Faq
              key={i}
              question={faq.question}
              answer={faq.answer}
              className={classNames('__wab_instance', 'w-100')}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FaqSection
