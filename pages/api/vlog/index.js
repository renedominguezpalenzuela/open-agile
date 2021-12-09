import { vlog_details } from "../../../data/data_vlog_details";

export default function handler(req, res) {
   res.status(200).json(vlog_details);
}
