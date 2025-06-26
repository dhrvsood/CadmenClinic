import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Link from 'next/link'
import RatingReviewPill from '@/components/RatingReviewPill'
import SeeTheResultsSlider from '@/components/SeeTheResultsSlider/SeeTheResultsSlider'
import { useWindowSize } from 'react-use'
import OfferCard from '@/components/OfferCard'
import TestimonialCardBig from '@/components/TestimonialCardBig'
import TestimonialsSlider from '@/components/TestimonialsSlider/TestimonialsSlider'
import WhyOurPatientsSlider from '@/components/WhyOurPatientsSlider/WhyOurPatientsSlider'
import IconImageTextCard from '@/components/IconImageTextCard/IconImageTextCard'

// plasmic our location section
import OurLocationSection from '@/components/OurLocationSection'
import VideoSection from '@/components/VideoSection/VideoSection'


const Home = () => {
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  const whyChooseCards = [
    {
      "icon": '/icons/Clock.svg',
      "mainImage": '/media/home/minimal-downtime.webp',
      "title": [
        {
          "_type": "block",
          "style": "h3",
          "children": [
            {
              "_type": "span",
              "text": "Minimal Downtime",
              "marks": []
            }
          ],
          "markDefs": []
        }
      ],
      "text": "Our non-invasive treatments deliver noticeable results with little to no downtime, allowing you to look and feel your best without interrupting your daily routine.",
    },
    {
      "icon": '/icons/Group.svg',
      "mainImage": '/media/home/expert-provider.webp',
      "title": [
        {
          "_type": "block",
          "style": "h3",
          "children": [
            {
              "_type": "span",
              "text": "Expert Provider",
              "marks": []
            }
          ],
          "markDefs": []
        }
      ],
      "text": "Our license professionals brings decades of experience in medical-grade hair restoration and aesthetics, ensuring each treatment is safe, effective, and delivered with precision.",
    },
    {
      "icon": '/icons/star.svg',
      "mainImage": '/media/home/highly-trusted.webp',
      "title": [
        {
          "_type": "block",
          "style": "h3",
          "children": [
            {
              "_type": "span",
              "text": "Highly Trusted",
              "marks": []
            }
          ],
          "markDefs": []
        }
      ],
      "text": "Join 2,100+ satisfied patients who have trusted CADMEN with hair restoration and aesthetic journey. We are dedicated to delivering results that keep patients coming back.",
    },
    {
      "icon": '/icons/Lab.svg',
      "mainImage": '/media/home/clinically-proven.webp',
      "title": [
        {
          "_type": "block",
          "style": "h3",
          "children": [
            {
              "_type": "span",
              "text": "Clinically Proven",
              "marks": []
            }
          ],
          "markDefs": []
        }
      ],
      "text": "We provide results-driven, medical-grade services backed by science and carefully selected to ensure our treatments truly make a difference - that is what sets CADMEN Clinic apart.",
    }
  ]
  const offerCards = [
    {
      "service": "PRP Hair Restoration",
      "image": "/media/home/offers/PRP.jpg",
      "percentOff": 50,
      "price": 299,
      "unitText": "per session",
      "priceFrom": false,
      "serviceId": "prp-hair-restoration"
    },
    {
      "service": "Exosome Hair Therapy",
      "image": "/media/home/offers/Exosomes.jpg",
      "percentOff": 50,
      "price": 399,
      "unitText": "per session",
      "priceFrom": false,
      "serviceId": "exosome-hair-therapy"
    },
    {
      "service": "Mesotherapy Vitamins",
      "image": "/media/home/offers/Mesotherapy.jpg",
      "percentOff": 50,
      "price": 199,
      "unitText": "per session",
      "priceFrom": false,
      "serviceId": "mesotherapy-vitamins"
    },
    {
      "service": "Botox",
      "image": "/media/home/offers/Botox.jpg",
      "percentOff": 30,
      "price": 9.99,
      "unitText": "per unit",
      "priceFrom": false,
      "serviceId": "botox"
    },
    {
      "service": "Lip / Dermal Filler",
      "image": "/media/home/offers/Lip Filler.jpg",
      "percentOff": 30,
      "price": 599,
      "unitText": "per sryinge",
      "priceFrom": false,
      "serviceId": "dermal-filler"
    },
    {
      "service": "PRP Facial",
      "image": "/media/home/offers/PRP Facial.jpg",
      "percentOff": 25,
      "price": 599,
      "unitText": "3 Vails",
      "priceFrom": false,
      "serviceId": "sculptra"
    }
  ]

  const isDesktop = windowWidth >= 1200

  return (
    <>
      <NextSeo
        title="CADMEN Clinic | Toronto’s Best Med Spa Experience"
        description='Offering Botox, fillers, laser treatments, and personalized skincare in Toronto for enhancing beauty and addressing your various aesthetic needs. Learn more.'
        canonical='https://www.cadmenclinic.ca/'
        openGraph={{
          url: 'https://www.cadmenclinic.ca/',
          title:
            "CADMEN Clinic | Medspa Toronto Aesthetic & Beauty Clinic",
          description:
            'Offering Botox, fillers, laser treatments, and personalized skincare in Toronto for enhancing beauty and addressing your various aesthetic needs. Learn more.',
          images: [
            {
              url: 'https://www.cadmenclinic.ca/media/interior.jpg',
              width: 800,
              height: 800,
              alt: 'Interior of CADMEN Clinic',
              type: 'image/jpeg'
            }
          ],
          siteName: 'CADMEN Clinic'
        }}
      />

      {/* Landing */}
      <section className='pb-[80px] pt-[120px] max-sm:pt-[100px]'>
        <div className='wrapper flex flex-col md:flex-row items-center justify-between gap-[60px] md:gap-[165px]'>
          
          {/* TEXT CONTENT */}
          <div className='flex flex-col w-full md:w-auto'>
            <h1 className='d-h1'>
              <span className='italic text-[#D19D51]'>Premier Medical Spa </span>
              for Hair Restoration and Aesthetic{' '}
              <span className='italic text-[#D19D51]'>Treatments</span>
            </h1>
            <p className='mt-[8px] pr-[50px] text-[18px] max-sm:text-[14px]'>
              Join thousands of satisfied patients who trust CADMEN Clinic – Toronto’s{' '}
              <i><b>#1 choice</b></i>{' '}
              for medical-grade hair restoration and aesthetic treatments.
            </p>
            <div className='mt-[24px] flex'>
              <RatingReviewPill />
            </div>
            <Link href='https://cadmenclinic.ca.zenoti.com/webstoreNew/services' className='mt-[40px] w-full md:w-auto'>
              <button className='button w-full md:w-auto'>Book Consultation</button>
            </Link>
          </div>

          {/* IMAGE */}
          <Image
            src='/media/home/hero-image.webp'
            width={538}
            height={494}
            alt="Woman's head turned to the side with serene expression"
            className='w-full max-w-[538px] md:w-[40vw]'
          />
        </div>
      </section>

      {/* Choosing CADMEN */}
      <section className='overflow-hidden bg-dawnPink bg-[url(/bg/patients-choose-bg.svg)] bg-cover py-[80px] max-sm:py-[40px]'>
        <div className='wrapper'>
          <div className='m-auto mb-[58px] max-w-[840px] text-center'>
            <h2 className='d-h2'>
              Why Our Patients <span className='blue-italic text-gold-base'>Choose</span>{' '}
              CADMEN Clinic
            </h2>
          </div>

          <WhyOurPatientsSlider
            settings={{
              dots: false,
              infinite: false,
              arrows: false,
              speed: 500,
              slidesToShow: windowWidth > 768 ? 3.1 : 1.1,
              slidesToScroll: windowWidth > 768 ? 2 : 1
            }}
            handleButtonClick={() => router.push('https://cadmenclinic.ca.zenoti.com/webstoreNew/services')}
          >
            {whyChooseCards.map((card, index) => (
              <IconImageTextCard
                key={index}
                icon={card.icon}
                image={card.mainImage}
                title={card.title[0].children[0].text}
                text={card.text}
              />
            ))}
          </WhyOurPatientsSlider>

          {/* CONDITIONAL LOGIC TO REMOVE SLIDER ON DESKTOP SCREENS */}
          {/* {isDesktop ? (
            <div className='flex justify-between gap-[20px]'>
              {whyChooseCards.map((card, index) => (
                <IconImageTextCard
                  key={index}
                  icon={card.icon}
                  image={card.mainImage}
                  title={card.title[0].children[0].text}
                  text={card.text}
                />
              ))}
            </div>
          ) : (
            <WhyOurPatientsSlider
              settings={{
                dots: false,
                infinite: false,
                arrows: false,
                speed: 500,
                slidesToShow: windowWidth > 768 ? 3.1 : 1.1,
                slidesToScroll: windowWidth > 768 ? 3 : 1
              }}
              handleButtonClick={() => router.push('https://cadmenclinic.ca.zenoti.com/webstoreNew/services')}
            >
              {whyChooseCards.map((card, index) => (
                <IconImageTextCard
                  key={index}
                  icon={card.icon}
                  image={card.mainImage}
                  title={card.title[0].children[0].text}
                  text={card.text}
                />
              ))}
            </WhyOurPatientsSlider>
          )} */}
        </div>
      </section>

      {/* Explore Our Services */}
      <section className='overflow-hidden py-[80px] max-sm:py-[40px]'>
        <div className='wrapper'>
          <div className='m-auto mb-[58px] text-center'>
            <h2 className='d-h2'>
              Explore Our Services and{' '}
              <span className='gold-italic'>See the Results</span>
            </h2>
            <p className='m-auto mt-[12px] max-w-[632px]'>
              We provide results-driven, medical-grade services backed by
              science to ensure treatments that truly make a difference.
            </p>
          </div>
          <SeeTheResultsSlider
            settings={{
              dots: false,
              infinite: false,
              speed: 500,
              slidesToShow: windowWidth > 1200 ? 2 : 1,
              slidesToScroll: 2
            }}
            handleButtonClick={() => router.push('https://cadmenclinic.ca.zenoti.com/webstoreNew/services')}
          />
        </div>
      </section>

      {/* Offers */}
      <section style={{
          background: `url("/graphics/circlesSvg.svg") bottom right / cover no-repeat, #9a7f71`,
        }}
        className='bg-beaver/90 py-[80px] max-sm:py-[40px]'>
        <div className='wrapper'>
          <div className='m-auto mb-[60px] max-w-[875px] text-center'>
            <h1 className='d-h1 text-white mb-[8px] max-sm:text-[40px]'>
              Exclusive Introductory Deals for{' '}
              <span className='gold-italic light'>New Patients</span>
            </h1>
            <p className='px-[28px] text-white max-sm:px-0'>
              Looking to try our services? Don’t miss out on these{' '}
              <b>limited-time offers</b> and experience why CADMEN is Toronto’s
              top choice for medical-grade hair restoration and aesthetics.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]'>
            {offerCards.map((card, index) => (
              <OfferCard
                key={index}
                service={card.service}
                image={card.image}
                percentOff={card.percentOff}
                price={card.price}
                unitText={card.unitText}
                priceFrom={card.priceFrom}
                serviceId={card.serviceId}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Video */}
      <VideoSection bgColor="bg-dawnPink"/>

      {/* Our Location */}
      <OurLocationSection />

      {/* First Step Banner */}
      <section style={{
          background: `url("/graphics/circlesSvg.svg") bottom right / cover no-repeat, #9a7f71`,
        }}
        className='bg-beaver/90 py-[80px] sm:py-[60px] max-sm:py-[40px]'>
        <div className='wrapper flex flex-col md:flex-row items-center gap-[40px] md:gap-[60px]'>
          
          {/* Text Content */}
          <div className='w-full md:w-[40%] flex flex-col gap-[12px] text-center md:text-left'>
            <h2 className='d-h2 text-white'>
              Take the <span className='gold-italic light'>First Step</span> Toward a New You!
            </h2>
            <p className='text-[18px] text-white'>
              Discover how CADMEN Clinic can help you look and feel your best.
              Book a consultation today to learn more about our services and
              see which treatments are right for you.
            </p>
            <Link href='https://cadmenclinic.ca.zenoti.com/webstoreNew/services'>
              <button className='button white mt-[28px] w-full md:w-auto'>
                Book My Consultation Now
              </button>
            </Link>
          </div>

          {/* Image */}
          <Image
            src='/media/home/first-step.webp'
            width={650}
            height={380}
            alt='Woman smiling and touching her face'
            className='w-full md:w-[60%] rounded-[16px] object-cover'
          />
        </div>
      </section>

    </>
  )
}
export default Home
