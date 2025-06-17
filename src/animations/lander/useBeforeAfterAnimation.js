import gsap from 'gsap'
import { useEffect, useRef } from 'react'

export const useBeforeAfterAnimation = () => {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const header = headerRef.current

    if (!section || !header) return

    gsap.set(header, { yPercent: 60, opacity: 0})

    gsap.to(header, {
      yPercent: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: header,
        start: 'top bottom-=200',
        end: 'bottom bottom-=200',
        scrub: true,
      }
    })
  }, [])

  return { sectionRef, headerRef }
}
