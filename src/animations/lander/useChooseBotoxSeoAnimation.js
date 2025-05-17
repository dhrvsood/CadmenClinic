import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

export const useChooseBotoxSeoAnimation = () => {
  const sectionRef = useRef(null)
  const contentRefs = useRef(null)
  const imageRefs = useRef(null)

  const tlRefDesktop = useRef(null)

  useEffect(() => {
    // Desktop animation
    if (window.innerWidth > 1025) {
      if (!tlRefDesktop.current) {
        const section = sectionRef.current

        tlRefDesktop.current = gsap.timeline({
          paused: true,
          scrollTrigger: {
            id: 'ChooseBotoxTrigger',
            trigger: section,
            start: 'top-=70 top',
            end: '+=5000',
            scrub: true,
            pin: true,
            immediateRender: false
          }
        })

        const tlDesktop = tlRefDesktop.current

        if ((contentRefs.current, imageRefs.current)) {
          const contents = contentRefs.current
          const images = imageRefs.current

          const contentItems = gsap.utils.toArray(contents.children[0].children)
          const imageItems = gsap.utils.toArray(images.children)

          gsap.set(contentItems, { autoAlpha: 0, position: 'absolute' })
          gsap.set(contentItems[0], { autoAlpha: 1, position: 'relative' })
          gsap.set(imageItems, { autoAlpha: 0, position: 'absolute' })
          gsap.set(imageItems[0], { autoAlpha: 1, position: 'relative' })

          contentItems.forEach((content, index) => {
            tlDesktop.to(content, { autoAlpha: 1 }, index)

            if (index < contentItems.length - 1) {
              tlDesktop.to(content, { autoAlpha: 0, duration: 0 }, index + 1)
            }
          })

          imageItems.forEach((image, index) => {
            tlDesktop.to(image, { autoAlpha: 1 }, index)

            if (index < imageItems.length - 1) {
              tlDesktop.to(image, { autoAlpha: 0, duration: 0 }, index + 1)
            }
          })
        }
      }
    }
  }, [])

  return {
    sectionRef,
    contentRefs,
    imageRefs
  }
}
