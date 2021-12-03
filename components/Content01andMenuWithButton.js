//----------------------------------------------------------------------------------------------------------
//            Area superior principal:
//----------------------------------------------------------------------------------------------------------
import Link from 'next/link';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Content01Text from "./Content01Text";
import MenuNavBar from "./MenuNavBar";


import { servidor_url } from "../config";



export default function Content01andMenuWithButton({texto1, texto2, texto2a}) {
  return (
<>

  <div id="rowtop" className="row  menu_superior mt-2 g-0  ">

    <div className="col ms-3  text-center   ">
      <a className="navbar-brand " href="/">
        <img className="   " src= {`${servidor_url}/img/logo/5.svg`} />
      </a>
    </div>


    <div className=" col mt-3 text-center   ">
      <div className="row g-0 d-none d-lg-block ">
        <MenuNavBar/>
      </div>

      <div className="row g-0  ms-4 mt-3 ">
     
        <Content01Text texto1={texto1} texto2={texto2} texto2a={texto2a}/>
      </div>
      <div className="row g-0  ms-4 mt-5 p-2 borde_main redondeado me-5 ">
      <div className="col m-4 ">
       <Link href='/configurator/3'> 
       {/* <a href='/configurator/3' > */}
           <button type="button" className="btn w-100 mt-1 btn-main-page font_boton_main redondeado-boton ">Ich bin eine Privatperson</button>
       {/* </a>            */}
       </Link>
      </div>

      <div className="col m-4 ">
      <Link href='/configurator/2'> 
       {/* <a href='/configurator/2' > */}
       <button type="button" className="btn w-100 mt-1 btn-main-page font_boton_main redondeado-boton">Ich vertrete ein Unternehmen</button>
       {/* </a> */}
      </Link>
      </div>
      
      </div>


    </div>


    <div className="col mt-4 text-center    ">
         <a href="/quizstart">   
         <button type="button" className="btn mt-1 btn-outline-primary font_boton  ">Agile Check</button>
         </a>
    </div>

  </div>

</>
  );
}
