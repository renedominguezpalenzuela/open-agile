export default function Card03Img({ imagen, texto_alt="" }) {


  
  return (
    <>
        <img className="img-fluid  "  src={`img/${imagen}`} alt={texto_alt}/>
    </>
  );
}
