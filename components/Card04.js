// import styles from "../styles/Home.module.css";

export default function Card04({
  
  datos,
 
}) {

  const {id, quartal, date1,  date2,  day, link  } = datos;

 
 
  return (
<>

  <div className="  pt-5 pb-5  d-flex justify-content-center ">
    <div className="card h-100 p-3  card-rounded  my_card m-3">
      <div className="row mt-3 d-flex justify-content-center  font_card_title subrayar ">{quartal}. Quartal</div>
      
      <div className="card-body text-center ">
       <a href="#" className="font_card_fechas">
        <div className="row d-flex justify-content-center  m-2">{date1}</div>
        <div className="row d-flex justify-content-center  m-2">{date2}</div>
       </a> 
        <div className="row d-flex justify-content-center font_card_title mt-4">{day}</div>
      </div>

         {/* <a href={`/${link}/${id}`} > */}
      <div className="card-footer text-center pb-4 pt-4  ">
          <a href="#" >
        <button type="button" className="btn    btn-card font-btn-card   ">Jetzt lesen...</button>
      </a>
      </div>
    </div>
  </div>

</>
  );
}
