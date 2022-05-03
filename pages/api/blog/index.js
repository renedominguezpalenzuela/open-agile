export default function handler(req, res) {
  fetch("https://js-agileweb-backend.herokuapp.com/api/blogs?populate=%2A")
    .then((response) => response.json())
    .then((data) => {
      const result = data.data
        .sort(function (a, b) {
          new Date(a.attributes.publishedAt) -
            new Date(b.attributes.publishedAt);
        })
        .reverse();
      res.status(200).json({ data: result });
    })
    .catch((err) => res.status(400).json(err));
}
