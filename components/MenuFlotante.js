//----------------------------------------------------------------------------------------------------------
//            Menu Flotante oculto
//----------------------------------------------------------------------------------------------------------
//TODO: poner transparente y de otro color
//TODO: agregar path de recorte 
//TODO: Arreglar los links
//Responsividad: ERROR



export default function MenuFlotante() {
  return (
<>




  <div className="offcanvas offcanvas-start w-25 panel-flotante" tabIndex="-1" id="offcanvas" data-bs-keyboard="false" data-bs-backdrop="false">
    <div className="offcanvas-header">
      <h6 className="offcanvas-title d-none d-sm-block" id="offcanvas">
              Menu
      </h6>
      <button type="button" className="btn-close font_title5" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div className="offcanvas-body px-0  ">
      <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start" id="menu">
        <li className="nav-item">
          <a href="#second_line" className="nav-link text-truncate">
            <i className="fs-5 bi-house"></i>
            <span className="ms-1 d-none d-sm-inline">CRASHKURSE</span>
          </a>
        </li>

        <li>
          <a href="#content02-final" className="nav-link text-truncate">
            <i className="fs-5 bi-table"></i>
            <span className="ms-1 d-none d-sm-inline">LEISTUNGEN</span>
          </a>
        </li>

        <li>
          <a href="#" className="nav-link text-truncate">
            <i className="fs-5 bi-table"></i>
            <span className="ms-1 d-none d-sm-inline">TEAM</span>
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-truncate">
            <i className="fs-5 bi-grid"></i>
            <span className="ms-1 d-none d-sm-inline">VLOG</span>
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-truncate">
            <i className="fs-5 bi-people"></i>
            <span className="ms-1 d-none d-sm-inline">BLOG</span>
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-truncate">
            <i className="fs-5 bi-people"></i>
            <span className="ms-1 d-none d-sm-inline">NEWS</span>
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-truncate">
            <i className="fs-5 bi-people"></i>
            <span className="ms-1 d-none d-sm-inline">JOBS</span>
          </a>
        </li>
      </ul>
    </div>
  </div>

</>
  );
}
