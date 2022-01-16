import { useEffect, useState } from "react";

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

export default function ModalFormCookie({ id, mostrar }) {
  const [showMe, setShowMe] = useState(false);

  useEffect(() => {
    setShowMe(mostrar);
  }, [mostrar]);

  const ocultar = () => {
    setShowMe(false);
    return;
  };

  return (
    <>
      {showMe && (
        <div className={clases(showMe)} id="cookie-form">
          <div className="row  d-flex justify-content-start ms-4 ps-1 mt-4 fuente_titulo_form_cookie">
            Wir verwenden
          </div>

          <div className="row mt-2 ps-1 ms-3 me-3 fuente_texto_form_cookie ">
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
            <div className="col-6">
              <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                label="Funktional"
                   sx={styles3}
              />
            </div>

            <div className="col-6">
              <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                label="Funktional"
                   sx={styles3}
              />
            </div>
          </div>

          <div className="row ms-3  pb-2">
            <div className="col-6">
              <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
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

          <div className="row d-flex g-0 justify-content-center mb-2 mt-1">
            <div className="col-6  d-flex  justify-content-center">
              <button
                type="button"
                className="card-footer m-2 boton-form-cookies "
                onClick={ocultar}>
                Alle akzeptieren
              </button>
            </div>

            <div className="col-6  d-flex  justify-content-center">
              <button
                type="button"
                className="card-footer m-2 boton-form-cookies "
                onClick={ocultar}>
                Ablehnen.
              </button>
            </div>
          </div>

          <div className="row d-flex g-0  mt-3 justify-content-start ms-4 fuente_footer_texto_form_cookie">
            Datenschutz | Impressum
          </div>
        </div>
      )}
    </>
  );
}

const clases = (mostrar) => {
  let resultado = "ocultar";
  if (mostrar) {
    resultado = "mostrar";
  }
  return (
    resultado +
    " modalformcookie content-fluid animate__animated animate__fadeInUpBig"
  );
};
