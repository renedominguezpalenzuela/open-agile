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
            <div id="blog" className="row justify-content-center font_title_seccion mt-5 ms-4">UNSER BLOG</div>
            <div className="row justify-content-center font_card_texto mt-2 ms-4 mb-5">NEW WORK, LEADERSHIP & MORE</div>

          <div className="row  g-4 pb-5  d-flex justify-content-center  "> 
          


            {lista_cards.map (unCard=> (     
              <React.Fragment  key={unCard.id}>
                          {/* Vista movil  */}
                        <div className="col-4 d-xl-none">                      
                                  
                                    
                                              <Card01 id={unCard.id} imagen={unCard.image} titulo={unCard.title} texto={unCard.titulo2} link={unCard.link}/>
                                      
                        </div>  
                        {/* Vista normal  */}
                        <div  className="col-4   d-none d-xl-block  ">    
                         
                          <Card05UserBlog id={unCard.id}  imagen={unCard.image} titulo={unCard.title} titulo2={unCard.titulo2} link={unCard.link}/>     
                        </div> 
              </React.Fragment>  
            )
                
            )}   
          


          </div>
          
        </section>

        </>
  );
}



