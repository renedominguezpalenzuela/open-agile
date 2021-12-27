import Head from "next/head";
import Image from "next/image";



import MenuFlotante from "../components/MenuFlotante";
import Footer from "../components/Footer";





import MenuFlotanteBoton from "../components/MenuFlotanteBoton";
// import MenuSuperior from "../components/MenuSuperior";


import TextoBloque01 from "../components/textobloque01";
import Image01 from "../components/crashkurse/image01";


import Tabla01 from "../components/crashkurse/tabla01";

import AreaSuperior from "../componentes/area_superior/AreaSuperior";

import BarraConTextoDerecha from "../components/BarraConTextoDerecha";
import BarraConTextoIzquierda from "../components/BarraConTextoIzquierda";






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
 <div id="principal" className="container-fluid g-0">

      <MenuFlotanteBoton />
  
        <AreaSuperior fondo="gris" texto1={titulo1} texto2={titulo2} texto2a={titulo2a} />


    


<div className="mt-5">
    <TextoBloque01   titulo={titulo3}   />
    </div>



       <div className="mt-5"> </div>
        <BarraConTextoDerecha titulo={texto01} texto={texto02} />


  <div className="mt-5"> </div>


    {/*Footer  */}
    <Footer />

</div>
      
    {/*Menu Lateral oculto  */} 
  <MenuFlotante />
</>
  );
}
