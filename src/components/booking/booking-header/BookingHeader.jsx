import sharedStyles from '../BookingFlowShared.module.css'
import styles from './BookingHeader.module.css'

const BookingHeader = ({ children, heading, subheading, mobileBigHead }) => {
  return (
    <div className={styles.wrap}>
      <h2
        className={`${sharedStyles.h2} ${styles.heading} ${mobileBigHead && styles.headingBigMobile}`}
      >
        {heading}
      </h2>
      <p className={`${sharedStyles.p} ${styles.subHeading}`}>{subheading}</p>
      {children}
    </div>
  )
}

export default BookingHeader
