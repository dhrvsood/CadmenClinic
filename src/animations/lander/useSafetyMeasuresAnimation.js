import gsap from 'gsap'
import { CustomEase } from 'gsap/dist/CustomEase'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger, CustomEase)

export const useSafetyMeasuresAnimation = () => {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const contentRef = useRef(null)

  const tlRefDesk = useRef(null)
  const tlRefMobile = useRef(null)

  useEffect(() => {
    // Header animation
    if (headerRef.current) {
      const headerElements = gsap.utils.toArray(
        headerRef.current.children[0].children
      )
      gsap.set(headerElements, { yPercent: 60, opacity: 0 })
      gsap.to(headerElements, {
        yPercent: 0,
        opacity: 1,
        stagger: 0.5,
        ease: 'none',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top bottom-=300',
          end: 'bottom bottom-=300',
          scrub: true
        }
      })
    }

    // Desktop animation
    if (window.innerWidth > 768) {
      if (!tlRefDesk.current) {
        const cards = gsap.utils.toArray(
          contentRef.current.children[0].children
        )
        const totalWidth = cards.reduce(
          (width, card) => width + card.offsetWidth + 20,
          0
        )
        const section = sectionRef.current

        tlRefDesk.current = gsap.timeline({
          paused: true,
          scrollTrigger: {
            trigger: section,
            start: 'top-=10 top',
            end: () => `-=${totalWidth - window.innerWidth - 1000}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1
          }
        })

        gsap.set(contentRef.current, {
          x: '30px'
        })

        tlRefDesk.current.to(contentRef.current, {
          x: `-${totalWidth - window.innerWidth + 30}px`,
          ease: 'none'
        })
      }
    }

    // Mobile animation
    if (window.innerWidth <= 768) {
      if (!tlRefMobile.current) {
        const section = sectionRef.current

        if (!contentRef.current) return

        gsap.set(contentRef.current, {
          x: 20
        })

        gsap.to(contentRef.current, {
          x: () =>
            `-=${contentRef.current.scrollWidth - window.innerWidth + 80}`,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            pin: true,
            scrub: 1,
            start: 'top-=60 top',
            end: '+=1500'
          }
        })
      }
    }
  }, [])

  return {
    sectionRef,
    headerRef,
    contentRef
  }
}
