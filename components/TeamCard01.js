// import styles from "../styles/Home.module.css";

import Link from "next/link";
import MenuFlotanteBoton from "./MenuFlotanteBoton";

export default function TeamCard01({
  id,
  titulo,
  titulo2,
  texto,
  imagen,
  texto_boton,
  texto_alt,
  link
}) {


  


 
  return (
<>

  <div className="col p-4 ">
    <div className="card card-rounded  w-100   my_card ">

      <img className="card-img-top corte_cards img-rounded  " src={`img/${imagen}`} alt={texto_alt}/>

      <div className="card-body text-center w-100    ">
     
        <p className="card-text font_card_title  ">{titulo}</p>

        { titulo2!=undefined && titulo2!="" &&
          <div className="   d-flex align-items-center justify-content-center   ">
           
           <p className="card-text font_card_title2 m-1">{titulo2}</p>
          </div>
        }
      </div>

     
   <div className="card-footer-my-card text-center pb-4  ">
 
     <a href={`${link}/${id}`} >
        <button type="button" className="btn  ms-2 me-2 w-75 h-100 btn-card font-btn-card rounded-pill  ">Jetzt lesen...</button>
     </a>
    </div>

    </div>

  
  </div>


</>
  );
}
