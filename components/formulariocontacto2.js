import React, { useState } from "react";
import TextField from "@mui/material/TextField";
// import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

import { pink } from "@mui/material/colors";

export default function FormularioContacto2() {
  const [checked1, setChecked1] = useState(false);

  const handleChange1 = (event) => {
    setChecked1(event.target.checked);
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  

  // const styles2 = (theme) => ({
  //   multilineColor: {
  //     color: "red",
  //   },
  // });

  // '& .MuiInput-underline:before': { borderBottom: `1px solid #e50067` },
  // '& .MuiInput-underline:after': { borderBottom: `1px solid #ffffff` },
  //  '& .MuiInput-underline:hover': { borderBottom: `1px solid  #00ffffff` },

  const styles = {
    width: { sm: 250, md: 350 },

    "& .MuiInputBase-root": {
      height: 42,
    },

    "& .MuiOutlinedInput-root": {
      "& > fieldset": {
        borderColor: "white",
      },
    },
    "& .MuiOutlinedInput-root:hover": {
      "& > fieldset": {
        borderColor: "#e42078",
      },
    },

    "& .MuiFormLabel-root": {
      color: "#ffffff"                  //Color del label
    }
    
  };


const fuentes1 = {
    style: { //fontSize: 11
    fontSize: 10 ,
     textAlign: "left", ///Text Align
        letterSpacing: "0.06vw", //espaciado de letras luego d escribir
        color: "#ffffff",
        fontFamily: "Montserrat-Light"
    
     },
  };


  const fuentes = {
    style: { fontSize: 10 },
  };

  const styles3 = {
    ".MuiFormControlLabel-label": {
      fontSize: "0.9vw",
      color: "#ffffff",
    },
  };

  const stylesCuadrado = {
    color: "#ffffff",
    "&.Mui-checked": { color: "#e42078" },

    
  };

  const stiloTexto = {
    "MuiFormControlLabel-root":{
       color: "#ffffff",
     "& .MuiFormControlLabel-label": {
        color: "#ffffff",
     }
    }
  }

  return (
    <>
      {/* Mostrar si es mayor que LG */}
   
        <div className="  bannerformulario">
       
          <div className="font_title_formulario  item-titulo1-formulario">
            LASS UNS IN KONTAKT BLEIBEN
          </div>
          <div className="font_title_secundario_formulario  item-titulo2-formulario">
            OPEN AGILE NEWSLETTER
          </div>
          <div className="group item-edit1  ">
            <TextField
              id="name"
              label="Name eingeben"
              className="ancho-edit"
              variant="outlined"
              sx={styles}
              inputProps={fuentes1}
              InputLabelProps={fuentes}
            />
          </div>
          <div className="group item-edit2 ">
            <TextField
              id="name"
              label="E-Mail eingeben"
              className="ancho-edit"
              variant="outlined"
              sx={styles}
              inputProps={fuentes1}
              InputLabelProps={fuentes}
            />
          </div>{" "}
          
          <div className="group  item-boton1  ">
            <button
              type="button"
              className="btn boton_formulario ancho-boton alto-boton font_boton_formulario">
              ANMELDEN
            </button>
          </div>
          <div className="group  item-check  ">
            <FormControlLabel
              sx={styles3}
              className="p-1 color_magenta"
              control={
                <Checkbox
                  checked={checked1}
                  value="1"
                  color="primary"
                  sx={stylesCuadrado}
                  onChange={handleChange1}
                />
              }
              label="Ja, ich bin mit den AGBs des Newsletters einverstanden"
              sx={stiloTexto}
            />
          </div>
        
      </div>

   
      {/* <div class="row border border-dark  d-lg-none">

           <div class="d-none  d-lg-block">
      <div className="  bannerformulario2  ">

        <div className="row font_title_formulario  item-titulo1-formulario">
             LASS UNS IN KONTAKT BLEIBEN
            </div>

            <div className="row font_title_secundario_formulario  item-titulo2-formulario">
            OPEN AGILE NEWSLETTER
            </div>
         
</div>
</div>
</div> */}

    </>
  );
}
