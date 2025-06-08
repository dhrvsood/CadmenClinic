import Container from '@/components/container'
import { Disclosure } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const FaqsLanding = ({ data, service }) => (
  <section className='bg-teal-50 pt-10 md:pt-0'>
    <Container>
      <div className='flex flex-col items-center w-full px-5'>
        <h2 className='text-center font-display text-4xl font-light sm:text-left md:text-6xl mt-20 '>
          Frequently Asked Questions
        </h2>
        <ul
          role='list'
          aria-label='Frequently Asked Questions'
          className='pt-10 w-full'
        >
          {data.map((faq, index) => (
            <li key={index} className='mb-5'>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className='flex w-full flex-row items-center justify-between border-b-2 border-gray-700 pb-5 text-left font-display text-lg'
                      aria-expanded={open}
                      aria-controls={`faq-answer-${index}`}
                    >
                      <span className='pr-10'>{faq.question}</span>
                      <ChevronRightIcon
                        className={`ml-2 h-5 w-5 transition-transform ${open ? 'rotate-90 transform' : ''
                          }`}
                        aria-hidden='true'
                      />
                    </Disclosure.Button>
                    {open && (
                      <Disclosure.Panel
                        id={`faq-answer-${index}`}
                        className='mt-5 rounded-xl bg-teal-100'
                      >
                        <p className='prose p-5 w-full max-w-full'>{faq.answer}</p>
                      </Disclosure.Panel>
                    )}
                  </>
                )}
              </Disclosure>
            </li>
          ))}
        </ul>
          <Link
            href={`/book-now`}
            className='rounded border font-bold border-teal-600 bg-teal-600 my-10 px-10 py-2 w-full text-center text-white hover:bg-teal-700'
          >
            Get Started Now
          </Link>
      </div>
    </Container>
  </section>
)
export default FaqsLanding
