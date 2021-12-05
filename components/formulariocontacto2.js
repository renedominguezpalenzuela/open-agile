import React, { useState } from "react";
import TextField from "@mui/material/TextField";
// import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from "@mui/material/Button";
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';


// import { withStyles } from '@material-ui/core/styles';
// import theme from '../src/theme';

// const styles = {
//     root: {                           // - The TextField-root
//         border: 'solid 3px #0ff',     // - For demonstration: set the TextField-root border
//         padding: '3px',               // - Make the border more distinguishable

//         // (Note: space or no space after & matters. See SASS "parent selector".)
//         '& .MuiOutlinedInput-root': {  // - The Input-root, inside the TextField-root
//             '& fieldset': {            // - The <fieldset> inside the Input-root
//                 borderColor: 'pink',   // - Set the Input border
//             },
//             '&:hover fieldset': {
//                 borderColor: 'yellow', // - Set the Input border when parent has :hover
//             },
//             '&.Mui-focused fieldset': { // - Set the Input border when parent is focused
//                 borderColor: 'green',
//             },
//         },
//     },
// };

export default function FormularioContacto2() {

   const [checked1, setChecked1] = useState(false);


   const handleChange1 = (event) => {
    setChecked1(event.target.checked);
    
  };


  const styles2 = (theme) => ({
    multilineColor: {
      color: "red",
    },
  });

  // '& .MuiInput-underline:before': { borderBottom: `1px solid #e50067` },
  // '& .MuiInput-underline:after': { borderBottom: `1px solid #ffffff` },
  //  '& .MuiInput-underline:hover': { borderBottom: `1px solid  #00ffffff` },

  const styles = {
    ".MuiInput-root": {
      borderBottom: "1px solid #e42078",
    },
    ".MuiInput-root:before": {
      borderBottom: "1px solid #e50067",
    },

    ".MuiInput-root:after": {
      borderBottom: "1px solid #ffffff",
    },

  
  };

  const styles3 = {
   ".MuiFormControlLabel-label": {
     fontSize: "0.9rem",
     color:"#e42078"
   }
};


  return (
    <>
      <div className="row mt-5 p-3 d-flex  justify-content-center encima-zindex">
        <div className="col-9 color_background  ">
          <div className="row d-flex mt-4 font_title_formulario justify-content-center">
            LASS UNS IN KONTAKT BLEIBEN
          </div>

          <div className="row d-flex mt-2 mb-4 font_title_secundario_formulario font_title_purple justify-content-center ">
            OPEN AGILE NEWSLETTER
          </div>

          <div className="row  g-0 d-flex align-items-center    justify-content-center mt-1">
            <div className="col-4   ">
              <div className="group row ">
               <TextField id="standard-basic" label="Name eingeben" variant="standard" sx={styles} />
              </div>

              <div className="group mt-4 row">
                  <TextField id="standard-basic" label="E-Mail eingeben" variant="standard" sx={styles}/>
              </div>
            </div>
{/* 
            <div className="row  d-flex align-items-center   justify-content-center mt-4 ">
              <div className="inputgrupo   d-flex align-items-center   justify-content-center ">
                <input className="me-2 custom-checkbox" type="checkbox" value="" />
                <div className="font_texto_formulario color_magenta">
                  Ja, ich bin mit dem AGBs des Newsletters einverstanden
                </div>
              </div>
            </div> */}

          <div className="row  d-flex align-items-center   justify-content-center mt-4 ">
            <div className="inputgrupo   d-flex align-items-center   justify-content-center ">

              <div className="row  d-flex align-items-center   justify-content-center mt-4 ">
                <FormControlLabel  sx={styles3} className="p-1  color_magenta" control={
                       <Checkbox checked={checked1} value="1" color="myColor" onChange={handleChange1} />
                   } label="Ja, ich bin mit dem AGBs des Newsletters einverstanden" />
              </div>
            </div>
          </div>

          </div>
          <div className="row g-0  d-flex align-items-center   justify-content-center mt-1 ">
            <div className="group w-25 mt-4 mb-4 ">
            <button type="button" className="btn boton_card_magenta  w-100 font_facit_boton_small">
                ANMELDEN
            </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
