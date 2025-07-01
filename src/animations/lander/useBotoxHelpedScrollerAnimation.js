import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

export const useBotoxHelpedScrollerAnimation = () => {
  const botoxHelpedSectionRef = useRef(null)
  const botoxHelpedScrollerRef = useRef(null)

  useEffect(() => {

    if (!botoxHelpedScrollerRef.current || !botoxHelpedSectionRef.current)
      return

    if(window.innerWidth <= 1200) {
      // let ctx = gsap.context(() => {
        gsap.to(botoxHelpedScrollerRef.current, {
          x: () => `-=${botoxHelpedScrollerRef.current.scrollWidth - window.innerWidth + 100}`,
          ease: 'none',
          scrollTrigger: {
            trigger: botoxHelpedSectionRef.current,
            pin: true,
            scrub: 1,
            start: 'top-=30 top',
            end: 'bottom top',
            pinType: 'fixed',
          }
        })
      // }, botoxHelpedSectionRef)
      
      // return () => ctx.revert()
    }
  }, [])

  return {
    botoxHelpedSectionRef,
    botoxHelpedScrollerRef
  }
}
