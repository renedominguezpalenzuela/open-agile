import React from "react";

let longitud_linea = 24;
export default function Card01Blog({ data }) {
  const imagen = data.attributes.img.data.attributes.url;
  const titulo = data.attributes.title.includes("BUCH")
    ? ["BUCH", data.attributes.title.slice(4)]
    : data.attributes.title;
  const titulo2 = "";
  const link = data.attributes.slug;
  let cadena_sin_padding =
    "row  h-md-100  d-flex align-items-center justify-content-center ";

  if (titulo === undefined || titulo === "") {
    cadena_sin_padding = cadena_sin_padding + "mt-2";
  }

  return (
    <>
      <div className="card  my_card myanimacion sombra_cards mb-3">
        {imagen != undefined && imagen != "" && (
          <img
            className="card-img-top corte_cards img-rounded  "
            src={imagen}
          />
        )}

        <div className="card-body text-center">
          {Array.isArray(titulo) ? (
            titulo != undefined &&
            titulo != "" &&
            titulo.map((unTexto, index) => (
              <React.Fragment key={index}>
                <div className="text-center font_card_title ">{unTexto} </div>
              </React.Fragment>
            ))
          ) : (
            <div className="text-center font_card_title ">{titulo} </div>
          )}

          {Array.isArray(titulo2) ? (
            titulo2 != undefined &&
            titulo2 != "" && (
              <div className={cadena_sin_padding}>
                {titulo2.map((unTexto, index) => (
                  <React.Fragment key={index}>
                    <div className="text-center font_cards_magenta ">
                      {unTexto}
                    </div>
                  </React.Fragment>
                ))}
              </div>
            )
          ) : (
            <div className="text-center font_cards_magenta ">{titulo2}</div>
          )}
        </div>

        <div className="card-footer-my-card text-center pb-4  ">
          <a href={`/${"blog/" + link}`}>
            <button
              type="button"
              className="btn  ms-2 me-2 w-75 h-100 btn-card font-btn-card rounded-pill  ">
              Jetzt lesen...
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

function procesarTextoLargo(texto) {
  return <> {texto}</>;

  let texto_devolver = "";
  let separador = " ";

  if (texto.substring(longitud_linea, longitud_linea + 1) === " ") {
    separador = "-";
  }

  //TODO: si coincide el guion con un espaciom no poner

  if (texto.length > longitud_linea) {
    return (
      <>
        <p>
          {texto.substring(0, longitud_linea)}
          {separador}
        </p>
        {texto.substring(longitud_linea)}
      </>
    );
  } else {
    return <> {texto}</>;
  }
}
