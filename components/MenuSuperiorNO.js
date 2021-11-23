//----------------------------------------------------------------------------------------------------------
//           Menu superior
//----------------------------------------------------------------------------------------------------------
//TODO: Crear  componentes para cada elemento
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default function MenuSuperior() {
  return (
<>
  {/*                             <!-- Menu Superior--> */}

  <div id="row03" className="row  menu_superior d-flex align-items-center justify-content-center">

    <div className="col  text-center  ">
      <a className="navbar-brand " href="/">
        <img className="img-fluid logo-img   " src="img/logo/5.svg" />
      </a>
    </div>


    <div className="col d-none d-lg-block   ">

      <nav className="navbar navbar-expand-lg navbar-light navigation  ">

        <ul className="navbar-nav ">


          <li className="nav-item dropdown2  ">
            <a className="nav-link">
              CRASHKURSEd
            </a>

            <ul className="dropdown-content color-dropdown animate__animated animate__fadeInUp no-bullets">


              <li className="nav-item">
                <a className="dropdown-item color-font-dropdown" href="/crashkurse01">CRASHKURS ZUM AGILE COACH</a>
              </li>


              <li className="nav-item">
                <a className="dropdown-item color-font-dropdown" href="/crashkurse02">CRASHKURS ZUM AGILE FACILITATOR</a>
              </li>
              <li className="nav-item">
                <a className="dropdown-item color-font-dropdown" href="/crashkurse03">CRASHKURS ZUM SCRUM MASTER</a>
              </li>

            </ul>
          </li>

         
          <li className="nav-item">
            <div className="separador_menu">/</div>
          </li>

       


            <li className="nav-item dropdown2  ">
            <a className="nav-link">
              LEISTUNGEN
            </a>

            <ul className="dropdown-content color-dropdown animate__animated animate__fadeInUp  no-bullets">


              <li className="nav-item">
                <a className="dropdown-item color-font-dropdown" href="/leistungen01">COACHING </a>
              </li>


              <li className="nav-item">
                <a className="dropdown-item color-font-dropdown" href="/leistungen02">MITBESTIMMUNG IM AGILEN KONTEXT</a>
              </li>
              <li className="nav-item">
                <a className="dropdown-item color-font-dropdown" href="#">ORGANISATIONSENTWICKLUNG</a>
              </li>

               <li className="nav-item">
                <a className="dropdown-item color-font-dropdown" href="#">INHOUSE TRAINING</a>
              </li>

            </ul>
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

    <div className="col  text-center   ">
      <button type="button" className="btn  btn-outline-primary ">Configuration</button>
    </div>


  </div>
</>
  );
}
