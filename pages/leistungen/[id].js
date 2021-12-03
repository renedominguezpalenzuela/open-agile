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
import TextoBloque01 from "../../components/textobloque01";

// import MenuSuperior from "../components/MenuSuperior";


import Content01andMenu from "../../components/Content01andMenu";



import { servidor_url } from "../../config";



//----------------------------------------------------------------------------------------------------------
//            Pagina inicial principal
//----------------------------------------------------------------------------------------------------------







export default function Home({servicios}) {

const router = useRouter()
const {id}  = router.query;


const { titulo1, titulo2,titulo2a, titulo3, titulo4, texto01,texto02 , texto03 } = servicios;





 


  return (
<>
   <Head>
    <title>{titulo2+" "+titulo2a}</title>
    <meta name="description" content={titulo2} />
    <link rel="icon" href="/favicon.ico" />
    <script async src={`${servidor_url}/js/chat.js`} />
    <script async src={`${servidor_url}/js/menu.js`} />
  </Head>


     
  {/*Contenedor*/}
  <div id="principal" className="row content-fluid ">

    <MenuFlotanteBoton />
    
    {/*Area superior  */}
    <div className="bannermain">
      <Content01andMenu texto1={titulo1} texto2={titulo2} texto2a={titulo2a}/>
    </div>

    <TextoBloque01   titulo={titulo3}  texto_parrafo_array={texto01} />


    <TextoBloque01   titulo={titulo4}  texto_parrafo_array={texto02} />

    <TextoBloque01    texto_parrafo_array={texto03} />
  

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
const url = `${servidor_url}/api/servicio/${encodeURIComponent(id)}`;


const res = await fetch(url); 




  const servicios = await res.json();



  return {
    props: {
      servicios
    },
  };
};

