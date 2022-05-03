import Card05UserBlog from "./Card05UserBlog";
import { servidor_url } from "../config";
import React from "react";


export default function CarruselBlogs({ lista_cards,  dispositivo_chico  }) {
  return (
    <>
      {/* TODO: Analizar casos en que el numero de blogs sea = 3  o menor que 3
       */}

      <div id="blog_carrusel" className="carousel slide" data-bs-ride="carousel"> 
        <div className="carousel-inner  pt-3  ">
        
          <div className=" row  h-100 w-100 ">
            {lista_cards.map((unCard, index) =>
              index <= lista_cards.length - 3 ? (
                <div key={index} className={`${index === 0 ? "active" : ""} carousel-item `}>
                  <div className="row w-100 ">
                    <div className="col-4">
                      {/* <Card05UserBlog id={unCard.id} imagen={unCard.attributes.image} titulo={unCard.attributes.title} titulo2={unCard.attributes.subtitle} link={`${servidor_url}/blog/${unCard.id}`} /> */}
                      <Card05UserBlog data={unCard} dispositivo_chico = {dispositivo_chico}/>
                    </div>
                    <div className="col-4">
                      {/* <Card05UserBlog id={lista_cards[index+1].id} imagen={lista_cards[index+1].image} titulo={lista_cards[index+1].title} titulo2={lista_cards[index+1].titulo2} link={lista_cards[index+1].link} /> */}
                      <Card05UserBlog data={lista_cards[index + 1]} dispositivo_chico = {dispositivo_chico} />
                    </div>
                    <div className="col-4">
                      {/* <Card05UserBlog id={lista_cards[index+2].id} imagen={lista_cards[index+2].image} titulo={lista_cards[index+2].title} titulo2={lista_cards[index+2].titulo2} link={lista_cards[index+2].link} /> */}
                      <Card05UserBlog data={lista_cards[index + 2]} dispositivo_chico = {dispositivo_chico} />
                    </div>
                  </div>
                </div>
              ) : null
            )}

            <div key={lista_cards.length - 2} className="carousel-item">
              <div className="row w-100 ">
                <div className="col-4">
                  {/* <Card05UserBlog id={lista_cards[lista_cards.length-2].id} imagen={lista_cards[lista_cards.length-2].image} titulo={lista_cards[lista_cards.length-2].title} titulo2={lista_cards[lista_cards.length-2].titulo2} link={lista_cards[lista_cards.length-2].link} /> */}
                  <Card05UserBlog data={lista_cards[lista_cards.length - 2]} dispositivo_chico = {dispositivo_chico}/>
                </div>
                <div className="col-4">
                  {/* <Card05UserBlog id={lista_cards[lista_cards.length-2+1].id} imagen={lista_cards[lista_cards.length-2+1].image} titulo={lista_cards[lista_cards.length-2+1].title} titulo2={lista_cards[lista_cards.length-2+1].titulo2} link={lista_cards[lista_cards.length-2+1].link} /> */}
                  <Card05UserBlog
                    data={lista_cards[lista_cards.length - 2 + 1]}
                    dispositivo_chico = {dispositivo_chico}
                  />
                </div>
                <div className="col-4">
                  {/* <Card05UserBlog id={lista_cards[0].id} imagen={lista_cards[0].image} titulo={lista_cards[0].title} titulo2={lista_cards[0].titulo2} link={lista_cards[0].link} /> */}
                  <Card05UserBlog data={lista_cards[0]}  dispositivo_chico = {dispositivo_chico}/>
                </div>
              </div>
            </div>

            <div key={lista_cards.length - 1} className="carousel-item">
              <div className="row w-100 ">
                <div className="col-4">
                  {/* <Card05UserBlog id={lista_cards[lista_cards.length-1].id} imagen={lista_cards[lista_cards.length-1].image} titulo={lista_cards[lista_cards.length-1].title} titulo2={lista_cards[lista_cards.length-1].titulo2} link={lista_cards[lista_cards.length-1].link} /> */}
                  <Card05UserBlog data={lista_cards[lista_cards.length - 1]} dispositivo_chico = {dispositivo_chico} />
                </div>
                <div className="col-4">
                  {/* <Card05UserBlog id={lista_cards[0].id} imagen={lista_cards[0].image} titulo={lista_cards[0].title} titulo2={lista_cards[0].titulo2} link={lista_cards[0].link} /> */}
                  <Card05UserBlog data={lista_cards[0]} dispositivo_chico = {dispositivo_chico} />
                </div>
                <div className="col-4">
                  {/* <Card05UserBlog id={lista_cards[1].id} imagen={lista_cards[1].image} titulo={lista_cards[1].title} titulo2={lista_cards[1].titulo2} link={lista_cards[1].link} /> */}
                  <Card05UserBlog data={lista_cards[1]}  dispositivo_chico = {dispositivo_chico}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-indicators carousel-indicators-blog">
          {lista_cards.map((unDato, index) => (
            <React.Fragment key={index}>
            <button  type="button" data-bs-target="#blog_carrusel"  data-bs-slide-to={index}  className={`${index === 0 ? "active" : ""}`}></button>  
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
