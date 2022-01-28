import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import * as React from "react";
import Link from "next/link";
import { useEffect } from "react";
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

import ModalFormCookie from "../../components/ModalFormCookie";

// import MenuSuperior from "../components/MenuSuperior";
import AreaSuperior from "../../componentes/area_superior/AreaSuperior";

import { servidor_url } from "../../config";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";

import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";

import Tooltip from "@mui/material/Tooltip";
import ClickAwayListener from "@mui/material/ClickAwayListener";

//----------------------------------------------------------------------------------------------------------
//            Pagina inicial principal
//----------------------------------------------------------------------------------------------------------

export default function Home({ blog }) {
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    if (open) {
      setOpen(false);
    }
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const router = useRouter();
  const { id } = router.query;

  const copyURLtoClipboard = (url) => {
    setOpen(true);

    navigator.clipboard.writeText(url);
  };

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

  useEffect(() => {
    const elemento = document.querySelector(".titulo");
    if (title.length > 18) {
      elemento.classList.remove("font_title_blogs_articles");
      elemento.classList.add("font_title_blogs_articles-2");
    } else {
      elemento.classList.remove("font_title_blogs_articles-2");
      elemento.classList.add("font_title_blogs_articles");
    }
  }, []);
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
        <ModalFormCookie id={1} tiempo={10} />

        <MenuFlotanteBoton />

        <AreaSuperior texto1="Blog" fondo="ajustable" area_gris_nueva={true} />

        <div className="row   d-flex align-items-center justify-content-center">
          <div className="col-10">
            <div className="row  mt-5 mb-2 d-flex align-items-center justify-content-center titulo font_title_blogs_articles">
              {title}
            </div>

            {/* <div className="row   me-5 mt-5 mb-2 d-flex  justify-content-end font_autor_fecha">
              {autor != undefined && autor != "" && `von ${autor} ${fecha}`}
            </div> */}

            <div className="row   d-flex align-items-center justify-content-center">
              <img
                className="img-md-fluid img-blog"
                src={`${servidor_url}/img/${image}`}
              />
            </div>

            <div className="row  mt-1 mb-2">
              <div className="contenedor-iconos-blog d-none d-md-grid justify-content-md-center">
                <div className="item-1-iconos-blog ">
                  <a
                    href={`http://www.facebook.com/share.php?u=${servidor_url}/blog/${id}`}
                    className="items-en-linea-padre"
                    target="_blank">
                    <FontAwesomeIcon
                      icon={faFacebookF}
                      className="iconos-blogs items-en-linea-hijo"
                    />

                    <div className="ms-1 texto-iconos-blogs items-en-linea-hijo ">
                      Facebook
                    </div>
                  </a>
                </div>

                <div className="item-2-iconos-blog  ">
                  <a
                    href={`https://twitter.com/share?url=${servidor_url}/blog/${id}/&text=${titulo2}`}
                    className="items-en-linea-padre ">
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="iconos-blogs items-en-linea-hijo"
                    />

                    <div className="ms-1 texto-iconos-blogs items-en-linea-hijo ">
                      Twitter
                    </div>
                  </a>
                </div>

                <div className="item-3-iconos-blog  ">
                  <a
                    href={`https://www.linkedin.com/shareArticle?url=${servidor_url}/blog/${id}/&title=${titulo2}`}
                    className="items-en-linea-padre ">
                    <FontAwesomeIcon
                      icon={faLinkedinIn}
                      className="iconos-blogs items-en-linea-hijo"
                    />

                    <div className="ms-1 texto-iconos-blogs items-en-linea-hijo ">
                      Linkedln
                    </div>
                  </a>
                </div>

                {/* <div className="item-4-iconos-blog  ">
                  <a
                    href={`https://wa.me/?text=${servidor_url}/blog/${id}`}
                    className="items-en-linea-padre ">
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      className="iconos-blogs items-en-linea-hijo"
                    />

                    <div className="ms-1 texto-iconos-blogs items-en-linea-hijo ">
                      WhatsApp
                    </div>
                  </a>
                </div> */}

                <div className="item-4-iconos-blog  ">
                  {/* <Tooltip title="Copy post url to clipboard" placement="top-start"> */}

                  <Tooltip
                    PopperProps={{ disablePortal: true }}
                    // onClose={handleTooltipClose}
                    open={open}
                    disableFocusListener
                    disableHoverListener
                    // disableTouchListener
                    title="Post url copied to clipboard"
                    placement="top-start"
                    leaveDelay={2000}
                    onMouseOut={handleTooltipClose}>
                    <div
                      onClick={() =>
                        copyURLtoClipboard(`${servidor_url}/blog/${id}`)
                      }
                      // href="#"
                      className="items-en-linea-padre ">
                      <FontAwesomeIcon
                        icon={faShareAlt}
                        className="iconos-blogs items-en-linea-hijo"
                      />

                      <div className="ms-1 texto-iconos-blogs items-en-linea-hijo ">
                        Share
                      </div>
                    </div>
                  </Tooltip>
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

        <div className="row mt-md-5 mb-5  d-flex align-items-center justify-content-center ">
          <div className="contenido-flechas-blog d-none d-md-grid">
            <div className="item-1-flechas-blog flecha">
              <a
                href={`${servidor_url}${link_anterior}`}
                className="items-en-linea-padre ">
                <div className="texto-flechas-blogs">Vorheriger Artikel</div>

                {/* <FontAwesomeIcon
                      icon={faLongArrowAltLeft}
                      className="iconos-blogs items-en-linea-hijo "
                    /> */}
                <div className="">
                  <img
                    className="img-fluid "
                    src={`${servidor_url}/img/blogs/flecha_azul_left.svg`}
                  />
                </div>

                <div className=" texto-flechas-blogs2 ">
                  {link_anterior_nombre2}
                </div>

                <div className=" texto-flechas-blogs2">
                  {link_anterior_nombre}
                </div>
              </a>
            </div>

            <div className="item-2-flechas-blog flecha">
              <a
                href={`${servidor_url}${link_siguiente}`}
                className="items-en-linea-padre ">
                <div className="texto-flechas-blogs ">Nächster Artikel</div>

                <div className="">
                  <img
                    className="img-fluid flecha"
                    src={`${servidor_url}/img/blogs/flecha_azul_rigth.svg`}
                  />
                </div>

                <div className="texto-flechas-blogs2 ">
                  {link_siguiente_nombre}
                </div>

                <div className="texto-flechas-blogs2 ">
                  {link_siguiente_nombre2}
                </div>
              </a>
            </div>
          </div>
          <div className="d-flex d-md-none">
            <div className="item-1-flechas-blog flecha w-50">
              <a
                href={`${servidor_url}${link_anterior}`}
                className="items-en-linea-padre ">
                <div className="texto-flechas-blogs">Vorheriger Artikel</div>

                {/* <FontAwesomeIcon
                      icon={faLongArrowAltLeft}
                      className="iconos-blogs items-en-linea-hijo "
                    /> */}
                <div className="">
                  <img
                    className="img-fluid w-50"
                    src={`${servidor_url}/img/blogs/flecha_azul_left.svg`}
                  />
                </div>

                {/* <div className=" texto-flechas-blogs2 ">
                  {link_anterior_nombre2}
                </div>

                <div className=" texto-flechas-blogs2">
                  {link_anterior_nombre}
                </div> */}
              </a>
            </div>

            <div className="item-2-flechas-blog flecha w-50">
              <a
                href={`${servidor_url}${link_siguiente}`}
                className="items-en-linea-padre ">
                <div className="texto-flechas-blogs ">Nächster Artikel</div>

                <div className="">
                  <img
                    className="img-fluid flecha w-50"
                    src={`${servidor_url}/img/blogs/flecha_azul_rigth.svg`}
                  />
                </div>

                {/* <div className="texto-flechas-blogs2 ">
                  {link_siguiente_nombre}
                </div>

                <div className="texto-flechas-blogs2 ">
                  {link_siguiente_nombre2}
                </div> */}
              </a>
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
            {index2 === 0 ? (
              <div className="letra-parrafo-blog primera-parrafo-blog">
                {unTexto}
              </div>
            ) : (
              <div className="letra-parrafo-blog">{unTexto}</div>
            )}

            <p />
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
