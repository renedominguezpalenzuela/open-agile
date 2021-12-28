import { servidor_url } from "../../config";
import Image from "next/image";
import Link from "next/link";

export default function KurseContent01({imagen, titulo, texto}) {
  return (
    <>
       <div className="row ">
               <img className="img-fluid  " src={`${servidor_url}/img/${imagen}`} alt="" />
       </div>
       <div className="tabla-titulo text-start   justificar">
                {titulo}
       </div>
        {texto.map((unaLinea, index)=>(
                                              <>
                                               <div className="text-start  fuente-texto-tabla   ">{unaLinea}</div>
                                                {unaLinea==="<br>"?"<br/>":""}
                                              </>
                         )
              )}

       
        

      
    </>
  );
}
