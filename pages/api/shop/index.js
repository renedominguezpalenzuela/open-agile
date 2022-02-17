export default function handler(req, res) {
  fetch("https://js-agileweb-backend.herokuapp.com/api/shops?populate=%2A")
    .then(response => response.json())
    .then(data => {
      res.status(200).json(data.data);
    })
    .catch(err =>
      res.status(400).json(err)
    )
}
