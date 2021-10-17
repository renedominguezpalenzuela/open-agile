import styles from "../styles/Home.module.css";
import Card02 from "./Card02";



//----------------------------------------------------------------------------------------------------------
//            Area de Contenido: Carousel
//----------------------------------------------------------------------------------------------------------
//Contiene: Carrusel
//TODO: pasar como parametros los datos
//Responsivo: ERROR, 
//TODO: Crear reglas para cuando cambia de tamano mostrar cards normales


export default function Content05 ( ) {
  return (
<>
    {/* <div className="row m-4 ">&nbsp;</div> */}

    <div id="MyCarouselTitle" className="row   color_carrusel">



            <div className="font_title mt-5 ms-4">UNSER BLOG</div>
            <div className="font_card_texto mt-2 ms-4">NEW WORK, LEADERSHIP & MORE</div>

        <div id="MyCarousel" className="carousel slide " data-bs-ride="carousel" data-mdb-touch="true">


            <div className="carousel-indicators">
                <button type="button" data-bs-target="#MyCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#MyCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#MyCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#MyCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#MyCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
                
            </div>


            <div className="carousel-inner  alto_carrusel ">
                <div className="carousel-item active">
                    <Card02 imagen="card09.jpg" titulo="Transformation am Beispiel der Sparkasse Bremen" texto="qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem" />

                </div>
                <div className="carousel-item">
                    <Card02 imagen="card02.jpg" titulo="Entwicklung zur evolutionären Zusammenarbeit" texto="qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem" />

                </div>
                <div className="carousel-item">
                    <Card02 imagen="card05.jpg" titulo="Gründe für die Selbstorganisation" texto="qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem" />
                </div>

                <div className="carousel-item">
                    <Card02 imagen="card06.jpg" titulo="Architektur selbstorganisierter Teams" texto="qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem" />
                </div>

                <div className="carousel-item">
                    <Card02 imagen="card07.jpg" titulo="Workhacks für die Selbstorganisation" texto="qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem" />
                </div>

            </div>


            <button className="carousel-control-prev" type="button" data-bs-target="#MyCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#MyCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
            </button>

        </div>
    </div>



    {/* <div className="row m-4">&nbsp;</div>
    <div className="row m-4">&nbsp;</div> */}

</>
  );
}