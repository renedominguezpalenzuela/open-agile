//----------------------------------------------------------------------------------------------------------
//            Area superior principal:
//----------------------------------------------------------------------------------------------------------

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Content01Text from "./Content01Text";
import MenuNavBar from "./MenuNavBar";



export default function Content01andMenu({texto1, texto2}) {
  return (
<>

  <div id="row03" className="row  menu_superior mt-2 g-0  ">

    <div className="col ms-3  text-center   ">
      <a className="navbar-brand " href="/">
        <img className="   " src="img/logo/5.svg" />
      </a>
    </div>


    <div className=" col mt-3 text-center   ">
      <div className="row g-0 d-none d-lg-block ">
        <MenuNavBar/>
      </div>

      <div className="row g-0  ms-4 mt-5 ">
        <Content01Text texto1={texto1} texto2={texto2}/>
      </div>
    </div>


    <div className="col mt-4 text-center   ">
      
        <button type="button" className="btn mt-1 btn-outline-primary font_boton  ">Configuration</button>
      
    </div>

  </div>

</>
  );
}
