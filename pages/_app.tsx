import '../styles/globals.css'
import logoImg from "../public/assets/logo-idexadoc.png"

import styles from '../styles/App.module.css'

import Image from "next/image"
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.bg}></div>
        <div className={styles.header}>
          <a className={styles.logo} href="https://bit.ly/3J9XjZC">
            <Image src={logoImg.src} width={150} height={24} alt="clickable image" />
          </ a>
        </div>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp