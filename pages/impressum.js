import Head from "next/head";

import MenuFlotante from "../components/MenuFlotante";
import Footer from "../components/Footer";

import MenuFlotanteBoton from "../components/MenuFlotanteBoton";
// import MenuSuperior from "../components/MenuSuperior";

import AreaSuperior from "../componentes/area_superior/AreaSuperior";



import ModalFormCookie from "../components/ModalFormCookie";

//----------------------------------------------------------------------------------------------------------
//           CRASHKURSE \ CRASHKURS ZUM AGILE COACH
//----------------------------------------------------------------------------------------------------------

export default function Home() {
  // <Head>
  //   <script async src="js/menu.js" />
  // </Head>

  const titulo1 = "Impressum";

  return (
    <>
      <Head>
        <title>{titulo1.toUpperCase()}</title>
        <meta name="description" content={titulo1} />
        <link rel="icon" href="/favicon.ico" />
        <script async src="js/chat.js" />
        <script async src="js/menu.js" />
      </Head>

      {/*Contenedor*/}

      <div id="principal" className="container-fluid g-0">
        <MenuFlotanteBoton />

        <AreaSuperior
          fondo="ajustable"
          texto1={titulo1}
          titulo_muy_largo={true}
          area_gris_nueva={true}
          impre={true}
        />

        <div className="px-5 ms-md-5 mb-md-4">
          <h2 className="title_daten mt-md-5 ">Open Agile GmbH</h2>
          <p className="font_daten">
            Faulenstr. 67
            <br /> D-28195 Bremen
          </p>
          <p className="font_daten"></p>
          <p className="font_daten">
            Registergericht: Amtsgericht Bremen <br /> HRB-Nr. 37347 <br />
            USt.-Ident.-Nr. DE 60 125 125 36
          </p>
          <p className="font_daten">
            E-Mail: kontakt@open-agile.de <br />
            Telefon: 0421 22347567
          </p>
          <p className="font_daten">
            Vertreten durch die Geschäftsführer: <br />
            Andreas Eilers
            <br />
            Alexander Stange
          </p>

          <h2 className="title_daten">
            Verbraucherinformation gemäß Verordnung EU Nr. 524/2013
          </h2>
          <p className="font_daten">
            Die Europäische Kommission stellt eine Plattform zur
            OnlineStreitbeilegung (OS) bereit. Die Plattform finden Sie unter{" "}
            <a
              href="http://ec.europa.eu/consumers/odr/"
              className="force-magenta">
              http://ec.europa.eu/consumers/odr/
            </a>
          </p>
          <p className="font_daten">
            Unsere Email-Adresse lautet: kontakt@open-agile.de
          </p>

          <h2 className="title_daten">
            Verbraucherinformation gemäß Verbraucherstreitbeilegungsgesetz
          </h2>
          <p className="font_daten">
            Die Open Agile GmbH ist nicht bereit und verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
          <h2 className="title_daten">Rechtlicher Hinweis</h2>
          <p className="font_daten">
            Die Texte, Bilder, Grafiken, Animationen, Video- und Audiodateien
            sowie alle weiteren Inhalte auf dieser Webseite unterliegen den
            gesetzlichen Bestimmungen des Urheberrechts und ggf. weiteren
            Rechten des geistigen Eigentums. Der geschützte Inhalt dieser
            Webseite darf ohne Einwilligung des Rechtsinhabers nicht
            vervielfältigt, verbreitet, wiedergegeben, öffentlich zugänglich
            gemacht oder sonst verwertet werden.
          </p>
          <p className="font_daten">
            Änderungen von Kursinhalten und Lieferumfang sowie Irrtümer bleiben
            vorbehalten.
          </p>

          <p className="font_daten mb-5">
            Alle angegebenen Preise sind unverbindlich.
          </p>
        </div>
        {/*Footer  */}
        <Footer />
      </div>

      {/*Menu Lateral oculto  */}
      <MenuFlotante />
    </>
  );
}
