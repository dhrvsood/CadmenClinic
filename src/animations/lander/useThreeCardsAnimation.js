import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export const useThreeCardsAnimation = () => {
  const threeCardsSectionRef = useRef(null)
  const threeCardsRef = useRef(null)

  useEffect(() => {
    if(!threeCardsSectionRef.current || !threeCardsRef.current) return

    gsap.fromTo(threeCardsRef.current, {
      yPercent: 40,
    }, {
      yPercent: -20,
      scrollTrigger: {
        trigger: threeCardsSectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }   
    })
  }, [])

  return {
    threeCardsSectionRef,
    threeCardsRef
  }
}
