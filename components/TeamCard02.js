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
  link
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
                <a href={`${link}/${id}`} >
                   <img src={`img/${imagen}`} alt={"${texto_alt}"} className=" img_carrusel-team " alt="..." loading="lazy" />
                </a>   
                </div>

                {/* Texto del Card */}
                <span className="  contenido_card_team  ">
                  <a href={`${link}/${id}`} >
                  <div className=" card-title text-center font_card_title_carrusel_team ">
                    {procesarTextoLargo(titulo)}
                  </div>

                  {/* <div className="card-body  "> */}

                   
                    <div className="row font_carrusel_team   mb-2 ">{texto}</div>
                     
                     <div className="row font_carrusel_team    "><span className="text-center">{motto}</span></div>
                   <div className="row font_carrusel_team    "><span className="text-center">{motto_author}</span></div>
                   
                   <a href={`tel:${telefono}`}>
                    <div className="row font_carrusel_team color_magenta  mt-2  ">
                     
                    <span className="text-center">{`Telefon:${telefono}`}</span>
                    
                    </div>
                    </a>
                    <a href={`mailto:${correo}`}>
                     <div className="row font_carrusel_team  color_magenta  ">
                     
                     <span className="text-center">{`E-Mail:${correo}`}</span>
                     
                     </div>
                     </a>
                    </a> 
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
