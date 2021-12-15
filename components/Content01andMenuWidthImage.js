//----------------------------------------------------------------------------------------------------------
//            Area superior principal:
//----------------------------------------------------------------------------------------------------------

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Content01Text from "./Content01Text";
import MenuNavBar from "../componentes/area_superior/MenuNavBar";

import { servidor_url } from "../config";
import Link from "next/link";

export default function Content01andMenuWidthImage({
  texto1,
  texto2,
  texto2a,
}) {
  return (
    <>
      <div id="row03" className="row  menu_superior mt-2 g-0  ">
        <div className="col ms-3  text-center   ">
          <a className="navbar-brand " href="/">
            <img className="   " src={`${servidor_url}/img/logo/5.svg`} />
          </a>
        </div>

        <div className=" col mt-3 text-center   ">
          <div className="row g-0 d-none d-lg-block ">
            <MenuNavBar />
          </div>

          <div className="row g-0  ms-4 mt-3 ">
            <div className="font_title_secundario  mt-5">{texto1}</div>

            <div className="font_title mt-2 ">
              <p>{texto2}</p>

              {texto2a != undefined && texto2a != "" && <> {texto2a} </>}
            </div>


            
                <div className="font_title_secundario_quiz font_title_purple mt-2">
              <p>Mache jetzt den Agile check!</p>

              
            </div>

            <div className="row  text-center mb-4 mt-5 d-flex  justify-content-center ">
              <a href="/quiz/1">
                <button
                  type="button"
                  className="btn p-3 ms-2 me-2 w-50 h-100 btn-card font-btn-card rounded-pill  ">
                  AGILE CHECK
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="col mt-4 text-center   ">
          <a href="/quizstart">
            <button
              type="button"
              className="btn mt-1 btn-outline-primary font_boton  ">
              Agile Check
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
