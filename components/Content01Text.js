//----------------------------------------------------------------------------------------------------------
//            Area superior principal:
//----------------------------------------------------------------------------------------------------------
// Contiene: Menu superior, Texto principal, Iconos de la izquierda, Boton de menu flotante
//TODO: pasar como parametros el texto
//TODO: Arreglar boton menu flotante, que no funciona como sticky

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Content01Text() {
  return (
<>
      {/*       <!-- Contenido Principal --> */}
      {/* Contenido en pantalla ancha */}
      {/*d-none d-lg-block*/}
  <div className="row  ms-3 mt-3 border">
    <h2>
      <div className="font_title_secundario font_title_purple">
            OPEN AGILE
      </div>
    </h2>

    <h1 id="title">
      <div className="font_title ">
        <p>FOR BETTER WORK</p>
      </div>
    </h1>


  </div>

  <div className="row d-flex align-items-center  ">
       
       
        {/*    <i class="fab fa-facebook"></i> */}
    <div className="col-1 border iconos-new ">
      {/* <a href="https://www.facebook.com/OpenAgile21">
        <FontAwesomeIcon icon="envelope" width="32" className="" />
      </a> */}
      AAA
    </div>

     <div className="col-1 iconos-new ">
      {/* <a href="https://www.facebook.com/OpenAgile21">
        <FontAwesomeIcon icon="envelope" width="32" className="" />
      </a> */}
      BBB
    </div>
  </div>

      {/* Contenido en pantalla estrecha */}
      {/*  <div className="row ms-3 mt-3  d-lg-none">
    <h1 id="title">
      <div className="font_facit_title_small">
        <p>FOR BETTER WORK</p>

      </div>
      <span className="font_facit_title_small font_facit_title_purple"> 
                  now.
      </span>
    </h1>
    <p className="font_facit_title_small  "> 
                TRAINING PEOPLE & TRANSFORMING CULTURES
    </p>
  </div> */}
</>
  );
}
