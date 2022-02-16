import Card02 from "./Card02";
import React from "react";
import ReactPlayer from "react-player/lazy";

export default function Content05({ datos, color_fondo }) {
  let clase_color_carrusel = "color_carrusel";
  if (color_fondo === "blanco") {
    clase_color_carrusel = "color_carrusel_blanco";
  }

  const getDt = (datea) => {
    const dt = new Date(datea);
    return `${dt.getDate()}.${dt.getMonth()}.${dt.getFullYear()}`;
  }

  return (
    <>
      <div id="MyCarouselTitle" className={`${clase_color_carrusel} pb-1`}>
        <div className=" row justify-content-center font_title_seccion_sombra   mt-2  pt-5">
          VLOG
        </div>
        <div className=" row justify-content-center font_card_texto mt-2 mb-2">
          Open Agile im Dialog
        </div>

        <div className=" row justify-content-center">
          <div
            id="MyCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
            data-mdb-touch="true">
            <div className="carousel-indicators ">
              {datos.map((unDato, index) =>
                index === 0 ? (
                  <button
                    key={index}
                    type="button"
                    data-bs-target="#MyCarousel"
                    data-bs-slide-to={index.toString()}
                    className="active "
                    aria-current="true"
                    aria-label={"Slide " + index.toString()}></button>
                ) : (
                  <button
                    key={index}
                    type="button"
                    data-bs-target="#MyCarousel"
                    data-bs-slide-to={index.toString()}
                    className=""
                    aria-label={"Slide " + index.toString()}></button>
                )
              )}
            </div>
            <div className="carousel-inner  alto_carrusel  mt-md-5">
              {datos.map((unDato, index) => {
                return (
                  <div
                    key={index}
                    className={
                      unDato.id == 1 ? " carousel-item active" : "carousel-item"
                    }>
                    <div className="d-xl-none  ">
                      <div className="row d-flex justify-content-center">
                        <div className="col-md-6 ">
                          <div className="row sombra_cards myanimacion mt-md-5 mt-lg-4 mi-card">
                            <div className="col p-3 position-relative">
                              {unDato.attributes.link != undefined &&
                                unDato.attributes.link != "" && (
                                  <div className="ratio ratio-16x9">
                                    <ReactPlayer
                                      light={true}
                                      url={unDato.attributes.link}
                                      width="100%"
                                      height="100%"
                                    />
                                  </div>
                                )}
                              <div className="font_data_vlog data_vlog_movile pt-2 position-absolute">
                                <p>GEPOSTET AM {getDt(unDato.attributes.date)}</p>
                              </div>
                            </div>
                            <div>
                              <div className="card-body text-center">
                                <React.Fragment>
                                  <div className="card-text font_card_title_vlog ">
                                    {unDato.attributes.title}
                                  </div>
                                </React.Fragment>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-none d-xl-block  ">
                      <Card02
                        video={unDato.attributes.link}
                        titulo={unDato.attributes.title}
                        texto={unDato.attributes.text}
                        date={unDato.attributes.createdAt}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              className="carousel-control-prev zindex-3000 d-none d-md-block"
              type="button"
              data-bs-target="#MyCarousel"
              data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button
              className="carousel-control-next zindex-3000 d-none d-md-block"
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
