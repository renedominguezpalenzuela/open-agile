export default function handler(req, res) {
   fetch("https://openagilestrapi.herokuapp.com/api/vlogs?populate=%2A")
     .then(response => response.json())
     .then(data => {
      const result = data.data.sort(function (a, b) {
        return b.id - a.id;
      });
      res.status(200).json(result);
     })
     .catch(err =>
       res.status(400).json(err)
     )
}
