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


// <Head>
//   <script async src="js/menu.js" />
// </Head> 


const titulo1 = "CRASHKURSE";
const titulo2 = "CRASHKURS ZUM";
const titulo2a = "AGILE FACILITATOR";


const titulo3 = "CRASHKURS ZUM AGILE FACILITATOR (M/W/D)";

const imagen01="crashkurse/image1.jpg";
const  texto_BESCHREIBUNG = "Als Agile Facilitator begleitest Du Dein Team in die agile Arbeitswelt. Zudem bist Du als Vorbild für eine lösungsorientierte- und zielgerichtete Zusammenarbeit der erste Kontakt, wenn es darum geht innovative Ideen von Anfang an zu begleiten. Daraus resultierende Meetings & Workshops moderierst Du immer mit Blick auf die agilen Werte & Prinzipien. Bei Herausforderungen greifst Du auf Deinen breiten Werkzeugkoffer an agilen Methoden & Workhacks zurück.";      

const imagen02="crashkurse/image2.jpg";  

const  texto_ZIELGRUPPE = [  ];


const imagen03="crashkurse/image3.jpg";  

 const  texto_VORTEILE      = [
    "In unserem 2-tägigen Crashkurs zum Agile Facilitator lernst Du schnell und einfach das Wichtigste, um Eure Zusammenarbeit im Team kontinuierlich, lernend und mit Spaß zu verbessern.",
    "Mit unserem hybriden Konzept kannst Du von überall auf der Welt an dem Crashkurs teilnehmen. Selbstverständlich aber auch in Präsenz vor Ort, in unserer schönen Hansestadt Bremen.",
    "Mit konkreten Beispielen aus der Beratungs- Praxis geben wir Dir einen tiefen, aber dennoch verständlichen Einblick in die agile Arbeitswelt."
 ];




var person = {firstName:"John", lastName:"Doe", age:46};


const texto_INHALTE = [
{
  "nombre": "Einführung in die agile Arbeitswelt",
  "datos": [
    "Kurzer Schulterblick auf das Agile Manifest",
    "Überblick agiler Projektmanagement-Methoden",
    "Vor- und Nachteile agiler Vorgehensweisen"
  ]
}, 

{
"nombre": "Coaching & Facilitation",
  "datos": [
    "Tipps und Tricks für eine gute Moderation",
    "Gewaltfreie Kommunikation (GFK)",
    "Entscheidungsprozesse im Team begleiten",
    "Feedback-Methoden & Konfliktmanagement",
    "Bewährte agile Coaching-Modelle nutzen"
  ]
},
{
 "nombre": "Agile Projekte begleiten",
 "datos": [
     "Von Start bis an Ziel -> Der Prozess",
     "Agile Prozesse & Methoden kennenlernen",
     "Initiatoren von neuen Ideen unterstützen"

 ]

},
{
 "nombre": "Remote Work",
 "datos": [
     "Bewährte Tools für Remote-Work nutzen",
     "Agile Spiele remote durchführen",
     "Fallstricke in der Praxis und geeignete Lösungen"

 ]

}


]

const texto_LEISTUNGEN =[
'2 Tage Crashkurs remote oder vor Ort möglich (Do. / Fr. oder Fr. / Sa.)',
'Zertifikat "Agile Facilitator"',
'Das Buch "Crashkurs Selbstorganisation in Agilen Teams"',
'Fotoprotokoll & Screenshots'


]

 const KOSTEN = "1.190,- Euro netto (zzgl. 19% USt)";


 const CRASHKURS_title="CRASHKURS 2022";
 const CRASHKURS = [
   "1. Quartal: 04.02.2022 / 05.02.2022 (Fr. / Sa.)",
   "2. Quartal:	22.04.2022 / 23.04.2022 (Do. / Fr.)",
   "3. Quartal: 26.08.2022 / 27.08.2022 (Fr. / Sa.)",
   "4. Quartal: 11.11.2022 / 12.11.2022 (Do. / Fr.)"

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


<div id="course" className="row  text-center  mb-5 mt-5 ">
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

