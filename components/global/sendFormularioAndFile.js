import { servidor_url } from "../../config";
import axios from "axios";

const qs = require("qs");

const sendFormularioAndFile = async (datos) => {
  const url = `${servidor_url}/api/formAndFile`;


   let bodyData = qs.stringify(datos);


  try {
    const respuesta_api = await axios.post(url, bodyData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return respuesta_api;
   
  } catch (err) {
    console.log("Error in sendFormulario: " + err);
  }
};

module.exports.sendFormularioAndFile = sendFormularioAndFile;
