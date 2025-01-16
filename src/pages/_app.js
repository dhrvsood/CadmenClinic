import Layout from '@/components/layout'
import '@/styles/webflow.css'
import '@/styles/globals.css'
import { DefaultSeo } from 'next-seo'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import TagManager from 'react-gtm-module'
import { ParallaxProvider } from 'react-scroll-parallax'
import { v4 as uuid4 } from 'uuid'

const CadmenClinic = ({ Component, pageProps }) => {
  const router = useRouter()

  useEffect(() => {
    const uuid = localStorage.getItem('uuid') ?? uuid4()
    localStorage.setItem('uuid', uuid)
  }, [])

  useEffect(() => {
    // const tagManagerArgs = {
    //   gtmId: 'GTM-5KJH3J4'
    // }

    // TagManager.initialize(tagManagerArgs)
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
