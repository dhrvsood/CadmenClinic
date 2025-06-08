import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'

import { fetchAvailability, fetchTimeSlots } from './appointment_utils'

const color = '#007478'

const DateCalendarValue = ({
  formikRef,
  guestId,
  timeSlots,
  setBookingResponse,
  setDate,
  setGuestId,
  setTimeSlots,
  showSkeleton,
  setShowSkeleton,
  setCalendarData
}) => {
  // Set initial date value
  const initialDate = dayjs().isBefore(dayjs('2023-10-17'))
    ? dayjs('2023-10-17')
    : dayjs()
  const [selectedDate, setSelectedDate] = useState(initialDate)
  const [current, setCurrent] = useState(initialDate)
  const [monthsLoaded, setMonthsLoaded] = useState([
    initialDate.format('MM-YYYY')
  ])
  const [first, setFirst] = useState(true)
  const [availability, setAvailability] = useState({})

  
  const [currentDate, setCurrentDate] = useState(new Date());
  const [datesInView, setDatesInView] = useState([]);
  const [sundaysInView, setSundaysInView] = useState([]);

  const loadCalendarData = () => {
    console.log("Enter load calendar data...");

  }

  const disableWeekends = (date) => {
    // const day = dayjs(date).day()
    return !availability || !availability[dayjs(date).format('YYYY-MM-DD')]
  }

  const fetchData = async (
    specificDate = selectedDate.format('MM-DD-YYYY')
  ) => {
    setShowSkeleton(true)
    await fetchTimeSlots(
      specificDate,
      formikRef.current,
      guestId,
      setBookingResponse,
      setGuestId,
      setTimeSlots
    )
    setShowSkeleton(false)
  }

  const fetchAvailabilityData = async (
    specificDate = selectedDate.format('MM-DD-YYYY'),
    isInitialMonth
  ) => {
    setShowSkeleton(true)
    await fetchAvailability(
      specificDate,
      formikRef.current,
      guestId,
      setBookingResponse,
      setGuestId,
      setTimeSlots,
      availability,
      setAvailability,
      setSelectedDate,
      isInitialMonth
    )
    setShowSkeleton(false)
  }

  const handleDateChange = async (newValue) => {
    const newFormattedDate = newValue.format('MM-DD-YYYY')
    setDate(newValue)
    setSelectedDate(newValue) // Also set the internal state
    await fetchData(newFormattedDate)

    if (newValue.format('MM-YYYY') != current.format('MM-YYYY')) {
      const month = newValue.startOf('month')
      const monthFormatted = month.format('MM-YYYY')
      if (!monthsLoaded.includes(monthFormatted)) {
        await fetchAvailabilityData(month.format('MM-DD-YYYY'), false)
        setMonthsLoaded([...monthsLoaded, monthFormatted])
        setCurrent(month)
      }
    }
  }
  useEffect(() => {
    if (first) {
      setFirst(false)
      fetchAvailabilityData(initialDate.format('MM-DD-YYYY'), true)
    }
  }, [])

  const handleMonthChange = async (month) => {
    const monthFormatted = month.format('MM-YYYY')
    if (!monthsLoaded.includes(monthFormatted)) {
      await fetchAvailabilityData(month.format('MM-DD-YYYY'), true)
      setMonthsLoaded([...monthsLoaded, monthFormatted])
      setCurrent(month)
    }
  }

  const calendarStyles = {
    '&& .Mui-selected': { color: 'white', background: color },
    button: { color },
    width: {
      xs: '100%', // On extra-small screens, use 100% width
      sm: '70%', // On small screens, use 80% width
      md: '70%', // On medium screens, use 60% width
      lg: '70%', // On large screens, use 40% width
      xl: '70%' // On extra-large screens, use 30% width
    }
  }

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          className='rounded border border-gray-300 bg-white shadow'
          showDaysOutsideCurrentMonth
          fixedWeekNumber={6}
          value={selectedDate}
          minDate={dayjs()}
          onChange={handleDateChange}
          onMonthChange={handleMonthChange}
          shouldDisableDate={disableWeekends}
          disabled={showSkeleton}
          sx={calendarStyles}
        />
      </LocalizationProvider>
      <style jsx>{`
        .MuiDateCalendar-root {
          width: 1000px;
        }
      `}</style>
    </div>
  )
}

export default DateCalendarValue
