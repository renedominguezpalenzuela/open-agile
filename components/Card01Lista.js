import Card01 from "./Card01";

export default function Card01Lista({ lista_cards }) {

 
  return (
<>

 <div className="row mt-5 pt-5  row-cols-1 row-cols-md-4  justify-content-center"> 


   {lista_cards.map (unCard=>{
        return  <Card01 key={unCard.id} id={unCard.id} imagen={unCard.image} titulo={unCard.title} texto={unCard.text} />
        }   
   )}

   
  </div>
</>
  );
}
