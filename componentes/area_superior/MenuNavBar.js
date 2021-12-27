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
      <a href="/crashkurse/main">
        <a className="nav-link">
              CRASHKURSE
        </a>
      </a>

        <ul className="dropdown-content text-start color-dropdown animate__animated animate__fadeInUp no-bullets">


          <li className="nav-item ">
            <a className="dropdown-item color-font-dropdown" href="/crashkurse/beschreibung/1">CRASHKURS ZUM AGILE COACH</a>
          </li>


          <li className="nav-item">
            <a className="dropdown-item color-font-dropdown" href="/crashkurse/beschreibung/2">CRASHKURS ZUM AGILE FACILITATOR</a>
          </li>

          <li className="nav-item">
            <a className="dropdown-item color-font-dropdown" href="/crashkurse/beschreibung/3">CRASHKURS ZUM SCRUM MASTER</a>
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

        <ul className="dropdown-content text-start color-dropdown animate__animated animate__fadeInUp no-bullets">



          <li className="nav-item">
            <a className="dropdown-item color-font-dropdown" href="/leistungen/1">ORGANISATIONSENTWICKLUNG</a>
          </li>

          <li className="nav-item">
            <a className="dropdown-item color-font-dropdown" href="/leistungen/2">INHOUSE TRAINING</a>
          </li>


          <li className="nav-item">
            <a className="dropdown-item color-font-dropdown" href="/leistungen/3">COACHING </a>
          </li>

{/* 
          <li className="nav-item">
            <a className="dropdown-item color-font-dropdown" href="/leistungen/4">MITBESTIMMUNG IM AGILEN KONTEXT</a>
          </li> */}





        </ul>
      </li>

      <li className="nav-item">
        <div className="separador_menu">/</div>
      </li>
      <li className="nav-item dropdown2  ">
       <a href="/team/main">
        <a className="nav-link">
              TEAM
        </a>
        </a>

        <ul className="dropdown-content text-start color-dropdown animate__animated animate__fadeInUp no-bullets">


          <li className="nav-item ">
            <a className="dropdown-item color-font-dropdown" href="/wir">WIR</a>
          </li>


          <li className="nav-item">
            <a className="dropdown-item color-font-dropdown" href="/jobs">JOBS</a>
          </li>



        </ul>
      </li>


      <li className="nav-item">
        <div className="separador_menu">/</div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/vlog">
                VLOG
        </a>
      </li>
      <li className="nav-item">
        <div className="separador_menu">/</div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/#blog">
                BLOG
        </a>
      </li>
      {/* <li className="nav-item">
        <div className="separador_menu">/</div>
      </li> */}

      {/* <li className="nav-item">
        <a className="nav-link" href="/news">
                NEWS
        </a>
      </li> */}



      <li className="nav-item">
        <div className="separador_menu">/</div>
      </li>

      <li className="nav-item me-3">
        <a className="nav-link" href="/shop">
                SHOP
        </a>
      </li>

    </ul>
  </nav>


</>
  );
}