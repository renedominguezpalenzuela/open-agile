export default function MenuNavBar({servicios_lista, cursos_lista}) {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light navigation   ">
        <ul className="navbar-nav ">
          <li className="nav-item dropdown2  ">
            <a href="/crashkurse/">
              <div className="nav-link">CRASHKURSE</div>
            </a>

            <ul className="dropdown-content text-start color-dropdown animate__animated animate__fadeInUp no-bullets">
              {cursos_lista.data.map((item, key) => (
                <li key={key} className="nav-item ">
                  <a
                    className="dropdown-item color-font-dropdown"
                    href={`/crashkurse/${item.attributes.slug}/beschreibung/`}>
                    {item.attributes.page_title.toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
          </li>

          <li className="nav-item">
            <div className="separador_menu">/</div>
          </li>

          <li className="nav-item dropdown2  ">
            <a href="/leistungen">
              <div className="nav-link">LEISTUNGEN</div>
            </a>

            <ul className="dropdown-content text-start color-dropdown animate__animated animate__fadeInUp no-bullets">
              {servicios_lista.data.map((item, key) => (
                <li key={key} className="nav-item">
                  <a
                    className="dropdown-item color-font-dropdown"
                    href={`/${item.attributes.slug}`}>
                    {item.attributes.title.toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
          </li>

          <li className="nav-item">
            <div className="separador_menu">/</div>
          </li>
          <li className="nav-item dropdown2  ">
            <a href="/wir">
              <div className="nav-link">TEAM</div>
            </a>

            <ul className="dropdown-content text-start color-dropdown animate__animated animate__fadeInUp no-bullets">
              <li className="nav-item ">
                <a className="dropdown-item color-font-dropdown" href="/team">
                  UNSERE WERTE
                </a>
              </li>

              <li className="nav-item ">
                <a className="dropdown-item color-font-dropdown" href="/wir">
                  WIR
                </a>
              </li>

              <li className="nav-item">
                <a className="dropdown-item color-font-dropdown" href="/jobs">
                  JOBS
                </a>
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
            <a className="nav-link" href="/blog">
              BLOG
            </a>
          </li>

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
