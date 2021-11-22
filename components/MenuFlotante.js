//----------------------------------------------------------------------------------------------------------
//          Panel Flotante oculto
//----------------------------------------------------------------------------------------------------------
//TODO: poner transparente y de otro color
//TODO: agregar path de recorte 
//TODO: Arreglar los links
//Responsividad: ERROR

import Head from 'next/head'



export default function MenuFlotante() {
  return (
<>

       <Head>
        <script async src="js/menu.js" />
      </Head> 
{/* panel-flotante */}






<div className="sidepanel" tabIndex="-1" id="mySidepanel"   >


  <div className="offcanvas-header">
    <h5 id="offcanvasTopLabel" className="font_title5">Menu</h5>
    <button type="button" id="boton_cerrar_menu" className="btn-close btn-close-white text-reset me-3" aria-label="Close"></button>
  </div>

   <div className="offcanvas-body ">
      <ul className="nav nav-pills flex-column m-auto mb-0 align-items-start" id="menu">
        <li className="nav-item">
            <a href="/#course" className="nav-link text-truncate">
              <span className="ms-1  font_title6">CRASHKURSE</span>
            </a>
        </li>

        <li>
            <a href="/#services" className="nav-link text-truncate">
              <span className="ms-1  font_title6">LEISTUNGEN</span>
            </a>
        </li>

        <li>
            <a href="#" className="nav-link text-truncate">
              <span className="ms-1  font_title6">TEAM</span>
            </a>
        </li>

        <li>
            <a href="#" className="nav-link text-truncate">
              <span className="ms-1  font_title6">VLOG</span>
            </a>
        </li>

        <li>
           <a href="#blog" className="nav-link text-truncate">
             <span className="ms-1  font_title6">BLOG</span>
           </a>
        </li>

        <li>
            <a href="#" className="nav-link text-truncate">
              <span className="ms-1  font_title6">NEWS</span>
            </a>
        </li>

        <li>
            <a href="#" className="nav-link text-truncate">
              <span className="ms-1  font_title6">JOBS</span>
            </a>
        </li>

        <li>
            <a href="#" className="nav-link text-truncate">
              <span className="ms-1  font_title6">JOBS</span>
            </a>
        </li>
      </ul>
    </div>

  </div>

</>
  );
}
