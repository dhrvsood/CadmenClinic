import { useBookingStore } from '@/zustand/useBookingStore'
import { useEffect, useState } from 'react'

import BookingHeader from '../../booking-header/BookingHeader'
import CountdownTimer from '../../countdown-timer/CountdownTimer'
import styles from './SecureBooking.module.css'
import { useNotificationStore } from '@/zustand/useNotificationStore'

const SecureBooking = () => {
  const {
    setNextDisabled,
    incrementStep,
    decrementStep,
    reserveSlot,
    checkCard,
    addCard,
    bookingId,
    confirmBooking
  } = useBookingStore()
  const reservationBlockedUntil = useBookingStore(
    (state) => state.reservationBlockedUntil
  )
  const { addToast } = useNotificationStore()
  const [checkingCard, setCheckingCard] = useState(true)
  const [paymentForm, setPaymentForm] = useState(null)

  useEffect(() => {
    const reserveAndCheckCard = async () => {
      setNextDisabled(true)
      setCheckingCard(true)
  
      await reserveSlot()
  
      const checkIfCardExists = async () => {
        const cardExists = await checkCard()
        if (!cardExists) {
          setCheckingCard(false)
          const getAddCardForm = await addCard()
          setPaymentForm(getAddCardForm.hosted_payment_uri)
  
          return
        }
        const bookingIsConfirmed = await confirmBooking()
  
        if (!bookingIsConfirmed) {
          addToast('Problem confirming booking. Please try again or select a new time.', 'error')
          decrementStep()
  
          return
        }
        incrementStep()
      }
  
      checkIfCardExists()
    }
    reserveAndCheckCard()
  }, [])

  useEffect(() => {}, [paymentForm, reservationBlockedUntil])

  useEffect(() => {
    const handleMessage = async (event) => {
      if (event.origin !== window.location.origin)
        return

      fetch('/api/logger', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          event: event.data
        })
      })

      if (
        event.data.type === 'paymentStatus' &&
        event.data.status === 'successful'
      ) {
        const bookingIsConfirmed = await confirmBooking()
        console.log("Booking Confirmed?", bookingIsConfirmed)

        if (!bookingIsConfirmed) {
          addToast('Problem confirming booking. Please try again or select a new time.', 'error')
          decrementStep()
          return
        }
        incrementStep()
      }
    }
    window.addEventListener('message', handleMessage)

    return () => {
      window.removeEventListener('message', handleMessage)
    }
  }, [])
  
  return (
    <div className={styles.wrap}>
      {checkingCard ? (
        <div className={styles.spinner}></div>
      ) : (
        <>
          <BookingHeader
            heading='Secure Your Appointment'
            subheading='To secure your appointment, we require a card on file.'
          >
            <p className={styles.bold}>
              We do not charge a fee for the booking!*
            </p>
          </BookingHeader>
          <div className={styles.addCardWrap}>
            {!paymentForm ? (
              <div className={styles.spinner}></div>
            ) : (
              <div className={styles.paymentForm}>
                <CountdownTimer />
                <div className={styles.disclaimer}>
                * We have a 48-hour cancellation policy. If you cancel within 48 hours of your appointment or do not show up, a $50 fee will be charged. We appreciate your cooperation!
                </div>
                <iframe
                  id='add-card'
                  src={paymentForm}
                  title='Add Card'
                  width='100%'
                  height='420px'
                  target='_parent'
                  frameBorder='0'
                ></iframe>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default SecureBooking
