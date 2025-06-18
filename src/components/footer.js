import Container from '@/components/container'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { useRouter } from 'next/router'
import siteLogoWhite from '../../public/site-logo-white.png';


const navigation = {
  company: [
    { name: 'Services', href: '/services' },
    { name: 'Conditions', href: '/conditions' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    {
      name: 'Appointment Cancellation Policy',
      href: '/appointment-cancellation-policy'
    }
  ],
  connect: [{ name: 'Book Now', href: 'https://cadmenclinic.ca.zenoti.com/webstoreNew/services' }],
  legal: [
    { name: 'Privacy', href: '/privacy' },
    { name: 'Accessiblity', href: '/accessibility' },
  ]
}

const Footer = () => {
  const router = useRouter();
  
  return (
    <>
    <footer className='bg-beaver px-5 pb-5 pt-10 text-wildSand' aria-label='footer'>
      <Container classList='px-5'>
        <div className='grid grid-cols-12 gap-5 sm:gap-10'>
          <div className='col-span-12 sm:col-span-3'>
            <Image
              className='h-9 w-auto'
              src={siteLogoWhite}
              alt='CADMEN Clinic Logo'
              height={100}
              width={200}
              draggable='false'
            />
            <div className='pt-5'>
              <p className='text-sm'>240 Queen St W (2nd Floor)</p>
              <p className='text-sm'>Toronto, ON, M5V1Z7</p>
              <p className='text-sm'>
                <a href='tel:+1416551137' className='text-sm  hover:underline'>
                (416) 551-1137
                </a>
              </p>
              <a
                className='text-sm hover:underline'
                href='mailto:info@cadmenclinic.ca'
              >
                info@cadmenclinic.ca{' '}
              </a>
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
                    className='text-sm leading-6 hover:text-white'
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
                    className='text-sm leading-6 hover:text-white'
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
                    className='text-sm leading-6 hover:text-white'
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li className='flex flex-row space-x-3 pt-3'>
                <a href='https://www.instagram.com/cadmenclinic/?hl=en' target='_blank'>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className='h-5 w-5 text-white'
                  />
                </a>
                <a
                  href='https://www.facebook.com/CADMENclinic/'
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
        <div className='mt-10 flex flex-col justify-between border-t border-white border-opacity-30 pt-5 text-xs sm:flex-row'>
          <p className='text-sm'>
            &copy; {new Date().getFullYear()} CADMEN CLINIC ™ All rights reserved.
          </p>
          <div className='flex flex-row items-center space-x-2 pt-3 sm:pt-0'>
            
          </div>
        </div>
      </Container>
    </footer>
     {!router.pathname.includes('/book-now') ? (              
      <div className="floating-btn-wrap flex justify-center">
        <a className="floating-btn shadow-2xl fixed right-4 z-50 bg-quicksand-normal px-5 py-2 font-medium text-white hover:bg-quicksand-dark" href="tel:+14165111337">
          <i className="fa-solid fa-phone"></i><span className="ml-3">Questions? Click to call</span>
        </a>
      </div>
    ): null}
    </>
  )
}

export default Footer
