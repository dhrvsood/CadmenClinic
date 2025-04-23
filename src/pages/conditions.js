import ContactBanner from '@/components/contact_banner'
import Container from '@/components/container'
import { conditions } from '@/doc/conditions'
import { AdjustmentsVerticalIcon, ArrowLongRightIcon } from '@heroicons/react/24/outline'
import sortBy from 'lodash/sortBy'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import condition from '../../public/media/conditions.jpg';

const Conditions = () => {
  const [conditionsFilter, setConditionsFilter] = useState(conditions)
  const [showFilters, setShowFilters] = useState(false)

  const filterCondition = (conditionSlug) => {
    const con = conditions.find(
      (condition) => condition.slug.current === conditionSlug
    )
    setConditionsFilter([con])
    setShowFilters(false)
  }

  const resetFilter = () => {
    setConditionsFilter(conditions)
  }

  const handleSelectChange = (conditionSlug) => {
    const con = conditions.find(
      (condition) => condition.slug.current === conditionSlug
    )
    setConditionsFilter([con])
  }

  const filterRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setShowFilters(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <>
      <NextSeo
        title='Get Aesthetic Treatments for Conditions - CADMEN Clinic'
        description='Treat conditions like varicose veins, unwanted hair, and weight issues with cutting-edge treatments at CADMEN Clinic for lasting results. See more.'
        canonical='https://www.cadmenclinic.ca/conditions'
        openGraph={{
          url: 'https://www.cadmenclinic.ca/conditions',
          title: 'Get Aesthetic Treatments for Conditions - CADMEN Clinic',
          description:
            'Treat conditions like varicose veins, unwanted hair, and weight issues with cutting-edge treatments at CADMEN Clinic for lasting results. See more.',
          images: [
            {
              url: 'https://www.cadmenclinic.ca/media/conditions.jpg',
              width: 800,
              height: 800,
              alt: 'Interior of CADMEN Clinic',
              type: 'image/jpeg'
            }
          ],
          siteName: 'CADMEN Clinic'
        }}
      />
      <section className='overflow-hidden'>
        <Container classList='md:px-5'>
          <div className='grid h-full md:h-[520px] md:grid-cols-2 lg:h-[650px] pt-10'>
            <div className='order-2 flex h-full flex-col justify-center space-y-5 bg-gray-100 px-5 py-5 md:order-1 md:py-0 lg:px-10'>
              <h1 className='font-display text-4xl font-light tracking-wide xl:text-6xl'>
                Conditions Our Aesthetic Treatments Help With
              </h1>
              <p className='leading-relaxed'>
                Whether you&apos;re struggling with premature aging or seeking
                solutions for a more radiant complexion, explore this section to
                learn how our state-of-the-art procedures and expert team can
                help you achieve the look and confidence you desire.
              </p>
              <div className='flex w-full'>
                <Link
                  href='https://cadmenclinic.ca.zenoti.com/webstoreNew/services'
                  className='w-full rounded border border-beaver/90 bg-beaver/90 px-10 py-3 text-center font-light text-white hover:bg-beaver lg:flex lg:w-auto'
                >
                  Book Now
                </Link>
              </div>
            </div>
            <div className='order-1 h-[250px] md:order-2 md:h-full'>
              <Image
                draggable='false'
                src={condition}
                alt='Woman touching face'
                sizes='100vw'
                className='h-full w-full object-cover object-center'
                width={1000}
                height={1000}
                quality={100}
              />
            </div>
          </div>
        </Container>
      </section>
      <section>
        <Container classList='flex flex-col space-y-5 px-5'>
          <div className='hidden rounded-bl rounded-br bg-beaver/90 py-2 text-white md:flex'>
            <div className='flex flex-row items-center justify-between'>
              <button
                className='flex pl-3'
                onClick={() => setShowFilters(true)}
              >
                <AdjustmentsVerticalIcon className='mr-2 h-5 w-5' /> Filter by
                Condition
              </button>
              <button
                type='button'
                className='rounded-md px-5 py-2 text-sm hover:underline'
                onClick={() => resetFilter()}
              >
                Reset Filter
              </button>
            </div>
          </div>
          {/* Dropdown Menu of Conditions */}
          <div ref={filterRef} className='relative hidden md:flex'>
            {showFilters ? (
              <div className='absolute inset-0 z-20 -mt-5 w-full opacity-100 transition-opacity duration-300 ease-in-out'>
                <ul
                  className='grid grid-flow-col grid-rows-9 gap-4 border border-gray-200 bg-gray-100 p-10 shadow-xl md:grid-rows-7 lg:grid-rows-4'
                  role='list'
                  aria-label='Filter the conditions. This is only desktop and tablet only and hidden on mobile'
                >
                  {sortBy(conditions, 'title').map((c, i) => (
                    <li key={i}>
                      <button
                        className='text-xs hover:underline sm:text-sm'
                        onClick={() => filterCondition(c.slug.current)}
                      >
                        {c.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className='pointer-events-none absolute inset-0 -mt-5 w-full opacity-0 transition-opacity duration-300 ease-in-out'>
                {/* This div will stay in the DOM but be invisible and non-interactable when filters aren't shown. */}
              </div>
            )}
          </div>
          <nav className='flex flex-col items-center justify-center border bg-gray-50 p-5 sm:p-10 md:hidden'>
            <div className='flex w-full flex-col md:hidden'>
              <label htmlFor='conditions' className='pb-1 text-center text-sm'>
                Select a condition
              </label>
              <select
                aria-label='Filter the conditions. This is only mobile only and hidden on desktop'
                name='conditions'
                id='conditions'
                onChange={(e) => handleSelectChange(e.target.value)}
                className='rounded'
              >
                {sortBy(conditions, 'title').map((c, i) => (
                  <option key={i} value={c.slug.current}>
                    {c.title}
                  </option>
                ))}
              </select>
            </div>
            <button
              type='button'
              className='rounded-md px-5 py-2 text-sm hover:underline'
              onClick={() => resetFilter()}
            >
              Reset Filter
            </button>
          </nav>
        </Container>
      </section>
      <section className='py-10'>
        <Container classList='px-5'>
          <dl className='grid gap-10 sm:grid-cols-2 lg:grid-cols-3'>
            {sortBy(conditionsFilter, 'title').map((d, i) => (
              <div
                id={d.slug.current}
                key={i}
                role='listitem'
                className='rounded border border-gray-200'
              >
                <div className='flex flex-col space-y-5'>
                  <dt className='border-b border-gray-200 bg-dawnPink py-3 text-center font-display text-2xl'>
                    <h2 className='text-black'>
                      {d.title}{` `}<span className='sr-only'>Treatments</span>
                    </h2>
                  </dt>
                  <div className='px-5'>
                    <ul
                      role='list'
                      className='flex h-full flex-col items-center justify-center pb-5 gap-2'
                    >
                      {d.services.map((service, i) => (
                        <li key={i}>
                          <h3 className='md:text-lg'>
                            <Link
                              className='flex items-center text-center hover:underline'
                              href={`/services${service.slug.current}`}
                            >
                              {service.title}
                              <ArrowLongRightIcon className='ml-2 h-3 w-3' />
                            </Link>
                          </h3>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </dl>
          <div className='mt-10 flex justify-center mx-0'>
            <Link
              href='/services'
              className='rounded border border-beaver/90 bg-beaver/90 px-10 py-3 font-light text-white hover:bg-beaver'
            >
              View All Services
            </Link>
          </div>
        </Container>
      </section>
      <ContactBanner />
    </>
  )
}

export default Conditions
