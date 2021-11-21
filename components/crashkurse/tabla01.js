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
  CRASHKURS
}

) {



  //TODO: refactorizar las filas
  return (
<>
      {/*  <img className="fluid-img " src="img/card01.jpg" alt=""/>
       */}

      {/*  <img className="card-img-top corte_cards img-rounded " src={`img/${imagen}`} alt={texto_alt}/> */}

      <div className="row  justify-content-center  ">
    <div className="tabla ">


      {/* --------------------  Fila 1   -------------------------- */}
      <div className="item item-1 item-img ">
        <img className="image " src={`img/${imagen01}`} alt="" />
      </div>


    
      <div className="item item-2  item-texto  justificar ">
        <div className="item-texto-titulo text-center ">BESCHREIBUNG</div>

            {texto_BESCHREIBUNG}
      </div>



      {/* --------------------- Fila 2 -------------------  */}
      {texto_ZIELGRUPPE.length > 0 &&   
             
      <div className="item item-3  item-texto justificar">


        <div className="item-texto-titulo text-center ">ZIELGRUPPE</div>

        <ul>
              {texto_ZIELGRUPPE.map((untexto) => (
          <div>
            <li>{untexto}</li>
          </div>
              ))}
        </ul>
      </div>
          }



  {texto_ZIELGRUPPE.length > 0 && 
      <div className="item item-4 item-img   ">
        <img className="image " src={`img/${imagen02}`} alt="" />
      </div>
}



    {/* --------------------- Fila 3 si existe fila 2-------------------  */}

      {texto_ZIELGRUPPE.length > 0 && <>
      <div className="item item-5 item-img ">
        <img className="image " src={`img/${imagen03}`} alt="" />
      </div>


      <div className="item item-6  item-texto justificar">
        <div className="item-texto-titulo text-center ">VORTEILE</div>

        <ul>
              {texto_VORTEILE.map((untexto) => (
          <div>
            <li>{untexto}</li>
          </div>
              ))}
        </ul>
      </div>
      </>
     } 

    {/* --------------------- Fila 3 si NO existe fila 2-------------------  */}
     {texto_ZIELGRUPPE.length <=0  &&   <>   
    


      <div className="item item-3  item-texto justificar">
        <div className="item-texto-titulo text-center ">VORTEILE</div>

        <ul>
              {texto_VORTEILE.map((untexto) => (
          <div>
            <li>{untexto}</li>
          </div>
              ))}
        </ul>
      </div>

        <div className="item item-4 item-img ">
        <img className="image " src={`img/${imagen03}`} alt="" />
      </div>
      </>
     }




    </div>
  </div>

      {/* ---------------- Tabla 02 ----------------------------- */}
  <div className="row  justify-content-center  ">
    <div className="tabla2 ">
      <div className="item item-1-tabla2 ">
        <div className="item-texto-titulo2 text-center ">INHALTE</div>

        <div className="item-texto2 ">
          <ul>
                {texto_INHALTE.map((untexto) => (
            <div>
              <li>{untexto.nombre}</li>
              <ul>
                      {untexto.datos.map((undato) => (
                <div>
                  <li>{undato}</li>
                </div>
                      ))}
              </ul>
            </div>
                ))}
          </ul>
        </div>
      </div>

      <div className="item item-1-tabla2 ">
        <div className="item-texto-titulo2 text-center ">LEISTUNGEN</div>

        <div className="item-texto2 ">
          <ul>
                {texto_LEISTUNGEN.map((untexto) => (
            <div>
              <li>{untexto}</li>
            </div>
                ))}
          </ul>
        </div>
      </div>

      <div className="item item-1-tabla2 ">
        <div className="item-texto-titulo2 text-center ">KOSTEN</div>

        <div className="item-texto2 ">
          <ul>
            <div>
              <li>{kosten}</li>
            </div>
          </ul>
        </div>
      </div>

      <div className="item item-1-tabla2 ">
        <div className="item-texto-titulo2 text-center ">
              {CRASHKURS_title}
        </div>

        <div className="item-texto2 ">
          <ul>
                {CRASHKURS.map((untexto) => (
            <div>
              <li>{untexto}</li>
            </div>
                ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
</>
  );
}
