import { servidor_url } from "../../config";

const show_imagen = (img, index) => {


  

  let alineado = index % 2 == 0 ? "item-derecha" : "item-izquierda";

  return (
    <div  key={`i${index}`} className={`item  ${alineado}`}>
      <img className="image-tabla" src={`${servidor_url}/img/${img}`} alt="" />
    </div>
  );
};

const show_texto = (titulo, texto, index) => {

  let alineado = index % 2 != 0 ? "item-derecha" : "item-izquierda";

  return (
    <div key={`t${index}`} className={`item  item-texto ${alineado}  `}>
      <div className="item-texto-titulo text-center  justificar">{titulo}</div>
      {texto != undefined &&
        texto.length > 0 &&
        texto.map((untexto, index) =>
         
           <div className="justificar text-center" key={index}>{untexto}</div>
        )}
    </div>
  );
};

const fila = (index, id_tabla, titulo, img, texto) => {
  
  let alineado = index % 2 == 0 ? "item-derecha" : "item-izquierda";

  return (
    <>
      {index % 2 == 0 ? (
        <>
          {show_imagen( img, index )}
           {show_texto( titulo, texto, index )} 
        </>
      ) : (
        <>
           {show_texto( titulo, texto, index )} 
          {show_imagen( img, index )}
        </>
      )}
    </>
  );
};

export default function Tabla01({
  CRASHKURS_title,
  CRASHKURS,
  numero_tabla,
  items_tabla,
}) {
  //TODO: refactorizar las filas

  return (
    <>
      {items_tabla != undefined && items_tabla.length > 0 && (
        <div className="row mb-5 justify-content-center  ">
          <div className="tabla ">
            {items_tabla.map((unItem, index) => {

              
              return (
                <>
                  {fila( index, unItem.id_tabla, unItem.titulo, unItem.image, unItem.texto)}
                </>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
