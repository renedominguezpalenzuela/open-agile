// import styles from "../styles/Home.module.css";

//----------------------------------------------------------------------------------------------------------
//            Area de Contenido: Imagen de Empresas
//----------------------------------------------------------------------------------------------------------

const datos = [
  {
    id: 0,
    link: "https://www.verbraucher-dienst.de/index.php/impressum",
    img: "/img/sponsors/logo-verbraucherdienst.png",
  },
  {
    id: 1,
    link: "https://www.sparkasse.de/",
    img: "/img/sponsors/logo-sparkasse.png",
  },
  {
    id: 2,
    link: "https://www.nordlb.de/",
    img: "/img/sponsors/logo-nordlb.png",
  },
  {
    id: 3,
    link: "https://www.s-markt-mehrwert.de/",
    img: "/img/sponsors/logo-markt.png",
  },
  {
    id: 4,
    link: "https://www.sparkasse-bremen.de/de/home.html",
    img: "/img/sponsors/logo-bremen.png",
  },
  {
    id: 5,
    link: "https://www.soprasteria.com/",
    img: "/img/sponsors/logo-soprasteria.png",
  },
];

export default function Content03Carrousel() {
  return (
    <>
      <div id="empresas" className="row color_fondo content03Carrousel pb-3 pt-3">

        <div className="row justify-content-center font_title_seccion    pt-5 ">
          Diese und viele weitere Unternehmen
        </div>

        <div className="row justify-content-center font_card_texto mt-4 ">
          VERTRAUEN OPEN AGILE
        </div>

        <div id="demo" className="carousel slide  " data-bs-ride="carousel">

          
         
               <div className="carousel-indicators">
              <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
              <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
              <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
              <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
              <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
              <button type="button" data-bs-target="#demo" data-bs-slide-to="5"></button>
              
            </div>

      
             <div className="carousel-inner altoCarrousel3 d-flex align-items-center">
            {/* <div className=" row d-flex align-item-center justify-content-center h-100  "> */}
                
                  {datos.map((unDato, index) => (
                    <div key={index} className={`${index === 0 ? "active" : ""} carousel-item `}>
                  
                      
                        <a href={unDato.link} aria-pressed="true" className="">
                          <img className="img-fluid  grayscale " src={unDato.img} />
                        </a>
                     
                    </div>
                  ))}
                
            </div>


            
        </div> 


      </div>
    </>
  );
}
