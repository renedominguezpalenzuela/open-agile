import { servidor_url } from "../../config";

import MenuNavBar from "./MenuNavBar";
import Logo from "./Logo";
import BotonAgileCheck from "./BotonAgileCheck";

export default function Titulo({ texto1, texto2, texto2a }) {
  return (
    <>
     
      

        {/*    <div className="row d-none d-lg-block "> */}
        <div className=" ps-3 pe-3 ">
          <div className="font_title_secundario font_title_purple mt-5">
            {texto1}
          </div>

          <div className="font_title mt-2 ">
            <p>{texto2}</p>

            {texto2a != undefined && texto2a != "" && <> {texto2a} </>}
          </div>
        </div>
     
    </>
  );
}

function getFondo(fondo) {
  let fondo_por_defecto = "bannermain";

  if (fondo === "barco") {
    fondo_por_defecto = "bannermain-quiz";
  }

  return fondo_por_defecto;
}
