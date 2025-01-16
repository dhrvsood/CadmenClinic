import { Popover, Transition } from '@headlessui/react'
import Hamburger from 'hamburger-react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Fragment, useEffect, useState } from 'react'
import { categories } from '@/doc/categories';
import { orderBy } from 'lodash'
import MobileMenu from './mobile_menu'
import { PhoneIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import siteLogo from '../../public/site-logo.png';

const navigation = {
  pages: [
    { name: 'Conditions', href: '/conditions' },
    { name: 'About', href: '/about' },
    { name: 'Shop', href: 'https://e370ne-nc.myshopify.com/collections/frontpage' },
    { name: 'Blog', href: '/blog' },
  ]
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [navItems, setNavItems] = useState([])

  const servicesToSkip = [
    'semaglutide-therapy-CADMENClinic',
    'tirzepatide-weight-loss-injections',
    'glp-1-weight-loss-injections-semaglutide',
    'semaglutide-clinic-CADMENClinic',
    'slimshot-therapy-CADMENClinic',
    'semaglutide-injections-CADMENClinic',
    'microneedling-CADMENClinic'
  ]

  const pathSegments = router.asPath.split("/");
  const nonEmptySegments = pathSegments.filter(segment => segment !== "");
  const slug = nonEmptySegments.length > 0 ? router.asPath.split("/").filter(segment => segment !== "")[nonEmptySegments.length - 1] : null;
  const skip = servicesToSkip.includes(slug);

  useEffect(() => {
    setNavItems(categories);
  }, [])

  return (
    <div className='fixed z-40 w-full border-b border-gray-100 bg-white shadow-sm'>
      {/* Mobile menu */}
      <MobileMenu
        open={open}
        setOpen={setOpen}
        navItems={navItems}
        navigation={navigation}
      />
      {!router.pathname.includes('payment-plan') && (
        <div className='bg-customBlack'>
          <Link
            href='https://www.beautifi.com/doctors/cadmen-clinic/'
            target='_blank'
            className='flex w-full justify-center py-1 text-xs text-white'
          >
            0% Financing Now Available
          </Link>
        </div>
      )}

      <header className='relative'>
        <nav aria-label='Top'>
          <div className='bg-white'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
              <div>
                <div className='flex flex-row items-center justify-between py-3'>
                  {/* Logo (lg+) */}
                  <div className='hidden md:flex md:flex-1 md:items-center'>
                    <Link href='/'>
                      <span className='sr-only'>CADMEN Clinic</span>
                      <Image height={40} width={0} src={siteLogo} alt='CADMEN logo' />
                    </Link>
                  </div>

                  <div className='hidden h-full md:flex md:justify-center md:grow'>
                    {/* Flyout menus */}
                    <Popover.Group className='inset-x-0 bottom-0 px-4 md:grow'>
                      <div className='flex h-full items-center justify-center space-x-3 lg:space-x-8'>
                        <Popover className='flex ml-auto'>
                          {({ open }) => (
                            <>
                              <div className='relative flex'>
                                <Popover.Button
                                  className={classNames(
                                    open
                                      ? 'border-beaver/90 text-beaver/90'
                                      : 'text-gray-700 hover:text-beaver/90',
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
                                    'hover:text-beaver/90',
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
                                                    href={`/services${service.slug}`}
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
                            className='flex items-center text-sm font-medium text-gray-700 hover:border-b-2 hover:text-beaver'
                          >
                            {page.name}
                          </Link>
                        ))}
                        <div className="menu-btn-first ml-auto">
                          {!router.pathname.includes('/book-now') ? (
                            <Link
                              href={'https://cadmenclinic.janeapp.com/'}
                              target='_blank'
                              className='rounded border border-beaver/90 bg-beaver/90 px-10 py-3 text-center text-sm font-light text-white hover:bg-beaver'
                            >
                              Book Now
                            </Link>
                          ) : null}
                        </div>
                        <div className="menu-btn-last">
                          <a href='tel:4165111337'
                            className='flex flex-row items-center justify-start gap-3 header-btn rounded border border-beaver/90 bg-beaver/90 px-5 py-3 text-sm font-light text-white hover:bg-beaver'>
                            <PhoneIcon className='w-4' />
                            <p>(416) 511-1337</p>
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
                      <span className='sr-only'>CADMEN Clinic</span>
                      <img
                        className='h-5 object-cover xxs:h-8'
                        src='/site-logo.png'
                        alt='CADMEN logo'
                      />
                    </Link>
                  </div>
                  <div className='ml-auto pl-3 md:hidden'>
                    {!router.pathname.includes('/book-now') ? (
                      <Link
                        href={'https://cadmenclinic.janeapp.com/'}
                        className='rounded border border-beaver/90 bg-beaver/90 px-5 py-2 text-xs font-light text-white hover:bg-beaver'
                      >
                        Book Now
                      </Link>
                    ) : (
                      <a href='tel:8722856769'
                        className='header-btn rounded border border-beaver/90 bg-beaver/90 px-3 py-3 text-sm font-light text-white hover:quicsand-dark'>
                        <i className="fa-solid fa-phone mr-2"></i>Click To Call
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
