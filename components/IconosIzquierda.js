import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function IconosIzquierda() {
  return (
    <>
      <div className="col  d-none d-lg-block position-absolute top-50  ">
        <div className="row text-center mt-4 d-none d-lg-block">
          <div className="rotate font_facit_text2   ">Let's talk</div>
        </div>

        <div className="row text-start mt-4 d-none d-lg-block margen_iconos_izquierda">
          <div className="rotate font_facit_text2">_____</div>
        </div>
        <div className="row mt-4 d-none d-lg-block">
          <a href="mailto:myemail@mail.com">
            <FontAwesomeIcon
              icon="envelope"
              width="32"
              className="circulo iconos"
            />
          </a>
        </div>

        <div className="row mt-3 d-none d-lg-block">
          <a href="mailto:myemail@mail.com">
            {/* <i className="fa fa-phone   iconos circulo"></i> */}
            <FontAwesomeIcon
              icon="phone"
              width="32"
              className="circulo iconos"
            />
          </a>
        </div>
      </div>
    </>
  );
}
