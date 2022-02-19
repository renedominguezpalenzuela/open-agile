// import styles from "../styles/Home.module.css";
//import Card03 from "./Card03";
import Card03 from "./Card03";
import Card01 from "./Card01";
import Card05UserBlog from "./Card05UserBlog";
import React from "react";

import ReactMarkdown from "react-markdown";
import Card01Blog from "./Card01Blog";

import CarruselBlogs from "./CarruselBlogs";
import CarruselBlogMovil from "./CarruselBlogMovil";


//----------------------------------------------------------------------------------------------------------
//            Area de Contenido:  Blog
//----------------------------------------------------------------------------------------------------------

export default function Content04({ lista_cards, main_page }) {
  return (

    <>
      <section>
        <div
          id="blog"
          className="row justify-content-center font_title_seccion_sombra mt-3   ms-md-4">
          BLOG
        </div>
        <div className="row justify-content-center font_card_texto mt-2 ms-md-4 ">
          NEW WORK, LEADERSHIP & MORE
        </div>

        <div className="row   g-0 pb-5 ps-md-4 ms-3 me-3 pe-md-4 ms-md-5 me-md-5 d-flex justify-content-center">
          {/* Vista movil  */}


      

         <div className="col g-0 d-sm-none  pt-2 pb-3"> 

             <CarruselBlogMovil lista_cards={lista_cards.data} /> 
          
           
          </div>  

          {/* Vista normal  */}
          <div className="col g-4  d-none d-sm-block  pt-5 ">
            
             <CarruselBlogs lista_cards={lista_cards.data} /> 
          </div>
        </div>
      </section>
    </>
  );
}
