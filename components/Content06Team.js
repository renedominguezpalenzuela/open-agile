// import styles from "../styles/Home.module.css";
//import Card03 from "./Card03";
import Card03 from "./Card03";
import Card01 from "./Card01";
import Card06Team from "./Card06Team";
import React from "react";




//----------------------------------------------------------------------------------------------------------
//            Area de Contenido:  Blog
//----------------------------------------------------------------------------------------------------------



export default function Content06Team ({lista_cards} ) {

 

 
  return (
        <>


          <section>
           

          <div className="row  g-5 pb-5 pt-5 mt-5 d-flex justify-content-center  "> 
          


            {lista_cards.map (unCard=> (     
              <React.Fragment  key={unCard.id}>
                          {/* Vista movil  */}
                        <div className="col-4 d-xl-none">                                                         
                                    
                                              <Card01 id={unCard.id} imagen={unCard.image} titulo={unCard.title} texto={unCard.title2} link={unCard.link} texto_boton={unCard.texto_boton} correo={unCard.correo} telefono={unCard.phone} telefono_link={unCard.phone_link}/>
                                      
                        </div>                           {/* Vista normal  */}
                        <div  className="col-4   d-none d-xl-block  m-4 ">     

                        
                         
                          <Card06Team id={unCard.id}  imagen={unCard.image} titulo={unCard.title} titulo2={unCard.title2} link={unCard.link}  texto_boton={unCard.texto_boton} correo={unCard.correo} telefono={unCard.phone} telefono_link={unCard.phone_link}/>     
                        </div> 
              </React.Fragment>  
            )
                
            )}   
          


          </div>
          
        </section>

        </>
  );
}



