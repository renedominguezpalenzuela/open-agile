let longitud_linea = 24;
import ModalFormJob from "./ModalFormJob";
import ReactMarkdown from "react-markdown";

export default function Card08Job({ data }) {
  const titulo = data.attributes.title;
  const url = "https://js-agileweb-backend.herokuapp.com";
  const pdf = data.attributes.pdf;

  const startsWithCapital = (word) => {
    return word.charCodeAt(0) >= 65 && word.charCodeAt(0) <= 90;
  };

  const formatTitle = (titulo) => {
    const aux = titulo.split(" ");
    let titulo1 = aux[0];
    let titulo2 = "";
    for (let i = 1; i < aux.length; i++) {
      if (startsWithCapital(aux[i])) {
        for (let j = i; j < aux.length; j++) {
          titulo2 += " " + aux[j];
        }
        break;
      } else {
        titulo1 += " " + aux[i];
      }
    }
    return { titulo1: titulo1, titulo2: titulo2 };
  };

  return (
    <>
      <div className="card myanimacion sombra_cards redondear-card pb-2">
        <div className="h-100 d-flex  align-items-center  ">
          <div className="row w-100 g-0 ">
            <div className="col-12 pt-1 ps-3 pe-3   ">
              {titulo != undefined && titulo != "" && (
                <>
                  <div className="font1-card-job-new pt-3">
                    {formatTitle(titulo).titulo1}
                  </div>
                  <div className="font1-card-job-new pb-3">
                    {formatTitle(titulo).titulo2}
                  </div>
                </>
              )}
              <ReactMarkdown className="markdown bullets-jobs">
                {data.attributes.description}
              </ReactMarkdown>
            </div>
            <div className="row mt-3 mb-2    g-0   d-flex justify-content-center">
              <div className="col-6 d-flex justify-content-center ">
                <a
                  onClick={() =>
                    downloadEmployeeData(
                      url + pdf.data.attributes.url,
                      pdf.data.attributes.name
                    )
                  }
                  className="btn  btn-card-job font-btn-card-shop rounded-pill">
                  PDF-DOWNLOAD
                </a>
              </div>
              <div className="col-6      d-flex justify-content-center ">
                <button
                  type="button"
                  className="btn  btn-card-job font-btn-card-shop rounded-pill  "
                  data-bs-toggle="modal"
                  data-bs-target={"#contactForm1"}>
                  JETZT BEWERBEN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalFormJob
        id={1}
        quartal={1}
        titulo={"BEWERBUNG"}
        frase="Jetzt Kontakt aufnehmen!"
        day={""}
        link={""}
        job_title={titulo}
      />
    </>
  );
}
const downloadEmployeeData = (path, name) => {
  fetch(path).then((response) => {
    response.blob().then((blob) => {
      let url = window.URL.createObjectURL(blob);
      let a = document.createElement("a");
      a.href = url;
      a.download = name;
      a.click();
    });
  });
};

function procesarTextoLargo(texto) {
  return <> {texto}</>;
  let texto_devolver = "";
  let separador = " ";
  if (texto.substring(longitud_linea, longitud_linea + 1) === " ") {
    separador = "-";
  }
  //TODO: si coincide el guion con un espaciom no poner
  if (texto.length > longitud_linea) {
    return (
      <>
        <p>
          {texto.substring(0, longitud_linea)}
          {separador}
        </p>
        {texto.substring(longitud_linea)}
      </>
    );
  } else {
    return <> {texto}</>;
  }
}
