import Head from "next/head";
import Image from "next/image";



import MenuFlotante from "../components/MenuFlotante";
import Footer from "../components/Footer";
import AreaPrincipal from "../components/AreaPrincipal";




import MenuFlotanteBoton from "../components/MenuFlotanteBoton";
import MenuSuperior from "../components/MenuSuperior";


import Texto01 from "../components/crashkurse/texto01";
import Image01 from "../components/crashkurse/image01";
import Content01andMenu from "../components/Content01andMenu";






//----------------------------------------------------------------------------------------------------------
//           CRASHKURSE \ CRASHKURS ZUM AGILE COACH
//----------------------------------------------------------------------------------------------------------

export default function Home({cursos, servicios, blogs}) {


<Head>
    <script async src="js/menu.js" />
</Head> 



  return (
<>
    <Head>
        <title>CRASHKURS ZUM AGILE COACH</title>
        <meta name="description" content="CRASHKURS ZUM AGILE COACH" />
        <link rel="icon" href="/favicon.ico" />
        <script async src="js/chat.js" />
    </Head>

     
     {/*Contenedor*/}
  <div id="principal" className="row content-fluid ">

   


    <MenuFlotanteBoton />
    
    {/*Area superior  */}
    <div  className="bannermain">


  
   
         <Content01andMenu texto1="CRASHKURSE" texto2="CRASHKURS ZUM AGILE COACH"/> 
     
    
     {/* Menu principal */}
     {/* <div id="row01" className="row  ">
       <MenuSuperior />
     </div>
      
     <AreaPrincipal titulo1="CRASHKURSE" titulo2="CRASHKURS ZUM AGILE COACH" /> */}
    </div>


    <Texto01/>


    <Image01 image="card01.jpg"/>






  

    {/*Footer  */}
    <Footer />

  </div>
      
    {/*Menu Lateral oculto  */} 
    <MenuFlotante />
</>
  );
}

