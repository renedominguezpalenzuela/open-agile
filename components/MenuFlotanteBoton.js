import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MenuFlotanteBoton({color, back_color}) {
  return (
<>


<span className="sticky-top">

  <button id="close_menu" className="btn mt-2 " data-bs-toggle="offcanvas" data-bs-target="#offcanvas" role="button">
    <FontAwesomeIcon icon="bars" color={color} width="32" />
  </button>
</span> 



  </>


 
  );
}


