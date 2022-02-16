import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import AreaSuperior from "../../componentes/area_superior/AreaSuperior";

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

import { servidor_url } from "../../config";
import { backend_url } from "../../config";

//----------------------------------------------------------------------------------------------------------
//            Pagina inicial principal
//----------------------------------------------------------------------------------------------------------

export default function Home({ curso }) {
  const router = useRouter();
  const { id } = router.query;

  const {
    titulo1,
    titulo2,
    titulo2a,
    titulo3,
    imagen01,
    items_tabla,
    crashkurs_date_title,
    crashkurs_date,
    texto_kosten,
    titulo_area_superior,
  } = curso;

  return (
    <>
      <Head>
        <title>{titulo2 + " " + titulo2a}</title>
        <meta name="description" content={titulo2} />
        <link rel="icon" href="/favicon.ico" />
        <script async src={`${servidor_url}/js/chat.js`} />
        <script async src={`${servidor_url}/js/menu.js`} />
      </Head>

      <div id="principal" className="container-fluid g-0">
        <MenuFlotanteBoton />

        <AreaSuperior
          fondo="gris"
          texto1={titulo1}
          texto2={titulo2}
          texto2a={titulo2a}
          area_gris_nueva={true}
        />

        {/* Tabla 1: imagenes alternas */}
        {/* <div id="course" className="row  text-center mb-5 mt-5  ">
          <h3 className="font_titulo_detalles "> {titulo3}</h3>
        </div> */}

        <Tabla01 className="" items_tabla={items_tabla} numero_tabla="1" />

        {/* Tabla3 --- Cards con fechas de cursos */}
        {/* <Tabla03
          className="mt-5"
          crashkurs_date_title={crashkurs_date_title}
          crashkurs_date={crashkurs_date}
          titulo={titulo2 + " " + titulo2a}
          titulo2a={titulo2a}
          precio={texto_kosten}
          nombre_curso={titulo_area_superior}
        /> */}

        {/*Footer  */}
        <Footer />
      </div>

      {/*Menu Lateral oculto  */}
      <MenuFlotante />
    </>
  );
}

export const getServerSideProps = async (context) => {
  const { id } = context.query;
  const url = `${backend_url}/api/curso/${encodeURIComponent(id)}`;
  const res = await fetch(url);

  const curso = await res.json();

  return {
    props: {
      curso,
    },
  };
};
