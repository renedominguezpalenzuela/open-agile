export default function Tabla01({
  imagen01,
  texto_BESCHREIBUNG,
  imagen02,
  texto_ZIELGRUPPE,
  imagen03,
  texto_VORTEILE,
  texto_INHALTE,
  texto_LEISTUNGEN,
  kosten,
  CRASHKURS_title,
  CRASHKURS,
  numero_tabla,

  texto_INHALTE,
  imagen04,

  texto_LEISTUNGEN,
  imagen05,

  texto_KOSTEN,
  imagen06

}) {
  //TODO: refactorizar las filas
  return (
    <>
      <div className="row mb-5 justify-content-center  ">
        <div className="tabla ">
          {/* --------------------  Fila 1   -------------------------- */}
          <div className="item item-1 ">
            <img className="image-tabla " src={imagen01} alt="" />
          </div>

          <div className="item item-2  item-texto  justificar  ">
            <div className="item-texto-titulo text-center ">BESCHREIBUNG</div>
            {texto_BESCHREIBUNG}
          </div>

          {/* --------------------- Fila 2 -------------------  */}
          {texto_ZIELGRUPPE.length > 0 && (
            <div className="item item-3  item-texto justificar">
              <div className="item-texto-titulo text-center ">ZIELGRUPPE</div>

              {texto_ZIELGRUPPE.map((untexto, index) => (
                <div key={index + numero_tabla * 1}>{untexto}</div>
              ))}
            </div>
          )}

          {texto_ZIELGRUPPE.length > 0 && (
            <div className="item item-4    ">
              <img className="image-tabla" src={imagen02} alt="" />
            </div>
          )}

          {/* --------------------- Fila 3 si existe fila 2-------------------  */}

          {texto_VORTEILE.length > 0 && (
            <>
              <div className="item item-5  ">
                <img className="image-tabla " src={imagen03} alt="" />
              </div>

              <div className="item item-6  item-texto justificar">
                <div className="item-texto-titulo text-center ">VORTEILE</div>

                {/* <ul> */}
                {texto_VORTEILE.map((untexto, index) => (
                  <div key={index + numero_tabla * 2}>
                    {untexto}
                    {/* <li>{untexto}</li> */}
                  </div>
                ))}
                {/* </ul> */}
              </div>
            </>
          )}

          {/* --------------------- Fila 3 si NO existe fila 2-------------------  */}
          {texto_VORTEILE.length <= 0 && (
            <>
              <div className="item item-3  item-texto justificar">
                <div className="item-texto-titulo text-center ">VORTEILE</div>

                {/* <ul> */}
                {texto_VORTEILE.map((untexto, index) => (
                  <div key={index + numero_tabla * 3}>
                    {/* <li>{untexto}</li> */}
                    {untexto}
                  </div>
                ))}
                {/* </ul> */}
              </div>

              <div className="item item-4 ">
                <img className="image-tabla " src={imagen03} alt="" />
              </div>
            </>
          )}



        {/* --------------------- Fila 4 ------------------  */}
          {texto_INHALTE.length > 0 && (
            <>
              <div className="item item-5  ">
                <img className="image-tabla " src={imagen04} alt="" />
              </div>

              <div className="item item-6  item-texto justificar">
                <div className="item-texto-titulo text-center ">INHALTE</div>

                {/* <ul> */}
                {texto_INHALTE.map((untexto, index) => (
                  <div key={index + numero_tabla * 2}>
                    {untexto}
                    {/* <li>{untexto}</li> */}
                  </div>
                ))}
                {/* </ul> */}
              </div>
            </>
          )}



        </div>
      </div>
    </>
  );
}
