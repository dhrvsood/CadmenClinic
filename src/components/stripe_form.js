import { Elements } from '@stripe/react-stripe-js'
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState
} from 'react'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

const CheckoutForm = forwardRef(function CheckoutForm(props, ref) {
  const stripe = useStripe()
  const elements = useElements()

  const [message, setMessage] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useImperativeHandle(ref, () => ({
    submit: (payload) => {
      return new Promise(async (resolve, reject) => {
        if (!stripe || !elements) {
          reject('Stripe has not initialized yet.')
          return
        }

        setIsLoading(true)

        try {
          const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            redirect: 'if_required',
            confirmParams: {
              receipt_email: payload.email
            }
          })

          if (error) {
            setMessage(error.message)
            reject(error)
          } else {
            setMessage('Payment succeeded!')
            resolve(paymentIntent)
          }
        } catch (err) {
          setMessage('An error occurred during payment submission.')
          reject(err)
        } finally {
          setIsLoading(false)
        }
      })
    }
  }))

  useEffect(() => {
    if (!stripe) {
      return
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret'
    )

    if (!clientSecret) {
      return
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case 'succeeded':
          setMessage('Payment succeeded!')
          break
        case 'processing':
          setMessage('Your payment is processing.')
          break
        case 'requires_payment_method':
          setMessage('Your payment was not successful, please try again.')
          break
        default:
          setMessage('Something went wrong.')
          break
      }
    })
  }, [stripe])

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Call the submit function on the ref
    ref.current.submit()
  }

  return (
    <form id='payment-form' onSubmit={handleSubmit}>
      <PaymentElement id='payment-element' />
      {/* <button disabled={isLoading || !stripe || !elements} id='submit'>
        {isLoading ? 'Processing…' : 'Pay now'}
      </button> */}
      {message && <div id='payment-message'>{message}</div>}
    </form>
  )
})

const StripeForm = forwardRef(function StripeForm({ payload }, ref) {
  const [clientSecret, setClientSecret] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    // Function to create PaymentIntent

    const createPaymentIntent = async () => {
      try {
        const response = await axios.post(
          '/api/stripe/create-payment-intent',
          payload,
          {
            headers: { 'Content-Type': 'application/json' }
          }
        )
        setClientSecret(response.data.clientSecret)
      } catch (err) {
        setError(err.response.data.message || err.message) // Set the error message if there is an error
      }
    }

    createPaymentIntent()
  }, [payload])

  const appearance = {
    theme: 'stripe'
  }
  const options = {
    clientSecret,
    appearance
  }

  return (
    <div className='mx-auto max-w-lg'>
      <h2 className='text-center font-bold my-3'>Secure Your Appointment</h2>
      <p className='py-3 text-md'>
        A $10 deposit secures your consultation. <b>This is refunded when you attend!</b>
      </p>
      {error && (
        <div className='error-message py-2 text-center text-red-600'>
          Error: {error}
        </div>
      )}

      {clientSecret && (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm ref={ref} />
        </Elements>
      )}


    </div>
  )
})

export default StripeForm
