import dynamic from 'next/dynamic';

const Card03 = dynamic(() => import('./Card03'));
const Card01 = dynamic(() => import('./Card01'));
const Card05UserBlog = dynamic(() => import('./Card05UserBlog'));
const Card01Blog = dynamic(() => import('./Card01Blog'));
const CarruselBlogs = dynamic(() => import('./CarruselBlogs'));
const CarruselBlogMovil = dynamic(() => import('./CarruselBlogMovil'));

import React from "react";
import ReactMarkdown from "react-markdown";

export default function Content04({ lista_cards, main_page, alto, ancho }) {

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

          {ancho < 576 && ancho > alto ? (
            <div className="col g-0   pt-2 pb-3">
             <CarruselBlogs lista_cards={lista_cards.data} dispositivo_chico = {true} />
            </div>
          ) : (
            <div className="col g-0 d-sm-none  pt-2 pb-3">
              <CarruselBlogMovil lista_cards={lista_cards.data} />
            </div>
          )}

          {/* Vista normal  */}
          <div className="col g-4  d-none d-sm-block  pt-5 ">
            <CarruselBlogs lista_cards={lista_cards.data} />
          </div>
        </div>
      </section>
    </>
  );
}
