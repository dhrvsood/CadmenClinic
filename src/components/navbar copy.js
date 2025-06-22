import { getNavItems } from '@/sanity/lib/queries'
import { Popover, Transition } from '@headlessui/react'
import Hamburger from 'hamburger-react'
import { orderBy } from 'lodash'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Fragment, useEffect, useState } from 'react'

import MobileMenu from './mobile_menu'

const navigation = {
  pages: [
    { name: 'Conditions', href: '/conditions' },
    { name: 'Membership', href: '/membership' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' }
  ]
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = ({ isServiceClass = false }) => {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [navItems, setNavItems] = useState([])
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    getNavItems().then((data) => setNavItems(data))
  }, [])

  return (
    <div
      className={`z-40 w-full border-b border-gray-100 transition duration-300 shadow-sm ${isServiceClass ? `fixed ${scrolled ? 'bg-white' : 'bg-transparent'}` : 'sticky top-0 bg-white'}`}
    >
      {/* Mobile menu */}
      <MobileMenu
        open={open}
        setOpen={setOpen}
        navItems={navItems}
        navigation={navigation}
      />
      {!router.pathname.includes('payment-plan') && (
        <div className='bg-gray-900'>
          <Link
            href='/payment-plans'
            className='flex w-full justify-center py-1 text-xs text-white'
          >
            Financing Now Available
          </Link>
        </div>
      )}
      <header className='relative'>
        <nav aria-label='Top'>
          <div className={isServiceClass ? 'bg-transparent' : 'bg-white'}>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
              <div>
                <div className='flex flex-row items-center justify-between py-3'>
                  {/* Logo (lg+) */}
                  <div className='hidden md:flex md:flex-1 md:items-center'>
                    <Link href='/'>
                      <span className='sr-only'>ImageLab Med Spa</span>
                      <img
                        className='h-10 w-auto'
                        src={
                          isServiceClass && !scrolled ? '/logo_light.png' : '/site-logo.png'
                        }
                        alt='ImageLab logo'
                      />
                    </Link>
                  </div>

                  <div className='hidden h-full md:flex md:grow md:justify-center'>
                    {/* Flyout menus */}
                    <Popover.Group className='inset-x-0 bottom-0 px-4 md:grow'>
                      <div className='flex h-full items-center justify-center space-x-3 lg:space-x-8'>
                        <Popover className='ml-auto flex'>
                          {({ open }) => (
                            <>
                              <div className='relative flex'>
                                <Popover.Button
                                  className={classNames(
                                    `${isServiceClass && !scrolled ? 'text-white' : 'text-gray-700 hover:text-teal-700'}`,
                                    'relative',
                                    '-mb-px',
                                    'flex',
                                    'items-center',
                                    'pt-px',
                                    'text-sm',
                                    'font-medium',
                                    'transition-colors',
                                    'duration-200',
                                    'ease-out',
                                    'hover:border-b-2'
                                  )}
                                >
                                  Services
                                </Popover.Button>
                              </div>

                              <Transition
                                as={Fragment}
                                enter='transition ease-out duration-200'
                                enterFrom='opacity-0'
                                enterTo='opacity-100'
                                leave='transition ease-in duration-150'
                                leaveFrom='opacity-100'
                                leaveTo='opacity-0'
                              >
                                <Popover.Panel className='absolute inset-x-0 top-full text-sm text-gray-500 shadow-md'>
                                  {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                  <div
                                    className='absolute inset-0 top-1/2 bg-white shadow'
                                    aria-hidden='true'
                                  />

                                  <div className='relative bg-gray-50'>
                                    <div className='mx-auto max-w-7xl'>
                                      <ul
                                        role='list'
                                        className='grid grid-cols-5 gap-5 px-5 py-10'
                                      >
                                        {Object.entries(navItems).map(
                                          ([key, category], i) => (
                                            <li
                                              key={i}
                                              className='flex flex-col space-y-2'
                                            >
                                              <p className='mb-1 max-w-[150px] border-b border-gray-300 pb-1 text-base font-medium text-black'>
                                                {key}
                                              </p>
                                              {orderBy(
                                                category.services,
                                                [
                                                  (service) =>
                                                    service.categoryOrder ||
                                                    Infinity,
                                                  'title'
                                                ],
                                                ['asc', 'asc']
                                              ).map((service, j) => (
                                                <div key={`${i}-${j}`}>
                                                  <Popover.Button
                                                    as={Link}
                                                    className='text-sm tracking-widest hover:underline'
                                                    href={`/services/${service.slug}`}
                                                  >
                                                    {service.title}
                                                  </Popover.Button>
                                                </div>
                                              ))}
                                            </li>
                                          )
                                        )}
                                        <div className='pt-5'>
                                          <Popover.Button
                                            as={Link}
                                            href='/services'
                                            className='rounded bg-black px-3 py-2 text-center text-sm text-white hover:bg-gray-800'
                                          >
                                            View All Services
                                          </Popover.Button>
                                        </div>
                                      </ul>
                                    </div>
                                  </div>
                                </Popover.Panel>
                              </Transition>
                            </>
                          )}
                        </Popover>

                        {navigation.pages.map((page) => (
                          <Link
                            key={page.name}
                            href={page.href}
                            className={`flex items-center text-sm font-medium text-gray-700 hover:border-b-2 ${isServiceClass && !scrolled ? 'text-white' : 'text-gray-700 hover:text-teal-700'}`}
                          >
                            {page.name}
                          </Link>
                        ))}
                        <div className='menu-btn-first ml-auto'>
                          {!router.pathname.includes('https://cadmenclinic.ca.zenoti.com/webstoreNew/services') ? (
                            <Link
                              href='https://cadmenclinic.ca.zenoti.com/webstoreNew/services'
                              className={`rounded border border-teal-600 ${isServiceClass && !scrolled ? 'bg-transparent border-white text-white' : 'bg-teal-600 text-white hover:bg-teal-700'} px-10 py-3 text-center text-sm font-light`}
                            >
                              Book Now
                            </Link>
                          ) : null}
                        </div>
                        <div className='menu-btn-last'>
                          <a
                            href='tel:8722856769'
                            className={`header-btn rounded border border-teal-600 ${isServiceClass && !scrolled ? 'bg-transparent text-white border-white' : 'bg-teal-600 text-white hover:bg-teal-700'} px-5 py-3 text-sm font-light`}
                          >
                            <i className='fa-solid fa-phone mr-2'></i> (872)
                            285-6769
                          </a>
                        </div>
                      </div>
                    </Popover.Group>
                  </div>
                  {/* Mobile menu and search (lg-) */}
                  <div className='mr-auto md:hidden'>
                    <div className='relative md:hidden'>
                      <Hamburger
                        label='Show menu'
                        size={24}
                        direction='left'
                        toggled={open}
                        color={isServiceClass && !scrolled ? '#fff' : '#000'}
                        onToggle={(toggled) => {
                          if (toggled) {
                            setOpen(true)
                          } else {
                            setOpen(false)
                          }
                        }}
                      />
                    </div>
                  </div>
                  {/* Logo (lg-) */}
                  <div className='md:hidden'>
                    <Link href='/'>
                      <span className='sr-only'>ImageLab Med Spa</span>
                      <img
                        className='h-5 object-cover xxs:h-8'
                        src={isServiceClass && !scrolled ? '/logo_light.png' : '/site-logo.png'}
                        alt='ImageLab logo'
                      />
                    </Link>
                  </div>
                  <div className='ml-auto pl-3 md:hidden'>
                    {!router.pathname.includes('https://cadmenclinic.ca.zenoti.com/webstoreNew/services') ? (
                      <Link
                        href='https://cadmenclinic.ca.zenoti.com/webstoreNew/services'
                        className={`${isServiceClass && !scrolled ? 'bg-transparent border-white text-white' : 'bg-teal-600 text-white hover:bg-teal-700'} rounded border border-teal-600 px-5 py-2 text-xs font-light text-white hover:bg-teal-700`}
                      >
                        Book Now
                      </Link>
                    ) : (
                      <a
                        href='tel:8722856769'
                        className={`header-btn rounded border border-teal-600 bg-teal-600 px-3 py-3 text-sm font-light text-white hover:bg-teal-700 ${isServiceClass && !scrolled ? 'bg-transparent border-white text-white' : 'bg-teal-600 text-white hover:bg-teal-700'}`}
                      >
                        <i className='fa-solid fa-phone mr-2'></i>Click To Call
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
