import { useBookingStore } from "@/zustand/useBookingStore"
import { useEffect, useState } from "react"


const CountdownWrapper = ({ children, countdown }) => {
  const [timeLeft, setTimeLeft] = useState(countdown)
  const resetFlow = useBookingStore((state) => state.resetFlow)

  useEffect(() => {
    if (timeLeft <= 0) {
      resetFlow()
      return
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft])

  return children
}

export default CountdownWrapper
