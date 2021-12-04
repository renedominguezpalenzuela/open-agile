import Head from "next/head";
import Image from "next/image";
import Link from "next/link";



import MenuFlotante from "../components/MenuFlotante";
import Footer from "../components/Footer";





import MenuFlotanteBoton from "../components/MenuFlotanteBoton";
// import MenuSuperior from "../components/MenuSuperior";


import TextoBloque01 from "../components/textobloque01";
import Image01 from "../components/crashkurse/image01";
import Content01andMenuWidthImage from "../components/Content01andMenuWidthImage";
import Tabla01 from "../components/crashkurse/tabla01";


import { servidor_url } from "../config";






//----------------------------------------------------------------------------------------------------------
//           CRASHKURSE \ CRASHKURS ZUM AGILE COACH
//----------------------------------------------------------------------------------------------------------

export default function Home() {




const titulo1 = "Wie agil ist";
const titulo2 = "Eure Zusammenarbeit?";
const titulo2a = "";

const titulo3="Praktikant (m/w/d) Social Media & Online-Kommunikation ";


const titulo4 = "";


const  texto01 = [""];      
//Parrafo
const  texto02= ['Den Kurs kann der Seefahrer erst dann bestimmen, wenn er weiß, wo genau er sich befindet. Hat er seinen Standort bestimmt, kann er seine Segel setzen und den direktesten Weg einschlagen. Sicherlich wird ihn der Wind immer wieder vom Kurs abbringen. Erst durch regelmäßiges Nachjustieren wird er sein Ziel am Ende doch erreichen.',
                  'Diese Herausforderung hat auch ein Unternehmen, wenn es sich weiterentwickeln möchte. Eine Standortanalyse ist wesentlich, damit weitere Schritte in Richtung Agilität sinnvoll umgesetzt werden können und nicht ins Leere laufen. Insbesondere wenn es um Veränderungsprozesse geht, müssen Trainierende, Beratende oder Coachende wissen, wo sie Individuen, Teams oder Organisationen abholen können. Eine Unter- oder Überforderung kann schnell zur Ablehnung und zum Scheitern des Prozesses führen. Wie in der Analogie mit dem Seefahrer kann erst durch die regelmäßige Überprüfung festgestellt werden, ob und wann eine Organisation ihr Ziel erreicht hat und der Veränderungsprozess abgeschlossen ist.',
                  'Zudem geben agile Reifegrade Aufschluss über die Lernfähigkeit und den Lernwillen von Organisationen und damit auch eine Orientierung, wohin erste Schritte hin zu einer agilen Organisationsform gehen könnten. Eine traditionelle Organisation wird sich mit modernen Methoden wie den Workhacks eher schwertun als ein Unternehmen, das mit Pilotprojekten erste positive Erfahrungen sammeln konnte.',
                  'Eine umfangreiche Analyse der bestehenden Zusammenarbeit innerhalb von Organisationen ist daher unerlässlich. Eine ganzheitliche Betrachtung hinsichtlich agiler Reifegrade bezieht Individuen genauso wie Teams und die gesamte Organisation mit ein. Verantwortliche beantworten dazu unter anderem folgende Fragen:'
                ];


                           
const  texto03 = [""];      


//Plequitas
const  texto04= ['Wie ist das Unternehmen langfristig strategisch aufgestellt?',
                            'Wie ist die Organisation strukturiert?' ,
                            'Welche Prozessmethoden werden genutzt?',
                            'Welche Methoden nutzen Teams für eine stimmige Zusammenarbeit?',
                            'Wie werden Stakeholder, Kunden, Lieferanten oder Mitbewerber in Entscheidungen einbezogen?'                            
                           ];


     const  texto05 = ["Antworten auf diese Fragen bieten erste Interpretationsmöglichkeiten im Hinblick auf den agilen Entwicklungsstand von Individuen, Teams und Organisationen. Wie agil ist Eure Zusammenarbeit? Mache jetzt den"];
     
     // AGILE CHECK! 









  return (
<>
  <Head>
    <title>{titulo1+" "+titulo2}</title>
    <meta name="description" content={titulo1+" "+titulo2} />
   <link rel="icon" href="/favicon.ico" />
       <script async src={`${servidor_url}/js/chat.js`} />
    <script async src={`${servidor_url}/js/menu.js`} />
  </Head>

     
  {/*Contenedor*/}
  <div id="principal" className="row content-fluid ">

    <MenuFlotanteBoton />
    
    {/*Area superior  */}
    <div className="bannermain">
      <Content01andMenuWidthImage texto1={titulo1} texto2={titulo2} texto2a={titulo2a}/>
    </div>

   


    <TextoBloque01   titulo2=""  texto_parrafo_array={texto02} />

     <TextoBloque01   titulo2=""  texto_plequitas_array={texto04} />


 <TextoBloque01   titulo2=""  texto_parrafo_array={texto05} />

  <div className="row  text-center mb-4 d-flex  justify-content-center ">
       <Link href="/quiz/1">   
        <button type="button" className="btn p-3 ms-2 me-2 w-50 h-100 btn-card font-btn-card rounded-pill  ">AGILE CHECK</button>
    </Link> 
    </div>

    {/*Footer  */}
    <Footer />

</div>
      
    {/*Menu Lateral oculto  */} 
  <MenuFlotante />
</>
  );
}
