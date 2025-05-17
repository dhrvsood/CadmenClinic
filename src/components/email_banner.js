import NewsLetterForm from '@/components/contact/newsletter_form'
import Container from '@/components/container'
import Image from 'next/image'

const EmailBanner = () => (
  <section className='relative overflow-hidden'>
    <Image
      draggable='false'
      src='/slider/1.jpg'
      alt='Smiling woman'
      fill={true}
      className='object-cover'
    />
    <div className='absolute z-10 h-full w-full bg-teal-900 opacity-80 md:bg-gradient-to-r md:from-black md:to-white md:opacity-70' />
    <Container classList='relative z-20 py-20 px-5'>
      <div className='order-2 grid items-center gap-10 md:order-1 md:grid-cols-2'>
        <div className='flex flex-col items-start space-y-5'>
          <h2 className='font-display text-5xl text-white'>Join the Club</h2>
          <p className='text-white'>
            Sign up for exclusive offers and updates.
          </p>
          <p className='max-w-sm text-xs text-white'>
            You agree to subscribe to our newsletter and receive periodic
            updates, news, and special offers from ImageLab Med Spa. You may
            unsubscribe at any time by clicking the "unsubscribe" link at the
            bottom of our emails.
          </p>
        </div>
        <div className='order-1 md:order-2'>
          <NewsLetterForm />
        </div>
      </div>
    </Container>
  </section>
)

export default EmailBanner
