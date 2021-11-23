// import styles from "../styles/Home.module.css";

export default function Card01({
  id,
  titulo,
  texto,
  imagen,
  texto_boton,
  texto_alt,
  link
}) {


 
  return (
<>
  <div className="col p-4  ">
    <div className="card card-rounded border  my_card ">

      <img className="card-img-top corte_cards img-rounded " src={`img/${imagen}`} alt={texto_alt}/>

      <div className="card-body text-center w-100  pt-2 ">
     
        <p className="card-text font_card_title m-1">{titulo}</p>
      </div>

      <div className="card-footer text-center pb-4 pt-3">
       <a href={`/${link}`} className="btn boton_card rounded-pill w-75 h-100" role="button" aria-pressed="true">
        {/* <button type="button" className="btn boton_card rounded-pill w-75 h-100"> */}
          <div className="font_card_boton ps-2 pe-2 pt-2  pb-2 ms-2 me-2">Jetzt lesen...</div>
          </a>
        {/* </button> */}
      </div>


    </div>
  </div>
</>
  );
}
