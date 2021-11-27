import Head from "next/head";
import Image from "next/image";



import MenuFlotante from "../components/MenuFlotante";
import Footer from "../components/Footer";
import AreaPrincipal from "../components/AreaPrincipal";




import MenuFlotanteBoton from "../components/MenuFlotanteBoton";
// import MenuSuperior from "../components/MenuSuperior";


import Texto01 from "../components/crashkurse/texto01";
import Image01 from "../components/crashkurse/image01";
import Content01andMenu from "../components/Content01andMenu";
import Tabla01 from "../components/crashkurse/tabla01";






//----------------------------------------------------------------------------------------------------------
//           CRASHKURSE \ CRASHKURS ZUM AGILE COACH
//----------------------------------------------------------------------------------------------------------

export default function Home({cursos, servicios, blogs}) {


{/* <Head>
  <script async src="js/menu.js" />
</Head>  */}


const titulo1 = "CRASHKURSE";
const titulo2 = "CRASHKURS ZUM";
const titulo2a = "SCRUM MASTER";

const titulo3 = "CRASHKURS ZUM SCRUM MASTER (M/W/D)";

const imagen01="crashkurse/image1.jpg";
const  texto_BESCHREIBUNG = "Als Scrum Master arbeitest Du nach den Werten, Prinzipien und Regeln des Agilen Manifests und des Scrum Guides.  Zusammen mit dem Product Owner und dem Entwicklungsteam bist Du Teil eines cross-funktionalen und selbstorganisierten Scrum-Teams. Schwerpunkt Deiner Tätigkeit ist die prozessuale und laterale Führung des Teams durch den Scrum-Prozess.";      

const imagen02="crashkurse/image2.jpg";  

const  texto_ZIELGRUPPE = [  ];


const imagen03="crashkurse/image3.jpg";  

 const  texto_VORTEILE      = [
    "In unserem 2-tägigen Crashkurs zum Scrum Master lernst Du schnell und einfach das Wichtigste, um im Anschluss die Prüfung zum Professional Scrum Master auf scrum.org durchzuführen.",
    "Mit unserem hybriden Konzept kannst Du von überall auf der Welt an dem Crashkurs teilnehmen. Selbstverständlich aber auch in Präsenz vor Ort, in unserer schönen Hansestadt Bremen.",
    "Mit konkreten Beispielen aus der Praxis geben wir Dir einen tiefen, aber dennoch verständlichen Einblick in die agile Arbeitswelt."
 ];




var person = {firstName:"John", lastName:"Doe", age:46};


const texto_INHALTE = [
{
  "nombre": "Einführung in die agile Welt",
  "datos": [
    "Kurzer Schulterblick auf das Agile Manifest",
    "Überblick agiler Projektmanagement-Methoden",
    "Vor- und Nachteile agiler Vorgehensweisen"
  ]
}, 

{
"nombre": "Der Scrum-Guide als Richtschnur",
  "datos": [
    "To	Wann macht Scrum Sinn?",
    "Werte, Prinzipien & Regeln",
    "Scrum Rollen (PO, SM, Entwicklungs-Team)",
    "Ereignisse und Artefakte"
  ]
},
{
 "nombre": "Selbstorganisation im Scrum-Team mit Workhacks",
 "datos": [
     "Entscheidungen treffen im Scrum-Team",
     "Konflikte souverän lösen ",
     "Einführung in Kanban"

 ]

},
{
 "nombre": "Coaching & Facilitation",
 "datos": [
     "Bewährte agile Coaching-Modelle",
     "Scrum Events professionell moderieren",
     "Häufige Fallstricke und praktische Lösungen im Scrum-Prozess"

 ]

}


]

const texto_LEISTUNGEN =[
'2 Tage Crashkurs an einem Wochenende (Fr. und Sa.)',
'Vorbereitung auf die Scrum- Zertifizierung auf srum.org',
'Das Buch "Crashkurs Selbstorganisation in Agilen Teams“',
'Fotoprotokoll bzw. Screenshots'


]

 const KOSTEN = "1.190,- Euro netto (zzgl. 19% USt)";


 const CRASHKURS_title="CRASHKURS 2022";
 const CRASHKURS = [
   "1. Quartal: 18.02.2022 / 19.02.2022 (Fr. / Sa.)",
   "2. Quartal:	13.06.2022 / 14.06.2022 (Do. / Fr.)",
   "3. Quartal:	09.09.2022 / 10.09.2022 (Fr. / Sa.)",
   "4. Quartal:	24.11.2022 / 25.11.2022 (Do. / Fr.)"

 ]

  






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

<Texto01/>


<div id="course" className="row  text-center mb-5 mt-5 ">
        <h3 className="font_titulo_detalles "> {titulo3}</h3>

      </div>



      <Tabla01
       imagen01 = {imagen01}
       texto_BESCHREIBUNG = {texto_BESCHREIBUNG}
       imagen02 = {imagen02}
       texto_ZIELGRUPPE = {texto_ZIELGRUPPE}
       imagen03 = {imagen03}
       texto_VORTEILE      = {texto_VORTEILE     }
       texto_INHALTE = {texto_INHALTE}

       texto_LEISTUNGEN = {texto_LEISTUNGEN}

       kosten = {KOSTEN} CRASHKURS_title={CRASHKURS_title} CRASHKURS={CRASHKURS}


      
    
    />


<Texto01/>
 
  

    {/*Footer  */}
    <Footer />

</div>
      
    {/*Menu Lateral oculto  */} 
  <MenuFlotante />
</>
  );
}

