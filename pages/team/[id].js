import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'

import React from 'react'

import MenuFlotante from '../../components/MenuFlotante'
import MenuFlotanteBoton from '../../components/MenuFlotanteBoton'
import Footer from '../../components/Footer'

import TextoBloque01 from '../../components/textobloque01'
import TextoSimple from '../../components/textosimple'

// import MenuSuperior from "../components/MenuSuperior";

import AreaSuperior from '../../componentes/area_superior/AreaSuperior'

import { servidor_url } from '../../config'

//----------------------------------------------------------------------------------------------------------
//            Pagina inicial principal
//----------------------------------------------------------------------------------------------------------

export default function Home({ team }) {
  const router = useRouter()
  const { id } = router.query

  const {
    image,
    title,
    motto,
    motto_author,
    text,
    telefono,
    correo,
    imagetop,
    linkedin,
    title3,
    erfahrung,
    weiterbildungen,
    imageround,
    cargo,
  } = team

  let foto2 = servidor_url + '/img/' + image

  return (
    <>
      <Head>
        <title>{'Wir'}</title>
        <meta name="description" content="Wir" />
        <link rel="icon" href="/favicon.ico" />
        <script async src={`${servidor_url}/js/chat.js`} />
        <script async src={`${servidor_url}/js/menu.js`} />
      </Head>

      {/*Contenedor*/}

      <div id="principal" className="container-fluid  g-0">
        <MenuFlotanteBoton />

        <AreaSuperior
          fondo="team"
          texto2={title}
          texto_parrafo_blanco_team={text}
          img_team_top={imagetop}
          iconos_team={true}
          email={correo}
          linkedin={linkedin}
          phone={telefono }
          linea_obliqua={true}
        />

        {title3 != undefined && title3 != '' && (
          <div className="row mt-5 mb-5 text-center  ">
            <h3 className="nombre_team"> {title3} </h3>
          </div>
        )}

        {erfahrung != undefined && erfahrung != '' && (
          <>
            <div className="row d-flex justify-content-center">
              <div className="col-9 col-md-6  font_weiterbildungen">
                Qualifikationen
              </div>
            </div>

            <div className="row d-flex justify-content-center  ">
              <div className="col-9 col-md-6 mt-2">
                <ul>
                  {erfahrung.map((unErfarung, index) => (
                    <div key={index} className="font_erfahrum_detalles  ">
                      <li className="mybullets2"> {unErfarung} </li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>

            <div className="row d-flex justify-content-center ">
              <div className="col-md-6 col-9 mt-4 horizontal-line"></div>
            </div>
          </>
        )}

        {weiterbildungen != undefined && weiterbildungen != '' && (
          <>
            <div className="row mt-5 d-flex justify-content-center">
              <div className="col-md-6 col-9  font_weiterbildungen">
                Projekterfahrungen
              </div>
            </div>

            <div className="row d-flex justify-content-center ">
              <div className="col-md-6 col-9 mt-2 ">
                <ul>
                  {weiterbildungen.map((unWeiterbildungen, index) => (
                    <div key={index} className="font_erfahrum_detalles  ">
                      {/* • {unWeiterbildungen} */}
                      <li className="mybullets2"> {unWeiterbildungen } </li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>

            <div className="row d-flex justify-content-center ">
              <div className="col-md-6 col-9 mt-4 horizontal-line"></div>
            </div>
          </>
        )}

        <div className="row mt-1 mb-2 mt-md-3 mb-md-4 d-flex justify-content-center  ">
          <div className="col-md-6 col-9 mt-2">
            <div className="font_texto_inferior_team  ">
              {' '}
              {`seit 2021 bei Open Agile`}{' '}
            </div>
          </div>
        </div>

        <div className="row pb-3  fondo_team_seccion">
          <div className="col-4   d-flex justify-content-center align-items-center ">
            <img
              className="  pt-4 pb-4 imagen-team"
              src={`${servidor_url}/img/${imageround}`}
            />
          </div>

          {/* "col {} mt-5 pt-5 " */}
          <div
            className={`col-7  ${
              motto.length >= 2 ? 'mt-1' : 'mt-5'
            }  pt-5 pb-2 me-3 h-100 `}
          >
            {motto.map((unMotto, index) => (
              <div key={index} className="row   pe-3 me-3  font_motto_team  ">
                {unMotto}
              </div>
            ))}

            <div className=" row  mt-3 me-5  horizontal-line "></div>

            <div className=" row  mt-3 font_title1-team-seccion ">
              {motto_author}
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
  )
}

export const getServerSideProps = async (context) => {
  const { id } = context.query
  const url = `${servidor_url}/api/team/${encodeURIComponent(id)}`
  const res = await fetch(url)

  const team = await res.json()

  return {
    props: {
      team,
    },
  }
}
