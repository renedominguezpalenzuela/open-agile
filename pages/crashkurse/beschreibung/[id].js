import { servidor_url } from "../../../config";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import MenuKraskurse from "../../../componentes/krashkurse/MenuKrashkurse";


import AreaSuperior from "../../../componentes/area_superior/AreaSuperior";
import KurseContent01 from "../../../componentes/krashkurse/KurseContent01";

import MenuFlotante from "../../../components/MenuFlotante";
import Footer from "../../../components/Footer";
import MenuFlotanteBoton from "../../../components/MenuFlotanteBoton";




export default function Home({ curso }) {
  const router = useRouter();
  const { id } = router.query;

  const {
    titulo_area_superior,
    titulo_seccion,
    image1,
    image2,
    texto_beschreibung,
    link_beschreibung,
    link_vorteile,
    link_inhalte,
    link_leistungen,
    link_kosten,
    link_weitere_infos,
    text_termine,
    link_termine,
    link_pdf,
  } = curso;

  return (
    <>
      <Head>
        <title>{titulo_seccion}</title>
        <meta name="description" content={titulo_seccion} />
        <link rel="icon" href="/favicon.ico" />
        <script async src={`${servidor_url}/js/chat.js`} />
        <script async src={`${servidor_url}/js/menu.js`} />
      </Head>

      <div id="principal" className="container-fluid g-0">
        <MenuFlotanteBoton />

        <AreaSuperior fondo="ajustable" texto1={titulo_area_superior} titulo_largo={true} />

        <div class="row pt-5 pb-5">
          <div class="col-4">
            <MenuKraskurse link_beschreibung={link_beschreibung}/>
          </div>
          <div class="col-7  pe-5">

          <KurseContent01 imagen={image1} titulo={titulo_seccion} texto={texto_beschreibung} />
            
          </div>
        </div>

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
  const url = `${servidor_url}/api/curso/beschreibung/${encodeURIComponent(
    id
  )}`;
  const res = await fetch(url);

  const curso = await res.json();

  return {
    props: {
      curso,
    },
  };
};
