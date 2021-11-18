//----------------------------------------------------------------------------------------------------------
//           Menu superior
//----------------------------------------------------------------------------------------------------------
//TODO: Crear  componentes para cada elemento
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function MenuSuperior() {
  return (
<>
      {/*                   <!-- Menu Superior--> */}




  <div id="row03" className="row  menu_superior d-flex align-items-center justify-content-center">

    <div className="col  text-center">
      <a className="navbar-brand" href="/">
        <img className="img-fluid logo-img navbar-brand " src="img/logo/5.svg" />
      </a>
    </div>


    <div className="col d-none d-lg-block   ">

   

      <nav className="navbar navbar-expand-lg navbar-light navigation   ">




        <ul className="navbar-nav " >

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

    <div className="col  text-center align-self-center">
  

      {/* <button type="button" class="btn btn-outline-primary ">Configuration</button> */}


 <button type="button" className="btn  btn-outline-primary ">Configuration</button>
     

     
    </div>

{/* 
    <div className="col    d-none d-xl-block ">
      <div className="row   iconos_blancos ">
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


    </div> */}






  </div>
</>
  );
}
