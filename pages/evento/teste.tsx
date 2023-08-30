import Link from "next/link";
import { useEffect, useState } from "react";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { GetServerSideProps, NextPage } from "next";
import { api, apibase } from "../../services/api";
import styles from "../../styles/Home.module.css";
import useLocalStorage from "../../services/useLocalStorage";
import useDownloader from "react-use-downloader";

type useCookes = {
  use: string;
};
export interface IEmail {
  email: string;
}
const createUserFromSchema = z.object({
  Nome: z
    .string()
    .nonempty("O Nome é obrigatório")
    .transform((Nome) => {
      return Nome.trim()
        .split(" ")
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1));
        })
        .join(" ");
    }),
  Email: z.string().email("Formato de e-mail inválido").toLowerCase(),
});

type CreteformData = z.infer<typeof createUserFromSchema>;

export default function Evento({ email }: IEmail) {
  const [myemail, setMyemail] = useState(email);
  const [output, setOutput] = useState("");
  
  const [useStorageCookes, setUseStorageCookies] = useLocalStorage(
    "duxgp-id",
    {} as useCookes
  );
  const [useCookes, setUseCookes] = useState<useCookes>(useStorageCookes);

 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreteformData>({
    resolver: zodResolver(createUserFromSchema),
  });

  console.log(errors);

  useEffect(() => {
    if (useStorageCookes && !useCookes) {
      setUseCookes(useStorageCookes);
    }
  }, [useCookes, useStorageCookes]);

  function handleUseCoories() {
    setUseStorageCookies({ use: "ok" });
    setUseCookes({ use: "ok" });
  }

  async function createUser(data: CreteformData) {
    // console.log(JSON.stringify(data,null,2))

    try {
      const produtos = await apibase.post<CreteformData>("ebook",   data );

      console.log(produtos)
    } catch (error) {}

    setMyemail(data.Email);
    setOutput(JSON.stringify(data, null, 2));

    //const cadastrar = api.post<CreteformData>(data);
  }

  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();
  const fileUrl = "/ebook/Gestao-Eficaz-de-Documentos-no-Cartorio.pdf";
  const filename = "Gestao-Eficaz-de-Documentos-no-Cartorio.pdf";

  return (
    <>
      <Head>
        <title>
          Faça o gerenciamento de documentos de seu cartório | indexa.doc
        </title>
        <meta
          name="description"
          content="indexa.doc - Faça o gerenciamento de documentos de seu cartório, de forma eficiente, segura, rápida e com facilidade de acesso."
        />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Faça o gerenciamento de documentos de seu cartório | indexa.doc"
        />
        <meta
          property="og:description"
          content="Faça o gerenciamento de documentos de seu cartório, de forma eficiente, segura, rápida e com facilidade de acesso."
        />
        <meta property="og:url" content="https://www.indexadoc.com.br" />
        <meta
          property="og:site_name"
          content="indexa.doc | Gestão eficiente, segura e rápida."
        />
        <meta
          property="article:modified_time"
          content="2023-03-08T13:28:49+00:00"
        />
        <meta
          property="og:image"
          content="https://www.indexadoc.com.br/telas/tela800.jpg"
        />
      </Head>

      <div className={styles.container}>
        <div className={styles.bg}></div>

        <div className={styles.header}></div>

        <div className={styles.main}>
          <div className="container">
            <div className="row">
              <div className="col-sm-9">
                <a className={styles.logoebook} href="https://bit.ly/3J9XjZC">
                  <img src="/assets/logo-idexadoc.svg" alt="Indexadoc.com.br" />
                </a>

                <div className={styles.textwrap}>
                  <h1 className={styles.title}>
                    Baixe o <span className={styles.textspan1}>e-book</span>
                    <br />
                    <span className={styles.textspan2}>gratuitamente.</span>
                  </h1>
                  {myemail ?(
                    <p className={styles.textdesc}></p>
                  ):(
                    <p className={styles.textdesc}>Preencha o formulário.</p>
                  )}
                  
                </div>
              </div>
              <div className="col-sm-3">
                <img
                  src="/ebook/ebook.png"
                  width={300}
                  alt="Indexadoc.com.br"
                />
                {myemail ? (
                  <div>
                    {/* <p>
                      Download is in {isInProgress ? "in progress" : "stopped"}
                    </p> */}
                    <button
                      className={styles.btnBox}
                      onClick={() => download(fileUrl, filename)}
                    >
                      Baixar E-book Agora
                    </button>
                    {/* <button onClick={() => cancel()}>
                      Cancel the download
                    </button>
                    <p>Download size in bytes {size}</p>
                    <label htmlFor="file">Downloading progress:</label>
                    <progress id="file" value={percentage} max="100" />
                    <p>Elapsed time in seconds {elapsed}</p>
                    {error && <p>possible error {JSON.stringify(error)}</p>} */}
                  </div>
                ) : (
                  <div className="form">
                    <form action="" onSubmit={handleSubmit(createUser)}>
                      <div className="form-row">
                        <div className="form-group col-sm-2 col-md-12">
                          <label htmlFor="Nome">Nome</label>
                          <input
                            type="text"
                            {...register("Nome")}
                            className="form-control"
                          />
                          {errors.Nome && (
                            <span className="invalid-feedback">
                              {errors.Nome.message}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-group col-sm-8 col-md-12">
                          <label htmlFor="Email">E-mail</label>
                          <input
                            type="email"
                            {...register("Email")}
                            className="form-control"
                          />
                          {errors.Email && (
                            <span className="invalid-feedback">
                              {errors.Email.message}
                            </span>
                          )}
                        </div>
                      </div>

                      <button className={styles.btnBox} type="submit">
                        Receber E-book
                      </button>
                    </form>

                    <small className={styles.footerCopy}>
                      Prometemos não utilizar suas informações de contato para
                      enviar qualquer tipo de SPAM.
                    </small>
                  </div>
                )}
              </div>
            </div>
          </div>

          <footer className={styles.footerCopy}>
            2023, indexadoc.com.br todos os direitos reservados
          </footer>

          {useCookes?.use ? (
            <></>
          ) : (
         
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
        
          )}
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let email = query.email || "";

  let errormsg: string = "";

  try {
    const produtos = await apibase.get<string>("lp?email=" + email);

    //  return { redirect: { destination: "/e-book", permanent: false } };
    return {
      props: {
        email: email,
        error: errormsg,
      },
    };
  } catch (error) {
    return {
      props: {
        email: null,
        error: errormsg,
      },
    };
  }
};
