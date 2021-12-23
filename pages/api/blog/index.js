// import { blogs } from "../../../data/data";

import { blog_details } from "../../../data/data_blog_details";

export default function handler(req, res) {
  
  
  res.status(200).json(blog_details);
}
