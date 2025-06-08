import { assemblePayloadWithCookies } from '@/helpers/assemble_payload_with_cookies'
import { getSundaysInCalendarView } from '@/helpers/calendar/get_sundays_in_calendar_view'
import { fetchPost } from '@/helpers/requests'
import {
  createOpportunity,
  fetchAvailableSlots,
  fetchBookingIds
} from '@/utils/endpoints'
import va from '@vercel/analytics'
import TagManager from 'react-gtm-module'
import { create } from 'zustand'
import { zapierBookedAppointment } from '@/utils/endpoints'
import { removeDashes } from '@/helpers/strings/string_modifiers'
import dayjs from 'dayjs'

const initialBookingData = {
  service: null,
  timeslot: null,
  guestInfo: null,
  consented: false
}

export const useBookingStore = create((set, get) => ({
  bookingData: initialBookingData,
  currentStep: 0,
  nextDisabled: true,
  handleGuestDataSubmit: null,
  selectedDate: null,
  availableTimeslots: [],
  guestId: null,
  bookingId: null,
  selectedMonth: [new Date().getMonth(), new Date().getFullYear()],
  monthSundays: [],
  availableDays: [],
  confirmedAppointment: null,
  loadingTimeslots: true,
  reservationBlockedUntil: null,
  initialLoading: true,
  openCategories: [],
  resetFlow: () => {
    set({
      bookingData: initialBookingData,
      currentStep: 0,
      nextDisabled: true,
      handleGuestDataSubmit: null,
      selectedDate: null,
      availableTimeslots: [],
      guestId: null,
      bookingId: null,
      selectedMonth: [new Date().getMonth(), new Date().getFullYear()],
      monthSundays: [],
      availableDays: [],
      confirmedAppointment: null,
      loadingTimeslots: true,
      reservationBlockedUntil: null
    })
  },
  setOpenCategories: (category) => {
    if (get().openCategories.includes(category)) {
      set({openCategories: get().openCategories.filter((item) => item !== category)})
    } else {
      set({openCategories: [...get().openCategories, category]})
    }
  },
  setStep: (step) => set({ currentStep: step }),
  setHandleSubmit: (submitFunction) =>
    set({ handleGuestDataSubmit: submitFunction }),
  setNextDisabled: (nextDisabled) => set({ nextDisabled }),
  incrementStep: () => {
    window.scrollTo({ top: 0 })
    set({ currentStep: get().currentStep + 1 })
  },
  decrementStep: () => {
    window.scrollTo({ top: 0 })
    set({ currentStep: get().currentStep - 1 })
  },
  setSelectedMonth: (month, year, attempts = 0) => {
    set({ loadingTimeslots: true })

    if (attempts >= 3) return

    if (attempts === 0) {
      TagManager.dataLayer({
        dataLayer: {
          event: 'fetch-time-slots',
          guestId: get().guestId,
          name: `${get().bookingData.guestInfo.firstName} ${get().bookingData.guestInfo.lastName}`,
          email: get().bookingData.guestInfo.email
        }
      })
    }

    set({ selectedMonth: [month, year] })
    set({ availableDays: [] })
    const sundays = getSundaysInCalendarView(
      get().selectedMonth[1],
      get().selectedMonth[0]
    )
    console.log('Sundays:', sundays);

    const bookingIdRequests = sundays.map((date) => {
      const formattedDate = dayjs(date).format('MM-DD-YYYY')
      const serviceId = get().bookingData.service.id
      const guestId = get().guestId

      return fetchBookingIds(formattedDate, serviceId, guestId, false)
    })

    Promise.all(bookingIdRequests)
      .then((res) => {
        const availability = res.map((booking) => {
          return fetchAvailableSlots(booking.id)
        })

        Promise.all(availability)
          .then((res2) => {
            const availableDays = res2
              .map((week) => {
                return week.response.future_days.map((day) => {
                  return day
                })
              })
              .flat()

            const firstAvailableDay = availableDays.find((item) => {
              const itemDate = new Date(item.Day)
              return (
                item.IsAvailable &&
                // itemDate > currentDate &&
                itemDate.getMonth() === month &&
                itemDate.getFullYear() === year
              )
            })

            if (!firstAvailableDay) {
              return get().setSelectedMonth(month + 1, year, attempts + 1)
            }

            const nextAvailableDateInMonth = new Date(firstAvailableDay.Day)

            get().setSelectedDate(dayjs(nextAvailableDateInMonth))
            set({ initialLoading: false })

            set({ availableDays })
          })
          .catch((err2) => {
            console.log(err2)
          })
      })
      .catch((err) => {
        console.log(err)
      })
  },
  setSelectedDate: async (date) => {
    set({ selectedDate: date })
    set({ availableTimeslots: [] })
    set({ loadingTimeslots: true })

    const formattedDate = date.toISOString().split('T')[0]
    const serviceId = get().bookingData.service.id
    const guestId = get().guestId

    fetchBookingIds(formattedDate, serviceId, guestId, false).then((res) => {
      set({ bookingId: removeDashes(res.id) })
      fetchAvailableSlots(res.id)
        .then((res2) => {
          set({ availableTimeslots: res2.response.slots })
          set({ loadingTimeslots: false })
        })
        .catch((err2) => {
          console.log(err2)
        })
    })
  },
  setMonthSundays: (sundays) => set({ monthSundays: sundays }),
  setService: (service) =>
    set((state) => ({ bookingData: { ...state.bookingData, service } })),
  setGuestInfo: async (guestInfo) => {
    const queryUuid = localStorage.getItem('uuid') || ''
    set((state) => ({ bookingData: { ...state.bookingData, guestInfo } }))
    const bookingData = get().bookingData
    const payload = assemblePayloadWithCookies(
      { ...bookingData.guestInfo, ...bookingData.service },
      'lead'
    )

    // window.lsq('set', 'ContactInfo', {
    //   email: guestInfo.email,
    //   phoneNumber: guestInfo.phone,
    //   firstName: guestInfo.firstName,
    //   lastName: guestInfo.lastName,
    //   service: get().bookingData.service.title
    // })
    TagManager.dataLayer({
      dataLayer: {
        event: 'user_information_submitted',
        email: guestInfo.email,
        phoneNumber: guestInfo.phone,
        firstName: guestInfo.firstName,
        lastName: guestInfo.lastName,
        service: get().bookingData.service.title,
        uuid: queryUuid
      }
    })
    // window.lsq('track', 'UserInformationSubmitted')

    get().incrementStep()
    const guestId = await createOpportunity(payload)
    // set({ guestId: guestId.id })
    get().setSelectedMonth(new Date().getMonth(), new Date().getFullYear())
  },
  setDateTime: (dateTime) =>
    set((state) => ({ bookingData: { ...state.bookingData, dateTime } })),
  resetBookingData: () =>
    set({ bookingData: initialBookingData, currentStep: 0 }),
  setTimeslot: (timeslot) =>
    set((state) => ({ bookingData: { ...state.bookingData, timeslot } })),
  setConfirmedAppointment: (appointment) =>
    set({ confirmedAppointment: appointment }),
  reserveSlot: async () => {
    const bookingId = await get().bookingId
    const time = await get().bookingData.timeslot

    const response = await fetchPost('/api/zenoti/reserve-slot', {
      bookingId,
      time
    })

    response.expiry_time &&
      set({ reservationBlockedUntil: response.expiry_time })

    return response
  },
  checkCard: async () => {
    const guestId = await get().guestId
    const response = await fetchPost('/api/zenoti/checkcard', { guestId })

    return response.has_card
  },
  addCard: async () => {
    const response = await fetchPost('/api/zenoti/addcard', {
      guestId: get().guestId
    })

    return response
  },
  confirmBooking: async () => {
    const response = await fetchPost('/api/zenoti/confirm-slot', {
      bookingId: removeDashes(get().bookingId),
      guestId: get().guestId,
      serviceInfo: {serviceId: get().bookingData.service.id, selectedTimeslot: get().bookingData.timeslot}
    })

    response && zapierBookedAppointment(assemblePayloadWithCookies(get().bookingData.guestInfo, 'schedule'))

    va.track('Booking Complete')

    window.lsq('set', 'ContactInfo', {
      email: get().bookingData.guestInfo.email,
      phoneNumber: get().bookingData.guestInfo.phone,
      firstName: get().bookingData.guestInfo.firstName,
      lastName: get().bookingData.guestInfo.lastName,
      service: get().bookingData.service.title
    })

    TagManager.dataLayer({
      dataLayer: {
        event: 'completed_reservation'
      }
    })

    return response
  }
}))
