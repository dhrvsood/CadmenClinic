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
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const navigation = {
  pages: [
    // { name: 'Conditions', href: '/conditions' },
    // { name: 'Shop', href: '/coming-soon' },
    { name: 'Learn More', href: '/about' },
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
            <div className='mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-4'>
              <div>
                <div className='flex flex-row items-center justify-between gap-12'>
                  {/* Logo (lg+) */}
                  <div className='hidden md:flex md:items-center'>
                    <Link href='/'>
                      <span className='sr-only'>CADMEN Clinic</span>
                      <Image height={50} width={0} src={siteLogo} alt='CADMEN logo' />
                    </Link>
                  </div>

                  <div className='hidden h-full md:flex md:justify-center md:grow'>
                    {/* Flyout menus */}
                    <Popover.Group className='inset-x-0 bottom-0 md:grow'>
                      <div className='flex justify-between h-full items-center space-x-3 lg:space-x-8'>
                        <div className='flex flex-row gap-8'>
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
                                      'text-base',
                                      'font-medium',
                                      'transition-colors',
                                      'duration-200',
                                      'ease-out',
                                      'hover:text-beaver/90',
                                      'hover:border-b-2'
                                    )}
                                  >
                                    In-Studio Treatments
                                    <ChevronDownIcon
                                      className={classNames(
                                        'ml-1 h-6 w-6 transform transition-transform duration-200 ease-out',
                                        open ? 'rotate-180' : 'rotate-0'
                                      )}
                                      aria-hidden="true"
                                    />
                                  </Popover.Button>

                                </div>

                                {/* Transition */}
                                <Transition
                                  as={Fragment}
                                  enter='transition ease-out duration-200'
                                  enterFrom='opacity-0'
                                  enterTo='opacity-100'
                                  leave='transition ease-in duration-150'
                                  leaveFrom='opacity-100'
                                  leaveTo='opacity-0'
                                >
                                  <Popover.Panel
                                    className='absolute inset-x-0 top-full text-base text-black shadow-md z-100'
                                    style={{
                                      background: `url("/graphics/circlesSvgDarkBrown.svg") bottom 0px right 0px / cover no-repeat, #ebdbd6`
                                    }}
                                  >
                                    <div className='relative' style={{ backgroundColor: 'transparent' }}>
                                      <div className='mx-auto max-w-7xl'>
                                        <ul
                                          role='list'
                                          className='grid grid-cols-3 gap-5 px-5 py-10'
                                        >
                                          {Object.entries(navItems).map(([key, category], i) => (
                                            // Navbar header -- Set link just for Hair Restoration Lander
                                            <li key={i} className='flex flex-col space-y-2'>
                                              {key === 'Hair Restoration' ? (
                                                <Popover.Button
                                                  as={Link}
                                                  href="/services/hair-restoration"
                                                  className='text-lg mb-1 max-w-[300px] border-b border-black pb-1 text-base font-medium text-black hover:underline'
                                                >
                                                  {key}
                                                </Popover.Button>
                                              ) : (
                                                <p className='text-lg mb-1 max-w-[300px] border-b border-black pb-1 text-base font-medium text-black'>
                                                  {key}
                                                </p>
                                              )}

                                              {/* Services within each category */}
                                              {orderBy(
                                                category.services,
                                                [
                                                  (service) => service.categoryOrder || Infinity,
                                                  'title'
                                                ],
                                                ['asc', 'asc']
                                              ).map((service, j) => (
                                                <div className="text-black" key={`${i}-${j}`}>
                                                  {/* conditional logic for coming soon pages in categories.js */}
                                                  <Popover.Button
                                                    as={Link}
                                                    className='text-md tracking-widest hover:underline'
                                                    href={`/services/${service.slug}`}
                                                  >
                                                    {service.title}
                                                  </Popover.Button>

                                                  {/* <Popover.Button
                                                    as={Link}
                                                    className='text-md tracking-widest hover:underline'
                                                    href={`/services${service.slug}`}
                                                  >
                                                    {service.title}
                                                  </Popover.Button> */}
                                                </div>
                                              ))}
                                            </li>
                                          ))}
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
                              className='flex items-center text-base font-medium text-gray-700 hover:border-b-2 hover:text-beaver'
                            >
                              {page.name}
                            </Link>
                          ))}
                        </div>
                        <div className='flex flex-row items-center gap-5'>
                          <a href='tel:4165511137'
                            className='flex flex-row items-center justify-start gap-3 header-btn rounded px-5 py-3 text-base text-beaver font-semibold'>
                            <PhoneIcon className='w-4' />
                            <p>(416) 551-1137</p>
                          </a>
                          {!router.pathname.includes('/book-now') ? (
                            <Link href='/book-now' className=''>
                              <button className='button navbar !py-[14px] !px-5 max-sm:w-full'>Book Now</button>
                            </Link>
                          ) : null}
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
                  {/* <div className='md:hidden'>
                    <Link href='/'>
                      <span className='sr-only'>CADMEN Clinic</span>
                      <Image
                        className='h-8 object-cover xxs:h-8 w-full'
                        src={siteLogo}
                        alt='CADMEN logo'
                      />
                    </Link>
                  </div> */}
                  <div className='md:hidden max-w-[160px]'>
                    <Link href='/'>
                      <span className='sr-only'>CADMEN Clinic</span>
                      <Image
                        src={siteLogo}
                        alt='CADMEN logo'
                        className='h-auto w-full object-contain'
                        width={160}
                        height={50}
                        priority
                      />
                    </Link>
                  </div>


                  <div className='ml-auto md:hidden'>
                    {!router.pathname.includes('/book-now') ? (
                      <Link
                        href={'/book-now'}
                        className='rounded border border-beaver/90 bg-beaver/90 px-1 sm:px-2 py-2 md:px-2 text-xs font-light text-white hover:bg-beaver max-sm:w-full max-sm:text-sm whitespace-nowrap'
                      >
                        Book Now
                      </Link>
                      // <Link href='/book-now' className=''>
                      //   <button className='button navbar !py-[14px] !px-5 max-sm:w-full'>Book Now</button>
                      // </Link>
                      // <Link href='/book-now' className=''>
                      //   <button
                      //     className='button navbar !py-[14px] !px-5 max-sm:w-full max-sm:text-sm whitespace-nowrap'
                      //   >
                      //     Book Now
                      //   </button>
                      // </Link>

                    ) : (
                      // <Link href='tel:1416551137' className=''>
                      //   <button className='button navbar !py-[14px] !px-5 max-sm:w-full'>
                      //     <FontAwesomeIcon icon={faPhone} className="mr-2" />
                      //     <span className="hidden sm:inline">Call</span>
                      //   </button>
                      // </Link>
                      <a
                        href="tel:1416551137"
                        className="header-btn rounded border border-beaver/90 bg-beaver/90 px-3 py-3 text-base font-light text-white hover:quicsand-dark flex items-center"
                      >
                        {/* <FontAwesomeIcon icon={faPhone} className="mr-2" /> */}
                        <PhoneIcon className='w-4' />
                        <span className="hidden sm:inline px-1">Call Now</span>
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