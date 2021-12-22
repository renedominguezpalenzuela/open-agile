
import Link from "next/link";





export default function BotonesConfigurator({botones_configurador}){



  


  const clase_botones = (longitud_arreglo) => {
    let cadena_clases ='col   me-4 ms-4'  ;
   if(longitud_arreglo>2)
   {cadena_clases='col-6  me-4 ms-4  pb-2'};

   return cadena_clases;
   

  }

 


  const {botones} = botones_configurador;


 let longitud_arreglo=botones.length;

  return <>

     {/* Area de botones 2 botones en una row, 4 botones en una columna*/}
          <div className="row   d-flex justify-content-center align-items-center w-100">
      


{

   
    botones.map ((unBoton, index)=>{
                                        return (
                                                
                                                <div key={index} className={clase_botones(longitud_arreglo)}>

                                                 

                                                  {unBoton.tipo==="1"? 
                                                   
                                                  <Link   href={unBoton.link}>                            
                                                    <button type="button" className="btn w-100  btn-configurator-page font_boton_main redondeado-boton ">{unBoton.texto}</button>
                                                  </Link>   

                                                  :
                                                  <>
                                                     
                                                    <button type="button" className="btn w-100  btn-configurator-page font_boton_main redondeado-boton " data-bs-toggle="modal"    data-bs-target={`#contactForm${unBoton.id}`}> {unBoton.texto}</button>
                                                   
                                                  </>
                                                  } 
                                                </div>

                                               
                                                



                                                
                                        )
                                        }   
                                  )
}


            
           
         
       
        </div>







    </>
}