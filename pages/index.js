import { servidor_url } from "../config";
import { backend_url } from "../config";
import Head from "next/head";

//Componentes
import AreaSuperior from "../componentes/area_superior/AreaSuperior";

import Content02Cursos from "../components/Content02Cursos";
import Content03 from "../components/Content03";
import Content03Carrousel from "../components/Content03Carrousel";

import Content04 from "../components/Content04";
import Content05 from "../components/Content05";

import Card01Lista from "../components/Card01Lista";
import ContentVideo from "../components/ContentVideo";

import MenuFlotanteBoton from "../components/MenuFlotanteBoton";

import MenuFlotante from "../components/MenuFlotante";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

//----------------------------------------------------------------------------------------------------------
//            Pagina inicial principal
//----------------------------------------------------------------------------------------------------------

export default function Home({
  cursos,
  servicios,
  blogs,
  botones_configurador,
  vlog,
  main_logos,
}) {
  const [desktop_screen, setDesktop_screen] = useState(true);
  const [vista_landscape, setVistaLandScape] = useState(false);

   const [ancho_screen, setAncho] = useState(0);
   const [alto_screen, setAlto] = useState(0);

   const [cadena_mostrar , setCadena]=useState("Info:");

 

  const handleResize = () => {
    setAncho(window.innerWidth);
    setAlto(window.innerHeight);
  //  setAncho(window.screen.width);
  //   setAlto(window.screen.height);
   

  
    
    if (ancho_screen > 992) {
      setDesktop_screen(true);
    } else {
      setDesktop_screen(false);
    }


// +"| next "+window.next.version
//  "| OS: "+window.platform.description 
    //  setCadena("Width_scr: "+window.screen.width+" Height_scr: "+window.screen.height+" | Width: "+ancho_screen+" Height: "+alto_screen+"  | Browser: "+window.clientInformation.appVersion );
  };





  useEffect(() => {
     handleResize();
 
    window.addEventListener("resize", handleResize);
        
    return () => {
      window.removeEventListener("resize", handleResize);
    
    }
  });

  return (
    <>
      <Head>
        <title>Open Agile - for better work</title>
        <meta
          name="description"
          content="Wir sind Open Agile, die hanseatische Unternehmensberatung - wir begleiten Euch dabei, eine individuelle und zukunftsfähige Zusammenarbeit zu kreieren!"
        />
        <link rel="icon" href="/favicon.ico" />
        <script async src="js/chat.js" />
        <script async src="js/menu.js" />
      </Head>

      <div id="principal" className="container-fluid g-0">
        <input
          id="test_version"
          name="test_version"
          type="hidden"
          value={process.env.NEXT_PUBLIC_VER}
        />

        <MenuFlotanteBoton />

        {desktop_screen ? (
          
          <AreaSuperior
            fondo="gris"
            texto1="OPEN AGILE"
            texto2="FOR BETTER WORK"
            botones_configurador={botones_configurador}
            iconos={true}
            area_gris_nueva={true}
            boton_inicio_quiz={false}
            servicios_lista={servicios} 
            cursos_lista={cursos} 
          />
        ) : (
          <AreaSuperior
            fondo="gris"
            texto1="OPEN AGILE"
            texto2="FOR BETTER WORK"
            botones_configurador={botones_configurador}
            iconos={true}
            area_gris_nueva={true}
            boton_inicio_quiz={true}
            home={1}
            servicios_lista={servicios} 
            cursos_lista={cursos} 
          />
        )}

        <ContentVideo />

        {/*Cards CRASHKURSE  */}
        <Content02Cursos cursos={cursos} main_page={true} />

        {/*imagen de sponsors */}
        <div className=" d-none  d-md-block">
        
          <Content03 mainlogos={main_logos} />
        </div>

        {/*imagen de sponsors */}
        <div className="row   d-md-none">
       
          <Content03Carrousel mainlogos={main_logos} />
        </div>

        {/*Unser Blog  */}
        <Content04 lista_cards={blogs} main_page={true} ancho={ancho_screen} alto={alto_screen}/>

        {/*Carrousel videos */}
        <Content05 datos={vlog} />

        {/* Servicios Leistungen  */}
        <div id="leistungen" className=" mt-5 mb-5 pb-5 offset-lateral-menu">
          <h3 className="font_title_seccion_sombra "> LEISTUNGEN</h3>
          <h5 className="font_second_line2 d-flex justify-content-center text-center px-4 p-md-0">
            Beratung, Training & Coaching im agilen Kontext
          </h5>

          <Card01Lista
            lista_cards={servicios}
            titulo_magenta={true}
            main_page={true}
          />
        </div>

        {/*Footer  */}

       <Footer servicios_lista={servicios} cursos_lista={cursos} />
      </div>

      {/*Menu Lateral oculto  */}
      <MenuFlotante />
    </>
  );
}

//Obteniendo los datos desde el servidor
export const getServerSideProps = async (context) => {
  const url = `${backend_url}/api/curso`;
  const res = await fetch(url);
  const cursos = await res.json();

  const url2 = `${backend_url}/api/leistungen`;
  const res2 = await fetch(url2);
  const servicios = await res2.json();

  const url3 = `${backend_url}/api/blog`;
  const res3 = await fetch(url3);
  const blogs = await res3.json();

  const url4 = `${backend_url}/api/configurator/1`;
  const res4 = await fetch(url4);
  const botones_configurador = await res4.json();

  const url5 = `${backend_url}/api/vlog`;
  const res5 = await fetch(url5);
  const vlog = await res5.json();

  const url6 = `${servidor_url}/api/main_logos`;
  const res6 = await fetch(url6);
  const main_logos = await res6.json();

  return {
    props: {
      cursos,
      servicios,
      blogs,
      botones_configurador,
      vlog,
      main_logos,
    },
  };
};
