import { servidor_url } from "../../config";
import Image from "next/image";
import Link from "next/link";
import KurseButtons from "./KurseButtons";
import React from "react";

 

export default function KurseContent02({imagen, titulo, texto, imagen_botones,titulo_botones, text_termine, link_weitere_infos, link_termine, link_pdf}) {
  return (
    <>
       <div className="row  ">
                  <img className="img-fluid  " src={`${servidor_url}/img/${imagen}`} alt="" />


                
                  {texto.map((unaLinea, index)=>(
                                                      <React.Fragment key={index}>
                                                      <div className=" mt-2  p-3 fuente-leistungen  bordes_leistungen d-flex justify-content-center ">{unaLinea}</div>
                                                        {unaLinea==="<br>"?"<br/>":""}
                                                      </React.Fragment>
                                )
                      )}

                  <div className="mt-5  ">
                      <KurseButtons titulo_botones={titulo_botones} imagen ={imagen_botones} text_termine={text_termine} link_weitere_infos={link_weitere_infos}  link_termine={link_termine} link_pdf={link_pdf}/>
                  </div> 
       </div>
    

      
    </>
  );
}
