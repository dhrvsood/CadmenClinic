import InfoFlex from '@/components/ui/info-flex/InfoFlex'
import TextDetail from '@/components/ui/text-detail/TextDetail'
import { presentableDateTime } from '@/helpers/time/datetime_formatter'
import { useBookingStore } from '@/zustand/useBookingStore'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import NavButtons from '../../nav-buttons/NavButtons'
import styles from './BookingConfirmed.module.css'
import sharedStyles from '../../BookingFlowShared.module.css'

const BookingConfirmed = () => {
  const { bookingData, confirmedAppointment, setNextDisabled } =
    useBookingStore()
  const router = useRouter()

  const devStartDate = new Date(bookingData.timeslot)
  const devEndDate = new Date(devStartDate.getTime() + 30 * 60000)

  useEffect(() => {
    setNextDisabled(false)
  }, [])

  const calendarEvent = {
    title: 'Appointment at CADMEN Clinic',
    description: bookingData.service.title,
    startDate: confirmedAppointment
      ? confirmedAppointment.invoice.items[0].start_time
      : devStartDate,
    endDate: confirmedAppointment
      ? confirmedAppointment.invoice.items[0].end_time
      : devEndDate,
    location: '240 Queen St W (2nd Floor), Toronto, ON'
  }

  const generateGoogleCalendarUrl = (event) => {
    const { title, description, startDate, endDate, location } = event

    const startDateString = new Date(startDate)
      .toISOString()
      .replace(/-|:|\.\d+/g, '')
    const endDateString = new Date(endDate)
      .toISOString()
      .replace(/-|:|\.\d+/g, '')

    const baseUrl = 'https://www.google.com/calendar/render?action=TEMPLATE'
    const eventDetails = `&text=${encodeURIComponent(title)}`
    const dates = `&dates=${startDateString}/${endDateString}`
    const details = `&details=${encodeURIComponent(description)}`
    const locationParam = `&location=${encodeURIComponent(location)}`

    return `${baseUrl}${eventDetails}${dates}${details}${locationParam}`
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.heading}>
        <Image src='/icons/check-badge.svg' width={80} height={80} alt='' />
        <h1 className={sharedStyles.h1}>
          Appointment <span className={sharedStyles.goldItalic}>Confirmed!</span>
        </h1>
        <p className={sharedStyles.p}>
          Please arrive 10 minutes early and feel free to reach out if you have
          any questions.
        </p>
      </div>
      <div className={styles.list}>
        <InfoFlex title='Your Booking' leftIcon='/icons/star-icon.svg'>
          <div className={styles.detailsList}>
            <TextDetail
              text={bookingData.service.title}
              icon='/icons/syringe-icon-small-grey.svg'
            />
            <TextDetail
              text={
                bookingData.service.price.discounted.length > 0
                  ? bookingData.service.price.discounted
                  : bookingData.service.price.original
              }
              icon='/icons/moneybag-icon-small-grey.svg'
            />
            <TextDetail
              text={presentableDateTime(bookingData.timeslot)}
              icon='/icons/clock-icon-small-grey.svg'
            />
            <TextDetail
              text='240 Queen St W (2nd Floor), Toronto, ON'
              icon='/icons/map-pin-icon-small-grey.svg'
            />
          </div>
        </InfoFlex>
      </div>
      <NavButtons
        nextText='Done'
        nextFunction={() => router.push('/')}
        backText='Add to calendar'
        url={generateGoogleCalendarUrl(calendarEvent)}
      />
    </div>
  )
}

export default BookingConfirmed
