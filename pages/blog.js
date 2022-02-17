import { backend_url } from "../config";
import Head from "next/head";
import MenuFlotante from "../components/MenuFlotante";
import Footer from "../components/Footer";
import MenuFlotanteBoton from "../components/MenuFlotanteBoton";
import AreaSuperior from "../componentes/area_superior/AreaSuperior";
import Content04 from "../components/Content04";

//----------------------------------------------------------------------------------------------------------
//           CRASHKURSE \ CRASHKURS ZUM AGILE COACH
//----------------------------------------------------------------------------------------------------------

export default function Home({ blog_details }) {
  const titulo1 = "VLOG";
  const titulo2 = "BLOG";
  const titulo2a = "";

  const titulo3 = "VLOG";

  const titulo4 = "";

  const texto01 = [
    "Liebe Leserinnen und Leser, hier veröffentlichen wir regelmäßig neue interessante Artikel zu den Themen New Work, Agilität, Selbstorganisation und sonstigen interessanten Neuigkeiten rund ums Thema Arbeitswelt von morgen. Unser Blog ist kein „Closed Shop”. Möchtest Du bei uns einen Artikel veröffentlichen, dann komm’ gerne auf uns zu. Wir freuen uns auf zahlreiche interessante Beiträge, die uns dabei helfen zu verstehen, wie zukünftige Modelle der Zusammenarbeit aussehen können.",
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

        <AreaSuperior
          fondo="ajustable"
          texto_parrafo_blanco_cursos={texto01}
          area_gris_nueva={true}
        />

        {/*Unser Blog  */}
        <Content04 lista_cards={blog_details} />
        <div className="mt-5"> </div>

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
  const url5 = `${backend_url}/api/blog`;
  const res5 = await fetch(url5);
  const blog_details = await res5.json();

  return {
    props: {
      blog_details,
    },
  };
};
