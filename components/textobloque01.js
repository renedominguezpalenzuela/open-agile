export default function TextoBloque01({
  titulo_main,
  titulo,
  titulo2,
  texto_parrafo_array,
  texto_plequitas_array,
  telefono,
  correo,
  foto
}) {
  return (
<>

   {titulo_main!=undefined && titulo_main!="" &&
  <div id="course" className="row  text-center mt-5 mb-5  ">
        <h3 className="font_titulo_seccion "> {titulo_main}</h3>
  </div>
}



 {titulo!=undefined && titulo!="" &&
  <div className="row  text-center mt-5 mb-4 ">
    <h3 className="font_second_line1  "> {titulo}</h3>
  </div>
 }

  <div className="row  text-center mb-4 d-flex  justify-content-center ">
{foto!=undefined && foto!="" &&
    <img className="img-fluid  foto-team"  src={`img/${foto}`} />   
 }


 </div>
    
    
  {texto_parrafo_array!=undefined && texto_parrafo_array!="" &&
  <div className="row  mt-3  ">
    <div className="col-1">
    </div>

    <div className="col font_small_letter ms-3 me-3 justificar">
    {texto_parrafo_array.map ((unaLinea, index)=> 
      <p  key={index}>
         {unaLinea}
      </p>                 
    )}


        </div>

      <div className="col-1">
      </div>
    </div>
   }




 {titulo2!=undefined && titulo2!="" &&
  <div className="row  text-center mt-5 mb-4 ">
    <h3 className="font_titulo_detalles   "> {titulo2}</h3>
  </div>
 }

      
  {texto_plequitas_array!=undefined && texto_plequitas_array!="" &&
  <div className="row    ">
    <div className="col-1">
    </div>

    <div className="col font_small_letter ms-3 me-3 justificar">
    <ul>
      {texto_plequitas_array.map ((unaLinea, index) => 
        <li key={index}>
          {unaLinea}
        </li>                 
      )}
    </ul>


    </div>

      <div className="col-1">
      </div>
    </div>
   }


{/* correo y relfono */}
<div className="row  text-center mt-5 mb-4 ">
{telefono!=undefined && telefono!="" &&
    <h3 className="font_small_letter  "> {telefono}</h3>     
 }


{correo!=undefined && correo!="" &&
    <h3 className="font_small_letter  "> {correo}</h3>     
} 




 </div>






  </>
  );
}
