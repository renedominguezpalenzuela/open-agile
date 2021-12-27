
import { crashkurse_beschreibung_details } from "../../../../data/data_crashkurse_beschreibung_details";

export default function handler(req, res) {
  

  const filtered = crashkurse_beschreibung_details.find(({id}) => id === req.query.id);

  if (filtered) {
    res.status(200).json(filtered);
  } else {
    res.status(404).json({ message: `Articulo con ${id} no existe` });
  }


}
