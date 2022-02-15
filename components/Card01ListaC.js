import Card01 from "./Card01";
import React from "react";

export default function Card01Lista({
  lista_cards,
  titulo_magenta,
  total_card_en_row,
}) {
  let formato_row = " col-md-4 d-flex  justify-content-center ";

  if (total_card_en_row === 3) {
    formato_row = " col-md-4 d-flex  justify-content-center";
  }

  if (total_card_en_row === 2) {
    formato_row = " col-md-5 d-flex w-75 ";
  }

  return (
    <>
      <div className="row mt-5 pt-3 g-4 d-flex justify-content-center ms-4 me-4 ms-md-5 me-md-5 pe-md-5 ps-md-5">
        {lista_cards.data.map((unCard, index) => {
          return (
            // <>
            <React.Fragment key={index}>
              <div className={formato_row}>
                {titulo_magenta != undefined && titulo_magenta && (
                  <Card01
                    key={index}
                    id={unCard.id}
                    imagen={unCard.attributes.card_image.data.attributes.url}
                    titulo2={unCard.titulo2}
                    // texto={unCard.text}
                    link={unCard.link}
                  />
                )}

                {(titulo_magenta === undefined || !titulo_magenta) && (
                  <Card01
                    key={index}
                    id={unCard.id}
                    imagen={unCard.attributes.card_image.data.attributes.url}
                    titulo={unCard.attributes.card_title}
                    titulo2={unCard.attributes.card_subtitle}
                    // texto={unCard.text}
                    link={`crashkurse/beschreibung/${unCard.id}`}
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
