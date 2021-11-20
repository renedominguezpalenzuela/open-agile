


//----------------------------------------------------------------------------------------------------------
//           Menu superior
//----------------------------------------------------------------------------------------------------------
//TODO: Crear  componentes para cada elemento
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default function MenuNavBar() {
  return (
<>


<nav className="navbar navbar-expand-lg navbar-light navigation   ">

        <ul className="navbar-nav ">


          <li className="nav-item dropdown2  ">
            <a className="nav-link">
              CRASHKURSE
            </a>

            <ul className="dropdown-content text-start color-dropdown animate__animated animate__fadeInUp no-bullets">


              <li className="nav-item ">
                <a className="dropdown-item color-font-dropdown" href="/crashkurse01">CRASHKURS ZUM AGILE COACH</a>
              </li>


              <li className="nav-item">
                <a className="dropdown-item color-font-dropdown" href="#">CRASHKURS ZUM AGILE FACILITATOR</a>
              </li>
              <li className="nav-item">
                <a className="dropdown-item color-font-dropdown" href="#">CRASHKURS ZUM SCRUM MASTER</a>
              </li>

            </ul>
          </li>


          <li className="nav-item">
            <div className="separador_menu">/</div>
          </li>

          {/*          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#services">
                LEISTUNGEN
            </a>
          </li> */}


          <li className="nav-item dropdown2  ">
            <a className="nav-link">
              LEISTUNGEN
            </a>

            <ul className="dropdown-content text-start color-dropdown animate__animated animate__fadeInUp no-bullets">


              <li className="nav-item">
                <a className="dropdown-item color-font-dropdown" href="#">COACHING </a>
              </li>


              <li className="nav-item">
                <a className="dropdown-item color-font-dropdown" href="/crashkurse01">MITBESTIMMUNG IM AGILEN KONTEXT</a>
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


      </>
  );
}