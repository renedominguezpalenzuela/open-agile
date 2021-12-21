import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

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

import AreaSuperior from "../../componentes/area_superior/AreaSuperior";

import Content01Main from "../../components/maincontent/Content01Main";

import BarraConTextoDerecha from "../../components/BarraConTextoDerecha";
import BarraConTextoIzquierda from "../../components/BarraConTextoIzquierda";

import { servidor_url } from "../../config";

//----------------------------------------------------------------------------------------------------------
//            Pagina inicial principal
//----------------------------------------------------------------------------------------------------------

export default function Home({ servicios }) {
  const router = useRouter();
  const { id } = router.query;

  const {
    titulo1,
    titulo2,
    titulo2a,
    titulo3,
    titulo4,
    texto01,
    texto02,
    texto03,
  } = servicios;

  return (
    <>
      <Head>
        <title>{titulo2 + " " + titulo2a}</title>
        <meta name="description" content={titulo2} />
        <link rel="icon" href="/favicon.ico" />
        <script async src={`${servidor_url}/js/chat.js`} />
        <script async src={`${servidor_url}/js/menu.js`} />
      </Head>

      {/*Contenedor*/}

      <div id="principal" className="container-fluid g-0">
        <AreaSuperior fondo="gris" texto1={titulo2 + " " + titulo2a} texto_parrafo_blanco={texto01} />

        <div className="mt-5"> </div>
        <BarraConTextoDerecha titulo={titulo3} texto={texto01} />

        <div className="mt-5"> </div>
        <BarraConTextoIzquierda titulo={titulo4} texto={texto02} /> 

        <div className="mt-5"> </div>
        <TextoBloque01 texto_parrafo_array={texto03} />

        <div className="mb-5"> </div>
        <Footer />
      </div>

      {/*Menu Lateral oculto  */}
      <MenuFlotante />
    </>
  );
}

export const getServerSideProps = async (context) => {
  const { id } = context.query;
  const url = `${servidor_url}/api/servicio/${encodeURIComponent(id)}`;

  const res = await fetch(url);

  const servicios = await res.json();

  return {
    props: {
      servicios,
    },
  };
};
