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
  date,
}) {
  return (
    <>
      <div className="row g-0 mt-5  ">
        <div className="col-6  d-flex align-items-center  ">
          <div className="shadow   texto_video_fondo me-5 ">
            {/* <div className="texto_video ">  */}
            <div className=" font_card_title_video pt-4 d-flex justify-content-center">
              {titulo}
            </div>

            <div className=" ms-2 me-2 mt-4 pb-3 contenedor_texto_overflow ">
              <div className="data_vlog_desktop  position-absolute">
                <p>GEPOSTET AM {date}</p>
              </div>
              {/* <div className="p-1  contenedor_margen"> */}
              {texto.map((unTexto, index) => (
                <div key={index} className="font_carrusel_video ">
                  {unTexto}
                </div>
              ))}
              {/* </div> */}
            </div>

            {/* </div>  */}
          </div>
        </div>

        <div className="col-6 ">
          {video != undefined && video != "" && (
            <div className="ratio ratio-16x9  container_video">
              <iframe
                src={video}
                title="YouTube video"
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
