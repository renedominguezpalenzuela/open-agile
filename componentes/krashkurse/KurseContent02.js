import { servidor_url } from "../../config";
import Image from "next/image";
import Link from "next/link";

import React from "react";

 

export default function KurseContent02({imagen, titulo, texto, imagen_botones,titulo_botones, text_termine, link_weitere_infos, link_termine}) {
  return (
    <>
       <div className="row  ">


       {imagen!=undefined && imagen!="" &&
                     <img className="img-fluid  " src={`${servidor_url}/img/${imagen}`} alt="" loading="lazy"  />
                  }
                


                
                  {texto.map((unaLinea, index)=>(
                                                      <React.Fragment key={index}>
                                                      <div className=" mt-2  p-3 fuente-leistungen  bordes_leistungen d-flex justify-content-center ">{unaLinea}</div>
                                                        {unaLinea==="<br>"?"<br/>":""}
                                                      </React.Fragment>
                                )
                      )}

       </div>
    

      
    </>
  );
}
