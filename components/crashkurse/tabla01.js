import { servidor_url } from "../../config";


export default function Tabla01({
  CRASHKURS_title,
  CRASHKURS,
  numero_tabla,
  items_tabla,
}) {
  //TODO: refactorizar las filas

  return (
    <>
      <div className="row d-flex  justify-content-center mb-5">
        {items_tabla != undefined &&
          items_tabla.length > 0 &&
          items_tabla.map((unItem, index) => {
            
            return (
              <>
              <div className="d-none ms-4 d-md-block pb-5 ">
               {fila_dispositivo_ancho( index, unItem.id_tabla, unItem.titulo, unItem.image, unItem.texto    )}
              </div>

              <div className="d-md-none">
               

               {fila_dispositivo_estrecho( index, unItem.id_tabla, unItem.titulo, unItem.image, unItem.texto    )}
              </div>


              </>
            );
          })}
      </div>
    </>
  );
}




const fila_dispositivo_ancho = (index, id_tabla, titulo, img, texto) => {
  let alineado = index % 2 == 0 ? "item-derecha" : "item-izquierda";

  return (
    <>
      
        {index % 2 == 0 ? (
          <>
          <div className=" m-5 w-75 position-celda-imagen-left ">
            <div className="contenedor_tabla  ">
              <div className="mask_right pe-4  d-flex   justify-content-end">
               <img className="image-tabla  sombra_right" src={`${servidor_url}/img/${img}`} alt="" />
              </div>
              <div className="tabla-titulo text-start   justificar">
                {titulo}
              </div>

              {texto.map((unaLinea, index)=>(
                                              <>
                                               <div className="text-start  fuente-texto-tabla   ">{unaLinea}</div>
                                                {unaLinea==="<br>"?"<br/>":""}
                                              </>
                         )
              )}

            </div>
            </div>
          </>
        ) : (
          <>
          <div className=" m-5 w-75 position-celda-imagen-right pb-5 ">
            <div className="contenedor_tabla ">
              <div className="mask_left  d-flex   justify-content-start">
               <img className="image-tabla sombra_left" src={`${servidor_url}/img/${img}`} alt="" />

              </div>
              <div className="tabla-titulo  text-end  justificar">
                {titulo}
              </div>
              
              
                 {texto.map((unaLinea, index)=>(
                                              <>
                                                <div className="text-end fuente-texto-tabla  ">{unaLinea}</div>
                                                {/* <div className="text-end ">{unaLinea}</div> */}
                                                {unaLinea==="<br>"?"<br/>":""}
                                              </>
                         )
                  )}
              
          
            
             
            </div>
            </div>
          </>
        )}
      
    </>
  );
};



const fila_dispositivo_estrecho = (index, id_tabla, titulo, img, texto) => {
  let alineado = index % 2 == 0 ? "item-derecha" : "item-izquierda";

  return (
   
      
       
          <>
          <div className=" mt-5 w-100  ">
            {/* <div className="contenedor_tabla "> */}

              <div className="ps-4 tabla-titulo-estrecho text-start   ">
                {titulo}
              </div>

              <div className=" ps-4 pe-4 pb-3  d-flex   justify-content-center">
               <img className="image-tabla-estrecho  sombra_right" src={`${servidor_url}/img/${img}`} alt="" />
              </div>
            
              <div className="mt-1 ps-4 pe-4">
              {texto.map((unaLinea, index)=>(
                                              <>
                                               <div className="text-start ">{unaLinea}</div>
                                                {unaLinea==="<br>"?"<br/>":""}
                                              </>
                         )
              )}
             </div>   
            </div>
            {/* </div> */}
          </>
       
        
      
    
  );
};