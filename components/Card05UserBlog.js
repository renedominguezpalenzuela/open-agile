// import styles from "../styles/Home.module.css";

import Head from "next/head";

let ancho = 540;
let longitud_linea = 24;

import { servidor_url } from "../config";

export default function Card05UserBlog({
  id,
  titulo,
  titulo2,
  texto,
  imagen,
  texto_boton,
  texto_alt,
  link,
}) {
  return (
    <>
      <div className="card  myanimacion sombra_cards">
        <div className="row   g-0 ">
          <img   className=" imagen-blog "  src={`${servidor_url}/img/${imagen}`}  alt={texto_alt}
          />
        </div>

        {/* <div className="card-body text-center    "> */}
          <div className="row pt-2 pb-2  g-0   ">

            <div className="col-8  d-flex justify-content-start ps-2">
              {titulo != undefined && titulo != "" && (
                <p className="card-text font-card-blog  ">
                  {procesarTextoLargo(titulo)} 
                </p>
              )}

              {/* font_card_title2  */}
              {titulo2 != undefined && titulo2 != "" && (
                <div className="row border  d-flex align-items-center justify-content-start   ">
                  <p className="text-center font_cards_magenta m-1 ps-2">
                    {procesarTextoLargo(titulo2)}
                  </p>
                </div>
              )}
            </div>

            <div className="col-4 pt-1 pb-1 pe-2 ">
              <a href={`/${link}/${id}`}   className=" d-flex  justify-content-end"> 
                <button
                  type="button"
                  className="btn  btn-card font-btn-card-blog ">
                  JETZT LESEN...
                </button>
              </a>
            </div>
          </div>
        {/* </div> */}

        {/* <div className="card-footer-my-card text-center pb-4  ">
     
           
          </div> */}
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
