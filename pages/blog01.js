import Head from "next/head";
import Image from "next/image";



import MenuFlotante from "../components/MenuFlotante";
import Footer from "../components/Footer";
import AreaPrincipal from "../components/AreaPrincipal";




import MenuFlotanteBoton from "../components/MenuFlotanteBoton";
// import MenuSuperior from "../components/MenuSuperior";


import TextoBlog01 from "../components/blogs/TextoBlog01";
import TextoBlog02 from "../components/blogs/TextoBlog02";
import Image01 from "../components/crashkurse/image01";
import Content01andMenu from "../components/Content01andMenu";
import Tabla01 from "../components/crashkurse/tabla01";






//----------------------------------------------------------------------------------------------------------
//           CRASHKURSE \ CRASHKURS ZUM AGILE COACH
//----------------------------------------------------------------------------------------------------------

export default function Blog01() {


<Head>
  <script async src="js/menu.js" />
</Head> 



const titulo1 = "BUCHVERÖFFENTLICHUNG";
const titulo2 = "CRASHKURS SELBSTORGANISATION IN AGILEN TEAMS";








  return (
<>
  <Head>
    <title>{titulo1}</title>
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
      <Content01andMenu texto1={titulo1} texto2={titulo2}/>
</div>

<TextoBlog01/>

      <div className="row   d-flex align-items-center justify-content-center">
        <img className="img-fluid img-blogs" src="/img/blogs/blog01.png"/>
      </div>



      <TextoBlog02/>



    {/*Footer  */}
      <Footer />

    </div>
      
    {/*Menu Lateral oculto  */} 
    <MenuFlotante />
  </>
  );
}

