import Link from "next/link";
import styles from "../../styles/Evento.module.css";
import { NextPage } from "next";
import useLocalStorage from "../../services/useLocalStorage";
import { useEffect, useState } from "react";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const animation = { duration: 8000, easing: (t: number) => t };

type useCookes = {
  use: string;
};
const Home: NextPage = () => {
  const [useStorageCookes, setUseStorageCookies] = useLocalStorage(
    "duxgp-id",
    {} as useCookes
  );
  const [useCookes, setUseCookes] = useState<useCookes>(useStorageCookes);

  //Slider inicio
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    slides: { perView: "auto", spacing: 15 },
    drag: false,
    created(s: any) {
      s.moveToIdx(4, true, animation);
    },
    updated(s: any) {
      s.moveToIdx(s.track.details.abs + 4, true, animation);
    },
    animationEnded(s: any) {
      s.moveToIdx(s.track.details.abs + 4, true, animation);
    },
  });
  //Slider fim

  useEffect(() => {
    if (useStorageCookes && !useCookes) {
      setUseCookes(useStorageCookes);
    }
  }, [useCookes, useStorageCookes]);

  function handleUseCoories() {
    setUseStorageCookies({ use: "ok" });
    setUseCookes({ use: "ok" });
  }

  return (
    //   <Head>
    //   <title>Faça o gerenciamento de documentos de seu cartório | indexa.doc</title>
    //   <meta name="description" content="indexa.doc - Faça o gerenciamento de documentos de seu cartório, de forma eficiente, segura, rápida e com facilidade de acesso." />
    //   <meta property="og:locale" content="pt_BR" />
    //   <meta property="og:type" content="article" />
    //   <meta property="og:title" content="Faça o gerenciamento de documentos de seu cartório | indexa.doc" />
    //   <meta property="og:description" content="Faça o gerenciamento de documentos de seu cartório, de forma eficiente, segura, rápida e com facilidade de acesso." />
    //   <meta property="og:url" content="https://www.indexadoc.com.br" />
    //   <meta property="og:site_name" content="indexa.doc | Gestão eficiente, segura e rápida." />
    //   <meta property="article:modified_time" content="2023-03-08T13:28:49+00:00" />
    //   <meta property="og:image" content="https://www.indexadoc.com.br/telas/tela800.jpg" />
    // </Head>

    <div className={styles.container}>
      <div className={styles.bg}></div>

      <div className={styles.header}>
        <a className={styles.logo} href="./">
          <img src="/assets/logo-idexadoc.svg" alt="Indexadoc.com.br" />
        </a>
      </div>

      <main className={styles.main}>
        <div className={styles.textwrap}>
          <h1 className={styles.title}>
            Confirme sua <span className={styles.textspan1}>Presença</span>
            <br />e <span className={styles.textspan2}>Revolucione</span>sua
            Gestão Documental!
          </h1>
          <p className={styles.textdescpreto}>
            Sua jornada para uma gestão documental transformada começa aqui.
            <br /> Não deixe essa oportunidade passar!
          </p>
          <p className={styles.textdesc}>
            Preencha o formulário para confirmação de participação.
          </p>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionBase}>
            <div className={styles._2ColumnsGrid}>
              <div className={styles.alignLeftAndVertical}>
                <h2 className={`${styles.h2Title} ${styles._4vwMargin}`}>
                  Você está Convidado!
                </h2>
                <p className={`${styles.largeParagraph} ${styles._4vwMargin}`}>
                  Para mergulhar nesse universo de inovação, convidamos você,
                  Oficial Titular ou Substituto Legal, para um Café da Tarde
                  Exclusivo. Prepare-se para uma experiência única:
                </p>
                <p className={`${styles.largeParagraph} ${styles._4vwMargin}`}>
                  <strong>Data</strong>: 📅 14 de novembro de 2023
                  <br />
                  <strong>Horário</strong>: ⌚ 14h30
                  <br />
                  <strong>Local</strong>: 📍 Av. Ayrton Senna da Silva, 550 -
                  Torre Montello - Auditório de Eventos - Gleba Fazenda Palhano
                  em Londrina
                  <br />
                </p>
                <p className={`${styles.largeParagraph} ${styles._4vwMargin}`}>
                  <strong>Reserve seu Lugar: 🎉 </strong>
                  Este é o evento que pode revolucionar a gestão documental do
                  seu cartório. Não perca essa chance de ter um futuro mais
                  organizado e seguro! Garanta seu lugar preenchendo o
                  formulário abaixo:
                </p>
                <p className={`${styles.largeParagraph} ${styles._4vwMargin}`}>
                  <strong>
                    Venha Conhecer o Futuro da Gestão Documental:{" "}
                  </strong>
                  Unindo eficiência, segurança e praticidade, nossa solução está
                  pronta para elevar seu cartório a um novo nível. Este é o
                  momento de moldar um futuro mais ágil e inovador.
                </p>

                {/* <div>
                  <div className="form w-form">
                    <form
                      id="email-form"
                      name="email-form"
                      data-name="Email Form"
                      method="get"
                      className="relative"
                      data-wf-page-id="636e74e493894c35f9381415"
                      data-wf-element-id="fd65e9da-c22b-cc7b-71de-f76022017eb3"
                      aria-label="Email Form"
                    >
                      <input
                        type="email"
                        className="input-field-2 w-input"
                        name="Email"
                        data-name="Email"
                        placeholder="Your Work Email"
                        id="field"
                      />
                      <input
                        type="submit"
                        value=""
                        data-wait=""
                        className="circular-form-button-2 w-button"
                      />
                    </form>
                    <div
                      className="success-message w-form-done"
                      tabIndex={-1}
                      role="region"
                      aria-label="Email Form success"
                    >
                      <div>
                        <span>It`s great to have you on board<a href="#">🎉</a></span>
                      </div>
                    </div>
                    <div
                      className="error-message w-form-fail"
                      tabIndex={-1}
                      role="region"
                      aria-label="Email Form failure"
                    >
                      <div>
                        Hum… Please enter a valid email address 🚧
                        <br />
                      </div>
                    </div>
                  </div>
                  <div className="checkmarks-wrap">
                    <div className="checkmark-wrap right-margin">
                      <img
                        src="https://uploads-ssl.webflow.com/636e74e393894cf1ff381362/636e74e493894ced50381449_small_arrow.svg"
                        alt=""
                        className="small-icon"
                      />
                       
                      <div className="paragraph">Know when we launch</div>
                    </div>
                    <div className="checkmark-wrap right-margin">
                      <img
                        src="https://uploads-ssl.webflow.com/636e74e393894cf1ff381362/636e74e493894ced50381449_small_arrow.svg"
                        alt=""
                        className="small-icon"
                      />
                      <div className="paragraph">Zero spam guarantee</div>
                    </div>
                    <div className="checkmark-wrap">
                      <img
                        src="https://uploads-ssl.webflow.com/636e74e393894cf1ff381362/636e74e493894ced50381449_small_arrow.svg"
                        alt=""
                        className="small-icon"
                      />
                      <div className="paragraph">Cancel Anytime</div>
                    </div>
                  </div>
                </div> */}
              </div>
              <div className={styles.phoneImagesWrap}>
                <img
                  src="/eventos/img/event.jpg"
                  loading="eager"
                  sizes="(max-width: 479px) 100vw, (max-width: 991px) 21vw, 20vw"
                  // srcSet="https://uploads-ssl.webflow.com/636e74e393894cf1ff381362/63781bf5359e1dae4d71fd69_soda-footer-p-500.jpg 500w,
                  // https://uploads-ssl.webflow.com/636e74e393894cf1ff381362/63781bf5359e1dae4d71fd69_soda-footer-p-800.jpg 800w,
                  // https://uploads-ssl.webflow.com/636e74e393894cf1ff381362/63781bf5359e1dae4d71fd69_soda-footer-p-1080.jpg 1080w,
                  // https://uploads-ssl.webflow.com/636e74e393894cf1ff381362/63781bf5359e1dae4d71fd69_soda-footer.jpg 1288w"
                  alt=""
                  className="_100-width-2 cta-image-1"
                  style={{ borderRadius: 12 }}
                />
                <p className={styles.textdesc}>Formulário de Confirmação</p>
                <form className="row g-3">
                  <div className="col-12">
                    {/* <label htmlFor="inputAddress" className="form-label">
                      Nome do cartório
                    </label> */}
                    <input
                      type="text"
                      className="form-control inputField2"
                      id="inputAddress"
                      placeholder="Nome do cartório"
                    />
                  </div>
                  <div className="col-12">
                    {/* <label htmlFor="inputAddress2" className="form-label">
                      Nome do Oficial titular ou Substituto Legal:
                    </label> */}
                    <input
                      type="text"
                      className="form-control inputField2"
                      id="inputAddress2"
                      placeholder="Nome do Oficial Titular ou Substituto Legal:"
                    />
                  </div>
                  <div className="col-12">
                    {/* <label htmlFor="inputAddress2" className="form-label">
                      E-mail:
                    </label> */}
                    <input
                      type="text"
                      className="form-control inputField2"
                      id="inputAddress2"
                      placeholder="E-mail"
                    />
                  </div>
                  <div className="col-12">
                    {/* <label htmlFor="inputAddress2" className="form-label">
                      Telefone Celular:
                    </label> */}
                    <input
                      type="text"
                      className="form-control inputField2"
                      id="inputAddress2"
                      placeholder="Telefone Celular"
                    />
                  </div>
                  <div className="col-12">
                    {/* <label htmlFor="inputAddress2" className="form-label">
                      Cidade:
                    </label> */}
                    <input
                      type="text"
                      className="form-control inputField2"
                      id="inputAddress2"
                      placeholder="Cidade"
                    />
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-success inputField2 w-input"
                    >
                      Confirmar participação
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <div className={`${styles.sectionBase} ${styles.sectionBaseFnd}`}>
            <div className={styles.sectionTop}>
              <p className={styles.topTitle}>Conheça nossos parceiros</p>
              <h2 className={`${styles.h2Title} ${styles.centerText}`}>
                Parceiros
              </h2>
              {/* <p className={styles.textParagraph}>
                A premiação nacional do Prêmio de Qualidade Total de 2022,{" "}
                <br />
                promovido pela Associação dos Notários e Registradores do
                Brasil, <br />
                foi realizado no dia no dia 6 de dezembro na Capital Federal.{" "}
                <br />

              </p> */}
              <div ref={sliderRef} className="keen-slider">
                <div
                  className="keen-slider__slide number-slide1"
                  style={{ maxWidth: 350, minWidth: 350 }}
                >
                  <img
                    src="/eventos/img/parceiro1.png"
                    className=" featureCard"
                    alt="Parceiro"
                  />
                </div>
                <div
                  className="keen-slider__slide number-slide2"
                  style={{ maxWidth: 350, minWidth: 350 }}
                >
                  <img
                    src="/eventos/img/parceiro2.png"
                    className=" featureCard"
                    alt="Parceiro"
                  />
                </div>
                <div
                  className="keen-slider__slide number-slide3"
                  style={{ maxWidth: 350, minWidth: 350 }}
                >
                  <img
                    src="/eventos/img/parceiro3.png"
                    className=" featureCard"
                    alt="Parceiro"
                  />
                </div>
                <div
                  className="keen-slider__slide number-slide4"
                  style={{ maxWidth: 350, minWidth: 350 }}
                >
                  <img
                    src="/eventos/img/parceiro4.png"
                    className=" featureCard"
                    alt="Parceiro"
                  />
                </div>
                <div
                  className="keen-slider__slide number-slide5"
                  style={{ maxWidth: 350, minWidth: 350 }}
                >
                  <img
                    src="/eventos/img/parceiro5.png"
                    className=" featureCard"
                    alt="Parceiro"
                  />
                </div>
                <div
                  className="keen-slider__slide number-slide6"
                  style={{ maxWidth: 350, minWidth: 350 }}
                >
                  <img
                    src="/eventos/img/parceiro6.png"
                    className=" featureCard"
                    alt="Parceiro"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className={styles.section}>
          <div className={styles.sectionBase}>
            <div className={styles.sectionTop}>
              <p className={styles.topTitle}>Conheça nossos parceiros</p>
              <h2 className={`${styles.h2Title} ${styles.centerText}`}>
                Parceiros
              </h2> */}

        <div className={styles.section}>
          <div className="text-wrap _6vw-margin">
            <p className={styles.topTitle}>Descubra a Revolução</p>
            <h2 className={`${styles.h2Title} ${styles.centerText}`}>
              Venha Conhecer o Futuro
              <br />
              da Gestão Documental
            </h2>
            <br />
            <p className={`${styles.largeParagraph} ${styles._4vwMargin}`}>
              Imagine nunca mais perder tempo procurando arquivos. Com nossa
              solução de gerenciamento de arquivos digitais, seus documentos
              serão organizados e acessíveis como nunca antes. Aqui está o que
              nossa tecnologia de ponta oferece:
            </p>
          </div>
          <div className={styles._4ColumnsGrid}>
            <div className={styles.wNodeCol} id="wNodeCol">
              <div className="_1vw-margin">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.mediumIcon}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z"></path>
                  <path d="M19 16h-12a2 2 0 0 0 -2 2"></path>
                  <path d="M9 8h6"></path>
                </svg>

                <h5 className={styles.h5Title}>Organização Impecável</h5>
              </div>
              <p className={styles.paragraph}>
                Cansado de procurar? Com nossos documentos digitalizados, você
                pode localizar qualquer arquivo instantaneamente, todos
                meticulosamente organizados.
              </p>
            </div>

            <div className={styles.wNodeCol} id="wNodeCol">
              <div className="_1vw-margin">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.mediumIcon}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z"></path>
                  <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
                  <path d="M8 11v-4a4 4 0 1 1 8 0v4"></path>
                </svg>
                <h5 className={styles.h5Title}>Segurança Total</h5>
              </div>
              <p className={styles.paragraph}>
                Suas informações são valiosas e merecem proteção. Nossa solução
                garante a máxima segurança para seus dados, proporcionando
                tranquilidade.
              </p>
            </div>
            <div className={styles.wNodeCol} id="wNodeCol">
              <div className="_1vw-margin">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.mediumIcon}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M7 7h10a2 2 0 0 1 2 2v1l1 1v3l-1 1v3a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-3l-1 -1v-3l1 -1v-1a2 2 0 0 1 2 -2z"></path>
                  <path d="M10 16h4"></path>
                  <circle
                    cx="8.5"
                    cy="11.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                  <circle
                    cx="15.5"
                    cy="11.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                  <path d="M9 7l-1 -4"></path>
                  <path d="M15 7l1 -4"></path>
                </svg>
                <h5 className={styles.h5Title}>Eficiência Avançada</h5>
              </div>
              <p className={styles.paragraph}>
                Diga adeus às tarefas manuais que consomem seu tempo.
                Automatizamos processos para você focar no que realmente
                importa.
              </p>
            </div>

            <div className={styles.wNodeCol} id="wNodeCol">
              <div className="_1vw-margin">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.mediumIcon}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1 -4.069 0l-.301 -.301l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.172a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.172a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.877 2.877 0 0 1 0 -4.069l2.643 -2.643a2.877 2.877 0 0 1 4.069 0z"></path>
                  <path d="M15 9h.01"></path>
                </svg>
                <h5 className={styles.h5Title}>Compliance</h5>
              </div>
              <p className={styles.paragraph}>
                Privacidade e proteção estão garantidas. Mantemos sua
                conformidade com LGPD, Provimentos 50, 74 e Código de Normas.
              </p>
            </div>


            <div className={styles.wNodeCol} id="wNodeCol">
              <div className="_1vw-margin">
                <img src="/eventos/img/indexa1.svg" alt="Indexa" />
              </div>
            </div>
            <div className={styles.wNodeCol} id="wNodeCol">
              <div className="_1vw-margin">
                <img src="/eventos/img/indexa2.svg" alt="Indexa" />
              </div>
            </div>

            <div className={styles.wNodeCol} id="wNodeCol">
              <div className="_1vw-margin">
                <img src="/eventos/img/indexa3.svg" alt="Indexa" />
              </div>
            </div>

            <div className={styles.wNodeCol} id="wNodeCol">
              <div className="_1vw-margin">
                <img src="/eventos/img/indexa4.svg" alt="Indexa" />
              </div>
            </div>




          </div>
        </div>

        <Link href="https://bit.ly/3J9XjZC" passHref>
          <div className={styles.btnBox}>
            <a>
              <img
                src="/assets/seta.svg"
                className={styles.seta}
                alt="Fale conosco"
              />
              <img
                src="/assets/icon-whatsapp.svg"
                className={styles.whats}
                alt="Fale conosco"
              />
              <span>Fale conosco</span>
            </a>
          </div>
        </Link>

        <div className={styles.duxgp}>
          {/* <div><img src="/assets/logo-idexadoc.svg" className={styles.seta} alt="Indexadoc.com.br" /></div> 
        <div>*/}
          <Link href="https://duxgp.com.br/" passHref>
            <a>
              <img
                src="/assets/duxgp.svg"
                className={styles.duxgplogo}
                alt="Agende uma apresentação"
              />
            </a>
          </Link>
          {/*</div>
         <div><img src="/assets/logo-idexaged.svg" className={styles.seta} alt="Indexaget.com.br" /></div> */}
          <p className={`${styles.largeParagraph} ${styles.centerText}`}>
            DUXGP - SOLUÇÕES EM TI LTDA
            <br />
            CNPJ: 30.885.472/0001-30 Londrina - PR
          </p>
          <p className={styles.centerText}>
            Rua Senador Souza Naves, 771 1º Andar Sala 103
            <br />
            Londrina, Paraná, 86010-160, BR
          </p>

          <p className={styles.centerText}>
            Email: vedove@duxgp.com.br Telefone:+55 43 99125 5063
          </p>
        </div>

        <footer className={`${styles.footerCopy} ${styles.centerText}`}>
          2023, indexadoc.com.br todos os direitos reservados
        </footer>

        {useCookes?.use ? (
          <></>
        ) : (
          <>
            <div className={styles.useCookesFixe}>
              <div className={styles.useCookes}>
                <div className={styles.useCookesDivIcon}>
                  <img
                    src="/assets/cookies.svg"
                    className={styles.useCookesIcon}
                    alt="Política de privacidade"
                  />
                </div>
                <div className={styles.useCookesTitle}>
                  Esse site usa cookies
                </div>
              </div>
              <div className={styles.useCookes}>
                <div className={styles.useCookesDivText}>
                  <p className={styles.useCookesText}>
                    <br />
                    {/* Para fornecer as melhores experiências, usamos tecnologias como cookies para armazenar e/ou acessar informações do dispositivo. O consentimento para essas tecnologias nos permitirá processar dados como comportamento de navegação ou IDs exclusivos neste site. */}
                    Nós armazenamos dados temporariamente para melhorar a sua
                    experiência de navegação e recomendar conteúdo de seu
                    interesse. Ao utilizar nossos serviços, você concorda com
                    tal monitoramento.
                  </p>
                </div>
              </div>
              <div className={styles.useCookesButton}>
                <div>
                  <Link href="https://duxgp.com.br/privacy-policy/" passHref>
                    <a target="_blank" rel="noopener noreferrer">
                      Política de privacidade
                    </a>
                  </Link>
                </div>
                <div>
                  {" "}
                  <button
                    onClick={() => {
                      handleUseCoories();
                    }}
                    className="btn-hover color-5"
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};
export default Home;
