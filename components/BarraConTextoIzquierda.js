export default function BarraConTextoIzquierda({
  texto,
  titulo,
  //para los que no estan en la raiz
}) {


  console.log(texto[0])
  return (
    <>
      {((texto != undefined && texto != "")||(titulo != undefined && titulo != ""))  && (
        <div className="barra-con-texto-izquierda   ">


          
          <div className="  barra-texto-izquierda-texto font-barra-texto"> {
          
          texto.map((unTexto, index)=>
          
             <p key={index}> {unTexto} </p>
          )
          
          
          }</div>
          <div className="vertical-line-leinstungen barra-texto-izquierda-barra "></div>          
          <div className=" barra-texto-izquierda-titulo font-barra-titulo  "> {titulo}</div>

        </div>
      )}
    </>
  );
}
