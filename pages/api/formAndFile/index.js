const qs = require("qs");
import axios from "axios";

export default async function handler(req, res) {
  if (req.method != "POST") {
    res.status(405).json({ cod_resp: "901", msg: "Only POST request" });
  }

  const remoteServerUrl = "https://api.jesamconsulting.com/.netlify/functions/send-email-v2"

 

  try {
        
    const respuesta_api = await axios.post(remoteServerUrl, req.body, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    
    const data = await respuesta_api.data; //json();

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
    console.log("Error api/forms: " + err.message);
    res.status(200).json({ cod_resp: "950", msg: err.message });
  }
}


// const qs = require("qs");
// import axios from "axios";

// export default async function handler(req, res) {
//   if (req.method != "POST") {
//     res.status(405).json({ cod_resp: "901", msg: "Only POST request" });
//   }

//   const remoteServerUrl =
//     "https://api.jesamconsulting.com/.netlify/functions/send-email";

//   try {
//     //Aqui se necesita un json
//     let bodyData = qs.stringify(req.body);

    
//     const respuesta_api = await axios.post(remoteServerUrl, bodyData, {
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//     });

    

//     const data = await respuesta_api.data; //json();

//     if (!data) {
//       res
//         .status(200)
//         .json({ cod_resp: "902", msg: "No data received from server" });
//     }

//     if (data.error != "" && data.error != undefined) {
//       res.status(200).json({ cod_resp: "000", msg: "mail sent correctly!!!" });
//     } else {
//       res.status(200).json({ cod_resp: "903", msg: "Error: " + data.error });
//     }
//   } catch (err) {
//     console.log("Error api/forms: " + err.message);
//     res.status(200).json({ cod_resp: "950", msg: err.message });
//   }
// }






// import axios from "axios";
// global.atob = require("atob");

// const Blob = require('node-blob');



// var FormData = require("form-data");

// export default async function handler(req, res) {
//   if (req.method != "POST") {
//     res.status(405).json({ cod_resp: "901", msg: "Only POST request" });
//   }

//   const remoteServerUrl =
//     "https://api.jesamconsulting.com/.netlify/functions/send-email-v2";

//   try {


//     let fichero_base_64 =req.body.fileBase64;
//     console.log("Fichero");
//     console.log(fichero_base_64);
//     var decodedFile = DataURIToBlob(fichero_base_64);

//     var data_formulario = new FormData();
//     data_formulario.append("to", req.body.to);
//     data_formulario.append("from", req.body.from);
//     data_formulario.append("subject", req.body.subject);
//     data_formulario.append("body", req.body.body);
//     data_formulario.append("file", decodedFile, {
//       filename: req.body.fileName,
//     });


//   console.log("Sending request");
//     const respuesta_api = await axios.post(remoteServerUrl, data_formulario, {
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//     });

//       console.log("Respuesta");
//     console.log(respuesta_api);


//     const data = await respuesta_api.data; 
//   console.log("Respuesta");
//     console.log(data)

  

//     if (!data) {
//       res
//         .status(200)
//         .json({ cod_resp: "902", msg: "No data received from server" });
//     }

//     if (data.error != "" && data.error != undefined) {
//       res.status(200).json({ cod_resp: "000", msg: "mail sent correctly!!!" });
//     } else {
//       res.status(200).json({ cod_resp: "903", msg: "Error: " + data.error });
//     }
//   } catch (err) {
//     console.log("Error api/formsfile: " + err.message);
//     console.log(err)
//     res.status(200).json({ cod_resp: "950", msg: err.message });
//   }
// }




// var imgBase64 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCA..." 


//  function DataURIToBlob(dataURI) {
//         const splitDataURI = dataURI.split(',')
//         const byteString = splitDataURI[0].indexOf('base64') >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1])
//         const mimeString = splitDataURI[0].split(':')[1].split(';')[0]

//         const ia = new Uint8Array(byteString.length)
//         for (let i = 0; i < byteString.length; i++)
//             ia[i] = byteString.charCodeAt(i)

//         return new Blob([ia], { type: mimeString })
       
//       }