import { servidor_url } from "../config";
import Head from "next/head";
import Image from "next/image";

import MenuFlotante from "../components/MenuFlotante";
import Footer from "../components/Footer";

import MenuFlotanteBoton from "../components/MenuFlotanteBoton";
// import MenuSuperior from "../components/MenuSuperior";

import TextoBloque01 from "../components/textobloque01";
import Image01 from "../components/crashkurse/image01";

import Tabla01 from "../components/crashkurse/tabla01";

import AreaSuperior from "../componentes/area_superior/AreaSuperior";

import BarraConTextoDerecha from "../components/BarraConTextoDerecha";
import BarraConTextoIzquierda from "../components/BarraConTextoIzquierda";

import Content05 from "../components/Content05";

import ModalFormCookie from "../components/ModalFormCookie";

//----------------------------------------------------------------------------------------------------------
//           CRASHKURSE \ CRASHKURS ZUM AGILE COACH
//----------------------------------------------------------------------------------------------------------

export default function Home({ vlog }) {
  const titulo1 = "VLOG";
  const titulo2 = "";
  const titulo2a = "";

  const titulo3 = "VLOG";

  const titulo4 = "";

  const texto01 = [
    "Ob interessante Interviews zum Thema New Work, kurze Fachbeiträge oder einfach mal ein paar spannende Impulse für die persönliche Weiterentwicklung. In diesem Vlog wirst Du regelmäßig auf dem Laufenden gehalten. Wir freuen uns auf die Arbeitswelt von morgen! Du auch? Willst Du keinen neuen Beitrag verpassen, dann abonniere unseren YouTube-Kanal „Open Agile“ und unseren Newsletter.",
    "Interviews zu New Work & Co. ",
    "Crashkurs Selbstorganisation in agilen Teams",
    "Impulse für Deine persönliche Weiterentwicklung ",
  ];

  const texto02 = [
    "Interviews zu New Work & Co. ",
    "Crashkurs Selbstorganisation in agilen Teams",
    "Impulse für Deine persönliche Weiterentwicklung ",
  ];

  const texto03 = [
    "Ob interessante Interviews zum Thema New Work, kurze Fachbeiträge oder einfach mal ein paar spannende Impulse für die persönliche Weiterentwicklung. In diesem Vlog wirst Du regelmäßig auf dem Laufenden gehalten. Wir freuen uns auf die Arbeitswelt von morgen! Du auch? Willst Du keinen neuen Beitrag verpassen, dann abonniere unseren YouTube-Kanal „Open Agile” und unseren Newsletter.",
  ];

  const text04_bullets = [
    "Interviews zu New Work & Co.",
    "Crashkurs Selbstorganisation in agilen Teams",
    "Impulse für Deine persönliche Weiterentwicklung",
  ];

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
          texto_parrafo_blanco_cursos={texto03}
          texto_parrafo_plequitas={text04_bullets}
          area_gris_nueva={true}
        />

        {/*Carrousel  */}
        <Content05 datos={vlog} color_fondo="blanco" />

        <div className="mt-5"> </div>

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
  const url5 = `${servidor_url}/api/vlog`;
  const res5 = await fetch(url5);
  const vlog = await res5.json();

  return {
    props: {
      vlog,
    },
  };
};
