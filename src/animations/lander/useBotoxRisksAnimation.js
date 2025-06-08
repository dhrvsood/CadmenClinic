import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

export const useBotoxRisksAnimation = () => {
  const sectionRef = useRef(null)
  const contentRefs = useRef(null)
  const imagesRefs = useRef(null)
  const progressBarRef = useRef(null)
  const numberProgressRef = useRef(null)
  const progressBarMobileRef = useRef(null)
  const numberProgressMobileRef = useRef(null)

  const tlRefDesktop = useRef(null)

  useEffect(() => {
    // Desktop animation
    if (window.innerWidth > 1024) {
      const contents = contentRefs.current
      const contentItems = gsap.utils.toArray(contents.children[0].children)
      const lastContentItem = contentItems.length - 1

      if (!tlRefDesktop.current) {
        const section = sectionRef.current

        tlRefDesktop.current = gsap.timeline({
          paused: true,
          scrollTrigger: {
            id: 'mainScrollTrigger',
            trigger: section,
            start: 'top-=40 top',
            end: '+=4000',
            scrub: true,
            pin: section,
            immediateRender: false,
            onUpdate: (self) => {
              const progress = self.progress

              const currentIndex = Math.round(
                progress * (contentItems.length - 1)
              )
              const progressPercentage =
                ((currentIndex + 1) / contentItems.length) * 100
              const currentCardNumber = currentIndex + 1
              if (numberProgressRef.current) {
                numberProgressRef.current.innerText = currentCardNumber
              }
              gsap.to(progressBarRef.current, {
                height: `${progressPercentage}%`,
                duration: 0.3,
                ease: 'power1.out'
              })
            }
          }
        })

        const tlDesktop = tlRefDesktop.current

        if ((contentRefs.current, imagesRefs.current)) {
          const images = imagesRefs.current
          const imageItems = gsap.utils.toArray(images.children)

          gsap.set(contentItems, { autoAlpha: 0, position: 'absolute' })
          gsap.set(contentItems[0], { autoAlpha: 1, position: 'relative' })
          gsap.set(imageItems, { autoAlpha: 0, position: 'absolute' })
          gsap.set(imageItems[0], { autoAlpha: 1, position: 'relative' })

          contentItems.forEach((content, index) => {
            if (index === lastContentItem) {
              tlDesktop.to(content, { autoAlpha: 1 }, index)
            } else {
              tlDesktop
                .to(content, { autoAlpha: 1 }, index)
                .to(content, { autoAlpha: 0 }, index + 1)
            }
          })

          imageItems.forEach((image, index) => {
            if (index === lastContentItem) {
              tlDesktop.to(image, { autoAlpha: 1 }, index)
            } else {
              tlDesktop
                .to(image, { autoAlpha: 1 }, index)
                .to(image, { autoAlpha: 0 }, index + 1)
            }
          })
        }
      }
    }
  }, [])

  return {
    sectionRef,
    contentRefs,
    imagesRefs,
    progressBarRef,
    numberProgressRef,
    progressBarMobileRef,
    numberProgressMobileRef
  }
}
