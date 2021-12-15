import Head from "next/head";
import Image from "next/image";
import { useRouter } from 'next/router'


import MenuFlotante from "../../components/MenuFlotante";
import Footer from "../../components/Footer";

import Content02Cursos from "../../components/Content02Cursos";
import Content03 from "../../components/Content03";
import Content04 from "../../components/Content04";
import Content05 from "../../components/Content05";
import Texto01 from "../../components/crashkurse/texto01";
import Tabla01 from "../../components/crashkurse/tabla01";
import Tabla02 from "../../components/crashkurse/tabla02";
import Tabla03 from "../../components/crashkurse/tabla03";

import Card01Lista from "../../components/Card01Lista";
import MenuFlotanteBoton from "../../components/MenuFlotanteBoton";


import TextoBlog01 from "../../components/blogs/TextoBlog01";
import TextoBlog02 from "../../components/blogs/TextoBlog02";

// import MenuSuperior from "../components/MenuSuperior";
import AreaSuperior from "../../componentes/area_superior/AreaSuperior";


import Content01Main from "../../components/maincontent/Content01Main";



import { servidor_url } from "../../config";



//----------------------------------------------------------------------------------------------------------
//            Pagina inicial principal
//----------------------------------------------------------------------------------------------------------







export default function Home({blog}) {

const router = useRouter()
const {id}  = router.query;


const {titulo1, titulo2, titulo2a, texto01, texto02, imagen01 } = blog;





 


  return (
<>
  <Head>
    <title>{titulo2+" "+titulo2a}</title>
    <meta name="description" content={titulo2} />
    <link rel="icon" href="/favicon.ico" />
    <script async src={`${servidor_url}/js/chat.js`} />
    <script async src={`${servidor_url}/js/menu.js`} />
  </Head>




   
    
  
     <div id="principal" className="container-fluid g-0">

      <MenuFlotanteBoton />
  
        <AreaSuperior fondo="gris" texto1={titulo1} texto2={titulo2} texto2a={titulo2a} />


    <TextoBlog01/>
  
    <div className="row   d-flex align-items-center justify-content-center">
 
      <img className="img-fluid img-blogs" src={`${servidor_url}/img/${imagen01}`}/>
    </div>

    <TextoBlog02/>
 
  

    {/*Footer  */}
    <Footer />




  </div>

          {/*Menu Lateral oculto  */} 
  <MenuFlotante />



   


    

</>
  )
}


export const getServerSideProps = async (context) => {

const { id } = context.query;
const url = `${servidor_url}/api/blog/${encodeURIComponent(id)}`;
const res = await fetch(url); 


 const blog = await res.json();



  return {
    props: {
      blog
    },
  };
};

