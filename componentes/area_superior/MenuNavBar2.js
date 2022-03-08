import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { servidor_url } from "../../config";

export default function MenuNavBar2() {
  return (
    <>
      <div className="navbar-movil">
        <div className="navbar1    d-flex align-items-center justify-content-start" >
          <button  className="btn " role="button" id="boton_new_abrir_menu2" data-bs-toggle="offcanvas" data-bs-target="#mySidepanel" >
             <FontAwesomeIcon icon="bars"  className="botonTresBarras" width="32" />            
          </button> 
        </div>

        <div className="navbar2  d-flex align-items-center justify-content-end ">
          <a className=" " href="/">
            <img
              className="  "
              src={`https://js-agileweb-files.s3.us-east-2.amazonaws.com/img/logo/3.svg`}
              loading="lazy" 
            />
          </a>
        </div>
      </div>
    </>
  );
}
