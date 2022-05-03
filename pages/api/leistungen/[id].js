export default function handler(req, res) {
  fetch(
    `https://js-agileweb-backend.herokuapp.com/api/leistungens?populate=%2A`
  )
    .then((response) => response.json())
    .then((data) => {
      const response = data.data.filter(
        (item) => item.attributes.slug === req.query.id
      )[0];
      res.status(200).json({ data: response });
    })
    .catch((err) => res.status(400).json(err));
}
