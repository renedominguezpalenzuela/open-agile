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
      <div className="card myanimacion sombra_cards redondear-card pb-2 ">
        <div className="row   g-0 pb-2">
          <img   className=" imagen-blog "  src={`${servidor_url}/img/${imagen}`}  alt={texto_alt} />
        </div>

      

        {/* <div className="pe-1 ps-1 d-flex  align-items-center  "> */}
          <div className="row w-100  g-0 size_blog_card d-flex  align-items-center justify-content-center ">

            <div className="col-8  ps-2   ">
               {titulo != undefined && titulo != "" && (<>
                   <div className="ps-1 font1-card-blog ">
                      {titulo} 
                   </div>
               </>)}

              {/* font_card_title2  */}
              {titulo2 != undefined && titulo2 != "" && (<>              
                    <div className="ps-1 font2-card-blog ">
                        {titulo2}
                    </div>              
              </>)}
            </div>

            <div className="col-4   d-flex  align-items-center justify-content-center ">
              <a href={`/${link}/${id}`}   className="  "> 
                <button type="button" className="btn  btn-card-blog font-btn-card-blog rounded-pill  ">
                  Jetzt lesen...
                </button>


            
              </a>
            </div>
          </div>
         {/* </div>  */}
        
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
