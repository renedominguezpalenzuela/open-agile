

//----------------------------------------------------------------------------------------------------------
//            Area superior principal: 
//----------------------------------------------------------------------------------------------------------
// Contiene: Menu superior, Texto principal, Iconos de la izquierda, Boton de menu flotante
//TODO: pasar como parametros el texto
//TODO: Arreglar boton menu flotante, que no funciona como sticky

export default function Content01Text() {
  return (
<>
     
  

  
         {/* <!-- Contenido Principal --> */}
          {/* Contenido en pantalla ancha */}
          {/*d-none d-lg-block*/}
          <div className="row  ms-3 mt-3 ">
            <h1 id="title">
              <div className="font_title ">
                <p>FOR BETTER WORK</p>
                {/* <p>we are ready</p> */}
              </div>
              <span className="font_title font_title_purple">
                  now.
              </span>
            </h1>
            <p className="font_facit_text">
                TRAINING PEOPLE & TRANSFORMING CULTURES
            </p>
          </div>


           {/* Contenido en pantalla estrecha */}
          {/* <div className="row ms-3 mt-3  d-lg-none">
            <h1 id="title">
               <div className="font_facit_title_small"> 
                <p>FOR BETTER WORK</p>
            
               </div> 
               <span className="font_facit_title_small font_facit_title_purple"> 
                  now.
               </span> 
            </h1>
            <p className="font_facit_title_small  "> 
                TRAINING PEOPLE & TRANSFORMING CULTURES
             </p>
          </div> */}

 
</>
  );
}
