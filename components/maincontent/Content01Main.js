//----------------------------------------------------------------------------------------------------------
//            Area superior principal:
//----------------------------------------------------------------------------------------------------------
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import Content01Text from "../Content01Text";
import MenuNavBar from "../MenuNavBar";
import FormularioContacto2 from "../formulariocontacto2";
import BotonesConfigurator from "./BotonesConfigurator";
import Content01Iconos from "./Content01Iconos";

import Content01TextSinIcons from "./Content01TextSinIcons";




import { servidor_url } from "../../config";


export default function Content01Main({
  texto1,
  texto2,
  texto2a,
  formulario_contacto,
  botones_configurador,
  iconos
}) {



 
  return (
    <>
      <div className="bannermain">
      <div id="rowtop" className="row  menu_superior mt-2 g-0  ">

        {/* Columna izquierda */}
        <div className="col ms-3  text-center   ">
          <a className="navbar-brand " href="/">
            <img className="   " src={`${servidor_url}/img/logo/5.svg`} />
          </a>
        </div>

        {/* Columna central */}
        <div className=" col mt-3 text-center   ">
          <div className="row g-0 d-none d-lg-block ">
            <MenuNavBar />
          </div>



            {/* Contenido Principal */}
            {contenido_principal(texto1, texto2, texto2a, formulario_contacto, botones_configurador, iconos)}


         
        </div>

        {/* Columna derecha */}
        <div className="col mt-4 text-center    ">
          <a href="/quizstart">
            <button type="button" className="btn mt-1 btn-outline-primary font_boton  ">
              Agile Check
            </button>
          </a>
        </div>
      </div>
      </div>
   
    </>
  );
}


const contenido_principal = ( texto1,  texto2,  texto2a, formulario_contacto, botones_configurador, iconos)=>{

 
let id = -1;

if (botones_configurador != undefined) {
  id = botones_configurador.id;
}

let id_botones_configurador = -1;

if (id != undefined) {
  id_botones_configurador = id;
}



return (
  <>
    {/* Texto Principal */}
    {((texto1 != undefined && texto1 != "") || (texto2 != undefined && texto2 != "")) && (
        <>
          <div className="row g-0  ms-4 mt-3 ">
            <Content01TextSinIcons texto1={texto1} texto2={texto2} texto2a={texto2a} />
          </div>
        </>
      )}


      {
        iconos != undefined && iconos && (
           <Content01Iconos />
        )
      } 

      

    {/*Formulario de contacto  */}
      {formulario_contacto != undefined && formulario_contacto  && (<>
        <FormularioContacto2/>
      </>)}

      {/* botones de configuracion */}

       {
        botones_configurador != undefined && botones_configurador && id_botones_configurador!=undefined &&(

          id_botones_configurador==1?
           (<div>
          
           <BotonesConfigurator botones_configurador={botones_configurador}/>
           </div>)
           :
           (<div className="row mt-5">
           
           <BotonesConfigurator botones_configurador={botones_configurador}/>
           </div>)

        ) 
        
      } 


  </>
);
}
