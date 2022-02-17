import { backend_url } from "../../config";
import axios from "axios";

const qs = require("qs");

const sendFormulario = async (datos) => {
  const url = `${backend_url}/api/forms`;

  let bodyData = qs.stringify(datos);

  try {
    const respuesta_api = await axios.post(url, bodyData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return respuesta_api;
  } catch (err) {
    ////console.log("Error in sendFormulario: " + err);
  }
};

module.exports.sendFormulario = sendFormulario;
