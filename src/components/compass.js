import { PlayIcon } from '@heroicons/react/24/solid'
import { sortBy } from 'lodash'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

import Container from './container'

const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, callback])
}

const Compass = ({ conditions }) => {
  const [condition, setCondition] = useState(conditions[4])
  const [services, setServices] = useState(conditions[4].services)
  const [showConditionsDropdown, setShowConditionsDropdown] = useState(false)
  const [showServicesDropdown, setShowServicesDropdown] = useState(false)

  const conditionsDropdownRef = useRef(null)
  const servicesDropdownRef = useRef(null)

  useOutsideClick(conditionsDropdownRef, () => setShowConditionsDropdown(false))
  useOutsideClick(servicesDropdownRef, () => setShowServicesDropdown(false))

  const toggleDropdown = (setter) => () => setter((prevState) => !prevState)

  const updateService = (title) => {
    const newCondition = conditions.find((c) => c.title === title)
    setCondition(newCondition)
    setServices(newCondition.services)
    setShowConditionsDropdown(false)
  }

  return (
    <section className='relative py-20'>
      <img
        draggable='false'
        src='/media/vector_left.svg'
        className='absolute bottom-0 top-0 hidden lg:block'
        alt='Left decoration'
      />
      <img
        draggable='false'
        src='/media/vector_right.svg'
        className='absolute right-0 top-0 mt-72 hidden lg:block'
        alt='Right decoration'
      />
      <Container classList='px-5'>
        <div className='relative grid items-center gap-10 rounded border border-gold-base p-10 shadow-lg md:grid-cols-3 lg:gap-20'>
          <div className='mx-auto text-gold-base hover:text-black md:mx-0'>
            <button
              ref={conditionsDropdownRef}
              aria-label='Toggle Conditions Dropdown'
              type='button'
              className='flex flex-row items-center font-display text-3xl'
              onClick={toggleDropdown(setShowConditionsDropdown)}
            >
              Have {condition.title}?
              <PlayIcon
                className={`h-5 w-5 transition-transform ${
                  showConditionsDropdown ? 'rotate-90 transform' : ''
                }`}
                aria-hidden='true'
              />
            </button>
          </div>
          {showConditionsDropdown && (
            <ul
              ref={conditionsDropdownRef}
              className={`absolute z-20 mt-10 grid-flow-col gap-2 border border-gray-200 bg-gray-50 p-5 shadow-lg transition duration-300 ease-in-out sm:grid sm:grid-rows-7 ${
                showConditionsDropdown ? 'opacity-100' : 'opacity-0'
              }`}
              role='list'
              aria-label='Conditions Dropdown'
            >
              {sortBy(conditions, 'title').map((c, i) => (
                <li key={i} className='tracking flex flex-col'>
                  <button
                    type='button'
                    className='w-full px-5 py-2 text-left text-sm hover:bg-black hover:text-white lg:text-base'
                    onClick={() => updateService(c.title)}
                  >
                    {c.title}
                  </button>
                </li>
              ))}
            </ul>
          )}
          <div className='mx-auto flex w-full flex-col items-center justify-center space-y-5 md:flex-row md:space-y-0'>
            <div className='md:hidden'>
              <svg
                className='mx-auto h-20 w-1 text-gold-base'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 1 20'
              >
                <line x1='0.5' y1='0' x2='0.5' y2='20' stroke='currentColor' />
              </svg>
            </div>
            <div className='hidden md:flex'>
              <svg
                className='h-1 w-10 text-gold-base lg:w-20'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 64 1'
              >
                <line
                  x1='0'
                  y1='0.5'
                  x2='64'
                  y2='0.5'
                  stroke='currentColor'
                  strokeWidth='2'
                />
              </svg>
            </div>
            <p className='text-center text-gold-base md:px-10 lg:px-20'>MEET</p>
            <div className='md:hidden'>
              <div>
                <svg
                  className='mx-auto h-20 w-1 text-gold-base'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 1 20'
                >
                  <line
                    x1='0.5'
                    y1='0'
                    x2='0.5'
                    y2='20'
                    stroke='currentColor'
                  />
                </svg>
              </div>
            </div>
            <div className='hidden md:flex'>
              <svg
                className='h-1 w-10 text-gold-base lg:w-20'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 64 1'
              >
                <line
                  x1='0'
                  y1='0.5'
                  x2='64'
                  y2='0.5'
                  stroke='currentColor'
                  strokeWidth='2'
                />
              </svg>
            </div>
          </div>
          <div>
            <div className='mx-auto text-gold-base hover:text-black md:mx-0'>
              {services.length > 1 ? (
                <button
                  ref={servicesDropdownRef}
                  aria-label='Toggle Services Dropdown'
                  type='button'
                  className='flex flex-row items-center justify-center font-display text-3xl'
                  onClick={toggleDropdown(setShowServicesDropdown)}
                >
                  {services[4]?.title || services[0].title}
                  <PlayIcon
                    className={`h-5 w-5 transition-transform ${
                      showServicesDropdown ? 'rotate-90 transform' : ''
                    }`}
                    aria-hidden='true'
                  />
                </button>
              ) : (
                <div className='flex items-start justify-center'>
                  <Link
                    href={`/services/${services[0].slug.current}`}
                    className='font-display text-3xl'
                  >
                    {services[0].title}
                  </Link>
                </div>
              )}
              {showServicesDropdown && (
                <ul
                  ref={servicesDropdownRef}
                  className={`absolute z-20 mt-5 gap-2 border border-gray-200 bg-gray-50 p-5 shadow-lg transition duration-300 ease-in-out ${
                    showServicesDropdown ? 'opacity-100' : 'opacity-0'
                  }`}
                  role='list'
                  aria-label='Services Dropdown'
                >
                  {sortBy(services, 'title').map((service, i) => (
                    <li key={i} className='tracking flex flex-col'>
                      <Link
                        className='w-full px-5 py-2 text-left text-sm hover:bg-black hover:text-white lg:text-base'
                        href={`/services/${service.slug.current}`}
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className='flex justify-center pt-10'>
          <Link
            href='/conditions'
            className='rounded bg-gold-base px-10 py-3 text-white hover:bg-black'
          >
            Learn More
          </Link>
        </div>
      </Container>
    </section>
  )
}

export default Compass
