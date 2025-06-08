import { fbConversionsApi } from '@/utils/endpoints'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon, InformationCircleIcon } from '@heroicons/react/24/outline'
import axios from 'axios'
import { ErrorMessage, Field, Formik } from 'formik'
import Cookies from 'js-cookie'
import { Fragment, useState } from 'react'
import TagManager from 'react-gtm-module'
import { PatternFormat } from 'react-number-format'
import * as Yup from 'yup'

const getCSTDateTime = () =>
  new Date(
    new Date().getTime() - (new Date().getTimezoneOffset() - 360) * 60000
  ).toLocaleString()

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().min(3, 'Minimum 3 characters.').required('Required'),
  lastName: Yup.string().min(3, 'Minimum 3 characters.').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string()
    .matches(
      new RegExp(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/),
      'Phone number is not valid'
    )
    .required('Required'),
  service: Yup.string()
    .oneOf(
      [
        'membership',
        'semaglutide',
        'injectables',
        'skin',
        'lasers',
        'hair_wellness',
        'general-consultation'
      ],
      'Invalid service type'
    )
    .required('Service is required')
})

const serviceOptions = [
  { value: '', label: 'Select option' },
  { value: 'general-consultation', label: 'General Consultation' },
  { value: 'semaglutide', label: 'Semaglutide' },
  { value: 'injectables', label: 'Injectables' },
  { value: 'skin', label: 'Skin' },
  { value: 'hair_wellness', label: 'Hair + Wellness' }
]

const ComingSoon = () => {
  const PhoneInput = ({ field }) => (
    <PatternFormat
      {...field}
      className='mt-0 block w-full border-0 border-b-2 border-opacity-25 bg-transparent focus:border-black focus:ring-0'
      format='(###) ###-####'
      mask='_'
      required
    />
  )

  const [open, setOpen] = useState(false)
  const values = {}
  const fields = [
    {
      name: 'firstName',
      label: 'First Name',
      type: 'text',
      value: values.firstName
    },
    {
      name: 'lastName',
      label: 'Last Name',
      type: 'text',
      value: values.lastName
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      value: values.email
    },
    {
      name: 'phone',
      label: 'Phone',
      type: 'tel',
      value: values.phone
    }
  ]
  return (
    <>
      <Formik
        initialValues={{
          email: '',
          firstName: '',
          lastName: '',
          phone: '',
          service: ''
        }}
        validationSchema={SignupSchema}
        onSubmit={async (
          values,
          { isSubmitting, setSubmitting, resetForm, initialValues }
        ) => {
          let vals = values
          const newVals = {
            device: Cookies.get('device'),
            source: Cookies.get('_u_s'),
            referrer: Cookies.get('referrer'),
            medium: Cookies.get('_u_m'),
            campaign: Cookies.get('_u_c'),
            fbc: Cookies.get('_fbc'),
            fbp: Cookies.get('_fbp'),
            pixels: Object.keys(window.fbq?.instance?.pixelsByID || {}),
            event: 'lead',
            userAgent: window.navigator.userAgent,
            url: `${window.location.host}${window.location.pathname}`,
            currentTime: getCSTDateTime()
          }
          vals = { ...vals, ...newVals }

          const tagManagerArgs = {
            dataLayer: {
              event: 'lead'
            }
          }
          TagManager.dataLayer(tagManagerArgs)
          const res = await axios.post('/api/contact/coming-soon', vals)
          // console.log(res.data?.message?.status)
          // fbConversionsApi(vals)
          setOpen(true)
          setTimeout(() => {
            resetForm()
            setOpen(false)
          }, '3000')
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <form
            onSubmit={handleSubmit}
            className='flex w-full flex-col space-y-5 py-10'
          >
            {fields.map((field, i) =>
              field.type !== 'tel' ? (
                <div key={i}>
                  <label
                    htmlFor={field.name}
                    className='text-cream-900 text-sm'
                  >
                    {field.label}
                    <input
                      type={field.type}
                      name={field.name}
                      className='mt-0 block w-full border-0 border-b-2 border-opacity-25 bg-transparent focus:border-black focus:ring-0'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={field.values}
                      required
                    />
                    <ErrorMessage name={field.name}>
                      {(msg) => (
                        <div className='flex flex-row items-center space-x-3 py-2'>
                          <InformationCircleIcon className='h-5 w-5 text-red-600' />
                          <div className='ml-3 text-sm font-bold text-red-600'>
                            {msg}
                          </div>
                        </div>
                      )}
                    </ErrorMessage>
                  </label>
                </div>
              ) : (
                <div key={i}>
                  <label htmlFor='phone' className='text-cream-900 text-sm'>
                    Phone
                  </label>
                  <Field name='phone' component={PhoneInput} />
                  <ErrorMessage name='phone'>
                    {(msg) => (
                      <div className='flex flex-row items-center space-x-3 py-2'>
                        <InformationCircleIcon className='h-5 w-5 text-red-600' />
                        <div className='ml-3 text-sm font-bold text-red-600'>
                          {msg}
                        </div>
                      </div>
                    )}
                  </ErrorMessage>
                </div>
              )
            )}
            <div className='mb-4'>
              <label
                htmlFor='service'
                className='block text-sm font-medium text-gray-600'
              >
                Service
              </label>
              <Field
                id='service'
                name='service'
                as='select'
                className='mt-0 block w-full border-0 border-b-2 border-opacity-25 bg-transparent focus:border-black focus:ring-0'
              >
                {serviceOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name='service'
                component='div'
                className='text-red-500'
              />
            </div>

            <div className='flex flex-col pt-10'>
              <button
                type='submit'
                disabled={isSubmitting}
                className='rounded-lg bg-teal-600 py-3 text-white hover:bg-teal-400'
              >
                Get Early Access
              </button>
            </div>
          </form>
        )}
      </Formik>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 z-50 overflow-y-auto'
          onClose={setOpen}
        >
          <div className='flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity' />
            </Transition.Child>
            <span
              className='hidden sm:inline-block sm:h-screen sm:align-middle'
              aria-hidden='true'
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <div className='inline-block transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle'>
                <div>
                  <div className='mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-50'>
                    <CheckIcon
                      className='h-6 w-6 text-green-600'
                      aria-hidden='true'
                    />
                  </div>
                  <div className='mt-3 text-center sm:mt-5'>
                    <Dialog.Title
                      as='h3'
                      className='text-lg font-medium leading-6 text-gray-900'
                    >
                      Submission successful
                    </Dialog.Title>
                    <div className='mt-2'>
                      <p className='text-sm text-gray-500'>
                        Thank you for signing up! Be on the lookout for updates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

export default ComingSoon
