import Head from "next/head";
import Image from "next/image";
import { useRouter } from 'next/router'


import MenuFlotante from "../../components/MenuFlotante";
import Footer from "../../components/Footer";


import MenuFlotanteBoton from "../../components/MenuFlotanteBoton";

// import MenuSuperior from "../components/MenuSuperior";


import Content01andMenuConfigurator from "../../components/Content01andMenuConfigurator";



import { servidor_url } from "../../config";



//----------------------------------------------------------------------------------------------------------
//            Pagina inicial principal
//----------------------------------------------------------------------------------------------------------







export default function Configurator_Main({configurator}) {

const router = useRouter()
const {id}  = router.query;


const {botones} = configurator;





 


  return (
<>
     <Head>
    <title>Configurator</title>
    <meta name="description" content="Configurator" />
    <link rel="icon" href="/favicon.ico" />
    <script async src={`${servidor_url}/js/chat.js`} />
    <script async src={`${servidor_url}/js/menu.js`} />
  </Head>


  {/*Contenedor principal*/}
  <div id="principal" className="row content-fluid ">

    <MenuFlotanteBoton />
    
    {/*Area superior  */}
    <div className="bannermain">
        <Content01andMenuConfigurator botones={botones} />
    </div>

  


   

    {/*Footer  */}
    <Footer />




  </div>

  {/*Menu Lateral oculto  */} 
  <MenuFlotante />
  

</>
  )
}


export const getServerSideProps = async (context) => {

const { id } = context.query;
const url = `${servidor_url}/api/configurator/${encodeURIComponent(id)}`;
const res = await fetch(url); 


 const configurator = await res.json();



  return {
    props: {
      configurator
    },
  };
};

