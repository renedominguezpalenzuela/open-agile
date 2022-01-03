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



{/* <div  className="sidepanel offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div className="offcanvas-header ">
    <h5 id="offcanvasRightLabel" className="ms-5 w-75 text-end ">Offcanvas rights</h5>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close">
    </button>
  </div>
  
  <div  id="mySidepanel"  className=" offcanvas-body">
    ...
  </div>
</div> */}



<div className="sidepanel " tabIndex="-1" id="mySidepanel"   >

  <div className="row  d-flex justify-content-end align-items-center">


  {/* <div className="ms-5   titulo_menu_flotante"> */}
    <div className="col-8   me-2 d-flex justify-content-end ">
     <h5 id="offcanvasTopLabel" className="font_menu_title pt-2">Menu</h5>   
    </div>
    <div className="col-2 ">
     <button type="button" id="boton_cerrar_menu" className="btn-close text-reset  me-3" aria-label="Close"></button>
    </div>  

    
  {/* </div> */}

  </div>

   <div className="row  ">
      <ul className="nav nav-pills flex-column m-auto mb-0 align-items-end" id="menu">
        <li className="nav-item">
            <a href="/#course" className="nav-link text-truncate">
              <span className="ms-1  font_title6">CRASHKURSEss</span>
            </a>
        </li>

        <li>
            <a href="/#services" className="nav-link text-truncate">
              <span className="ms-1  font_title6">LEISTUNGEN</span>
            </a>
        </li>

        <li>
            <a href="/team/main" className="nav-link text-truncate">
              <span className="ms-1  font_title6">TEAM</span>
            </a>
        </li>

        <li>
            <a href="/vlog" className="nav-link text-truncate">
              <span className="ms-1  font_title6">VLOG</span>
            </a>
        </li>

        <li>
           <a href="#blog" className="nav-link text-truncate">
             <span className="ms-1  font_title6">BLOG</span>
           </a>
        </li>

        

        <li>
            <a href="/jobs" className="nav-link text-truncate">
              <span className="ms-1  font_title6">JOBS</span>
            </a>
        </li>

    
      </ul>
    </div>

  </div> 

</>
  );
}
