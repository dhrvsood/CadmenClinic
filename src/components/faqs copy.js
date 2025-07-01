import Container from '@/components/container'
import { Disclosure } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

const Faqs = ({ data, title }) => (
  <section className='bg-teal-50 pt-10 md:pt-0'>
    <Container>
      <div className='grid items-center gap-10 px-5 md:grid-cols-2'>
        <h2 className='text-center font-display text-4xl font-light sm:text-left md:text-6xl'>
          {title ? title : (
            <>
              Curious? <br className='hidden md:block' />
              We have answers.
            </>
          )}
        </h2>
        <ul
          role='list'
          aria-label='Frequently Asked Questions'
          className='px-5 py-10'
        >
          {data.map((faq, index) => (
            <li key={index} className='pb-10'>
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
                        <p className='prose p-5'>{faq.answer}</p>
                      </Disclosure.Panel>
                    )}
                  </>
                )}
              </Disclosure>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  </section>
)
export default Faqs
