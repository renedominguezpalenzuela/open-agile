import Head from "next/head";
import Image from "next/image";

import MenuFlotante from "../components/MenuFlotante";
import Footer from "../components/Footer";

import MenuFlotanteBoton from "../components/MenuFlotanteBoton";
// import MenuSuperior from "../components/MenuSuperior";

import TextoBloque01 from "../components/textobloque01";
import Image01 from "../components/crashkurse/image01";


import Tabla01 from "../components/crashkurse/tabla01";

import FormularioContacto2 from "../components/formulariocontacto2";

//Componentes
import AreaSuperior from "../componentes/area_superior/AreaSuperior";

//----------------------------------------------------------------------------------------------------------
//           CRASHKURSE \ CRASHKURS ZUM AGILE COACH
//----------------------------------------------------------------------------------------------------------

export default function Home( {cursos_lista,  servicios_lista}) {
  const titulo1 = "NEWS";
  const titulo2 = "";
  const titulo2a = "";

  const titulo3 = "Open Agile geht an den Start";

  const titulo4 =
    "Verpasse keine Neuigkeiten rund um Open Agile und abonniere unseren Newsletter. ";

  const titulo5 = "Unsere Leistungen im Überblick:";

  const texto01 = [
    "Viele Supertrends wie die voranschreitende Digitalisierung, Nachhaltigkeit, Individualisierung oder New Work drängen Unternehmen zu tiefgreifenden Veränderungen in allen Bereichen, was wiederum eine sehr hohe Lernbereitschaft aller Mitarbeitenden voraussetzt.",
    "Die erfolgreichsten Unternehmen im 21. Jahrhundert haben es also verstanden Strukturen zu etablieren, in denen gemeinsames Lernen stattfindet und Veränderungen als Chance begriffen werden. Doch wie und wo lernt Ihr am besten? Wann seid Ihr bereit für Veränderungen? Und was muss passieren, damit Euch Arbeit richtig Spaß macht?",
    "Das Team von Open Agile begleitet Euch dabei Eure Strukturen zu hinterfragen und eine für Euch individuelle und zukunftsfähige Form der Zusammenarbeit zu kreieren, in der Ihr gemeinsam wachsen und Euer Potential zu 100% ausschöpfen könnt.",
    "Sprecht uns über die verschiedenen Kanäle an. Wir beißen nicht und freuen uns auf den gemeinsamen Austausch mit Euch!",
  ];

  const texto02 = [
    "Agile Organisationsentwicklung",
    "Training in agilen Methoden & Prozessen",
    "Crashkurse zum Agile Coach, Agile Facilitator und Scrum Master (m/w/d)",
    "Informationsveranstaltungen",
    "1:1 Coaching",
    "Mitbestimmung im agilen Kontext",
  ];

  const texto03 = [];

  return (
    <>
      <Head>
        <title>{titulo2}</title>
        <meta name="description" content={titulo2} />
        <link rel="icon" href="/favicon.ico" />
        <script async src="js/chat.js" />
        <script async src="js/menu.js" />
      </Head>

      {/*Contenedor*/}

      <div id="principal" className="container-fluid g-0">
   <MenuFlotanteBoton />
        <AreaSuperior fondo="gris" texto1="News" texto2="" texto2a="" formulario_contacto={false} area_gris_nueva={true}      servicios_lista={servicios_lista} 
            cursos_lista={cursos_lista} />



      
        <TextoBloque01 titulo={titulo3} texto_parrafo_array={texto01} />

        <div className="row">
          <div className="col-1"></div>

          <div className="col ms-3 font_small_letter">
            Open Agile
            <div className="font_small_letter">for better work</div>
          </div>
        </div>

        <TextoBloque01 titulo2={titulo5} texto_plequitas_array={texto02} />

        {/*Footer  */}
       <Footer servicios_lista={servicios_lista} cursos_lista={cursos_lista} />
      </div>

      {/*Menu Lateral oculto  */}
      <MenuFlotante />
    </>
  );
}


	
export const getServerSideProps = async (context) => {


  
  const url2 = `${backend_url}/api/leistungen`;
  const res2 = await fetch(url2);
  const servicios_lista = await res2.json();

  const url3 = `${backend_url}/api/curso`;
  const res3 = await fetch(url3);
  const cursos_lista = await res3.json();


  return {
    props: {

      cursos_lista,
      servicios_lista
    },
  };
};

