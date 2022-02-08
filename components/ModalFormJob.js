import React, { useRef } from "react";
import { formEmail } from "../config";

import axios from "axios";
import { useState } from "react";
import { servidor_url } from "../config";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { sendFormularioAndFile } from "../components/global/sendFormularioAndFile";

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

export default function ModalFormJob({
  id,
  titulo,
  quartal,
  date1,
  date2,
  day,
  frase,
  job_title
}) {
  const [nombre, setNombre] = React.useState("");
  const handleChangeNombre = (event) => {
    setNombre(event.target.value);
  };

  const [email, setEmail] = React.useState("");
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const [telephone, setTelephone] = React.useState("");
  const handleChangeTelephone = (event) => {
    setTelephone(event.target.value);
  };

  const [mensaje, setMensaje] = React.useState("");
  const handleChangeMensaje = (event) => {
    setMensaje(event.target.value);
  };

  const [condicionesAGB, setCondicionesAGB] = React.useState("");
  const handleChangeCondicionesAGB = (event) => {
    setCondicionesAGB(event.target.value);
  };

  const [textoDialogo, setTextoDialogo] = React.useState("");

  //dialogo
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const texto_EnviadoCorrectamente = "Vielen Dank für Deine Bewerbung, wir melden uns in Kürze bei Dir. Dein Open Agile Team.";
  const texto_ErrorEnDatosCheckBox = "Bitte bestätige die AGBs, um das Formular absenden zu können.";
  const texto_ErrorEnDatos = "Bitte überprüfe Deine Eingaben und sende das Formular erneut ab.";
  const texto_ErrorEnServidor = "Kontaktformular Error, bitte versuchen Sie es erneut.";
  const texto_noAttachment = "Bitte füge einen Lebenslauf hinzu und sende das Formular erneut ab. Dein Open Agile Team";


  const eventoBotonEnviar = async () => {
    if (condicionesAGB != "Ja") {
      setTextoDialogo(texto_ErrorEnDatosCheckBox);
      handleClickOpen();
      return;
    }

    if (nombre === "" || email === "" || telephone === "" ) {
      setTextoDialogo(texto_ErrorEnDatos);
      handleClickOpen();
      return;
    }




    if (fichero_seleccionado==="" || fichero_seleccionado===". . .") {
      setTextoDialogo(texto_noAttachment);
      handleClickOpen();
      return;
    }

    const subject = "Kontaktformular";
    const DataToSend = {
      from: "Kontakt Formular",
      to: formEmail,
      subject: subject,
      filename: fichero_seleccionado,
      file: ficheroBase64,
      body: `    
      <strong>${job_title}</strong> <br/>         
     <strong>Name, Vorname: </strong> ${nombre} <br />
     <strong>E-Mail Adresse: </strong> ${email} <br />
     <strong>Telefonnummer: </strong> ${telephone} <br />
     <strong>Nachricht: </strong> ${mensaje} <br />`,
    };
    

    
    const respuesta = await sendFormularioAndFile(DataToSend);
   
    if (respuesta.statusText === "OK") {
      setTextoDialogo(texto_EnviadoCorrectamente);
      handleClickOpen();
      return;
    }


    if (respuesta.data.cod_resp === "000") {
      setTextoDialogo(texto_EnviadoCorrectamente);
      handleClickOpen();
    } else {
      setTextoDialogo(texto_ErrorEnServidor + ": " + respuesta.data.cod_resp + " - "+respuesta.data.msg);
      handleClickOpen();
    }

  };

  // Subiendo fichero al servidor
  const [ficheroPath, setFicheroPath] = useState(null);
  const [ficheroBase64, setFicheroBase64] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

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
  const [fichero_seleccionado, setfichero_seleccionado] = React.useState(". . .");

  const handleChange1 = (event) => {
    setValue1(event.target.value);
  };

  const handleChange2 = (event) => {
    setValue2(event.target.value);
  };

  const handleChange3 = (event) => {
    setValue3(event.target.value);
  };

  const handleChange4 = (event) => {
    setfichero_seleccionado(event.target.value);
  };

  const hiddenFileInput = useRef(null);

  const eventoCambioNombreFichero = (event) => {
    if (event.target.files && event.target.files[0]) {
      const fichero_path_usuario = event.target.files[0];
      setfichero_seleccionado(fichero_path_usuario.name);

      setFicheroPath(fichero_path_usuario);

      var reader = new FileReader();
      reader.onload = function (event) {
        let fichero = event.target.result.toString();
        let base64data = btoa(fichero);
        setFicheroBase64(base64data);
      };
      reader.readAsBinaryString(fichero_path_usuario);
    }
  };

  const eventoBotonSubirFichero = (event) => {
    hiddenFileInput.current.click();
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

  const styles2 = {
    "& .MuiInputBase-root": {
      // minHeight: 100

      "& input": {
        textAlign: "left",
        letterSpacing: "0.06vw",
        color: "#6B6B74",
        fontFamily: "Montserrat-Light",
      },
    },

    "& .MuiOutlinedInput-root": {
      color: "#6B6B74",
      backgroundColor: "#ECE7E7",

      "& > fieldset": {
        borderColor: "#ECE7E7",
      },
    },
    "& .MuiOutlinedInput-root:hover": {
      "& > fieldset": {
        borderColor: "#e4207864",
      },
    },

    "& .MuiFormLabel-root": {
      color: "#ffffff",
      fontFamily: "Montserrat-Regular",
    },
  };

  return (
    <>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        sx={{ paddingRight: "0px" }}
        id={`contactForm${id}`}
        tabIndex="-1">
        <div className="modal-dialog modal-dialog-job">
          <div className="modal-content ancho-modal-cursos">
            <div className="modal-header">
              <div className="row  ms-2 me-2 w-100 d-flex justify-content-start">
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
                  label="Name, Vorname"
                  className="ancho-edit2 "
                  sx={styles}
                  inputProps={fuentes1}
                  InputLabelProps={fuentes2}
                  value={nombre}
                  onChange={handleChangeNombre}
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
                  value={email}
                  onChange={handleChangeEmail}
                />
              </div>

              <div className="row mt-3 ps-3 pe-3 d-flex justify-content-center   ">
                <TextField
                  id="telefone"
                  label="Telefonnummer"
                  className="ancho-edit2 "
                  sx={styles}
                  inputProps={fuentes1}
                  InputLabelProps={fuentes2}
                  value={telephone}
                  onChange={handleChangeTelephone}
                />
              </div>

              <div className="row mt-2 mb-2 ps-3 pe-3 d-flex justify-content-center  texto-AGBS  ">
                Wir senden Dir binnen 72h eine Bestätigung und weitere
                Informationen
              </div>

              <div className="row d-flex justify-content-start privacy-modal ps-3 pe-3 mt-1">
                AGBs
              </div>

              <div className="row d-flex justify-content-start texto-AGBS  ps-3 pe-3 ">
                Ich bin mit den AGBs und der Übermittlung meiner Daten zur
                internen Verarbeitung der Open Agile GmbH einverstanden
              </div>

              <div className="row d-flex justify-content-start ps-3 pe-3 mt-1">
                <RadioGroup
                  name="use-radio-group"
                  defaultValue="Ja"
                  value={condicionesAGB}
                  onChange={handleChangeCondicionesAGB}>
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
                  label="Erzähle uns gerne mehr von Dir"
                  multiline
                  rows={2}
                  className=""
                  sx={styles2}
                  inputProps={fuentes1}
                  InputLabelProps={fuentes2}
                  value={mensaje}
                  onChange={handleChangeMensaje}
                />
              </div>

              <div className="row mt-4 ms-3">
                <div className="col-md-6  d-flex justify-content-start align-items-center texto-AGBS">
                  {fichero_seleccionado}
                </div>
              </div>
              <div className="row  g-0  mt-2 mb-2  d-flex flex-wrap justify-content-start">
                {/* <input type="file" className="ocultar" id="customFile" onChange={handleChange4} />       */}
                <input
                  type="file"
                  ref={hiddenFileInput}
                  onChange={eventoCambioNombreFichero}
                  className="ocultar"
                />

                <div className="col mx-3 d-flex justify-content-between botones-jobs-516">
                  <button
                    type="button"
                    className="btn btn-secondary boton_modal_form"
                    onClick={eventoBotonSubirFichero}>
                    Lebenslauf hochladen
                  </button>

                  <button
                    type="button"
                    className="btn btn-secondary boton_modal_form"
                    data-bs-dismiss="modal"
                    onClick={eventoBotonEnviar}>
                    Jetzt Bewerbung absenden
                  </button>
                </div>

                <div className="row d-flex botones-jobs justify-content-center">
                  <button
                    type="button"
                    className="btn btn-secondary boton_modal_form mb-3 col-10"
                    onClick={eventoBotonSubirFichero}>
                    Lebenslauf hochladen
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary boton_modal_form  mb-3 col-10"
                    data-bs-dismiss="modal"
                    onClick={eventoBotonEnviar}>
                    Jetzt Bewerbung absenden
                  </button>
                </div>

                {/* <div className="col-md-5 d-flex justify-content-end"></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        {/* <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle> */}
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {textoDialogo}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

const eliminar_anno = (fecha) => {
  if (fecha === undefined) return "";
  return fecha.substring(0, 6);
};


