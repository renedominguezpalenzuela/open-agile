export default function handler(req, res) {
  fetch("https://js-agileweb-backend.herokuapp.com/api/jobs?populate=%2A")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).json(err));
}
