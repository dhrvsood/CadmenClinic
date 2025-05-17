import { getCSTDateTime } from '@/helpers/get_cst_date_time'
import {
  createOpportunity,
  fetchAvailableSlots,
  fetchBookingIds
} from '@/utils/endpoints'
import dayjs from 'dayjs'
import { useFormikContext } from 'formik'
import Cookies from 'js-cookie'
import moment from 'moment'
import { useEffect } from 'react'
import TagManager from 'react-gtm-module'
import { PatternFormat } from 'react-number-format'

export const formatTime = (time) => {
  const date = moment(time)
  return date.format('h:mm A')
}

export const filterByTime = (dataArray, time) => {
  console.log(dataArray, 'datarray')
  return dataArray.filter(
    (item) =>
      item.response.slots &&
      item.response.slots.some((slot) => slot.Time === time)
  )
}

export const getRandomObject = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length)
  return arr[randomIndex]
}

export const fields = [
  { name: 'firstName', label: 'First Name', type: 'text' },
  { name: 'lastName', label: 'Last Name', type: 'text' },
  { name: 'email', label: 'Email', type: 'email' }
]

export const getCookieValues = () => {
  const cookieNames = [
    'device',
    '_u_s',
    'referrer',
    '_u_m',
    '_u_c',
    '_fbc',
    '_fbp',
    '_u_gclid'
  ]
  const result = {}

  for (const name of cookieNames) {
    const value = Cookies.get(name)
    if (value) {
      result[name] = value
    }
  }

  return result
}

const combineAndRemoveDuplicates = (filteredSlots) => {
  const combinedSlots = filteredSlots
    .flatMap((slot) => slot.response.slots)
    .filter(Boolean)

  const uniqueSlots = combinedSlots.filter(
    (value, index, self) =>
      index === self.findIndex((t) => t.Time === value.Time)
  )

  uniqueSlots.sort((a, b) => {
    const timeA = new Date(a.Time).getTime()
    const timeB = new Date(b.Time).getTime()
    return timeA - timeB
  })

  return uniqueSlots
}

const createAvailabilityMatrix = (availability) => {
  const combinedAvailability = availability.flatMap(
    (day) => day.response.future_days
  )
  const availabilityBooleans = combinedAvailability.reduce((acc, day) => {
    const date = day.Day.split('T')[0]
    if (acc[date] == undefined) {
      acc[date] = day.IsAvailable
    } else {
      acc[date] = acc[date] || day.IsAvailable
    }
    return acc
  }, {})

  return availabilityBooleans
}

export const getPayload = (vals, event = 'lead') => ({
  ...vals,
  ...getCookieValues(),
  pixels: Object.keys(window.fbq?.instance?.pixelsByID || {}),
  event,
  userAgent: window.navigator.userAgent,
  url: `${window.location.host}${window.location.pathname}`,
  currentTime: getCSTDateTime()
})

export const findServiceBySlug = (categories, slug) => {
  for (let category of Object.values(categories)) {
    const foundService = category.services.find(
      (service) => service.slugs && service.slugs.includes(slug)
    )
    if (foundService)
      return { service: foundService, category: category.category }
  }
  return null
}

export const extractServices = (categories) =>
  Object.values(categories).flatMap((category) => category.services)

export const AutoSetFieldFromQuery = ({
  queryService,
  services,
  categories,
  setStep
}) => {
  const { setFieldValue } = useFormikContext()

  useEffect(() => {
    if (queryService && services.length > 0) {
      const { service, category } = findServiceBySlug(categories, queryService)
      if (service) {
        setFieldValue('service', queryService)
        setFieldValue('serviceTitle', service.title)
        setFieldValue('serviceId', service.id)
        setFieldValue('stay', service.stay)
        setFieldValue('category', category)
      }
    }
  }, [queryService, services, categories, setFieldValue, setStep])

  return null
}

export const PhoneInput = ({ field }) => (
  <PatternFormat
    {...field}
    className='block w-full rounded border border-gray-300 bg-white py-3'
    format='(###) ###-####'
    mask='_'
    required
  />
)

const fetchSlots = async (
  date,
  serviceId,
  guestId,
  setBookingResponse,
  setTimeSlots
) => {
  try {
    const bookingRes = await fetchBookingIds(date, serviceId, guestId, false)

    console.log(bookingRes, 'bookingres')

    // if (!bookingRes || !bookingRes.length) {
    //   // console.log('No bookings found.')
    //   setTimeSlots([])
    //   setBookingResponse([])
    //   return
    // }
    // if (bookingRes.Error === null) {
    //   console.log(bookingRes.Error, "booking")
    //   fetchAvailableSlots(bookingRes.id)
    // }

    // Fetch available slots for each booking
    // const fetchSlotsPromises = bookingRes.map((booking) => {
    //   // Only fetch slots if there's no error with the booking
    //   if (booking.Error === null) {
    //     console.log(booking.Error, "booking")
    //     return fetchAvailableSlots(booking.id)
    //   }
    //   // Explicitly return null for bookings with errors
    //   return Promise.resolve(null)
    // })

    const fetchSlotsPromises = []
    if (Array.isArray(bookingRes)) {
      bookingRes.forEach((booking) => {
        // Only fetch slots if there's no error with the booking
        if (booking.Error === null) {
          console.log(booking.Error, 'booking')
          fetchSlotsPromises.push(fetchAvailableSlots(booking.id))
        } else {
          // Explicitly return null for bookings with errors
          fetchSlotsPromises.push(Promise.resolve(null))
        }
      })
    } else {
      // Handle the case where bookingRes is a single object
      if (bookingRes.Error === null) {
        console.log(bookingRes.Error, 'booking')
        fetchSlotsPromises.push(fetchAvailableSlots(bookingRes.id))
      } else {
        // Explicitly return null for bookings with errors
        fetchSlotsPromises.push(Promise.resolve(null))
      }
    }

    const slots = await Promise.all(fetchSlotsPromises)
    const filteredSlots = slots.filter(Boolean) // Remove nulls and falsy values
    // console.log(filteredSlots)
    setBookingResponse(filteredSlots)
    const combinedSlots =
      combineAndRemoveDuplicates(filteredSlots).filter(Boolean)

    setTimeSlots(combinedSlots)
  } catch (error) {
    console.error('An error occurred:', error)
  }
}

//
const performSlotFetching = async (
  date,
  serviceId,
  guestId,
  setGuestId,
  formikRefCurrent,
  setBookingResponse,
  setTimeSlots
) => {
  if (guestId) {
    setTimeSlots(null)
    await fetchSlots(date, serviceId, guestId, setBookingResponse, setTimeSlots)
  } else {
    const payload = getPayload({ ...formikRefCurrent.values })

    const returnedGuestId = await createOpportunity(payload)
    if (returnedGuestId.id) {
      const tagManagerArgs = {
        dataLayer: {
          event: 'fetch-time-slots',
          guestId: returnedGuestId.id,
          name: `${payload.firstName} ${payload.lastName}`,
          email: payload.email
        }
      }
      TagManager.dataLayer(tagManagerArgs)
      setGuestId(returnedGuestId.id)
      await fetchSlots(
        date,
        serviceId,
        returnedGuestId.id,
        setBookingResponse,
        setTimeSlots
      )
    }
  }
}

export const fetchTimeSlots = async (
  date,
  formikRefCurrent,
  guestId,
  setBookingResponse,
  setGuestId,
  setTimeSlots
) => {
  try {
    await performSlotFetching(
      date,
      formikRefCurrent.values.serviceId,
      guestId,
      setGuestId,
      formikRefCurrent,
      setBookingResponse,
      setTimeSlots
    )
  } catch (error) {
    console.error('An error occurred:', error)
  }
}

const fetchAvailabilitys = async (
  date,
  serviceId,
  formikRefCurrent,
  guestId,
  setGuestId,
  setBookingResponse,
  setTimeSlots,
  availability,
  setAvailability,
  setSelectedDate,
  current
) => {
  try {
    const dates = getSundayDates(date, current)
    const bookingResPromises = dates.flatMap(async (date) => {
      const weekBookingRes = await fetchBookingIds(
        date,
        serviceId,
        guestId,
        false
      )
      if (weekBookingRes) {
        return weekBookingRes
      } else {
        return null
      }
    })

    const bookingRes = await Promise.all(bookingResPromises)

    if (!bookingRes || !bookingRes.length) {
      // console.log('No bookings found.')
      setAvailability({})
      setBookingResponse([])
      return
    }

    // Fetch available slots for each booking
    const fetchAvailabilityPromises = bookingRes.map((booking) => {
      // Only fetch slots if there's no error with the booking
      if (booking.Error === null) {
        return fetchAvailableSlots(booking.id)
      }
      // Explicitly return null for bookings with errors
      return Promise.resolve(null)
    })

    const availabilityRes = await Promise.all(fetchAvailabilityPromises)

    const availabilityDates = createAvailabilityMatrix(availabilityRes)
    setAvailability({ ...availability, ...availabilityDates })

    if (current) {
      var currentDate = dayjs(date, 'MM-DD-YYYY')
      const monthLimit = 30
      for (var i = 0; i < monthLimit; i++) {
        if (!availabilityDates[currentDate.format('YYYY-MM-DD')]) {
          currentDate = currentDate.add(1, 'day')
        } else {
          break
        }
      }
      await fetchTimeSlots(
        currentDate,
        formikRefCurrent,
        guestId,
        setBookingResponse,
        setGuestId,
        setTimeSlots
      )
      setSelectedDate(currentDate)
    }
  } catch (error) {
    console.error('An error occurred:', error)
  }
}

const performAvailabilityFetching = async (
  date,
  serviceId,
  guestId,
  setGuestId,
  formikRefCurrent,
  setBookingResponse,
  setTimeSlots,
  availability,
  setAvailability,
  setSelectedDate,
  current
) => {
  if (guestId) {
    await fetchAvailabilitys(
      date,
      serviceId,
      formikRefCurrent,
      guestId,
      setGuestId,
      setBookingResponse,
      setTimeSlots,
      availability,
      setAvailability,
      setSelectedDate,
      current
    )
  } else {
    const payload = getPayload({ ...formikRefCurrent.values })
    const returnedGuestId = await createOpportunity(payload)
    if (returnedGuestId.id) {
      const tagManagerArgs = {
        dataLayer: {
          event: 'fetch-time-slots',
          guestId: returnedGuestId.id,
          name: `${payload.firstName} ${payload.lastName}`,
          email: payload.email
        }
      }
      TagManager.dataLayer(tagManagerArgs)
      setGuestId(returnedGuestId.id)
      await fetchAvailabilitys(
        date,
        serviceId,
        formikRefCurrent,
        returnedGuestId.id,
        setGuestId,
        setBookingResponse,
        setTimeSlots,
        availability,
        setAvailability,
        setSelectedDate,
        current
      )
    }
  }
}

export const fetchAvailability = async (
  date,
  formikRefCurrent,
  guestId,
  setBookingResponse,
  setGuestId,
  setTimeSlots,
  availability,
  setAvailability,
  setSelectedDate,
  current
) => {
  try {
    await performAvailabilityFetching(
      date,
      formikRefCurrent.values.serviceId,
      guestId,
      setGuestId,
      formikRefCurrent,
      setBookingResponse,
      setTimeSlots,
      availability,
      setAvailability,
      setSelectedDate,
      current
    )
  } catch (error) {
    console.error('An error occurred:', error)
  }
}

const getFirstSunday = (date) => {
  const sundayDate = date
  const dayOfWeek = sundayDate.day()
  const daysToAdd = dayOfWeek === 0 ? 0 : -dayOfWeek
  const firstSunday = sundayDate.add(daysToAdd, 'day').startOf('day')
  return firstSunday
}

export const getSundayDates = (date) => {
  const firstSunday = getFirstSunday(dayjs(date, 'MM-DD-YYYY'))
  const firstSundayOfMonth = getFirstSunday(
    dayjs(date, 'MM-DD-YYYY').startOf('month')
  )
  const millisecondsPerWeek = 1000 * 60 * 60 * 24 * 7
  const diffInMilliseconds = Math.abs(firstSunday.diff(firstSundayOfMonth))
  const sundays = Array.from(
    { length: 6 - Math.ceil(diffInMilliseconds / millisecondsPerWeek) },
    (_, index) => {
      const nextSunday = firstSunday.add(7 * index, 'day')
      return nextSunday
    }
  )

  return sundays
}
