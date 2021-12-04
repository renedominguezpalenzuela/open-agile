//----------------------------------------------------------------------------------------------------------
//            Area superior principal:
//----------------------------------------------------------------------------------------------------------

import Link from 'next/link';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Content01TextSinIcons from "../Content01TextSinIcons";
import MenuNavBar from "../MenuNavBar";

import { servidor_url } from "../../config";


export default function Content01andMenuVacio() {



  
  return (
<>

  <div id="row03" className="row  menu_superior mt-2 g-0  ">

    <div className="col ms-3  text-center   ">
      <a className="navbar-brand " href="/">
     
        <img className="   " src= {`${servidor_url}/img/logo/5.svg`} />
      </a>
    </div>


    <div className=" col mt-3 text-center   ">
      <div className="row g-0 d-none d-lg-block ">
        <MenuNavBar/>
      </div>

       
  
    </div>


    <div className="col mt-4 text-center   ">
        <a href="/quizstart">  
        <button type="button" className="btn mt-1 btn-outline-primary font_boton  ">Agile Check</button>
      </a>
    </div>

  </div>

</>
  );
}
