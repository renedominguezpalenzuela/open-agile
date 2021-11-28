// import styles from "../styles/Home.module.css";

export default function Card04({
 
  texto,
  link
}) {


 
  return (
<>



{/* <!--Card--> */}
          



  <div className="col-5  d-flex justify-content-center ">
    <div className="card  w-100 card-rounded   my_card m-5">

      

      <div className="card-body text-center     ">
     
        <p className="card-text font_card_title m-1">{texto}</p>
        <p className="card-text font_card_title m-1">{texto}</p>

        
      </div>

  

    </div>

  
  </div>


</>
  );
}
