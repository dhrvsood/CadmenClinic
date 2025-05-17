import { usStates } from '@/doc/us_states'
// import { dataRequestFormPost } from '@/utils/contact'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'
import { ErrorMessage, Field, Formik } from 'formik'
import React, { Fragment, useCallback, useState } from 'react'
import CanvasSignature from 'react-signature-canvas'

const Signature = React.forwardRef((props, ref) => (
  <CanvasSignature
    penColor='black'
    {...props}
    canvasProps={{
      className: 'h-48 border border-gray-200 w-full bg-gray-100'
    }}
    ref={ref}
  />
))

Signature.displayName = 'Signature'

const DataRequestForm = () => {
  const [showModal, setShowModal] = useState(false)
  const ref = React.createRef()

  const clearSignatureCanvas = useCallback(() => {
    ref?.current?.clear()
    // setCanvas(undefined);
    // setCanvasVisibility(false);
  }, [])

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          firstName: '',
          lastName: '',
          phone: '',
          city: '',
          zipcode: '',
          state: '',
          address: '',
          address2: '',
          signature: null
        }}
        validate={(values) => {
          const current = ref.current
          const errors = {}
          if (current.isEmpty()) {
            errors.signature = 'Required'
          } else if (!values.email) {
            errors.email = 'Required'
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address'
          }
          return errors
        }}
        onSubmit={(values, { resetForm }) => {
          const current = ref.current
          const data = current.toDataURL()
          const postData = { ...values, signature: data }
          //dataRequestFormPost(postData)
          setShowModal(true)
          setTimeout(() => {
            setShowModal(false)
            resetForm()
            window.location.reload()
          }, '3000')
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, setValues }) => (
          <form onSubmit={handleSubmit} className='flex flex-col space-y-5'>
            <label htmlFor='email' className='text-sm'>
              Email
            </label>
            <input
              type='email'
              name='email'
              className='rounded border border-gray-200'
              required
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <label htmlFor='phone' className='text-sm'>
              Phone
            </label>
            <input
              type='text'
              name='phone'
              className='rounded border border-gray-200'
              required
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
            />
            <label htmlFor='firstName' className='text-sm'>
              First Name
            </label>
            <input
              type='text'
              name='firstName'
              className='rounded border border-gray-200'
              required
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
            />
            <label htmlFor='lastName' className='text-sm'>
              Last Name
            </label>
            <input
              type='text'
              name='lastName'
              className='rounded border border-gray-200'
              required
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
            />
            <label htmlFor='address' className='text-sm'>
              Address
            </label>
            <input
              type='text'
              name='address'
              className='rounded border border-gray-200'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.address}
            />
            <label htmlFor='address2' className='text-sm'>
              Address 2
            </label>
            <input
              type='text'
              name='address2'
              className='rounded border border-gray-200'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.address2}
            />
            <label htmlFor='city' className='text-sm'>
              City
            </label>
            <input
              type='text'
              name='city'
              className='rounded border border-gray-200'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.city}
            />
            <label htmlFor='state' className='text-sm'>
              State
            </label>
            <Field
              as='select'
              name='state'
              className='rounded border border-gray-200'
            >
              <option value='' selected disabled hidden />
              {usStates.map((state) => (
                <>
                  <option value={state} selected>
                    {state}
                  </option>
                </>
              ))}
            </Field>
            <label htmlFor='zipcode' className='text-sm'>
              Zipcode
            </label>
            <input
              type='text'
              name='zipcode'
              className='rounded border border-gray-200'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.zipcode}
            />
            <p>
              The reason I am requesting deletion of my personal data is as
              follows:
            </p>
            <ul className='list-inside list-disc'>
              <li>Consent is being revoked for personal data processing</li>
            </ul>
            <p>
              The information that I am specifically aware of, that you process
              or retain, is as follows:
            </p>
            <ul className='list-inside list-disc'>
              <li>Full Name</li>
              <li>Address</li>
              <li>Phone Number</li>
              <li>Email Address</li>
              <li>Treatment History</li>
              <li>Before & After Photos of Patients (if applicable)</li>
            </ul>
            <p>
              Please respond via email to confirm that my request has been
              honored.
            </p>
            Sincerely,
            <label htmlFor='signature'>Signature</label>
            <Field
              name='signature'
              render={(props) => <Signature {...props} ref={ref} />}
              style={{ border: '1px solid black' }}
              onMouseUp={(e) => {
                setValues({
                  ...values,
                  [e.target.name]: e.target.toDataURL()
                })
              }}
            />
            <ErrorMessage
              name='signature'
              component='div'
              className='text-sm text-red-500'
            />
            <button onClick={clearSignatureCanvas}>clear</button>
            <button
              type='submit'
              className='rounded bg-teal-700 py-3 text-white hover:bg-teal-600'
            >
              Submit
            </button>
          </form>
        )}
      </Formik>

      <Transition.Root show={showModal} as={Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 z-10 overflow-y-auto'
          onClose={setShowModal}
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
              <Dialog.Overlay className='fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity' />
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
                  <div className='bg-blue-50 mx-auto flex h-12 w-12 items-center justify-center rounded-full'>
                    <CheckIcon
                      className='text-blue-500 h-6 w-6'
                      aria-hidden='true'
                    />
                  </div>
                  <div className='mt-3 text-center sm:mt-5'>
                    <Dialog.Title
                      as='h3'
                      className='text-lg font-medium leading-6 text-gray-900'
                    >
                      Submission Successful
                    </Dialog.Title>
                    <div className='mt-2'>
                      <p className='text-sm text-gray-500'>
                        A VIO representative will process your request. You will
                        be informed via email when your personal data has been
                        removed from our system. This may take up to 30 business
                        days.
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

export default DataRequestForm
