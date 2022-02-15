import Head from "next/head";
import MenuFlotante from "../components/MenuFlotante";
import Footer from "../components/Footer";
import MenuFlotanteBoton from "../components/MenuFlotanteBoton";
import AreaSuperior from "../componentes/area_superior/AreaSuperior";
import Card08Job from "../components/Card08Job";
import { useState, useEffect } from "react";
import { servidor_url } from "../config";
import { backend_url } from "../config";
//----------------------------------------------------------------------------------------------------------
//           CRASHKURSE \ CRASHKURS ZUM AGILE COACH
//----------------------------------------------------------------------------------------------------------

export default function Home({ jobs }) {
  console.log(jobs);
  const texto1 = "JOBS";
  // const titulo2 = "Hier findest Du aktuelle Jobangebote";
  const texto2 = "HIER FINDEST DU AKTUELLE JOBANGEBOTE";

  const titulo1 = "Praktikant (m/w/d)";
  const titulo2 = "Social Media & Online-Kommunikation";
  const titulo_parrafo1 = ["Das sind Deine Stärken"];

  const parrafo1 = [
    "Praktische Erfahrungen im Bereich Social-Media & Online-Kommunikation",
    "“Digital Native“ mit großer Social-Networks-Affinität",
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

  const [desktop_screen, setDesktop_screen] = useState(true);
  const handleResize = () => {
    let ancho_screen = window.innerWidth;
    if (ancho_screen > 992) {
      setDesktop_screen(true);
    } else {
      setDesktop_screen(false);
    }
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Head>
        <title>JOBS</title>
        <meta name="description" content={titulo2} />
        <link rel="icon" href="/favicon.ico" />
        <script async src="js/chat.js" />
        <script async src="js/menu.js" />
      </Head>

      {/*Contenedor*/}

      <div id="principal" className="container-fluid g-0">
        <MenuFlotanteBoton />

        <AreaSuperior
          fondo="ajustable"
          texto1={texto1}
          texto2={texto2}
          titulo_muy_largo={desktop_screen}
          area_gris_nueva={true}
          shop={true}
        />

        <div className="row d-flex justify-content-center mt-5 mb-5">
          {jobs.data.map((card, key) => {
            return (
              <div key={key} className="col-md-5  ">
                <Card08Job data={card} />
              </div>
            );
          })}
        </div>
        <div className="mt-5"> </div>
        <Footer />
      </div>
      <MenuFlotante />
    </>
  );
}
export const getServerSideProps = async (context) => {
  const url5 = `${backend_url}/api/jobs`;
  const res5 = await fetch(url5);
  const jobs = await res5.json();

  return {
    props: {
      jobs,
    },
  };
};
