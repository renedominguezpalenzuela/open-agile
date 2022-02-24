import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

import React from "react";

import MenuFlotante from "../../components/MenuFlotante";
import MenuFlotanteBoton from "../../components/MenuFlotanteBoton";
import Footer from "../../components/Footer";

import TextoBloque01 from "../../components/textobloque01";
import TextoSimple from "../../components/textosimple";

import AreaSuperior from "../../componentes/area_superior/AreaSuperior";

import { servidor_url } from "../../config";
import { backend_url } from "../../config";

export default function Home({ team }) {
  const router = useRouter();
  const { id } = router.query;

  // const {
  //   image,
  //   title,
  //   motto,
  //   motto_author,
  //   text,
  //   telefono,
  //   correo,
  //   imagetop,
  //   linkedin,
  //   title3,
  //   erfahrung,
  //   weiterbildungen,
  //   imageround,
  //   cargo,
  // } = team;

 

  let foto2 = team?.attributes?.image?.data?.attributes?.url;

  return (
    <>
      <Head>
        <title>
          {"Wir"} - {team.attributes.header_title}
        </title>
        <meta name="description" content="Wir" />
        <link rel="icon" href="/favicon.ico" />
        <script async src={`${servidor_url}/js/chat.js`} />
        <script async src={`${servidor_url}/js/menu.js`} />
      </Head>

      <div id="principal" className="container-fluid  g-0">
        <MenuFlotanteBoton />

        <AreaSuperior
          fondo="team"
          texto2={team.attributes.header_title}
          texto_parrafo_blanco_team={[team.attributes.description]}
          img_team_top={team.attributes.imagetop.data.attributes.url}
          iconos_team={true}
          email={team.attributes.email}
          linkedin={team.attributes.linkedin}
          phone={"tel:" + team.attributes.phone}
          linea_obliqua={true}
        />

        {team.attributes.button_text != undefined &&
          team.attributes.button_text != "" && (
            <div className="row mt-5 mb-5 text-center  ">
              <h3 className="nombre_team">
                {" "}
                {team.attributes.button_text.toUpperCase()}{" "}
              </h3>
            </div>
          )}
        <>
          <div className="row d-flex justify-content-center">
            <div className="col-9 col-md-6  font_weiterbildungen">
              Qualifikationen
            </div>
          </div>

          <div className="row d-flex justify-content-center  ">
            <div className="col-9 col-md-6 mt-2">
              <ul>
                <div className="font_erfahrum_detalles  ">
                  {team.attributes.qualifikationen
                    .split("\n")
                    .map((item, index) => (
                      <li className="bullets-team"> {item} </li>
                    ))}
                </div>
              </ul>
            </div>
          </div>

          <div className="row d-flex justify-content-center ">
            <div className="col-md-6 col-9 mt-4 horizontal-line"></div>
          </div>
        </>

        <>
          <div className="row mt-5 d-flex justify-content-center">
            <div className="col-md-6 col-9  font_weiterbildungen">
              Projekterfahrungen
            </div>
          </div>

          <div className="row d-flex justify-content-center ">
            <div className="col-md-6 col-9 mt-2 ">
              <ul>
                <div className="font_erfahrum_detalles  ">
                  {team.attributes.projekterfahrungen
                    .split("\n")
                    .map((item, index) => (
                      <li key={index} className="bullets-team">
                        {" "}
                        {item}{" "}
                      </li>
                    ))}
                </div>
              </ul>
            </div>
          </div>

          <div className="row d-flex justify-content-center ">
            <div className="col-md-6 col-9 mt-4 horizontal-line"></div>
          </div>
        </>

        <div className="row mt-1 mb-2 mt-md-3 mb-md-4 d-flex justify-content-center  ">
          <div className="col-md-6 col-9 mt-2">
            <div className="font_texto_inferior_team  ">
              {" "}
              {`seit 2022 bei Open Agile`}{" "}
            </div>
          </div>
        </div>

        <div className="row pb-3 g-0 fondo_team_seccion ">
          <div className="col-4 d-flex justify-content-center align-items-center ">
            <img
              className="pt-4  imagen-team"
              src={team.attributes.imageround.data.attributes.url}
              loading="lazy" 
            />
          </div>

          <div className="col-7 mt-5 pt-5 pb-2  h-100">
            <div className="row   pe-md-3 me-md-3  font_motto_team  ">
              {team.attributes.motto_quote}
            </div>
            <div className="row   pe-md-3 me-md-3  font_motto_team  ">
              {team.attributes.motto_author}
            </div>

            <div className=" row  mt-3 me-1  horizontal-line "></div>

            <div className=" row  mt-3 font_title1-team-seccion  ">
              Motto von {team.attributes.name.split(" ")[0]}
            </div>

            {/* <div className="row  mt-2 font_title2-team-seccion font_title_purple ">{cargo}</div> */}
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
  const url = `${backend_url}/api/team/${encodeURIComponent(id)}`;
  const res = await fetch(url);

  const team = await res.json();

  return {
    props: {
      team,
    },
  };
};
