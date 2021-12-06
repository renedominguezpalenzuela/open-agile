export default function TextoSimple({
  texto,
  //para los que no estan en la raiz
}) {
  return (
    <>
      <div className="row  text-center  ">
        {texto != undefined && texto != "" && (
          <h3 className="font_small_letter  "> {texto}</h3>
        )}
      </div>
    </>
  );
}
