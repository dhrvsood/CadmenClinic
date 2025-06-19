import dayjs from 'dayjs'

export const getSundaysInCalendarView = (year, month) => {
  let sundays = []

  // Start from the first day of the given month
  let date = dayjs(new Date(year, month))

  // Adjust to the Sunday before the first day of the month if necessary
  if (date.day() !== 0) {
    date = date.subtract(date.day(), 'day')
    sundays.push(date.toDate())
  }

  // Reset to the first day of the given month
  date = dayjs(new Date(year, month, 1))

  // Get all Sundays in the month
  while (date.month() === month) {
    if (date.day() === 0) {
      sundays.push(date.toDate())
    }
    date = date.add(1, 'day')
  }

  return sundays
}



// import dayjs from "dayjs"

// export const getSundaysInCalendarView = (date) => {
//   const firstSunday = getFirstSunday(dayjs(date, 'MM-DD-YYYY'))
//   const firstSundayOfMonth = getFirstSunday(
//     dayjs(date, 'MM-DD-YYYY').startOf('month')
//   )
//   const millisecondsPerWeek = 1000 * 60 * 60 * 24 * 7
//   const diffInMilliseconds = Math.abs(firstSunday.diff(firstSundayOfMonth))
//   const sundays = Array.from(
//     { length: 6 - Math.ceil(diffInMilliseconds / millisecondsPerWeek) },
//     (_, index) => {
//       const nextSunday = firstSunday.add(7 * index, 'day')
//       return nextSunday
//     }
//   )

//   return sundays
// }

// const getFirstSunday = (date) => {
//   const sundayDate = date
//   const dayOfWeek = sundayDate.day()
//   const daysToAdd = dayOfWeek === 0 ? 0 : -dayOfWeek
//   const firstSunday = sundayDate.add(daysToAdd, 'day').startOf('day')
//   return firstSunday
// }


// export const getSundaysInCalendarView = (year, month) => {
//   let sundays = []
//   let date = new Date(year, month)

//   if (date.getDay() !== 0) {
//     date.setDate(date.getDate() - date.getDay())
//     sundays.push(new Date(date))
//   }

//   date = new Date(year, month, 1)

//   // Get all Sundays in the month
//   while (date.getMonth() === month) {
//     if (date.getDay() === 0) {
//       sundays.push(new Date(date))
//     }
//     date.setDate(date.getDate() + 1)
//   }

//   return sundays
// }
