// Footer

import { servidor_url } from "../config";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faXing } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

import FormularioContacto2 from "./formulariocontacto2";
import Content01Iconos from "../componentes/area_superior/Content01Iconos";
import ModalFormCookie from "../components/ModalFormCookie";

export default function Footer() {
  return (
    <>
      <footer id="myfooter" className=" no-gutter color_background">
        {/* <div id="rowfoot01" className="row   color_background footer_path ps-2 mb-5 mt-5 pt-5"> */}
        <div id="rowfoot01" className="row  mb-2 mb-md-5">
          <FormularioContacto2 />
        </div>

        <div className="d-none d-md-block">
          <div id="rowfoot05" className="row   g-3 ps-5 me-3 ms-3 pe-5 pb-3 ">
            <div className="col-3   ">
              <div className="row g-0 ">
                <div className="col-md-3 d-flex  justify-content-start justify-content-md-center">
                  <a href="\">
                    <img
                      className="img-fluid logo-img-footer2"
                      src={`${servidor_url}/img/logo/5.svg`}
                    />
                  </a>
                </div>

                <div className="col-md-9  ">
                  <div className="row ">
                    <div className="font_footer_title mt-3 mb-3">Kontakt</div>
                  </div>

                  <div className="row font_facit_text_very_small-kontack ">
                    <a
                      className=" mylinkhoover "
                      href="tel:+49 (0) 421 22347567">
                      +49 (0) 421 22347567
                    </a>
                  </div>

                  <div className="row font_facit_text_very_small-kontack ">
                    <a
                      className="mylinkhoover "
                      href="mailto:kontakt@open-agile.de">
                      kontakt@open-agile.de
                    </a>
                  </div>

                  <div>
                    <div className="row font_facit_text_very_small-kontack  pt-2">
                      <div>Open Agile GmbH </div>
                      <div>Faulenstr. 67</div>
                      <div>D-28195 Bremen</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-3  ps-2 ps-lg-5">
              <div className="font_footer_title  mt-3">Leistungen</div>
              <div className="font_facit_text_very_small mt-3">
                <div>
                  <a
                    className="color-font-dropdown mylinkhoover"
                    href="/leistungen/1">
                    Organisationsentwicklung
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
              </div>
            </div>

            <div className="col-3 ps-5  ">
              <div className="font_footer_title mt-3">Crashkurse</div>
              <div className="font_facit_text_very_small mt-3">
                <div>
                  <a
                    className="color-font-dropdown mylinkhoover"
                    href="/crashkurse/beschreibung/1">
                    Crashkurs zum Agile Coach{" "}
                  </a>
                </div>
                <div>
                  <a
                    className="color-font-dropdown mylinkhoover"
                    href="/crashkurse/beschreibung/2">
                    Crashkurs zum Agile Facilitator{" "}
                  </a>
                </div>

                <div>
                  <a
                    className="color-font-dropdown mylinkhoover"
                    href="/crashkurse/beschreibung/3">
                    Crashkurs zum Scrum Master{" "}
                  </a>
                </div>

                <div>
                  <a
                    className="color-font-dropdown mylinkhoover"
                    href="/crashkurse/beschreibung/4">
                    Crashkurs Mitbestimmung in der agilen Arbeitswelt{" "}
                  </a>
                </div>

                <div>
                  <a
                    className="color-font-dropdown mylinkhoover"
                    href="/crashkurse/beschreibung/5">
                    Online Crashkurs Selbstorganisation in agilen Teams{" "}
                  </a>
                </div>
              </div>
            </div>

            <div className="col-3  ps-5 ">
              <div className="font_footer_title mt-3">Open Agile </div>
              <div className="font_facit_text_very_small mt-3">
                <div>
                  <a className="color-font-dropdown mylinkhoover" href="/wir">
                    Team
                  </a>
                </div>

                <div>
                  <a className="color-font-dropdown mylinkhoover" href="/jobs">
                    Jobs
                  </a>
                </div>

                <div>
                  {/* <a className="color-font-dropdown mylinkhoover" href="/docview01">
                  AGBs
                </a> */}

                  <Link href="/doc/agbs.pdf" download>
                    <a target="_blank" className="mylinkhoover">
                      AGBs
                    </a>
                  </Link>
                </div>

                <div>
                  <Link href="/datenschutzerklarung">
                    <a className="mylinkhoover">Datenschutz</a>
                  </Link>
                </div>
                <div>
                  <Link href="/impressum">
                    <a className="mylinkhoover">Impressum</a>
                  </Link>
                </div>
                <div>
                  <div className="mylinkhoover">Cookie Einstellungen</div>
                </div>
              </div>
            </div>

            <div className="row  mt-4 d-flex  linea_blanca_footer g-0"></div>

            <div className="row  mt-4 d-flex pb-3  g-0">
              <Content01Iconos footer={true} />
            </div>

            {/* <div className="row mt-5 d-flex  justify-content-center letra_chica g-0">
            {`test version: ${process.env.NEXT_PUBLIC_VER}`}
          </div> */}
          </div>
        </div>
        <div className="d-block d-md-none">
          <div id="rowfoot05" className="row g-3 ps-5 me-3 ms-3 pe-5 pb-3">
            <div className="col">
              <div className="row g-0 ">
                <div className="col-12 d-flex pb-2 g-0 justify-content-center">
                  <div className="row justify-content-center g-4">
                    <div className="col-6 p-2">
                      <a href="tel:+49 (0) 421 22347567">
                        <FontAwesomeIcon
                          icon={faPhoneSquare}
                          className="iconos-contact"
                        />
                      </a>
                    </div>
                    <div className="col-6 p-2">
                      <a href="mailto:kontakt@open-agile.de">
                        <FontAwesomeIcon
                          icon={faEnvelopeSquare}
                          className="iconos-contact"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="row d-flex  linea_blanca_footer-2  g-0 mb-2"></div>
              </div>
            </div>
            <div className="col-12 d-flex pb-3 g-0 justify-content-center">
              <div className="row justify-content-center g-4">
                <div className="col p-2">
                  <a href="https://www.linkedin.com/company/open-agile">
                    <FontAwesomeIcon
                      icon={faLinkedinIn}
                      className="iconos-contact"
                    />
                  </a>
                </div>
                <div className="col p-2">
                  <a href="https://www.youtube.com/channel/UC4JhXDcBKkgVaZILgnzhm0A">
                    <FontAwesomeIcon
                      icon={faYoutube}
                      className="iconos-contact"
                    />
                  </a>
                </div>
                <div className="col p-2">
                  <a href="https://www.instagram.com/open_agile/">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="iconos-contact"
                    />
                  </a>
                </div>
                <div className="col p-2">
                  <a href="https://www.xing.com/pages/open-agile">
                    <FontAwesomeIcon icon={faXing} className="iconos-contact" />
                  </a>
                </div>
                <div className="col p-2">
                  <a href="https://www.facebook.com/OpenAgile21">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="iconos-contact"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="row d-flex  linea_blanca_footer g-0"></div>
            <div className="font_facit_text_very_small mt-3 d-flex justify-content-center">
              <div>
                <Link href="/datenschutzerklarung">
                  <a className="mylinkhoover">Datenschutz</a>
                </Link>
              </div>
              <span className="mx-1"> | </span>
              <div>
                <Link href="/impressum">
                  <a className="mylinkhoover">Impressum</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
