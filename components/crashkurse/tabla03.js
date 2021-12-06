import Card04 from "../../components/Card04";

export default function Tabla03({
 
crashkurs_date_title,
crashkurs_date,
titulo,
titulo2a
}) {

//  console.log("aaa"+titulo2a);



  return (
<>
 

  {/* Titulo */}
  <div className="row mt-2 mb-4   ">
    <div className="titulo1-tabla3-01 text-center ">WERDE JETZT {titulo2a}</div>
    <div className="titulo1-tabla3-02 text-center ">UND MELDE DICH ZUM KURS AN</div>
  </div>

  {/* Cards */}
  <div className="row color_background text-center ">

   {
      crashkurs_date.map ( (unCard, index) => 
      // fecha1={unCard.date1} fecha2={unCard.date2} dias={unCard}
       <>
        <div key={index} className="col">
         <Card04 key={unCard.id} datos={unCard} />
        </div>
       </> 
       
      )
   }
   
  </div>


</> 
  );
}
