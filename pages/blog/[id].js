import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";

import MenuFlotante from "../../components/MenuFlotante";
import Footer from "../../components/Footer";

import Content02Cursos from "../../components/Content02Cursos";
import Content03 from "../../components/Content03";
import Content04 from "../../components/Content04";
import Content05 from "../../components/Content05";
import Texto01 from "../../components/crashkurse/texto01";
import Tabla01 from "../../components/crashkurse/tabla01";
import Tabla02 from "../../components/crashkurse/tabla02";

import Card01Lista from "../../components/Card01Lista";
import MenuFlotanteBoton from "../../components/MenuFlotanteBoton";

import TextoBlog01 from "../../components/blogs/TextoBlog01";
import TextoBlog02 from "../../components/blogs/TextoBlog02";

// import MenuSuperior from "../components/MenuSuperior";
import AreaSuperior from "../../componentes/area_superior/AreaSuperior";

import { servidor_url } from "../../config";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPinterestP } from "@fortawesome/free-brands-svg-icons";

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";

//----------------------------------------------------------------------------------------------------------
//            Pagina inicial principal
//----------------------------------------------------------------------------------------------------------

export default function Home({ blog }) {
  const router = useRouter();
  const { id } = router.query;

  const {
    title,
    titulo1,
    titulo2,
    titulo2a,
    texto01,
    texto02,
    image,
    autor,
    fecha,
    content,
    link_anterior,
    link_anterior_nombre,
    link_anterior_nombre2,
    link_siguiente,
    link_siguiente_nombre,
    link_siguiente_nombre2,
  } = blog;

  return (
    <>
      <Head>
        <title>{titulo2 + " " + titulo2a}</title>
        <meta name="description" content={titulo2} />
        <link rel="icon" href="/favicon.ico" />
        <script async src={`${servidor_url}/js/chat.js`} />
        <script async src={`${servidor_url}/js/menu.js`} />
      </Head>

      <div id="principal" className="container-fluid g-0">
        <MenuFlotanteBoton />

        <AreaSuperior fondo="ajustable" area_gris_nueva={true}/>

        <div className="row   d-flex align-items-center justify-content-center">
          <div className="col-9">
            <div className="row  mt-5 mb-2 d-flex align-items-center justify-content-center font_title_blogs_articles">
              {title}
            </div>

            <div className="row   me-5 mt-5 mb-2 d-flex  justify-content-end font_autor_fecha">
              {autor != undefined && autor != "" && `von ${autor} ${fecha}`}
            </div>

            <div className="row   d-flex align-items-center justify-content-center">
              <img
                className="img-fluid "
                src={`${servidor_url}/img/${image}`}
              />
            </div>

            <div className="row  mt-1 mb-2  ">
              <div className="contenedor-iconos-blog ">
                <div className="item-1-iconos-blog">
                  <a href="https://www.facebook.com/OpenAgile21" className="">
                    <FontAwesomeIcon
                      icon={faFacebookF}
                      className="iconos-blogs"
                    />
                  </a>
                </div>

                <div className="item-2-iconos-blog texto-iconos-blogs ">
                  Facebook
                </div>

                <div className="item-3-iconos-blog">
                  <a href="https://www.facebook.com/OpenAgile21" className="">
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="iconos-blogs"
                    />
                  </a>
                </div>

                <div className="item-4-iconos-blog texto-iconos-blogs ">
                  Twitter
                </div>

                <div className="item-5-iconos-blog">
                  <a href="https://www.facebook.com/OpenAgile21" className="">
                    <FontAwesomeIcon
                      icon={faPinterestP}
                      className="iconos-blogs"
                    />
                  </a>
                </div>

                <div className="item-6-iconos-blog texto-iconos-blogs ">
                  Pinterest
                </div>

                <div className="item-7-iconos-blog">
                  <a href="https://www.facebook.com/OpenAgile21" className="">
                    <FontAwesomeIcon icon={faHeart} className="iconos-blogs" />
                  </a>
                </div>

                <div className="item-8-iconos-blog texto-iconos-blogs ">
                  Love This
                </div>

                <div className="item-9-iconos-blog">
                  <a href="https://www.facebook.com/OpenAgile21" className="">
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      className="iconos-blogs"
                    />
                  </a>
                </div>

                <div className="item-10-iconos-blog texto-iconos-blogs ">
                  WhatsApp
                </div>

                <div className="item-11-iconos-blog">
                  <a href="https://www.facebook.com/OpenAgile21" className="">
                    <FontAwesomeIcon
                      icon={faShareAlt}
                      className="iconos-blogs"
                    />
                  </a>
                </div>

                <div className="item-12-iconos-blog texto-iconos-blogs ">
                  Share
                </div>
              </div>
            </div>

            <div className="row  mt-4 mb-5  ">
              {content != undefined &&
                content.map((unContenido, index1) => (
                  <React.Fragment key={index1}>
                    {contenido(unContenido)}
                  </React.Fragment>
                ))}
            </div>
          </div>
        </div>

        <div className="row mt-5 mb-5  d-flex align-items-center justify-content-center">
          <div className="contenido-flechas-blog">
            <div className="item-1-flechas-blog texto-flechas-blogs ">
              <Link href={`${servidor_url}${link_anterior}`}>
                Vorheriger Artikel
              </Link>
            </div>

            <div className="item-2-flechas-blog texto-flechas-blogs ">
            <Link href={`${servidor_url}${link_siguiente}`}>
              Nächster Artikel
             </Link> 
            </div>

            <div className="item-3-flechas-blog ">
              <Link href={`${servidor_url}${link_anterior}`}>
                <img
                  className="img-fluid "
                  src={`${servidor_url}/img/blogs/flecha_azul_left.svg`}
                />
              </Link>
            </div>

            <div className="item-5-flechas-blog texto-flechas-blogs2">
              <Link href={`${servidor_url}${link_anterior}`}>
                {link_anterior_nombre}
              </Link>
            </div>

            <div className="item-6-flechas-blog texto-flechas-blogs2 ">
              <Link href={`${servidor_url}${link_anterior}`}>
                {link_anterior_nombre2}
              </Link>
            </div>

            <div className="item-4-flechas-blog ">
              <Link href={`${servidor_url}${link_siguiente}`}>
                <img
                  className="img-fluid "
                  src={`${servidor_url}/img/blogs/flecha_azul_rigth.svg`}
                />
              </Link>
            </div>

            <div className="item-7-flechas-blog texto-flechas-blogs2 ">
            <Link href={`${servidor_url}${link_siguiente}`}>
              {link_siguiente_nombre}
              </Link>
            </div>

            <div className="item-8-flechas-blog texto-flechas-blogs2 ">
            <Link href={`${servidor_url}${link_siguiente}`}>
              {link_siguiente_nombre2}
              </Link>
            </div>
          </div>
        </div>

        {/*Footer  */}
        <Footer />
      </div>

      {/*Menu Lateral oculto  */}
      <MenuFlotante />
    </>
  );
}

const contenido = (contenido) => {
  if (contenido.tipo === "parrafo") {
    return (
      <>
        {contenido.text.map((unTexto, index2) => (
          <React.Fragment key={index2}>
            {(index2===0) 
                ?<div className="letra-parrafo-blog primera-parrafo-blog">{unTexto}</div>
                :<div className="letra-parrafo-blog">{unTexto}</div>
            }

            
          </React.Fragment>
        ))}
      </>
    );
  }

  if (contenido.tipo === "puntos") {
    return (
      <>
        <div className="row mt-3">
          {contenido.titulo != undefined && contenido.titulo != "" && (
            <div className="letra-titulo-puntos-blog">{contenido.titulo}</div>
          )}

          <ul>
            {contenido.text.map((unTexto, index2) => (
              <React.Fragment key={index2}>
                <li className="letra-parrafo-blog mybullets3">{unTexto}</li>
              </React.Fragment>
            ))}
          </ul>
        </div>
      </>
    );
  }

  if (contenido.tipo === "numeros") {
    return (
      <>
        <div className="row mt-3">
          {contenido.titulo != undefined && contenido.titulo != "" && (
            <div className="letra-titulo-puntos-blog">{contenido.titulo}</div>
          )}

          <ol>
            {contenido.text.map((unTexto, index2) => (
              <React.Fragment key={index2}>
                <li className="letra-parrafo-blog mybullets3">{unTexto}</li>
              </React.Fragment>
            ))}
          </ol>
        </div>
      </>
    );
  }

  if (contenido.tipo === "numero_corchetes") {
    return (
      <>
        <div className="row mt-3">
          {contenido.titulo != undefined && contenido.titulo != "" && (
            <div className="letra-titulo-puntos-blog">{contenido.titulo}</div>
          )}

          <ul>
            {contenido.text.map((unTexto, index2) => (
              <React.Fragment key={index2}>
                <li className="letra-parrafo-blog ">{unTexto}</li>
              </React.Fragment>
            ))}
          </ul>
        </div>
      </>
    );
  }

  return <></>;
};

export const getServerSideProps = async (context) => {
  const { id } = context.query;
  const url = `${servidor_url}/api/blog/${encodeURIComponent(id)}`;
  const res = await fetch(url);

  const blog = await res.json();

  return {
    props: {
      blog,
    },
  };
};
