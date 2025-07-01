import { Dialog, Disclosure, Transition } from '@headlessui/react'
import { ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { orderBy } from 'lodash'
import Link from 'next/link'
import React, { Fragment } from 'react'

const MobileMenu = ({ open, setOpen, navItems, navigation }) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as='div' className='relative z-[99] lg:hidden' onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter='transition-opacity ease-linear duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity ease-linear duration-300'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 z-40 flex'>
          <Transition.Child
            as={Fragment}
            enter='transition ease-in-out duration-300 transform'
            enterFrom='-translate-x-full'
            enterTo='translate-x-0'
            leave='transition ease-in-out duration-300 transform'
            leaveFrom='translate-x-0'
            leaveTo='-translate-x-full'
          >
            <Dialog.Panel className='relative flex w-full max-w-sm -translate-y-2 flex-col overflow-y-auto overflow-x-hidden bg-white pb-12 shadow-xl '>
              <div className='flex px-4 pb-2 pt-10'>
                <button
                  type='button'
                  className='-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400'
                  onClick={() => setOpen(false)}
                >
                  <span className='sr-only'>Close menu</span>
                  <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                </button>
              </div>
              {/* Mobile Links */}
              <div className='flex w-full flex-col'>
                {Object.entries(navItems).map(([key, category], i) => (
                  <div key={i} className='border-b'>
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className='flex w-full items-center justify-between p-4 text-left'>
                            {key === 'Hair Restoration' ? (
                              <Link
                                href='/services/hair-restoration'
                                onClick={() => setOpen(false)}
                                className='text-sm font-bold hover:underline'
                              >
                                {key}
                              </Link>
                            ) : (
                              <p className='text-sm font-bold'>{key}</p>
                            )}

                            {/* <p className='text-sm font-bold'>{key}</p> */}
                            <ChevronRightIcon
                              className={`h-5 w-5 ${
                                open ? 'rotate-90 transform' : ''
                              }`}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel>
                            {orderBy(
                              category.services,
                              [
                                (service) => service.categoryOrder || Infinity,
                                'title'
                              ],
                              ['asc', 'asc']
                            ).map((service, j) => (
                              <div
                                key={`${i}-${j}`}
                                className='px-4 py-2 text-sm'
                              >
                                <Link
                                  className='hover:underline'
                                  href={`/services${service.slug}`}
                                  onClick={() => setOpen(false)}
                                >
                                  {service.title}
                                </Link>
                              </div>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </div>
                ))}
              </div>
              <div className='flex flex-col divide-y'>
                <div className='flex p-5'>
                  <Link
                    onClick={() => setOpen(false)}
                    href='/services'
                    className='text-sm font-bold'
                  >
                    View All Services
                  </Link>
                </div>
                {navigation.pages.map((page) => (
                  <div key={page.name} className='flex p-5'>
                    <Link
                      onClick={() => setOpen(false)}
                      href={page.href}
                      className='text-sm font-bold'
                    >
                      {page.name}
                    </Link>
                  </div>
                ))}
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default MobileMenu
