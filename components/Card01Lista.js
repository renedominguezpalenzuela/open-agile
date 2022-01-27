import Card01 from "./Card01";
import React from "react";

export default function Card01Lista({
  lista_cards,
  titulo_magenta,
  total_card_en_row,
}) {
  // let formato_row = " row row-cols-md-4 d-flex  justify-content-center ";

  // if(total_card_en_row===3) {
  //   formato_row = " row row-cols-md-3 d-flex  justify-content-center border border-dark";
  // }

  // if(total_card_en_row===2) {
  //   formato_row = " row row-cols-md-2 d-flex w-75 ";
  // }

  let formato_row = " col-md-4 d-flex  justify-content-center ";

  if (total_card_en_row === 3) {
    formato_row = " col-md-4 d-flex  justify-content-center";
  }

  if (total_card_en_row === 2) {
    formato_row = " col-md-5 d-flex w-75 ";
  }

  // let columnas="row-cols-4";
  // if (total_card_en_row!=undefined) {

  //   columnas = "card-deck row-cols-"+total_card_en_row;

  // }

  //   formato_row = formato_row  + columnas

  return (
    <>
      <div className="row mt-5 pt-3 g-4 d-flex justify-content-center ms-4 me-4 ms-md-5 me-md-5 pe-md-5 ps-md-5">
        {lista_cards.map((unCard, index) => {
          return (
            // <>
            <React.Fragment key={index}>
              <div className={formato_row}>
                {titulo_magenta != undefined && titulo_magenta && (
                  <Card01
                    key={index}
                    id={unCard.id}
                    imagen={unCard.image}
                    titulo2={unCard.title}
                    texto={unCard.text}
                    link={unCard.link}
                  />
                )}

                {(titulo_magenta === undefined || !titulo_magenta) && (
                  <Card01
                    key={index}
                    id={unCard.id}
                    imagen={unCard.image}
                    titulo={unCard.title}
                    titulo2={unCard.title2}
                    texto={unCard.text}
                    link={unCard.link}
                  />
                )}
              </div>
            </React.Fragment>

            // </>
          );
        })}
      </div>
    </>
  );
}
