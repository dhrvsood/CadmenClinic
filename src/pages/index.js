import ContactBanner from '@/components/contact_banner'
import BaseButton from '@/components/base_button'
import Container from '@/components/container'
import Reviews from '@/components/reviews'
import ServicesCarousel from '@/components/services_carousel'
import { categories } from '@/doc/categories'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Link from 'next/link'
import treatment from '../../public/media/treatment.webp';
import landing from '../../public/media/home.png';
import RatingReviewPill from '@/components/RatingReviewPill'
import SeeTheResultsSlider from '@/components/SeeTheResultsSlider/SeeTheResultsSlider'
import { useWindowSize } from 'react-use'
import OfferCard from '@/components/OfferCard'
import TestimonialCardBig from '@/components/TestimonialCardBig'
import ContactDataCard from '@/components/ContactDataCard'
import TestimonialsSlider from '@/components/TestimonialsSlider/TestimonialsSlider'
import WhyOurPatientsSlider from '@/components/WhyOurPatientsSlider/WhyOurPatientsSlider'
import IconImageTextCard from '@/components/IconImageTextCard/IconImageTextCard'
import BlockContent from '@sanity/block-content-to-react'
import { blockSerializer } from '@/styles/sanitySerializers'

const Home = () => {
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  const whyChooseCards = [
    {
      "icon": '/icons/circle-clock.svg',
      "mainImage": '/images/services/md.jpeg',
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
      "body": [
        {
          "_type": "block",
          "style": "normal",
          "children": [
            {
              "_type": "span",
              "text": "Our non-invasive treatments deliver noticeable results with little to no downtime, allowing you to look and feel your best without interrupting your daily routine.",
              "marks": []
            }
          ],
          "markDefs": []
        }
      ]
    },
    {
      "icon": '/icons/group.svg',
      "mainImage": '/images/services/ep.webp',
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
      "body": [
        {
          "_type": "block",
          "style": "normal",
          "children": [
            {
              "_type": "span",
              "text": "Our licensed professionals bring years of experience in medical-grade aesthetics, ensuring each treatment is safe, effective, and delivered with precision.",
              "marks": []
            }
          ],
          "markDefs": []
        }
      ]
    },
    {
      "icon": '/icons/star-icon.svg',
      "mainImage": '/images/services/ht.webp',
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
      "body": [
        {
          "_type": "block",
          "style": "normal",
          "children": [
            {
              "_type": "span",
              "text": "Join over 140 happy patients who have rated us five stars on Google. At ImageLab, we’re dedicated to delivering results that keep patients coming back.",
              "marks": []
            }
          ],
          "markDefs": []
        }
      ]
    },
    {
      "icon": '/icons/lab.svg',
      "mainImage": '/images/services/cp.webp',
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
      "body": [
        {
          "_type": "block",
          "style": "normal",
          "children": [
            {
              "_type": "span",
              "text": "We provide results-driven, medical-grade services backed by science and carefully selected to ensure treatments that truly make a difference.",
              "marks": []
            }
          ],
          "markDefs": []
        }
      ]
    }
  ]
  const offerCards = [
    {
      "service": "PRP Hair Restoration",
      "image": "/images/offers/o1.webp",
      "percentOff": 50,
      "price": 299,
      "unitText": "per session",
      "priceFrom": false,
      "serviceId": "prp-hair-restoration"
    },
    {
      "service": "Exosome Hair Therapy",
      "image": "/images/offers/o2.webp",
      "percentOff": 50,
      "price": 399,
      "unitText": "per session",
      "priceFrom": false,
      "serviceId": "exosome-hair-therapy"
    },
    {
      "service": "Mesotherapy Vitamins",
      "image": "/images/offers/o3.webp",
      "percentOff": 50,
      "price": 199,
      "unitText": "per session",
      "priceFrom": 100,
      "serviceId": "mesotherapy-vitamins"
    },
    {
      "service": "Botox",
      "image": "/images/offers/o4.webp",
      "percentOff": 30,
      "price": 9.99,
      "unitText": "per unit",
      "priceFrom": false,
      "serviceId": "botox"
    },
    {
      "service": "Lip Filler / Dermal Filler",
      "image": "/images/offers/o5.webp",
      "percentOff": 30,
      "price": 599,
      "unitText": "per sryinge",
      "priceFrom": false,
      "serviceId": "dermal-filler"
    },
    {
      "service": "SCULPTRA®",
      "image": "/images/offers/o6.webp",
      "percentOff": 30,
      "price": 2499,
      "unitText": "3 Vails",
      "priceFrom": false,
      "serviceId": "sculptra"
    }
  ]
  const reviews = [
    {
      "content": "CADMEN Clinic has been my go-to for my hair restoration needs. They take a better approach to <b>PRP</b> which produced much better results than my experience at other clinics. I was seeing noticeable improvements within 2 <b>PRP</b> treatments. Definitely recommend to anyone who’s evaluating a fully natural solution – their nurses are the best in the business!",
      "image": "/images/testimonials/user1.jpeg"
    },
    {
      "content": "I had a great experience going to this hair-focused clinic, where they truly take pride in their results. I was unfamiliar with Exosomes until Mikaela explained the advantages of combining them with <b>PRP</b>. I'm very happy with my results and am now on my fourth treatment.",
      "image": "/images/testimonials/user2.jpeg"
    },
    {
      "content": "I had an amazing time at CADMEN clinic. Team had performed 5 <b>PRP</b> Treatment and result are amazing and drastically improved my hair density and texture. Thank you to CADMEN clinic for their amazing service and hope to see you soon.",
      "image": "/images/testimonials/user3.jpeg"
    },
    {
      "content": "The team here is 10/10. They’re knowledgeable but also super personable—like you're chatting with a friend who just happens to be amazing at aesthetics. My Sculptra treatment was done so precisely, and I love how it turned out! I wouldn’t trust anyone else now",
      "image": "/images/testimonials/user4.avif"
    },
    {
      "content": "Excellent experience getting <b>botox</b> here. From the providers to the front desk staff, this place is the gold standard in aesthetics in Toronto. If you are considering getting any kind of cosmetic treatment, look no further than CADMEN!",
      "image": "/images/testimonials/user5.avif"
    }
  ]

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
      <section className='pb-[80px] pt-[167px] max-sm:pt-[100px]'>
        <div className='wrapper flex items-center justify-between gap-[165px] max-sm:flex-col max-sm:gap-[60px]'>
          <div className='flex flex-col'>
            <h1 className='d-h1'>
              <span className='italic text-[#D19D51]'>
                Premier Medical Spa{' '}
              </span>
              for Hair Restoration and Aesthetic{' '}
              <span className='italic text-[#D19D51]'>Treatments</span>
            </h1>
            <p className='mt-[8px] pr-[50px] text-[18px] max-sm:text-[14px]'>
              Join hundreds of satisfied patients who trust CADMEN Clinic -
              Toronto{' '}
              <i>
                <b>#1 choice</b>
              </i>{' '}
              for medical-grade hair restoration and aesthetic treatments
            </p>
            <div className='mt-[24px] flex'>
              <RatingReviewPill />
            </div>
            <Link href='/book-now' className='mt-[40px]'>
              <button className='button max-sm:w-full'>Book Consultation</button>
            </Link>
          </div>
          <Image
            src='/media/home-hero-photo.avif'
            width={538}
            height={494}
            alt="Woman's head turned to the side with serene expression"
            className='max-md:w-[40vw] max-sm:w-full'
          />
        </div>
      </section>

      {/* Choosing CADMEN */}
      <section className='overflow-hidden bg-dawnPink bg-[url(/bg/patients-choose-bg.svg)] bg-cover py-[80px] max-sm:py-[40px]'>
        <div className='wrapper'>
          <div className='m-auto mb-[58px] max-w-[840px] text-center'>
            <h2 className='d-h2'>
              Why Our Patients <span className='blue-italic'>Choose</span>{' '}
              CADMEN Clinic
            </h2>
          </div>
          {/* Data from Zenoti, Need to change to JSON */}
          <WhyOurPatientsSlider
            settings={{
              dots: false,
              infinite: false,
              arrows: false,
              speed: 500,
              slidesToShow: windowWidth > 768 ? 3.1 : 1.1,
              slidesToScroll: windowWidth > 768 ? 3 : 1
            }}
            handleButtonClick={() => router.push('/book-now')}
          >
            {whyChooseCards.map((card, index) => (
              <IconImageTextCard
                key={index}
                icon={card.icon}
                image={card.mainImage}
                title={
                  <BlockContent
                    blocks={card.title}
                    serializers={blockSerializer}
                  />
                }
                text={<BlockContent blocks={card.body} />}
              />
            ))}
          </WhyOurPatientsSlider>
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
            handleButtonClick={() => router.push('/book-now')}
          />
        </div>
      </section>

      {/* Offers */}
      <section className='bg-beaver/90 py-[80px] max-sm:py-[40px]'>
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
          <div className='grid grid-cols-3 gap-[30px] max-md:grid-cols-2 max-sm:grid-cols-1'>
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

      {/* Testimontials */}
      <section className='bg-dawnPink py-[80px] max-sm:py-[40px]'>
        <div className='wrapper'>
          <div className='mb-[48px] flex flex-col items-center gap-[12px]'>
            <RatingReviewPill />
            <h2 className='d-h2 text-center'>
              Join Our Satisfied <span className='blue-italic text-gold-base'>Clients</span>
            </h2>
            <p className='text-center'>
              Over thousands of people have transformed their lives with our hair restoration and aesthetic treatments.
            </p>
          </div>
          <div className='m-auto max-w-[1033px]'>
            <TestimonialsSlider
              slides={reviews}
              settings={{
                dots: false,
                arrows: false,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1
              }}
              ctaLink='/book-now'
              ctaText='Book Now'
            >
              {reviews.map((child, i) => (
                <TestimonialCardBig
                  key={i}
                  quote={child.content}
                  imageUrl={child.image}
                />
              ))}
            </TestimonialsSlider>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className='py-[80px] max-sm:py-[40px]'>
        <div className='wrapper'>
          <div className='mb-[48px] flex flex-col items-center gap-[12px]'>
            <h2 className='d-h2'>
              Our <span className='gold-italic'>Location</span>
            </h2>
            <p className='text-center'>
              Don't put off your changes — come to us now and get <b>FREE</b>{' '}
              first consultation!
            </p>
          </div>
          <div className='grid grid-cols-[1.75fr,2.25fr,3fr] gap-[30px] max-md:grid-cols-1 max-md:gap-[14px]'>
            {/* Change */}
            <ContactDataCard
              linkTo='tel:+18722072269'
              linkText='(872) 207-2269'
              icon='/icons/circle-phone.svg'
              title='Call Us'
            />
            <ContactDataCard
              linkTo='mailto:info@imagelabmedspa.com'
              linkText='info@imagelabmedspa.com'
              icon='/icons/circle-mail.svg'
              title='Contact Us'
            />
            <ContactDataCard
              linkTo='https://maps.app.goo.gl/RizTXzKMnXVkUewB7'
              linkText='2033 W Roscoe St, Chicago, IL 60618'
              icon='/icons/circle-pin.svg'
              title='Visit Us'
              newTab
            />
          </div>
          <div className='relative mt-[56px] h-[700px] overflow-hidden rounded-[20px]'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5773.815245938251!2d-79.39317832376719!3d43.65009025263178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b350228b56b63%3A0x114171d25aa4df4d!2sCADMEN%20Clinic%20-%20Hair%20Loss%20%2B%20Face%20Centre!5e0!3m2!1sen!2sca!4v1745283288795!5m2!1sen!2sca'
              width='100%'
              height='100%'
              style={{ border: 0 }}
              allowfullscreen
              loading='lazy'
              referrerpolicy='no-referrer-when-downgrade'
            ></iframe>
            <div className='absolute bottom-[20px] left-[20px] max-sm:right-[20px]'>
              <div className='flex'>
                <div className='flex items-center rounded-[12px] border border-[#eaecee] bg-[#fcfcfc] p-[28px]'>
                  <Image
                    src='/icons/circle-clock.svg'
                    width={32}
                    height={32}
                    alt='Phone icon'
                  />
                </div>
                <div className='ml-[-1px] flex w-full flex-col justify-center rounded-[12px] border border-[#eaecee] bg-[#fcfcfc] p-[20px]'>
                  <h4 className='d-h4'>Working Hours</h4>
                </div>
              </div>
              <div className='flex flex-col gap-[8px] rounded-[12px] border border-[#eaecee] bg-[#fcfcfc] p-[20px] pr-[100px] max-sm:pr-[20px]'>
                <p className='text-[18px]'>
                  <span className='font-medium'>Monday & Tuesday: </span>10AM
                  - 6PM
                </p>
                <p className='text-[18px]'>
                  <span className='font-medium'>Wednesday: </span>9AM - 5PM
                </p>
                <p className='text-[18px]'>
                  <span className='font-medium'>Thursday & Friday: </span>9AM
                  - 6PM
                </p>
                <p className='text-[18px]'>
                  <span className='font-medium'>Saturday: </span>9:30AM -
                  5:30PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* First Step Banner */}
      <section className='bg-beaver/90 py-[80px] max-sm:py-[40px]'>
        <div className='wrapper flex gap-[60px] max-sm:flex-col'>
          <div className='flex flex-col gap-[12px]'>
            <h2 className='d-h2 text-white'>
              Take the <span className='gold-italic light'>First Step</span>{' '}
              Toward a New You!
            </h2>
            <p className='text-[18px] text-white'>
              Discover how ImageLab Med Spa can help you look and feel your
              best. Book a consultation today to learn more about our services
              and see which treatments are right for you.
            </p>
            <Link href='/book-now'>
              <button className='button white mt-[28px] max-sm:w-full'>
                Book My Consultation Now
              </button>
            </Link>
          </div>
          <Image
            src='/media/first-step.webp'
            width={650}
            height={380}
            alt='Woman smiling and touching her face'
            className='rounded-[16px] object-cover max-md:w-[60vw] max-sm:w-full'
          />
        </div>
      </section>
    </>
  )
}
export default Home
