import '../styles/globals.css'

import { AppProps } from 'next/app'
import GoogleAnalytics from '../componentes/GoogleAnalytics'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
