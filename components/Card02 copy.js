import styles from "../styles/Home.module.css";

let ancho = 540;

export default function Card02({
  id,
  titulo,
  texto,
  imagen,
  texto_boton,
  texto_alt,
}) {
  return (
<>



  <div className="row g-0 d-flex justify-content-center">

    <div className="col-4">


    </div>

    <div className="col-6">
      <div className="row">
      
        <div className="col-11 border ">
         
          <div className="card shadow bg-body m-5 p-5  ">
            <div className="">
            <img src={`img/${imagen}`} alt={"${texto_alt}"} className="img-fluid img_carrusel_zindex" alt="..."/>
          </div>
            <div className="card-title ">
              <div className=" font_card_title ">
                <p >So entwickeln Unterneh men Purpose und Vision</p>
              </div>

              <div className=" font_card_texto ms-3">
                  NEWSROOM        
              </div>
            </div>

            <div className="card-body ">
              <div className="row font_carrusel ms-3 ">
                  Wie kann man als Unternehmen eine Vision entwickeln? Wie findet man den eigenen Core Purpose heraus und wie erschafft man so eine Identität? Hier gibt's die Antwort:        
              </div>

              <div className="row mt-5">
                <button type="button" className="btn boton_card rounded-pill w-50">
                  <div className="font_card_boton ms-1 me-1">Erfahre mehr...</div>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>

    <div className="col-2 ">

    </div>
  </div>



</>
  );}
