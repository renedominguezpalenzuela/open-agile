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



{/* <!--Card--> */}
          



  <div className="col p-4">
    <div className="card card-rounded   my_card ">

      <img className="card-img-top corte_cards img-rounded " src={`img/${imagen}`} alt={texto_alt}/>

      <div className="card-body text-center w-100    ">
     
        <p className="card-text font_card_title m-1">{titulo}</p>

        { titulo!=undefined && titulo2!="" &&
          <p className="card-text font_card_title2 m-1">{titulo2}</p>
        }
      </div>

     
   <div className="card-footer text-center pb-4 ">
      
       <a href={`/${link}`} className="btn boton_card rounded-pill w-75 h-100" role="button" aria-pressed="true">
       
          <div className="font_card_boton ps-2 pe-2 pt-2  pb-2 ms-2 me-2">Jetzt lesen...</div>
          </a>
     
      </div>

    </div>

  
  </div>


</>
  );
}
