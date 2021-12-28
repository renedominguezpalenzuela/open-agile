import { servidor_url } from "../../config";
import Image from "next/image";
import Link from "next/link";

export default function MenuKrashkurse({ link_beschreibung }) {
  return (
    <>
      <div class="card ms-5 me-5 pt-4 mb-5 pb-5 ps-4 pe-4  shadow">
        <h4 class="card-title ms-3 mb-3 font-card-menu-crashkurse-titulo">
          Was Dich erwartet!
        </h4>

        <div id="container" className="ms-4 me-3">
          <table className="w-100 ">
            <tr className=" font-card-menu-crashkurse">
              <td>
                <a href={`${servidor_url}/${link_beschreibung}`}>
                  <div className="myanimacioncursos">BESCHREIBUNG</div>
                </a>
              </td>

              <td align="right"> > </td>
            </tr>
            <tr className="font-card-menu-crashkurse">
              <td>
                <div className="myanimacioncursos">VORTEILE</div>
              </td>
              <td align="right">></td>
            </tr>
            <tr className="font-card-menu-crashkurse">
              <td>
                <div className="myanimacioncursos">INHALTE</div>
              </td>
              <td align="right">></td>
            </tr>

            <tr className="font-card-menu-crashkurse">
              <td>
                <div className="myanimacioncursos">LEISTUNGEN</div>
              </td>
              <td align="right">></td>
            </tr>

            <tr className="font-card-menu-crashkurse">
              <td>
                <div className="myanimacioncursos">KOSTEN</div>
              </td>
              <td align="right">></td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}
