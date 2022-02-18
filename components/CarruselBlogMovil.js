import Card05UserBlog from "./Card05UserBlog";
import Card01BlogMobile from "./Card01BlogMobile";
// import Card01 from "./Card01";
  
import { servidor_url } from "../config";
import React from "react";


export default function CarruselBlogMovil({ lista_cards }) {
  return (
    <>
      {/* TODO: Analizar casos en que el numero de blogs sea = 3  o menor que 3
       */}

      <div id="blog_carrusel_mobile" className="carousel slide " data-bs-ride="carousel"> 
        <div className="carousel-indicators carousel-indicators-blog   ">
          {lista_cards.map((unDato, index) => (
            <React.Fragment key={index}>
            <button  type="button" data-bs-target="#blog_carrusel_mobile"  data-bs-slide-to={index}  className={`${index === 0 ? "active" : ""}`}></button>  
            </React.Fragment>
          ))}
        </div>

        <div className="carousel-inner altoCarrousel3 pt-4 ">
          <div className=" row  h-100  ">
            {lista_cards.map((unCard, index) =>
             
                <div key={index} className={`${index === 0 ? "active" : ""} carousel-item `}>
                  
                    <div className="col  ">
                      
                      {/* <Card01 id={unCard.id} imagen={unCard.image} titulo={unCard.titulo1} texto={unCard.titulo2} link={unCard.link}/>  */}
                      <Card01BlogMobile data={unCard}  />
                    </div>
                    
                  
                </div>
            
            )}

            
          </div>
        </div>
      </div>
    </>
  );
}
