import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useFaceAnimation = () => {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const pillsRef = useRef(null)
  const cardRef = useRef(null)
  const dotsRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const header = headerRef.current
    const pills = pillsRef.current
    const card = cardRef.current
    const dots = dotsRef.current

    if (!section || !header || !pills || !card || !dots) return

    const headerElements = gsap.utils.toArray(header.children[0].children)
    const pillElements = gsap.utils.toArray(pills.children[0].children)

    gsap.set(headerElements, { yPercent: 60, opacity: 0 })
    gsap.set(pillElements, { yPercent: 60, opacity: 0 })
    gsap.set(card, { yPercent: 10, opacity: 0 })
    gsap.set(dots, { yPercent: 40, opacity: 0 })

    gsap.to(headerElements, {
      yPercent: 0,
      opacity: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: header,
        start: 'top bottom-=200',
        end: 'bottom bottom-=200',
        scrub: true
      }
    })

    gsap.to(pillElements, {
      yPercent: 0,
      opacity: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: pills,
        start: 'top bottom-=80',
        end: 'bottom bottom-=80',
        scrub: true
      }
    })

    gsap.to(card, {
      yPercent: -10,
      opacity: 1,
      scrollTrigger: {
        trigger: section,
        start: 'top bottom-=200',
        end: 'bottom bottom-=200',
        scrub: true
      }
    })

    gsap.to(dots, {
      yPercent: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: section,
        start: 'top bottom-=200',
        end: 'top+=100 bottom-=200',
        scrub: true,
      }
    })
  }, [])

  return {
    sectionRef,
    headerRef,
    pillsRef,
    cardRef,
    dotsRef
  }
}
