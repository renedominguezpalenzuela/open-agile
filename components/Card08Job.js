// import styles from "../styles/Home.module.css";

import Head from "next/head";

let ancho = 540;
let longitud_linea = 24;

import { servidor_url } from "../config";

import ModalForm from "./ModalForm";

export default function Card08Job({
  id,
  titulo1,
  titulo2,
  titulo_parrafo1,
  parrafo1,
  titulo_parrafo2,
  parrafo2,
  titulo_parrafo3,
  parrafo3,
}) {
  return (
    <>
      <div className="card myanimacion sombra_cards redondear-card pb-2">
        <div className="h-100 d-flex  align-items-center  ">
          <div className="row w-100 g-0 ">
            <div className="col-12 pt-1 ps-3 pe-3   ">
              {titulo1 != undefined && titulo1 != "" && (
                <>
                  <div className="font1-card-job pt-3">{titulo1}</div>
                </>
              )}

              {titulo2 != undefined && titulo2 != "" && (
                <>
                  <div className="font1-card-job pt-1">{titulo2}</div>
                </>
              )}

              {titulo_parrafo1 != undefined && titulo_parrafo1 != "" && (
                <>
                  <div className="font2-card-job pt-2">{titulo_parrafo1}</div>
                </>
              )}

              <ul>
              {parrafo1 != undefined &&
                parrafo1.length > 0 &&
                parrafo1.map((unaLinea, index) => (
                  <div key={index}  className="">
                    {/* <span className=" fuente-bullet-job me-1">•</span> */}
                    {/* <span className=" font3-card-job"> {unaLinea}</span> */}
                          <li className="font3-card-job mybullets2"> {unaLinea}</li>
                  </div>
                ))}
                </ul>   

                {titulo_parrafo2 != undefined && titulo_parrafo2 != "" && (
                <>
                  <div className="font2-card-job pt-2">{titulo_parrafo2}</div>
                </>
              )}

 <ul>
              {parrafo2 != undefined &&
                parrafo2.length > 0 &&
                parrafo2.map((unaLinea, index) => (
                  <div key={index}  className="">
                    {/* <span className=" fuente-bullet-job me-1">•</span> */}
                    {/* <span className=" font3-card-job"> {unaLinea}</span> */}
                                   <li className=" font3-card-job mybullets2"> {unaLinea}</li>
                  </div>
                ))}
</ul>

                  {titulo_parrafo3 != undefined && titulo_parrafo3 != "" && (
                <>
                  <div className="font2-card-job pt-2">{titulo_parrafo3}</div>
                </>
              )}

       <ul>
              {parrafo3 != undefined &&
                parrafo3.length > 0 &&
                parrafo3.map((unaLinea, index) => (
                  <div key={index}  className="   font3-card-job ">
                    {/* <span className=" fuente-bullet-job me-1">•</span> */}
                    <li className=" font3-card-job mybullets2"> {unaLinea}</li>
                  </div>
                ))}

</ul>

            
            </div>

            <div className="row mt-3 mb-2    g-0   ">
              <div className="col   w-100  d-flex justify-content-center ">
               
                 
                  <button
                    type="button"
                    className="btn  btn-card-job font-btn-card-shop rounded-pill  "  data-bs-toggle="modal"   data-bs-target={"#contactForm1"}>
                    KOMM INS TEAM! JETZT BEWERBEN.
                  </button>
                
              </div>
            </div>
          </div>
        </div>
      </div>


         <ModalForm  id={1} quartal={1} titulo={"BEWERBUNG"} frase="Jetzt Kontakt aufnehmen!"  day={""} link={""} />
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
