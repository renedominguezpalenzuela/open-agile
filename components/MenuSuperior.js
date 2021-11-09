//----------------------------------------------------------------------------------------------------------
//           Menu superior
//----------------------------------------------------------------------------------------------------------
//TODO: Crear  componentes para cada elemento
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function MenuSuperior() {
  return (
<>
      {/*                 <!-- Menu Superior--> */}


  <div id="row03" className="row menu_superior">
    <div className="col-9 d-none d-lg-block ms-4">

      <nav className="navbar navbar-expand-lg navbar-light navigation">


      {/*        <a class="navbar-brand" href="#"> */}
          <img className="img-fluid logo-img navbar-brand " src="img/logo/5.svg" />
      
      {/* </a> */}

        <ul className="navbar-nav ms-3">

          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#course">
                CRASHKURSE
            </a>
          </li>

          <li className="nav-item">
            <div className="separador_menu">/</div>
          </li>

          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#services">
                LEISTUNGEN
            </a>
          </li>

          <li className="nav-item">
            <div className="separador_menu">/</div>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
                TEAM
            </a>
          </li>
          <li className="nav-item">
            <div className="separador_menu">/</div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
                VLOG
            </a>
          </li>
          <li className="nav-item">
            <div className="separador_menu">/</div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#blog">
                BLOG
            </a>
          </li>
          <li className="nav-item">
            <div className="separador_menu">/</div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
                NEWS
            </a>
          </li>
          <li className="nav-item">
            <div className="separador_menu">/</div>
          </li>

          <li className="nav-item me-3">
            <a className="nav-link" href="#">
                JOBS
            </a>
          </li>




        </ul>
      </nav>
    </div>


    <div className="col    d-none d-xl-block ">
      <div class="row   iconos_blancos ">
        <div className="col">
          <a href="mailto:myemail@mail.com">
            <FontAwesomeIcon icon="envelope" width="32" className="circulo iconos" />
          </a>
        </div>
        <div className="col">
          <a href="tel:03020123456">
            <FontAwesomeIcon icon="phone" width="32" className="circulo iconos" />
          </a>
        </div>
      </div>


    </div>






  </div>
</>
  );
}
