import Head from "next/head";
import Image from "next/image";



import MenuFlotante from "../components/MenuFlotante";
import Footer from "../components/Footer";





import MenuFlotanteBoton from "../components/MenuFlotanteBoton";
// import MenuSuperior from "../components/MenuSuperior";


import TextoBloque01 from "../components/textobloque01";
import Image01 from "../components/crashkurse/image01";

import Content01Main from "../components/maincontent/Content01Main";
import Tabla01 from "../components/crashkurse/tabla01";


import AreaSuperior from "../componentes/area_superior/AreaSuperior";






//----------------------------------------------------------------------------------------------------------
//           CRASHKURSE \ CRASHKURS ZUM AGILE COACH
//----------------------------------------------------------------------------------------------------------

export default function Home() {




const titulo1 = "JOBS";
const titulo2 = "Hier findest Du";
const titulo2a = "aktuelle Jobangebote";

const titulo3="Praktikant (m/w/d) Social Media & Online-Kommunikation ";


const titulo4 = "";


const  texto01 = ["Das sind Deine Stärken:"];      

const  texto02= ['Praktische Erfahrungen im Bereich Social-Media & Online-Kommunikation',
                            '„Digital Native“ mit großer Social-Networks-Affinität' ,
                            'Fehlerfreier, stilsicherer und fachlich korrekter Schreibstil',
                            'Sicherer Umgang mit MS-Office sowie den gängigen Layout- und Grafik-Programmen',
                            'Selbstständiger, kreativer und lösungsorientierter Arbeitsstil'                            
                           ];


                           
const  texto03 = ["Spannende Aufgaben erwarten Dich:"];      

const  texto04= ['Weiterentwicklung der Social-Media-Kanäle',
                            'Gemeinsame Erarbeitung und Umsetzung von Social-Media-Strategien' ,
                            'Unterstützung bei Video-Produktionen',
                            'Recherchieren und Texten von Postings',
                            'Unterstützung bei Präsentationen im Aufbau und Design'                            
                           ];

 const  texto05 = ["Warum Open Agile?"];      

const  texto06= ['Bei uns kannst Du direkt eine verantwortungsvolle Rolle mit einem hohen Maß an Autonomie und Eigenverantwortung übernehmen',
                            'Hier kannst Du Dein Potential zu 100% entfalten' ,
                            'Du hast einen großen strategischen und konzeptionellen Freiraum, um deine Vision des idealen Kundenerlebnisses zu verwirklichen',
                            'Regelmäßige Teamevents und Zusammenkünfte runden unsere “work from anywhere” Arbeitsweise ab',
                            'Du erhältst einen unbegrenzten Zugang zu frischem Obst, Getränken und allen Arten von Cerealien'                            
                           ];










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
  
        <AreaSuperior fondo="gris" texto1={titulo1} texto2={titulo2} texto2a={titulo2a} />

    <TextoBloque01   titulo={titulo3}   />


    <TextoBloque01   titulo2={texto01}  texto_plequitas_array={texto02} />

     <TextoBloque01   titulo2={texto03}  texto_plequitas_array={texto04} />

      <TextoBloque01   titulo2={texto05}  texto_plequitas_array={texto06} />

    {/*Footer  */}
    <Footer />

</div>
      
    {/*Menu Lateral oculto  */} 
  <MenuFlotante />
</>
  );
}

