import { servidor_url } from "../../config";

const sendFormularioNewsLetter =async (datos) => {
   const url = `${servidor_url}/api/forms`;
   const res = await fetch(url);
   const vlog =  await res.json();

  try {
    const res =   await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos),
  })

   const json = await  res.json();

   console.log("Respuesta " + json)
   
  } catch(err) {
       console.log("Error "+err);
     //Error
  }

  console.log("SSS");

  return;
};

 export default sendFormularioNewsLetter;
