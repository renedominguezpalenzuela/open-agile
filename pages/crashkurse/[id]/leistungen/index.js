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

export default function Home({ curso, servicios_lista, cursos_lista }) {
  const router = useRouter();
  const { id } = router.query;

  const {
    titulo_area_superior,
    titulo_dates,
    image2,
    image_leistungen,
    texto_leistungen,
    link_beschreibung,
    link_vorteile,
    link_inhalte,
    link_leistungen,
    link_kosten,
    link_weitere_infos,
    text_termine,
    link_termine,
    link_pdf,
    crashkurs_date_title,
    crashkurs_date,
    texto_kosten,
    link_boton,
    nombre_curso,
  } = curso;

  let link_termine_new = "";

  if (link_termine != undefined && link_termine.length > 0) {
    link_termine_new = servidor_url + "/" + link_leistungen + link_termine;
  }

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
          titulo_largo={true} area_gris_nueva={true}
        /> */}

        <AreaSuperior
          fondo="ajustable"
          texto2={titulo_area_superior}
          titulo_muy_largo={true}
          area_gris_nueva={true}
          shop={true}
               servicios_lista={servicios_lista} 
            cursos_lista={cursos_lista} 
        />

        <div className="row pt-5 pb-5">
          <div className="col-md-4 ">
            <MenuKraskurse
              link_beschreibung={link_beschreibung}
              link_vorteile={link_vorteile}
              link_inhalte={link_inhalte}
              link_leistungen={link_leistungen}
              link_kosten={link_kosten}
              link_termine={link_termine_new}
              link_pdf={link_pdf}
              link_boton={link_boton}
            />
          </div>
          <div className="col-md-7 pt-5   pe-5" id="abschnitt">
            <KurseContent02
              imagen={image_leistungen}
              titulo="LEISTUNGEN"
              texto={texto_leistungen}
              imagen_botones={image2}
              titulo_botones={crashkurs_date_title}
              text_termine={text_termine}
              link_weitere_infos={link_kosten}
            />
          </div>
        </div>
        <Tabla03
          className="mt-5"
          crashkurs_date_title={crashkurs_date_title}
          crashkurs_date={crashkurs_date}
          titulo2a={crashkurs_date_title}
          precio={texto_kosten}
          nombre_curso={nombre_curso}
        />
        {/*Footer  */}
        <Footer servicios_lista={servicios_lista} cursos_lista={cursos_lista} />
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

  
  const url2 = `${backend_url}/api/leistungen`;
  const res2 = await fetch(url2);
  const servicios_lista = await res2.json();

  const url3 = `${backend_url}/api/curso`;
  const res3 = await fetch(url3);
  const cursos_lista = await res3.json();


  return {
    props: {
      curso,
      cursos_lista,
      servicios_lista
    },
  };
};
