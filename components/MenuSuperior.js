export default function MenuSuperior() {
  return (
    <>
      {/* <!-- Menu Superior--> */}
      <div id="row03" className="row mt-3 d-none d-lg-block ">
        <nav className="navbar navbar-expand-lg navbar-light navigation">
          {/* <!--Elementos del menu--> */}
          <ul className="navbar-nav ">
            {/* <!--Drop Down menu--> */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                CRASHKURSE
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <div className="separador_menu">/</div>
            </li>

            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#second_line">
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
              <a className="nav-link" href="#">
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
