import { useCallback, useEffect, useState } from 'react'

const useCountdownTimer = (initialSeconds, onComplete, shouldRun) => {
  const [seconds, setSeconds] = useState(initialSeconds)

  useEffect(() => {
    if (shouldRun && seconds > 0) {
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1)
      }, 1000)

      return () => clearInterval(interval)
    } else if (shouldRun && seconds === 0) {
      if (onComplete) {
        onComplete()
      }
    }
  }, [seconds, onComplete, shouldRun])

  useEffect(() => {
    if (!shouldRun) {
      setSeconds(initialSeconds)
    }
  }, [shouldRun, initialSeconds])

  const resetTimer = useCallback(
    () => setSeconds(initialSeconds),
    [initialSeconds]
  )

  const formatTimer = useCallback(() => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`
  }, [seconds])

  return { seconds, formatTimer, resetTimer }
}

export default useCountdownTimer
