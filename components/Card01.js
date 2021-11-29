// import styles from "../styles/Home.module.css";

export default function Card01({
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

  <div className="col p-4">
    <div className="card card-rounded   my_card ">

      <img className="card-img-top corte_cards img-rounded " src={`img/${imagen}`} alt={texto_alt}/>

      <div className="card-body text-center w-100    ">
     
        <p className="card-text font_card_title  ">{titulo}</p>

        { titulo2!=undefined && titulo2!="" &&
          <div className="   d-flex align-items-center justify-content-center   ">
           
           <p className="card-text font_card_title2 m-1">{titulo2}</p>
          </div>
        }
      </div>

     
   <div className="card-footer text-center pb-4  ">
      
       {/* <a href={`/${link}`} className="btn  boton_card rounded-pill w-75 h-100" role="button" aria-pressed="true"> */}
       
          {/* <div className="font_card_boton  ps-2 pe-2 pt-2  pb-2 ms-2 me-2">Jetzt lesen...</div> */}
       {/* </a> */}

        <button type="button" className="btn  ms-2 me-2 w-75 h-100 btn-card font-btn-card rounded-pill  ">Jetzt lesen...</button>
     
    </div>

    </div>

  
  </div>


</>
  );
}
