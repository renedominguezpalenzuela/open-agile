//----------------------------------------------------------------------------------------------------------
//            Area superior principal:
//----------------------------------------------------------------------------------------------------------
import Link from 'next/link';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Content01Text from "./Content01Text";
import MenuNavBar from "./MenuNavBar";


import { servidor_url } from "../config";



export default function Content01andMenuConfigurator({botones}) {
  return (
<>

  <div id="rowtop" className="row  h-100 menu_superior mt-2 g-0  ">

    {/* icono izquierda arriba */}
    <div className="col ms-3  text-center   ">
      <a className="navbar-brand " href="/">
        <img className="   " src= {`${servidor_url}/img/logo/5.svg`} />
</a>
</div>


<div className=" col  h-75 mt-3 text-center    ">
          <div className="row  g-0 d-none d-lg-block">
            <MenuNavBar/>
          </div>

          

        {/* Area de botones 2 botones en una row, 4 botones en una columna*/}
          <div className="h-75  d-flex justify-content-center align-items-center w-100">
            <div className="row w-100 mt-5 align-items-bottom  borde_main redondeado d-flex justify-content-center align-items-center ">


              {botones.length>2?
                                botones.map (unBoton=>{
                                        return <>
                                                <div className="col-6   m-3   ">
                                                  <Link href={unBoton.link}>                            
                                                    <button type="button" className="btn w-100  btn-configurator-page font_boton_main redondeado-boton ">{unBoton.texto}</button>
                                                  </Link>                            
                                                </div>
                                              </>
                                        }   
                                  )
                                :botones.map (unBoton=>{
                                        return <>
                                                <div className="col  m-4   ">
                                                  <Link href={unBoton.link}>                            
                                                    <button type="button" className="btn w-100  btn-configurator-page font_boton_main redondeado-boton ">{unBoton.texto}</button>
                                                  </Link> 
                                                </div>
                                              </>
                                        }   
                                  )
              }

           
         
          </div>
        </div>


      </div>


      <div className="col mt-4 text-center    ">
        <a href="#">
          <button type="button" className="btn mt-1 btn-outline-primary font_boton  ">Agile Check</button>
        </a>
      </div>

    </div>

  </>
  );
}
