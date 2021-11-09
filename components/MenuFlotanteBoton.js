import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MenuFlotanteBoton({color, back_color}) {
  return (
<>

{/* sticky-top */}
<div id="panel_abrir_menu" className=" mysticky d-flex justify-content-end  ">

   <button id="boton_abrir_menu" className="btn mt-2 "  role="button">
    <FontAwesomeIcon icon="bars" className="botonTresBarras" width="32" />
  </button>

</div> 



  </>


 
  );
}


