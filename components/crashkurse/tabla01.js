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
  numero_tabla
}

) {



  //TODO: refactorizar las filas
  return (
<>
  <div className="row  justify-content-center  ">

  <div className="tabla ">


        {/* --------------------  Fila 1   -------------------------- */}
        <div className="item item-1 ">
          <img className="image-tabla " src={`img/${imagen01}`} alt="" />
        </div>

        <div className="item item-2  item-texto  justificar  ">
          <div className="item-texto-titulo text-center ">BESCHREIBUNG</div>

              {texto_BESCHREIBUNG}
        </div>



        {/* --------------------- Fila 2 -------------------  */}
        {texto_ZIELGRUPPE.length > 0 &&                 
          <div className="item item-3  item-texto justificar">
            <div className="item-texto-titulo text-center ">ZIELGRUPPE</div>
            {/* <ul> */}
              {texto_ZIELGRUPPE.map((untexto, index) => (
              <div key={index+numero_tabla*1}>
                  {untexto}
              
                  {/* <li>{untexto}</li> */}
              </div>
              ))}
            {/* </ul> */}
        </div>
        }



      {texto_ZIELGRUPPE.length > 0 && 
        <div className="item item-4    ">
            <img className="image-tabla" src={`img/${imagen02}`} alt="" />
        </div>
      }



    {/* --------------------- Fila 3 si existe fila 2-------------------  */}

      {texto_ZIELGRUPPE.length > 0 && <>
          <div className="item item-5  ">
            <img className="image-tabla " src={`img/${imagen03}`} alt="" />
          </div>


          <div className="item item-6  item-texto justificar">
            <div className="item-texto-titulo text-center ">VORTEILE</div>

            {/* <ul> */}
              {texto_VORTEILE.map((untexto, index) => (
              <div key={index+numero_tabla*2}>

              {untexto}
                   {/* <li>{untexto}</li> */}
                </div>
                              ))}
                        {/* </ul> */}
                </div>
      </>
     } 

    {/* --------------------- Fila 3 si NO existe fila 2-------------------  */}
    {texto_ZIELGRUPPE.length<=0  &&   <>
        <div className="item item-3  item-texto justificar">
          <div className="item-texto-titulo text-center ">VORTEILE</div>

                  {/* <ul> */}
                    {texto_VORTEILE.map((untexto, index) => (
                    <div key={index+numero_tabla*3}>
                      {/* <li>{untexto}</li> */}
                             {untexto}
                      </div>
                          ))}
                  {/* </ul> */}
              </div>

             <div className="item item-4 ">
              <img className="image-tabla " src={`img/${imagen03}`} alt="" />
            </div>
      </>
    }




    </div>
  </div>

      {/* ---------------- Tabla 02  debajo de las de las imagenes----------------------------- */}
      <div className="row  justify-content-center  ">
        <div className="tabla2 ">
          <div className="item item-1-tabla2 ">
            <div className="item-texto-titulo2 text-center ">INHALTE</div>

            <div className="item-texto2 ">
              <ul>
                {texto_INHALTE.map((untexto, index) => (
                  <div key={index+numero_tabla*4}>
                    <li>{untexto.nombre}</li>

                    
                    <ul >
                      {untexto.datos.map((undato, index2) => (
                        <div key={index2+numero_tabla*5}>
                           <li>{undato}</li>
                           {undato}
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
            {texto_LEISTUNGEN.map((untexto, index) => (
            <div key={index+numero_tabla*6}>
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
          {CRASHKURS.map((untexto, index) => (
          <div key={index+numero_tabla*7}>
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
