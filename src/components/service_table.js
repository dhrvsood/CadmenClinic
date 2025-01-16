import { sortBy } from 'lodash'
import Image from 'next/image'
import Link from 'next/link'
import Container from './container'

const ServiceTable = ({ services, title }) => (
  <section className='relative pt-32 pb-10'>
    <h1 className='pb-10 text-center font-display text-5xl'>{title ? title : 'All Services'}</h1>
    <Container classList='relative z-10 md:px-5 mb-10'>
      <div className='flex flex-col items-start'>
        <p className='leading-relaxed text-center'>
          At CADMEN Clinic, we offer a wide range of advanced, non-invasive treatments designed to help you achieve your beauty goals. Our expert team provides personalized care to address your unique needs, ensuring you receive the best possible experience with every visit. Whether you’re looking for skin rejuvenation, body contouring, or other aesthetic services, we have options that can be customized for you. Explore our full list of treatments below to discover how we can help you enhance your natural beauty and boost your confidence.
        </p>
      </div>
    </Container>
    <Container classList='px-5 pt-5'>
      <dl className='grid gap-10 sm:grid-cols-2 lg:grid-cols-3'>
        {sortBy(services, 'title').map((service, j) => (
          <div key={j} className='relative rounded border border-gray-200'>
            <Image
              className='h-[450px] w-full rounded object-cover object-center'
              draggable='false'
              src={service.heroImage.asset.url}
              alt={
                service.heroImage.alt ? service.heroImage.alt : service.title
              }
              width={500}
              height={500}
              priority
            />
            <div className='absolute bottom-0 left-0 right-0 h-[60%] rounded-bl rounded-br bg-gradient-to-t from-black to-transparent' />
            <div className='absolute bottom-3 left-3 flex flex-col p-5'>
              <dt>
                <h2 className='text-left font-serif text-2xl text-white'>
                  {service.title}
                </h2>
              </dt>
              <dd>
                <p className='h-[100px] py-2 text-left text-sm text-white'>
                  {service.subTitle}
                </p>
              </dd>
              <div>
                <Link
                  href={`/services/${service.slug}`}
                  className='rounded border border-white px-3 py-2 text-sm text-white hover:bg-white hover:text-black'
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </dl>
    </Container>
  </section>
)

export default ServiceTable
