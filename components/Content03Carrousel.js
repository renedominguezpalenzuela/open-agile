import { useState } from "react";

export default function Content03Carrousel({ mainlogos }) {
  const [active, setActive] = useState(0);
  return (
    <>
      <div
        id="empresas"
        className="row color_fondo content03Carrousel pb-3 pt-3">
        <div className="row justify-content-center font_title_seccion    pt-5 ">
          Diese und viele weitere Unternehmen
        </div>

        <div className="row justify-content-center font_card_texto mt-4 ">
          VERTRAUEN OPEN AGILE
        </div>

        <div id="demo" className="carousel slide  " data-bs-ride="carousel">
          <div className="carousel-indicators">
            {mainlogos.data.map((unDato, index) => (
              <button
                onClick={() => setActive(index)}
                type="button"
                data-bs-target="#demo"
                data-bs-slide-to={index.toString}
                className={index === active ? "active" : ""}></button>
            ))}
          </div>

          <div className="carousel-inner altoCarrousel3 d-flex align-items-center">
            {/* <div className=" row d-flex align-item-center justify-content-center h-100  "> */}
            {mainlogos.data.map((unDato, index) => (
              <div
                key={index}
                className={`${
                  index === active ? "active" : ""
                } carousel-item `}>
                <a
                  href={unDato.attributes.website}
                  aria-pressed="true"
                  className="">
                  <img
                    className="img-fluid  grayscale "
                    src={unDato.attributes.logo.data.attributes.url}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
