// import styles from "../styles/Home.module.css";


//----------------------------------------------------------------------------------------------------------
//            Area de Contenido: Imagen de Empresas
//----------------------------------------------------------------------------------------------------------

export default function Content03 ({imagen,texto_alt } ) {
  return (
<>




<div id="empresas" className="color_fondo div_content03b pt-5">
    <div className="row justify-content-center font_title_seccion  pt-5 ">
        Diese und viele weitere Unternehmen
    </div>

    <div className="row justify-content-center font_card_texto mt-2 ">
        Bilden bei der Open Agile aus      
    </div>

    <div className="row mt-5 mb-5 pb-5">
     <img className="img-fluid"  src={`img/${imagen}`} alt={`img/${texto_alt}`}/>

    </div>
    </div>



  
   
 

</>
  );
}


