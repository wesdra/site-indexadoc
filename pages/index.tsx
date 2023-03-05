import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { NextPage } from 'next'
import { GoogleAnalytics } from '../componentes/GoogleAnalytics'


const Home: NextPage = () => {

  return (

    //   <Head>
    //     <title>Create Next App</title>
    //     <meta name="description" content="Indexa Doc - Aplicativo para cartórios" />
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    <main className={styles.main}>

      <GoogleAnalytics />

      <div className={styles.textwrap}>
        <h1 className={styles.title}>
          Transforma <span className={styles.textspan1}>cartórios&nbsp;comuns</span><br />
          em <span className={styles.textspan2}>cartórios digitais.</span>
        </h1>
        <p className={styles.textdesc}>Eficiência, segurança e rapidez.</p>
       
      </div>


      <Link href="https://bit.ly/3J9XjZC" passHref >
        <div className={styles.btnBox}>
          {/* <Image src={whatsapp} className={styles.whats}  alt="Agende uma apresentação" /> */}
          <a><img src="/assets/seta.svg" className={styles.seta} alt="Agende uma apresentação" />
          <img src="/assets/icon-whatsapp.svg" className={styles.whats} alt="Agende uma apresentação" />
          <span>Agende uma apresentação</span></a>
        </div>
      </Link>
      <p className={styles.textwhats}>Para agendar uma apresentação entre em contato pelo WhatsApp.</p>


      <div className={styles.section}>
        <div className={styles.imageWrap}>
          <img src="/telas/tela5625.jpg" 
          sizes="(max-width: 479px) 100vw, (max-width: 767px) 92vw, (max-width: 991px) 93vw, 90vw" 
          srcSet="
          /telas/tela500.jpg 500w, 
          /telas/tela800.jpg 800w, 
          /telas/tela1080.jpg 1080w, 
          /telas/tela1600.jpg 1600w, 
          /telas/tela2000.jpg 2000w, 
          /telas/tela2600.jpg 2600w, 
          /telas/tela3200.jpg 3200w" 
          alt="Indexadoc - o aplicativo que vai revolucionar a forma como seu cartório trabalha hoje." 
          className={styles.fullSize} />
        </div>
      </div>

      {/* <Link href="https://bit.ly/3J9XjZC" passHref >
        <div className={styles.btnBox}>
          <a>
          <img src="/assets/whatsapp.svg" className={styles.whats} alt="Agende uma apresentação" />
          <span>Agende uma apresentação</span></a>
        </div>
      </Link> */}

      <div className={styles.duxgp}>
        {/* <div><img src="/assets/logo-idexadoc.svg" className={styles.seta} alt="Indexadoc.com.br" /></div> 
        <div>*/}
        <Link href="https://duxgp.com.br/" passHref>
        <a>
        <img src="/assets/duxgp.svg" className={styles.duxgplogo} alt="Agende uma apresentação" />
        </a>
        </Link>
        {/*</div>
         <div><img src="/assets/logo-idexaged.svg" className={styles.seta} alt="Indexaget.com.br" /></div> */}
      </div>

      <footer className={styles.footerCopy}>
           2023, indexadoc.com.br todos os direitos reservados
      </footer>

    </main>
  )
}
export default Home