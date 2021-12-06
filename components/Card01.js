// import styles from "../styles/Home.module.css";




let ancho = 540;
let longitud_linea = 14;



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

  <div className="col p-4 ">
    <div className="card card-rounded  w-100   my_card ">

      <img className="card-img-top corte_cards img-rounded  " src={`img/${imagen}`} alt={texto_alt}/>

      <div className="card-body text-center w-100    ">
     

        { titulo!=undefined && titulo!="" &&
           <p className="card-text font_card_title  ">{procesarTextoLargo(titulo)}</p>
        }
        { titulo2!=undefined && titulo2!="" &&
          <div className="   d-flex align-items-center justify-content-center   ">
           
           <p className="card-text font_card_title2 m-1">{procesarTextoLargo(titulo2)}</p>
          </div>
        }
      </div>

     
   <div className="card-footer text-center pb-4  ">
      
       {/* <a href={`/${link}`} className="btn  boton_card rounded-pill w-75 h-100" role="button" aria-pressed="true"> */}
       
          {/* <div className="font_card_boton  ps-2 pe-2 pt-2  pb-2 ms-2 me-2">Jetzt lesen...</div> */}
       {/* </a> */}


     <a href={`/${link}/${id}`} >
        <button type="button" className="btn  ms-2 me-2 w-75 h-100 btn-card font-btn-card rounded-pill  ">Jetzt lesen...</button>
     </a>
    </div>

    </div>

  
  </div>


</>
  );
}



function procesarTextoLargo(texto) {


  console.log(texto.substring(longitud_linea, longitud_linea));

  let texto_devolver = "";
  let separador=" ";

  if (texto.substring(longitud_linea, longitud_linea+1) ===" ") {
    separador="-"
  }

  //TODO: si coincide el guion con un espaciom no poner


  if (texto.length > longitud_linea) {
    return (
       <>
        <p>{texto.substring(0, longitud_linea)}{separador}</p>
        {texto.substring(longitud_linea)}
       </>
    );
  } else {
      return <> {texto}</>
  }
}
