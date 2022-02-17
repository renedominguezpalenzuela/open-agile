import Card03 from "./Card03";
import Card01 from "./Card01";
import Card06Team from "./Card06Team";
import React from "react";

export default function Content06Team({ lista_cards }) {
  return (
    <>
      <section>
        <div className="row g-4 pb-5 g-md-5 pb-md-5 pt-md-5 mt-md-5 d-flex flex-md-row flex-column justify-content-center align-content-center">
          {lista_cards.map((unCard, index) => (
            <React.Fragment key={index}>
              {/* Vista movil  */}
              <div className="col-8 col-md-4 d-lg-none justify-content-center d-flex card-lands">
                <Card01
                  id={unCard.id}
                  imagen={unCard.attributes.image?.data?.attributes.url}
                  titulo={unCard.attributes.name}
                  texto={unCard.attributes.resume}
                  link={`/team/${unCard.id}`}
                  texto_boton={unCard.attributes.button_text}
                  correo={unCard.attributes.email}
                  telefono={unCard.attributes.phone}
                  telefono_link={`tel:${unCard.attributes.phone}`}
                />
              </div>{" "}
              {/* Vista normal  */}
              <div className="col-4 d-none d-lg-block  m-4 ">
                <Card06Team
                  id={unCard.id}
                  imagen={unCard.attributes.image?.data?.attributes.url}
                  titulo={unCard.attributes.name}
                  titulo2={unCard.attributes.resume}
                  link={`team/${unCard.id}`}
                  texto_boton={unCard.attributes.button_text}
                  correo={unCard.attributes.email}
                  telefono={unCard.attributes.phone}
                  telefono_link={`tel:${unCard.attributes.phone}`}
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  );
}
