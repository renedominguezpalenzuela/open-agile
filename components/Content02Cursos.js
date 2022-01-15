import Card01Lista from "./Card01Lista";
import Content02Texto from "./Content02Texto";
import Content02Final from "./Content02Final";



//----------------------------------------------------------------------------------------------------------
//            Area de Contenido: Cards: CrashKURSE
//----------------------------------------------------------------------------------------------------------
//Contiene: Cards, y Texto en tres columnas
//TODO: pasar como parametros los datos
//Responsivo OK





export default function Content02Cursos( {cursos}) {




  return (
<>

    <div id="course_title" className="row  text-center mb-3  ">
      <h3 className="font_title_seccion_sombra "> CRASHKURSE</h3>
      <h5 className="font_second_line2">
      jetzt fit machen für die Arbeitswelt von morgen
      </h5>
    </div>
 

 



    <div id="course" className=" div_content02a   pb-5 pt-3 g-0">

      <Card01Lista lista_cards={cursos} total_card_en_row={3}/>



    
    </div>

   

    

 



  </>
  );
}
