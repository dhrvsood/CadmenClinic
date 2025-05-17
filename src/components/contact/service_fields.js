import categories from '@/doc/form_services'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { ErrorMessage, Field } from 'formik'
import { sortBy } from 'lodash'
import React, { useState } from 'react'

const ServiceFields = ({ values, setFieldValue, step, setStep }) => {
  const [expandedService, setExpandedService] = useState(null)

  const handleServiceClick = (service) => {
    setFieldValue('service', service.title)
    setFieldValue('serviceTitle', service.title)
    setFieldValue('serviceId', service.id)
    setExpandedService(service.id)
  }

  return (
    <div className='flex flex-col space-y-1'>
      <div className='-mt-5 mb-5 flex w-full justify-center border border-gold-base bg-gold-base px-10 py-3 text-center text-white'>
        Enjoy 20% off your first treatment!
      </div>
      <h1 className='text-center font-display text-xl md:text-3xl'>
        Which treatment would you like to come in for?
      </h1>
      <legend className='pt-5 text-center'>
        {values.service
          ? `You've selected: ${values.serviceTitle}`
          : 'Select a service:'}
      </legend>

      {Object.entries(categories)
        .filter(([key, category]) => category.category === 'Consultation')
        .map(([key, category], i) => (
          <li key={i} className='flex flex-col space-y-2 py-5'>
            <p className='mb-1 pb-1 text-base font-medium text-black'>
              {category.category}
            </p>
            <div className='grid gap-5'>
              {sortBy(category.services, 'title').map((service, j) => (
                <div key={`${i}-${j}`} className='relative'>
                  <label
                    className={`block w-full cursor-pointer break-words rounded border-gray-300 px-5 py-5 text-sm shadow-sm hover:ring hover:ring-teal-800 focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50 md:text-base ${
                      values.serviceTitle === service.title
                        ? 'border border-teal-800 bg-teal-700 text-white'
                        : 'border border-gray-100 bg-white text-black'
                    }`}
                    onClick={() => handleServiceClick(service)}
                  >
                    <div className='flex flex-row items-center justify-between'>
                      <Field
                        type='radio'
                        name='service'
                        value={service.title}
                        className='hidden'
                      />
                      <span
                        className={`${expandedService === service.id ? 'font-bold' : ''}`}
                      >
                        {service.title}
                      </span>
                      <ChevronDownIcon
                        className={`ml-2 h-5 w-5 ${
                          expandedService === service.id
                            ? '-rotate-180 transform'
                            : ''
                        } text-teal-700 transition-transform duration-300 ease-in-out`}
                      />
                    </div>
                    {expandedService === service.id && (
                      <div
                        className={`mt-2 text-sm  ${values.serviceTitle === service.title ? 'text-white' : 'text-black'}`}
                      >
                        <span>{service.description}</span>
                        <div className='mt-4 flex justify-center'>
                          <button
                            type='button'
                            onClick={() => setStep(step + 1)}
                            className={`hidden w-full rounded border border-teal-700 bg-white px-2 py-3  text-xs font-semibold text-teal-700 sm:inline-block  ${
                              !values.serviceId
                                ? 'cursor-not-allowed opacity-50'
                                : ''
                            }`}
                            disabled={!values.serviceId}
                          >
                            Book Now
                          </button>
                        </div>
                      </div>
                    )}
                  </label>
                </div>
              ))}
            </div>
          </li>
        ))}

      {Object.entries(categories)
        .filter(([key, category]) => category.category !== 'Consultation')
        .map(([key, category], i) => (
          <li
            key={i}
            id={category.category}
            className='flex flex-col space-y-2 py-5'
          >
            <Disclosure
              key={values.category}
              defaultOpen={values.category === category.category}
            >
              {({ open }) => (
                <>
                  <Disclosure.Button className='flex w-full flex-row justify-between border-b-2 border-gray-300 pb-5 text-left'>
                    {category.category}
                    <ChevronDownIcon
                      className={`${
                        open ? '-rotate-180 transform' : ''
                      } h-5 w-5 text-black transition-transform duration-300 ease-in-out`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className='space-y-4 pt-4'>
                    {category.services.map((service, j) => (
                      <div key={`${i}-${j}`} className='relative'>
                        <label
                          className={`block w-full cursor-pointer break-words rounded border-gray-300 px-5 py-5 text-sm shadow-sm hover:ring hover:ring-teal-800 focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50 md:text-base ${
                            values.serviceTitle === service.title
                              ? 'border border-teal-800 bg-teal-700 text-white'
                              : 'border border-gray-100 bg-white text-black'
                          }`}
                          onClick={() => handleServiceClick(service)}
                        >
                          <div className='flex flex-row items-center justify-between'>
                            <Field
                              type='radio'
                              name='service'
                              value={service.title}
                              className='hidden'
                            />
                            <span
                              className={`${expandedService === service.id ? 'font-bold' : ''}`}
                            >
                              {service.title}
                            </span>
                            <ChevronDownIcon
                              className={`ml-2 h-5 w-5 ${
                                expandedService === service.id
                                  ? '-rotate-180 transform'
                                  : ''
                              } text-teal-700 transition-transform duration-300 ease-in-out`}
                            />
                          </div>
                          {expandedService === service.id && (
                            <div
                              className={`mt-2 text-sm  ${values.serviceTitle === service.title ? 'text-white' : 'text-black'}`}
                            >
                              <span>{service.description}</span>
                              <div className='mt-4 flex justify-center'>
                                <button
                                  type='button'
                                  onClick={() => setStep(step + 1)}
                                  className={`hidden w-full rounded border border-teal-700 bg-white px-2 py-3  text-xs font-semibold text-teal-700 sm:inline-block  ${
                                    !values.serviceId
                                      ? 'cursor-not-allowed opacity-50'
                                      : ''
                                  }`}
                                  disabled={!values.serviceId}
                                >
                                  Book Now
                                </button>
                              </div>
                            </div>
                          )}
                        </label>
                      </div>
                    ))}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </li>
        ))}
      <ErrorMessage
        name='service'
        component='div'
        className='text-sm text-red-600'
      />
    </div>
  )
}

export default ServiceFields
