import { servidor_url } from "../../config";
import Image from "next/image";
import Link from "next/link";
import KurseButtons from "./KurseButtons";

 

export default function KurseContent03({imagen, titulo, texto, imagen_botones,titulo_botones, text_termine, link_weitere_infos, link_termine, link_pdf}) {
  return (
    <>
       <div className="row  ">
                  <img className="img-fluid  " src={`${servidor_url}/img/${imagen}`} alt="" />


                  <div className="tabla-titulo-cursos mt-4  ">
                         {titulo} 
                  </div>
                  {texto.map((unaLinea, index)=>(
                                                      <>
                                                      <div className=" mt-2  font-kosten-cursos ">{unaLinea}</div>
                                                        {unaLinea==="<br>"?"<br/>":""}
                                                      </>
                                )
                      )}


                  <div className="espacio"></div>

                  <div className="mt-5  ">
                      <KurseButtons titulo_botones={titulo_botones} imagen ={imagen_botones} text_termine={text_termine} link_weitere_infos={link_weitere_infos}  link_termine={link_termine} link_pdf={link_pdf}/>
                  </div> 
       </div>
    

      
    </>
  );
}
