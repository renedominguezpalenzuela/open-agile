import * as React from "react";

import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import InputAdornment from "@mui/material/InputAdornment";

import { styled } from "@mui/material/styles";

import FormLabel from "@mui/material/FormLabel";

import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";

//Iconos
import AccountCircle from "@mui/icons-material/AccountCircle";
import Email from "@mui/icons-material/Email";

// import styles from "../styles/Home.module.css";

import TextField from "@mui/material/TextField";
// import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";

import Box from "@mui/material/Box";

const StyledFormControlLabel = styled((props) => (
  <FormControlLabel {...props} />
))(({ theme, checked }) => ({
  ".MuiFormControlLabel-label": {
    color: "#243A78", //color de la letra
    fontSize: 12, //tamano de la letra
  },
}));

function MyFormControlLabel(props) {
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return <StyledFormControlLabel checked={checked} {...props} />;
}

MyFormControlLabel.propTypes = {
  /**
   * The value of the component.
   */
  // value: PropTypes.any,
};

export default function ModalFormConfigurator({
  id,
  titulo,
  quartal,
  date1,
  date2,
  day,
  frase,
}) {
  //Texto que aparece en el edit luego de que el usuario escribe
  //inputProps={fuentes1}

  const fuentes1 = {
    style: {
      //fontSize: 11
      textAlign: "left", ///Text Align
      letterSpacing: "0.06vw", //espaciado de letras luego d escribir
      color: "#6B6B74",
      fontFamily: "Montserrat-Light",
    },
  };

  const radio_button = {
    height: "7px",
    padding: "0.2vw",

    // fontSize: "0.9vw",
    //  color: "#00ff00", //color del icono

    "& .MuiSvgIcon-root": {
      fontSize: 14, //Tamno del inoco del radio button
    },

    " .MuiFormControlLabel-root": {
      fontSize: "10vw",
      color: "#ffffff",
    },

    "& .MuiFormControlLabel-label": {
      fontSize: "10vw",
      color: "#ffffff",
    },
  };

  //Texto que aparece en el Edit antes de que el usuario escriba nada
  //InputLabelProps={fuentes2}
  const fuentes2 = {
    style: { fontSize: 12, color: "#6B6B74" },
  };

  const styles3 = {
    ".MuiFormControlLabel-label": {
      fontSize: "0.9vw",
      color: "#ffffff",
    },
  };

  const [value1, setValue1] = React.useState("Controlled");

  const [value2, setValue2] = React.useState("Controlled");
  const [value3, setValue3] = React.useState("Controlled");

  const handleChange1 = (event) => {
    setValue1(event.target.value);
  };

  const handleChange2 = (event) => {
    setValue2(event.target.value);
  };

  const handleChange3 = (event) => {
    setValue3(event.target.value);
  };

  const styles = {
    //  input: { color: 'blue'}, //Color de la fuente al escribir

    // width: { sm: 250, md: 350 }, //Ancho del control

    "& .MuiInputBase-root": {
      //Aqui arriba es el elemento base - root
      height: 50, //Ancho del edit

      "& input": {
        //Luego de escribir (Elemento)
        textAlign: "left", ///Text Align
        letterSpacing: "0.06vw", //espaciado de letras luego d escribir
        color: "#6B6B74",
        fontFamily: "Montserrat-Light", //Tipo de fuuente al escribir
      },
      // color: "#6B6B74",            //Color de la fuente al escribir
      // backgroundColor: "#ECE7E7",  //Color de fondo del edit
    },

    "& .MuiOutlinedInput-root": {
      color: "#6B6B74", //Color de la fuente al escribir
      backgroundColor: "#ECE7E7", //Color de fondo del edit

      "& > fieldset": {
        //  backgroundColor: "#ECE7E7",
        borderColor: "#ECE7E7",
      },
    },
    "& .MuiOutlinedInput-root:hover": {
      "& > fieldset": {
        borderColor: "#e4207864", //Color del borde al hacer hoover
      },
    },

    "& .MuiFormLabel-root": {
      color: "#ffffff", //Color del label
      fontFamily: "Montserrat-Regular",
    },
  };

  return (
    <>
      {/* <!-- Modal --> */}
      <div className="modal fade" id={`contactForm${id}`} tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <div className="row  ms-2 me-2   w-100 d-flex justify-content-start">
                <div className="col-4  titulo-card-crashkurse">
                  {/* <div className="row">{quartal}. Quartal</div> */}

                  <div className="row">{titulo}</div>
                </div>
                {date1 != undefined &&
                  date2 != undefined &&
                  date1 != "" &&
                  date2 != "" && (
                    <div className="col subtitulo-card-crashkurse d-flex justify-content-start align-items-center ">
                      {`${eliminar_anno(date1)} - ${date2}`}
                    </div>
                  )}
              </div>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>

            <div className="modal-body color-body-modal ">
              <div className="row d-flex mt-2 ps-3 pe-3 justify-content-start titulo-modal ">
                {frase}
              </div>

              <div className="row mt-3 ps-3 pe-3 d-flex justify-content-center   ">
                <TextField
                  id="name"
                  label="Name, Vorname oder Firma"
                  className="ancho-edit2 "
                  sx={styles}
                  inputProps={fuentes1}
                  InputLabelProps={fuentes2}
                />
              </div>

              <div className="row mt-3 ps-3 pe-3 d-flex justify-content-center   ">
                <TextField
                  id="address"
                  label="E-Mail Adresse"
                  className="ancho-edit2 "
                  sx={styles}
                  inputProps={fuentes1}
                  InputLabelProps={fuentes2}
                />
              </div>

              <div className="row mt-3 ps-3 pe-3 d-flex justify-content-center   ">
                <TextField
                  id="address"
                  label="Telefonnummer"
                  className="ancho-edit2 "
                  sx={styles}
                  inputProps={fuentes1}
                  InputLabelProps={fuentes2}
                />
              </div>

              <div className="row mt-2 mb-2 ps-3 pe-3 d-flex justify-content-start  texto-email  ">
                {/* Wir senden Dir binnen 48h eine Bestätigung und weitere Informationen zu dem Seminar. */}
                Wir melden uns binnen 48h bei Dir.
              </div>

              <div className="row d-flex justify-content-start privacy-modal ps-3 pe-3 mt-1">
                AGBs
              </div>

              <div className="row d-flex justify-content-start texto-AGBS  ps-3 pe-3 ">
                Ich bin mit den AGBs und der Übermittlung meiner Daten zur
                internen Verarbeitung der Open Agile GmbH einverstanden
              </div>

              <div className="row d-flex justify-content-start ps-3 pe-3 mt-1">
                <RadioGroup name="use-radio-group" defaultValue="Ja">
                  <MyFormControlLabel
                    value="Ja"
                    label="Ja"
                    control={<Radio sx={radio_button} />}
                  />
                  <MyFormControlLabel
                    value="Nein"
                    label="Nein"
                    control={<Radio sx={radio_button} />}
                  />
                </RadioGroup>
              </div>

              <div className="row d-flex justify-content-start ps-3 mt-3 pe-3  ">
                <TextField
                  id="outlined-multiline-flexible"
                  label="Sende uns eine Nachricht"
                  multiline
                  maxRows={4}
                  className="ancho-edit2 "
                  sx={styles}
                  inputProps={fuentes1}
                  InputLabelProps={fuentes2}
                />
              </div>

              <div className="row d-flex justify-content-end mt-4 pe-3 mb-2">
                <div className="col-3">
                  <button
                    type="button"
                    className="btn btn-secondary boton_modal_form2 "
                    data-bs-dismiss="modal">
                    ABSENDEN
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const eliminar_anno = (fecha) => {
  if (fecha === undefined) return "";
  return fecha.substring(0, 6);
};
