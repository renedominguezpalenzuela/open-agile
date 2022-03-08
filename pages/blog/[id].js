import Head from "next/head";
import { useRouter } from "next/router";
import * as React from "react";
import { useEffect } from "react";
import MenuFlotante from "../../components/MenuFlotante";
import Footer from "../../components/Footer";
import ReactMarkdown from "react-markdown";
import MenuFlotanteBoton from "../../components/MenuFlotanteBoton";
import AreaSuperior from "../../componentes/area_superior/AreaSuperior";
import { servidor_url } from "../../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "@mui/material/Tooltip";
import { backend_url } from "../../config";

//----------------------------------------------------------------------------------------------------------
//            Pagina inicial principal
//----------------------------------------------------------------------------------------------------------
export default function Home({ blog, servicios_lista, cursos_lista }) {
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

  const dt = new Date(blog.data.attributes.publishedAt);
  const title = blog.data.attributes.title;
  const subtitle = blog.data.attributes.title;
  const fecha = `${dt.getDate()}.${dt.getMonth() + 1}.${dt.getFullYear()}`;
  const url = blog.data.attributes.img.data.attributes.url;
  const content = blog.data.attributes.description;
  const link_anterior = blog.before.attributes.slug;
  const link_siguiente = blog.next.attributes.slug;
  const link_anterior_nombre = blog.before.attributes.title;
  const link_anterior_nombre2 = blog.before.attributes.subtitle;
  const link_siguiente_nombre = blog.next.attributes.title;
  const link_siguiente_nombre2 = blog.next.attributes.subtitle;

  // useEffect(() => {
  //   const elemento = document.querySelector(".titulo");
  //   if (title.length > 18) {
  //     elemento.classList.remove("font_title_blogs_articles");
  //     elemento.classList.add("font_title_blogs_articles-2");
  //   } else {
  //     elemento.classList.remove("font_title_blogs_articles-2");
  //     elemento.classList.add("font_title_blogs_articles");
  //   }
  // }, []);

  return (
    <>
      <Head>
        <title>{subtitle}</title>
        <meta name="description" content={subtitle} />
        <link rel="icon" href="/favicon.ico" />
        <script async src={`${servidor_url}/js/chat.js`} />
        <script async src={`${servidor_url}/js/menu.js`} />
      </Head>

      <div id="principal" className="container-fluid g-0">
        <MenuFlotanteBoton />

        <AreaSuperior cursos_lista={cursos_lista} servicios_lista={servicios_lista} texto1="BLOG" fondo="ajustable" area_gris_nueva={true} />

        <div className="row   d-flex align-items-center justify-content-center">
          <div className="col-10">
            <div className="row  mt-5 mb-2 d-flex align-items-center justify-content-center titulo font_title_blogs_articles">
              {title}
            </div>
            <div className="row   d-flex align-items-center justify-content-center">
              <div className="mb-2 text-end font_data_blog blog-movile">
                {fecha}
              </div>
              <img className="img-md-fluid img-blog" src={url} loading="lazy"  />
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
                    href={`https://twitter.com/share?url=${servidor_url}/blog/${id}/&text=${subtitle}`}
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
                    href={`https://www.linkedin.com/shareArticle?url=${servidor_url}/blog/${id}/&title=${subtitle}`}
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
                <div className="item-4-iconos-blog  ">
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
              <div className="mb-2 text-end font_data_blog blog-desktop">
                {fecha}
              </div>
            </div>

            <div className="row mt-4 mb-5 d-none d-md-block">
              <ReactMarkdown className="bullets-blog letra-parrafo-blog primera-parrafo-blog">
                {content}
              </ReactMarkdown>
            </div>
            <div className=" mt-4 mb-5 d-md-none col-12 texto-blog-movile">
              <ReactMarkdown className="bullets-blog letra-parrafo-blog primera-parrafo-blog">
                {content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
        <div className="row mt-md-5 mb-5  d-flex align-items-center justify-content-center ">
          <div className="contenido-flechas-blog d-none d-md-grid">
            <div className="item-1-flechas-blog flecha">
              <a
                href={`${servidor_url}/blog/${link_anterior}`}
                className="items-en-linea-padre ">
                <div className="texto-flechas-blogs">Vorheriger Artikel</div>
                <div className="">
                  <img
                    className="img-fluid "
                    src={`https://storage.googleapis.com/jsopenagile/img/blogs/flecha_azul_left.svg`}
                    loading="lazy" 
                  />
                </div>

                <div className=" texto-flechas-blogs2 ">
                  {link_anterior_nombre}
                </div>

                <div className=" texto-flechas-blogs2">
                  {link_anterior_nombre2}
                </div>
              </a>
            </div>

            <div className="item-2-flechas-blog flecha">
              <a
                href={`${servidor_url}/blog/${link_siguiente}`}
                className="items-en-linea-padre ">
                <div className="texto-flechas-blogs ">Nächster Artikel</div>

                <div className="">
                  <img
                    className="img-fluid flecha"
                    src={`https://storage.googleapis.com/jsopenagile/img/blogs/flecha_azul_rigth.svg`}
                    loading="lazy" 
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
                href={`${servidor_url}/blog/${link_anterior}`}
                className="items-en-linea-padre ">
                <div className="texto-flechas-blogs">Vorheriger Artikel</div>

                <div className="">
                  <img
                    className="img-fluid w-50"
                    src={`https://storage.googleapis.com/jsopenagile/img/blogs/flecha_azul_left.svg`}
                    loading="lazy" 
                  />
                </div>
              </a>
            </div>

            <div className="item-2-flechas-blog flecha w-50">
              <a
                href={`${servidor_url}/blog/${link_siguiente}`}
                className="items-en-linea-padre ">
                <div className="texto-flechas-blogs ">Nächster Artikel</div>

                <div className="">
                  <img
                    className="img-fluid flecha w-50"
                    src={`https://storage.googleapis.com/jsopenagile/img/blogs/flecha_azul_rigth.svg`}
                    loading="lazy" 
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
       <Footer servicios_lista={servicios_lista} cursos_lista={cursos_lista} />
      </div>
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
                <li className="letra-parrafo-blog bullets-blog">{unTexto}</li>
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
                <li className="letra-parrafo-blog bullets-blog">{unTexto}</li>
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

  const url2 = `${backend_url}/api/leistungen`;
  const res2 = await fetch(url2);
  const servicios_lista = await res2.json();

  const url3 = `${backend_url}/api/curso`;
  const res3 = await fetch(url3);
  const cursos_lista = await res3.json();

  return {
    props: {
      blog,
      servicios_lista,
      cursos_lista
    },
  };
};
