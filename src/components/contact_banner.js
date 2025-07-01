import Link from 'next/link'

import Container from './container'

const ContactBanner = () => (
  <section className='mt-10 bg-dawnPink px-5 py-20'>
    <Container>
      <div className='grid items-center gap-10 md:grid-cols-2'>
        <div className='flex flex-col space-y-5'>
          <h3 className='text-center font-display text-4xl font-light text-black md:text-left'>
            Not Sure What’s Right For You?
          </h3>
          <p className='text-teal-900'>
            Schedule a skin analysis consultation with one of our expert
            providers to determine what treatment is right for you
          </p>
        </div>
        <Link
            href='/book-now'
            className='rounded border py-5 text-center font-medium tracking-wider text-black hover:bg-beaver hover:text-white bg-white'
          >
            Schedule A Free Consultation
          </Link>
      </div>
    </Container>
  </section>
)

export default ContactBanner
