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
}) {
  return (
<>



  
    <div className="row g-0   ">

      <div className="col-4  ">


      </div>

      <div className="col-6 ">
        <div className="row ">

          <div className="col-11 ">
            <div className="card shadow bg-body m-5 p-5 dimension_card ">

              <div className="row">
                <img src={`img/${imagen}`} alt={"${texto_alt}"} className=" img_carrusel " alt="..."/>
              </div>
            

             {/* Texto del Card */}
              <span className="  contenido_card  ">
      
                <div className=" card-title  font_card_title w-75">
                 {procesarTextoLargo(titulo)} 
                </div>

                <div className="ms-2 mt-2 font_card_texto m">
                     NEWSROOM        
                </div>

                <div className="card-body ">
                  <div className="row font_carrusel w-75 text-wrap ">
                    {texto}
                  </div>
                  <div className="row mt-4">
                    <button type="button" className="btn boton_card rounded-pill w-50">
                      <div className="font_card_boton ms-1 me-1">Erfahre mehr...</div>
                    </button>
                  </div>
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
     return (<div><p>{texto.substring(0,longitud_linea)}-</p>{texto.substring(longitud_linea)}</div>);
 }

 return texto;
 
}