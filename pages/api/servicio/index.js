// import { leistungen } from "../../../data/data";
import { leistungen_details } from "../../../data/data_leistungen_details";

export default function handler(req, res) {
  
  
  res.status(200).json(leistungen_details);
}
