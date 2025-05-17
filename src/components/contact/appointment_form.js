import categories from '@/doc/form_services'
import { yupSchema } from '@/helpers/yup_schema'
import { confirmBookingSlot, reserveBookingSlot } from '@/utils/endpoints'
import { fbConversionsApi } from '@/utils/endpoints'
import { zapierBookedAppointment } from '@/utils/endpoints'
import { InformationCircleIcon } from '@heroicons/react/24/outline'
import va from '@vercel/analytics'
import axios from 'axios'
import dayjs from 'dayjs'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import TagManager from 'react-gtm-module'
import Cookies from 'js-cookie'

import SpinnerModal from '../spinner_modal'
import {
  AutoSetFieldFromQuery,
  PhoneInput,
  extractServices,
  fields,
  filterByTime,
  formatTime,
  getCookieValues,
  getPayload,
  getRandomObject
} from './appointment_utils'
import DateCalendarValue from './calendar'
import ServiceFields from './service_fields'
import useCountdownTimer from './useCountdownTimer'

const freeServices = []

export const AppointmentForm = () => {
  const [close, setClose] = useState(false)
  const handleTimerComplete = () => {
    setIframeSrc('')
    // Close the iframe by clearing its src
    setTimerComplete(true)
  }

  const [iframeSrc, setIframeSrc] = useState('')
  const { seconds, formatTimer, resetTimer } = useCountdownTimer(
    600, // 10 minutes
    handleTimerComplete,
    !!iframeSrc
  )

  const [bookingResponse, setBookingResponse] = useState(null)
  const [date, setDate] = useState(dayjs())
  const [guestId, setGuestId] = useState(null)
  const [services, setServices] = useState([])
  const [hasRun, setHasRun] = useState(false)
  const [step, setStep] = useState(1)
  const [timeSlots, setTimeSlots] = useState([])
  const [timerComplete, setTimerComplete] = useState(false)
  const [open, setOpen] = useState(false)
  const [showSkeleton, setShowSkeleton] = useState(false)
  const [cardStatus, setCardStatus] = useState('')
  const [tryagain, setTryAgain] = useState(1)

  const [leadFired, setLeadFired] = useState(false)
  const [dataPayload, setDataPayload] = useState(null)
  const [failed, setFailed] = useState(false)
  const router = useRouter()
  const queryService = router.query.service
  const [uuid, setUuid] = useState('')
  
  const formikRef = useRef()
  
  useEffect(() => {
    const queryUuid = localStorage.getItem('uuid') || ''
    setUuid(queryUuid)
  }, [])

  useEffect(() => {
    const encodedData = Cookies.get('formData')
    const encodedService = Cookies.get('selectedService')

    if (encodedData && encodedService) {
      try {
        const decodedData = decodeURIComponent(encodedData)
        const formData = JSON.parse(decodedData)

        const decodedService = decodeURIComponent(encodedService)
        const selectedService = JSON.parse(decodedService)

        formikRef.current.setValues({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone, 
          service: selectedService.service,
          serviceId: selectedService.serviceId,
          serviceTitle: selectedService.serviceTitle
        })

        setStep(3)

        Cookies.remove('formData')
        Cookies.remove('selectedService')
      } catch (error) {
        console.error('Error decoding or parsing cookie:', error)
      }
    }

    if(encodedService) {
      try {
        const decodedService = decodeURIComponent(encodedService)
        const selectedService = JSON.parse(decodedService)

        formikRef.current.setValues({
          service: selectedService.service,
          serviceId: selectedService.serviceId,
          serviceTitle: selectedService.serviceTitle
        })

        setStep(2)

        Cookies.remove('selectedService')
      } catch (error) {
        console.error('Error decoding or parsing cookie:', error)
      }
    }
  }, [])

  useEffect(() => {
    setServices(extractServices(categories))
  }, [categories])

  useEffect(() => {
    const payload = getPayload(formikRef.current.values)
    setDataPayload(payload)
  }, [step])

  useEffect(() => {
    window.scrollTo(0, 0)

    if (step >= 1 && step <= 3) {
      const tagManagerArgs = {
        dataLayer: {
          event: `booking-step-${step}`
        }
      }
      TagManager.dataLayer(tagManagerArgs)
    }

    if (step === 4) {
      window.lsq('track', 'ViewedPaymentPage')
    }

    if (
      process.env.NODE_ENV === 'production' &&
      step === 3 &&
      guestId &&
      !leadFired
    ) {
      const payload = getPayload(formikRef.current.values, 'lead')

      setDataPayload(payload)
      // fbConversionsApi(payload)
      const tagManagerArgs = {
        dataLayer: {
          event: 'lead'
        }
      }
      TagManager.dataLayer(tagManagerArgs)
      setLeadFired(true)
    }
  }, [step, guestId])

  // const shouldShowStripe = () => {
  //   formikRef.current &&
  //   !freeServices.includes(formikRef.current.values.serviceId)
  // }

  const startSubmit = (formik) => {
    formik.handleSubmit()
  }

  const handleSuccess = async (values) => {
    try {
      const newVals = getCookieValues()
      const vals = { ...formikRef.current.values, ...newVals }
      const payload = getPayload(vals, 'schedule')
      setDataPayload(payload)
      const { slot_time } = payload
      const bookings = filterByTime(bookingResponse, slot_time)
      const bookingId = getRandomObject(bookings).bookingId
      const res = await confirmBookingSlot(bookingId)
      if (res && res.is_confirmed) {
        // fbConversionsApi(payload)
        zapierBookedAppointment(payload)
        va.track('Booking Complete')

        window.lsq('set', 'ContactInfo', {
          email: values.email,
          phoneNumber: values.phone,
          firstName: values.firstName,
          lastName: values.lastName,
          service: values.service
        })
        // window.lsq('track', 'BookingComplete')

        const tagManagerArgs = {
          dataLayer: {
            event: 'completed_reservation'
          }
        }
        TagManager.dataLayer(tagManagerArgs)
        setTimeout(() => {
          router.push(
            `/confirmation?name=${values.firstName}&time=${slot_time}&service=${values.service}&phoneNumber=${values.phone}`
          )
        }, 3000)
      } else {
        throw new Error('Error reserving booking slot')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('An error occurred. Please try again.')
      setOpen(false)
    } finally {
      console.log('Done')
    }
  }

  const handleAddCard = async () => {
    try {
      const zenotiAddCardRes = await axios.post('/api/zenoti/addcard', {
        guestId: guestId
      })

      if (zenotiAddCardRes.data.hosted_payment_uri) {
        setIframeSrc(zenotiAddCardRes.data.hosted_payment_uri)
      } else {
        console.error('Failed to get Zenoti payment URL')
      }
    } catch (error) {
      console.error('Error adding card:', error)
    }
  }

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      setSubmitting(true)
      setOpen(true)
      const newVals = getCookieValues()
      const vals = { ...formikRef.current.values, ...newVals }
      const payload = getPayload(vals, 'schedule')
      setDataPayload(payload)
      const { slot_time } = payload
      const bookings = filterByTime(bookingResponse, slot_time)
      const bookingId = getRandomObject(bookings).bookingId
      const res = await reserveBookingSlot(bookingId, slot_time)

      if (!res || !res.is_reserved)
        throw new Error('Error reserving booking slot')

      // first check if guest has card on file
      const zenotiCheckCardRes = await axios.post('/api/zenoti/checkcard', {
        guestId
      })
      if (zenotiCheckCardRes.data.has_card) {
        handleSuccess(formikRef.current.values)
        return
      }

      // proceed to add card incase card doesnt exist
      setOpen(false)
      handleAddCard()
      setClose(false)
      setTimerComplete(false)
    } catch (error) {
      console.error('Error:', error)

      setOpen(false)
    } finally {
      setSubmitting(false)
    }
  }

  useEffect(() => {
    function handleMessage(event) {
      if (event.data.type === 'paymentStatus') {
        setCardStatus(event.data.status)
        // You can update the parent state or perform any action based on the received status
      }
    }

    window.addEventListener('message', handleMessage)

    return () => {
      window.removeEventListener('message', handleMessage)
    }
  }, [])

  const handleRetry = () => {
    setTryAgain(tryagain + 1)
    handleAddCard()
    setTimerComplete(false)
  }

  const handleSlotAgain = () => {
    setStep(3)
  }

  // useEffect(() => {
  //   if (addCard) {
  //     handleAddCard()
  //     formatTimer()
  //   }
  // }, [step, addCard])

  useEffect(() => {
    if (step === 4) {
      formikRef.current.handleSubmit()
    }
  }, [step])

  useEffect(() => {
    if (cardStatus === 'successful') {
      handleSuccess(formikRef.current.values)
    } else if (cardStatus === 'failed') {
      setTimeout(() => {
        setClose(true)
      }, 1000)
    }
  }, [cardStatus])

  return (
    <>
      <Formik
        innerRef={formikRef}
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          service: '',
          serviceId: '',
          serviceTitle: '',
          phone: '',
          slot_time: ''
        }}
        validationSchema={yupSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          handleChange,
          handleBlur,
          setFieldValue,
          isSubmitting,
          errors,
          handleSubmit: formikHandleSubmit
        }) => {
          const isStep2Valid = () => {
            const requiredFields = ['firstName', 'lastName', 'email', 'phone']
            return requiredFields.every((field) => !errors[field])
          }
          const isStep3Valid = () => formikRef.current.values.slot_time

          if (step === 1 && queryService && values.service && !values.stay) {
            setStep(step + 1)
          }
          return (
            <>
              <AutoSetFieldFromQuery
                queryService={queryService}
                services={services}
                categories={categories}
                setStep={setStep}
              />

              <Form className={`${open ? 'blur-sm' : ''} relative`}>
                <p className='sr-only text-center'>Step: {step} / 3</p>
                {step === 1 && (
                  <ServiceFields
                    values={values}
                    setFieldValue={setFieldValue}
                    step={step}
                    setStep={setStep}
                  />
                )}

                {step === 2 && (
                  <>
                    <div className='pb-2 text-center text-2xl font-bold text-teal-700'>
                      Selected: {values.serviceTitle}
                    </div>
                    <h2 className='pb-3 text-center font-display text-3xl'>
                      Add your information
                    </h2>

                    {fields.map((field, i) => (
                      <div key={i} className='relative mb-5'>
                        <label
                          htmlFor={field.name}
                          className='text-cream-900 text-sm'
                        >
                          {field.label}
                          <input
                            type={field.type}
                            name={field.name}
                            className='block w-full rounded border border-gray-300 bg-white py-3'
                            onChange={handleChange} // Make sure handleChange updates the corresponding field in the state
                            onBlur={handleBlur}
                            value={values[field.name] || ''} // Use values from your state
                            required
                          />
                          <ErrorMessage name={field.name} className='absolute'>
                            {(msg) => (
                              <div className='flex flex-row items-center space-x-3 py-2'>
                                <InformationCircleIcon className='h-5 w-5 text-red-600' />
                                <div className='ml-3 text-sm font-bold text-red-600'>
                                  {msg}
                                </div>
                              </div>
                            )}
                          </ErrorMessage>
                        </label>
                      </div>
                    ))}

                    <div>
                      <label htmlFor='phone' className='text-cream-900 text-sm'>
                        Phone
                      </label>
                      <Field name='phone' component={PhoneInput} />
                      <ErrorMessage name='phone'>
                        {(msg) => (
                          <div className='flex flex-row items-center space-x-3 py-2'>
                            <InformationCircleIcon className='h-5 w-5 text-red-600' />
                            <div className='ml-3 text-sm font-bold text-red-600'>
                              {msg}
                            </div>
                          </div>
                        )}
                      </ErrorMessage>

                      <div className='mt-8 text-sm text-gray-600'>
                        By submitting this form, you agree to receive
                        transaction and marketing messages messages from
                        ImageLab. Text and data rates may apply. Message
                        frequency varies. Reply STOP to unsubscribe or HELP for
                        help. To view our privacy policy, visit{' '}
                        <Link
                          className='font-medium hover:underline'
                          href='/privacy'
                        >
                          here
                        </Link>
                        .
                      </div>
                    </div>
                  </>
                )}
                {step === 3 && (
                  <div>
                    <div className='text-center font-bold'>
                      Selected: {values.serviceTitle}
                    </div>
                    <h2 className='py-3 text-center text-xl font-bold'>
                      Choose a time:
                    </h2>
                    <DateCalendarValue
                      date={date}
                      formikRef={formikRef}
                      guestId={guestId}
                      setBookingResponse={setBookingResponse}
                      setDate={setDate}
                      setGuestId={setGuestId}
                      setTimeSlots={setTimeSlots}
                      showSkeleton={showSkeleton}
                      setShowSkeleton={setShowSkeleton}
                    />
                    <div className='relative'>
                      {showSkeleton || !timeSlots ? (
                        <div className='pt-10'>
                          <div
                            role='status'
                            className='mx-auto flex justify-center'
                          >
                            <svg
                              aria-hidden='true'
                              className='mr-2 h-10 w-10 animate-spin fill-teal-600 text-white'
                              viewBox='0 0 100 101'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                                fill='currentColor'
                              />
                              <path
                                d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                                fill='currentFill'
                              />
                            </svg>
                            <span className='sr-only'>Loading...</span>
                          </div>
                        </div>
                      ) : (
                        <>
                          {timeSlots && timeSlots.length > 0 ? (
                            <div className='mx-auto max-w-lg'>
                              <h3 className='py-5 text-center font-bold'>
                                Availability
                              </h3>

                              <div className='w-full px-3'>
                                <Field
                                  as='select'
                                  name='slot_time'
                                  className='w-full rounded border p-2 focus:border-teal-300 focus:ring-teal-500'
                                  onChange={(e) => {
                                    setFieldValue('slot_time', e.target.value)
                                  }}
                                  value={values.slot_time}
                                >
                                  <option value='' disabled>
                                    Select a time
                                  </option>
                                  {timeSlots.map((t, i) => (
                                    <option key={i} value={t.Time}>
                                      {formatTime(t.Time)}
                                    </option>
                                  ))}
                                </Field>
                              </div>
                            </div>
                          ) : (
                            <div className='pt-3 text-center text-gray-500'>
                              No time available
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                )}
                {step === 4 && (
                  <div>
                    <div className='-mt-5 space-y-3 rounded-lg border border-teal-600 bg-white p-10'>
                      <h3 className='text-center font-serif text-xl'>
                        Your Appointment
                      </h3>
                      <div className='text-center text-sm'>
                        Selected:{' '}
                        <span className='font-medium'>
                          {' '}
                          {values.serviceTitle}
                        </span>
                      </div>
                      <div className='text-center text-sm'>
                        Time:{' '}
                        <span className='font-medium'>
                          {dayjs(formikRef.current.values.slot_time).format(
                            'MMMM D, YYYY h:mm A'
                          )}
                        </span>
                      </div>
                    </div>
                    <div className='mx-auto max-w-lg'>
                      <h2 className='my-3 text-center font-bold'>
                        Secure Your Appointment
                      </h2>
                      <p className='text-md py-3 text-center'>
                        To secure your appointment, we require a card on file.{' '}
                        <b>We do not charge a fee for the booking!</b>
                      </p>
                      <div>
                        <div className='flex items-center justify-center'>
                          {/* <div                          
                            onClick={handleAddCard()}
                          >                
                          </div> */}
                        </div>

                        <div className='mt-8 text-center'>
                          <p className='text-xl text-gray-700'>
                            Your slot is reserved for the next
                            <span className='pl-2 font-semibold text-teal-700'>
                              {formatTimer()} minutes
                            </span>
                            .
                          </p>
                        </div>

                        <>
                          <div className='mt-8'>
                            <iframe
                              id='add-card'
                              src={iframeSrc}
                              title='Add Card'
                              width='100%'
                              height='410px'
                              frameBorder='0'
                            ></iframe>
                          </div>
                        </>
                      </div>
                      {close && !timerComplete ? (
                        <div
                          className='text-blue-600 mt-5 cursor-pointer text-center text-xl font-bold hover:underline'
                          onClick={handleRetry}
                        >
                          Please Try Again
                        </div>
                      ) : null}
                      {timerComplete ? (
                        <div
                          className='text-blue-600 mt-5 cursor-pointer text-center text-xl font-bold hover:underline'
                          onClick={handleSlotAgain}
                        >
                          Choose Slot Again
                        </div>
                      ) : null}
                    </div>
                    {iframeSrc ? (
                      <div className='mt-2 pb-5 pt-5 text-center text-sm text-gray-600'>
                        We have a 48-hour cancellation policy. If you cancel
                        within 48 hours of your appointment or do not show up, a
                        $25 fee will be charged. We appreciate your cooperation!
                      </div>
                    ) : null}
                  </div>
                )}
                <div className='flex justify-between space-x-10 py-10'>
                  {step > 1 && (
                    <button
                      type='button'
                      onClick={() => setStep(step - 1)}
                      className='w-full rounded border border-gray-300 bg-white py-5 hover:border-gray-500'
                    >
                      Previous
                    </button>
                  )}
                  {step === 1 && (
                    <button
                      type='button'
                      onClick={() => {
                        setStep(step + 1)
                      }}
                      className={`${
                        step === 1 ? 'hidden' : ''
                      } w-full rounded border border-teal-700 bg-teal-700 py-5 text-white hover:bg-teal-600 sm:block ${
                        !values.serviceId ? 'cursor-not-allowed opacity-50' : ''
                      }`}
                      disabled={!values.serviceId}
                    >
                      Next
                    </button>
                  )}
                  {step === 2 && (
                    <button
                      type='button'
                      onClick={() => {
                        window.lsq('set', 'ContactInfo', {
                          email: values.email,
                          phoneNumber: values.phone,
                          firstName: values.firstName,
                          lastName: values.lastName,
                          service: values.service
                        })
                        const tagManagerArgs = {
                          dataLayer: {
                            event: 'user_information_submitted',
                            email: values.email,
                            phoneNumber: values.phone,
                            firstName: values.firstName,
                            lastName: values.lastName,
                            service: values.service,
                            uuid: uuid
                          }
                        }
                        TagManager.dataLayer(tagManagerArgs)
                        window.lsq('track', 'UserInformationSubmitted')
                        setStep(step + 1)
                      }}
                      className={`${
                        step === 1 ? 'hidden' : ''
                      } w-full rounded border border-teal-700 bg-teal-700 py-5 text-white hover:bg-teal-600 sm:block ${
                        !isStep2Valid() ? 'cursor-not-allowed opacity-50' : ''
                      }`}
                      disabled={!isStep2Valid()}
                    >
                      Submit
                    </button>
                  )}
                  {step === 3 && (
                    <button
                      type='button'
                      onClick={() => {
                        setStep(step + 1)
                      }}
                      className={`${
                        step === 1 ? 'hidden' : ''
                      } w-full rounded border border-teal-700 bg-teal-700 py-5 text-white hover:bg-teal-600 sm:block ${
                        !isStep3Valid() ? 'cursor-not-allowed opacity-50' : ''
                      }`}
                      disabled={!isStep3Valid()}
                    >
                      Next
                    </button>
                  )}
                  {/* {step == 3 && (
                    <button
                      type='submit'
                      disabled={
                        isSubmitting || !formikRef.current.values.slot_time
                      }
                      className={`w-full rounded border  py-5 text-white ${
                        isSubmitting || !formikRef.current.values.slot_time
                          ? 'cursor-not-allowed border-gray-500 bg-gray-500 opacity-50'
                          : 'border-gold-base bg-gold-base hover:border-teal-700 hover:bg-teal-600'
                      }`}
                      onClick={() =>
                        startSubmit({ handleSubmit: formikHandleSubmit })
                      }
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit'}{' '}
                      <span
                        className={`${isSubmitting ? 'loading' : 'hidden'}`}
                      >
                        <span className='bg-white' />
                        <span className='bg-white' />
                        <span className='bg-white' />
                      </span>
                    </button>
                  )} */}
                  {/* {step == 4 && shouldShowStripe() && (
                    <button
                      type='submit'
                      disabled={
                        isSubmitting || !formikRef.current.values.slot_time
                      }
                      className={`w-full rounded border  py-5 text-white ${
                        isSubmitting || !formikRef.current.values.slot_time
                          ? 'cursor-not-allowed border-gray-500 bg-gray-500 opacity-50'
                          : 'border-gold-base bg-gold-base hover:border-teal-700 hover:bg-teal-600'
                      }`}
                      onClick={() =>
                        startSubmit({ handleSubmit: formikHandleSubmit })
                      }
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit'}{' '}
                      <span
                        className={`${isSubmitting ? 'loading' : 'hidden'}`}
                      >
                        <span className='bg-white' />
                        <span className='bg-white' />
                        <span className='bg-white' />
                      </span>
                    </button>
                  )} */}
                </div>
              </Form>
              {/* Mobile Button */}
              {step === 1 && (
                <button
                  type='button'
                  onClick={() => {
                    if (step === 2 && !isStep2Valid()) {
                      return
                    }
                    setStep(step + 1)
                  }}
                  className={`sticky bottom-0 left-0 mb-10 w-full rounded border border-teal-700 bg-teal-700 py-5 text-white hover:bg-teal-600 sm:hidden ${
                    (!isStep2Valid() && step === 2) || !values.service
                      ? 'cursor-not-allowed opacity-50'
                      : ''
                  }`}
                  disabled={(!isStep2Valid() && step === 2) || !values.service}
                >
                  Next
                </button>
              )}
            </>
          )
        }}
      </Formik>
      {open && <SpinnerModal />}
    </>
  )
}

export default AppointmentForm
