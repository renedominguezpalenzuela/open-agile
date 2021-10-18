import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import LeftColumnColor from "../components/LeftColumnColor";

import MenuFlotante from "../components/MenuFlotante";
import Footer from "../components/Footer";
import Content01 from "../components/Content01";
import Content02 from "../components/Content02";
import Content03 from "../components/Content03";
import Content04 from "../components/Content04";
import Content05 from "../components/Content05";

import Card01Lista from "../components/Card01Lista";

//----------------------------------------------------------------------------------------------------------
//            Pagina inicial principal
//----------------------------------------------------------------------------------------------------------

export default function Home() {
  return (
    <>
      <Head>
        <title>Main Page title</title>
        <meta name="description" content="Lorem Ipsum" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*Area superior  */}

      <div className="content-fluid">
        <div className={styles.banner}>
          <LeftColumnColor />
          <Content01 />
        </div>

        {/*Cards  */}
        <Content02 />

        {/*imagen  */}
        <Content03 imagen="Testimonials_kunden-1.png" />

        {/*Contenido  */}

        <Content04 />

        {/*Carrousel  */}
        <Content05 />

        <div className="row mt-5 pb-5">
          <Card01Lista />
        </div>

        {/*Footer  */}
        <Footer />
      </div>
      {/*Menu Lateral oculto  */}
      <MenuFlotante />
    </>
  );
}
