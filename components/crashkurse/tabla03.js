import Card04 from '../../components/Card04'

export default function Tabla03({
  crashkurs_date_title,
  crashkurs_date,
  titulo,
  titulo2a,
  precio,

  nombre_curso,
}) {
  return (
    <>
      {/* Titulo */}

      {crashkurs_date.length > 0 && (
        <>
          <div className="row mt-2 mb-4   " id="dates_section">
            <div className="titulo1-tabla3-01 text-center ">
              {titulo2a === 'MITBESTIMMUNG IN DER AGILEN ARBEITSWELT' ? (
                <>CRASHKURS {titulo2a}</>
              ) : (
                <span>WERDE JETZT {titulo2a}</span>
              )}
            </div>
            <div className="titulo1-tabla3-02 text-center ">
              {titulo2a === 'MITBESTIMMUNG IN DER AGILEN ARBEITSWELT' ? (
                <>MELDE DICH ZUM KURS AN</>
              ) : (
                <>UND MELDE DICH ZUM KURS AN</>
              )}
            </div>
          </div>

          {/* Cards */}
          <div className="row color_background text-center d-flex  justify-content-center ">
            {crashkurs_date.map((unCard, index) => (
              <div
                key={index}
                className={`  ${clases_ancho_columna_tarjeta(
                  crashkurs_date,
                )}  ms-3 me-3 `}
              >
                <Card04
                  key={unCard.id}
                  datos={unCard}
                  precio={precio}
                  nombre_curso={nombre_curso}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </>
  )
}

const clases_ancho_columna_tarjeta = (crashkurs_date) => {
  return crashkurs_date.length <= 1 ? 'col-lg-10' : 'col-lg-2 col-md-5'
}
