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


{/* <Head>
  <script async src="js/menu.js" />
</Head>  */}


const titulo1 = "LEISTUNGEN";
const titulo2 = "COACHING";
const titulo2a = "";

const titulo3="COACHING";


const titulo4 = "Beispiel Vorgehen";


const  texto01 = ["Experten für das Problem sind oft auch Experten für die Lösung. Ist das der Fall, kann agiles Coaching durch gute Fragen einerseits Komplexität reduzieren und andererseits den Lösungsraum von Coachees erweitern."];      

const  texto02= ["Einzelcoaching-Termine á 60 Minuten",
                            "Teamcoaching-Termine á 60-90 Minuten",
                            "Reflexionsgespräch nach 3 Monaten"                            
                           ];



const texto03 = ["Für das Coaching ist uns der persönliche Kontakt am liebsten, in der heutigen Zeit gehören Videokonferenzen oder das klassische Telefonat allerdings zum Alltag dazu. Auch in diesen Formaten können gute und vor allen Dingen effiziente Gespräche stattfinden. Immer mit dem Blick auf mögliche Lösungsansätze. Ruf’ uns gerne zu einem kostenlosen Erstgespräch an oder schreibe eine Mail. Wir freuen uns auf Dich!"]






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

