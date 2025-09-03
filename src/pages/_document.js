import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="Shortcut Icon" href="icon.png" />
        {/* Google Tag Manager Script */}
        {/* <script 
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                      })(window,document,'script','dataLayer','GTM-T9T872SN');`,
          }}
        /> */}
      </Head>
      <body>
        {/* Google Tag Manager (noscript) */}
        {/* <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-T9T872SN"
            height="0" 
            width="0" 
            style={{display: 'none', visibility: 'hidden'}}
          ></iframe>
        </noscript> */}
        <div id="modal-root"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
