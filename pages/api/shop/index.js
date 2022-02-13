// import { blogs } from "../../../data/data";

import { shop_details } from "../../../data/data_shop_details";

export default function handler(req, res) {
  fetch("https://js-agileweb-backend.herokuapp.com/api/shops?populate=%2A")
    .then(response => response.json())
    .then(data => {
      console.log(data.data[0].attributes.image);
      res.status(200).json(data.data);
    })
    .catch(err =>
      res.status(400).json(err)
    )
}
