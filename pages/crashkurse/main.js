import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import MenuFlotante from "../../components/MenuFlotante";
import Footer from "../../components/Footer";

import Content02Cursos from "../../components/Content02Cursos";

// import Tabla03 from "../../components/crashkurse/tabla03";

import MenuFlotanteBoton from "../../components/MenuFlotanteBoton";

import Content01Main from "../../components/maincontent/Content01Main";

import { servidor_url } from "../../config";

//----------------------------------------------------------------------------------------------------------
//            Pagina inicial principal
//----------------------------------------------------------------------------------------------------------



const  texto_parrafo_array = ["Du möchtest dich und die Arbeitswelt fit für die Zukunft machen? Dann heißen wir Dich in unseren Crashkursen herzlich willkommen! Bei uns lernst Du schnell und einfach das Wichtigste, um Organisationen, Teams und Individuen bei ihrer Veränderung begleiten zu können.",
                            "Mit unserem hybriden Konzept kannst Du von überall auf der Welt an unseren Crashkursen teilnehmen. Selbstverständlich auch vor Ort in unserer schönen Hansestadt Bremen. Die Anzahl an Teilnehmenden ist auf maximal 10 begrenzt, um auf Eure individuellen Bedürfnisse optimal eingehen zu können.",
                            "Als praxisorientierte Unternehmensberatung satteln wir gemeinsam mit Dir auf dem Theoretischem auf und geben Dir in jedem Crashkurs einen tiefen, aber dennoch verständlichen Einblick in die agile Arbeitswelt.",
                            "Dabei setzen wir nicht nur auf unser Know-how sondern wir laden darüber hinaus ausgewählte Trainer:innen aus ihren jeweiligen Fachgebieten ein, um unsere Crashkurse für Dich noch hochwertiger und abwechslungsreicher zu gestalten.",
                            "Das Team von Open Agile freut sich darauf Dich zum Agile Coach, Agile Facilitator oder Scrum Master (w/d/m) auszubilden! ",
                                                       
                           ];


export default function Home({cursos}) {

 

  const router = useRouter();
  const { id } = router.query;

  const titulo1 = "Crashkurse";

  return (
    <>
      <Head>
        <title>{titulo1}</title>
        <meta name="description" content={titulo1} />
        <link rel="icon" href="/favicon.ico" />
        <script async src={`${servidor_url}/js/chat.js`} />
        <script async src={`${servidor_url}/js/menu.js`} />
      </Head>

      {/*Contenedor principal*/}
      <div id="principal" className="row content-fluid ">
        <MenuFlotanteBoton />

        {/*Area superior  */}
        <div className="bannermain">
          <Content01Main texto1={titulo1} texto_parrafo_blanco={texto_parrafo_array} firma={[ "Dein Open Agile Team"," for better work" ]}/>
         
        </div>

    
         {/*Cards CRASHKURSE  */}
        <Content02Cursos cursos={cursos} /> 


        {/*Footer  */}
        <Footer />
      </div>

      {/*Menu Lateral oculto  */}
      <MenuFlotante />
    </>
  );
}




//Obteniendo los datos desde el servidor
export const getServerSideProps = async (context) => {
  const url = `${servidor_url}/api/curso`;
  const res = await fetch(url);
  const cursos = await res.json();

 

  return {
    props: {
      cursos,
      
    },
  };
};
