import Head from "next/head";
import Image from "next/image";

import MenuFlotante from "../components/MenuFlotante";
import Footer from "../components/Footer";

import MenuFlotanteBoton from "../components/MenuFlotanteBoton";
// import MenuSuperior from "../components/MenuSuperior";

import TextoBloque01 from "../components/textobloque01";
import Image01 from "../components/crashkurse/image01";

import Content01Main from "../components/maincontent/Content01Main";
import FormularioContacto2 from "../components/formulariocontacto2";


//----------------------------------------------------------------------------------------------------------
//           CRASHKURSE \ CRASHKURS ZUM AGILE COACH
//----------------------------------------------------------------------------------------------------------

export default function Home() {

  return (
<>
  <Head>
    <title>KontactForm</title>
    <meta name="description" content="KontactForm" />
   <link rel="icon" href="/favicon.ico" />
    <script async src="js/chat.js" />
    <script async src="js/menu.js" />
  </Head>
     
  {/*Contenedor*/}
    <div id="principal" className="row content-fluid ">

    <MenuFlotanteBoton />
    
    {/*Area superior  */}
    {/* <div className="bannermain"> */}
      <Content01Main texto1="" texto2="" texto2a="" formulario_contacto={true}/>
      {/* <Content01Main texto1="" texto2="" texto2a=""/> */}
    
    {/* </div> */}

    {/*Footer  */}
    {/* <Footer /> */}

    </div>
      
    {/*Menu Lateral oculto  */} 
  <MenuFlotante />
</>
  );
}

