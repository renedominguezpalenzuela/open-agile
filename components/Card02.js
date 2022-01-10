// import styles from "../styles/Home.module.css";

let ancho = 540;
let longitud_linea = 28;

export default function Card02({
  id,
  titulo,
  texto,
  imagen,
  video,
  texto_boton,
  texto_alt,
  link,
}) {
  return (
    <>
      <div className="row g-0  mt-5 ">
        <div className="col-6  d-flex align-items-center">
          <div className="shadow   texto_video_fondo ">
            <div className=" p-3 font_card_title_video me-3">
              {procesarTextoLargo(titulo)}
            </div>

            <div className=" p-3 me-4">
              <div className=" font_carrusel_video   ">{texto}</div>
            </div>
          </div>
        </div>
        <div className="col-6 ">
          {/* <div className="  video_carrusel"> */}
          {video != undefined && video != "" && (
            //
            <div className=" container_video d-flex align-items-center">
            
               <iframe
                className="responsive-iframe"
                src={video}
                frameBorder="3"
                //  width="100%"
                //  height="100%"
                allowFullScreen></iframe> 
            </div>
          )}
          {/* </div> */}
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

function procesarTextoLargo(texto) {
  if (texto.length > longitud_linea) {
    return (
      <div>
        {texto.substring(0, longitud_linea)} {texto.substring(longitud_linea)}
      </div>
    );
  }

  return texto;
}
