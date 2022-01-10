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

  console.log(texto);
  return (
    <>
      <div className="row g-0 mt-5 ">
        <div className="col-6  d-flex align-items-center  ">
          <div className="shadow   texto_video_fondo me-5 ">

            {/* <div className="texto_video "> */}
              <div className=" font_card_title_video pt-3  d-flex justify-content-center">
                 {titulo}
              </div>

              <div className=" ms-2 me-2 mt-4 ">
                 {texto.map((unTexto, index)=>(
                   <div className="font_carrusel_video">{unTexto}</div>


                 ))}
                 
              </div>

            {/* </div> */}
          </div>
        </div>

        <div className="col-6">
          {video != undefined && video != "" && (
            <div className=" container_video d-flex align-items-center ">
              <iframe
                className="responsive-iframe"
                src={video}
                frameBorder="3"
                allowFullScreen></iframe>
            </div>
          )}
        </div>
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
