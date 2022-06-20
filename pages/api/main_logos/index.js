export default function handler(req, res) {
  fetch("https://openagilestrapi.herokuapp.com/api/main-logos?populate=%2A")
    .then(response => response.json())
    .then(data => {
      
      res.status(200).json(data);
    })
    .catch(err =>
      res.status(400).json(err)
    )
}
