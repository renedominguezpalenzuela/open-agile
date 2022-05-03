import Head from "next/head";
import Image from "next/image";

import MenuFlotante from "../components/MenuFlotante";
import Footer from "../components/Footer";

import MenuFlotanteBoton from "../components/MenuFlotanteBoton";

import TextoBloque01 from "../components/textobloque01";
import Image01 from "../components/crashkurse/image01";

import Content06Team from "../components/Content06Team";

import Tabla01 from "../components/crashkurse/tabla01";
import AreaSuperior from "../componentes/area_superior/AreaSuperior";

import { backend_url } from "../config";

import { useState, useEffect } from "react";
import ModalFormCookie from "../components/ModalFormCookie";

export default function Home({ team, cursos_lista,  servicios_lista }) {
  const titulo1 = "OPEN AGILE TEAM";
  const titulo2 = "UNSERE WERTE";
  const titulo2a = "WIR FREUEN UNS DARAUF DICH KENNENZULERNEN";

  const [desktop_screen, setDesktop_screen] = useState(true);
  const handleResize = () => {
    let ancho_screen = window.innerWidth;
    if (ancho_screen > 992) {
      setDesktop_screen(true);
    } else {
      setDesktop_screen(false);
    }
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <Head>
        <title>{titulo2}</title>
        <meta name="description" content={titulo2} />
        <link rel="icon" href="/favicon.ico" />
        <script async src="js/chat.js" />
        <script async src="js/menu.js" />
      </Head>

      <div id="principal" className="container-fluid g-0">
        <MenuFlotanteBoton />

        <AreaSuperior
          fondo="ajustable"
          texto1={titulo1}
          texto2={titulo2a}
          titulo_muy_largo={true}
          area_gris_nueva={true}
          shop={true}
          
     servicios_lista={servicios_lista} 
            cursos_lista={cursos_lista} 
        />

        <Content06Team lista_cards={team} />

        {/*Footer  */}
        <Footer servicios_lista={servicios_lista} cursos_lista={cursos_lista} />
      </div>

      {/*Menu Lateral oculto  */}
      <MenuFlotante />
    </>
  );
}

//Obteniendo los datos desde el servidor
export const getServerSideProps = async (context) => {
  const url5 = `${backend_url}/api/team`;
  const res5 = await fetch(url5);
  const team = await res5.json();


   
  const url2 = `${backend_url}/api/leistungen`;
  const res2 = await fetch(url2);
  const servicios_lista = await res2.json();

  const url3 = `${backend_url}/api/curso`;
  const res3 = await fetch(url3);
  const cursos_lista = await res3.json();

  return {
    props: {
      team,
       cursos_lista,
      servicios_lista
    },
  };
};
