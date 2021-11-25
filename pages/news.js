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


import FormularioContacto from "../components/FormularioContacto";






//----------------------------------------------------------------------------------------------------------
//           CRASHKURSE \ CRASHKURS ZUM AGILE COACH
//----------------------------------------------------------------------------------------------------------

export default function Home() {




const titulo1 = "NEWS";
const titulo2 = "Lorem Ipsum";
const titulo2a = "";

const titulo3="Open Agile geht an den Start";


const titulo4 = "Verpasse keine Neuigkeiten rund um Open Agile und abonniere unseren Newsletter. ";


const titulo5 = "Unsere Leistungen im Überblick:";


const  texto01 = ["Viele Supertrends wie die voranschreitende Digitalisierung, Nachhaltigkeit, Individualisierung oder New Work drängen Unternehmen zu tiefgreifenden Veränderungen in allen Bereichen, was wiederum eine sehr hohe Lernbereitschaft aller Mitarbeitenden voraussetzt.",
"Die erfolgreichsten Unternehmen im 21. Jahrhundert haben es also verstanden Strukturen zu etablieren, in denen gemeinsames Lernen stattfindet und Veränderungen als Chance begriffen werden. Doch wie und wo lernt Ihr am besten? Wann seid Ihr bereit für Veränderungen? Und was muss passieren, damit Euch Arbeit richtig Spaß macht?",
"Das Team von Open Agile begleitet Euch dabei Eure Strukturen zu hinterfragen und eine für Euch individuelle und zukunftsfähige Form der Zusammenarbeit zu kreieren, in der Ihr gemeinsam wachsen und Euer Potential zu 100% ausschöpfen könnt.",
"Sprecht uns über die verschiedenen Kanäle an. Wir beißen nicht und freuen uns auf den gemeinsamen Austausch mit Euch!"];      


const  texto02= ["Agile Organisationsentwicklung",
                            "Training in agilen Methoden & Prozessen",
                            "Crashkurse zum Agile Coach, Agile Facilitator und Scrum Master (m/w/d)",
                            "Informationsveranstaltungen",
                            "1:1 Coaching",
                            "Mitbestimmung im agilen Kontext"

                           ];



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




<FormularioContacto/>
    <TextoBloque01   titulo={titulo3}  texto_parrafo_array={texto01} />

<div className="row">
 <div className="col-1">
    </div>

<div className="col ms-3 font_small_letter">
    Open Agile 
    
    <div className="font_small_letter">
for better work
</div>
</div>
</div>

    <TextoBloque01   titulo2={titulo5}  texto_plequitas_array={texto02} />





    

    {/*Footer  */}
    <Footer />

</div>
      
    {/*Menu Lateral oculto  */} 
  <MenuFlotante />
</>
  );
}

