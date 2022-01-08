import { servidor_url } from "../../config";
import Image from "next/image";
import Link from "next/link";
import KurseButtons from "./KurseButtons";

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
  link_pdf,
}) {
  return (
    <>
      <div className="row  ">
        <img
          className="img-fluid  "
          src={`${servidor_url}/img/${imagen}`}
          alt=""
        />

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
            <>
              {unItem.title!=undefined && unItem.title!="" && (
              <div key={index} className=" mt-2 fuente-titulo-cursos    ">
                {unItem.title}
              </div>
              )
              }
              <ul className="">
                {unItem.text.map((unTexto, index) => (
                   
                    <div  key={index} className=" ms-4    ">

                     {/* <span className="fuente-bullet-cursos">•</span><span className="fuente-texto-cursos"> {unTexto}</span> */}
                        <li className="fuente-texto-cursos mybullets"> {unTexto}</li> 


                    </div>
                  
                ))}
              </ul>
            </>
          ))}


          <ul>
        {texto_plequitas != undefined && texto_plequitas != "" && 
           texto_plequitas.map((unItem, index) => (
            <>
                <div  key={index} className=" ms-4    ">
                     {/* <span className="fuente-bullet-cursos">•</span><span className="fuente-texto-cursos"> {unItem}</span> */}
                       <li className="fuente-texto-cursos mybullets"> {unItem}</li> 

                </div> 
            </>
          ))}
          </ul>
{/* 
        <div className="mt-5  ">
          <KurseButtons
            titulo_botones={titulo_botones}
            imagen={imagen_botones}
            text_termine={text_termine}
            link_weitere_infos={link_weitere_infos}
            link_termine={link_termine}
            link_pdf={link_pdf}
          />
        </div> */}
      </div>
    </>
  );
}
