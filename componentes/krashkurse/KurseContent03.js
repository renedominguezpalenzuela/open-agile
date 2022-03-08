import { servidor_url } from "../../config";
import Image from "next/image";
import Link from "next/link";

import React from "react";

// Contenidou
export default function KurseContent03({
  imagen,
  titulo,
  texto,
  imagen_botones,
  titulo_botones,
  titulo_kosten,
  text_termine,
  link_weitere_infos,
  link_termine,
  texto_leistungen,
  texto_kosten,
}) {
  return (
    <>
      <div className="row  ">
        {imagen != undefined && imagen != "" && (
          <img
            className="img-fluid  "
            src={`${servidor_url}/img/${imagen}`}
            alt=""
            loading="lazy" 
          />
        )}

        {titulo != undefined && (
          <div className="tabla-titulo-cursos mt-4  ">{titulo}</div>
        )}

        {/* {titulo_kosten != undefined && (
          <div className=" mt-1  ">
            {titulo_kosten}
          </div>
        )} */}

        {texto_leistungen != undefined && texto_leistungen.length > 0 && (
          <>
            <div className="tabla-titulo-cursos mt-4  ">Leistungen</div>
            <ul>
              {texto_leistungen.map((unaLinea, index) => (
                <React.Fragment key={index}>
                  <li className="ps-5   font-kosten-cursos bullets-leistungen">
                    {unaLinea}{" "}
                  </li>
                </React.Fragment>
              ))}
            </ul>
          </>
        )}

        {texto_kosten && (
          <>
            <div className="tabla-titulo-cursos mt-4  ">Kosten</div>
            <ul>
              {texto_kosten.map((unaLinea, index) => (
                <React.Fragment key={index}>

                  {texto_kosten.length>1?
                        <li className="ps-5   font-kosten-cursos bullets-leistungen"> {unaLinea}</li>
                        :
                        <li className="fuente-texto-cursos "> {unaLinea}</li>

                       
                       }


                </React.Fragment>
              ))}
            </ul>
          </>
        )}

        {texto &&  texto.map((unaLinea, index) => (
          <React.Fragment key={index}>
            <div className=" mt-2  font-kosten-cursos-titulo ">{unaLinea} </div>
            {unaLinea === "<br>" ? "<br/>" : ""}
          </React.Fragment>
        ))}

        <div className="espacio"></div>
      </div>
    </>
  );
}
