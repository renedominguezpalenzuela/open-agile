// import styles from "../styles/Home.module.css";
//import Card03 from "./Card03";
import Card03 from "./Card03";
import Card01 from "./Card01";
import Card05UserBlog from "./Card05UserBlog";
import React from "react";




//----------------------------------------------------------------------------------------------------------
//            Area de Contenido:  Blog
//----------------------------------------------------------------------------------------------------------



export default function Content04 ({lista_cards} ) {

 
  return (
        <>


          <section>
            <div id="blog" className="row justify-content-center font_title_seccion_sombra   mt-5 ms-4">BLOG</div>
            <div className="row justify-content-center font_card_texto mt-2 ms-4 mb-5">NEW WORK, LEADERSHIP & MORE</div>

            <div className="row  g-0 pb-5 ps-md-4 ms-3 me-3 pe-md-4 ms-md-5 me-md-5 d-flex justify-content-center">
          


            {lista_cards.map (unCard=> (     
              <React.Fragment  key={unCard.id}>
                          {/* Vista movil  */}
                        <div className="col-md-4 g-5 d-md-none">                      
                                  
                                    
                                              <Card01 id={unCard.id} imagen={unCard.image} titulo={unCard.title} texto={unCard.titulo2} link={"blog"}/>
                                      
                        </div>  
                        {/* Vista normal  */}
                        <div  className="col-md-4 g-4  d-none d-md-block  ">    
                         
                          <Card05UserBlog id={unCard.id}  imagen={unCard.image} titulo={unCard.title} titulo2={unCard.titulo2} link={`blog/${unCard.id}`}/>     
                        </div> 
              </React.Fragment>  
            )
                
            )}   
          


          </div>
          
        </section>

        </>
  );
}



