import Head from "next/head";
import Image from "next/image";

import MenuFlotante from "../components/MenuFlotante";
import Footer from "../components/Footer";

import MenuFlotanteBoton from "../components/MenuFlotanteBoton";

import TextoBloque01 from "../components/textobloque01";
import Image01 from "../components/crashkurse/image01";
import Content01andMenuVacio from "../components/Content01andMenuVacio";
import Tabla01 from "../components/crashkurse/tabla01";
import MenuNavBar from "../components/MenuNavBar";

import { servidor_url } from "../config";

import {useRecoilValue} from 'recoil';
import {respuestasState} from '../components/states/state';

//----------------------------------------------------------------------------------------------------------
//           CRASHKURSE \ CRASHKURS ZUM AGILE COACH
//----------------------------------------------------------------------------------------------------------

const respuesta1 =
  ["Ihr habt einen sehr schwach ausgeprägten agilen Reifegrad. Fülle das Formular aus, um regelmäßig Impulse für eine wertschätzende Zusammenarbeit und mehr Erfolg zu bekommen. Vereinbare zusätzlich ein kostenloses Erstgespräch mit uns, um ein für Euch individuelles Vorgehen zu besprechen. "];
const respuesta2 =
  ["16-30 Punkte:  Ihr habt einen gering ausgeprägten agilen Reifegrad. Fülle das Formular aus, um regelmäßig Impulse für eine wertschätzende Zusammenarbeit und mehr Erfolg zu bekommen. Vereinbare zusätzlich ein kostenloses Erstgespräch mit uns, um ein für Euch individuelles Vorgehen zu besprechen."];
const respuesta3 =
  ["31-45 Punkte: Ihr habt einen hoch ausgeprägten agilen Reifegrad. Fülle das Formular aus, um regelmäßig Impulse für eine wertschätzende Zusammenarbeit und mehr Erfolg zu bekommen. Vereinbare zusätzlich ein kostenloses Erstgespräch mit uns, um ein für Euch individuelles Vorgehen zu besprechen."];
const respuesta4 =
  ["46-60 Punkte: Ihr habt einen sehr stark ausgeprägten agilen Reifegrad. Fülle das Formular aus, damit wir Dich kontaktieren können. Gerne möchten wir mehr von Euch lernen, damit auch andere Unternehmen davon profitieren können.  "];

export default function Home() {
  
  const respuestas = useRecoilValue(respuestasState);


   let puntos = 0;
   let mensaje = "";
   
   respuestas.forEach((unaRespuesta,index) => {
    
     let valor_respuesta = parseInt(unaRespuesta);
     if (index>0 && valor_respuesta>0) {
       puntos = puntos + valor_respuesta;
     }
     
   });



  if (puntos<=15) {
     mensaje = respuesta1;
  } else if (puntos>15 && puntos<=30) {
     mensaje = respuesta2;
  } else if (puntos>30 && puntos<=45) {
    mensaje = respuesta3;
  } else if (puntos>45) {
    mensaje = respuesta4;
  }

 
  



  return (
    <>
      <Head>
        <title>Quiz Result</title>
        <meta name="description" content="Quiz Result" />
        <link rel="icon" href="/favicon.ico" />
        <script async src="js/chat.js" />
        <script async src="js/menu.js" />
      </Head>

      <div id="principal" className="row content-fluid ">
        <MenuFlotanteBoton />
        <div className="bannermain-quiz ">
          <div id="row03" className="row  menu_superior mt-2 g-0  ">
            <div className="col ms-3  text-center   ">
              <a className="navbar-brand " href="/">
                <img className="   " src={`${servidor_url}/img/logo/5.svg`} />
              </a>
            </div>

            <div className=" col mt-3 text-center   ">
              <div className="row g-0 d-none d-lg-block ">
                <MenuNavBar />
              </div>

              {/* Contenido principal */}
              <div className="font_title_secundario font_centrar font_title_purple mt-5">
                Ergebnis
              </div>



              <TextoBloque01 texto_parrafo_array_white= {mensaje} />
              {/* <div className="font_title mt-2 ">

              {mensaje}

              </div> */}
             
            </div>

            <div className="col mt-4 text-center   ">
              <a href="/quizstart">
                <button type="button" className="btn mt-1 btn-outline-primary font_boton  ">
                  Agile Check
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/*Menu Lateral oculto  */}
      <MenuFlotante />
    </>
  );
}
