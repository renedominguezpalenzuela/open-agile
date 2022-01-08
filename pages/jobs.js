import Head from "next/head";
import Image from "next/image";

import MenuFlotante from "../components/MenuFlotante";
import Footer from "../components/Footer";

import MenuFlotanteBoton from "../components/MenuFlotanteBoton";
// import MenuSuperior from "../components/MenuSuperior";

import TextoBloque01 from "../components/textobloque01";
import Image01 from "../components/crashkurse/image01";


import Tabla01 from "../components/crashkurse/tabla01";

import AreaSuperior from "../componentes/area_superior/AreaSuperior";

import BarraConTextoDerecha from "../components/BarraConTextoDerecha";
import BarraConTextoIzquierda from "../components/BarraConTextoIzquierda";
import Card08Job from "../components/Card08Job";


//----------------------------------------------------------------------------------------------------------
//           CRASHKURSE \ CRASHKURS ZUM AGILE COACH
//----------------------------------------------------------------------------------------------------------

export default function Home() {
  const texto1 = "JOBS";
  // const titulo2 = "Hier findest Du aktuelle Jobangebote";
  const texto2 = "HIER FINDEST DU AKTUELLE JOBANGEBOTE";

  const titulo1 = "Praktikant (m/w/d)";
  const titulo2 ="Social Media & Online-Kommunikation";
  const titulo_parrafo1 =  ["Das sind Deine Stärken"];


  const parrafo1 = [
    "Praktische Erfahrungen im Bereich Social-Media & Online-Kommunikation",
    "„Digital Native“ mit großer Social-Networks-Affinität",
    "Fehlerfreier, stilsicherer und fachlich korrekter Schreibstil",
    "Sicherer Umgang mit MS-Office sowie den gängigen Layout- und Grafik-Programmen",
    "Selbstständiger, kreativer und lösungsorientierter Arbeitsstil",
  ];

  const titulo_parrafo2 = ["Spannende Aufgaben erwarten Dich"];

  const parrafo2 = [
    "Weiterentwicklung der Social-Media-Kanäle",
    "Gemeinsame Erarbeitung und Umsetzung von Social-Media-Strategien",
    "Unterstützung bei Video-Produktionen",
    "Recherchieren und Texten von Postings",
    "Unterstützung bei Präsentationen im Aufbau und Design",
  ];

  const titulo_parrafo3 = ["Warum Open Agile?"];

  const parrafo3 = [
    "Bei uns kannst Du direkt eine verantwortungsvolle Rolle mit einem hohen Maß an Autonomie und Eigenverantwortung übernehmen",
    "Hier kannst Du Dein Potential zu 100% entfalten",
    "Du hast einen großen strategischen und konzeptionellen Freiraum, um deine Vision des idealen Kundenerlebnisses zu verwirklichen",
    "Regelmäßige Teamevents und Zusammenkünfte runden unsere “work from anywhere” Arbeitsweise ab",
    "Du erhältst einen unbegrenzten Zugang zu frischem Obst, Getränken und allen Arten von Cerealien",
  ];

  return (
    <>
      <Head>
        <title>Jobs</title>
        <meta name="description" content={titulo2} />
        <link rel="icon" href="/favicon.ico" />
        <script async src="js/chat.js" />
        <script async src="js/menu.js" />
      </Head>

      {/*Contenedor*/}

      <div id="principal" className="container-fluid g-0">
        <MenuFlotanteBoton />

        
        
        <AreaSuperior fondo="ajustable" texto1={texto1} texto2={texto2} titulo_muy_largo={true} />




  <div className="row d-flex justify-content-center mt-5 mb-5">
  <div className="col-md-5  " >
  
        <Card08Job titulo1={titulo1} titulo2={titulo2} titulo_parrafo1={titulo_parrafo1} parrafo1={parrafo1} titulo_parrafo2={titulo_parrafo2} parrafo2={parrafo2} titulo_parrafo3={titulo_parrafo3} parrafo3={parrafo3}/>
  </div>
  </div>
    


{/* 
        <TextoBloque01 titulo={titulo3} />


           <div className="mt-5"> </div>
        <BarraConTextoDerecha titulo={texto01} texto={texto02} />

        <div className="mt-5"> </div>
        <BarraConTextoIzquierda titulo={texto03} texto={texto04} /> 



    <div className="mt-5"> </div>
        <BarraConTextoDerecha titulo={texto05} texto={texto06} /> */}


        {/*Footer  */}
          <div className="mt-5"> </div>
        <Footer />
      </div>

      {/*Menu Lateral oculto  */}
      <MenuFlotante />
    </>
  );
}
