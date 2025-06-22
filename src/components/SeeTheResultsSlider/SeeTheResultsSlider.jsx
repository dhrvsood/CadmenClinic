import Image from 'next/image'
import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

import Button from '../Button'
import styles from './SeeTheResultsSlider.module.css'
import Link from 'next/link'

const data = [
  {
    title: 'Hair Restoration',
    description:
      'Non-surgical, 100% natural, science-backed hair restoration services for men and women. Proven results, minimal downtime, and trusted by over 2,100 patients since 2019.',
    icon: '/seeTheResultsSlider/hair/hair-gray.svg',
    activeIcon: '/seeTheResultsSlider/hair/hair-white.svg',
    showCta: true,
    items: [
      {
        frontCard: {
          title: 'PRP Hair Restoration',
          description:
            "Promote new hair growth and achieve thicker, fuller hair using your body's own plasma.",
          image: '/seeTheResultsSlider/hair/prp-1a.jpeg',
          link: '/services/hair-restoration/prp'
        },
        backCard: {
          title: 'PRP Hair Restoration',
          description:
            "Promote new hair growth and achieve thicker, fuller hair using your body's own plasma.",
          image: '/seeTheResultsSlider/hair/prp-1b.jpeg',
          link: '/services/hair-restoration/prp'
        },
      },
      {
        frontCard: {
          title: 'Exosomes Hair Therapy',
          description:
            'Block DHT levels and boost hair regeneration with the combined power of microneedling and exosomes.',
          image: '/seeTheResultsSlider/hair/exo-1a.jpeg',
          link: '/services/hair-restoration/exosomes'
        },
        backCard: {
          title: 'Exosomes Hair Therapy',
          description:
            'Block DHT levels and boost hair regeneration with the combined power of microneedling and exosomes.',
          image: '/seeTheResultsSlider/hair/exo-1b.jpeg',
          link: '/services/hair-restoration/exosomes'
        }
      },
      {
        frontCard: {
          title: 'Mesotherapy Vitamins',
          description:
            'Complex blend of amino acids, minerals, vitamins, and co-enzymes to stimulate hair follicle growth.',
          image: '/seeTheResultsSlider/hair/meso-1a.jpeg',
          link: '/services/hair-restoration/mesotherapy'
        },
        backCard: {
          title: 'Mesotherapy Vitamins',
          description:
            'Complex blend of amino acids, minerals, vitamins, and co-enzymes to stimulate hair follicle growth.',
          image: '/seeTheResultsSlider/hair/meso-1b.jpeg',
          link: '/services/hair-restoration/mesotherapy'
        },
      }
    ]
  },
  {
    title: 'Skin Treatments',
    description:
      'Smooth wrinkles, restore volume, and rejuvenate your skin with our expert injectable treatments.',
    icon: '/seeTheResultsSlider/injectables/injection-gray.svg',
    activeIcon: '/seeTheResultsSlider/injectables/injection-white.svg',
    showCta: true,
    items: [
      {
        frontCard: {
          title: 'Botox® Wrinkle Relaxer Treatment',
          description:
            'Reduces wrinkles and fine lines for a smoother, younger-looking appearance.',
          image: '/seeTheResultsSlider/injectables/injectables-1a.avif',
          link: '/services/botox'
        },
        backCard: {
          title: 'Botox® Wrinkle Relaxer Treatment',
          description:
            'Reduces wrinkles and fine lines for a smoother, younger-looking appearance.',
          image: '/seeTheResultsSlider/injectables/injectables-1b.avif',
          link: '/services/botox'
        }
      },
      {
        frontCard: {
          title: 'Lip Fillers and Augmentation',
          description:
            'Achieve beautifully defined, balanced lips with personalized care.',
          image: '/seeTheResultsSlider/injectables/injectables-6a.avif',
          link: 'https://www.imagelabmedspa.com/services/lip-fillers'
        },
        backCard: {
          title: 'Lip Fillers and Augmentation',
          description:
            'Achieve beautifully defined, balanced lips with personalized care.',
          image: '/seeTheResultsSlider/injectables/injectables-6b.avif',
          link: 'https://www.imagelabmedspa.com/services/lip-fillers'
        }
      },
      {
        frontCard: {
          title: 'Dermal Fillers',
          description:
            'Enhances facial contours and adds natural volume to cheeks, lips, and more.',
          image: '/seeTheResultsSlider/injectables/injectables-2a.avif',
          link: '/services/dermal-fillers'
        },
        backCard: {
          title: 'Dermal Fillers',
          description:
            'Enhances facial contours and adds natural volume to cheeks, lips, and more.',
          image: '/seeTheResultsSlider/injectables/injectables-2b.avif',
          link: '/services/dermal-fillers'
        }
      },
      {
        frontCard: {
          title: 'SCULPTRA®',
          description:
            'Stimulates collagen production for long-lasting, natural results.',
          image: '/seeTheResultsSlider/injectables/injectables-3a.avif',
          link: 'https://www.imagelabmedspa.com/services/sculptra-radiesse-filler'
        },
        backCard: {
          title: 'SCULPTRA®',
          description:
            'Stimulates collagen production for long-lasting, natural results.',
          image: '/seeTheResultsSlider/injectables/injectables-3b.avif',
          link: 'https://www.imagelabmedspa.com/services/sculptra-radiesse-filler'
        }
      },
      {
        frontCard: {
          title: 'Microneedling Facial',
          description: 'Stimulates collagen for firmer, younger-looking skin.',
          image: '/seeTheResultsSlider/skinTreatments/skin-3a.avif',
          link: 'https://www.imagelabmedspa.com/services/microneedling'
        },
        backCard: {
          title: 'Microneedling Facial',
          description: 'Stimulates collagen for firmer, younger-looking skin.',
          image: '/seeTheResultsSlider/skinTreatments/skin-3b.avif',
          link: 'https://www.imagelabmedspa.com/services/microneedling'
        }
      },
      {
        frontCard: {
          title: 'PRP (Vampire) Facial',
          description:
            'Combines PRP therapy with microneedling for ultimate skin rejuvenation.',
          image: '/seeTheResultsSlider/skinTreatments/skin-4a.avif',
          link: 'https://www.imagelabmedspa.com/services/blood-facial-prp-microneedling'
        },
        backCard: {
          title: 'PRP (Vampire) Facial',
          description:
            'Combines PRP therapy with microneedling for ultimate skin rejuvenation.',
          image: '/seeTheResultsSlider/skinTreatments/skin-4b.avif',
          link: 'https://www.imagelabmedspa.com/services/blood-facial-prp-microneedling'
        }
      }
    ]
  },
  {
    title: 'Wellness',
    description:
      'Restore vitality and confidence with treatments that address overall wellness and weight loss.',
    icon: '/seeTheResultsSlider/skinTreatments/stars-gray.svg',
    activeIcon: '/seeTheResultsSlider/skinTreatments/stars-white.svg',
    showCta: true,
    items: [
      {
        frontCard: {
          title: 'Färsk IV Drip Therapy',
          description:
            'Select from a range of IV drips targeting revitalizing energy levels, providing a youthful glow, promoting cellular regeneration, and combatting anti-aging.',
          image: '/seeTheResultsSlider/skinTreatments/skin-1a.avif',
          link: 'https://www.imagelabmedspa.com/services/diamondglow-facial'
        }
      },
      {
        frontCard: {
          title: 'Semaglutide Therapy',
          description:
            'In-person, medically-supervised Semaglutide injections for safe and effective weight loss. The same active ingredient in Wegovy® and Ozempic®.',
          image: '/seeTheResultsSlider/skinTreatments/skin-3a.avif',
          link: 'https://www.imagelabmedspa.com/services/microneedling'
        }
      }
    ]
  }
]

const SeeTheResultsSlider = ({ settings, handleButtonClick }) => {
  let sliderRef = React.useRef(null)
  const [activeTab, setActiveTab] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [flippedCards, setFlippedCards] = useState([])
  const slidesToShow = settings?.slidesToShow
  const totalPages = Math.ceil(data[activeTab].items.length / slidesToShow)

  const handleTabClick = (index) => {
    setActiveTab(index)
    sliderRef.slickGoTo(0)
  }

  const next = () => {
    sliderRef.slickNext()
  }

  const previous = () => {
    sliderRef.slickPrev()
  }

  const goToPage = (pageIndex) => {
    sliderRef.slickGoTo(pageIndex * slidesToShow)
  }

  const handleBeforeChange = (_, newIndex) => {
    setCurrentSlide(Math.ceil(newIndex / slidesToShow))
  }

  const handleCardFlip = (index) => {
    setFlippedCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  return (
    <div className={styles.section}>
      <div className={styles.tabs}>
        {data.map((tab, i) => (
          <div
            key={i}
            className={`${i === activeTab ? styles.active : styles.notActive}`}
            onClick={() => handleTabClick(i)}
          >
            <div
              className={`${styles.tabContent} ${i === activeTab ? styles.tabContentActive : ''}`}
            >
              <img
                src={i === activeTab ? tab.activeIcon : tab.icon}
                alt='tab icon'
              />
              {tab.title}
            </div>
          </div>
        ))}
      </div>
      <div
        className={styles.wrapper}
        style={{
          width: currentSlide === totalPages - 1 ? '100%' : '2000px'
        }}
      >
        <div className={styles.leftBlock}>
          <div>
            <p className={styles.title}>{data[activeTab].title}</p>
            <p className={styles.description}>{data[activeTab].description}</p>
            {
              data[activeTab].showCta && (
                <Link href='https://cadmenclinic.ca.zenoti.com/webstoreNew/services'>
                  <button className='button max-sm:w-full mt-10'>Book Consultation</button>
                </Link>
              )
            }
          </div>
          <div className={styles.bottom}>
            {data[activeTab].items.length > settings.slidesToShow && (
              <div className={styles.navigation}>
                <div className={styles.nav}>
                  <div
                    className={`${styles.prev} ${!currentSlide ? styles.disabled : ''}`}
                    onClick={previous}
                  >
                    <Image
                      src={`/arrows/prev-arrow-white.svg`}
                      width={14}
                      height={14}
                      alt=''
                    />
                  </div>
                  <div
                    className={`${styles.next} ${currentSlide === totalPages - 1 ? styles.disabled : ''
                      }`}
                    onClick={next}
                  >
                    <Image
                      src={`/arrows/next-arrow-white.svg`}
                      width={14}
                      height={14}
                      alt=''
                    />
                  </div>
                </div>
                <div className={styles.dots}>
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <div
                      key={index}
                      className={`${styles.dot} ${index === currentSlide ? styles.dotActive : ''
                        }`}
                      onClick={() => goToPage(index)}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={styles.sliderWrapper}>
          <div className={styles.sliderBlock}>
            <Slider
              ref={(slider) => {
                sliderRef = slider
              }}
              {...settings}
              className={styles.slider}
              beforeChange={handleBeforeChange}
            >
              {data[activeTab].items.map((card, i) => (
                <>
                  <div className={styles.mobileInfoWrap}>
                    {
                      card.backCard && (
                        <p className={styles.mobileInfo}>
                          * Tap image to see results
                        </p>
                      )
                    }
                  </div>
                  <div
                    key={i}
                    className={card.backCard ? styles.card : styles.cardSingle}
                    onClick={() => card.backCard && handleCardFlip(i)}
                  >
                    <div
                      className={`${styles.frontCard} ${flippedCards.includes(i) ? styles.hide : ''
                        }`}
                    >
                      <img
                        className={styles.cardImage}
                        src={card.frontCard.image}
                        alt='image'
                      />
                      <div className={styles.content}>
                        <div>
                          <p className={styles.cardTitle}>
                            {card.frontCard.title}
                          </p>
                          <p className={styles.cardDescription}>
                            {card.frontCard.description}
                          </p>
                        </div>
                        <a
                          href={card.frontCard.link}
                          className={styles.learnMore}
                        >
                          <p className={styles.link}>Learn More</p>
                          <Image
                            src={`/arrows/arrow-small.svg`}
                            width={16}
                            height={16}
                            alt=''
                          />
                        </a>
                      </div>
                    </div>
                    {card.backCard && (
                      <div
                        className={`${styles.backCard} ${flippedCards.includes(i) ? styles.show : ''
                          }`}
                      >
                        <img
                          className={styles.cardImage}
                          src={card.backCard.image}
                          alt='image'
                        />

                        <div className={styles.content}>
                          <div>
                            <p className={styles.cardTitle}>
                              {card.backCard.title}
                            </p>
                            <p className={styles.cardDescription}>
                              {card.backCard.description}
                            </p>
                          </div>
                          <a
                            href={card.frontCard.link}
                            className={styles.learnMore}
                          >
                            <p className={styles.link}>Learn More</p>
                            <Image
                              src={`/arrows/arrow-small.svg`}
                              width={16}
                              height={16}
                              alt=''
                            />
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              ))}
              {data[activeTab].items.length === 1 && <div></div>}
            </Slider>
          </div>
          <div className={styles.bottomMobile}>
            {data[activeTab].items.length > settings.slidesToShow && (
              <div className={styles.navigation}>
                <div className={styles.nav}>
                  <div
                    className={`${styles.prev} ${!currentSlide ? styles.disabled : ''}`}
                    onClick={previous}
                  >
                    <Image
                      src={`/arrows/prev-arrow-${!currentSlide ? 'green' : 'white'}.svg`}
                      width={14}
                      height={14}
                      alt=''
                    />
                  </div>
                  <div
                    className={`${styles.next} ${currentSlide === totalPages - 1 ? styles.disabled : ''
                      }`}
                    onClick={next}
                  >
                    <Image
                      src={`/arrows/next-arrow-${currentSlide === totalPages - 1 ? 'green' : 'white'
                        }.svg`}
                      width={14}
                      height={14}
                      alt=''
                    />
                  </div>
                </div>
                <div className={styles.dots}>
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <div
                      key={index}
                      className={`${styles.dot} ${index === currentSlide ? styles.dotActive : ''
                        }`}
                      onClick={() => goToPage(index)}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Button className={styles.mobileButton} onClick={handleButtonClick}>
        Book Now
      </Button>
    </div>
  )
}

export default SeeTheResultsSlider
