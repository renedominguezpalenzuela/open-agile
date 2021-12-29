// import styles from "../styles/Home.module.css";

import Head from "next/head";

let ancho = 540;
let longitud_linea = 24;

import { servidor_url } from "../config";

export default function Card07Shop({
  id,
  titulo,
  texto,
  imagen,
  texto_boton1,
  texto_boton2,
  texto_alt,
  link1,
  link2
}) {

  
  return (
    <>
      <div className="card myanimacion sombra_cards redondear-card pb-2">
        <div className="row   g-0 pb-2 pt-3 fondo_card_shop">
          <img   className=" imagen-team-card "  src={`${servidor_url}/img/${imagen}`}  alt={texto_alt} />
        </div>

      

        <div className="h-100 d-flex  align-items-center  ">
          <div className="row w-100 g-0 ">

            <div className="col-12 pt-1 ps-3 pe-3   ">
               {titulo != undefined && titulo != "" && (<>
                   <div className="font1-card-shop pt-3">
                      {titulo} 
                   </div>
               </>)}

             


               {texto != undefined && texto != "" && (<>              
                    <div className=" font3-card-shop pt-2 ">
                        {texto}
                    </div>              
              </>)}


            </div>


  <div className="row mt-3 mb-2 d-flex justify-content-start">
            <div className="col-6   ">
              <a href={link1}   className="  "> 
                <button type="button" className="btn ps-2 pe-2  btn-card-blog font-btn-card-shop rounded-pill  ">
                  {texto_boton1}
                </button>               
              </a>
            </div>

            <div className="col-5  ">
              <a href={link2}   className="  "> 
                <button type="button" className="btn ps-2 pe-2  btn-card-blog font-btn-card-shop rounded-pill  ">
                  {texto_boton2}
                </button>               
              </a>
            </div>
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
