import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useLanderHeroAnimation = () => {
  const heroImgRef = useRef(null)
  const heroRef = useRef(null)

  useEffect(() => {
    if (heroImgRef.current, heroRef.current) {
      gsap.to(heroImgRef.current,
        // {
        //   y: '-50px'
        // },
        {
          yPercent: 20,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          }
        }
      )
  
      gsap.to(heroRef.current,
        // {
        //   y: '-50px'
        // },
        {
          yPercent: -10,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          }
        }
      )
    }
  }, [])

  return {
    heroImgRef,
    heroRef
  }
}
