import '../styles/globals.css'

import styles from '../styles/App.module.css'

import { AppProps } from 'next/app'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {


  const router = useRouter()

  // useEffect(() => {
  //   const handleRouteChange = (url:string) => {
  //     gtag.pageview(url)
  //   }
  //   router.events.on('routeChangeComplete', handleRouteChange)
  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange)
  //   }
  // }, [router.events])

  return (
    <>
  
      <div className={styles.container}>
        <div className={styles.bg}></div>
        <div className={styles.header}>
          <a className={styles.logo} href="https://bit.ly/3J9XjZC">
            {/* <Image src={logoImg.src} width={150} height={24} alt="clickable image" /> */}
            <img src="/assets/logo-idexadoc.svg" className={styles.seta} alt="Indexadoc.com.br" />
          </ a>
        </div>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
