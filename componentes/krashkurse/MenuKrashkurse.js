import { servidor_url } from "../../config";
import Image from "next/image";
import Link from "next/link";

const ONLINEURL =
  "https://open-agile-academy.teachable.com/p/online-crashkurs-selbstorganisation-in-agilen-teams";

export default function MenuKrashkurse({
  online,
  link_beschreibung,
  link_vorteile,
  link_inhalte,
  link_leistungen,
  link_kosten,
  link_termine,
  link_pdf,
  link_boton,
}) {
  let link_boton_new = online !== null ? ONLINEURL : "#termine";
  if (online === null && link_boton != undefined && link_boton.length > 0) {
    link_boton_new = link_boton;
  }

  return (
    <>
      <div id="menukurs" className="d-none d-md-block p-4"></div>
      <div className="card ms-5 me-5 pt-4 mb-1 pb-4 ps-4 pe-4  shadow">
        <h4 className="card-title ms-3 mb-3 font-card-menu-crashkurse-titulo">
          Was Dich erwartet!
        </h4>

        <div id="container" className="ms-4 me-3">
          <table className="w-100">
            <tbody>
              <tr className=" font-card-menu-crashkurse">
                <td>
                  <a href={`${servidor_url}/${link_beschreibung}#abschnitt`}>
                    <div className="myanimacioncursos">BESCHREIBUNG</div>
                  </a>
                </td>

                <td align="right">{">"}</td>
              </tr>
              <tr className="font-card-menu-crashkurse">
                <td>
                  <a href={`${servidor_url}/${link_vorteile}#abschnitt`}>
                    <div className="myanimacioncursos">VORTEILE</div>
                  </a>
                </td>

                <td align="right">{">"}</td>
              </tr>
              <tr className="font-card-menu-crashkurse">
                <td>
                  <a href={`${servidor_url}/${link_inhalte}#abschnitt`}>
                    <div className="myanimacioncursos">INHALTE</div>
                  </a>
                </td>

                <td align="right">{">"}</td>
              </tr>

              <tr className="font-card-menu-crashkurse">
                <td>
                  <a href={`${servidor_url}/${link_kosten}#abschnitt`}>
                    <div className="myanimacioncursos">LEISTUNGEN & KOSTEN</div>
                  </a>
                </td>
                <td align="right">{">"}</td>
              </tr>

              {link_termine != undefined && link_termine != "" && (
                <tr className="font-card-menu-crashkurse">
                  <td>
                    <a href={`${link_termine}`}>
                      <div className="myanimacioncursos">TERMINE</div>
                    </a>
                  </td>
                  <td align="right">{">"}</td>
                </tr>
              )}

              <tr className="font-card-menu-crashkurse">
                <td>
                  {/* <Link href={link_pdf} className="" download> */}
                  {/* <a target="_blank" onClick={() => botonAbrirPDF(link_pdf)}> */}
                  <div
                    className="myanimacioncursos"
                    onClick={() => botonAbrirPDF(link_pdf)}>
                    PDFs
                  </div>
                  {/* </a> */}
                  {/* </Link> */}
                </td>
                <td align="right">{">"}</td>
              </tr>
            </tbody>
          </table>

          <Link href={link_boton_new}>
            <button
              type="button"
              className="btn  btn-cursos2 font-btn-card-shop rounded-pill mt-4 ">
              JETZT ANMELDEN
            </button>
          </Link>
        </div>
      </div>
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

const botonAbrirPDF = (link_pdf) => {
  //  event.preventDefault();

  for (let i = link_pdf.length - 1; i >= 0; i--) {
    // window.open(unPdf, "_blank");
    downloadEmployeeData(link_pdf[i].path, link_pdf[i].name);
    //  window.open(unPdf, '_parent', 'download');
  }
};
