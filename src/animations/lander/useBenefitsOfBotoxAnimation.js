import gsap from 'gsap'
import { CustomEase } from 'gsap/dist/CustomEase'
import { MotionPathPlugin } from 'gsap/dist/MotionPathPlugin'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger, CustomEase)

export const useBenefitsOfBotoxAnimation = () => {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const cardsRef = useRef(null)
  const mobileCardsRef = useRef(null)
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
          id: 'benefitsOfBotoxTrigger',
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
        const cards = gsap.utils.toArray(cardsRef.current.children[0].children)
        const benefitsSection = sectionRef.current

        const totalWidth = cards.reduce(
          (width, card) => width + card.offsetWidth,
          0
        )

        tlRefDesk.current = gsap.timeline({
          paused: true,
          id: 'benefitsOfBotoxTimeline',
          scrollTrigger: {
            id: 'benefitsOfBotoxTrigger',
            trigger: benefitsSection,
            start: 'top-=80 top',
            end: () => `-=${totalWidth - window.innerWidth - 1000}`,
            scrub: 1,
            pin: benefitsSection,
            anticipatePin: 1
          }
        })

        const tl = tlRefDesk.current

        if (cardsRef.current) {
          const cardPositions = [
            { x: 0, y: -110, rotation: 11 },
            { x: 0, y: -10, rotation: 4 },
            { x: 0, y: -10, rotation: -5 },
            { x: 0, y: -110, rotation: -12 }
          ]

          cards.forEach((card, index) => {
            const { x, y, rotation } = cardPositions[index]
            gsap.set(card, {
              x,
              y,
              rotation: rotation
            })
          })

          gsap.set(cardsRef.current, {
            transformOrigin: 'center -600vh',
            rotation: -15
          })

          tl.to(cardsRef.current, {
            rotation: 15
          })
        }
      }
    }

    // Mobile animation
    if (window.innerWidth <= 768) {
      if (!tlRefMobile.current) {
        const section = sectionRef.current

        if (!mobileCardsRef.current) return

        gsap.set(mobileCardsRef.current, {
          x: 16
        })

        gsap.to(mobileCardsRef.current, {
          x: () =>
            `-=${mobileCardsRef.current.scrollWidth - window.innerWidth + 50}`,
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
    cardsRef,
    mobileCardsRef
  }
}
