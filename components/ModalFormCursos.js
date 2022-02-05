import axios from "axios";
import React, { useState } from "react";
import { servidor_url } from "../config";
import { formEmail } from "../config";

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

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

// import styles from "../styles/Home.module.css";

import TextField from "@mui/material/TextField";
// import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";

import Box from "@mui/material/Box";

import Autocomplete from "@mui/material/Autocomplete";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { sendFormulario } from "../components/global/sendFormulario";

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

export default function ModalFormCursos({
  id,
  titulo,
  quartal,
  date1,
  date2,
  day,
  frase,
  precio,
  nombre_curso,
  date_list
}) {
  //Texto que aparece en el edit luego de que el usuario escribe
  //inputProps={fuentes1}
  const [vorname, setVorname] = React.useState("");
  const handleChangeVorname = (event) => {
    setVorname(event.target.value);
  };

  const [nachname, setNachname] = React.useState("");
  const handleChangeNachname = (event) => {
    setNachname(event.target.value);
  };

  const [strase1, setStrase1] = React.useState("");
  const handleChangeStrase1 = (event) => {
    setStrase1(event.target.value);
  };

  const [hausnummer1, setHausnummer1] = React.useState("");
  const handleChangeHausnummer1 = (event) => {
    setHausnummer1(event.target.value);
  };

  const [postleitzahls1, setPostleitzahls1] = React.useState("");
  const handleChangePostleitzahls1 = (event) => {
    setPostleitzahls1(event.target.value);
  };

  const [ort1, setOrt1] = React.useState("");
  const handleChangeOrt1 = (event) => {
    setOrt1(event.target.value);
  };

  const [email, setEmail] = React.useState("");
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const [telephone, setTelephone] = React.useState("");
  const handleChangeTelephone = (event) => {
    setTelephone(event.target.value);
  };

  const [comentario, setComentario] = React.useState("");
  const handleChangeComentario = (event) => {
    setComentario(event.target.value);
  };

  const [referencia, setReferencia] = React.useState(1);
  const handleChangeReferencia = (event) => {
    setReferencia(event.target.value);

    
  };

  //Deinne

  const [unternehmen, setUnternehmen] = React.useState("");
  const handleChangeUnternehmen = (event) => {
    setUnternehmen(event.target.value);
  };

  const [strase2, setStrase2] = React.useState("");
  const handleChangeStrase2 = (event) => {
    setStrase2(event.target.value);
  };

  const [hausnummer2, setHausnummer2] = React.useState("");
  const handleChangeHausnummer2 = (event) => {
    setHausnummer2(event.target.value);
  };

  const [postleitzahls2, setPostleitzahls2] = React.useState("");
  const handleChangePostleitzahls2 = (event) => {
    setPostleitzahls2(event.target.value);
  };

  const [ort2, setOrt2] = React.useState("");
  const handleChangeOrt2 = (event) => {
    setOrt2(event.target.value);
  };

  const [rabattcode, setRabattcode] = React.useState("");
  const handleChangeRabattcode = (event) => {
    setRabattcode(event.target.value);
  };

  const [condicionesAGB, setCondicionesAGB] = React.useState("");
  const handleChangeCondicionesAGB = (event) => {
    setCondicionesAGB(event.target.value);
  };

  const [textoDialogo, setTextoDialogo] = React.useState("HI");

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const texto_EnviadoCorrectamente = "Vielen Dank für die Kontaktaufnahme, wir melden uns in Kürze bei Dir!";
  const texto_ErrorEnDatosCheckBox = "Bitte bestätige die AGBs.";
  const texto_ErrorEnDatos = "Bitte überprüfe Deine Angaben und sende es noch einmal ab.";
  const texto_ErrorEnServidor = "Kontaktformular Error, bitte versuchen Sie es erneut.";


  const eventoBotonEnviar = async () => {
    if (condicionesAGB != "Ja") {
      setTextoDialogo(texto_ErrorEnDatosCheckBox);
      handleClickOpen();
      return;
    }

    if (
      vorname === "" ||
      nachname === "" ||
      strase1 === "" ||
      hausnummer1 === "" ||
      postleitzahls1 === "" ||
      ort1 === "" ||
      email === "" ||
      telephone === "" ||
      comentario === "" ||
      referencia === "" ||
      unternehmen === "" ||
      strase2 === "" ||
      hausnummer2 === "" ||
      postleitzahls2 === "" ||
      ort2 === "" ||
      rabattcode === ""
    ) {
      setTextoDialogo(texto_ErrorEnDatos);
      handleClickOpen();
      return;
    }

    const subject = "Kontaktformular Crashkurse";

    const DataToSend = {
      from: "Kontakt Formular",
      to: formEmail,
      subject: subject,
      body: `    
     <strong>Kontaktformular Crashkurse </strong> <br />
     <br>
     <strong>${nombre_curso} </strong> <br/>
     ${fechas_str(date1, date2, date_list)}
     <strong> Deine persönlichen Infos </strong> <br />
     <strong>Vorname: </strong> ${vorname} <br />
     <strong>Nachname: </strong> ${nachname} <br />
     <strong>Straße: </strong> ${strase1} <br />
     <strong>Hausnummer: </strong> ${hausnummer1} <br />
     <strong>Postleitzahl: </strong> ${postleitzahls1} <br />
     <strong>Ort: </strong> ${ort1} <br />
     <strong>E-Mail Adresse: </strong> ${email} <br />
     <strong>Telefonnummer: </strong> ${telephone} <br />
     <strong>Nachricht: </strong> ${comentario} <br />
	   <strong>Woher kennst du uns: </strong> ${referencia} <br />	  
     <br>
     <strong> Deine Rechnungsadresse</strong><br>      
     <strong>Unternehmen: </strong> ${unternehmen} <br />
     <strong>Straße: </strong> ${strase2} <br />
     <strong>Hausnummer: </strong> ${hausnummer2} <br />
     <strong>Postleitzahl: </strong> ${postleitzahls2} <br />
     <strong>Ort: </strong> ${ort2} <br />
     <strong>Rabattcode: </strong> ${rabattcode} <br />      
      `,
    };


    console.log(DataToSend);

    const respuesta = await sendFormulario(DataToSend);
  

   
    if (respuesta.data.cod_resp === "000") {
      setTextoDialogo(texto_EnviadoCorrectamente);
      handleClickOpen();
    } else {
      setTextoDialogo(texto_ErrorEnServidor + ": " + respuesta.data.cod_resp + " - "+respuesta.data.msg);
      handleClickOpen();
    }
  };


  const fechas_str = (date1, date2, date_list)=> {
   if (date_list.length<=1) {
     return `
     <strong>${date1} </strong> <br/>
     <strong>${date2} </strong> <br/>
     `
   } else {
     let fechas = '';

     date_list.map((unaFecha)=>{
       fechas = fechas +  `<strong>${unaFecha.date1} </strong> <br/>
       <strong>${unaFecha.date2} </strong> <br/> <br/>`

     }
  
     )
        return fechas;

   }
  }


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
      fontSize: 12, //Tamno del inoco del radio button
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

  const stilos_combo = {
    "& .MuiInputBase-root": {
      //Aqui arriba es el elemento base - root
      height: 45, //Ancho del edit

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
      // color: "#ffffff", //Color del label
      fontFamily: "Montserrat-Regular",
      fontSize: 13,
    },
  };
  const styles = {
    //  input: { color: 'blue'}, //Color de la fuente al escribir

    // width: { sm: 250, md: 350 }, //Ancho del control

    "& .MuiInputBase-root": {
      //Aqui arriba es el elemento base - root
      height: 45, //Ancho del edit

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

  // const opciones_combo_box = [
  //   { label: "Google Suche", id: 1, value: 1 },
  //   { label: "Google Anzeige", id:2 , value: 2},
  //   { label: "Linkedln", id: 3 , value: 3},
  //   { label: "Podcast", id: 4 , value: 4},
  //   { label: "Meet Up", id: 5 , value: 5},
  //   { label: "Artikel / Blog Beitrag", id: 6, value: 6 },
  //   { label: "Xing", id: 7 , value: 7},
  //   { label: "Empfehlung", id: 8 , value: 8},
  //   { label: "Konferenz", id: 9, value: 9},
  //   { label: "Sonstiges", id: 10 , value: 10},
  // ];

  const opciones_combo_box = [
    "Google Suche",
    "Google Anzeige",
    "Linkedln",
    "Podcast",
    "Meet Up",
    "Artikel / Blog Beitrag",
    "Xing",
    "Empfehlung",
    "Konferenz",
    "Sonstiges",
  ];

  return (
    <>
      <div
        className="modal fade"
        style={{ paddingRigth: "0px !important" }}
        id={`contactForm${id}`}
        tabIndex="-1">
        <div className="modal-dialog  mt-md-5 mt-5 pt-4">
          <div className="modal-content ancho-modal-cursos">
            {/* Header */}
            <div className="modal-header">
              <div className="row   ms-2 me-2   w-100 d-flex justify-content-center">
                <div className="col-md-4 col-6 titulo-card-crashkurse-new d-flex justify-content-center align-items-center">
                  <div className="row d-none d-md-block">{titulo}</div>
                  <div className="row font-title-modal d-block d-md-none">
                    {titulo}
                  </div>
                </div>
                {date1 != undefined &&
                  date2 != undefined &&
                  date1 != "" &&
                  date2 != "" && (
                    <>
                      <div className="d-none d-md-block col-7  subtitulo-card-crashkurse d-flex justify-content-center align-items-center ">
                        {`${eliminar_anno(date1)} - ${date2}`}
                      </div>
                      <div className="d-block d-md-none col-7 h6 subtitulo-card-crashkurse2 d-flex justify-content-center align-items-center ">
                        {`${eliminar_anno(date1)} - ${date2}`}
                      </div>
                    </>
                  )}
              </div>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>

            {/* Header  END */}

            <div className="modal-body color-body-modal ">
              <div className="row  g-0 ">
                <div className="col-12 col-md-6 ">
                  <div className="row d-flex  ps-3 pe-3 justify-content-start titulo-modal ">
                    {/* {frase} */}
                    Deine persönlichen Infos
                  </div>

                  <div className="row mt-2 ps-3 pe-3 d-flex justify-content-center   ">
                    <TextField
                      id="name"
                      label="Vorname"
                      className="ancho-edit2 "
                      sx={styles}
                      inputProps={fuentes1}
                      InputLabelProps={fuentes2}
                      value={vorname}
                      onChange={handleChangeVorname}
                    />
                  </div>
                  <div className="row mt-2 ps-3 pe-3 d-flex justify-content-center   ">
                    <TextField
                      id="name"
                      label="Nachname"
                      className="ancho-edit2 "
                      sx={styles}
                      inputProps={fuentes1}
                      InputLabelProps={fuentes2}
                      value={nachname}
                      onChange={handleChangeNachname}
                    />
                  </div>

                  <div className="row d-flex justify-content-start ps-3 mt-2 pe-3  ">
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Straße"
                      className="ancho-edit2 "
                      sx={styles}
                      inputProps={fuentes1}
                      InputLabelProps={fuentes2}
                      value={strase1}
                      onChange={handleChangeStrase1}
                    />
                  </div>

                  <div className="row d-flex justify-content-start ps-3 mt-2 pe-3  ">
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Hausnummer"
                      className="ancho-edit2 "
                      sx={styles}
                      inputProps={fuentes1}
                      InputLabelProps={fuentes2}
                      value={hausnummer1}
                      onChange={handleChangeHausnummer1}
                    />
                  </div>

                  <div className="row d-flex justify-content-start ps-3 mt-2 pe-3  ">
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Postleitzahl"
                      className="ancho-edit2 "
                      sx={styles}
                      inputProps={fuentes1}
                      InputLabelProps={fuentes2}
                      value={postleitzahls1}
                      onChange={handleChangePostleitzahls1}
                    />
                  </div>

                  <div className="row d-flex justify-content-start ps-3 mt-2 pe-3  ">
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Ort"
                      className="ancho-edit2 "
                      sx={styles}
                      inputProps={fuentes1}
                      InputLabelProps={fuentes2}
                      value={ort1}
                      onChange={handleChangeOrt1}
                    />
                  </div>

                  <div className="row mt-2 ps-3 pe-3 d-flex justify-content-center   ">
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

                  <div className="row mt-2 ps-3 pe-3 d-flex justify-content-center   ">
                    <TextField
                      id="address"
                      label="Telefonnummer"
                      className="ancho-edit2 "
                      sx={styles}
                      inputProps={fuentes1}
                      InputLabelProps={fuentes2}
                      value={telephone}
                      onChange={handleChangeTelephone}
                    />
                  </div>

                  <div className="row mt-2 mb-2 ps-3 pe-3 d-flex justify-content-center  texto-AGBS   ">
                    Wir senden Dir binnen 48h eine Bestätigung und weitere
                    Informationen zu dem Crashkurs.
                  </div>

                  <div className="row d-flex justify-content-start privacy-modal ps-3 pe-3 mt-1">
                    AGBs
                  </div>

                  <div className="row d-flex justify-content-start texto-AGBS  ps-3 pe-3 ">
                    Ich bin mit den AGBs und der Übermittlung meiner Daten zur
                    internen Verarbeitung der Open Agile GmbH einverstanden.
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

                  <div className="row d-flex justify-content-start ps-3 mt-2 pe-3  ">
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Sende uns eine Nachricht"
                      className="ancho-edit2 "
                      sx={styles}
                      inputProps={fuentes1}
                      InputLabelProps={fuentes2}
                      value={comentario}
                      onChange={handleChangeComentario}
                    />
                  </div>

                  <div className="row d-flex justify-content-start ps-1 mt-2 pe-1  ">
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={opciones_combo_box}
                      sx={stilos_combo}
                      onChange={(event, value) =>
                        
                        setReferencia(value)
                      } // prints the selected value
                      // getOptionLabel={(option) => (option ? option.name : "")}
                      //  getOptionSelected={(option, value) => option === value.value}

                      // // inputValue={referencia}
                      // onInputChange={handleChangeReferencia}

                      // value={referencia}
                      // onChange={handleChangeReferencia}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Woher kennst du uns?"
                          InputLabelProps={fuentes2}
                        />
                      )}
                    />
                  </div>
                </div>

                <div className="col-md-6 col-12">
                  <div className="row d-flex pt-md-0 pt-4 ps-3 pe-3 justify-content-start titulo-modal  ">
                    Deine Rechnungsadresse
                  </div>

                  <div className="row d-flex justify-content-start ps-3 mt-2 pe-3  ">
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Unternehmen"
                      className="ancho-edit2 "
                      sx={styles}
                      inputProps={fuentes1}
                      InputLabelProps={fuentes2}
                      value={unternehmen}
                      onChange={handleChangeUnternehmen}
                    />
                  </div>

                  <div className="row d-flex justify-content-start ps-3 mt-2 pe-3  ">
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Straße"
                      className="ancho-edit2 "
                      sx={styles}
                      inputProps={fuentes1}
                      InputLabelProps={fuentes2}
                      value={strase2}
                      onChange={handleChangeStrase2}
                    />
                  </div>

                  <div className="row d-flex justify-content-start ps-3 mt-2 pe-3  ">
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Hausnummer"
                      className="ancho-edit2 "
                      sx={styles}
                      inputProps={fuentes1}
                      InputLabelProps={fuentes2}
                      value={hausnummer2}
                      onChange={handleChangeHausnummer2}
                    />
                  </div>

                  <div className="row d-flex justify-content-start ps-3 mt-2 pe-3  ">
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Postleitzahl"
                      className="ancho-edit2 "
                      sx={styles}
                      inputProps={fuentes1}
                      InputLabelProps={fuentes2}
                      value={postleitzahls2}
                      onChange={handleChangePostleitzahls2}
                    />
                  </div>

                  <div className="row d-flex justify-content-start ps-3 mt-2 pe-3  ">
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Ort"
                      className="ancho-edit2 "
                      sx={styles}
                      inputProps={fuentes1}
                      InputLabelProps={fuentes2}
                      value={ort2}
                      onChange={handleChangeOrt2}
                    />
                  </div>

                  <div className="row d-flex justify-content-start ps-3 mt-2 pe-3  ">
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Rabattcode (Optional)"
                      className="ancho-edit2 "
                      sx={styles}
                      inputProps={fuentes1}
                      InputLabelProps={fuentes2}
                      value={rabattcode}
                      onChange={handleChangeRabattcode}
                    />
                  </div>

                  <div className="row   mt-4 g-0 ">
                    <div className="col-1  ">
                      <div className="vertical-line-left"></div>
                    </div>
                    <div className="col-10  d-flex justify-content-start">
                      <div className="row  pt-2  pb-2 ">
                        <div className="col-12  texto-AGBS  ">
                          {nombre_curso}
                        </div>
                        <div className="col-12 texto-AGBS   ">{precio}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row d-flex justify-content-end mt-4 pe-3 mb-2">
                <div className="col-md-6 col-lg-4">
                  <button
                    type="button"
                    className="btn btn-secondary boton_modal_form"
                    data-bs-dismiss="modal"
                    onClick={eventoBotonEnviar}>
                     Jetzt kostenpflichtig anmelden
                  </button>
                </div>
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
