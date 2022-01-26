// import styles from "../styles/Home.module.css";

//----------------------------------------------------------------------------------------------------------
//            Area de Contenido: Imagen de Empresas
//----------------------------------------------------------------------------------------------------------

export default function Content03() {
  return (
    <>
      {/* font_title_seccion */}
      <div id="empresas" className="observer color_fondo div_content03b pt-5">
        <div className="row justify-content-center font_title_seccion    pt-5 ">
          Diese und viele weitere Unternehmen
        </div>

        <div className="row justify-content-center font_card_texto mt-2 ">
          VERTRAUEN OPEN AGILE
        </div>

        <div className="row mt-5 mb-md-5 pb-md-5 d-flex justify-content-center align-items-center">
          <div className="col-4 col-sm-2 col-lg m-3">
            <a
              href="https://www.verbraucher-dienst.de/index.php/impressum"
              aria-pressed="true">
              <img
                className="img-fluid img-sponsors1 grayscale p-lg-3"
                src="/img/sponsors/logo-verbraucherdienst.png"
              />
            </a>
          </div>
          <div className="col-4 col-sm-2 col-lg m-3">
            <a href="https://www.sparkasse.de/" aria-pressed="true">
              <img
                className="img-fluid img-sponsors2 grayscale p-lg-3 "
                src="/img/sponsors/logo-sparkasse.png"
              />
            </a>
          </div>
          <div className="col-4 col-sm-2 col-lg m-3">
            <a href="https://www.nordlb.de/" aria-pressed="true">
              <img
                className="img-fluid img-sponsors3 grayscale p-lg-3 "
                src="/img/sponsors/logo-nordlb.png"
              />
            </a>
          </div>
          <div className="col-4 col-sm-2 col-lg m-3">
            <a
              href="https://www.s-markt-mehrwert.de/"
              aria-pressed="true"
              className="markt-mehrwert justify-content-start">
              <img
                className="img-sponsors4 grayscale p-lg-3 "
                src="/img/sponsors/logo-markt.png"
              />
            </a>
          </div>
        </div>

        <div className="row mt-md-5 mb-5 pb-5 d-flex align-items-end justify-content-center   ">
          <div className="col-3 m-3 ">
            <a
              href="https://www.sparkasse-bremen.de/de/home.html"
              aria-pressed="true">
              <img
                className="img-fluid img-sponsors5 grayscale"
                src="/img/sponsors/logo-bremen.png"
              />
            </a>
          </div>
          <div className="col-3 m-3">
            <a href="https://www.soprasteria.com/ " aria-pressed="true">
              <img
                className="img-fluid img-sponsors6 grayscale"
                src="/img/sponsors/logo-soprasteria.png"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
