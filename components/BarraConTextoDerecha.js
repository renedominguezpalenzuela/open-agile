export default function BarraConTextoDerecha({
  texto,
  titulo,
  //para los que no estan en la raiz
}) {
  return (
    <>
      {((texto != undefined && texto != "")||(titulo != undefined && titulo != ""))  && (
        <div className="barra-con-texto-derecha   ">
          <div className=" barra-texto-derecha-titulo  font-barra-titulo "> {titulo}</div>
          <div className="vertical-line-leinstungen barra-texto-derecha-barra "></div>
          <div className="  barra-texto-derecha-texto   font-barra-texto "> {
          
          texto.map((unTexto, index)=>         
             <p key={index}> {unTexto} </p>
          )
          
          
          }</div>
        </div>
      )}
    </>
  );
}
