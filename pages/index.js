import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import LeftColumnColor from "../components/LeftColumnColor";

import MenuFlotante from "../components/MenuFlotante";
import Footer from "../components/Footer";
import Content01 from "../components/Content01";
import Content02 from "../components/Content02";

export default function Home() {
  return (
    <>
      <Head>
        <title>Main Page title</title>
        <meta name="description" content="Lorem Ipsum" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*Area superior  */}

      <div className={styles.banner}>
        <LeftColumnColor />
        <Content01 />
      </div>

      <Content02 />

      <Footer />

      {/*Menu Lateral oculto  */}
      <MenuFlotante />
    </>
  );
}
