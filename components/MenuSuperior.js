

//----------------------------------------------------------------------------------------------------------
//           Menu superior
//----------------------------------------------------------------------------------------------------------
//TODO: Crear  componentes para cada elemento


export default function MenuSuperior() {
  return (
<>
      {/*       <!-- Menu Superior--> */}




  <div id="row03" className="row ">
  <div className="col-10 d-none d-lg-block ps-4">

     <nav className="navbar navbar-expand-lg navbar-light navigation">


      {/* <a class="navbar-brand" href="#"> */}
      <img className="img-fluid logo-img navbar-brand "  src="img/logo/5.svg" />
      
      {/* </a> */}

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


    {/* <div className="col     d-flex flex-row-reverse ">
    

     <div> <img className="img-fluid logo-img"  src="img/logo/5.svg" /></div>
  
   
    </div> */}

  </div>
</>
  );
}
