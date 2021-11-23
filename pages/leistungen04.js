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


// <Head>
//   <script async src="js/menu.js" />
// </Head> 


const titulo1 = "LEISTUNGEN";
const titulo2 = "MITBESTIMMUNG";
const titulo2a = "IM AGILEN KONTEXT";

const titulo3="MITBESTIMMUNG IM AGILEN KONTEXT";


const titulo4 = "";


const  texto01 = ["Durch die Entwicklung von Unternehmen, hin zu flexiblen und agilen Organisationen, verändert sich viel. Mitarbeitende übernehmen mehr Verantwortung, treffen selbständig Entscheidungen und lösen ihre Konflikte selbst.",
"Doch was bedeutet das für die Mitbestimmung? Wie können und müssen sich Betriebs- und Personalräte auf diese Veränderungen einstellen? Was sagt die Rechtsprechung zu diesen Veränderungen? Um Euch hierbei kompetent zu unterstützen, greifen wir auf unsere langjährigen Erfahrungen als gewählte Betriebsräte zurück.",
"Hierbei berichten wir nicht nur aus der Theorie, sondern teilen mit Euch unsere gemachten positiven als auch negativen Erlebnisse, die wir auf dem Weg zu einer agilen Netzwerkorganisation gesammelt haben. Für ein individuelles und passgenaues Unterstützungsangebot ruft uns gerne an oder schreibt eine E-Mail."];      

const  texto02= [    ];



const texto03 = []






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

