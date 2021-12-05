// import styles from "../styles/Home.module.css";

let ancho = 540;
let longitud_linea = 50;

export default function TeamCard02({
  id,
  titulo,
  texto,
  imagen,
  motto,
  motto_author,
  telefono,
  correo,
}) {
  return (
    <>
      <div className="row g-0   ">
        <div className="col-4  "></div>

        <div className="col-6 ">
          <div className="row ">
            <div className="col-11 ">
              <div className="card  shadow bg-body m-5 p-5 dimension_card_carrusel_team  ">
                <div className="row ">
                   <img src={`img/${imagen}`} alt={"${texto_alt}"} className=" img_carrusel " alt="..." />
                </div>

                {/* Texto del Card */}
                <span className="  contenido_card_team  ">
                  <div className=" card-title text-center font_card_title_carrusel_team ">
                    {procesarTextoLargo(titulo)}
                  </div>

                  {/* <div className="card-body  "> */}

                   
                    <div className="row font_carrusel_team   mb-2 ">{texto}</div>
                     
                     <div className="row font_carrusel_team    "><span className="text-center">{motto}</span></div>
                   <div className="row font_carrusel_team    "><span className="text-center">{motto_author}</span></div>
                   
                    <div className="row font_carrusel_team color_magenta  mt-2  "><span className="text-center">{telefono}</span></div>
                     <div className="row font_carrusel_team  color_magenta  "><span className="text-center">{correo}</span></div>
                  {/* </div> */}

                 
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-1 "></div>
      </div>
    </>
  );
}

function procesarTextoLargo(texto) {
  if (texto.length > longitud_linea) {
    return (
      <div>
        <p>{texto.substring(0, longitud_linea)}-</p>
        {texto.substring(longitud_linea)}
      </div>
    );
  }

  return texto;
}
