//----------------------------------------------------------------------------------------------------------
//            Area superior principal:
//----------------------------------------------------------------------------------------------------------
// Contiene: Menu superior, Texto principal, Iconos de la izquierda, Boton de menu flotante
//TODO: pasar como parametros el texto
//TODO: Arreglar boton menu flotante, que no funciona como sticky

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Content01Text({texto1, texto2}) {
  return (
<>
      {/*                   <!-- Contenido Principal --> */}
   
   {/* <div className="row   mt-3  border">  */}




    {/* <h2> */}
      <div className="font_title_secundario font_title_purple">
            {/* OPEN AGILE */}
            {texto1}
      </div>
    {/* </h2> */}

   
      <div className="font_title mt-2 ">
        {/* <p>FOR BETTER WORK</p> */}
        <p>{texto2}</p>
      </div>
  
    


  {/* </div> */}

  <div className="row justify-content-end  ">



   

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
          <img className="social-img"  src="img/xing-img.svg" /> 
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
