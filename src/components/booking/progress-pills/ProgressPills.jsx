import { useBookingStore } from '@/zustand/useBookingStore'

import styles from './ProgressPills.module.css'

const steps = ['01. Service', '02. Information', '03. Date & Time']

const ProgressPills = () => {
  const { currentStep } = useBookingStore()

  return (
    <div className={styles.wrap}>
      {steps.map((step, index) => (
        <>
          <div
            key={index}
            className={`${styles.pill} ${index === currentStep - 1 ? styles.current : index < currentStep ? styles.complete : ''}`}
          >
            {step}
          </div>
          {index < steps.length - 1 && <div className={styles.line}></div>}
        </>
      ))}
    </div>
  )
}

export default ProgressPills
