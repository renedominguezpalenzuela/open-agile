import styles from "../styles/Home.module.css";
import Card02 from "./Card02";
import Card01 from "./Card01";



//----------------------------------------------------------------------------------------------------------
//            Area de Contenido: Carousel: BLOG
//----------------------------------------------------------------------------------------------------------
//Contiene: Carrusel
//TODO: pasar como parametros los datos
//Responsivo: ERROR, 
//TODO: Crear reglas para cuando cambia de tamano mostrar cards normales


export default function Content05 ( ) {

  



  return (
<>


    <div id="MyCarouselTitle" className="   color_carrusel">



        <div className="font_title mt-5 ms-4 pt-5"> Das Wichtigste</div>
        <div className="font_card_texto mt-2 ms-4"> Rund um die Akademie</div>

        <div id="MyCarousel" className="carousel slide   " data-bs-ride="carousel" data-mdb-touch="true">


            <div className="carousel-indicators">
                <button type="button" data-bs-target="#MyCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#MyCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#MyCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#MyCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#MyCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>

            </div>


            <div className="carousel-inner  alto_carrusel    ">
                <div className="carousel-item active  ">

                    <div className="d-xl-none  ">
                        <div class="row d-flex justify-content-center">
                            <div class="col-md-6">
                                <Card01 imagen="card09.jpg" titulo="Transformation am Beispiel der Sparkasse Bremen" texto="qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit" />
                            </div>
                        </div>
                    </div>


                    <div className="d-none d-xl-block  ">
                        <Card02 imagen="card09.jpg" titulo="Transformation am Beispiel der Sparkasse Bremen" texto="qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem" />
                    </div>

                </div>


                <div className="carousel-item">
                    <div className="d-xl-none">
                        <div class="row d-flex justify-content-center">
                            <div class="col-md-6">
                                <Card01 imagen="card02.jpg" titulo="Entwicklung zur evolutionären Zusammenarbeit" texto="qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit" />
                            </div>
                        </div>
                    </div>


                    <div className="d-none d-xl-block">
                        <Card02 imagen="card02.jpg" titulo="Entwicklung zur evolutionären Zusammenarbeit" texto="qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem" />
                    </div>


                </div>

                <div className="carousel-item">
                    <div className="d-xl-none">
                        <div class="row d-flex justify-content-center">
                            <div class="col-md-6">
                                <Card01 imagen="card05.jpg" titulo="Gründe für die Selbstorganisation" texto="qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit" />
                            </div>
                        </div>
                    </div>

                    <div className="d-none d-xl-block">
                        <Card02 imagen="card05.jpg" titulo="Gründe für die Selbstorganisation" texto="qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem" />
                    </div>



                </div>

                <div className="carousel-item">
                    <div className="d-xl-none">
                        <div class="row d-flex justify-content-center">
                            <div class="col-md-6">
                                <Card01 imagen="card06.jpg" titulo="Architektur selbstorganisierter Teams" texto="qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit" />
                            </div>
                        </div>
                    </div>

                    <div className="d-none d-xl-block">
                        <Card02 imagen="card06.jpg" titulo="Architektur selbstorganisierter Teams" texto="qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem" />
                    </div>

                </div>

                <div className="carousel-item">
                    <div className="d-xl-none">
                        <div class="row d-flex justify-content-center">
                            <div class="col-md-6">
                                <Card01 imagen="card07.jpg" titulo="Workhacks für die Selbstorganisation" texto="qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit" />
                            </div>
                        </div>
                    </div>

                    <div className="d-none d-xl-block">
                        <Card02 imagen="card07.jpg" titulo="Workhacks für die Selbstorganisation" texto="qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem" />
                    </div>

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





</>
  );
}