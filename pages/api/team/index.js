import {team_details  } from "../../../data/data_team_details";


 

export default function handler(req, res) {
   res.status(200).json(team_details);
}
