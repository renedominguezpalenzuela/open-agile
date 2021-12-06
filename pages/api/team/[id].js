
import { team_details } from "../../../data/data_team_details";

export default function handler(req, res) {

 
  


//   const filtered = crashkurse_details.filter(({unArticulo}) => unArticulo.id === id);

  const filtered = team_details.find(({id}) => id === req.query.id);

  

  if (filtered) {
    res.status(200).json(filtered);
  } else {
    res.status(404).json({ message: `Articulo con ${id} no existe` });
  }


}
