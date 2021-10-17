import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BotonMenuFlotante() {
  return (
<>
      {/*  <div className="sticky"> */}
    <div className="sticky-top">
      <button id="close_menu" className="btn mt-2   menu_barras" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" role="button">
        <FontAwesomeIcon icon="bars" color="white" width="32" />
      </button>
    </div>
  </>
  );
}
