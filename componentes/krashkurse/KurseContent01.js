import { servidor_url } from "../../config";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ReactMarkdown from "react-markdown";

export default function KurseContent01({
  imagen,
  description,
  imagen_botones,
  titulo_botones,
  text_termine,
  link_weitere_infos,
  link_termine,
}) {
  return (
    <>
      <div className="row  ">
        {imagen != undefined && imagen != "" && imagen != null && (
          <img className="img-fluid  mb-4" src={`${imagen}`} alt="" />
        )}
        <ReactMarkdown className="markdowncurso mybullets">
          {description}
        </ReactMarkdown>
        {/* <div className="tabla-titulo-cursos mt-4  ">{titulo}</div>
        {texto != undefined &&
          texto != "" &&
          texto.map((unaLinea, index) => (
            <div key={index} className=" mt-2  fuente-texto-cursos   ">
              {unaLinea}
            </div>
          ))}

        {texto_plequitas_titulos != undefined &&
          texto_plequitas_titulos != "" &&
          texto_plequitas_titulos.map((unItem, index) => (
            <React.Fragment key={index}>
              {unItem.title != undefined && unItem.title != "" && (
                <div className=" mt-2 fuente-titulo-cursos    ">
                  {unItem.title}
                </div>
              )}
              <ul className="">
                {unItem.text.map((unTexto, index2) => (
                  <div key={index2} className=" ms-4    ">
                    <li className="fuente-texto-cursos mybullets">
                      {" "}
                      {unTexto}
                    </li>
                  </div>
                ))}
              </ul>
            </React.Fragment>
          ))}

        <ul>
          {texto_plequitas != undefined &&
            texto_plequitas != "" &&
            texto_plequitas.map((unItem, index) => (
              <React.Fragment key={index}>
                <div className=" ms-4    ">
                  {texto_plequitas.length > 1 ? (
                    <li className="fuente-texto-cursos mybullets"> {unItem}</li>
                  ) : (
                    <li className="fuente-texto-cursos margen-negativo">
                      {" "}
                      {unItem}
                    </li>
                  )}
                </div>
              </React.Fragment>
            ))}
        </ul> */}
      </div>
    </>
  );
}
