import Container from '@/components/container'
import Link from 'next/link'

const Testimonials = () => (
  <section className='bg-teal-100 py-20'>
    <Container>
      <h2 className='text-center font-display text-5xl font-light tracking-wide'>
        Customer Experiences
      </h2>
      <div className='flex justify-center py-10'>
        <Link
          href='/book-now'
          className='rounded bg-teal-600 px-5 py-3 font-light uppercase text-white hover:bg-teal-700'
        >
          See All Services
        </Link>
      </div>
    </Container>
  </section>
)
export default Testimonials
