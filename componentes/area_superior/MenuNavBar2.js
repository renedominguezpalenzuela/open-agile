import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { servidor_url } from "../../config";

export default function MenuNavBar2() {
  return (
    <>
      <div className="navbar-movil">
        <div className="navbar1    d-flex align-items-center justify-content-start">
          <button id="boton_abrir_menu2" className="btn mt-1 " role="button">
            <FontAwesomeIcon
              icon="bars"
              className="botonTresBarras"
              width="32"
            />
          </button>
        </div>

        <div className="navbar2  d-flex align-items-center justify-content-end">
          <a className=" " href="/">
            <img
              className="  "
              src={`${servidor_url}/img/logo/3.svg`}
            />
          </a>
         
        </div>
      </div>
    </>
  );
}
