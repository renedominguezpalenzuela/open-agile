import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function IconosIzquierda() {
  return (
<>


{/* position-absolute top-50 end-0 */}
  <div className="col  mystickyiconos      ">
 

    <div className="row text-center   ">
      <div className="rotate font_facit_text2   ">Kontakt</div>
    </div>

    <div className="row   text-start mt-4  margen_iconos_izquierda">
      <div className="rotate ps-1 pe-1 font_facit_text2">_____</div>
    </div>

{/* className="circulo iconos" */}
    <div className="row  mt-4 pt-2 text-center ">
      <a href="mailto:info@open-agile.de">
        <FontAwesomeIcon icon="envelope" width="25" color="#e50067" className=" mylinkhoover2" />
      </a>
    </div>

    <div className="row  mt-3 text-center ">
      <a href="tel:+49 (0) 421 22347567">
 
        <FontAwesomeIcon icon="phone" width="25" color="#e50067" className=" mylinkhoover2" />
      </a>
    </div>
  </div>
</>
  );
}
