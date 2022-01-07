// import styles from "../styles/Home.module.css";

import Head from "next/head";

let ancho = 540;
let longitud_linea = 24;

import { servidor_url } from "../config";

export default function Card06Team({
  id,
  titulo,
  titulo2,
  texto,
  imagen,
  texto_boton,
  texto_alt,
  link,
  correo
}) {

  
  return (
    <>
      <div className="card myanimacion sombra_cards redondear-card pb-2">
        <div className="row   g-0 pb-2">
          <img   className=" imagen-team-card "  src={`${servidor_url}/img/${imagen}`}  alt={texto_alt} />
        </div>

      

        <div className="h-100 d-flex  align-items-center  ">
          <div className="row w-100 g-0 ">

            <div className="col-12 pt-1 ps-3   ">
               {titulo != undefined && titulo != "" && (<>
                   <div className=" font1-card-team ">
                      {titulo} 
                   </div>
               </>)}

              {/* font_card_title2  */}
              {titulo2 != undefined && titulo2 != "" && (<>              
                    <div className="mt-1 font2-card-team ">
                        {titulo2}
                    </div>              
              </>)}


               {correo != undefined && correo != "" && (<>              
                    <div className=" font3-card-team ">
                        {correo}
                    </div>              
              </>)}


            </div>

            <div className="col-6 ms-2 mt-2 mb-3 d-flex  align-items-center justify-content-center ">
              <a href={`/${link}/${id}`}   className="  "> 
                <button type="button" className="btn ps-4 pe-4 btn-card-team-new  font-btn-card-team rounded-pill  ">
                    {texto_boton}
                </button>
              </a>
            </div>
          </div>
         </div> 
        
      </div>
    </>
  );
}

function procesarTextoLargo(texto) {
  return <> {texto}</>;

  let texto_devolver = "";
  let separador = " ";

  if (texto.substring(longitud_linea, longitud_linea + 1) === " ") {
    separador = "-";
  }

  //TODO: si coincide el guion con un espaciom no poner

  if (texto.length > longitud_linea) {
    return (
      <>
        <p>
          {texto.substring(0, longitud_linea)}
          {separador}
        </p>
        {texto.substring(longitud_linea)}
      </>
    );
  } else {
    return <> {texto}</>;
  }
}
