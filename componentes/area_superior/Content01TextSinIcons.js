//----------------------------------------------------------------------------------------------------------
//            Area superior principal:
//----------------------------------------------------------------------------------------------------------
// Contiene: Menu superior, Texto principal, Iconos de la izquierda, Boton de menu flotante
//TODO: pasar como parametros el texto
//TODO: Arreglar boton menu flotante, que no funciona como sticky

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { servidor_url } from "../../config";



const formato_titulo1=(vista_movil)=>{

  if (vista_movil===undefined || !vista_movil) {
    return "font_title_secundario font_title_purple mt-5"
  }

  if (vista_movil!=undefined && vista_movil) {
    return "titulo1_vista_movil mt-3"
  }
}


const formato_titulo2=(vista_movil)=>{

  if (vista_movil===undefined || !vista_movil) {
    return "font_title mt-2 "
  }

  if (vista_movil!=undefined && vista_movil) {
    return "titulo2_vista_movil "
  }
}

export default function Content01TextSinIcons({ texto1, texto2, texto2a, vista_movil}) {


  return (
    <>
   

  
      {texto1 != undefined && texto1 != "" && (
        <div className={formato_titulo1(vista_movil)}>
          {texto1}
        </div>
      )}

      {texto2 != undefined && texto2 != "" && (
        <div className={formato_titulo2(vista_movil)}>
          <div>{texto2}</div>

          {texto2a != undefined && texto2a != "" && <> {texto2a} </>}
        </div>
      )}      
 
 
  </>
  );
}
