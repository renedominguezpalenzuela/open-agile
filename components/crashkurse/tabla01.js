import { servidor_url } from "../../config";

const show_imagen = (img, index) => {
  let alineado = index % 2 == 0 ? "item-derecha" : "item-izquierda";

  return (
    <div key={`i${index}`} className={`item  ${alineado}`}>
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
        texto.map((untexto, index) => (
          <div className="justificar text-center" key={index}>
            {untexto}
          </div>
        ))}
    </div>
  );
};

const filaOLD = (index, id_tabla, titulo, img, texto) => {
  let alineado = index % 2 == 0 ? "item-derecha" : "item-izquierda";

  return (
    <>
      {index % 2 == 0 ? (
        <>
          {show_imagen(img, index)}
          {show_texto(titulo, texto, index)}
        </>
      ) : (
        <>
          {show_texto(titulo, texto, index)}
          {show_imagen(img, index)}
        </>
      )}
    </>
  );
};


const fila = (index, id_tabla, titulo, img, texto) => {
  let alineado = index % 2 == 0 ? "item-derecha" : "item-izquierda";

  return (
    <>
     <div className="row m-5 w-75 ">
    
      {index % 2 == 0 ? (
        <>
        
         <div class="contenedor_tabla">
          <div class="mask_right pe-3  d-flex   justify-content-end">
             <img className="image-tabla  sombra_right" src={`${servidor_url}/img/${img}`} alt="" />
          </div>
            <div className="item-texto-titulo text-center  justificar">{titulo}</div>
          <p>{texto}</p>
        </div>
        </>
      ) : (
        <>
        <div class="contenedor_tabla">
        
          <div class="mask_left ps-3 d-flex   justify-content-start">
             <img className="image-tabla sombra_left" src={`${servidor_url}/img/${img}`} alt="" />
          </div>
            <div className="item-texto-titulo text-center  justificar">{titulo}</div>
          <p>{texto}</p>
        </div>

        </>
      )}
      </div>
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
    <div className="row d-flex   justify-content-center">
      {items_tabla != undefined && items_tabla.length > 0 && (
      
            items_tabla.map((unItem, index) => {
              return (
                <>
                   {fila( index,  unItem.id_tabla,  unItem.titulo,   unItem.image,    unItem.texto  )}
                </>
              );
            })
          
      )}
      </div>
    </>
  );
}
