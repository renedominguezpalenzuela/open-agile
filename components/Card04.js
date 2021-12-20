// import styles from "../styles/Home.module.css";

import TextField from "@mui/material/TextField";
// import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";

import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import FormLabel from '@mui/material/FormLabel';

export default function Card04({ datos }) {
  const { id, quartal, date1, date2, day, link } = datos;

  const fuentes = {
    style: { fontSize: 10 },
  };


 const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  
  const styles = {
    width: { sm: 250, md: 350 },

    "& .MuiInputBase-root": {
      height: 42,
    },

    "& .MuiOutlinedInput-root": {
      "& > fieldset": {
        backgroundColor: "#ECE7E7",
        borderColor: "#ECE7E7",
      },
    },
    "& .MuiOutlinedInput-root:hover": {
      "& > fieldset": {
        borderColor: "#e42078",
      },
    },
  };

  

  return (
    <>
      <div className="  pt-5 pb-5 mb-5 d-flex justify-content-center ">
        <div className="card text-center my_card-crashkurse ">
          <div className="card-header  ">
          
          <div className="row titulo-card-crashkurse  d-flex justify-content-center">
             {quartal}. Quartal 
          </div>

           <div className="row  subtitulo-card-crashkurse   d-flex justify-content-center">
              {day}
            </div>

          </div>
          <div className="card-body color-body ">
           <a href="/contact" className="font_card_fechas ">
              <div className="row  fechas-card-crashkurse d-flex justify-content-center pt-2 m-2">
                {date1}
              </div>
              <div className="row fechas-card-crashkurse d-flex justify-content-center pb-2 m-2">
                {date2}
              </div>
            </a>
           
          </div>
          <button type="button" className="card-footer card-footer-crashkurse" data-bs-toggle="modal" data-bs-target={`#contactForm${quartal}`}>
            JETZT AMNELDEN...
          </button>

           {/* <a href="/contact"> */}
          {/* <div className="card-footer card-footer-crashkurse">JETZT AMNELDEN...</div> */}
          {/* </a> */}
        </div>
      </div>


            {/* <!-- Modal --> */}
      <div className="modal fade" id={`contactForm${quartal}`} tabindex="-1" >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <div className="row  ms-2 me-2   w-100 d-flex justify-content-start">
                    <div className="col-4  titulo-card-crashkurse">
                        <div className="row">
                          {quartal}. Quartal   
                        </div>              
                    </div>
              
                    <div className="col subtitulo-card-crashkurse d-flex justify-content-start align-items-center ">
                      {`${eliminar_anno(date1)} - ${date2}`}
                    </div>              
              </div>

              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

            </div>


            <div className="modal-body color-body-modal ">

              <div className="row d-flex mt-2 ps-3 pe-3 justify-content-start titulo-modal ">
                 Jetzt anmelden!               
              </div>
              
           <div className="row mt-3 ps-3 pe-3 d-flex justify-content-center   ">
            
                  <TextField
                  id="name"
                  label="Name, Vorname oder Firma"
                  className="ancho-edit2"
                  variant="outlined"
                  sx={styles}
                  inputProps={fuentes}
                  InputLabelProps={fuentes}
                  />
            
           </div>

           <div className="row mt-3 ps-3 pe-3 d-flex justify-content-center   ">
            
                  <TextField
                  id="address"
                  label="E-Mail Adresse"
                  className="ancho-edit2"
                  variant="outlined"
                  sx={styles}
                  inputProps={fuentes}
                  InputLabelProps={fuentes}
                  />
            
           </div>
               

            

               <div className="row  texto-email ps-3 pe-3 pt-1  ">
                 Wir senden Dir binnen 48h eine Bestätigung und weitere Informationen zu dem Seminar.          
              </div>

              <div className="row d-flex justify-content-start privacy-modal ps-3 pe-3 mt-3">
                 AGBS         
              </div>

              <div className="row d-flex justify-content-start texto-email  ps-3 pe-3 ">
                Ich bin mit der Übermittlung meiner Daten zur internen Verarbeitung der Open Agile GmbH einverstanden.
              </div>

              <div className="row d-flex justify-content-start ps-3 pe-3 ">

              {/* <FormControl component="fieldset"> */}
             
                <RadioGroup aria-label="gender" defaultValue="Ja" name="radio-buttons-group">
                  <FormControlLabel value="Ja" control={<Radio />} label="Ja" />
                  <FormControlLabel value="Nein" control={<Radio />} label="Nein" />
              
                </RadioGroup>
              {/* </FormControl> */}
             
              </div>

              <div className="row d-flex justify-content-start ps-3 mt-3 pe-3  "> 
                 
                      <TextField
                      id="outlined-multiline-flexible"
                      label="Sende uns eine Nachricht"
                      multiline
                      maxRows={4}
                      value={value}
                      className="ancho-edit2"
                      onChange={handleChange}
                      sx={styles}
                      inputProps={fuentes}
                      InputLabelProps={fuentes}
                      
                      />            
                  </div>

              
              



              <div className="row d-flex justify-content-end mt-4 pe-3 mb-2">
                  <div className="col-3">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">ABSENDEN</button>    
                  </div>
              
              </div>
             
            
            </div>
         
          </div>
        </div>
      </div>

    </>
  );
}


const eliminar_anno = (fecha)=>{
  return fecha.substring(0,6);

}