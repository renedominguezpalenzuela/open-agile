// import styles from "../styles/Home.module.css";

export default function Card04({ datos }) {
  const { id, quartal, date1, date2, day, link } = datos;

  return (
    <>
      <div className="  pt-5 pb-5 mb-5 d-flex justify-content-center ">
        <div className="card text-center my_card-crashkurse ">
          <div className="card-header  ">
          
          <div className="row titulo-card-crashkurse  d-flex justify-content-center">
             {quartal}. Quartal 
          </div>

           <div className="row  subtitulo-card-crashkurse   d-flex justify-content-center">
              {day}
            </div>

          </div>
          <div className="card-body color-body ">
           <a href="/contact" className="font_card_fechas ">
              <div className="row  fechas-card-crashkurse d-flex justify-content-center pt-2 m-2">
                {date1}
              </div>
              <div className="row fechas-card-crashkurse d-flex justify-content-center pb-2 m-2">
                {date2}
              </div>
            </a>
           
          </div>
           <a href="/contact">
          <div className="card-footer card-footer-crashkurse">JETZT AMNELDEN...</div>
          </a>
        </div>
      </div>
    </>
  );
}


