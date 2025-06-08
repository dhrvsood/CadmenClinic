import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'
import axios from 'axios'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import Cookies from 'js-cookie'
import { Fragment, useState } from 'react'
import * as Yup from 'yup'

const getCSTDateTime = () =>
  new Date(
    new Date().getTime() - (new Date().getTimezoneOffset() - 360) * 60000
  ).toLocaleString()

const NewsLetterForm = ({
  CTAlabel,
}) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Formik
        initialValues={{ email: '' }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid email address')
            .required('Required')
        })}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
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

          const res = await axios.post('/api/contact/newsletter', vals)
          // console.log(res.data?.message?.status)
          setOpen(true)
          setTimeout(() => {
            resetForm()
            setOpen(false)
          }, 3000)
        }}
      >
        {({ isSubmitting }) => (
          <Form
            aria-label='Email Newsletter Form'
            className='flex flex-col items-center space-y-5 sm:flex-row sm:space-x-5 sm:space-y-0'
          >
            <div className='relative flex w-full'>
              <label htmlFor='email' className='sr-only'>
                Email Address
              </label>
                <Field
                  name='email'
                  type='email'
                  className='w-full rounded py-3'
                />
                <ErrorMessage
                  name='email'
                  component='div'
                  className='absolute translate-y-10 bg-red-600 p-1 text-xs font-bold text-white'
                />
            </div>
            <button
              type='submit'
              className='w-40 rounded border-2 border-teal-600 bg-teal-600 px-5 py-3 text-sm font-light text-white hover:bg-teal-700'
              disabled={isSubmitting}
            >
              {CTAlabel || 'Submit'}
            </button>
          </Form>
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
export default NewsLetterForm
