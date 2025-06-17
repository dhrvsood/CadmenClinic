import BaseButton from '@/components/base_button'
import Container from '@/components/container'
import Image from 'next/image'

const MembershipBanner = () => (
  <section className='relative overflow-hidden pt-20'>
    <Container classList='relative z-10 md:px-5'>
      <div className='grid items-center gap-10 border border-gray-100 bg-gray-50 md:grid-cols-2'>
        <div className='order-2 flex flex-col items-start space-y-5 px-10 pb-10 md:order-1 md:py-10 md:pb-0'>
          <h2 className='font-display text-4xl font-light tracking-wide md:text-5xl'>
            ImageLab Med Spa Membership
          </h2>
          <p className='leading-relaxed'>
            Elevate your self-care experience with ImageLab's membership
            program. Unlock a world of benefits, including exclusive discounts,
            special gifts, VIP events, and premium promotions on our most
            sought-after treatments.
          </p>
          <div className='pb-0 pt-5 md:pb-10 lg:pb-0'>
            <BaseButton text='Learn More' path='/membership' />
          </div>
        </div>
        <div className='order-1 h-full w-full md:order-2'>
          <Image
            className='h-full w-full object-cover object-center'
            draggable='false'
            src='/media/woman_face1.png'
            alt='Smiling woman'
            width={500} // The width of the image
            height={500} // The height of the image
            //layout='responsive'
          />
        </div>
      </div>
    </Container>
  </section>
)

export default MembershipBanner
