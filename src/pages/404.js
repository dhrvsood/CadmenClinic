import Link from 'next/link'

const Page404 = () => {
  return (
    <>
      <div className='grid min-h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8'>
        <div className='text-center'>
          <p className='text-base font-semibold text-[#9a7f71]'>404</p>
          <h1 className='font-display text-5xl'>Page not found</h1>
          <p className='mt-6 text-base leading-7 text-gray-600'>
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <Link
              href='/'
              className='rounded-md bg-[#9a7f71] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#9a7f71] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600'
            >
              Go back home
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page404
