import { servidor_url } from '../config'
import { expire_cookies_in_days } from '../config'
import Head from 'next/head'
import Image from 'next/image'

//Componentes
import AreaSuperior from '../componentes/area_superior/AreaSuperior'

import Content02Cursos from '../components/Content02Cursos'
import Content03 from '../components/Content03'
import Content03Carrousel from '../components/Content03Carrousel'

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
 


  return (
    <>
      <Head>
        <title>OPEN AGILE</title>
        <meta name="description" content="OPEN AGILE" />
        <link rel="icon" href="/favicon.ico" />
        <script async src="js/chat.js" />
        <script async src="js/menu.js" />
      </Head>




      <div id="principal" className="container-fluid g-0">


    


        <ModalFormCookie id={1} tiempo={1000} animar={true} />

        <MenuFlotanteBoton />



       <div className=" d-none  d-md-block">
      
        <AreaSuperior
          fondo="gris"
          texto1="OPEN AGILE"
          texto2="FOR BETTER WORK"
          botones_configurador={botones_configurador}
          iconos={true}
          area_gris_nueva={true}
           boton_inicio_quiz={false}
        />  
         
        </div>

        <div className=" d-md-none">
        <AreaSuperior
          fondo="gris"
          texto1="OPEN AGILE"
          texto2="FOR BETTER WORK"
          botones_configurador={botones_configurador}
          iconos={true}
          area_gris_nueva={true}
           boton_inicio_quiz={true}
        />  
        </div>
      

        <ContentVideo />

        {/*Cards CRASHKURSE  */}
        <Content02Cursos cursos={cursos} main_page={true} />

        {/*imagen de sponsors */}
        <div className=" d-none  d-md-block">
          <Content03 />
        </div>

        {/*imagen de sponsors */}
        <div className=" d-md-none">
          <Content03Carrousel />
        </div>

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
