import Card04 from "../../components/Card04";

export default function Tabla03({
 
crashkurs_date_title,
crashkurs_date,
titulo
}) {



  return (
<>
 
{/* color_background */}

       <div  className="row mt-2 mb-4   ">
       
        <div className="titulo1-tabla3-01 text-center ">CRASHKURS TERMINE ZUM</div>
           <div className="titulo1-tabla3-02 text-center ">{titulo}</div>
  
     
       </div> 

         <div  className="row d-flex align-items-center justify-content-center color_background text-center ">
           <Card04 texto="dd.mm.yyyy"/>
         </div>
      </> 
  );
}
