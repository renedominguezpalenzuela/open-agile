import Head from "next/head";
import Image from "next/image";


import MenuFlotante from "../components/MenuFlotante";
import Footer from "../components/Footer";

import MenuFlotanteBoton from "../components/MenuFlotanteBoton";
// import MenuSuperior from "../components/MenuSuperior";


import AreaSuperior from "../componentes/area_superior/AreaSuperior";


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

    <div id="principal" className="container-fluid g-0">
        <MenuFlotanteBoton />
        <AreaSuperior fondo="gris"  texto1="" texto2="" texto2a="" formulario_contacto={true} area_gris_nueva={true} />



    </div>
      
    {/*Menu Lateral oculto  */} 
  <MenuFlotante />
</>
  );
}

