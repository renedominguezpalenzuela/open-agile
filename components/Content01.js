import MenuSuperior from "./MenuSuperior";
import IconosIzquierda from "./IconosIzquierda";
import MenuFlotanteBoton from "./MenuFlotanteBoton";
import Content01Text from "./Content01Text";

//----------------------------------------------------------------------------------------------------------
//            Area superior principal:
//----------------------------------------------------------------------------------------------------------
// Contiene: Menu superior, Texto principal, Iconos de la izquierda, Boton de menu flotante
//TODO: pasar como parametros el texto
//TODO: Arreglar boton menu flotante, que no funciona como sticky

export default function Content01() {
  return (
    <>
      <div id="row01" className="row  ">
         <MenuSuperior />
      </div>
      
   {/* Solo mostrar si tamano chico */}
      <div id="row01" className="row h-25  d-lg-none  ">
       
      
      </div>


      <div id="row02" className="row  ">
        <div id="col00" className="col-md-1 mt-3">
        
        </div>

        <div id="col01" className="col-md-9 ms-4 pt-5 mt-2 ">
           <Content01Text/>
         {/* <span class="align-middle">middle</span> */}
        </div>

        <div id="col02" className="col-md-1 mt-3 text-center">
          <IconosIzquierda />
        </div>
      </div>
    </>
  );
}
