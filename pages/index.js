import { servidor_url } from '../config'
import { expire_cookies_in_days } from '../config'
import Head from 'next/head'
import Image from 'next/image'

//Componentes
import AreaSuperior from '../componentes/area_superior/AreaSuperior'

import Content02Cursos from '../components/Content02Cursos'
import Content03 from '../components/Content03'
import Content04 from '../components/Content04'
import Content05 from '../components/Content05'

import Card01Lista from '../components/Card01Lista'
import ContentVideo from '../components/ContentVideo'

import MenuFlotanteBoton from '../components/MenuFlotanteBoton'

import MenuFlotante from '../components/MenuFlotante'
import Footer from '../components/Footer'

import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'

import ModalFormCookie from '../components/ModalFormCookie'

//----------------------------------------------------------------------------------------------------------
//            Pagina inicial principal
//----------------------------------------------------------------------------------------------------------

export default function Home({
  cursos,
  servicios,
  blogs,
  botones_configurador,
  vlog,
}) {
  // const [mostrarVentanaCookies, SetmostrarVentanaCookies] = useState(false);

  // let first_time = Cookies.get("first_time");

  // if (first_time === undefined || first_time==="true") {
  //   first_time = true;
  // } else {
  //   first_time = false;
  // }

  // //solo para ruebas
  //   first_time=true;

  // useEffect(() => {
  //   if (first_time === true) {
  //     setTimeout(() => {
  //       myfunc(first_time);
  //       SetmostrarVentanaCookies(true);
  //          Cookies.set("first_time", false, { expires: expire_cookies_in_days });
  //     }, 1000);
  //   }
  // }, []);

  //TODO:  mostrar la ventana al cabo de 5 s

  return (
    <>
      <Head>
        <title>OPEN AGILE</title>
        <meta name="description" content="OPEN AGILE" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
          crossorigin="anonymous"
        ></link>
        <script async src="js/chat.js" />
        <script async src="js/menu.js" />
      </Head>

      <div id="principal" className="container-fluid g-0">
        <ModalFormCookie id={1} tiempo={1000} animar={true} />

        <MenuFlotanteBoton />

        <AreaSuperior
          fondo="gris"
          texto1="OPEN AGILE"
          texto2="FOR BETTER WORK"
          botones_configurador={botones_configurador}
          iconos={true}
          area_gris_nueva={true}
          boton_inicio_quiz={true}
        />

        <ContentVideo />

        {/*Cards CRASHKURSE  */}
        <Content02Cursos cursos={cursos} main_page={true} />

        {/*imagen de sponsors */}
        <Content03 />

        {/*Unser Blog  */}
        <Content04 lista_cards={blogs} />

        {/*Carrousel videos */}
        <Content05 datos={vlog} />

        {/* Servicios Leistungen  */}
        <div id="services" className=" mt-5 mb-5 pb-5">
          <h3 className="font_title_seccion_sombra "> LEISTUNGEN</h3>
          <h5 className="font_second_line2 d-flex justify-content-center text-center px-4 p-md-0">
            Beratung, Training & Coaching im agilen Kontext
          </h5>

          <Card01Lista lista_cards={servicios} titulo_magenta={true} />
        </div>

        {/*Footer  */}
        <Footer />
      </div>

      {/*Menu Lateral oculto  */}
      <MenuFlotante />
    </>
  )
}

//Obteniendo los datos desde el servidor
export const getServerSideProps = async (context) => {
  // const url = `${servidor_url}/api/curso`;
  // const res = await fetch(url);
  // const cursos = await res.json();

  const url = `${servidor_url}/api/curso`
  const res = await fetch(url)
  const cursos = await res.json()

  const url2 = `${servidor_url}/api/servicio`
  const res2 = await fetch(url2)
  const servicios = await res2.json()

  const url3 = `${servidor_url}/api/blog`
  const res3 = await fetch(url3)
  const blogs = await res3.json()

  const url4 = `${servidor_url}/api/configurator/1`
  const res4 = await fetch(url4)
  const botones_configurador = await res4.json()

  const url5 = `${servidor_url}/api/vlog`
  const res5 = await fetch(url5)
  const vlog = await res5.json()

  return {
    props: {
      cursos,
      servicios,
      blogs,
      botones_configurador,
      vlog,
    },
  }
}
