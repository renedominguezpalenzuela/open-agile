import { crashkurse_beschreibung_details } from "../../../data/data_crashkurse_beschreibung_details";

export default function handler(req, res) {


  
  
  res.status(200).json(crashkurse_beschreibung_details);
}
