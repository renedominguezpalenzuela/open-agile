import Head from "next/head";
import Image from "next/image";

import MenuFlotante from "../../components/MenuFlotante";
import Footer from "../../components/Footer";

import MenuFlotanteBoton from "../../components/MenuFlotanteBoton";

import TextoBloque01 from "../../components/textobloque01";
import Image01 from "../../components/crashkurse/image01";

import TeamCarrousel from "../../components/TeamCarrousel";

import Tabla01 from "../../components/crashkurse/tabla01";

import AreaSuperior from "../../componentes/area_superior/AreaSuperior";

import TeamTabs from "../../componentes/team/TeamTabs";

import BarraConTextoDerecha from "../../components/BarraConTextoDerecha";
import BarraConTextoIzquierda from "../../components/BarraConTextoIzquierda";

import { servidor_url } from "../../config";

import ModalFormCookie from "../../components/ModalFormCookie";

export default function Home({uw, cursos_lista,  servicios_lista}) {

  


  const titulo1 = "TEAM";
  const titulo2 = "UNSERE WERTE";
  const titulo2a = "";

  const titulo3 = "UNSERE WERTE";

  const subtitulo1 = "Selbstorganisation und Selbstverantwortung";
  const texto01 = [
    "Selbstorganisation: In der Open Agile GmbH gibt es zwar zwei Geschäftsführende, es gibt allerdings keine starre Hierarchie. Unsere Zusammenarbeit im Team ist selbstorganisiert und beruht auf horizontalen Beziehungsebenen.",
    "Selbstverantwortung: Damit alle Mitarbeitenden Verantwortung übernehmen können, ist für uns Gleichwertigkeit aller Beteiligten eine Grundvoraussetzung. Selbstorganisation und Selbstverantwortung erfordert Struktur und ein absolutes Maß an Vertrauen und Empowerment.",
    "Im Team unterstützen wir uns daher gegenseitig, beispielsweise durch die kollegiale Fallberatung, Supervision, Retrospektiven und Feedback.",
  ];

  const subtitulo2 = "Partnerschaftlicher Umgang";
  const texto02 = [
    "Immer mehr Organisationen möchten ihre interorganisationale Zusammenarbeit sinnvoller, stimmiger und vor allen Dingen nachhaltiger gestalten. Auch Open Agile hat dieses Anliegen.",
    "Eine kurzfristige Gewinnmaximierungsabsicht, die unserem Netzwerk von Nachteil wäre, steht diesem Anliegen allerdings gegenüber. Wir sind der Auffassung, dass ein nachhaltiger Gewinn von ganz allein entsteht, wenn Kundinnen und Kunden sowie Nutzerinnen und Nutzer im Rahmen unseres Leitbildes im Mittelpunkt aller Bemühungen stehen.",
    "Aus diesem Prinzip entstehen langfristige Beziehungen, die auf einem sehr vertrauensvollen Fundament stehen.",
  ];

  const subtitulo3 = "Empowerment und Entwicklung";
  const texto03 = [
    "Selbstorganisation beruht im Grundsatz auf soziokratischen Werten. Das fordert allerdings von allen Mitarbeitenden eine hohe fachliche- und vor allen Dingen soziale Kompetenz ein.",
    "Im unternehmerischen Kontext bedeutet das für Beschäftigte den Willen zu besitzen, sich kontinuierlich weiterzuentwickeln.",
    "Für Open Agile bedeutet das, ein hohes Maß an Befähigungsangeboten bereitzustellen. Daneben setzen wir auf regelmäßige Retrospektiven im Team, Supervision und kollegiale Fallberatungen.",
  ];

  const subtitulo4 = "Transparenz";
  const texto04 = [
    "Was für viele selbstverständlich ist, kann innerhalb der Zusammenarbeit aus opportunistischen Gründen untergehen.",
    "Wenn wir unsere Vision – Menschen, Teams und Organisationen bei ihrer individuellen Veränderung zu unterstützen – ernst nehmen, dann freuen wir uns über alle Menschen und Organisationen, die das gleiche oder ein ähnliches Anliegen haben.",
    "Daher steht alles was wir entwickeln als open source zur Verfügung. Alles was in die Vision einzahlt, ist dabei herzlich willkommen.",
  ];

  const subtitulo5 = "Effizienz, Effektivität und Pragmatismus";
  const texto05 = [
    "Wird Sinn maximiert, gilt das auch für den Arbeitsort, die Arbeitszeit und das Einkommen.",
    "Wir arbeiten dort, wo die Wertschöpfung stattfindet und wo Menschen subjektiv betrachtet für sich am produktivsten arbeiten können. In vielen Fällen bedeutet das für Open Agile “work from anywhere”.",
    "Wir schätzen aber auch das gute alte Büro. Das Parkinsonsche Gesetz besagt: “Arbeit dehnt sich in genau dem Maß aus, wie Zeit für ihre Erledigung zur Verfügung steht.” Aus diesem Grund streben wir stets eine höchst effiziente Arbeitsweise an, die regelmäßig im Team reflektiert wird.",
  ];

  const titulo_main = "DAS TEAM";

  return (
    <>
      <Head>
        <title>{titulo2 + " " + titulo2a}</title>
        <meta name="description" content={titulo2} />
        <link rel="icon" href="/favicon.ico" />
        <script async src={`${servidor_url}/js/chat.js`} />
        <script async src={`${servidor_url}/js/menu.js`} />
      </Head>

      {/*Contenedor*/}

      <div id="principal" className="container-fluid g-0">
        <MenuFlotanteBoton />

        <AreaSuperior
          fondo="ajustable"
          texto1={titulo2}
          titulo_largo={true}
          area_gris_nueva={true}
           servicios_lista={servicios_lista} 
            cursos_lista={cursos_lista} 
        />

        {/* <div className="row  mt-5 d-flex justify-content-center "> */}

        <div className="row ms-4 mt-5 alto-team-tab-contenedor  ">
          <TeamTabs
            data={uw}
          />
        </div>

       <Footer servicios_lista={servicios_lista} cursos_lista={cursos_lista} />
      </div>

      {/*Menu Lateral oculto  */}
      <MenuFlotante />
    </>
  );
}

export const getServerSideProps = async (context) => {
  const url = `${servidor_url}/api/team/unsere-wertes`;
  const res = await fetch(url);

  const uw = await res.json();

    const url2 = `${servidor_url}/api/leistungen`;
  const res2 = await fetch(url2);
  const servicios_lista = await res2.json();

  const url3 = `${servidor_url}/api/curso`;
  const res3 = await fetch(url3);
  const cursos_lista = await res3.json();

  return {
    props: {
      uw,
       cursos_lista,
      servicios_lista
    },
  };
};
