


import {quiz_details } from "../../../data/data_quiz_details";

export default function handler(req, res) {


  if (quiz_details) {
    res.status(200).json(quiz_details);
  } else {
    res.status(404).json({ message: `Articulo con ${id} no existe` });
  }


}
