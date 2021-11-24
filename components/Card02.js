// import styles from "../styles/Home.module.css";

let ancho = 540;
let longitud_linea =50;




export default function Card02({
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




  <div className="row g-0   ">

    <div className="col-4  ">


    </div>

    <div className="col-6 ">
      <div className="row ">

        <div className="col-11 ">
          <div className="card my_card_carrusel shadow bg-body m-5 p-5 dimension_card_carrusel  ">

            <div className="row ">
              <img src={`img/${imagen}`} alt={"${texto_alt}"} className=" img_carrusel " alt="..."/>
            </div>
            

             {/* Texto del Card */}
            <span className="  contenido_card  ">


              <div className=" card-title  font_card_title ">
                 {procesarTextoLargo(titulo)} 
              </div>

              <div className="ms-2 mt-3 font_card_texto m-3">
                     NEWSROOM        
              </div>

              <div className="card-body h-75 ">
                <div className="row font_carrusel   ">
                    {texto}
                </div>
                  


    
              </div>
             
             
                 <div className=" text-center  ">
              

                <a href={`/${link}`} className="btn boton_card rounded-pill w-50 h-100" role="button" aria-pressed="true">

                  <div className="font_card_boton p-2  ms-2 me-2">Jetzt lesen...</div>
                </a>

              </div>
            </span>

          </div>
        </div>


      </div>

    </div>

    <div className="col-1 ">

    </div>
  </div>



</>
  );}






function procesarTextoLargo (texto) {

 if (texto.length>longitud_linea)  {
     return (<div>
<p>{texto.substring(0,longitud_linea)}-</p>{texto.substring(longitud_linea)}</div>);
 }

 return texto;
 
}