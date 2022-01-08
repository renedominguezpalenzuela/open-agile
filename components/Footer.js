// Footer

import { servidor_url } from "../config";
import Link from "next/link";

import FormularioContacto2 from "./formulariocontacto2";
import Content01Iconos from "../componentes/area_superior/Content01Iconos";


export default function Footer() {
 
  return (
    <>
      <footer id="myfooter" className=" no-gutter color_background">
        {/* <div id="rowfoot01" className="row   color_background footer_path ps-2 mb-5 mt-5 pt-5"> */}
         <div id="rowfoot01" className="row    mb-5  "> 
          <FormularioContacto2 />
        </div>

        <div id="rowfoot05" className="row   g-3 ps-5 me-3 ms-3 pe-5 pb-3 ">
          <div className="col-3   ">
            <div className="row g-0 ">

              <div className="col-md-3   d-flex  justify-content-center">
                <a href="\">
                  <img className="img-fluid logo-img-footer2" src={`${servidor_url}/img/logo/5.svg`}
                  />
                </a>
              </div>

              <div className="col-md-9  ">
                <div className="row ">
                  <div className="font_footer_title mt-3 mb-3">Kontakt</div>
                </div>

                <div className="row font_facit_text_very_small-kontack ">
                   <a className=" mylinkhoover " href="tel:+49 (0) 421 22347567"> 
                    +49 (0) 421 22347567
                   </a> 
                </div>


                <div className="row font_facit_text_very_small-kontack ">
                
                  <a className="mylinkhoover " href="mailto:info@open-agile.de">
                    info@open-agile.de
                  </a>
                

                </div>

                <div>
                  <div className="row font_facit_text_very_small-kontack  pt-2" >
                    <div>Open Agile GmbH </div>
                    <div>Faulenstr. 67</div>
                    <div>D-28195 Bremen</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="col-3  ps-5">
            <div className="font_footer_title  mt-3">Leistungen</div>
            <div className="font_facit_text_very_small mt-3">
              <div>
                <a className="color-font-dropdown mylinkhoover" href="/leistungen/1">
                  Organizationsentwicklung
                </a>
              </div>
              <div>
                <a className="color-font-dropdown mylinkhoover" href="/leistungen/2">
                  Inhouse Training
                </a>
              </div>
              <div>
                <a className="color-font-dropdown mylinkhoover"  href="/leistungen/3">
                  Coaching
                </a>
              </div>
              
            </div>
          </div>

          <div className="col-3 ps-5  ">
            <div className="font_footer_title mt-3">Crashkurse</div>
            <div className="font_facit_text_very_small mt-3">
              <div>
                <a  className="color-font-dropdown mylinkhoover"   href="/crashkurse/beschreibung/1">
                  Crashkurs zum Agile Coach{" "}
                </a>
              </div>
              <div>
                <a className="color-font-dropdown mylinkhoover"  href="/crashkurse/beschreibung/2">
                  Crashkurs zum Agile Facilitator{" "}
                </a>
              </div>

              <div>
                <a className="color-font-dropdown mylinkhoover" href="/crashkurse/beschreibung/3">
                  Crashkurs zum Scrum Master{" "}
                </a>
              </div>

              
              <div>
                <a className="color-font-dropdown mylinkhoover" href="/crashkurse/beschreibung/4">
                  Crashkurs mitbestimmung in der agilen arbeitswelt{" "}
                </a>
              </div>

              
              <div>
                <a className="color-font-dropdown mylinkhoover" href="/crashkurse/beschreibung/5">
                  Online crashkurs selbstorganisation in agilen teams{" "}
                </a>
              </div>


            </div>
          </div>

          <div className="col-3  ps-5 ">
            <div className="font_footer_title mt-3">Open Agile </div>
            <div className="font_facit_text_very_small mt-3">
              <div>
                <a className="color-font-dropdown mylinkhoover" href="/team">
                  Team
                </a>
              </div>

              <div>
                <a className="color-font-dropdown mylinkhoover" href="/job">
                  Jobs
                </a>
              </div>

              <div>
                {/* <a className="color-font-dropdown mylinkhoover" href="/docview01">
                  AGBs
                </a> */}

                <Link href="/doc/agbs.pdf" download>
                  <a target="_blank" className="mylinkhoover">AGBs</a>
                </Link>
              </div>

              <div>
                {/* <a className="color-font-dropdown mylinkhoover" href="#">
                  Datenschutz
                </a> */}

                <Link href="/docview02">
                  <a target="_blank" className="mylinkhoover">Datenschutz</a>
                </Link>
              </div>

              <div>
                {/* <a className="color-font-dropdown mylinkhoover" href="#">
                  Impressum
                </a> */}

                <Link href="/docview03">
                  <a target="_blank" className="mylinkhoover">Impressum</a>
                </Link>
              </div>
            </div>
          </div>



          <div className="row  mt-4 d-flex  linea_blanca_footer g-0">
    
          </div>

          <div className="row  mt-4 d-flex pb-3  g-0">
          <Content01Iconos footer={true}/>
    
          </div>

           


          {/* <div className="row mt-5 d-flex  justify-content-center letra_chica g-0">
            {`test version: ${process.env.NEXT_PUBLIC_VER}`}
          </div> */}
        </div>
      </footer>
    </>
  );
}
