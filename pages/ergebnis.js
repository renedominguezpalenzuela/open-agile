import Head from "next/head";
import Image from "next/image";

import MenuFlotante from "../components/MenuFlotante";
import Footer from "../components/Footer";

import MenuFlotanteBoton from "../components/MenuFlotanteBoton";

import TextoBloque01 from "../components/textobloque01";
import Image01 from "../components/crashkurse/image01";
// import Content01andMenuVacio from "../components/Content01andMenuVacio";
import Tabla01 from "../components/crashkurse/tabla01";



import AreaSuperior from "../componentes/area_superior/AreaSuperior";

import { servidor_url, backend_url } from "../config";


import { useRecoilValue } from "recoil";

import { respuestasState } from "../componentes/states/state";

import ModalFormConfigurator from "../components/ModalFormConfigurator";



//----------------------------------------------------------------------------------------------------------
//           CRASHKURSE \ CRASHKURS ZUM AGILE COACH
//----------------------------------------------------------------------------------------------------------

const respuesta1 = [
  "Ihr habt einen sehr schwach ausgeprägten agilen Reifegrad. Fülle das Formular aus, um regelmäßig Impulse für eine wertschätzende Zusammenarbeit und mehr Erfolg zu bekommen. Vereinbare zusätzlich ein kostenloses Erstgespräch mit uns, um ein für Euch individuelles Vorgehen zu besprechen. ",
];
const respuesta2 = [
  "16-30 Punkte:  Ihr habt einen gering ausgeprägten agilen Reifegrad. Fülle das Formular aus, um regelmäßig Impulse für eine wertschätzende Zusammenarbeit und mehr Erfolg zu bekommen. Vereinbare zusätzlich ein kostenloses Erstgespräch mit uns, um ein für Euch individuelles Vorgehen zu besprechen.",
];
const respuesta3 = [
  "31-45 Punkte: Ihr habt einen hoch ausgeprägten agilen Reifegrad. Fülle das Formular aus, um regelmäßig Impulse für eine wertschätzende Zusammenarbeit und mehr Erfolg zu bekommen. Vereinbare zusätzlich ein kostenloses Erstgespräch mit uns, um ein für Euch individuelles Vorgehen zu besprechen.",
];
const respuesta4 = [
  "46-60 Punkte: Ihr habt einen sehr stark ausgeprägten agilen Reifegrad. Fülle das Formular aus, damit wir Dich kontaktieren können. Gerne möchten wir mehr von Euch lernen, damit auch andere Unternehmen davon profitieren können.  ",
];

export default function Home({cursos_lista,  servicios_lista}) {
  const respuestas = useRecoilValue(respuestasState);



  let puntos = 0;
  let mensaje = "";

 

  respuestas.forEach((unaRespuesta, index) => {
    let valor_respuesta = parseInt(unaRespuesta);

    
 
    if (index > 0 && valor_respuesta > 0) {
      puntos = puntos + valor_respuesta;
    }

  
  });

    

  if (puntos <= 15) {
    mensaje = respuesta1;
  } else if (puntos > 15 && puntos <= 30) {
    mensaje = respuesta2;
  } else if (puntos > 30 && puntos <= 45) {
    mensaje = respuesta3;
  } else if (puntos > 45) {
    mensaje = respuesta4;
  }

 

  return (
    <>
      <Head>
        <title>Quiz Result</title>
        <meta name="description" content="Quiz Result" />
        <link rel="icon" href="/favicon.ico" />
        {/* <script async src="js/chat.js" /> */}
        
          <script async src={`${servidor_url}/js/menu.js`} />
      </Head>

      <div id="principal" className="container-fluid g-0">
        <MenuFlotanteBoton />
        <AreaSuperior no_bottom_margin={true} fondo="bannermain-quiz-result" titulo_quiz_result="Ergebnis" texto_quiz_result={mensaje} area_gris_nueva={false} botones_contacto={true}   servicios_lista={servicios_lista} 
            cursos_lista={cursos_lista} /> 


  {/*Footer  */}
        <Footer servicios_lista={servicios_lista} cursos_lista={cursos_lista} />
      </div>

       <ModalFormConfigurator    titulo="KONTAKTFORMULAR"   frase="Jetzt Kontakt aufnehmen!"     id={1}    />


     
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

	  