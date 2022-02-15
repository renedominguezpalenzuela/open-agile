import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import MenuFlotante from "../../components/MenuFlotante";
import Footer from "../../components/Footer";

import Content02Cursos from "../../components/Content02Cursos";

import MenuFlotanteBoton from "../../components/MenuFlotanteBoton";

import { servidor_url } from "../../config";
import { backend_url } from "../../config";

import AreaSuperior from "../../componentes/area_superior/AreaSuperior";

import Card01Lista from "../../components/Card01Lista";

import ModalFormCookie from "../../components/ModalFormCookie";

//----------------------------------------------------------------------------------------------------------
//            Pagina inicial principal
//----------------------------------------------------------------------------------------------------------

const texto_parrafo_array = [
  "Viele Supertrends, wie die voranschreitende Digitalisierung, Nachhaltigkeit, Individualisierung oder New Work drängen Unternehmen zu tiefgreifenden Veränderungen in allen Bereichen, was wiederum eine sehr hohe Lernbereitschaft aller Mitarbeitenden voraussetzt ",
  "Die erfolgreichsten Unternehmen im 21. Jahrhundert haben es also verstanden Strukturen zu etablieren, in denen gemeinsames Lernen stattfindet und Veränderungen als Chance begriffen werden",
  "Das Team von Open Agile begleitet Euch dabei Eure Strukturen zu hinterfragen und eine für Euch individuelle und zukunftsfähige Form der Zusammenarbeit zu kreieren, in der Ihr gemeinsam wachsen und Euer Potential zu 100% ausschöpfen könnt",
];

export default function Home({ servicios }) {
  const router = useRouter();
  const { id } = router.query;

  const titulo1 = "LEISTUNGEN";

  return (
    <>
      <Head>
        <title>{titulo1}</title>
        <meta name="description" content={titulo1} />
        <link rel="icon" href="/favicon.ico" />
        <script async src={`${servidor_url}/js/chat.js`} />
        <script async src={`${servidor_url}/js/menu.js`} />
      </Head>

      <div id="principal" className="container-fluid g-0">
        <MenuFlotanteBoton />

        <AreaSuperior
          fondo="variable"
          texto_parrafo_blanco_cursos={texto_parrafo_array}
          cursos={true}
          firma={["Dein Open Agile Team", " for better work"]}
          area_gris_nueva={true}
        />

        {/* Servicios Leistungen  */}
        <div id="services" className=" mt-5 mb-5 pb-5">
          <h3 className="font_title_seccion_sombra "> LEISTUNGEN</h3>
          <h5 className="font_second_line2 d-flex justify-content-center">
            Beratung, Training & Coaching im agilen Kontext
          </h5>

          {/* <div className="row d-flex justify-content-center font_title_seccion_sombra  mt-1 ms-4">  </div>
           <h5 className="font_second_line2 d-flex justify-content-center mt-2">
           
          </h5> */}
          <Card01Lista lista_cards={servicios} titulo_magenta={true} />
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
  const url2 = `${servidor_url}/api/leistungen`;
  const res2 = await fetch(url2);
  const servicios = await res2.json();

  return {
    props: {
      servicios,
    },
  };
};
