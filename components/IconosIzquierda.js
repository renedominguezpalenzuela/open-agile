import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function IconosIzquierda() {
  return (
<>


{/* position-absolute top-50 end-0 */}
  <div className="col  mystickyiconos      ">
 

    <div className="row text-center   ">
      <div  id="texto_iconos_izquierda" className="rotate letras_iconos_izquierda   ">Kontakt</div>
    </div>

    <div className="row   text-start mt-4  margen_iconos_izquierda">
      <div id="linea_iconos_izquierda" className="rotate ps-1 pe-1 pt-1 letras_iconos_izquierda">_____</div>
    </div>

{/* className="circulo iconos" */}
    <div className="row  mt-4 pt-2 text-center ">
      <a href="mailto:info@open-agile.de">
        <FontAwesomeIcon id="boton_contacto_correo" icon="envelope" width="25" color="white" className=" mylinkhoover2" />
      </a>
    </div>

    <div className="row  mt-3 text-center ">
      <a href="tel:+49 (0) 421 22347567">
 
        <FontAwesomeIcon id="boton_contacto_telefono" icon="phone" width="25" color="white" className=" mylinkhoover2" />
      </a>
    </div>
  </div>
</>
  );
}
