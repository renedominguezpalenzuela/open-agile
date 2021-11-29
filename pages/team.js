import Head from "next/head";
import Image from "next/image";



import MenuFlotante from "../components/MenuFlotante";
import Footer from "../components/Footer";





import MenuFlotanteBoton from "../components/MenuFlotanteBoton";
// import MenuSuperior from "../components/MenuSuperior";


import TextoBloque01 from "../components/textobloque01";
import Image01 from "../components/crashkurse/image01";
import Content01andMenu from "../components/Content01andMenu";
import Tabla01 from "../components/crashkurse/tabla01";






//----------------------------------------------------------------------------------------------------------
//           CRASHKURSE \ CRASHKURS ZUM AGILE COACH
//----------------------------------------------------------------------------------------------------------

export default function Home() {


// <Head>
//   <script async src="js/menu.js" />
// </Head> 


const titulo1 = "TEAM";
const titulo2 = "UNSERE WERTE";
const titulo2a = "";

const titulo3="UNSERE WERTE";


const subtitulo1 = "Selbstorganisation und Selbstverantwortung";
const  texto01 = ["Selbstorganisation: In der Open Agile GmbH gibt es zwar zwei Geschäftsführende, es gibt allerdings keine starre Hierarchie. Unsere Zusammenarbeit im Team ist selbstorganisiert und beruht auf horizontalen Beziehungsebenen.",
"Selbstverantwortung: Damit alle Mitarbeitenden Verantwortung übernehmen können, ist für uns Gleichwertigkeit aller Beteiligten eine Grundvoraussetzung. Selbstorganisation und Selbstverantwortung erfordert Struktur und ein absolutes Maß an Vertrauen und Empowerment.",
"Im Team unterstützen wir uns daher gegenseitig, beispielsweise durch die kollegiale Fallberatung, Supervision, Retrospektiven und Feedback."];      


const subtitulo2="Partnerschaftlicher Umgang";
const  texto02= ["Immer mehr Organisationen möchten ihre interorganisationale Zusammenarbeit sinnvoller, stimmiger und vor allen Dingen nachhaltiger gestalten. Auch Open Agile hat dieses Anliegen.",
"Eine kurzfristige Gewinnmaximierungsabsicht, die unserem Netzwerk von Nachteil wäre, steht diesem Anliegen allerdings gegenüber. Wir sind der Auffassung, dass ein nachhaltiger Gewinn von ganz allein entsteht, wenn Kundinnen und Kunden sowie Nutzerinnen und Nutzer im Rahmen unseres Leitbildes im Mittelpunkt aller Bemühungen stehen.",
"Aus diesem Prinzip entstehen langfristige Beziehungen, die auf einem sehr vertrauensvollen Fundament stehen."    ];


const subtitulo3="Empowerment und Entwicklung";
const  texto03= ["Was für viele selbstverständlich ist, kann innerhalb der Zusammenarbeit aus opportunistischen Gründen untergehen.",
"Im unternehmerischen Kontext bedeutet das für Beschäftigte den Willen zu besitzen, sich kontinuierlich weiterzuentwickeln. Für Open Agile bedeutet das, ein hohes Maß an Befähigungsangeboten bereitzustellen.",
"Daneben setzen wir auf regelmäßige Retrospektiven im Team, Supervision und kollegiale Fallberatungen."    ];


const subtitulo4="Transparenz";
const  texto04= ["Was für viele selbstverständlich ist, kann innerhalb der Zusammenarbeit aus opportunistischen Gründen untergehen.",
"Wenn wir unsere Vision – Menschen, Teams und Organisationen bei ihrer individuellen Veränderung zu unterstützen – ernst nehmen, dann freuen wir uns über alle Menschen und Organisationen, die das gleiche oder ein ähnliches Anliegen haben.",
"Daher steht alles was wir entwickeln als open source zur Verfügung. Alles was in die Vision einzahlt, ist dabei herzlich willkommen."    ];

const subtitulo5="Effizienz, Effektivität und Pragmatismus";
const  texto05= ["Wird Sinn maximiert, gilt das auch für den Arbeitsort, die Arbeitszeit und das Einkommen.",
"Wir arbeiten dort, wo die Wertschöpfung stattfindet und wo Menschen subjektiv betrachtet für sich am produktivsten arbeiten können. In vielen Fällen bedeutet das für Open Agile “work from anywhere”.",
"Wir schätzen aber auch das gute alte Büro. Das Parkinsonsche Gesetz besagt: “Arbeit dehnt sich in genau dem Maß aus, wie Zeit für ihre Erledigung zur Verfügung steht.” Aus diesem Grund streben wir stets eine höchst effiziente Arbeitsweise an, die regelmäßig im Team reflektiert wird."];


const titulo_main = "DAS TEAM";

const subtitulo6="Andreas Eilers";
const  texto06= ["Motto: “Nicht weil es schwer ist, wagen wir es nicht, sondern weil wir es nicht wagen, ist es schwer.” Lucius Annaeus Seneca",
"Als Experte für agile Organisationsentwicklung und selbstorganisierten Netzwerkorganisationen hat Andreas ein großes Anliegen: Möglichst viele Menschen dabei zu unterstützen, nachhaltige Lösungen für eine stimmige und wertschätzende Zusammenarbeit zu finden.",
"Um in dem Hinblick möglichst effizient vorzugehen, hat Andreas das Buch „Crashkurs Selbstorganisation in agilen Teams“ geschrieben, welches 2021 im Haufe-Verlag veröffentlicht wurde. Andreas liebt nicht nur als Pilot die Sicht aus der Vogelperspektive",
"Als zertifizierter Agile Coach & Scrum Master gibt er wichtige Impulse von außen, immer mit der notwendigen Distanz und viel Empathie. In der Beratung und im Training greift Andreas auf die Erfahrung als Leiter eines agilen Entwicklungslabors zurück sowie auf das Fachwissen als Certified Financial Planner. Durch den Betriebswirt mit den Schwerpunkten Personal- und Finanzmanagement sind ihm auch organisationsstrategische Fragestellungen sehr vertraut."];

const telefono1 = "Telefon: 0160 979 40004";
const correo1 = "E-Mail: andreas.eilers@open-agile.de";
const foto1 = "/team/andi_Internetseite.png"

const subtitulo7="Alexander Stange";
const  texto07= ["Motto: „Einfach machen!“", 
"Als leidenschaftlicher Triathlet geht Alexander immer wieder an seine Belastungsgrenze. Das macht ihn zum Experten, wenn es darum geht mit Motivation die Komfortzone zu verlassen.",
"Attraktive Ziele sind dabei entscheidet, die nötige Energie für den langen Weg zu mobilisieren. Diese Erfahrung nimmt Alexander in jeden zu begleitenden Veränderungsprozess mit.",
"Um eine Transformation wirksam begleiten zu können, greift Alexander auf eine Vielzahl an Methoden und Tools zurück. Doch ist das Tool für ihn niemals die Lösung selbst. Sein Ziel ist stets einen messbaren und vor allen Dingen nachhaltigen Wandel zu ermöglichen. Dafür holt Alexander Menschen dort ab, wo sie stehen. Er eröffnet Teams genauso wie Individuen durch professionelle Impulse neue Lösungsräume und inspiriert sie mit positiven Gedanken Veränderungen mitzugehen.",
"Dabei greift Alexander einerseits auf seine langjährigen Erfahrungen als Trainer & Berater zurück und anderseits nutzt er sein Know-how als zertifizierter Agile Coach & Scrum Master. Insbesondere in schwierigen Situationen besinnt sich Alexander immer wieder auf seine wichtigsten Werte: Mut, Transparenz und Humor. Für viele ist die individuelle Veränderung ein langer Weg mit vielen Meilensteinen. Dabei ist für Alexander viel Verständnis, Geduld und gegenseitige Rücksichtnahme entscheidend."];

const telefono2 = "Telefon: 0171 361 6712";
const correo2 = "E-Mail: alexander.stange@open-agile.de";
const foto2 = "/team/alex_Internetseite.png"





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
  <div id="principal" className="row content-fluid ">

    <MenuFlotanteBoton />
    
    {/*Area superior  */}
    <div className="bannermain">
      <Content01andMenu texto1={titulo1} texto2={titulo2} texto2a={titulo2a}/>
    </div>

    <TextoBloque01   titulo={subtitulo1}  texto_parrafo_array={texto01} />

    <TextoBloque01   titulo={subtitulo2}  texto_parrafo_array={texto02} />

    <TextoBloque01   titulo={subtitulo3}  texto_parrafo_array={texto03} />

    <TextoBloque01   titulo={subtitulo4}  texto_parrafo_array={texto04} />

    <TextoBloque01   titulo={subtitulo5}  texto_parrafo_array={texto05} />



    <TextoBloque01   titulo_main={titulo_main}   />


    <TextoBloque01   titulo={subtitulo6}  texto_parrafo_array={texto06} telefono={telefono1} correo={correo1} foto={foto1} />

     <TextoBloque01   titulo={subtitulo7}  texto_parrafo_array={texto07} telefono={telefono2} correo={correo2} foto={foto2}/>


  
  

    {/*Footer  */}
    <Footer />

</div>
      
    {/*Menu Lateral oculto  */} 
  <MenuFlotante />
</>
  );
}

