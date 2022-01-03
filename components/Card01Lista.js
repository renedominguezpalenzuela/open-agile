import Card01 from "./Card01";
import React from "react";

export default function Card01Lista({ lista_cards, titulo_magenta }) {

  return (
<>

 <div className="row mt-5 pt-3   justify-content-center"> 


   {lista_cards.map ((unCard, index)=>{
        return  (
                // <>
                <React.Fragment key={index}>
                  {titulo_magenta!=undefined && titulo_magenta &&
                  <Card01 key={index} id={unCard.id} imagen={unCard.image} titulo2={unCard.title}  texto={unCard.text} link={unCard.link} />}

                  { (titulo_magenta===undefined || !titulo_magenta) &&
                  <Card01 key={index} id={unCard.id} imagen={unCard.image} titulo={unCard.title} titulo2={unCard.title2} texto={unCard.text} link={unCard.link} />}
                </React.Fragment>
              // </>
           ) 
        }   
   )}

   
  </div>
</>
  );
}
