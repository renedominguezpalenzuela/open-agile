import styles from "../styles/Home.module.css";

export default function Card01({
  id,
  titulo,
  texto,
  imagen,
  texto_boton,
  texto_alt,
}) {
  return (
    <>
      <div className="col">
        <div className="card card-rounded my_card">
          {/* <!-- Image --> */}
          <img
            className="card-img-top corte_cards img-rounded "
            src={`img/${imagen}`}
            alt={"${texto_alt}"}
          />
          {/* <!-- Text Content --> */}
          <div className="card-body text-center">
            <p className="card-text font_card_title m-1">{titulo}</p>
            <p className="card-text font_card_texto m-3">{texto}</p>
          </div>

          <div className="position-absolute top-100 start-50 translate-middle">
            <button type="button" className="btn boton_card rounded-pill ">
              <div className="font_card_boton ms-1 me-1">Erfahre mehr...</div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
