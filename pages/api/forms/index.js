
const qs = require("qs");
import axios from "axios";

export default async function handler(req, res) {
  if (req.method != "POST") {
    res.status(200).json({ cod_resp: "901", msg: "Only POST request" });
  }

  const remoteServerUrl =
    "https://api.jesamconsulting.com/.netlify/functions/send-email";

  // to: "kontakt@open-agile.de",
  const sendData = {
    from: "Kontakt Formular",
    to: "renedp1975@gmail.com",
    subject: "Newsletter Kontaktformular",
    body: `    
      <strong>Name: </strong> ${req.body.nombre} <br />
      <strong>Email: </strong> ${req.body.correo} <br />   
      `,
    // <strong>Phone: </strong> 123456789 <br />
    // <strong>Zip code: </strong> zipcide <br />
    // <strong> Content </strong> <br />
    // Cuerpo del mensaje `
  };



  try {
    let bodyData = qs.stringify(sendData);
    const respuesta_api = await axios.post(remoteServerUrl, bodyData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    const data = await respuesta.json();

    if (!data) {
      res
        .status(200)
        .json({ cod_resp: "902", msg: "No data received from server" });
    }

    if (data.error != "") {
      res.status(200).json({ cod_resp: "000", msg: "mail sent correctly!!!" });
    } else {
      res.status(200).json({ cod_resp: "903", msg: "Error: " + data.error });
    }
  } catch (err) {
    res.status(200).json({ cod_resp: "950", msg: err.message });
  }
}

