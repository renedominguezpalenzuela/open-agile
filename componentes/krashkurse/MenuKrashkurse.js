import { servidor_url } from "../../config";
import Image from "next/image";

export default function MenuKrashkurse() {
  return (
    <>
      <div class="card ms-5 me-5 pt-4 mb-5 pb-5 ps-4 pe-4  shadow">
        <h4 class="card-title ms-3 mb-3 font-card-menu-crashkurse-titulo">Was Dich erwartet!</h4>

       {/* <div className="card-body">
        <table class="table ps-4 pe-5">
          
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
        </div> */}

        <div id="container" className="ms-4 me-3">
          <table  className="w-100 ">
            <tr className="font-card-menu-crashkurse">
              <td className="myanimacioncursos">BESCHREIBUNG</td>
             
              <td align="right"> > </td>
            </tr>
            <tr className="font-card-menu-crashkurse">
              <td className="myanimacioncursos" >VORTEILE</td>
              <td align="right">></td>
            </tr>
            <tr className="font-card-menu-crashkurse">
              <td className="myanimacioncursos">INHALTE</td>
              <td align="right">></td>
            </tr>

            <tr className="font-card-menu-crashkurse">
              <td className="myanimacioncursos">LEISTUNGEN</td>
              <td align="right">></td>
            </tr>

            <tr className="font-card-menu-crashkurse">
              <td className="myanimacioncursos">KOSTEN</td>
              <td align="right">></td>
            </tr>

          </table>
        </div>

       
      </div>
    </>
  );
}
