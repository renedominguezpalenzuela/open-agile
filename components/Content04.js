import styles from "../styles/Home.module.css";
//import Card03 from "./Card03";
import Card03 from "./Card03";
import Card01 from "./Card01";

//----------------------------------------------------------------------------------------------------------
//            Area de Contenido:  Blog
//----------------------------------------------------------------------------------------------------------



export default function Content04 ({lista_cards} ) {
  return (
<>


  <section>
    <div id="blog" className="font_title mt-5 ms-4">UNSER BLOG</div>
    <div className="font_card_texto mt-2 ms-4">NEW WORK, LEADERSHIP & MORE</div>

  <div className="row g-5"> 
   


     {lista_cards.map (unCard=> (     
<>
           <div className="d-xl-none">
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-6">
                                <Card01 key={unCard.id} id={unCard.id} imagen={unCard.image} titulo={unCard.title} texto={unCard.text}/>
                            </div>
                        </div>
           </div>  
          <div className="d-none d-xl-block  ">          
            <Card03 key={unCard.id} id={unCard.id} imagen={unCard.image} titulo={unCard.title} texto={unCard.text} />     
           </div> 
  </>   )
         
     )}   
   


   </div>
   
</section>

</>
  );
}



