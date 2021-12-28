import { servidor_url } from "../../config";
import Image from "next/image";
import Link from "next/link";

export default function KurseButtons({

  titulo_botones,
  imagen,
  text_termine,
  link_weitere_infos,
  link_termine,
  link_pdf,
}) {
 
  return (
    <>
      <div className="row   ">
        <div className="col-6   ">
          <img
            className="img-fluid   "
            src={`${servidor_url}/img/${imagen}`}
            alt=""
          />
        </div>


        <div className="col-5">

          <div class="row   h-100 d-flex align-items-center justify-content-center">

            <div className="col-12 tabla-titulo-cursos d-flex align-items-center justify-content-center ">{titulo_botones}</div>
          
            <div className="col-12">
              <a
                href={`${servidor_url}/${link_weitere_infos}`}
                className=" d-flex align-items-center justify-content-center ">
                <button
                  type="button"
                  className="btn ps-4 pe-4 btn-cursos btn1-cursos font-btn-cursos rounded-pill  ">
                  WEITERE INFOS
                </button>
              </a>
            </div>

            <div className="col-12  d-flex align-items-center justify-content-center">
              <Link
                href={link_termine}
                className="  ">
                <button
                  type="button"
                  className="btn ps-4 pe-4 btn-cursos btn2-cursos font-btn-cursos rounded-pill  ">
                  TERMINE {text_termine}
                </button>
              </Link>
            </div>

          
            <div className="col-12  d-flex align-items-center justify-content-center">
              <Link
                href={link_pdf}
                className=""
                download>
                <a
                  target="_blank"
                  className="btn ps-2 pt-3 pe-2 btn-cursos btn3-cursos font-btn-cursos redondo-bordes ">
                  {" "}
                  PDF UNTERLAGEN DOWNLOAD
                </a>
           
              </Link>
            </div>
          </div>
        </div> 
      </div>
    </>
  );
}
