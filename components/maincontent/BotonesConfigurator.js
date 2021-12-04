
import Link from "next/link";

export default function BotonesConfigurator({botones_configurador}){

 


  const {botones} = botones_configurador;


  return <>

     {/* Area de botones 2 botones en una row, 4 botones en una columna*/}
          <div className="row h-75 mt-5 d-flex justify-content-center align-items-top w-100">
            {/* <div className="row w-100  border d-flex justify-content-center align-items-center "> */}


              {botones.length>2?
                                botones.map ((unBoton, index)=>{
                                        return <>
                                                <div key={index} className="col-6  me-4 ms-4  pb-2 ">
                                                
                                                  <Link href={unBoton.link}>                            
                                                    <button type="button" className="btn w-100  btn-configurator-page font_boton_main redondeado-boton ">{unBoton.texto}</button>
                                                  </Link>                            
                                                </div>
                                              </>
                                        }   
                                  )
                                :botones.map ((unBoton, index)=>{
                                        return <>
                                                <div key={index+100} className="col   me-4 ms-4   ">
                                                  <Link href={unBoton.link}>                            
                                                    <button type="button" className="btn w-100  btn-configurator-page font_boton_main redondeado-boton ">{unBoton.texto}</button>
                                                  </Link> 
                                                </div>
                                              </>
                                        }   
                                  )
              }

           
         
          {/* </div> */}
        </div>
    </>
}