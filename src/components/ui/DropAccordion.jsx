import Image from "next/image"
import gsap from "gsap"
import { useEffect, useRef, useState } from "react"

export default function DropAccordion({question, answer}) {
  const [isOpen, setIsOpen] = useState(false)
  const accordionDrop = useRef(null)
  const icon = useRef(null)

  const tl = useRef(gsap.timeline({ paused: true, 
    defaults: {
      ease: "power2.inOut"
    }
  }))

  useEffect(() => {
    if(accordionDrop && icon) {
      tl.current.to(accordionDrop.current, {
        height: 'auto',
        duration: 0.3
      }).to(icon.current, { rotation: 45, duration: 0.3 }, 0)
    }
  }, [accordionDrop, icon])

  const handleClick = (e) => {
    if (accordionDrop && icon) {
      if (!isOpen) {
        console.log('Opening');
        tl.current.play();
      } else {
        console.log('Closing');
        tl.current.reverse();
      }
      setIsOpen(!isOpen);
    }
  }

  return (
    <div role='listitem' class='w-dyn-item' onClick={handleClick}>
      <div class='accordion-drop'>
        <div class='accordion-drop_top'>
          <h4 class='body-lg'>{question}</h4>
          <img
            src='https://cdn.prod.website-files.com/66c8a77d44f940b4e409bdc7/66cf37b26ac0b6038a7f3d66_circle-plus.svg'
            loading='lazy'
            alt=''
            class='accordion-drop_icon'
            ref={icon}
          />
        </div>
        <div class='accordion-drop_drop' ref={accordionDrop}>
          <p class='accordion-drop_body'>{answer}</p>
        </div>
      </div>
    </div>
  )
}
