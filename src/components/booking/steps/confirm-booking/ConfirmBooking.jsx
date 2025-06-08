import { presentableDateTime } from '@/helpers/time/datetime_formatter'
import { useBookingStore } from '@/zustand/useBookingStore'
import Image from 'next/image'

import sharedStyles from '../../BookingFlowShared.module.css'
import BookingHeader from '../../booking-header/BookingHeader'
import NavButtons from '../../nav-buttons/NavButtons'
import styles from './ConfirmBooking.module.css'
import Link from 'next/link'

const ConfirmBooking = () => {
  const { bookingData, setStep } = useBookingStore()

  return (
    <div className={styles.wrap}>
      <BookingHeader
        heading='Confirm your booking'
        subheading='Review your info before submitting form'
      />
      <div className={styles.list}>
        <div className={styles.dataItem}>
          <div className={styles.top}>
            <div className={styles.topLeft}>
              <Image
                src='/icons/syringe-icon.svg'
                alt=''
                width={32}
                height={32}
              />
            </div>
            <div className={styles.topRight}>
              <h4 className={sharedStyles.h4}>Service</h4>
              <div className={styles.edit} onClick={() => setStep(1)}>
                <Image
                  src='/icons/edit-pen.svg'
                  alt=''
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.serviceInfo}>
              <Image src='/icons/info-icon.svg' alt='' width={16} height={16} />
              <div className={styles.serviceDetails}>
                <p className={`${sharedStyles.p} ${styles.textLeft}`}>
                  {bookingData.service.title}
                </p>
                <p className={`${styles.price}`}>Free to book</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dataItem}>
          <div className={styles.top}>
            <div className={styles.topLeft}>
              <Image
                src='/icons/circle-pin.svg'
                alt=''
                width={32}
                height={32}
              />
            </div>
            <div className={styles.topRight}>
              <h4 className={sharedStyles.h4}>Location</h4>
            </div>
          </div>
          <div className={styles.bottom}>
            <Link
              href='https://maps.app.goo.gl/odiNPdCuBoCvJ6zn7'
              target='_blank'
              className={`${sharedStyles.p} ${styles.textLeft}`}
            >
              2033 W Roscoe St, Chicago, IL 60618
            </Link>
          </div>
        </div>
        <div className={styles.dataItem}>
          <div className={styles.top}>
            <div className={styles.topLeft}>
              <Image
                src='/icons/clock-icon.svg'
                alt=''
                width={32}
                height={32}
              />
            </div>
            <div className={styles.topRight}>
              <h4 className={sharedStyles.h4}>Date & Time</h4>
              <div className={styles.edit} onClick={() => setStep(3)}>
                <Image
                  src='/icons/edit-pen.svg'
                  alt=''
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <p className={`${sharedStyles.p} ${styles.textLeft}`}>
              {presentableDateTime(bookingData.timeslot)}
            </p>
          </div>
        </div>
        <div className={styles.dataItem}>
          <div className={styles.top}>
            <div className={styles.topLeft}>
              <Image
                src='/icons/portrait-icon.svg'
                alt=''
                width={32}
                height={32}
              />
            </div>
            <div className={styles.topRight}>
              <h4 className={sharedStyles.h4}>Personal Information</h4>
              <div className={styles.edit} onClick={() => setStep(2)}>
                <Image
                  src='/icons/edit-pen.svg'
                  alt=''
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.personalInfoList}>
              <div className={styles.personalInfoItem}>
                <Image
                  src='/icons/user-icon-small-grey.svg'
                  alt=''
                  width={20}
                  height={20}
                />
                <p className={`${sharedStyles.p} ${styles.textLeft}`}>
                  {bookingData.guestInfo.firstName}{' '}
                  {bookingData.guestInfo.lastName}
                </p>
              </div>
              <div className={styles.personalInfoItem}>
                <Image
                  src='/icons/email-icon-small-grey.svg'
                  alt=''
                  width={20}
                  height={20}
                />
                <p className={`${sharedStyles.p} ${styles.textLeft}`}>
                  {bookingData.guestInfo.email}
                </p>
              </div>
              <div className={styles.personalInfoItem}>
                <Image
                  src='/icons/phone-icon-small-grey.svg'
                  alt=''
                  width={20}
                  height={20}
                />
                <p className={`${sharedStyles.p} ${styles.textLeft}`}>
                  {bookingData.guestInfo.phone}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavButtons nextText='Confirm' />
    </div>
  )
}

export default ConfirmBooking
