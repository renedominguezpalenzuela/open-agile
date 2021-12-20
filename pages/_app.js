import { RecoilRoot } from "recoil";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "../components/Layout";
//import "../styles/Home.module.css";

import "../styles/main_css_grid.css";

import "../styles/globals.css";
import "../styles/fonts.css";
import "../styles/animate.css";
import  "../styles/carrusel.css";
import  "../styles/tabla01.css";
import "../styles/menu-lateral.css";
import "../styles/formulario.css";
import "../styles/checkbox.css";
import "../styles/iconos.css";
import "../styles/areasuperior.css";
import "../styles/navbarmobil.css";
import "../styles/cardscrashkurse.css";
import "../styles/modalform.css";




// import "../styles/respuesta.css";



import 'bootstrap-icons/font/bootstrap-icons.css';




import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';




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



// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();


export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

 return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <RecoilRoot>   <Component {...pageProps} /> </RecoilRoot> 
      </ThemeProvider>
    </CacheProvider>
  );
}


MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};


