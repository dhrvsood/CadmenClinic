import { useBookingStore } from '@/zustand/useBookingStore'
import React, { useEffect, useState } from 'react'

import styles from './CountdownTimer.module.css'
import sharedStyles from '../BookingFlowShared.module.css'

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(5 * 60)
  const resetFlow = useBookingStore((state) => state.resetFlow)

  useEffect(() => {
    if (timeLeft <= 0) {
      timesUp()
      return
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft])

  const timesUp = () => {
    resetFlow()
  }

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  return (
    <div className={styles.wrap}>
      <p className={sharedStyles.p + styles.countdownText}>
        We will hold your spot for{' '}
        <span className={styles.time}>{formatTime(timeLeft)}</span>
      </p>
    </div>
  )
}

export default CountdownTimer
