export default function Tabla02({
 
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
 

      {/* ---------------- Tabla 02  debajo de las de las imagenes----------------------------- */}
      <div className="row mt-5 pb-5 color_background tabla2_path  ">
      
        <div className="col  ms-5 mt-5  pb-5">
          <div className="item-texto-titulo2 text-center ">INHALTE</div>
           
                {texto_INHALTE.map((untexto, index) => (
                  <div  key={index+numero_tabla*4}  >
                    
                    <div className="mt-3 text-center  texto03" >
                       {untexto.nombre}
                    </div>
                     

                    
                    
                      {untexto.datos.map((undato, index2) => (
                        <div key={index2+numero_tabla*5} className="justificar texto03 ">
                           {undato}
                         
                        </div>
                      ))}
                    
                  </div>
                ))}
              
          </div>
       

        <div className="col mt-5  pb-5 ">
        <div className="item-texto-titulo2 text-center ">LEISTUNGEN</div>
            <ul>
              {texto_LEISTUNGEN.map((untexto, index) => (
                  <div key={index+numero_tabla*6} className="justificar item-texto3 texto03 ">
                     {untexto}
                  
                  </div>
              ))}
            </ul>
        </div>

  

        <div className="col  me-5 mt-5 pb-5 ">
        <div className="item-texto-titulo2 text-center ">KOSTEN</div>
        <div className="item-texto3  texto03 text-center justificar ">
          
         {kosten}
         
          
          </div>
        </div>

      </div>
      </> 
  );
}
