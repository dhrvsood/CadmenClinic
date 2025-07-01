import gsap from 'gsap'
import { CustomEase } from 'gsap/dist/CustomEase'
import { MotionPathPlugin } from 'gsap/dist/MotionPathPlugin'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger, CustomEase)

export const useOurBotoxProcessAnimation = () => {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const processNumberRef = useRef(null)
  const iconsRef = useRef(null)
  const circleRef = useRef(null)
  const circleBgRef = useRef(null)
  const ellipse1Ref = useRef(null)
  const ellipse2Ref = useRef(null)
  const ellipse3Ref = useRef(null)
  const tlRefDesk = useRef(null)
  const tlRefMobile = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const content = contentRef.current
    const icons = iconsRef.current
    const contentItems = gsap.utils.toArray(content.children[0].children)
    const iconsItems = gsap.utils.toArray(icons.children)
    const lastContentItem = contentItems.length - 1

    // Desktop animation
    if (window.innerWidth > 768) {
      if (!tlRefDesk.current) {
        tlRefDesk.current = gsap.timeline({
          id: 'ourBotoxProcessTimeline',
          scrollTrigger: {
            id: 'ourBotoxProcessTrigger',
            trigger: section,
            start: 'top-=20 top',
            end: `+=${contentItems.length * 1000}`,
            scrub: true,
            pin: section,
            onUpdate: (self) => {
              const progress = self.progress
              const segmentSize = 1 / contentItems.length
              const currentIndex = Math.min(
                lastContentItem,
                Math.floor(progress / segmentSize)
              )

              contentItems.forEach((card, index) => {
                gsap.to(card, {
                  autoAlpha: index === currentIndex ? 1 : 0,
                  duration: 0
                })
              })

              iconsItems.forEach((card, index) => {
                gsap.to(card, {
                  autoAlpha: index === currentIndex ? 1 : 0,
                  duration: 0
                })
              })

              if (processNumberRef.current) {
                processNumberRef.current.innerText = currentIndex + 1
              }

              gsap.to(circleRef.current, {
                background: `conic-gradient(#E4C08C ${progress * 360}deg, #9a7f71 0deg)`
              })

              gsap.to(ellipse2Ref.current, {
                background: currentIndex >= 1 ? '#E4C08C' : '#9a7f71'
              })

              gsap.to(ellipse3Ref.current, {
                background: currentIndex >= 2 ? '#E4C08C' : '#9a7f71'
              })
            }
          }
        })

        gsap.set(circleRef.current, {
          position: 'absolute',
          top: '-50',
          width: '385',
          height: '385',
          borderRadius: '50%',
          background: `conic-gradient(#9a7f71 50% 0deg, #9a7f71 50% 0deg)`,
          zIndex: 5
        })

        gsap.set(circleBgRef.current, {
          position: 'absolute',
          top: '-48',
          width: '381',
          height: '381',
          borderRadius: '50%',
          background: `#9a7f71`,
          zIndex: 10
        })

        gsap.set(ellipse1Ref.current, {
          position: 'absolute',
          top: '-7',
          width: '12',
          height: '12',
          borderRadius: '50%',
          background: `#E4C08C`,
          zIndex: 25
        })

        gsap.set(ellipse2Ref.current, {
          position: 'absolute',
          bottom: '89',
          right: '18',
          width: '12',
          height: '12',
          borderRadius: '50%',
          background: `#9a7f71`,
          zIndex: 15
        })

        gsap.set(ellipse3Ref.current, {
          position: 'absolute',
          bottom: '89',
          left: '18',
          width: '12',
          height: '12',
          borderRadius: '50%',
          background: `#9a7f71`,
          zIndex: 15
        })

        gsap.set(contentItems, {
          autoAlpha: 0,
          position: 'absolute',
          zIndex: 15
        })

        gsap.set(contentItems[0], { autoAlpha: 1 })

        gsap.set(iconsItems, {
          autoAlpha: 0,
          position: 'absolute',
          zIndex: 15
        })

        gsap.set(iconsItems[0], { autoAlpha: 1 })
      }
    }

    // Mobile animation
    if (window.innerWidth < 768) {
      if (!tlRefMobile.current) {
        tlRefMobile.current = gsap.timeline({
          id: 'ourBotoxProcessTimeline',
          scrollTrigger: {
            id: 'ourBotoxProcessTrigger',
            trigger: section,
            start: 'top-=50 top',
            end: `+=${contentItems.length * 1000}`,
            scrub: true,
            pin: section,
            onUpdate: (self) => {
              const progress = self.progress
              const segmentSize = 1 / contentItems.length
              const currentIndex = Math.min(
                lastContentItem,
                Math.floor(progress / segmentSize)
              )

              contentItems.forEach((card, index) => {
                gsap.to(card, {
                  autoAlpha: index === currentIndex ? 1 : 0,
                  duration: 0
                })
              })

              processNumberRef.current.innerText = currentIndex + 1

              gsap.to(circleRef.current, {
                background: `conic-gradient(#E4C08C ${progress * 360}deg, #9a7f71 0deg)`
              })

              gsap.to(ellipse2Ref.current, {
                background: currentIndex >= 1 ? '#E4C08C' : '#9a7f71'
              })

              gsap.to(ellipse3Ref.current, {
                background: currentIndex >= 2 ? '#E4C08C' : '#9a7f71'
              })
            }
          }
        })

        gsap.set(circleRef.current, {
          position: 'absolute',
          top: '36',
          width: '156',
          height: '156',
          borderRadius: '50%',
          background: `conic-gradient(#9a7f71 50% 0deg, #9a7f71 50% 0deg)`,
          zIndex: 5
        })

        gsap.set(circleBgRef.current, {
          position: 'absolute',
          top: '38',
          width: '152',
          height: '152',
          borderRadius: '50%',
          background: `#9a7f71`,
          zIndex: 10
        })

        gsap.set(ellipse1Ref.current, {
          position: 'absolute',
          top: '-5',
          width: '8',
          height: '8',
          borderRadius: '50%',
          background: `#E4C08C`,
          zIndex: 15
        })

        gsap.set(ellipse2Ref.current, {
          position: 'absolute',
          top: '100',
          right: '0.5',
          width: '8',
          height: '8',
          borderRadius: '50%',
          background: `#9a7f71`,
          zIndex: 15
        })

        gsap.set(ellipse3Ref.current, {
          position: 'absolute',
          top: '100',
          left: '0',
          width: '8',
          height: '8',
          borderRadius: '50%',
          background: `#9a7f71`,
          zIndex: 15
        })

        gsap.set(contentItems, {
          autoAlpha: 0,
          position: 'absolute',
          zIndex: 15
        })

        gsap.set(contentItems[0], { autoAlpha: 1 })
      }
    }
  }, [])

  return {
    sectionRef,
    contentRef,
    processNumberRef,
    iconsRef,
    circleRef,
    circleBgRef,
    ellipse1Ref,
    ellipse2Ref,
    ellipse3Ref
  }
}
