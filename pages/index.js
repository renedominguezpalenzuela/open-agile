import { servidor_url } from "../config";
import Head from "next/head";
import Image from "next/image";

//Componentes
import AreaSuperior from "../componentes/area_superior/AreaSuperior";

import Content02Cursos from "../components/Content02Cursos";
import Content03 from "../components/Content03";
import Content04 from "../components/Content04";
import Content05 from "../components/Content05";

import Card01Lista from "../components/Card01Lista";
import MenuFlotanteBoton from "../components/MenuFlotanteBoton";

import MenuFlotante from "../components/MenuFlotante";
import Footer from "../components/Footer";

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



 
  // console.log(process.env.NEXT_PUBLIC_ANALYTICS_ID);
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
      
        <MenuFlotanteBoton />

        <AreaSuperior fondo="gris" texto1="OPEN AGILE" texto2="FOR BETTER WORK" botones_configurador={botones_configurador} iconos={true} />

        {/*Cards CRASHKURSE  */}
        <Content02Cursos cursos={cursos} />

        {/*imagen de sponsors */}
        <Content03 />

        {/*Unser Blog  */}
        <Content04 lista_cards={blogs} />

        {/*Carrousel  */}
        <Content05 datos={vlog} />

        {/* Servicios  */}
        <div id="services" className=" mt-5 ">
          <div className="row justify-content-center font_title_seccion_sombra  mt-1 ms-4"> LEISTUNGEN </div>
          <Card01Lista lista_cards={servicios} titulo_magenta={true} />
        </div>

        {/*Footer  */}
        <Footer />
      </div>

      {/*Menu Lateral oculto  */}
      <MenuFlotante />
    </>
  );
}

//Obteniendo los datos desde el servidor
export const getServerSideProps = async (context) => {
  const url = `${servidor_url}/api/curso`;
  const res = await fetch(url);
  const cursos = await res.json();

  const url2 = `${servidor_url}/api/servicio`;
  const res2 = await fetch(url2);
  const servicios = await res2.json();

  const url3 = `${servidor_url}/api/blog`;
  const res3 = await fetch(url3);
  const blogs = await res3.json();

  const url4 = `${servidor_url}/api/configurator/1`;
  const res4 = await fetch(url4);
  const botones_configurador = await res4.json();

  const url5 = `${servidor_url}/api/vlog`;
  const res5 = await fetch(url5);
  const vlog = await res5.json();

  return {
    props: {
      cursos,
      servicios,
      blogs,
      botones_configurador,
      vlog,
    },
  };
};
