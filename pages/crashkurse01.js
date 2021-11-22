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
import Tabla01 from "../components/crashkurse/tabla01";






//----------------------------------------------------------------------------------------------------------
//           CRASHKURSE \ CRASHKURS ZUM AGILE COACH
//----------------------------------------------------------------------------------------------------------

export default function Home({cursos, servicios, blogs}) {


<Head>
  <script async src="js/menu.js" />
</Head> 


const titulo1 = "CRASHKURSE";
const titulo2 = "CRASHKURS ZUM AGILE COACH";
const titulo3 = "CRASHKURS ZUM AGILE COACH (M/W/D)";

const imagen01="card01.jpg";
const  texto_BESCHREIBUNG = "Agile Coach unterstützt Du einzelne Menschen, Teams und Organisationen auf ihrem Weg zu einer stimmigeren Arbeitswelt. Für Deine Klienten besteht oftmals der Wunsch sich agiler an eine sich immer schneller verändernde Umwelt anzupassen zu können. Für diese und viele weitere Fragestellungen gehst Du ziel- und lösungsorientiert vor und nutzt dafür einen breiten Werkzeugkoffer an Coaching-Modellen und agilen Methoden.";      

const imagen02="card02.jpg";  

 const  texto_ZIELGRUPPE = ["Du bist Mitarbeiter/in einer Organisation, welche sich in der agilen Transformation befindet. Neben Deiner eigentlichen Tätigkeit möchtest Du die Organisation in der Rolle als Agile Coach unterstützen.",
                            "Als Projektmanager/in stößt Du mit den klassischen Methoden an Deine Grenzen. Als Agile Coach möchtest Du ein agiles Projektmanagement etablieren.",
                            "Du bist Führungskraft eines KMU. Zukünftig sollen sich die Teams agiler aufstellen. Da Führung nicht wegfällt, möchtest Du Innovationen als laterale Führungskraft vorantreiben."                            
                           ];


const imagen03="card03.jpg";  

 const  texto_VORTEILE      = ["In unserem 8-tägigen Crashkurs zum Agile Coach lernst Du schnell und einfach das Wichtigste, um Organisationen, Teams und Individuen im Sinne des agilen Manifests bei ihrer Veränderung zu begleiten.",
                               "Mit unserem hybriden Konzept kannst Du von überall auf der Welt an dem Crashkurs teilnehmen. Selbstverständlich aber auch in Präsenz vor Ort, in unserer schönen Hansestadt Bremen",
                               "Mit konkreten Beispielen aus der Beratungs- Praxis geben wir Dir einen tiefen, aber dennoch verständlichen Einblick in die agile Arbeitswelt"
                           ];




var person = {firstName:"John", lastName:"Doe", age:46};


const texto_INHALTE = [
{
  "nombre": "Block 1",
  "datos": [
    "Tätigkeitsfeld eines agilen Coaches",
    "Werte und Prinzipien im agilen Kontext",
    "Mindset (Ich) und Haltung (Du)"
  ]
}, 

{
"nombre": "Block 2",
  "datos": [
    "Architektur agiler Netzwerkorganisationen",
    "Agile Methoden und Prozesse",
    "Bewährte agile Coaching-Modelle"
  ]
},
{
 "nombre": "Block 3",
 "datos": [
     "Entscheidungen & Konflikte: Initiatoren von innovativen Ideen stärken und begleiten im agilen Kontext",
     "Agile Projektarbeit: Entwicklung und Moderation von agilen Workshops",
     "Bewährte agile Coaching-Modelle"

 ]

},
{
 "nombre": "Block 4",
 "datos": [
     "Remote Work: Fallstricke und geeignete Lösungen in der Zusammenarbeit",
     "Selbstorganisation mit Workhacks",
     "Bewährte agile Coaching-Modelle"

 ]

}


]

const texto_LEISTUNGEN =[
'8 Tage Crashkurs in 4 x 2 Tagesblöcken',
'Zertifikat "Agile Coach"',
'Das Buch "Crashkurs Selbstorganisation in Agilen Teams“',
'Begleitetes Buddy-Programm', 
'2 Stunden individuelle Supervision', 
'Fotoprotokoll & Screenshots'


]

 const KOSTEN = "4.790,- Euro netto (zzgl. 19% USt)";


 const CRASHKURS_title="CRASHKURS 2022";
 const CRASHKURS = [
   "29.04.2022 / 30.04.2022",
   "13.05.2022 / 14.05.2022",
   "13.05.2022 / 14.05.2022",
   "01.07.2022 / 02.07.2022"

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
      <Content01andMenu texto1={titulo1} texto2={titulo2}/>
</div>

<Texto01/>


<div id="course" className="row  text-center m-5 ">
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

