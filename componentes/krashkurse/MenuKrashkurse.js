import { servidor_url } from "../../config";
import Image from "next/image";
import Link from "next/link";

export default function MenuKrashkurse({
  link_beschreibung,
  link_vorteile,
  link_inhalte,
  link_leistungen,
  link_kosten,
  link_termine,
  link_pdf,
  link_boton,
}) {
  let link_boton_new = "#dates_section";
  if (link_boton != undefined && link_boton.length > 0) {
    link_boton_new = link_boton;
  }

  return (
    <>
      <div id="menukurs" className=" p-4"></div>
      <div className="card ms-5 me-5 pt-4 mb-1 pb-4 ps-4 pe-4  shadow">
        <h4 className="card-title ms-3 mb-3 font-card-menu-crashkurse-titulo">
          Was Dich erwartet!
        </h4>

        <div id="container" className="ms-4 me-3">
          <table className="w-100">
            <tbody>
              <tr className=" font-card-menu-crashkurse">
                <td>
                  <Link href={`${servidor_url}/${link_beschreibung}#menukurs`}>
                    <div className="myanimacioncursos">BESCHREIBUNG</div>
                  </Link>
                </td>

                <td align="right"> > </td>
              </tr>
              <tr className="font-card-menu-crashkurse">
                <td>
                  <Link href={`${servidor_url}/${link_vorteile}#menukurs`}>
                    <div className="myanimacioncursos">VORTEILE</div>
                  </Link>
                </td>

                <td align="right">></td>
              </tr>
              <tr className="font-card-menu-crashkurse">
                <td>
                  <Link href={`${servidor_url}/${link_inhalte}#menukurs`}>
                    <div className="myanimacioncursos">INHALTE</div>
                  </Link>
                </td>

                <td align="right">></td>
              </tr>

              {/* <tr className="font-card-menu-crashkurse">
                <td>
                  <Link href={`${servidor_url}/${link_leistungen}#menukurs`}>
                    <div className="myanimacioncursos">LEISTUNGEN</div>
                  </Link>
                </td>
                <td align="right">></td>
              </tr> */}

              <tr className="font-card-menu-crashkurse">
                <td>
                  <Link href={`${servidor_url}/${link_kosten}#menukurs`}>
                    <div className="myanimacioncursos">LEISTUNGEN & KOSTEN</div>
                  </Link>
                </td>
                <td align="right">></td>
              </tr>

              {link_termine != undefined && link_termine != "" && (
                <tr className="font-card-menu-crashkurse">
                  <td>
                    <Link href={`${link_termine}`}>
                      <div className="myanimacioncursos">TERMINE</div>
                    </Link>
                  </td>
                  <td align="right">></td>
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
                <td align="right">></td>
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

function downloadFile(filePath){
    var link=document.createElement('a');
    link.href = filePath;
    link.download = filePath.substr(filePath.lastIndexOf('/') + 1);
    link.click();
}

const botonAbrirPDF = (link_pdf) => {
  //  event.preventDefault();

  for (let unPdf of link_pdf) {
    // window.open(unPdf, "_blank");
     downloadFile(unPdf);
    //  window.open(unPdf, '_parent', 'download');
  }
};
