import Card02 from "./Card02";
import Card01 from "./Card01";

//----------------------------------------------------------------------------------------------------------
//            Area de Contenido: Carousel: BLOG
//----------------------------------------------------------------------------------------------------------
//Contiene: Carrusel
//TODO: pasar como parametros los datos
//Responsivo: ERROR,
//TODO: Crear reglas para cuando cambia de tamano mostrar cards normales

export default function Content05({ datos, color_fondo }) {

 let clase_color_carrusel='color_carrusel';
 if (color_fondo==='blanco') {
   clase_color_carrusel='color_carrusel_blanco';
 }

  return (
    <>
      <div id="MyCarouselTitle" className={`${clase_color_carrusel} pb-1`}>

       {/* <div id="MyCarouselTitle" className="color_carrusel pb-1 ">  */}
        <div className=" row justify-content-center font_title_seccion_sombra   mt-2  pt-5">
          {" "}
          VLOG
        </div>
        <div className=" row justify-content-center font_card_texto mt-2 ">
          {" "}
          Open Agile im Dialog
        </div>

        <div className=" row justify-content-center">
          {/*  */}
          <div
            id="MyCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
            data-mdb-touch="true">
            {/* TODO: crear de forma dinamica */}
            <div className="carousel-indicators ">
              <button type="button" data-bs-target="#MyCarousel" data-bs-slide-to="0" className="active " aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#MyCarousel" data-bs-slide-to="1" className="" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#MyCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#MyCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#MyCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
              <button type="button" data-bs-target="#MyCarousel" data-bs-slide-to="5" aria-label="Slide 6"></button>
              <button type="button" data-bs-target="#MyCarousel" data-bs-slide-to="6" aria-label="Slide 7"></button>
            </div>

            <div className="carousel-inner  alto_carrusel    ">

            

              {datos.map((unDato, index) => {
                return (
                  <div key={index} className={ unDato.id == 1 ? " carousel-item active" : "carousel-item"  }>
                    <div className="d-xl-none  ">
                      <div className="row d-flex justify-content-center">
                        <div className="col-md-6">
                          <Card01 imagen={unDato.image} titulo={unDato.title} texto={unDato.text} />
                        </div>
                      </div>
                    </div>

                    <div className="d-none d-xl-block  ">
                      <Card02 video={unDato.link} titulo={unDato.title} texto={unDato.text} />
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              className="carousel-control-prev zindex-3000"
              type="button"
              data-bs-target="#MyCarousel"
              data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button
              className="carousel-control-next zindex-3000"
              type="button"
              data-bs-target="#MyCarousel"
              data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
