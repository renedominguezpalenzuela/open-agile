import { servidor_url } from "../../config";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function KurseContent01({
  imagen,
  titulo,
  texto,
  texto_plequitas_titulos,
  texto_plequitas,
  imagen_botones,
  titulo_botones,
  text_termine,
  link_weitere_infos,
  link_termine,
}) {
  return (
    <>
      <div className="row  ">

      {imagen!=undefined && imagen!="" &&
                     <img className="img-fluid  " src={`${servidor_url}/img/${imagen}`} alt="" />
                  }
        
        <div className="tabla-titulo-cursos mt-4  ">{titulo}</div>
        {texto != undefined &&
          texto != "" &&
          texto.map((unaLinea, index) => (
            <div key={index} className=" mt-2  fuente-texto-cursos   ">
              {unaLinea}
            </div>
          ))}

        {texto_plequitas_titulos != undefined && texto_plequitas_titulos != "" && 
           texto_plequitas_titulos.map((unItem, index) => (
            <React.Fragment key={index}>
              {unItem.title!=undefined && unItem.title!="" && (
              <div  className=" mt-2 fuente-titulo-cursos    ">
                {unItem.title}
              </div>
              )
              }
              <ul className="">
                {unItem.text.map((unTexto, index2) => (
                   
                    <div  key={index2} className=" ms-4    ">

                  
                        <li className="fuente-texto-cursos mybullets"> {unTexto}</li> 


                    </div>
                  
                ))}
              </ul>
            </React.Fragment>
          ))}


          <ul>
        {texto_plequitas != undefined && texto_plequitas != "" && 
           texto_plequitas.map((unItem, index) => (
            <>
                <div  key={index} className=" ms-4    ">
                     
                       {texto_plequitas.length>1?
                        <li className="fuente-texto-cursos mybullets"> {unItem}</li>
                        :
                        <li className="fuente-texto-cursos margen-negativo"> {unItem}</li>

                       
                       }

                        

                </div> 
            </>
          ))}
          </ul>

      </div>
    </>
  );
}
