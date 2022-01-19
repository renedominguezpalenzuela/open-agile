//----------------------------------------------------------------------------------------------------------
//            Area superior principal:
//----------------------------------------------------------------------------------------------------------
// Contiene: Menu superior, Texto principal, Iconos de la izquierda, Boton de menu flotante
//TODO: pasar como parametros el texto
//TODO: Arreglar boton menu flotante, que no funciona como sticky

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { servidor_url } from "../../config";



export default function Content01TextSinIcons({ texto1, texto2, texto2a, vista_movil, cursos, titulo_largo, titulo_muy_largo, team}) {


  return (
    <>
   
  
  <div className={`${team?"pb-3":"mb-5 pb-3"}`}  >
      {texto1 != undefined && texto1 != "" && (
        <div className={formato_titulo1(vista_movil, cursos, titulo_largo, titulo_muy_largo)}>
          {texto1} 
        </div>
      )}

      {texto2 != undefined && texto2 != "" && (
        <div className={formato_titulo2(vista_movil, titulo_muy_largo)}>
          <div>{texto2} </div>

          {texto2a != undefined && texto2a != "" && <> {texto2a} </>}
        </div>
      )}     


      


 </div>
 
  </>
  );
}




const formato_titulo1=(vista_movil, cursos, titulo_largo, titulo_muy_largo)=>{




if (titulo_largo!=undefined && titulo_largo) {
    return "font_title_largo font_title_purple mt-1 "
  }



if (titulo_muy_largo!=undefined && titulo_muy_largo) {
    return "font_title_muy_largo font_title_purple mt-1  "
  }



if (cursos!=undefined && cursos) {
    return "font_title_secundario font_title_purple mt-3"
  }


  if (vista_movil===undefined || !vista_movil) {
    return "font_title_secundario font_title_purple mt-1 "
  }

  if (vista_movil!=undefined && vista_movil) {
    return "titulo1_vista_movil mt-3"
  }
}


const formato_titulo2=(vista_movil, titulo_muy_largo)=>{

  if (titulo_muy_largo!=undefined && titulo_muy_largo) {
    return "font_title_muy_largo2 mt-3"
  }

  if (vista_movil===undefined || !vista_movil) {
    return "font_title mt-2"
  }

  if (vista_movil!=undefined && vista_movil) {
    return "titulo2_vista_movil"
  }

}


