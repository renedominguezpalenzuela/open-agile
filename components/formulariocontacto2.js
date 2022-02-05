import React, { useState } from "react";
import TextField from "@mui/material/TextField";
// import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import axios from "axios";

import { sendFormulario } from "../components/global/sendFormulario";

import { pink } from "@mui/material/colors";

import { servidor_url } from "../config";
import { formEmail } from "../config";

import { AlertDialogForms } from "./AlertDialogForms";

export default function FormularioContacto2() {
  const [checked1, setChecked1] = useState(false);
  const [nombre, setNombre] = React.useState("");
  const [correo, setCorreo] = React.useState("");
  const [textoDialogo, setTextoDialogo] = React.useState("");

  const handleChange1 = (event) => {
    setChecked1(event.target.checked);
  };

  const handleChangeNombre = (event) => {
    setNombre(event.target.value);
  };

  const handleChangeCorreo = (event) => {
    setCorreo(event.target.value);
  };

  //dialogo
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const texto_EnviadoCorrectamente = "Vielen Dank für Deine Anmeldung!";
  const texto_ErrorEnDatosCheckBox =
    "Bitte bestätige die AGBs, um Dich für unseren Newsletter anzumelden.";
  const texto_ErrorEnDatos =
    "Bitte überprüfe Deine Angaben und sende es noch einmal ab.";
  const texto_ErrorEnServidor =
    "Kontaktformular Error, bitte versuchen Sie es erneut.";
    

  const eventoBotonEnviar = async () => {
    if (nombre === "" || correo === "") {
      

      setTextoDialogo(texto_ErrorEnDatos);
      handleClickOpen();
      return;
    }

    if (!checked1) {
      
      setTextoDialogo(texto_ErrorEnDatosCheckBox);
      handleClickOpen();
      return;
    }

    const subject = "Newsletter Kontaktformular";

    const DataToSend = {
      from: "Kontakt Formular",
      to: formEmail,
      subject: "Newsletter Kontaktformular",
      body: `    
      <strong>Name: </strong> ${nombre} <br />
      <strong>Email: </strong> ${correo} <br />   
      `
    };

    const respuesta = await sendFormulario(DataToSend);

    console.log("Respuesta");
    console.log(respuesta);
    // const respuesta_json =await respuesta.json()

    // if (respuesta.statusText === "OK") {
    //   setTextoDialogo(texto_EnviadoCorrectamente);
    //   handleClickOpen();
    //   return;
    // }

    

    if (respuesta.data.cod_resp === "000") {
      setTextoDialogo(texto_EnviadoCorrectamente);
      handleClickOpen();
    } else {
      setTextoDialogo(texto_ErrorEnServidor + ": " + respuesta.data.cod_resp + " - "+respuesta.data.msg);
      handleClickOpen();
    }
  };

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
      color: "#ffffff", //Color del label
    },
  };

  const fuentes1 = {
    style: {
      //fontSize: 11
      fontSize: 10,
      textAlign: "left", ///Text Align
      letterSpacing: "0.06vw", //espaciado de letras luego d escribir
      color: "#ffffff",
      fontFamily: "Montserrat-Light",
    },
  };

  const fuentes = {
    style: { fontSize: 10 },
  };

  const styles3 = {
    //  marginLeft: '7vw',

    ".MuiFormControlLabel-label": {
      fontFamily: "Montserrat-Regular",
      fontSize: 11,
      color: "#ffffff",
      // paddingLeft: 2
      // marginLeft: '5vw'
    },
  };

  const stylesCuadrado = {
    color: "#ffffff",
    // left:'6vw',  //contrla distancia entre texto y check box, nueve el checkbox
    "&.Mui-checked": { color: "#e42078" },
  };

  const stiloTexto = {
    "MuiFormControlLabel-root": {
      fontSize: 100,

      "& .MuiFormControlLabel-label": {
        color: "#ffffff",
      },
    },
  };

  return (
    <>
      {/* Mostrar si es mayor que LG */}

      <div className="bannerformulario">
        <div className="font_title_formulario  item-titulo1-formulario ">
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
            value={nombre}
            onChange={handleChangeNombre}
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
            value={correo}
            onChange={handleChangeCorreo}
          />
        </div>{" "}
        <div className="group  item-boton1  ">
          <button
            type="button"
            className="btn boton_formulario ancho-boton alto-boton"
            onClick={eventoBotonEnviar}>
            ANMELDEN
          </button>
        </div>
        <div className=" item-check ">
          <FormControlLabel
            sx={styles3}
            className=" color_magenta   "
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
          />
        </div>
      </div>
      {/* Refactorizar */}
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
