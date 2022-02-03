import axios from "axios";
var FormData = require("form-data");

export default async function handler(req, res) {
  if (req.method != "POST") {
    res.status(405).json({ cod_resp: "901", msg: "Only POST request" });
  }

  const remoteServerUrl =
    "https://api.jesamconsulting.com/.netlify/functions/send-email-v2";

  try {
    //req.body -- es un json

    let fichero_base_64 = req.body.fileBase64;
    var decodedFile = new Buffer(fichero_base_64, "base64");

    var data_formulario = new FormData();
    data_formulario.append("to", req.body.to);
    data_formulario.append("from", req.body.from);
    data_formulario.append("subject", req.body.subject);
    data_formulario.append("body", req.body.body);
    data_formulario.append("file", decodedFile, {
      filename: req.body.fileName,
    });

    // var config = {
    //   method: "POST",
    //   url: "https://api.jesamconsulting.com/.netlify/functions/send-email-v2",
    //   data: data_formulario,
    //   headers: {
    //     ...data_formulario.getHeaders(),
    //   },
    // };

  console.log("Sending request");
    const respuesta_api = await axios.post(remoteServerUrl, data_formulario, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

      console.log("Respuesta");
    console.log(respuesta_api);


    const data = await respuesta_api.data; //json();
  console.log("Respuesta");
    console.log(data)

  

    if (!data) {
      res
        .status(200)
        .json({ cod_resp: "902", msg: "No data received from server" });
    }

    if (data.error != "" && data.error != undefined) {
      res.status(200).json({ cod_resp: "000", msg: "mail sent correctly!!!" });
    } else {
      res.status(200).json({ cod_resp: "903", msg: "Error: " + data.error });
    }
  } catch (err) {
    console.log("Error api/formsfile: " + err.message);
    console.log(err)
    res.status(200).json({ cod_resp: "950", msg: err.message });
  }
}
