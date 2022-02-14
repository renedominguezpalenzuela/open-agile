import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from 'react';

export default function MenuNavBar() {
  const [leich, setLeich] = useState({data: []})

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('/api/leistungen');
      const servicios = await data.json();
      setLeich(servicios);
    }
    fetchData();
  }, [])
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light navigation   ">
        <ul className="navbar-nav ">
          <li className="nav-item dropdown2  ">
            <a href="/crashkurse/main">
              <div className="nav-link">CRASHKURSE</div>
            </a>

            <ul className="dropdown-content text-start color-dropdown animate__animated animate__fadeInUp no-bullets">
              <li className="nav-item ">
                <a
                  className="dropdown-item color-font-dropdown"
                  href="/crashkurse/beschreibung/1">
                  CRASHKURS ZUM AGILE COACH
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="dropdown-item color-font-dropdown"
                  href="/crashkurse/beschreibung/2">
                  CRASHKURS ZUM AGILE FACILITATOR
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="dropdown-item color-font-dropdown"
                  href="/crashkurse/beschreibung/3">
                  CRASHKURS ZUM SCRUM MASTER
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="dropdown-item color-font-dropdown"
                  href="/crashkurse/beschreibung/4">
                  {" "}
                  CRASHKURS MITBESTIMMUNG IN DER AGILEN ARBEITSWELT
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="dropdown-item color-font-dropdown"
                  href="/crashkurse/beschreibung/5">
                  {" "}
                  ONLINE CRASHKURS SELBSTORGANISATION IN AGILEN TEAMS
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <div className="separador_menu">/</div>
          </li>

          <li className="nav-item dropdown2  ">
            <a href="/leistungen/main">
              <div className="nav-link">LEISTUNGEN</div>
            </a>

            <ul className="dropdown-content text-start color-dropdown animate__animated animate__fadeInUp no-bullets">
              {leich.data.map((item, index) =>
                <li className="nav-item">
                  <a
                    className="dropdown-item color-font-dropdown"
                    href={`/leistungen/${item.id}`}>
                    {item.attributes.title}{" "}
                  </a>
                </li>
              )}
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
                <a
                  className="dropdown-item color-font-dropdown"
                  href="/team/main">
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
