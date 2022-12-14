import Head from "next/head";
import Footer from "../components/Footer";

import MenuFlotante from "../components/MenuFlotante";
import MenuFlotanteBoton from "../components/MenuFlotanteBoton";
import AreaSuperior from "../componentes/area_superior/AreaSuperior";

import Card07Shop from "../components/Card07Shop";

import { servidor_url } from "../config";
import { backend_url } from "../config";

import ModalFormCookie from "../components/ModalFormCookie";
import { useState, useEffect } from "react";

//----------------------------------------------------------------------------------------------------------
//           CRASHKURSE \ CRASHKURS ZUM AGILE COACH
//----------------------------------------------------------------------------------------------------------
//https://www.amazon.de/Crashkurs-Selbstorganisation-agilen-Teams-wertschätzende/dp/3648151509/ref=sr_1_2?__mk_de_DE=ÅMÅŽÕÑ&crid=3PL0Y0OIVCT4Y&keywords=crashkurs+agil&qid=1640623312&sprefix=crashkurs+agil%2Caps%2C97&sr=8-2
export default function Home({ shop , cursos_lista,  servicios_lista}) {
  const titulo_area_superior2 = "AGILITÄT FÜR ZUHAUSE UND UNTERWEGS";
  const titulo_area_superior = "DER OPEN AGILE SHOP";

  const [desktop_screen, setDesktop_screen] = useState(true);
  const handleResize = () => {
    let ancho_screen = window.innerWidth;
    if (ancho_screen > 992) {
      setDesktop_screen(true);
    } else {
      setDesktop_screen(false);
    }
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <>
        <Head>
          <title>{titulo_area_superior}</title>
          <meta name="description" content={titulo_area_superior} />
          <link rel="icon" href="/favicon.ico" />
          <script async src={`${servidor_url}/js/chat.js`} />
          <script async src={`${servidor_url}/js/menu.js`} />
        </Head>

        <div id="principal" className="container-fluid g-0">
          <MenuFlotanteBoton />

          <AreaSuperior
            fondo="ajustable"
            texto1={titulo_area_superior}
            texto2={titulo_area_superior2}
            titulo_muy_largo={true}
            area_gris_nueva={true}
            shop={true}
             servicios_lista={servicios_lista} 
            cursos_lista={cursos_lista} 
			
          />

          <div className="row  mt-5 mb-5 pt-5  d-flex justify-content-center ">
            {shop.map((oneShop, index) => (
              <div
                key={index}
                className="col-lg-4 p-3 d-flex justify-content-center card-shop-land">
                <Card07Shop
                  id={oneShop.id}
                  titulo={oneShop.attributes.title}
                  texto={oneShop.attributes.description}
                  imagen={oneShop.attributes.image.data.attributes.formats.small.url}
                  texto_boton1={oneShop.attributes.left_button_text}
                  texto_boton2={oneShop.attributes.rigth_button_text}
                  texto_alt={oneShop.attributes.title}
                  link1={oneShop.attributes.left_button_url}
                  link2={oneShop.attributes.rigth_button_url}
                />
              </div>
            ))}
          </div>

          {/*Footer  */}
         <Footer servicios_lista={servicios_lista} cursos_lista={cursos_lista} />
        </div>

        {/*Menu Lateral oculto  */}
        <MenuFlotante />
      </>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const url = `${backend_url}/api/shop`;
  const res = await fetch(url);

  const shop = await res.json();

  
  const url2 = `${backend_url}/api/leistungen`;
  const res2 = await fetch(url2);
  const servicios_lista = await res2.json();

  const url3 = `${backend_url}/api/curso`;
  const res3 = await fetch(url3);
  const cursos_lista = await res3.json();

  return {
    props: {
      shop,
       cursos_lista,
      servicios_lista
    },
  };
};
