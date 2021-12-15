import Head from "next/head";
import Image from "next/image";
import { useRouter } from 'next/router'
import Link from "next/link";


import MenuFlotante from "../../components/MenuFlotante";
import Footer from "../../components/Footer";

import Content02Cursos from "../../components/Content02Cursos";
import Content03 from "../../components/Content03";
import Content04 from "../../components/Content04";
import Content05 from "../../components/Content05";
import Texto01 from "../../components/crashkurse/texto01";
import Tabla01 from "../../components/crashkurse/tabla01";
import Tabla02 from "../../components/crashkurse/tabla02";
import Tabla03 from "../../components/crashkurse/tabla03";

import Card01Lista from "../../components/Card01Lista";
import MenuFlotanteBoton from "../../components/MenuFlotanteBoton";

import AreaSuperior from "../../componentes/area_superior/AreaSuperior";




// import MenuSuperior from "../components/MenuSuperior";


import Content01andMenuWithQuestions from "../../components/Content01andMenuWithQuestions.js";



import { servidor_url } from "../../config";



//----------------------------------------------------------------------------------------------------------
//            Pagina inicial principal
//----------------------------------------------------------------------------------------------------------







export default function Home({quiz}) {

const router = useRouter()
const {id}  = router.query;


const {titulo, number,question, answers, correct_answer, next_link,
 prior_link } = quiz;







 


  return (
<>
<Head>
    <title>{"Quiz"}</title>
    <meta name="description" content="Quiz" />
    <link rel="icon" href="/favicon.ico" />
    <script async src={`${servidor_url}/js/chat.js`} />
    <script async src={`${servidor_url}/js/menu.js`} />
</Head>


{/*Contenedor*/}
    <div id="principal" className="row content-fluid ">

      <MenuFlotanteBoton />
    
    {/*Area superior  */}
      <div className="bannermain-quiz  ">
        <Content01andMenuWithQuestions id={id} question={question} answers={answers} titulo={titulo} next_link={next_link} />

        
     </div>

     

    {/*Footer  */}
    {/*  <Footer />   */}

</div>
      
    {/*Menu Lateral oculto  */} 
<MenuFlotante />

</>
  )
}


export const getServerSideProps = async (context) => {

const { id } = context.query;
const url = `${servidor_url}/api/quiz/${encodeURIComponent(id)}`;
const res = await fetch(url); 


 const quiz = await res.json();





  return {
    props: {
      quiz
    },
  };
};

