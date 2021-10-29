

//----------------------------------------------------------------------------------------------------------
//           Menu superior
//----------------------------------------------------------------------------------------------------------
//TODO: Crear  componentes para cada elemento


export default function MenuSuperior() {
  return (
<>
      {/*       <!-- Menu Superior--> */}




  <div id="row03" className="row p-3 ">
  <div className="col-10 d-none d-lg-block">

     <nav className="navbar navbar-expand-lg navbar-light navigation">

      <ul className="navbar-nav">

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

        <li className="nav-item">
          <a className="nav-link" href="#">
                JOBS
          </a>
        </li>
      </ul>
    </nav> 
    </div>


    <div className="col     d-flex flex-row-reverse ">
      {/* <img className="img-fluid  "  src="img/logo01.png" /> */}

     <div> <img className="img-fluid logo-img"  src="img/logo/5.svg" /></div>
      {/* <div>Texto</div> */}
   
    </div>

  </div>
</>
  );
}
