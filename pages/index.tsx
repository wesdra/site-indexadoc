import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { NextPage } from 'next'
import useLocalStorage from '../services/useLocalStorage'
import { useEffect, useState } from 'react'


type useCookes = {
  use: string
}


const Home: NextPage = () => {

  const [useStorageCookes, setUseStorageCookies] = useLocalStorage('duxgp-id', {} as useCookes)
  const [useCookes, setUseCookes] = useState<useCookes>(useStorageCookes)

  useEffect(() => {
    if (useStorageCookes && !useCookes) {
      setUseCookes(useStorageCookes)
    }
  }, [useCookes, useStorageCookes]);

  function handleUseCoories() {
    setUseStorageCookies({ use: "ok"})
    setUseCookes({ use: "ok"})
  }

  console.log(useCookes, useStorageCookes)

  return (
    <div className={styles.container} >
      <div className={styles.bg}></div>
      <div className={styles.header}>
        <a className={styles.logo} href="https://bit.ly/3J9XjZC">
          <img src="/assets/logo-idexadoc.svg" alt="Indexadoc.com.br" />
        </ a>
      </div>
      <main className={styles.main}>

        {/* //   <Head>
    //     <title>Create Next App</title>
    //     <meta name="description" content="Indexa Doc - Aplicativo para cartórios" />
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head> */}


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
          <p>
            DUXGP - SOLUÇÕES EM TI LTDA<br />
            CNPJ: 30.885.472/0001-30 Londrina - PR
          </p>
          <p>Rua Senador Souza Naves, 771 1º Andar Sala 103<br />
            Londrina, Paraná, 86010-160, BR
          </p>

          <p>Email: vedove@duxgp.com.br Telefone:+55 43 99125 5063</p>

        </div>

        <footer className={styles.footerCopy}>
          2023, indexadoc.com.br todos os direitos reservados
        </footer>

        {useCookes?.use ?
          (
            <>
              
            </>
          ):(
            <>
            <div className={styles.useCookesFixe}>
                <div className={styles.useCookes}>

                  <div className={styles.useCookesDivIcon}>
                    <img src="/assets/cookies.svg" className={styles.useCookesIcon} alt="Política de privacidade" />
                  </div>
                  <div className={styles.useCookesTitle}>Esse site usa cookies</div>
                </div>
                <div className={styles.useCookes}>
                  <div className={styles.useCookesDivText}>
                    <p className={styles.useCookesText}><br />
                      {/* Para fornecer as melhores experiências, usamos tecnologias como cookies para armazenar e/ou acessar informações do dispositivo. O consentimento para essas tecnologias nos permitirá processar dados como comportamento de navegação ou IDs exclusivos neste site. */}
                      Nós armazenamos dados temporariamente para melhorar a sua experiência de navegação e recomendar conteúdo de seu interesse. Ao utilizar nossos serviços, você concorda com tal monitoramento.
                    </p>
                  </div>
                </div>
                <div className={styles.useCookesButton}>
                  <div>
                  <Link href="https://duxgp.com.br/privacy-policy/" passHref>
                   <a  target="_blank" rel="noopener noreferrer">Política de privacidade</a>
                   </Link>
                  </div>
                  <div> <button onClick={()=>{handleUseCoories()}} className="btn-hover color-5">Aceito</button></div>
                </div>
              </div>
            </>
          )
        }


      </main>
    </div >
  )
}
export default Home