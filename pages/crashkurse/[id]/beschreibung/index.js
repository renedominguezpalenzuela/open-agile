import { servidor_url } from "../../../../config";
import { backend_url } from "../../../../config";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import MenuKraskurse from "../../../../componentes/krashkurse/MenuKrashkurse";

import AreaSuperior from "../../../../componentes/area_superior/AreaSuperior";
import KurseContent01 from "../../../../componentes/krashkurse/KurseContent01";

import MenuFlotante from "../../../../components/MenuFlotante";
import Footer from "../../../../components/Footer";
import MenuFlotanteBoton from "../../../../components/MenuFlotanteBoton";

import Tabla03 from "../../../../components/crashkurse/tabla03";

import ModalFormCookie from "../../../../components/ModalFormCookie";

export default function Home({ curso }) {
  const link_pdfs = (links) => {
    let aux = [];

    for (let i = 0; i < links.length; i++) {
      aux.push({
        path: links[i].attributes.url,
        name: links[i].attributes.name,
      });
    }

    return aux;
  };

  const router = useRouter();
  const { id } = router.query;

  const titulo_area_superior = curso.data.attributes.page_title;
  // const image2 = curso.data.attributes.beschreibung_image.data.attributes.url,
  const image_beschreibung =
    curso.data.attributes.beschreibung_image.data.attributes.url;

  const link_beschreibung = `crashkurse/${curso.data.attributes.slug}/beschreibung`;
  const link_vorteile = `crashkurse/${curso.data.attributes.slug}/vorteile`;
  const link_inhalte = `crashkurse/${curso.data.attributes.slug}/inhalte`;
  const link_leistungen = `crashkurse/${curso.data.attributes.slug}/leistungen`;
  const link_kosten = `crashkurse/${curso.data.attributes.slug}/kosten`;
  const link_termine = "/#dates_section";
  const link_pdf = link_pdfs(curso.data.attributes.files.data);

  let link_termine_new = "";

  if (link_termine != undefined && link_termine.length > 0) {
    link_termine_new = servidor_url + "/" + link_beschreibung + link_termine;
  }

  const [desktop_screen, setDesktop_screen] = useState(true);
  const [landscape, setLandscape] = useState(false);

  const handleResize = () => {
    let ancho_screen = window.innerWidth;
    let alto_screen = window.innerHeight;
    if (ancho_screen > alto_screen) {
      setLandscape(true);
    } else {
      setLandscape(false);
    }
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
        <title>{titulo_area_superior}</title>
        <meta name="description" content={titulo_area_superior} />
        <link rel="icon" href="/favicon.ico" />
        <script async src={`${servidor_url}/js/chat.js`} />
        <script async src={`${servidor_url}/js/menu.js`} />
      </Head>

      <div id="principal" className="container-fluid g-0">
        <MenuFlotanteBoton />

        {/* <AreaSuperior
          fondo="ajustable"
          texto1={titulo_area_superior}
          titulo_largo={true}
          area_gris_nueva={true}
          bes={true}
        /> */}

        {desktop_screen ? (
          <AreaSuperior
            fondo="ajustable"
            texto1={titulo_area_superior}
            titulo_muy_largo={true}
            area_gris_nueva={true}
            shop={true}
          />
        ) : (
          <AreaSuperior
            fondo="ajustable"
            texto2={titulo_area_superior}
            titulo_muy_largo={true}
            area_gris_nueva={true}
            shop={true}
          />
        )}

        <div className="row  pt-md-5 pb-md-5">
          <div className={`${landscape ? "col-md-5" : "col-md-4"}`}>
            <MenuKraskurse
              link_beschreibung={link_beschreibung}
              link_vorteile={link_vorteile}
              link_inhalte={link_inhalte}
              link_leistungen={link_leistungen}
              link_kosten={link_kosten}
              link_termine={link_termine}
              link_pdf={link_pdf}
            />
          </div>

          <div className="col-md-7 pt-5 pe-md-5 " id="section_beschreibung">
            <KurseContent01
              imagen={image_beschreibung}
              description={curso.data.attributes.beschreibung_description}
              text_termine={"2022"}
              link_weitere_infos={link_vorteile}
            />
          </div>
        </div>

        {/* <Tabla03
          className="mt-5"
          crashkurs_date_title={crashkurs_date_title}
          crashkurs_date={crashkurs_date}
          titulo2a={crashkurs_date_title}
          precio={texto_kosten}
          nombre_curso={nombre_curso}
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
  const url = `${backend_url}/api/curso/beschreibung/${encodeURIComponent(id)}`;
  const res = await fetch(url);

  const curso = await res.json();

  return {
    props: {
      curso,
    },
  };
};
