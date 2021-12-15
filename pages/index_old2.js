import { servidor_url } from "../config";
import Head from "next/head";
import Image from "next/image";


//Componentes
import AreaSuperior from "../componentes/area_superior/AreaSuperior";


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






      <div className="container-fluid g-0">     
       <AreaSuperior/>     
      </div>
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
