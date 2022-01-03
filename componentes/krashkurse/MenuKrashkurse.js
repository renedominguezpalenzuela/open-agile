import { servidor_url } from "../../config";
import Image from "next/image";
import Link from "next/link";

export default function MenuKrashkurse({ link_beschreibung, link_vorteile, link_inhalte, link_leistungen, link_kosten }) {
  return (
    <>
      <div className="card ms-5 me-5 pt-4 mb-1 pb-4 ps-4 pe-4  shadow">
        <h4 className="card-title ms-3 mb-3 font-card-menu-crashkurse-titulo">
          Was Dich erwartet!
        </h4>

        <div id="container" className="ms-4 me-3">
          <table className="w-100">
           <tbody>
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
                   <a href={`${servidor_url}/${link_vorteile}`}>
                <div className="myanimacioncursos">VORTEILE</div>
               </a>
              </td>
               
              <td align="right">></td>
            </tr>
            <tr className="font-card-menu-crashkurse">
             
              <td>   
               <a href={`${servidor_url}/${link_inhalte}`}>                       
                <div className="myanimacioncursos">INHALTE</div>
                  </a>
              </td>
            
              <td align="right">></td>
              
            </tr>

            <tr className="font-card-menu-crashkurse">
              <td>
                 <a href={`${servidor_url}/${link_leistungen}`}>     
                <div className="myanimacioncursos">LEISTUNGEN</div>
                </a>
              </td>
              <td align="right">></td>
            </tr>

            <tr className="font-card-menu-crashkurse">
              <td>
               <a href={`${servidor_url}/${link_kosten}`}> 
                <div className="myanimacioncursos">KOSTEN</div>
                </a>
              </td>
              <td align="right">></td>
            </tr>
            </tbody>
            
            
          </table>
 <a href="#dates_section">
          <div className="mt-4 font-card-menu-crashkurse-foot">
             
              JETZT ANMELDEN
             
            </div>
             </a>
        </div>
      </div>
    </>
  );
}
