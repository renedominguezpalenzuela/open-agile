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





import Content01Main from "../../components/maincontent/Content01Main";



import { servidor_url } from "../../config";



//----------------------------------------------------------------------------------------------------------
//            Pagina inicial principal
//----------------------------------------------------------------------------------------------------------







export default function Home({}) {

const router = useRouter()
const {id}  = router.query;

const titulo1="Crashkurse";




 


  return (
<>
    <Head>
        <title>{titulo1}</title>
        <meta name="description" content={titulo1} />
<link rel="icon" href="/favicon.ico" />
        <script async src={`${servidor_url}/js/chat.js`} />
<script async src={`${servidor_url}/js/menu.js`} />
</Head>


  {/*Contenedor principal*/}
  <div id="principal" className="row content-fluid ">

            <MenuFlotanteBoton />
    
    {/*Area superior  */}
            <div className="bannermain">
                <Content01Main texto1={titulo1} />
</div>

    {/* Texto Crashkurse */}
    <Texto01 />


  

    {/*Footer  */}
    <Footer />




</div>

  {/*Menu Lateral oculto  */} 
  <MenuFlotante />


</>
  )
}



