import { useEffect } from "react";
import Image from "next/image";
import { GetServerSideProps } from "next";

export interface ISlug {
    redir: string;
  error: string;
}

export default function Atendimento({ redir, error }: ISlug) {
  // const router = useRouter();

  // const { slug } = router.query;
  // const query = router.query;

  // useEffect(()=>{

  //         const produtos = api.get<string>("lp?email=" + slug);

  // },[])

  useEffect(() => {
    redirect(redir);
  }, [redir]);

  function redirect(slug: string) {
    console.log(slug)
    setTimeout(function () {
      window.location.href = slug;
    }, 10000000);
  }

  return (
    <div>
      <main>
        <div id="logo">
          <Image
            className="logo"
            src="/mo.png"
            alt="Vercel Logo"
            width={100}
            height={60}
          />
        </div>
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let slug = query.slug || "";
  let errormsg: string = "";

  let redir: string = "https://wa.me/554391255063"; //Fernando
  if (slug === "wesdra") {
    redir = "https://wa.me/5511934864986";
  }

  try {
    return { redirect: { destination: redir, permanent: false } };
    return {
      props: {
        redir: redir,
        error: errormsg,
      },
    };
  } catch (error) {
    return {
      props: {
        redir: null,
        error: errormsg,
      },
    };
  }
};
