import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
import LeftColumnColor from "../components/LeftColumnColor";

import MenuFlotante from "../components/MenuFlotante";
import Footer from "../components/Footer";

import Content02Cursos from "../components/Content02Cursos";
import Content03 from "../components/Content03";
import Content04 from "../components/Content04";
import Content05 from "../components/Content05";

import Card01Lista from "../components/Card01Lista";
import MenuFlotanteBoton from "../components/MenuFlotanteBoton";

// import MenuSuperior from "../components/MenuSuperior";


import Content01andMenu from "../components/Content01andMenu";



import { servidor_url } from "../config";



//----------------------------------------------------------------------------------------------------------
//            Pagina inicial principal
//----------------------------------------------------------------------------------------------------------

export default function Home({cursos, servicios, blogs}) {


<Head>
  <script async src="js/menu.js" />
</Head> 



  return (
<>
  <Head>
    <title>Main Page title</title>
    <meta name="description" content="Lorem Ipsum" />
    <link rel="icon" href="/favicon.ico" />
    <script async src="js/chat.js" />
  </Head>

     

      {/*Contenedor*/}
  <div id="principal" className="row content-fluid ">


    <MenuFlotanteBoton />

   
    
    {/*Area superior  */}
   
    <div  className="bannermain "> 
   
         <Content01andMenu texto1="OPEN AGILE" texto2="FOR BETTER WORK"/> 
     
    </div>

    {/*Cards  */}
    <Content02Cursos cursos={cursos} /> 

    {/*imagen  */}
    <Content03 imagen="Testimonials_kunden-1.png" />

    {/*Contenido  */}
    <Content04 lista_cards={blogs}/>  

    {/*Carrousel  */}
    <Content05 />


    {/* Servicios  */}
    <div id="services" className=" mt-5 ">
      <div className="row justify-content-center font_title_seccion mt-1 ms-4"> LEISTUNGEN</div>
      {/* <div className="row justify-content-center font_card_texto mt-2 ms-4"> Lorem Ipsum</div> */}
      <Card01Lista lista_cards={servicios} />
    </div>

    {/*Footer  */}
    <Footer />

  </div>
      
    {/*Menu Lateral oculto  */} 
    <MenuFlotante />
</>
  );
}


//Obteniendo los datos desde el servidor
export const getServerSideProps = async (context) => {

  const url = `${servidor_url}/api/cursos`;
  const res = await fetch(url); 
  const cursos = await res.json();

  const url2 = `${servidor_url}/api/servicios`;
  const res2 = await fetch(url2); 
  const servicios = await res2.json();

  const url3 = `${servidor_url}/api/blog`;
  const res3 = await fetch(url3); 
  const blogs = await res3.json();

  return {
    props: {
      cursos, servicios, blogs
    },
  };
};
