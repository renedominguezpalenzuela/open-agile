export default function handler(req, res) {
   fetch("https://openagilestrapi.herokuapp.com/api/teams?populate=%2A")
     .then(response => response.json())
     .then(data => {
        res.status(200).json(data.data);
     })
     .catch(err =>
       res.status(400).json(err)
     )
}
