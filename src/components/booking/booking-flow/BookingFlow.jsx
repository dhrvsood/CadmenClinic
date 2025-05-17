import categories from '@/doc/form_services'
import { useBookingStore } from '@/zustand/useBookingStore'
import Cookies from 'js-cookie'
import { useEffect } from 'react'

import ProgressPills from '../progress-pills/ProgressPills'
import BookingConfirmed from '../steps/booking-confirmed/BookingConfirmed'
import BookingLander from '../steps/booking-lander/BookingLander'
import ConfirmBooking from '../steps/confirm-booking/ConfirmBooking'
import GuestInfo from '../steps/guest-info/GuestInfo'
import SecureBooking from '../steps/secure-booking/SecureBooking'
import SelectService from '../steps/select-service/SelectService'
import SelectTime from '../steps/select-time/SelectTime'
import styles from './BookingFlow.module.css'
import CountdownWrapper from '../countdown-wrapper/CountdownWrapper'

const scrollToCategories = {
  skin: 360,
  lasers: 440
}

const BookingFlow = () => {
  const {
    currentStep,
    setStep,
    setGuestInfo,
    setService,
    setOpenCategories,
    resetFlow
  } = useBookingStore()

  useEffect(() => {
    resetFlow()

    const encodedData = Cookies.get('formData')
    const encodedService = Cookies.get('selectedService')
    const encodedCategory = Cookies.get('selectedCategory')

    if (encodedCategory) {
      try {
        const selectedCategory = decodeURIComponent(encodedCategory)

        setOpenCategories(selectedCategory)
        setStep(1)

        window.scrollBy(0, scrollToCategories[selectedCategory.toLowerCase()])

        Cookies.remove('selectedCategory')
      } catch (error) {
        console.error('Error decoding or parsing category cookie:', error)
      }
    }

    if (encodedService) {
      try {
        const selectedService = decodeURIComponent(encodedService)
        const service = categories
          .find((cat) =>
            cat.services.find((service) => service.id === selectedService)
          )
          .services.find((service) => service.id === selectedService)

        if (service) {
          console.log('selectedService:', service)
          setService(service)
          setStep(2)
        }

        Cookies.remove('selectedService')

        if (encodedData) {
          const decodedData = decodeURIComponent(encodedData)
          const formData = JSON.parse(decodedData)

          setGuestInfo({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone
          })

          Cookies.remove('formData')

          setStep(3)
        }
      } catch (error) {
        console.error('Error decoding or parsing service cookie:', error)
      }
    }
  }, [])

  return (
    <div className={styles.wrap}>
      {currentStep > 0 && currentStep < 4 && <ProgressPills />}
      {currentStep === 0 && <BookingLander />}
      {currentStep > 0 && currentStep < 5 &&
        <CountdownWrapper countdown={10 * 60}>
          {currentStep === 1 && <SelectService />}
          {currentStep === 2 && <GuestInfo />}
          {currentStep === 3 && <SelectTime />}
          {currentStep === 4 && <ConfirmBooking />}
        </CountdownWrapper>
      }
      {currentStep === 5 && <SecureBooking />}
      {currentStep === 6 && <BookingConfirmed />}
    </div>
  )
}

export default BookingFlow
