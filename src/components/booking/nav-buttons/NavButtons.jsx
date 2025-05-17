import { useBookingStore } from '@/zustand/useBookingStore'
import Image from 'next/image'
import Link from 'next/link'

import sharedStyles from '../BookingFlowShared.module.css'
import styles from './NavButtons.module.css'

const NavButtons = ({ nextFunction, nextText, backText, url }) => {
  const { nextDisabled, incrementStep, decrementStep, currentStep } = useBookingStore()

  const handleNext = () => {
    if (nextFunction) return nextFunction()
    return incrementStep()
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.backWrap}>
        {backText && url ? (
          <Link
            href={url}
            className={styles.back}
            target='_blank'
            rel='noopener noreferrer'
          >
            {backText}
          </Link>
        ) : currentStep > 1 && (
            <div className={styles.back} onClick={decrementStep}>
              <Image
                className={styles.arrow}
                src='/arrows/prev-arrow-green.svg'
                alt='Back'
                width={16}
                height={16}
              />
              Back
            </div>
          )
        }
      </div>
      <button
        className={`${styles.nextButton}`}
        disabled={nextDisabled}
        onClick={handleNext}
      >
        <div className={`${sharedStyles.button} ${styles.nextButtonOverlay}`}></div>
        {nextText ? nextText : 'Next'}
      </button>
    </div>
  )
}

export default NavButtons
