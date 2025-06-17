import Container from '@/components/container'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HeartIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'

const navigation = {
  company: [
    { name: 'Services', href: '/services' },
    { name: 'Service Areas', href: '/service-areas' },
    { name: 'Conditions', href: '/conditions' },
    { name: 'Membership', href: '/membership' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    {
      name: 'Appointment Cancellation Policy',
      href: '/appointment-cancellation-policy'
    }
  ],
  connect: [{ name: 'Book Now', href: '/book-now' }],
  legal: [
    { name: 'Privacy', href: '/privacy' },
    { name: 'Accessiblity', href: '/accessibility' },
    { name: 'HIPAA', href: '/hipaa' },
    { name: 'Personal Data Request', href: '/personal-data-request' }
  ]
}

const Footer = () => {
  const router = useRouter();
  
  return (
    <>
    <footer className='bg-teal-700 px-5 pb-5 pt-10' aria-label='footer'>
      <Container classList='px-5'>
        <div className='grid grid-cols-12 gap-5 sm:gap-10'>
          <div className='col-span-12 sm:col-span-3'>
            <Link href='/'>
              <Image
                className='h-9 w-auto'
                src='/logo_light.png'
                alt='ImageLab Logo'
                height={100}
                width={200}
                draggable='false'
              />
            </Link>
            <div className='pt-5'>
              <p className='text-sm text-gray-300'>2033 W Roscoe St</p>
              <p className='text-sm text-gray-300'>Chicago, IL 60618</p>
              <p className='text-sm text-gray-300'>
                <a href='tel:+18722856769' className='text-sm text-gray-300 hover:underline'>
                  (872) 285-6769
                </a>
              </p>
              <a
                className='text-sm text-gray-300 hover:underline'
                href='mailto:info@imagelabmedspa.com'
              >
                info@imagelabmedspa.com{' '}
              </a>
              <address className='pt-3 text-sm not-italic text-gray-300'>
                <p className='text-sm text-gray-300'>Monday & Tuesday: 9AM - 7PM</p>
                <p className='text-sm text-gray-300'>Wednesday: 8AM - 3PM</p>
                <p className='text-sm text-gray-300'>Thursday & Friday: 9AM - 7PM</p>
                <p className='text-sm text-gray-300'>Saturday & Sunday: 8:30AM - 6:30PM</p>
              </address>
            </div>
          </div>
          <div className='col-span-12 sm:col-span-3'>
            <h3 className='text-sm font-semibold leading-6 text-white'>
              Company
            </h3>
            <ul role='list' className=''>
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className='text-sm leading-6 text-gray-300 hover:text-white'
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='col-span-12 sm:col-span-3'>
            <h3 className='text-sm font-semibold leading-6 text-white'>
              Legal
            </h3>
            <ul role='list' className=''>
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className='text-sm leading-6 text-gray-300 hover:text-white'
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='col-span-12 sm:col-span-3'>
            <h3 className='pt-5 text-sm font-semibold leading-6 text-white md:pt-0'>
              Connect
            </h3>
            <ul role='list' className=''>
              {navigation.connect.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className='text-sm leading-6 text-gray-300 hover:text-white'
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li className='flex flex-row space-x-3 pt-3'>
                <a href='https://www.instagram.com/imagelabmedspa/' target='_blank'>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className='h-5 w-5 text-white'
                  />
                </a>
                <a
                  href='https://www.facebook.com/profile.php?id=100091962347273'
                  target='_blank'
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className='h-5 w-5 text-white'
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='mt-10 flex flex-col justify-between border-t border-white border-opacity-30 pt-5 text-xs text-gray-300 sm:flex-row'>
          <p className='text-sm text-gray-300'>
            &copy; {new Date().getFullYear()} <Link className='hover:underline' href='/'>ImageLab Med Spa</Link>, LLC. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
     {!router.pathname.includes('/book-now') ? (              
      <div className="floating-btn-wrap flex justify-center">
        <a className="floating-btn shadow-2xl fixed right-4 z-50 bg-teal-600 px-5 py-2 font-medium text-white hover:bg-teal-700" href="tel:+18722856769">
          <i className="fa-solid fa-phone"></i><span className="ml-3">Questions? Click to call</span>
        </a>
      </div>
    ): null}
    </>
  )
}

export default Footer
