export const formatTime = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  })
}

export const presentableDateTime = (dateString) => {
  const dateObj = new Date(dateString)

  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  }

  const formatter = new Intl.DateTimeFormat('en-US', options)
  const formattedDate = formatter.format(dateObj)

  return formattedDate
}
