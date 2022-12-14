export default function handler(req, res) {
  fetch(
    "https://openagilestrapi.herokuapp.com/api/leistungens?populate=%2A"
  )
    .then((response) => response.json())
    .then((data) => {
      const result = data.data.sort(function (a, b) {
        return a.id - b.id;
      });
      res.status(200).json({ data: result });
    })
    .catch((err) => res.status(400).json(err));
}
