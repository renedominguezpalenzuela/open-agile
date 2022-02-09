//----------------------------------------------------------------------------------------------------------
//          Panel Flotante oculto
//----------------------------------------------------------------------------------------------------------
//TODO: poner transparente y de otro color
//TODO: agregar path de recorte
//TODO: Arreglar los links
//Responsividad: ERROR

import Head from "next/head";
import { useEffect, useRef } from "react";

export default function MenuFlotante() {


  const myMenuLateral = useRef();
  const boton = useRef();


  
  // const eventoBotonSubirFichero = (event) => {
  //   hiddenFileInput.current.click();
  // };


  const handleClick = () => {
 
      // myMenuLateral.current.classList.remove("show");
     
    //  document.getElementsByClassName("nav").backgroundColor="red"; 
    boton.current.click();

      // offcanvas-backdrop 
      console.log();  
  };


  return (
    <>
       <div ref={myMenuLateral} className="sidepanel-new offcanvas offcanvas-end  " tabIndex="-1" id="mySidepanel">
        <div className="row mt-3 mb-3 d-flex justify-content-end align-items-center">
          <div className="col-8  me-2 d-flex justify-content-end  ">
            <h5 id="offcanvasTopLabel" className=" font-title-side-menu pt-2">
              MENU
            </h5>
          </div>
          <div className="col-2 d-flex justify-content-end ms-2  ">         
            <div id="boton_cerrar_menu" className="me-3 font-title-side-menu boton_cerrar_menu_lateral" data-bs-dismiss="offcanvas" ref={boton}>
              X
            </div>
          </div>
        </div>

        <div className="row  " >
          <ul
            className="nav nav-pills flex-column m-auto mb-0 align-items-end"
            id="menu">
            <li className="nav-item" >
              <a href="/#course" className="nav-link text-truncate" id="crashkurse_link"  onClick={handleClick}>
                <span className="ms-1  font-items-side-menu " >CRASHKURSE</span>
              </a>
            </li>

            <li  >
              <a href="/#services" className="nav-link text-truncate" id="leinstungen_link"   onClick={handleClick} > 
                <span className="ms-1  font-items-side-menu" >LEISTUNGEN</span>
              </a>
            </li>

            <li>
              <a href="/wir" className="nav-link text-truncate">
                <span className="ms-1  font-items-side-menu">TEAM</span>
              </a>
            </li>

            <li>
              <a href="/jobs" className="nav-link text-truncate">
                <span className="ms-1  font-items-side-menu">JOBS</span>
              </a>
            </li>

            <li>
              <a href="/vlog" className="nav-link text-truncate">
                <span className="ms-1  font-items-side-menu">VLOG</span>
              </a>
            </li>

            <li>
              <a href="/blog" className="nav-link text-truncate">
                <span className="ms-1  font-items-side-menu">BLOG</span>
              </a>
            </li>

            <li>
              <a href="/shop" className="nav-link text-truncate">
                <span className="ms-1  font-items-side-menu">SHOP</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}


function HideSideMenu() {
  UIkit.offcanvas.hide([force = false])
  
  }