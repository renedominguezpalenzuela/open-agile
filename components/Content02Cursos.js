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

    <div id="course" className="row  text-center m-3 ">
      <h3 className="font_second_line1"> CRASHKURSE</h3>
      <h5 className="font_second_line2">
                Lorem ipsum, dolor sit amet consectetur.
      </h5>
    </div>
 





    <div id="course_blue" className="row div_content02a h-100d-inline-block ">

      <Card01Lista lista_cards={cursos}/>



      <div className="row mt-5 pt-5 font_title2 justify-content-center">
              Innovation & Tradition
      </div>
      <div className="row mt-3  font_title3 justify-content-center">
              Das macht uns besonders
      </div>

      <Content02Texto />
    </div>

   

    

     <div className="row div_content03a g-0 "> 
   
       <div className="col div_content02b "> 
       
        <Content02Final /> 


       </div>  
     </div> 



  </>
  );
}
