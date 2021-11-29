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




const titulo1 = "VLOG";
const titulo2 = "Lorem Ipsum";
const titulo2a = "";

const titulo3="VLOG";


const titulo4 = "";


const  texto01 = ["Ob interessante Interviews zum Thema New Work, kurze Fachbeiträge oder einfach mal ein paar spannende Impulse für die persönliche Weiterentwicklung. In diesem Vlog wirst Du regelmäßig auf dem Laufenden gehalten. Wir freuen uns auf die Arbeitswelt von morgen! Du auch? Willst Du keinen neuen Beitrag verpassen, dann abonniere unseren YouTube-Kanal „Open Agile“ und unseren Newsletter."];      

const  texto02= ["Interviews zu New Work & Co. ",
                            "Crashkurs Selbstorganisation in agilen Teams",
                            "Impulse für Deine persönliche Weiterentwicklung "                            
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

    <TextoBloque01   titulo={titulo3}  texto_parrafo_array={texto01} />


    <TextoBloque01   titulo2={titulo4}  texto_plequitas_array={texto02} />

    

    {/*Footer  */}
    <Footer />

</div>
      
    {/*Menu Lateral oculto  */} 
  <MenuFlotante />
</>
  );
}

