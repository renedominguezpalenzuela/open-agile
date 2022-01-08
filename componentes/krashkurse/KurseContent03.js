import { servidor_url } from "../../config";
import Image from "next/image";
import Link from "next/link";
import KurseButtons from "./KurseButtons";
import React from "react";

 

export default function KurseContent03({imagen, titulo, texto, imagen_botones,titulo_botones, text_termine, link_weitere_infos, link_termine, link_pdf}) {
  return (
    <>
       <div className="row  ">

                  {imagen!=undefined && imagen!="" &&
                     <img className="img-fluid  " src={`${servidor_url}/img/${imagen}`} alt="" />
                  }


                  <div className="tabla-titulo-cursos mt-4  ">
                         {titulo} 
                  </div>
                  {texto.map((unaLinea, index)=>(
                                                      <React.Fragment key={index}>
                                                      <div className=" mt-2  font-kosten-cursos ">{unaLinea}</div>
                                                        {unaLinea==="<br>"?"<br/>":""}
                                                      </React.Fragment>
                                )
                      )}


                  <div className="espacio"></div>

          
       </div>
    

      
    </>
  );
}
