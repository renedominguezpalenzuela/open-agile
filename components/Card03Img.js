export default function Card03Img({ imagen, texto_alt="" }) {


  
  return (
    <>
        <img className="img-fluid  shadow-lg"  src={`img/${imagen}`} alt={texto_alt}/>
    </>
  );
}
