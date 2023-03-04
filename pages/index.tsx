import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import duxgp from "../public/assets/duxgp.svg"
import { NextPage } from 'next'


const Home: NextPage = () => {

  return (

    //   <Head>
    //     <title>Create Next App</title>
    //     <meta name="description" content="Indexa Doc - Aplicativo para cartórios" />
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

      <main className={styles.main}>
        <div className={styles.textwrap}>
          <h1 className={styles.title}>
            Transforma <span className={styles.textspan1}>cartórios&nbsp;comuns</span><br />
            em <span className={styles.textspan2}>cartório digitais.</span>
          </h1>
          <p className={styles.textdesc}>Eficiencia, segurança e rapides.</p>
          <p className={styles.textwhats}>Para agendar uma apresentação <br />entre em contato pelo WhatsApp.</p>
        </div>
        

        <Link href="https://bit.ly/3J9XjZC"  passHref >
            <div className={styles.btnBox}>
            {/* <Image src={whatsapp} className={styles.whats}  alt="Agende uma apresentação" /> */}
            <img src="/assets/icon-whatsapp.svg" className={styles.whats} alt="Agende uma apresentação" />
            <span>Agende uma apresentação</span>
            </div>
        </Link>

        <div className="duxgp">
          <Link href="https://duxgp.com.br/" passHref>
           <Image src={duxgp} alt="DuxGP" />
          </Link>
        </div>

      </main>
  )
}
 export default Home