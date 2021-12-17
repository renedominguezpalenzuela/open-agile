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
               {fila( index, unItem.id_tabla, unItem.titulo, unItem.image, unItem.texto    )}
              </>
            );
          })}
      </div>
    </>
  );
}




const fila = (index, id_tabla, titulo, img, texto) => {
  let alineado = index % 2 == 0 ? "item-derecha" : "item-izquierda";

  return (
    <>
      
        {index % 2 == 0 ? (
          <>
          <div className=" m-5 w-75 position-celda-imagen-left ">
            <div className="contenedor_tabla ">
              <div className="mask_right me-5  d-flex   justify-content-end">
               <img className="image-tabla  sombra_right" src={`${servidor_url}/img/${img}`} alt="" />
              </div>
              <div className="tabla-titulo text-start   justificar">
                {titulo}
              </div>
              <p className="text-start">{texto}</p>
            </div>
            </div>
          </>
        ) : (
          <>
          <div className=" m-5 w-75 position-celda-imagen-right ">
            <div className="contenedor_tabla">
              <div className="mask_left ps-3 d-flex   justify-content-start">
               <img className="image-tabla sombra_left" src={`${servidor_url}/img/${img}`} alt="" />

              </div>
              <div className="tabla-titulo  text-end  justificar">
                {titulo}
              </div>
              <p className="text-end">{texto}</p>
            </div>
            </div>
          </>
        )}
      
    </>
  );
};