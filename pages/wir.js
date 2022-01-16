import Head from "next/head";
import Image from "next/image";

import MenuFlotante from "../components/MenuFlotante";
import Footer from "../components/Footer";

import MenuFlotanteBoton from "../components/MenuFlotanteBoton";
// import MenuSuperior from "../components/MenuSuperior";

import TextoBloque01 from "../components/textobloque01";
import Image01 from "../components/crashkurse/image01";

import Content06Team from "../components/Content06Team";

import Tabla01 from "../components/crashkurse/tabla01";
import AreaSuperior from "../componentes/area_superior/AreaSuperior";


import { servidor_url } from "../config";



//----------------------------------------------------------------------------------------------------------
//           CRASHKURSE \ CRASHKURS ZUM AGILE COACH
//----------------------------------------------------------------------------------------------------------

export default function Home({team}) {
  // <Head>
  //   <script async src="js/menu.js" />
  // </Head>

  const titulo1 = "OPEN AGILE TEAM";
  const titulo2 = "UNSERE WERTE";
  const titulo2a = "";



  return (
    <>
      <Head>
        <title>{titulo2}</title>
        <meta name="description" content={titulo2} />
        <link rel="icon" href="/favicon.ico" />
        <script async src="js/chat.js" />
        <script async src="js/menu.js" />
      </Head>

      {/*Contenedor*/}

      <div id="principal" className="container-fluid g-0">
        <MenuFlotanteBoton />

        <AreaSuperior
          fondo="ajustable"
          texto1={titulo1}
          titulo_largo={true}
          area_gris_nueva={true}
        
        />


       <Content06Team lista_cards={team}/>

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


  const url5 = `${servidor_url}/api/team`;
  const res5 = await fetch(url5);
  const team = await res5.json();




  return {
    props: {
      team
     
    },
  };
};

