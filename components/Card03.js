import Card03Img from "./Card03Img";
import Card03Text from "./Card03Text";



function placeContenido(id, titulo, subtitulo, texto, imagen, link){

 
 

  if (id % 2 == 0 ){
     return (
                <>
                  <div className="col-5 me-5">
                    <Card03Img  imagen={imagen} texto_alt={titulo} /> 
                                      </div>

                

                  <div className="col-6 ms-6">
                    <Card03Text id={id} titulo={titulo} subtitulo={subtitulo} texto={texto}  link={link}/> 
                  </div>
                </>
     );


  } else {

    return (
               <>

              
                  <div className="col-6">
                     <Card03Text id={id} titulo={titulo} subtitulo={subtitulo} texto={texto}  link={link} /> 
                      
                  </div>
               

                  <div className="col-6">
                    <Card03Img  imagen={imagen} texto_alt={titulo} /> 
                  </div>

               </>
     );

  }

 
  return 
}


export default function Card03({ id, titulo, subtitulo, texto, imagen , link}) {
  return (
          <>
             <div className="row justify-content-center m-4 p-5">


                 {placeContenido(id, titulo, subtitulo, texto, imagen, link)}
            
            </div>
          </>
  );
}
