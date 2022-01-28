//----------------------------------------------------------------------------------------------------------
//            Area superior principal:
//----------------------------------------------------------------------------------------------------------
// Contiene: Menu superior, Texto principal, Iconos de la izquierda, Boton de menu flotante
//TODO: pasar como parametros el texto
//TODO: Arreglar boton menu flotante, que no funciona como sticky

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { servidor_url } from "../../config";

const justificar = (footer) => {
  if (footer != undefined && footer) {
    return "justify-content-center";
  } else {
    return "justify-content-md-end justify-content-center";
  }
};

const iconos_size = (footer) => {
  if (footer != undefined && footer) {
    return "bi-footer";
  } else {
    return "bi";
  }
};

const iconos_img_size = (footer) => {
  if (footer != undefined && footer) {
    return "social-img-footer";
  } else {
    return "social-img";
  }
};

export default function Content01Iconos({ footer }) {
  return (
    <>
      {/* <div className="row justify-content-end g-0  "> */}
      <div className={`row  g-0 ${justificar(footer)}`}>
        <div className="col-1 iconos-contenedor">
          <a href="https://www.linkedin.com/company/open-agile">
            <i
              className={`${iconos_size(
                footer
              )} bi-linkedin iconos-social`}></i>
          </a>
        </div>

        <div className="col-1 iconos-contenedor ">
          <a href="https://www.youtube.com/channel/UC4JhXDcBKkgVaZILgnzhm0A">
            <i
              className={`${iconos_size(footer)} bi-youtube iconos-social`}></i>
          </a>
        </div>

        <div className="col-1 iconos-contenedor ">
          <a href="https://www.instagram.com/open_agile/">
            <i
              className={`${iconos_size(
                footer
              )} bi-instagram iconos-social`}></i>
          </a>
        </div>

        <div className="col-1 iconos-contenedor mt-2 ">
          <a href="https://www.xing.com/pages/open-agile">
            <img
              className={iconos_img_size(footer)}
              src={`${servidor_url}/img/xing-img.svg`}
            />
            {/* "social-img"   */}
          </a>
        </div>

        <div className="col-1 iconos-contenedor  me-0 me-md-5">
          <a href="https://www.facebook.com/OpenAgile21" className="youtube">
            <i
              className={`${iconos_size(
                footer
              )} bi-facebook iconos-social`}></i>
          </a>
        </div>
      </div>
    </>
  );
}
