import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { api } from '../../services/api';
import { useEffect } from 'react';

export interface IEmail {
    email: string
  }

export default function Recebido({ email }: IEmail) {

    // const router = useRouter();

    // const { slug } = router.query;
    // const query = router.query;

    // useEffect(()=>{

    
    //         const produtos = api.get<string>("lp?email=" + slug);
       

    // },[])



    return (
        <div>
            {email}
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    let email = query.slug || '';

    let errormsg: string = "";
  
    try {
        const produtos = await api.get<string>("lp?email=" + email);

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
  