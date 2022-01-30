//----------------------------------------------------------------------------------------------------------
//            Area superior principal:
//----------------------------------------------------------------------------------------------------------
// Contiene: Menu superior, Texto principal, Iconos de la izquierda, Boton de menu flotante
//TODO: pasar como parametros el texto
//TODO: Arreglar boton menu flotante, que no funciona como sticky

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { servidor_url } from "../../config";

export default function Content01TextSinIcons({
  texto1,
  texto2,
  texto2a,
  vista_movil,
  cursos,
  titulo_largo,
  titulo_muy_largo,
  team,
  shop,
  home,
  lei,
}) {
  return (
    <>
      <div
        className={`${
          team ? "mt-5 mb-3 pt-5  pt-md-0 mt-md-0 pb-md-3" : "mt-4 mb-3 pb-3"
        }`}>
        {texto1 != undefined && texto1 != "" && (
          <div
            className={
              muylargo(texto1) +
              formato_titulo1(
                vista_movil,
                cursos,
                titulo_largo,
                titulo_muy_largo,
                home,
                lei
              )
            }>
            {texto1}
          </div>
        )}

        {texto2 != undefined && texto2 != "" && (
          <div
            className={formato_titulo2(
              vista_movil,
              titulo_muy_largo,
              team,
              shop,
              home
            )}>
            <div>{texto2} </div>

            {texto2a != undefined && texto2a != "" && <> {texto2a} </>}
          </div>
        )}
      </div>
    </>
  );
}

const muylargo = (texto1) => {
  let aux = texto1.split(" ");
  let joincad = "";
  for (let i = aux.length - 1; i >= 0; i--) {
    joincad += aux[i];
  }

  if (joincad.length > 17) return "titulo_extra_grande ";
  return "";
};

const formato_titulo1 = (
  vista_movil,
  cursos,
  titulo_largo,
  titulo_muy_largo,
  home,
  lei
) => {
  let clase = "";
  if (titulo_largo != undefined && titulo_largo) {
    clase = "font_title_largo font_title_purple mt-1 ";
  }

  if (titulo_muy_largo != undefined && titulo_muy_largo) {
    clase = "font_title_muy_largo font_title_purple mt-1  ";
  }

  if (cursos != undefined && cursos) {
    clase = "font_title_secundario font_title_purple mt-3";
  }

  if (vista_movil === undefined || !vista_movil) {
    clase = "font_title_secundario font_title_purple mt-1 ";
  }

  if (vista_movil != undefined && vista_movil) {
    clase = "titulo1_vista_movil mt-3 d-flex";
  }

  if (
    vista_movil != undefined &&
    vista_movil &&
    titulo_muy_largo != undefined &&
    titulo_muy_largo
  ) {
    clase = "titulo1_vista_movil mt-3";
  }

  if (
    vista_movil != undefined &&
    vista_movil &&
    titulo_largo != undefined &&
    titulo_largo
  ) {
    clase = "titulo1_vista_movil mt-3 titulo_grande";
  }
  return (
    clase +
    `${home ? " justify-content-center" : ""}` +
    `${lei && vista_movil ? " force_font_color" : ""}`
  );
};

// const formato_titulo1 = (
//   vista_movil,
//   cursos,
//   titulo_largo,
//   titulo_muy_largo
// ) => {
//   if (titulo_largo != undefined && titulo_largo) {
//     return "font_title_largo font_title_purple mt-1 ";
//   }

//   if (titulo_muy_largo != undefined && titulo_muy_largo) {
//     return "font_title_muy_largo font_title_purple mt-1  ";
//   }

//   if (cursos != undefined && cursos) {
//     return "font_title_secundario font_title_purple mt-3";
//   }

//   if (vista_movil === undefined || !vista_movil) {
//     return "font_title_secundario font_title_purple mt-1 ";
//   }

//   if (vista_movil != undefined && vista_movil) {
//     return "titulo1_vista_movil mt-3";
//   }

// };

const formato_titulo2 = (vista_movil, titulo_muy_largo, team, shop, home) => {
  if (vista_movil && shop) return "font_title_muy_largo2 mt-3 force-magenta";
  if (titulo_muy_largo != undefined && titulo_muy_largo) {
    return "font_title_muy_largo2 mt-3";
  }

  if (vista_movil === undefined || !vista_movil) {
    return "font_title mt-2";
  }

  if (vista_movil != undefined && vista_movil) {
    if (team) {
      return "titulo2_vista_movil text-left";
    } else if (home) {
      return "titulo2_vista_movil text-center";
    } else {
      return "titulo2_vista_movil text-left";
    }
  }
};
