import Head from "next/head";
import Image from "next/image";



import MenuFlotante from "../components/MenuFlotante";
import Footer from "../components/Footer";
import AreaPrincipal from "../components/AreaPrincipal";




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


<Head>
  <script async src="js/menu.js" />
</Head> 


const titulo1 = "LEISTUNGEN";
const titulo2 = "ORGANISATIONSENT-";
const titulo2a = "WICKLUNG";

const titulo3="ORGANISATIONSENTWICKLUNG";


const titulo4 = "Beispiel Vorgehen";


const  texto01 = ["Während Scrum-Teams per Definition cross-funktional und selbstorganisiert sind, können auch alle anderen Teams eine stimmigere Architektur entwickeln, um den zukünftigen Herausforderungen gewachsen zu sein. In dem Kontext beraten wir Organisationen, wie eine passgenaue Architektur agiler & selbstorganisierter Teams aussehen kann. Die Transformation zur agilen und selbstorganisierten Netzwerkorganisation erfordert nicht nur die Einführung von agilen Prozessen & Methoden (Scrum, Design-Thinking, Kanban, OKR). Vielmehr ist der Erfolgstreiber das Verhalten aller Mitarbeitenden."];      

const  texto02= ["Begleitung auf Organisationsebene: Regelmäßige Abstimmungen im Umsetzungsteam inkl. Geschäftsführung oder Vorstand",
                            "Begleitung auf Teamebene: Gemeinsame Erstellung der Team-Architektur (Struktur, Rollen, Entscheidungsprozesse, Konflikttreppe, OKR u.a.) sowie Selbstorganisation mit Workhacks (Agile Methoden und Prozesse) und regelmäßige Retrospektiven",
                            "Begleitung von Individuen: Ausbildung zum Agile Facilitator (Agiles Projektmanagement, Moderation, u.a.) "                            
                           ];



const texto03 = ["Interessierst Du dich für einen ersten Austausch, ob eine evolutionäre Zusammenarbeit auch für Deine Organisation Sinn stiften kann? Ruf’ uns gerne zu einem kostenlosen Erstgespräch an oder schreibe eine Mail. Wir freuen uns auf Dich!"]






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

    <TextoBloque01   titulo={titulo3}  texto_parrafo_array={texto01} />


    <TextoBloque01   titulo2={titulo4}  texto_plequitas_array={texto02} />

    <TextoBloque01    texto_parrafo_array={texto03} />
  

    {/*Footer  */}
    <Footer />

</div>
      
    {/*Menu Lateral oculto  */} 
  <MenuFlotante />
</>
  );
}

