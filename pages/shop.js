import Head from "next/head";
import Image from "next/image";



import MenuFlotante from "../components/MenuFlotante";
import Footer from "../components/Footer";





import MenuFlotanteBoton from "../components/MenuFlotanteBoton";
// import MenuSuperior from "../components/MenuSuperior";


import TextoBloque01 from "../components/textobloque01";
import Image01 from "../components/crashkurse/image01";

import Content01Main from "../components/maincontent/Content01Main";
import Tabla01 from "../components/crashkurse/tabla01";






//----------------------------------------------------------------------------------------------------------
//           CRASHKURSE \ CRASHKURS ZUM AGILE COACH
//----------------------------------------------------------------------------------------------------------

export default function Home() {




const titulo1 = "SHOP ";
const titulo2 = "Über Amazon FBA";
const titulo2a = "Fulfillment by Amazon";

const titulo3="Hole Dir das agile Starterpaket für nur 99 Euro!";


const titulo4 = "";


const  texto01 = ["Das sind Deine Stärken:"];      

const  texto02= ['Timebox', 'Post-its', 'Eddings', '2 Open Agile Kaffee-Tassen', 'Das Open Agile Mindset-Poster','Das Gefühle-Poster'     ];


  








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
      <Content01Main texto1={titulo1} texto2={titulo2} texto2a={titulo2a}/>
    </div>


<div className="mt-5">
    <TextoBloque01   titulo={titulo3}   />
    </div>


    <TextoBloque01   titulo2={texto01}  texto_plequitas_array={texto02} />


    {/*Footer  */}
    <Footer />

</div>
      
    {/*Menu Lateral oculto  */} 
  <MenuFlotante />
</>
  );
}

