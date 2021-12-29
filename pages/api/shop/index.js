// import { blogs } from "../../../data/data";

import { shop_details } from "../../../data/data_shop_details";

export default function handler(req, res) {
  
  
  res.status(200).json(shop_details);
}
