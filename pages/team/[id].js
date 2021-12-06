import Head from "next/head";
import Image from "next/image";
import { useRouter } from 'next/router'
import Link from "next/link";


import MenuFlotante from "../../components/MenuFlotante";
import MenuFlotanteBoton from "../../components/MenuFlotanteBoton";
import Footer from "../../components/Footer";
import Content01Main from "../../components/maincontent/Content01Main";

import TextoBloque01 from "../../components/textobloque01";
import TextoSimple from "../../components/TextoSimple";



// import MenuSuperior from "../components/MenuSuperior";





import { servidor_url } from "../../config";



//----------------------------------------------------------------------------------------------------------
//            Pagina inicial principal
//----------------------------------------------------------------------------------------------------------







export default function Home({team}) {

const router = useRouter()
const {id}  = router.query;


const { image, title, motto, motto_author, text, telefono, correo} = team;

let foto2 = servidor_url + '/img/'+image;





 


  return (
<>
<Head>
    <title>{"Quiz"}</title>
    <meta name="description" content="Quiz" />
    <link rel="icon" href="/favicon.ico" />
    <script async src={`${servidor_url}/js/chat.js`} />
    <script async src={`${servidor_url}/js/menu.js`} />
</Head>


{/*Contenedor*/}
    <div id="principal" className="row content-fluid ">

      <MenuFlotanteBoton />
    
    {/*Area superior  */}

     <div className="bannermain">
          <Content01Main texto1="Team" texto2={title} texto2a=""  />
         
        </div>

         <TextoBloque01   titulo={title}  texto_parrafo_array={text}  foto2={foto2} /> 
         <TextoSimple    texto={motto} />
         <TextoSimple    texto={motto_author} />
 <TextoBloque01    telefono={telefono} correo={correo}/>
      

   

    {/*Footer  */}
    {/*  <Footer />   */}

</div>
      
    {/*Menu Lateral oculto  */} 
<MenuFlotante />

</>
  )
}


export const getServerSideProps = async (context) => {

const { id } = context.query;
const url = `${servidor_url}/api/team/${encodeURIComponent(id)}`;
const res = await fetch(url); 


 const team = await res.json();







  return {
    props: {
      team
    },
  };
};

