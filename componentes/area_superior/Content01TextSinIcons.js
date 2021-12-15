//----------------------------------------------------------------------------------------------------------
//            Area superior principal:
//----------------------------------------------------------------------------------------------------------
// Contiene: Menu superior, Texto principal, Iconos de la izquierda, Boton de menu flotante
//TODO: pasar como parametros el texto
//TODO: Arreglar boton menu flotante, que no funciona como sticky

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { servidor_url } from "../../config";

export default function Content01TextSinIcons({texto1, texto2, texto2a}) {
  return (
<>
    
  




   
      <div className="font_title_secundario font_title_purple mt-5">
       
            {texto1}
      </div>

   
      <div className="font_title mt-2 ">
     
        <p>{texto2}</p>

        {texto2a!=undefined &&  texto2a!="" && <> {texto2a} </>}

      </div>
  
    


  {/* </div> */}

  


</>
  );
}
