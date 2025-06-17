import { icon } from '@fortawesome/fontawesome-svg-core'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { use, useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

export const useChooseBotoxAnimation = () => {
  const sectionRef = useRef(null)
  const dotRef = useRef(null)
  const contentRefs = useRef(null)
  const imageRefs = useRef(null)
  const headerRef = useRef(null)
  const barRef = useRef(null)
  const navRef = useRef(null)

  const tlRefDesktop = useRef(null)
  const tlRefMobile = useRef(null)
  const iconTlRef = useRef(null)

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
        // duration: 0.5,
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

    if (window.innerWidth > 835) {
      if (!tlRefDesktop.current) {
        const section = sectionRef.current

        tlRefDesktop.current = gsap.timeline({
          paused: true,
          scrollTrigger: {
            id: 'mainScrollTrigger',
            trigger: section,
            start: 'bottom bottom',
            end: '+=3000',
            scrub: true,
            pin: true,
            // anticipatePin: 1,
            // pinSpacing: false,
            immediateRender: false
          }
        })

        const tlDesktop = tlRefDesktop.current

        if (
          (dotRef.current,
          contentRefs.current,
          imageRefs.current,
          navRef.current)
        ) {
          const contents = contentRefs.current
          const images = imageRefs.current
          const nav = navRef.current

          const contentItems = gsap.utils.toArray(contents.children)
          const imageItems = gsap.utils.toArray(images.children)
          const navButtons = gsap.utils.toArray(
            nav.querySelectorAll('.selector-nav')
          )

          const imageElements = imageItems.map(
            (imageWrap) => imageWrap.children[0]
          )

          gsap.set(contentItems, { autoAlpha: 0, position: 'absolute' })
          gsap.set(contentItems[0], { autoAlpha: 0, position: 'relative' })
          gsap.set(imageItems, { autoAlpha: 0, position: 'absolute' })
          gsap.set(imageItems[0], { autoAlpha: 0, position: 'relative' })
          gsap.set(imageElements, { yPercent: 10 })

          const totalDuration = contentItems.length

          contentItems.forEach((content, index) => {
            tlDesktop
              .to(content, { autoAlpha: 1 }, index)
              .to(content, { autoAlpha: 0 }, index + 1)
              .addLabel(`slide${index}`)
          })

          imageItems.forEach((image, index) => {
            tlDesktop
              .to(image, { autoAlpha: 1 }, index)
              .to(image, { autoAlpha: 0 }, index + 1)
          })

          imageElements.forEach((image, index) => {
            tlDesktop
              .to(image, { yPercent: 0 }, index)
              .to(image, { yPercent: 10 }, index + 1)
          })

          navButtons.forEach((button) => {
            button.addEventListener('click', () => {
              const slideIndex = parseInt(button.getAttribute('data-slide'))
              const totalSlides = contentItems.length

              // Adjust progress calculation
              let progress
              if (slideIndex === 0) {
                progress = 0.1 // Slightly after the start for the first slide
              } else if (slideIndex === totalSlides - 1) {
                progress = 0.8 // Slightly before the end for the last slide
              } else {
                progress = (slideIndex) / (totalSlides - 1)
              }

              const st = ScrollTrigger.getById('mainScrollTrigger')

              if (st) {
                st.scroll(st.start + (st.end - st.start) * progress)
              }
            })
          })
        }
      }
    }

    // Mobile animation

    if (window.innerWidth <= 835) {
      if (!tlRefMobile.current || !iconTlRef.current) {
        const section = sectionRef.current

        tlRefMobile.current = gsap.timeline({
          paused: true,
          scrollTrigger: {
            trigger: section,
            start: 'top+=140 top',
            end: '+=1000',
            scrub: true,
            pin: true
          }
        })

        iconTlRef.current = gsap.timeline()

        const tlMobile = tlRefMobile.current
        const iconTl = iconTlRef.current

        if (
          (dotRef.current,
          contentRefs.current,
          imageRefs.current,
          barRef.current)
        ) {
          const dot = dotRef.current
          const bar = barRef.current
          const contents = contentRefs.current
          const images = imageRefs.current

          const contentItems = gsap.utils.toArray(contents.children)
          const imageItems = gsap.utils.toArray(images.children)
          const icons = gsap.utils.toArray(dot.querySelectorAll('.dot-icon'))

          gsap.set(contentItems, { autoAlpha: 0, position: 'absolute' })
          gsap.set(contentItems[0], { autoAlpha: 1, position: 'relative' })
          gsap.set(imageItems, {
            autoAlpha: 0,
            position: 'absolute',
            right: 0,
            left: 0
          })
          gsap.set(imageItems[0], { autoAlpha: 1, position: 'relative' })
          gsap.set(icons, { autoAlpha: 0, position: 'absolute' })
          gsap.set(icons[0], { autoAlpha: 1 })

          const totalDuration = contentItems.length

          icons.forEach((icon, index) => {
            if (index > 0) {
              // Skip the first icon as it's already visible
              iconTl
                .to(
                  icons[index - 1],
                  { autoAlpha: 0, duration: 0.1 },
                  index * (totalDuration / 3)
                )
                .to(
                  icon,
                  { autoAlpha: 1, duration: 0.1 },
                  index * (totalDuration / 3)
                )
            }
          })

          tlMobile.to(dot, {
            x: bar.offsetWidth - dot.offsetWidth,
            ease: 'none',
            duration: totalDuration
          })

          contentItems.forEach((content, index) => {
            tlMobile
              .to(content, { autoAlpha: 1 }, index)
              .to(content, { autoAlpha: 0 }, index + 1)
          })

          imageItems.forEach((image, index) => {
            tlMobile
              .to(image, { autoAlpha: 1 }, index)
              .to(image, { autoAlpha: 0 }, index + 1)
          })

          icons.forEach((icon, index) => {
            if (index > 0) {
              // Skip the first icon as it's already visible
              iconTl
                .to(
                  icons[index - 1],
                  { autoAlpha: 0, duration: 0.1 },
                  index * (totalDuration / 3)
                )
                .to(
                  icon,
                  { autoAlpha: 1, duration: 0.1 },
                  index * (totalDuration / 3)
                )
            }
          })

          tlMobile.add(iconTl, 0)
        }
      }
    }
  }, [])

  return {
    sectionRef,
    dotRef,
    barRef,
    contentRefs,
    imageRefs,
    headerRef,
    navRef
  }
}
