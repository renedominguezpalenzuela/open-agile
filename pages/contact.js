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

export default function Home({ cursos_lista, servicios_lista }) {
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
        <AreaSuperior
          fondo="gris"
          texto1=""
          texto2=""
          texto2a=""
          formulario_contacto={true}
          area_gris_nueva={true}
          servicios_lista={servicios_lista}
          cursos_lista={cursos_lista}
        />
      </div>

      {/*Menu Lateral oculto  */}
      <MenuFlotante />
    </>
  );
}



export const getServerSideProps = async (context) => {


  
  const url2 = `${backend_url}/api/leistungen`;
  const res2 = await fetch(url2);
  const servicios_lista = await res2.json();

  const url3 = `${backend_url}/api/curso`;
  const res3 = await fetch(url3);
  const cursos_lista = await res3.json();


  return {
    props: {

      cursos_lista,
      servicios_lista
    },
  };
};