import { formatTime } from '@/helpers/time/datetime_formatter'
import { useBookingStore } from '@/zustand/useBookingStore'
import { DotLottiePlayer } from '@dotlottie/react-player'
import { useEffect, useRef } from 'react'
import Calendar from 'react-calendar'

import BookingHeader from '../../booking-header/BookingHeader'
import NavButtons from '../../nav-buttons/NavButtons'
import styles from './SelectTime.module.css'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import dayjs from 'dayjs'

const tod = [
  { title: 'Morning:', startTime: 0, endTime: 12 },
  { title: 'Afternoon:', startTime: 12, endTime: 17 },
  { title: 'Evening:', startTime: 17, endTime: 23 }
]

const SelectTime = () => {
  const {
    bookingData,
    availableTimeslots,
    selectedDate,
    setSelectedDate,
    setSelectedMonth,
    availableDays,
    setTimeslot,
    setNextDisabled,
    loadingTimeslots,
    initialLoading
  } = useBookingStore((state) => state)

  const timeslotsRef = useRef(null)

  useEffect(() => {
    setSelectedMonth(dayjs().month(), dayjs().year())
  }, [])

  useEffect(() => {}, [loadingTimeslots])
  useEffect(() => {
    setNextDisabled(bookingData.timeslot === null)
  }, [availableTimeslots, bookingData])

  useEffect(() => {
    if (window.innerWidth < 720) {
      if (loadingTimeslots) return
      if (timeslotsRef) {
        const rect = timeslotsRef.current.getBoundingClientRect()
        const offset = -120
        window.scrollTo({
          top: window.scrollY + rect.top + offset,
          behavior: 'smooth'
        })
      }
    }
  }, [loadingTimeslots])

  const handleDateChange = async (date) => {
    setSelectedDate(dayjs(date))
  }

  const tileDisabled = (date) => {
    if (!availableDays.length) return true;
  
    const targetDate = dayjs(date).format('YYYY-MM-DD');
    
    return availableDays.some(item => 
      dayjs(item.Day).format('YYYY-MM-DD') === targetDate && 
      !item.IsAvailable
    );
  }

  const handleMonthChange = (date) => {
    setSelectedMonth(dayjs(date).month(), dayjs(date).year())
    // setSelectedDate(dayjs(activeStartDate))
  }

  const todTimeslots = tod.map((period) => {
    const periodAppointments = availableTimeslots.filter((slot) => {
      const slotHour = new Date(slot.Time).getHours()
      return slotHour >= period.startTime && slotHour < period.endTime
    })
    return { tod: period.title, timeslots: periodAppointments }
  })

  return (
    <div className={styles.wrap}>
      <BookingHeader
        heading='When would you like to visit us?'
        subheading='Choose date & time'
      />
      <div className={styles.selectors}>
      <div className={styles.calendarWrap}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            className='rounded border border-gray-300 bg-white shadow'
            // classes={calClasses}
            // showDaysOutsideCurrentMonth
            fixedWeekNumber={6}
            value={selectedDate}
            minDate={dayjs()}
            onChange={handleDateChange}
            onMonthChange={handleMonthChange}
            shouldDisableDate={tileDisabled}
            // disabled={showSkeleton}
            sx={styles.calendar}
          />
        </LocalizationProvider>
        {/* <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          className={styles.calendar}
          next2Label={null}
          prev2Label={null}
          minDate={
            new Date(
              new Date().toLocaleString('en-US', {
                timeZone: 'America/Chicago'
              })
            )
          }
          tileDisabled={tileDisabled}
          locale='en-US'
          onActiveStartDateChange={handleMonthChange}
          maxDetail='month'
          minDetail='month'
        /> */}
        {
          initialLoading && (
            <div className={styles.calendarLoader}>
              <DotLottiePlayer
                src='/lotties/pulsing-loader.lottie'
                autoplay
                loop
              />
            </div>
          )
        }
      </div>
        <div ref={timeslotsRef} id='timeslots' className={styles.times}>
          {!loadingTimeslots ? (
            todTimeslots.map((timeOfDay, i) => (
              <div key={i} className={styles.tod}>
                <p className={styles.todTitle}>{timeOfDay.tod}</p>
                <div className={styles.timeSlots}>
                  {timeOfDay.timeslots.length ? (
                    timeOfDay.timeslots.map((timeslot) => {
                      return (
                        <div
                          key={timeslot.Time}
                          className={`${styles.slotPill} ${timeslot.Time === bookingData.timeslot ? styles.active : ''}`}
                          onClick={() => setTimeslot(timeslot.Time)}
                        >
                          {formatTime(timeslot.Time)}
                        </div>
                      )
                    })
                  ) : (
                    <p className={styles.error}>No times available</p>
                  )}
                </div>
              </div>
            ))
          ) : (
            <DotLottiePlayer
              src='/lotties/pulsing-loader.lottie'
              autoplay
              loop
            />
          )}
        </div>
      </div>
      <NavButtons />
    </div>
  )
}

export default SelectTime
