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







export default function Home({curso}) {

const router = useRouter()
const {id}  = router.query;


const {titulo1, titulo2,titulo2a, titulo3, imagen01, items_tabla, crashkurs_date_title, crashkurs_date } = curso;





 


  return (
<>
     <Head>
    <title>{titulo2+" "+titulo2a}</title>
    <meta name="description" content={titulo2} />
    <link rel="icon" href="/favicon.ico" />
    <script async src={`${servidor_url}/js/chat.js`} />
    <script async src={`${servidor_url}/js/menu.js`} />
  </Head>


  {/*Contenedor principal*/}
  <div id="principal" className="row content-fluid ">

    <MenuFlotanteBoton />
    
    {/*Area superior  */}
    <div className="bannermain">
        <Content01Main texto1={titulo1} texto2={titulo2} texto2a={titulo2a}/>
    </div>

    {/* Texto Crashkurse */}
    {/* <Texto01 /> */}


    {/* Tabla 1: imagenes alternas */}
    <div id="course" className="row  text-center mb-5 mt-5  ">
        <h3 className="font_titulo_detalles "> {titulo3}</h3>
    </div>

    {/* <Tabla01
       imagen01 = {`${servidor_url}/img/${imagen01}`}
       texto_BESCHREIBUNG = {texto_BESCHREIBUNG}
       imagen02 = {`${servidor_url}/img/${imagen02}`}
       texto_ZIELGRUPPE = {texto_ZIELGRUPPE}
       imagen03 = {`${servidor_url}/img/${imagen03}`}
       texto_VORTEILE      = {texto_VORTEILE     }
       numero_tabla = "1"     
    /> */}


     <Tabla01 className=""
     items_tabla={items_tabla}
      
       numero_tabla = "1"     
    />


    {/* Tabla2: tres columnas inhalte, leistungen, kosten */}
    {/* <Tabla02
      texto_INHALTE = {texto_INHALTE}
      texto_LEISTUNGEN = {texto_LEISTUNGEN}
      kosten = {kosten} 
      numero_tabla = "2"
    />  */}

  
   

   {/* Tabla3 --- Cards con fechas de cursos */}
    <Tabla03 className="mt-5"
     crashkurs_date_title= {crashkurs_date_title}
     crashkurs_date= {crashkurs_date}
     titulo ={titulo2 +" " +titulo2a} 
     titulo2a = {titulo2a}   
    />
    


    {/* Texto Crashkurse */}
    {/* <Texto01/> */}
 
  

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
const url = `${servidor_url}/api/curso/${encodeURIComponent(id)}`;
const res = await fetch(url); 


 const curso = await res.json();



  return {
    props: {
      curso
    },
  };
};

