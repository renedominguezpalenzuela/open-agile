import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import MenuFlotante from "../../components/MenuFlotante";
import Footer from "../../components/Footer";

import Content02Cursos from "../../components/Content02Cursos";

import MenuFlotanteBoton from "../../components/MenuFlotanteBoton";

import { servidor_url } from "../../config";
import { backend_url } from "../../config";

import AreaSuperior from "../../componentes/area_superior/AreaSuperior";
import ModalFormCookie from "../../components/ModalFormCookie";

//----------------------------------------------------------------------------------------------------------
//            Pagina inicial principal
//----------------------------------------------------------------------------------------------------------

const texto_parrafo_array = [
  "Du möchtest dich und die Arbeitswelt fit für die Zukunft machen? Dann heißen wir Dich in unseren Crashkursen herzlich willkommen! Bei uns lernst Du schnell und einfach das Wichtigste, um Organisationen, Teams und Individuen bei ihrer Veränderung begleiten zu können.",
  "Mit unserem hybriden Konzept kannst Du von überall auf der Welt an unseren Crashkursen teilnehmen. Selbstverständlich auch vor Ort in unserer schönen Hansestadt Bremen. Die Anzahl an Teilnehmenden ist auf maximal 10 begrenzt, um auf Eure individuellen Bedürfnisse optimal eingehen zu können.",
  "Als praxisorientierte Unternehmensberatung satteln wir gemeinsam mit Dir auf dem Theoretischem auf und geben Dir in jedem Crashkurs einen tiefen, aber dennoch verständlichen Einblick in die agile Arbeitswelt.",
  "Dabei setzen wir nicht nur auf unser Know-how sondern wir laden darüber hinaus ausgewählte Trainer:innen aus ihren jeweiligen Fachgebieten ein, um unsere Crashkurse für Dich noch hochwertiger und abwechslungsreicher zu gestalten.",
  "Das Team von Open Agile freut sich darauf Dich zum Agile Coach, Agile Facilitator oder Scrum Master (w/d/m) auszubilden! ",
];

export default function Home({ cursos }) {
  const router = useRouter();
  const { id } = router.query;

  const titulo1 = "CRASHKURSE";

  return (
    <>
      <Head>
        <title>{titulo1}</title>
        <meta name="description" content={titulo1} />
        <link rel="icon" href="/favicon.ico" />
        <script async src={`${servidor_url}/js/chat.js`} />
        <script async src={`${servidor_url}/js/menu.js`} />
      </Head>

      <div id="principal" className="container-fluid g-0">
        <MenuFlotanteBoton />

        <AreaSuperior
          fondo="variable"
          texto_parrafo_blanco_cursos={texto_parrafo_array}
          cursos={true}
          area_gris_nueva={true}
          firma={["Dein Open Agile Team", " for better work"]}
        />

        {/* variable */}

        {/*Cards CRASHKURSE  */}
        <Content02Cursos cursos={cursos} main_page={true} />

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
  const url = `${backend_url}/api/curso`;
  const res = await fetch(url);
  const cursos = await res.json();

  return {
    props: {
      cursos,
    },
  };
};
