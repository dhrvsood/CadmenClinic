import { useBookingStore } from '@/zustand/useBookingStore'
import Link from 'next/link'

import sharedStyles from '../../BookingFlowShared.module.css'
import styles from './BookingLander.module.css'

const BookingLander = () => {
  const { incrementStep } = useBookingStore()

  return (
    <div className={styles.wrap}>
      <div className={styles.heading}>
        <h1 className={sharedStyles.h1}>
          Get <span className={sharedStyles.goldItalic}>started</span>
        </h1>
        <p className={sharedStyles.p}>Welcome to our aesthetic clinic!</p>
      </div>
      <div className={styles.buttons}>
        <button
          className={`${sharedStyles.button} ${sharedStyles.large}`}
          onClick={incrementStep}
        >
          I am a new patient
        </button>
        <Link
          href='https://cadmenclinic.ca.zenoti.com/webstoreNew/services'
          target='_blank'
          className={styles.bigButtonLink}
        >
          <button
            className={`${sharedStyles.button} ${sharedStyles.large} ${sharedStyles.hollow} ${styles.bigButton}`}
          >
            I am an existing patient
          </button>
        </Link>
      </div>
    </div>
  )
}

export default BookingLander
