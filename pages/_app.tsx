import { useEffect } from 'react';
import { AppProps } from 'next/app'
import * as gtag from "../lib/gtag"
import { useRouter } from 'next/router';

import '../styles/globals.css'


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
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
