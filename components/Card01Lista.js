import Card01 from "./Card01";

export default function Card01Lista({ lista_cards, titulo_magenta }) {

  return (
<>

 <div className="row mt-5 pt-5  row-cols-1 row-cols-md-4  justify-content-center"> 


   {lista_cards.map (unCard=>{
        return  (
           <>
           
           {titulo_magenta!=undefined && titulo_magenta &&
           <Card01 key={unCard.id} id={unCard.id} imagen={unCard.image} titulo2={unCard.title}  texto={unCard.text} link={unCard.link} />}

           { (titulo_magenta===undefined || !titulo_magenta) &&
           <Card01 key={unCard.id} id={unCard.id} imagen={unCard.image} titulo={unCard.title} titulo2={unCard.title2} texto={unCard.text} link={unCard.link} />}
        </>
        ) 
        }   
   )}

   
  </div>
</>
  );
}
