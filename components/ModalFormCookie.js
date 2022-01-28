import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { expire_cookies_in_days } from "../config";

import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";

import InputAdornment from "@mui/material/InputAdornment";

import { styled } from "@mui/material/styles";

import FormLabel from "@mui/material/FormLabel";

import Link from "next/link";

const styles3 = {
  ".MuiFormControlLabel-label": {
    fontFamily: "Montserrat-Bold",
    fontSize: 12,
    color: "#24325a",
  },
};

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 38,
  height: 22,
  padding: 0,

  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#F82D7C", //theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',

        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d", //
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: "#24325a",
      // theme.palette.mode === 'light'
      //   ? theme.palette.grey[100]
      //   : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 18,
    height: 18,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "#24325a   ", // theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

export default function ModalFormCookie({ id, tiempo , animar}) {
  const [showMe, setShowMe] = useState(false);

  // const [mostrarVentanaCookies, SetmostrarVentanaCookies] = useState(false);

  let first_time = Cookies.get("first_time");

  if (first_time === undefined || first_time === "true") {
    first_time = true;
  } else {
    first_time = false;
  }

  //TODO: solo para ruebas
  // first_time=true;

  useEffect(() => {
    if (first_time === true) {
      setTimeout(() => {
         setShowMe(true)
        //  Cookies.set("first_time", false, { expires: expire_cookies_in_days });
      }, tiempo);
      
    }
  }, []);

  let notwendigCheckedCookie = Cookies.get("notwendigCheckedCookie");

  if (
    notwendigCheckedCookie === undefined ||
    notwendigCheckedCookie === "true"
  ) {
    notwendigCheckedCookie = true;
  } else {
    notwendigCheckedCookie = false;
  }

  let performanceCheckedCookie = Cookies.get("performanceCheckedCookie");
  if (
    performanceCheckedCookie === undefined ||
    performanceCheckedCookie === "true"
  ) {
    performanceCheckedCookie = true;
  } else {
    performanceCheckedCookie = false;
  }

  let funktionalCheckedCookie = Cookies.get("funktionalCheckedCookie");
  if (
    funktionalCheckedCookie === undefined ||
    funktionalCheckedCookie === "true"
  ) {
    funktionalCheckedCookie = true;
  } else {
    funktionalCheckedCookie = false;
  }

  const [notwendigChecked, setNotwendigChecked] = React.useState(
    notwendigCheckedCookie
  );
  const [performanceChecked, setPerformanceChecked] = React.useState(
    performanceCheckedCookie
  );
  const [funktionalChecked, setFunktionalChecked] = React.useState(
    funktionalCheckedCookie
  );

  const handleChangeNotwendig = (event) => {
    setNotwendigChecked(event.target.checked);
    
  };

  const handleChangePerformance = (event) => {
    setPerformanceChecked(event.target.checked);
    
  };

  const handleChangeFunktional = (event) => {
    setFunktionalChecked(event.target.checked);
    
  };

  // useEffect(() => {
  //   setShowMe(mostrar);
  // }, [mostrar]);

  const botonAceptar = () => {
    //guardar cookies
    //	notwendig, performance, funktional

    Cookies.set("notwendigCheckedCookie", notwendigChecked, {
      expires: expire_cookies_in_days,
    });
    Cookies.set("performanceCheckedCookie", performanceChecked, {
      expires: expire_cookies_in_days,
    });
    Cookies.set("funktionalCheckedCookie", funktionalChecked, {
      expires: expire_cookies_in_days,
    });

    Cookies.set("first_time", false, { expires: expire_cookies_in_days });

    setShowMe(false);
    return;
  };

  const botonNoAceptar = () => {
    //eliminar todas las cookies
    Cookies.remove("notwendigCheckedCookie");
    Cookies.remove("performanceCheckedCookie");
    Cookies.remove("funktionalCheckedCookie");
    Cookies.remove("first_time");
    setShowMe(false);
    return;
  };

  return (
    <>
      {showMe && (
        <div className={clases(showMe, animar)} id="cookie-form">
          <div className="row  d-flex justify-content-start ms-4 ps-1 mt-4 fuente_titulo_form_cookie">
            Wir verwenden Cookies
          </div>

          <div className="row d-none d-lg-block mt-2 ps-1 ms-3 me-3 fuente_texto_form_cookie ">
            Um Ihnen die bestmögliche Nutzung zu ermöglichen. Neben technisch
            unbedingt erforderlichen Cookies werden mit Ihrer Einwilligung auch
            weitere Cookies angesteuert, um zusätzliche Dienste und Funktionen
            einzubinden. Wir verarbeiten Daten zu den Zwecken „Analyse und
            Performance“ und „Marketing" nur, soweit Sie uns durch Klicken auf
            „Alles akzeptieren“ oder unter „Einstellungen“ Ihre freiwillige
            Einwilligung geben. Sie können Ihre jeweilige Einwilligung jederzeit
            mit Wirkung für die Zukunft widerrufen.
          </div>

          <div className="row ms-3 pt-2">
            <div className="col col-lg-6">
              <FormControlLabel
                control={
                  <IOSSwitch
                    sx={{ m: 1 }}
                    checked={notwendigChecked}
                    onChange={handleChangeNotwendig}
                  />
                }
                label="Notwendig"
                sx={styles3}
              />
            </div>

            <div className="col col-lg-6">
              <FormControlLabel
                control={
                  <IOSSwitch
                    sx={{ m: 1 }}
                    checked={performanceChecked}
                    onChange={handleChangePerformance}
                  />
                }
                label="Performance"
                sx={styles3}
              />
            </div>
          </div>

          <div className="row ms-3  pb-2">
            <div className="col-6">
              <FormControlLabel
                control={
                  <IOSSwitch
                    sx={{ m: 1 }}
                    checked={funktionalChecked}
                    onChange={handleChangeFunktional}
                  />
                }
                label="Funktional"
                sx={styles3}
              />
              {/* <RadioGroup name="use-radio-group" defaultValue="Ja">
              <FormGroup>
                <FormControlLabel
                  control={<Switch defaultChecked  />}
                  label="Funktional"
                  className="fuente_switch_form_cookie"
                />
              </FormGroup>
            </RadioGroup> */}
            </div>
          </div>

          <div className="row d-flex flex-column flex-md-row g-0 justify-content-center mb-2 mt-1 ms-2 me-2">
          <div className="col-md-6  d-flex  justify-content-center">
              <button
                type="button"
                className="card-footer  boton-form-cookies "
                onClick={botonAceptar}>
                Alle akzeptieren
              </button>
            </div>

            <div className="col-md-6  d-flex  justify-content-center">
              <button
                type="button"
                className="card-footer  boton-form-cookies "
                onClick={botonNoAceptar}>
                Ablehnen
              </button>
            </div>
          </div>
           
              
          <div className=" d-flex g-0  mt-3 pb-2 justify-content-start ms-4 fuente_footer_texto_form_cookie enlinea-padre">
            <Link href="/doc/Datenschutz.pdf" className="enlinea-hijo">
              <a target="_blank" className="mylinkhoover">
                Datenschutz
              </a>
            </Link>

            <div className="enlinea-hijo ms-1 me-1"> | </div>
            <Link href="/doc/Impressum.pdf" className="enlinea-hijo">
              <a target="_blank" className="mylinkhoover">
                Impressum
              </a>
            </Link>

            {/* Datenschutz | Impressum */}
          </div>
        </div>
      )}
    </>
  );
}

const clases = (mostrar, animar) => {
  let resultado = "ocultar";
  if (mostrar) {
    resultado = "mostrar";
  }

  if (animar) {
     resultado = resultado + " animate__animated animate__fadeInUpBig";
  }
  return (
    resultado + " modalformcookie content-fluid "
  );
};
