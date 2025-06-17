import gsap from 'gsap'
import { CustomEase } from 'gsap/dist/CustomEase'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger, CustomEase)

export const usePostTreatmentGuideAnimation = () => {
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

        const tl = tlRefDesk.current

        if (cardsRef.current) {
          const cardPositions = [
            { x: -194, y: 80, rotation: -12 },
            { x: 0, y: 20, rotation: 0 },
            { x: 194, y: 80, rotation: 12 }
          ]

          cards.forEach((card, index) => {
            const { x, y, rotation } = cardPositions[index]
            gsap.set(card, {
              x,
              y,
              rotation
            })
          })

          gsap.set(cardsRef.current, {
            x: '10%',
            transformOrigin: 'center 400vh',
            rotation: 15
          })

          tl.to(cardsRef.current, {
            x: '-10%',
            rotation: -15,
            ease: CustomEase.create(
              'custom',
              'M0,0 C0,0.319 0.305,0.44 0.5,0.5 0.691,0.558 1,0.596 1,1'
            )
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
          x: 350
        })
        gsap.to(mobileCardsRef.current, {
          x: () =>
            `-=${mobileCardsRef.current.scrollWidth - window.innerWidth + 120}`,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            pin: true,
            scrub: 1,
            start: 'top+=110 top',
            end: 'bottom top',
            pinType: 'fixed'
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
