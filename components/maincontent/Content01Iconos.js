//----------------------------------------------------------------------------------------------------------
//            Area superior principal:
//----------------------------------------------------------------------------------------------------------
// Contiene: Menu superior, Texto principal, Iconos de la izquierda, Boton de menu flotante
//TODO: pasar como parametros el texto
//TODO: Arreglar boton menu flotante, que no funciona como sticky

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { servidor_url } from "../../config";

export default function Content01Iconos() {
  return (
<>

  <div className="row justify-content-end g-0  ">

    <div className="col-1 iconos-contenedor">
      <a href="https://www.linkedin.com/company/open-agile">
        <i className="bi bi-linkedin iconos-social"></i>
      </a>
    </div>



    <div className="col-1 iconos-contenedor ">
      <a href="https://www.youtube.com/channel/UCuwf90RVDjbK0Isu1vL1skA">
        <i className="bi bi-youtube iconos-social"></i>
      </a>
    </div>


    <div className="col-1 iconos-contenedor ">
      <a href="https://www.instagram.com/open_agile/">
        <i className="bi bi-instagram iconos-social"></i>
      </a>
    </div>

      <div className="col-1 iconos-contenedor mt-2 ">
      <a href="https://www.xing.com/pages/open-agile" > 

           
          <img className="social-img"  src= {`${servidor_url}/img/xing-img.svg`}  loading="lazy"  /> 
      </a>
    </div>



    <div className="col-1 iconos-contenedor  me-5">
      <a href="https://www.facebook.com/OpenAgile21" className="youtube">
        <i className="bi bi-facebook iconos-social"></i>
      </a>
    </div>


   









  </div>


</>
  );
}
