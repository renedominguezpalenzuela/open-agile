export default function Content03({ mainlogos }) {
  return (
    <>
      <div id="empresas" className="color_fondo div_content03b pt-5 pb-3">
        <div className="row justify-content-center font_title_seccion    pt-5 ">
          Diese und viele weitere Unternehmen
        </div>

        <div className="row justify-content-center font_card_texto mt-2 ">
          VERTRAUEN OPEN AGILE
        </div>

        <div className="row mt-5 mb-5 pb-5 d-flex justify-content-center align-items-center      ">
          {mainlogos.data.map((unDato, index) => (
            <div key={index} className="col-2 m-3">
              <a href={unDato.attributes.website} aria-pressed="true">
                <img
                  className="img-fluid img-sponsors1 grayscale "
                  src={unDato.attributes.logo.data.attributes.url}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
