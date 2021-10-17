export default function MenuSuperior() {
  return (
<>
      {/*     <!-- Menu Superior--> */}
  <div id="row03" className="row mt-3 d-none d-lg-block ">
    <nav className="navbar navbar-expand-lg navbar-light navigation">
     {/*             <!--Elementos del menu--> */}
      <ul className="navbar-nav ">
       {/*                 <!--Drop Down menu--> */}
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#second_line">
                CRASHKURSE
          </a>
        </li>
        <li className="nav-item">
          <div className="separador_menu">/</div>
        </li>

        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#content02-final">
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
          <a className="nav-link" href="#MyCarousel">
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
</>
  );
}
