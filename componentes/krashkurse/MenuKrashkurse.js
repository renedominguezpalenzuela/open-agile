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
}) {
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

              <tr className="font-card-menu-crashkurse">
                <td>
                  <Link href={`${servidor_url}/${link_leistungen}#menukurs`}>
                    <div className="myanimacioncursos">LEISTUNGEN</div>
                  </Link>
                </td>
                <td align="right">></td>
              </tr>

              <tr className="font-card-menu-crashkurse">
                <td>
                  <Link href={`${servidor_url}/${link_kosten}#menukurs`}>
                    <div className="myanimacioncursos">KOSTEN</div>
                  </Link>
                </td>
                <td align="right">></td>
              </tr>

              <tr className="font-card-menu-crashkurse">
                <td>
                  <Link href={`${link_termine}`}>
                    <div className="myanimacioncursos">TERMINE</div>
                  </Link>
                </td>
                <td align="right">></td>
              </tr>

              <tr className="font-card-menu-crashkurse">
                <td>
                  <Link href={link_pdf} className="" download>
                    <a target="_blank">
                      <div className="myanimacioncursos">PDFs</div>
                    </a>
                  </Link>
                </td>
                <td align="right">></td>
              </tr>
            </tbody>
          </table>
          <Link href="#dates_section">
            {/* <div className="mt-4 font-card-menu-crashkurse-foot">
              JETZT ANMELDEN
            </div> */}

             <button
                    type="button"
                    className="btn  btn-cursos2 font-btn-card-shop rounded-pill mt-4 "  >
                     JETZT ANMELDEN
                  </button>
          </Link>
        </div>
      </div>
    </>
  );
}
