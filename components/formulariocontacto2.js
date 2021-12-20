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
  
      height: 42
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
  };


  const fuentes = {
    style: {fontSize: 10}
  }

  
  const styles3 = {
   ".MuiFormControlLabel-label": {
     fontSize: "0.9vw",
     color:"#ffffff"
   }};

     const stylesCuadrado = { color: "#ffffff",  "&.Mui-checked": {color: "#e42078",  }};

  return (
    <>
      <div className="  bannerformulario  ">
      

          

        
            
            <div className="font_title_formulario  item-titulo1-formulario">
             LASS UNS IN KONTAKT BLEIBEN
            </div>

            <div className="font_title_secundario_formulario  item-titulo2-formulario">
            OPEN AGILE NEWSLETTER
            </div>

             <div className="group item-edit1  ">
                <TextField id="name" label="Name eingeben" className="ancho-edit" variant="outlined"  sx={styles} inputProps={fuentes}   InputLabelProps={fuentes}    />
              </div>

               <div className="group item-edit2 ">
                <TextField id="name" label="E-Mail eingeben"  className="ancho-edit" variant="outlined"  sx={styles}   inputProps={fuentes}   InputLabelProps={fuentes}/>
              </div> }


 <div className="group  item-boton1  ">
                  <button  type="button" className="btn boton_formulario ancho-edit alto-boton font_boton_formulario">
                    ANMELDEN
                  </button>
               </div> 


               <div className="group  item-check  ">
                 <FormControlLabel sx={styles3} className="p-1 color_magenta"
                    control={
                       <Checkbox checked={checked1} value="1" color="primary"   sx={stylesCuadrado }
                        onChange={handleChange1}
                      />
                    }
                    label="Ja, ich bin mit den AGBs des Newsletters einverstanden"
                  />
               </div>
       
{/* 
          <div className=" border  g-0 d-flex align-items-start    justify-content-center ">
            <div className="col-md-3 ps-3 pe-3 mt-3 ">
              <div className="group row ">
                <TextField id="name" label="Name eingeben"  variant="outlined"  sx={styles} />
              </div>
            </div>

            <div className="col-md-3 ps-3 pe-3    mt-3">
              <div className="group row ">
                <TextField id="name" label="E-Mail eingeben"   variant="outlined"  sx={styles} />
              </div>
            </div>

             <div className="col-md-3  ps-3 pe-3 mt-3">
               <div className="group row ">
                  <button  type="button" className="btn boton_formulario  font_boton_formulario">
                    ANMELDEN
                  </button>
               </div>
            </div>        
          </div> */}

            {/* <div className=" border d-flex align-items-start   justify-content-center  ">
              <div className="col-md-8  ps-3 pe-3 mt-3 d-flex align-items-center   justify-content-center">
                  <FormControlLabel sx={styles3} className="p-1  color_magenta"
                    control={
                       <Checkbox checked={checked1} value="1" color="primary"   sx={stylesCuadrado }
                        onChange={handleChange1}
                      />
                    }
                    label="Ja, ich bin mit den AGBs des Newsletters einverstanden"
                  />

                </div>  
                </div> */}

       

        {/*

       

          <div className="row  g-0 d-flex align-items-center    justify-content-center mt-1">
            <div className="col-4   ">
              <div className="group row ">
                <TextField
                  id="standard-basic"
                  label="Name eingeben"
                  variant="standard"
                  sx={styles}
                />
              </div>

              <div className="group mt-4 row">
                <TextField
                  id="standard-basic"
                  label="E-Mail eingeben"
                  variant="standard"
                  sx={styles}
                />
              </div>
            </div>
       

            <div className="row  d-flex align-items-center   justify-content-center mt-4 ">
              <div className="inputgrupo   d-flex align-items-center   justify-content-center ">
                <div className="row  d-flex align-items-center   justify-content-center mt-4 ">
                  <FormControlLabel sx={styles3} className="p-1  color_magenta"
                    control={
                       <Checkbox checked={checked1} value="1" color="primary"   sx={stylesCuadrado }
                        onChange={handleChange1}
                      />
                    }
                    label="Ja, ich bin mit den AGBs des Newsletters einverstanden"
                  />

                  
                </div>
              </div>
            </div>
          </div>
          <div className="row g-0  d-flex align-items-center   justify-content-center mt-1 ">
            <div className="group w-25 mt-4 mb-4 ">
              <button
                type="button"
                className="btn boton_card_magenta  w-100 font_facit_boton_small">
                ANMELDEN
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
