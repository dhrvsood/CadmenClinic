import Layout from '@/components/layout'
import '@/styles/webflow.css'
import '@/styles/globals.css'
import { DefaultSeo } from 'next-seo'
import Head from 'next/head'
import Script from 'next/script'
import { useEffect } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import { v4 as uuid4 } from 'uuid'
import TagManager from 'react-gtm-module'
import { useRouter } from 'next/router'
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from '@vercel/speed-insights/next'
import { useNotificationStore } from '@/zustand/useNotificationStore'
import Notification from '@/components/notification/Notification'

const CadmenClinic = ({ Component, pageProps }) => {
  const router = useRouter()
  const { toasts } = useNotificationStore()

  // Generate/store UUID
  useEffect(() => {
    const uuid = localStorage.getItem('uuid') ?? uuid4()
    localStorage.setItem('uuid', uuid)
  }, [])

  // Initialize GTM
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: 'GTM-T9T872SN'
    }
    TagManager.initialize(tagManagerArgs)
  }, [])

  // Track Meta Pixel pageviews on route change
  useEffect(() => {
    const handleRouteChange = () => {
      if (typeof fbq === 'function') {
        fbq('track', 'PageView')
      }
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Meta Pixel Base Code */}
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '797638549385663');
          fbq('track', 'PageView');
        `}
      </Script>

      {/* Fallback for no-JS */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=797638549385663&ev=PageView&noscript=1"
        />
      </noscript>

      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en',
          siteName: 'CADMEN Cosmetic Clinic'
        }}
      />

      <ParallaxProvider>
        <Layout>
          <Component {...pageProps} />
          {toasts.length > 0 &&
            toasts.map((toast) => (
              <Notification
                key={toast.id}
                id={toast.id}
                message={toast.message}
                type={toast.type}
              ></Notification>
            ))}
          <Analytics />
          <SpeedInsights />
        </Layout>
      </ParallaxProvider>
    </>
  )
}

export default CadmenClinic
