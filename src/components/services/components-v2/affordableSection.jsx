import AffordableBotoxCard from '@/components/v2-components/AffordableBotoxCard'
import Button from '@/components/v2-components/Button'
import { ctaToBooking } from '@/helpers/cta_to_booking'
import classNames from 'classnames'
import React from 'react'

import styles from './affordableSection.module.css'

const AffordableBotoxSection = ({ data, serviceId }) => {
  const handleClick = () => {
    ctaToBooking(serviceId)
  }

  return (
    <section className={styles.affordableBotoxSection} data-section='affordable'>
      <div className='mx-auto flex max-w-[1400px] flex-col justify-center'>
        <div className='mb-[40px] flex flex-col items-center gap-[20px]'>
          <h2 className={styles.sectionTitle}>
            <span style={{ color: '#080909' }}>{data.title}</span>{' '}
            <span style={{ color: '#0C7A7B', fontStyle: 'italic' }}>
              {data.highlightedText}
            </span>
          </h2>
          {data.description && (
            <p className={styles.sectionDescription}>{data.description}</p>
          )}
        </div>
        <div className={`${data.cards?.length > 2 ? 'max-w-none' : 'max-w-[1000px]'} flex flex-row gap-[20px] max-md:flex-col max-sm:gap-[10px]`}>
          {data.cards.map((card, index) => (
            <AffordableBotoxCard
              key={`card-${index}-${card.brandName}`}
              name={`${card.brandName}${card.registration || ''}`}
              price={`$${card.discountedPrice}`}
              perUnit={`$${card.regularPrice}`}
              size=''
              items={card.items}
            />
          ))}
        </div>
        <div className='mt-[40px] flex items-center justify-center'>
          <Button
            className={classNames('__wab_instance', styles.ctaButton)}
            onClick={handleClick}
          >
            Book Now
          </Button>
        </div>
      </div>
    </section>
  )
}

export default AffordableBotoxSection
