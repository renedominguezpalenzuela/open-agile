import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

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

        <AreaSuperior fondo="ajustable" />

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


              <div className="row  mt-1 mb-2  ">
                 {content!=undefined &&
                    content.map((unTexto, index1)=>(<>
                      

                    </>))
                 }
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
