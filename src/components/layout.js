import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import Cookies from 'js-cookie'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import PlasmicTopNav from './plasmic/image_lab_2024/PlasmicTopNav'


const Layout = ({ children }) => {
  const router = useRouter()

  const getDevice = (agent) => {
    const devices = [
      { keyword: 'iPhone', name: 'iPhone' },
      { keyword: 'Windows', name: 'Windows Computer' },
      { keyword: 'Mac', name: 'Mac Computer' },
      { keyword: 'ipad', name: 'iPad' },
      { keyword: 'android', name: 'Android' }
    ]

    return (
      devices.find((device) => agent.includes(device.keyword))?.name ||
      'unknown'
    )
  }

  const getReferrer = (referrer) => {
    const referrers = [
      { regex: /https?:\/\/(.*)google\.[^/?]*/, name: 'Google' },
      { regex: /https?:\/\/(.*)bing\.[^/?]*/, name: 'Bing' },
      { regex: /https?:\/\/(.*)yahoo\.[^/?]*/, name: 'Yahoo' },
      { regex: /https?:\/\/(.*)facebook\.[^/?]*/, name: 'Facebook' },
      { regex: /https?:\/\/(.*)twitter\.[^/?]*/, name: 'Twitter' },
      { regex: /https?:\/\/(.*)pinterest\.[^/?]*/, name: 'Pinterest' },
      { regex: /https?:\/\/(.*)instagram\.[^/?]*/, name: 'Instagram' }
    ]

    if (referrer === '') {
      return 'Direct'
    }

    const foundReferrer = referrers.find((r) => referrer.search(r.regex) === 0)
    return foundReferrer?.name || 'direct or some channel not social or search'
  }

  useEffect(() => {
    if (!router.isReady) return // Ensure that the route data is available

    const cookieOptions = { expires: 30, path: '/' } // Set common cookie options for consistency

    if (!Cookies.get('_user')) {
      Cookies.set('_user', 'true', cookieOptions)

      const agent = navigator.userAgent
      const device = getDevice(agent)
      Cookies.set('device', device, cookieOptions)

      const referrer = getReferrer(document.referrer)
      Cookies.set('referrer', referrer, cookieOptions)

      const { utm_medium, utm_source, utm_campaign, gclid } = router.query

      if (gclid) {
        Cookies.set('_u_s', 'google', cookieOptions)
        Cookies.set('_u_m', 'paid', cookieOptions)
        Cookies.set('_u_c', 'paid', cookieOptions)
        Cookies.set('_u_gclid', gclid, cookieOptions)
      } else {
        Cookies.set('_u_s', utm_source || 'organic', cookieOptions)
        Cookies.set('_u_m', utm_medium || 'organic', cookieOptions)
        Cookies.set('_u_c', utm_campaign || 'organic', cookieOptions)
      }
    }
  }, [router.isReady, router.query]) // Watch for router.isReady and router.query changes

  const shouldShowNavbar =
    !router.pathname.includes('studio') &&
    !router.pathname.includes('paymentsuccess') &&
    !router.pathname.includes('/services/botox-CADMEN Clinic') &&
    !router.pathname.includes('/services/botox-CADMEN Clinic-search')

  return (
    <>
      <div className='relative'>
        <Link className='sr-only' href='#main-content'>
          Skip to main content
        </Link>
        {shouldShowNavbar && <Navbar />}
      </div>
      <div id='main' className={`${shouldShowNavbar ? 'pt-10' : ''}`}>
        {children}
      </div>
      {shouldShowNavbar && <Footer />}
    </>
  )
}

export default Layout
