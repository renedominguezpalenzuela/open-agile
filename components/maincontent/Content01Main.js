//----------------------------------------------------------------------------------------------------------
//            Area superior principal:
//----------------------------------------------------------------------------------------------------------
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import Content01Text from "../Content01Text";
import MenuNavBar from "../../componentes/area_superior/MenuNavBar";
import FormularioContacto2 from "../formulariocontacto2";
import BotonesConfigurator from "./BotonesConfigurator";
import Content01Iconos from "./Content01Iconos";

import Content01TextSinIcons from "./Content01TextSinIcons";
import IconosIzquierda from "../IconosIzquierda";





import { servidor_url } from "../../config";


export default function Content01Main({
  texto1,
  texto2,
  texto2a,
  formulario_contacto,
  botones_configurador,
  iconos,
  texto_parrafo_blanco,
  firma
}) {


 
 
  return (
    <>

      <div className="bannermain ">
      <div id="rowtop" className="row h-100  menu_superior mt-2 g-0  ">

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
            {contenido_principal(texto1, texto2, texto2a, formulario_contacto, botones_configurador, iconos, texto_parrafo_blanco, firma)}


         
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

         <IconosIzquierda/>
   
    </>
  );
}


const contenido_principal = ( texto1,  texto2,  texto2a, formulario_contacto, botones_configurador, iconos, texto_parrafo_blanco, firma)=>{

 


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
          <div className="row g-0  ms-4  ">
            <Content01TextSinIcons texto1={texto1} texto2={texto2} texto2a={texto2a} />
          </div>
        </>
      )}


      {
        iconos != undefined && iconos && (
           <Content01Iconos />
        )
      } 


       {(texto_parrafo_blanco != undefined && texto_parrafo_blanco.length>0 )  && (
        <>
        
           <div className="row font_smaller_letter_white ms-3 me-3 justificar">
                {texto_parrafo_blanco.map ((unaLinea, index)=> 
                    <p  key={index}>
                    {unaLinea}
                    </p>                 
                )}
                </div>
           
          
        </>
      )}


       {(firma != undefined && firma.length>0 )  && (
        <>
         
        
           <div className="row font_smaller_letter_white ms-3 me-3 justificar">
                {firma.map ((unaLinea, index)=> (
                   
                    <div>{unaLinea}</div>
                )
                    
                )}
                </div>
           
          
        </>
      )}



      

    {/*Formulario de contacto  */}
      {formulario_contacto != undefined && formulario_contacto  && (<>
        <FormularioContacto2/>
      </>)}

      {/* botones de configuracion */}

       {
        botones_configurador != undefined && botones_configurador && id_botones_configurador!=undefined &&(
            
  
          id_botones_configurador==1?
           (<div className="mt-5">
          
           <BotonesConfigurator botones_configurador={botones_configurador}/>
           </div>)
           :
           (<div className="d-flex justify-content-center align-items-center row  h-75 ">
           
           <BotonesConfigurator botones_configurador={botones_configurador}/>
           </div>)

          

        ) 
        
      } 


  </>
);
}
