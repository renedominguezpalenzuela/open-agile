import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MenuFlotanteBoton({ color, back_color }) {
  return (
    <>
      {/*Boton de abrir meni*/}
      {/* <div id="panel_abrir_menu" className=" mysticky d-flex justify-content-end d-none d-lg-block ">
        <button id="boton_abrir_menu" className="btn mt-2 " role="button">
          <FontAwesomeIcon icon="bars" className="botonTresBarras" width="32" />
        </button>
      </div> */}

      <div id="panel_abrir_menu" className=" mysticky d-flex justify-content-end d-none d-lg-block "  data-bs-toggle="offcanvas" data-bs-target="#mySidepanel">
        <button id="boton_abrir_menu" className="btn mt-2 " role="button">
          <FontAwesomeIcon icon="bars" className="botonTresBarras" width="32" />
        </button>
      </div>

    </>
  );
}
