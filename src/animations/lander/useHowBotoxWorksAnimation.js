import gsap from 'gsap'
import { CustomEase } from 'gsap/dist/CustomEase'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger, CustomEase)

export const useHowBotoxWorksAnimation = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef(null)
  const mobileCardsRef = useRef(null)
  const headerRef = useRef(null)

  const tlRefDesk = useRef(null)
  const tlRefMobile = useRef(null)

  useEffect(() => {

    // Header animation

    if(headerRef.current) {
      const headerElements = gsap.utils.toArray(headerRef.current.children[0].children)

      gsap.set(headerElements, { yPercent: 60, opacity: 0 })

      gsap.to(headerElements, {
        yPercent: 0,
        opacity: 1,
        stagger: 0.5,
        // duration: 0.5,
        ease: 'none',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top bottom-=300',
          end: 'bottom bottom-=300',
          scrub: true,
        }
      })
    }

    // Desktop animation

    if(window.innerWidth > 768) {
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
            start: 'bottom bottom',
            end: () => `-=${totalWidth - window.innerWidth - 1000}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1
          }
        })
  
        const tl = tlRefDesk.current
  
        if (cardsRef.current) {
          const cardPositions = [
            { y: 30, rotation: -5 },
            { y: 0, rotation: 0 },
            { y: 30, rotation: 5 }
          ]
  
          cards.forEach((card, index) => {
            const { x, y, rotation } = cardPositions[index]
            gsap.set(card, {
              x: x,
              y: y,
              rotation: rotation
            })
          })
  
          gsap.set(cardsRef.current, {
            //x: '50%',
            transformOrigin: 'center 1000vh', // Set rotation origin far below the container
            rotation: 15, // Start with a slight counter-clockwise rotation
          })
  
          tl.to(cardsRef.current, {
            //x: '-50%',
            rotation: -15, // End with a slight clockwise rotation
            ease: CustomEase.create(
              'custom',
              'M0,0 C0,0.319 0.305,0.44 0.5,0.5 0.691,0.558 1,0.596 1,1'
            )
          })
        }
      }
    }

    // Mobile animation

    if(window.innerWidth <= 768) {
      if (!tlRefMobile.current) {
        const section = sectionRef.current

        if(!mobileCardsRef.current) return

        gsap.to(mobileCardsRef.current, {
          x: () => `-=${(mobileCardsRef.current.scrollWidth - window.innerWidth) + 160}`,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            pin: true,
            scrub: 1,
            start: 'top-=60 top',
            end: 'bottom top',
            pinType: 'fixed',
          }
        })
      }
    }
  }, [])

  return {
    sectionRef,
    cardsRef,
    mobileCardsRef,
    headerRef
  }
}
