
import { useNotificationStore } from "@/zustand/useNotificationStore"
import { useEffect, useState } from "react"
import styles from './Notification.module.css'

const COLORS = {
  error: '#f44336',
  normal: '#969696ff'
}

const Notification = ({id, message, type}) => {
  const [progress, setProgress] = useState(100)
  const [isFading, setIsFading] = useState(false)
  const { removeToast } = useNotificationStore()

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress <= 0) {
          clearInterval(interval)
          setIsFading(true)
          setTimeout(() => {
            removeToast(id)
            // if (type === 'error') {
            //   window.location.reload() // reload automatically if toast is an error  
            // }
          }, 1000)
          return 0
        }
        return prevProgress - 2
      })
    }, 100)

    return () => clearInterval(interval)
  }, [id, removeToast])

  return (
    <div className={styles.wrap} onClick={() => removeToast(id)} style={{ background: COLORS[type]}}>
      <div className={styles.content}>
        <span>{message}</span>
      </div>
      <div className={styles.progressBar} style={{ width: `${progress}%` }} />
    </div>
  )
}

export default Notification
