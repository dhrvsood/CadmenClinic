import Layout from '@/components/layout'
import '@/styles/webflow.css'
import '@/styles/globals.css'
import { DefaultSeo } from 'next-seo'
import Head from 'next/head'
import { useEffect } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import { v4 as uuid4 } from 'uuid'
import TagManager from 'react-gtm-module'

const CadmenClinic = ({ Component, pageProps }) => {
  useEffect(() => {
    const uuid = localStorage.getItem('uuid') ?? uuid4()
    localStorage.setItem('uuid', uuid)
  }, [])

  useEffect(() => {
    const tagManagerArgs = {
      gtmId: 'GTM-T9T872SN'
    }

    TagManager.initialize(tagManagerArgs)
  }, [])

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
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
        </Layout>
      </ParallaxProvider>
    </>
  )
}

export default CadmenClinic
