import { servidor_url } from "../../config";

import MenuNavBar from "./MenuNavBar";
import Logo from "./Logo";
import BotonAgileCheck from "./BotonAgileCheck";
import Titulo from "./Titulo";
import IconosIzquierda from "../../components/IconosIzquierda";

import BotonesConfigurator from "./BotonesConfigurator";
import Content01Iconos from "./Content01Iconos";

import Content01TextSinIcons from "./Content01TextSinIcons";

import FormularioContacto2 from "../../components/formulariocontacto2";

export default function AreaSuperior({
  fondo,
  texto1,
  texto2,
  texto2a,
  formulario_contacto,
  botones_configurador,
  iconos,
  texto_parrafo_blanco,
  firma,
}) {
  return (
    <>
      <div className={`${getFondo(fondo)}`}>
        <div className="item-logo   d-flex align-items-center justify-content-center">
          <Logo />
        </div>

        {/*    <div className="row d-none d-lg-block "> */}
        <div className="item-menu d-flex align-items-center justify-content-start">
          <MenuNavBar />
        </div>
        <div className="item-boton  d-flex align-items-center justify-content-center">
          <BotonAgileCheck />
        </div>

        <div className="item-titulo">
          
            {/* Contenido Principal */}
            {contenido_principal(texto1, texto2, texto2a, formulario_contacto, botones_configurador, iconos, texto_parrafo_blanco, firma)}


        
        </div>
      </div>

      <IconosIzquierda />
    </>
  );
}

function getFondo(fondo) {
  let fondo_por_defecto = "bannermain";

  if (fondo === "barco") {
    fondo_por_defecto = "bannermain-quiz";
  }

  return fondo_por_defecto;
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

