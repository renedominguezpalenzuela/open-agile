import Card01Lista from "./Card01Lista";
import Content02Texto from "./Content02Texto";
import Content02Final from "./Content02Final";


//----------------------------------------------------------------------------------------------------------
//            Area de Contenido: Cards
//----------------------------------------------------------------------------------------------------------
//Contiene: Cards, y Texto en tres columnas
//TODO: pasar como parametros los datos
//Responsivo OK

export default function Content02() {
  return (
<>


    <div className="column">
      <div id="second_line" className="row text-center m-3">
        <h3 className="font_second_line1"> CRASHKURSE</h3>
        <h5 className="font_second_line2">
                Lorem ipsum, dolor sit amet consectetur.
        </h5>
      </div>
    </div>


  

   {/* <div className="color_fondo"> } */}
  <div className="row div_content02a h-100 d-inline-block ">

    <Card01Lista />
   

  
    <div className="row mt-5 pt-5 font_title2 justify-content-center">
              Innovation & Tradition
    </div>
    <div className="row mt-3  font_title3 justify-content-center">
              Das macht uns besonders
    </div>
 
    <Content02Texto />
   </div>

    <div className="div_content03a">  
      <div className="row div_content02b"> 
      <Content02Final />


     </div>   
    </div>  
 

</>
  );
}
