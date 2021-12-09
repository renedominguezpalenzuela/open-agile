// Footer

import { servidor_url } from "../config";
import Link from "next/link";

import FormularioContacto2 from "./formulariocontacto2";




export default function Footer() {
  return (
    <>
      <footer id="myfooter" className="mt-5 no-gutter">
        <div
          id="rowfoot01"
          className="row   color_background footer_path ps-2 mb-5 mt-5 pt-5">
          <FormularioContacto2 />
        </div>

        <div
          id="rowfoot05"
          className="row  color_background g-5 ps-5 pe-5 pb-5 ">
          <div className="col  d-flex  justify-content-center">
            <a href="\">
              <img
                className="img-fluid logo-img-footer2"
                src={`${servidor_url}/img/logo/5.svg`}
              />
            </a>

            {/* <div className="font_facit_text_very_small mt-1">
              Die Open Agile hilft Unternehmen dabei, ihre MitarbeiterInnen zu
              entwickeln und Kulturen zu transformieren. Mit über 40 Jahren
              Erfahrung und über 1000 ausgebildeten Trainerinnen und Trainern
              zählt sie zu den renommiertesten Akademien Deutschlands.
            </div> */}
          </div>

          <div className="col ">
            <div className="row ">
              <div className="font_footer_title mt-3 mb-3">Kontakt</div>
            </div>

            <div>
              <a
                className="font_facit_text_very_small mylinkhoover ms-3"
                href="tel:+49 (0) 421 22347567">
                +49 (0) 421 22347567
              </a>
            </div>
            <div>
              <a
                className="font_facit_text_very_small mylinkhoover ms-3"
                href="mailto:info@open-agile.de">
                info@open-agile.de
              </a>
            </div>
          </div>

          <div className="col">
            <div className="font_footer_title  mt-3">Leistungen</div>
            <div className="font_facit_text_very_small mt-3">
              <div>
                <a
                  className="color-font-dropdown mylinkhoover"
                  href="/leistungen/1">
                  Organizationsentwicklung
                </a>
              </div>
              <div>
                <a
                  className="color-font-dropdown mylinkhoover"
                  href="/leistungen/2">
                  Inhouse Training
                </a>
              </div>
              <div>
                <a
                  className="color-font-dropdown mylinkhoover"
                  href="/leistungen/3">
                  Coaching
                </a>
              </div>
              <div>
                <a
                  className="color-font-dropdown mylinkhoover"
                  href="/leistungen/4">
                  Mitbestimmung Im Agilen Kontext{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="font_footer_title mt-3">Crashkurse</div>
            <div className="font_facit_text_very_small mt-3">
              <div>
                <a
                  className="color-font-dropdown mylinkhoover"
                  href="/crashkurse/1">
                  Crashkurs zum Agile Coach{" "}
                </a>
              </div>
              <div>
                <a
                  className="color-font-dropdown mylinkhoover"
                  href="/crashkurse/2">
                  Crashkurs zum Agile Facilitator{" "}
                </a>
              </div>

              <div>
                <a
                  className="color-font-dropdown mylinkhoover"
                  href="/crashkurse/3">
                  Crashkurs zum Scrum Master{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="col">
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

                <Link href="/doc/agbs.pdf" download >
                  <a target="_blank">AGBs</a>
                </Link>
              </div>

              <div>
                {/* <a className="color-font-dropdown mylinkhoover" href="#">
                  Datenschutz
                </a> */}

                 <Link href="/docview02" >
                  <a target="_blank">Datenschutz</a>
                </Link>


              </div>

              <div>
                {/* <a className="color-font-dropdown mylinkhoover" href="#">
                  Impressum
                </a> */}

                  <Link href="/docview03"  >
                  <a target="_blank">Impressum</a>
                </Link>

              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
