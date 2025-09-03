import { useRouter } from 'next/router'
import { useEffect } from 'react'

function PaymentSuccess() {
  const router = useRouter()
  const { success, message } = router.query

  const paymentStatus =
    success === undefined
      ? undefined
      : success === '0'
        ? 'failed'
        : 'successful'

  useEffect(() => {
    fetch('/api/logger', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        paymentStatus: paymentStatus
      })
    })
    if (typeof success !== 'undefined') {
      window.top.postMessage(
        { type: 'paymentStatus', status: paymentStatus },
        '*'
      )
    }
  }, [success, paymentStatus])

  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-100'>
      <div className='w-170 rounded-lg bg-white p-8 text-center shadow-lg'>
        <h2 className='mb-6 text-2xl font-bold'>Payment Method Status</h2>
        {paymentStatus === undefined ? (
          <div className='text-red-500'>
            <svg
              className='mx-auto mb-4 h-16 w-16 text-red-500'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M18.364 5.636a9 9 0 11-12.728 0'
              ></path>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M18.364 18.364a9 9 0 01-12.728 0'
              ></path>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M12 9v2m0 4h.01'
              ></path>
            </svg>

            <p className='text-xl text-red-500'>
              Something went wrong. Please call/text (416) 551-1137 to complete your booking.
            </p>
          </div>
        ) : (
          <div
            className={`mb-6 ${paymentStatus === 'successful' ? 'text-green-500' : 'text-red-500'}`}
          >
            {paymentStatus === 'successful' ? (
              <div>
                <svg
                  className='mx-auto mb-4 h-16 w-16 text-green-500'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M9 12l2 2 4-4M12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z'
                  ></path>
                </svg>

                <p className='text-xl text-green-500'>
                  Card Added Successfully!
                </p>

                {paymentStatus === 'successful' && message && (
                  <div className='mt-2 text-sm text-gray-500'>
                    <p>Message:</p>
                    <code className='whitespace-nowrap md:whitespace-normal'>
                      {message}
                    </code>
                  </div>
                )}

                <div className='mt-8 text-sm font-bold text-black'>
                  <p className='mt-1 text-sm'>
                    Please stay on this page while we confirm your booking.
                  </p>

                  <style jsx>{`
                    @keyframes blink {
                      0%,
                      100% {
                        opacity: 1;
                      }
                      50% {
                        opacity: 0;
                      }
                    }
                  `}</style>
                </div>
              </div>
            ) : (
              <div>
                <svg
                  className='mx-auto mb-4 h-16 w-16 text-red-500'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M18.364 5.636a9 9 0 11-12.728 0'
                  ></path>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M18.364 18.364a9 9 0 01-12.728 0'
                  ></path>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M12 9v2m0 4h.01'
                  ></path>
                </svg>

                <p className='text-xl text-red-500'>
                  Card addition failed. Please call/text (416) 551-1137 to complete your booking.
                </p>
              </div>
            )}
            {paymentStatus === 'failed' && message && (
              <div className='text-sm text-gray-500'>
                <p>Message:</p>
                <code className='break-all'>{message}</code>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default PaymentSuccess
