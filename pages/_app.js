import "bootstrap/dist/css/bootstrap.css";
import Layout from "../components/Layout";
//import "../styles/Home.module.css";

import "../styles/globals.css";
import "../styles/fonts.css";




// import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
// import { config } from "@fortawesome/fontawesome-svg-core";
// config.autoAddCss = false; // Tell Font Awesome  skip adding the CSS automatically since it's being imported above

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faLongArrowAltRight  } from "@fortawesome/free-solid-svg-icons";



import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { useEffect } from "react";

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; /* eslint-disable import/first */

library.add(fab, faPhone, faEnvelope, faBars, faArrowLeft, faArrowRight, faLongArrowAltRight);

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
