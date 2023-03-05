import '../styles/globals.css'

import { AppProps } from 'next/app'
import * as gtag from "../lib/gtag"
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* <GoogleAnalytics /> */}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
