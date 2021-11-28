import TextoBloque01 from "../../components/textobloque01";


export default function Texto01() {

   const titulo_main =["CRASHKURSE"];
   const  texto_parrafo_array = ["Du möchtest dich und die Arbeitswelt fit für die Zukunft machen? Dann heißen wir Dich in unseren Crashkursen herzlich willkommen! Bei uns lernst Du schnell und einfach das Wichtigste, um Organisationen, Teams und Individuen bei ihrer Veränderung begleiten zu können.",
                            "Mit unserem hybriden Konzept kannst Du von überall auf der Welt an unseren Crashkursen teilnehmen. Selbstverständlich auch vor Ort in unserer schönen Hansestadt Bremen. Die Anzahl an Teilnehmenden ist auf maximal 10 begrenzt, um auf Eure individuellen Bedürfnisse optimal eingehen zu können.",
                            "Als praxisorientierte Unternehmensberatung satteln wir gemeinsam mit Dir auf dem Theoretischem auf und geben Dir in jedem Crashkurs einen tiefen, aber dennoch verständlichen Einblick in die agile Arbeitswelt.",
                            "Dabei setzen wir nicht nur auf unser Know-how sondern wir laden darüber hinaus ausgewählte Trainer:innen aus ihren jeweiligen Fachgebieten ein, um unsere Crashkurse für Dich noch hochwertiger und abwechslungsreicher zu gestalten.",
                            "Das Team von Open Agile freut sich darauf Dich zum Agile Coach, Agile Facilitator oder Scrum Master (w/d/m) auszubilden! </p>"                            
                           ];


  return (
<>

<div  className="row   mt-5  ">
<TextoBloque01 titulo_main={titulo_main} texto_parrafo_array={texto_parrafo_array} />;
</div>
<div  className="row   mb-5 ">
<div  className="col-1 ">
</div>
  <div  className="col mb-5 font_small_letter ms-4 me-3 "> 
 <p> Dein Open Agile Team <br/>for better work</p>
  </div>
</div>  
{/* 
    <div  className="row  text-center mt-5 mb-4 ">
      <h3 className="font_second_line1  "> CRASHKURSE</h3>
    </div>

    <div  className="row    ">
<div  className="col-1">
</div>

    <div  className="col font_small_letter ms-3 me-3 justificar"> 
 
    
      <p> Dein Open Agile Team <br/>for better work</p>
   </div>
<div  className="col-1">
</div>


    </div> */}
</>
  );
}
