import Card01ListaC from "./Card01ListaC";
import Content02Texto from "./Content02Texto";
import Content02Final from "./Content02Final";

//----------------------------------------------------------------------------------------------------------
//            Area de Contenido: Cards: CrashKURSE
//----------------------------------------------------------------------------------------------------------
//Contiene: Cards, y Texto en tres columnas
//TODO: pasar como parametros los datos
//Responsivo OK

export default function Content02Cursos({ cursos, main_page }) {
  return (
    <>
      <div
        id="course"
        className={`${
          main_page
            ? "offset-video row text-center mb-2 crash-container"
            : "row text-center mb-3 "
        } offset-lateral-menu`}>
        <h3 className="font_title_seccion_sombra"> CRASHKURSE</h3>
        <h5 className="font_second_line2">
          jetzt fit machen für die Arbeitswelt von morgen
        </h5>
      </div>

      <div
        className={`${
          main_page
            ? "div_content02a   pb-5 pt-3 g-0"
            : "div_content02c   pb-5 pt-3 g-0"
        }`}>
        <Card01ListaC
          lista_cards={cursos}
          total_card_en_row={cursos.data.length}
          main_page={main_page}
        />
      </div>
    </>
  );
}
