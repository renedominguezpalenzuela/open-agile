import Head from "next/head";
import Image from "next/image";

import MenuFlotante from "../components/MenuFlotante";
import Footer from "../components/Footer";

import MenuFlotanteBoton from "../components/MenuFlotanteBoton";
// import MenuSuperior from "../components/MenuSuperior";

import TextoBloque01 from "../components/textobloque01";
import Image01 from "../components/crashkurse/image01";

import TeamCarrousel from "../components/TeamCarrousel";

import Tabla01 from "../components/crashkurse/tabla01";
import AreaSuperior from "../componentes/area_superior/AreaSuperior";



//----------------------------------------------------------------------------------------------------------
//           CRASHKURSE \ CRASHKURS ZUM AGILE COACH
//----------------------------------------------------------------------------------------------------------

export default function Home() {
  // <Head>
  //   <script async src="js/menu.js" />
  // </Head>

  const titulo1 = "TEAM";
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
          fondo="gris"
          texto1={titulo1}
          texto2={titulo2}
          texto2a={titulo2a}
        />


        <TeamCarrousel />

        {/*Footer  */}
        <Footer />
      </div>

      {/*Menu Lateral oculto  */}
      <MenuFlotante />
    </>
  );
}
