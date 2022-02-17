import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import MenuFlotante from "../components/MenuFlotante";
import Footer from "../components/Footer";

import Content02Cursos from "../components/Content02Cursos";
import Content03 from "../components/Content03";
import Content04 from "../components/Content04";
import Content05 from "../components/Content05";
import Texto01 from "../components/crashkurse/texto01";
import Tabla01 from "../components/crashkurse/tabla01";
import Tabla02 from "../components/crashkurse/tabla02";

import Card01Lista from "../components/Card01Lista";
import MenuFlotanteBoton from "../components/MenuFlotanteBoton";
import TextoBloque01 from "../components/textobloque01";

import AreaSuperior from "../componentes/area_superior/AreaSuperior";

import LeistungenTabs from "../componentes/leistungen/LeistungenTabs";

import BarraConTextoDerecha from "../components/BarraConTextoDerecha";
import BarraConTextoIzquierda from "../components/BarraConTextoIzquierda";

import { servidor_url } from "../config";
import { backend_url } from "../config";

import ModalFormCookie from "../components/ModalFormCookie";

export default function Home({ servicios }) {
  const router = useRouter();
  const { id } = router.query;

  // const { titulo2, titulo3, titulo2a, titulo, texto01, texto02, texto03 } =
  //   servicios;

  const services = servicios.data.attributes;

  const {
    title,
    first_tab_title,
    first_tab_content,
    second_tab_title,
    second_tab_content,
    third_tab_title,
    third_tab_content,
  } = services;

  const classOftabs = (id) => {
    if (id == 1) return " alto-leistungen-tab-contenedor";
    else if (id == 2) return " alto-leistungen-tab-contenedor-2";
    else {
      return " alto-leistungen-tab-contenedor-3";
    }
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <link rel="icon" href="/favicon.ico" />
        <script async src={`${servidor_url}/js/chat.js`} />
        <script async src={`${servidor_url}/js/menu.js`} />
      </Head>

      {/*Contenedor*/}

      <div id="principal" className="container-fluid g-0">
        <MenuFlotanteBoton />
        <AreaSuperior
          fondo="ajustable"
          texto1={title.toUpperCase()}
          titulo_largo={true}
          area_gris_nueva={true}
          lei={true}
        />

        <div className={` mt-5 pb-3 + ${classOftabs(id)}`}>
          <LeistungenTabs
            texto01={first_tab_content}
            texto02={second_tab_content}
            texto03={third_tab_content}
            titulo01={first_tab_title}
            titulo02={second_tab_title}
            titulo={title}
          />
        </div>

        <Footer />
      </div>

      {/*Menu Lateral oculto  */}
      <MenuFlotante />
    </>
  );
}

export const getServerSideProps = async (context) => {
  const { id } = context.query;
  const url = `${servidor_url}/api/leistungen/${encodeURIComponent(id)}`;

  const res = await fetch(url);

  const servicios = await res.json();

  return {
    props: {
      servicios,
    },
  };
};
