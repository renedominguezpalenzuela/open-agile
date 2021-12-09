// import styles from "../styles/Home.module.css";

let ancho = 540;
let longitud_linea =28;




export default function Card02({
  id,
  titulo,
  texto,
  imagen,
  video,
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

            <div className="row  video_carrusel">

            {imagen!=undefined && image!="" &&
               <img src={`img/${imagen}`} alt={"${texto_alt}"} className=" img_carrusel " alt="..."/> 
            }

            {video!=undefined && video!="" &&
                  <div class="embed-responsive embed-responsive-4by3 ">

                  <iframe width="430vw" height="380vh" src={video}  frameBorder="3" allowFullScreen></iframe> 
                    
                 </div>

              //  <img src={`img/${imagen}`} alt={"${texto_alt}"} className=" img_carrusel " alt="..."/> 
            }




            </div>
            

             {/* Texto del Card */}
            <span className="  contenido_card   ">


              <div className=" card-title  font_card_title ">
                 {/* {procesarTextoLargo(titulo)}  */}
                 {procesarTextoLargo(titulo)}
              </div>


              <div className="card-body h-75 ">
                <div className="row font_carrusel   ">
                    {texto}
                </div>
                  


    
              </div>
             
             
                 {/* <div className=" text-center  ">
              

                <a href={`/${link}`} className="btn boton_card rounded-pill w-50 h-100" role="button" aria-pressed="true">

                  <div className="font_card_boton p-2  ms-2 me-2">Jetzt lesen...</div>
                </a>

              </div> */}
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
{texto.substring(0,longitud_linea)} {texto.substring(longitud_linea)}</div>);
 }

 return texto;
 
}