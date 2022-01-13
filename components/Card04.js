import React from "react";
import ModalFormCursos from "./ModalFormCursos";

export default function Card04({ datos, precio, nombre_curso }) {
  // const classes = useStyles();

  const { id, quartal, date_list,form_title, day, link } = datos;

  let date1 = "";
  let date2 = "";

  if (date_list.length === 1) {
    date1 = date_list[0].date1;
    date2 = date_list[0].date2;
  }


 let titulo_formulario ="";

  if (form_title!='') {
    titulo_formulario=form_title;


  } else {
    titulo_formulario = `${quartal}. Quartal`;
  }

 

  



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
            {date_list.map((UnaParejaFechas, index) => (
              <React.Fragment key={index}>
                <div className="row  fechas-card-crashkurse d-flex justify-content-center pt-2 m-2">
                  {UnaParejaFechas.date1}
                </div>
                <div className="row fechas-card-crashkurse d-flex justify-content-center pb-2 m-2">
                  {UnaParejaFechas.date2}
                </div>
              </React.Fragment>
            ))}
            {/* <a href="/contact" className="font_card_fechas "> */}

            {/* </a> */}
          </div>
          <button
            type="button"
            className="card-footer card-footer-crashkurse"
            data-bs-toggle="modal"
            data-bs-target={`#contactForm${id}`}>
            JETZT ANMELDEN...
          </button>
        </div>
      </div>

      <ModalFormCursos
        id={id}
        quartal={quartal}
        titulo={titulo_formulario}
        frase="Jetzt anmelden!"
        date1={date1}
        date2={date2}
        day={day}
        link={link}
        precio={precio}
        nombre_curso={nombre_curso}
      />
    </>
  );
}

const eliminar_anno = (fecha) => {
  return fecha.substring(0, 6);
};
