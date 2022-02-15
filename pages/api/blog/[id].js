export default function handler(req, res) {
  const url =
    "https://js-agileweb-backend.herokuapp.com/api/blogs?populate=%2A";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const blogId = data.data.filter((item) => item.attributes.slug == req.query.id)[0];
      const index = data.data.indexOf(blogId);
      const before = index > 0 ? index - 1 : data.data.length - 1;
      const next = index < data.data.length - 1 ? index + 1 : 0;
      
      res.status(200).json({
        data: blogId,
        before: data.data[before],
        next: data.data[next],
      });
    })
    .catch((err) => res.status(400).json(err));
}
