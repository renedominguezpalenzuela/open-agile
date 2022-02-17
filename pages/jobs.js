import Head from "next/head";
import MenuFlotante from "../components/MenuFlotante";
import Footer from "../components/Footer";
import MenuFlotanteBoton from "../components/MenuFlotanteBoton";
import AreaSuperior from "../componentes/area_superior/AreaSuperior";
import Card08Job from "../components/Card08Job";
import { useState, useEffect } from "react";
import { backend_url } from "../config";
//----------------------------------------------------------------------------------------------------------
//           CRASHKURSE \ CRASHKURS ZUM AGILE COACH
//----------------------------------------------------------------------------------------------------------
export default function Home({ jobs }) {
  const texto1 = "JOBS";
  const texto2 = "HIER FINDEST DU AKTUELLE JOBANGEBOTE";
  const titulo2 = "Social Media & Online-Kommunikation";
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
