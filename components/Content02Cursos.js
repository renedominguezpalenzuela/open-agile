import dynamic from 'next/dynamic';

const Card01ListaC = dynamic(() => import('./Card01ListaC'));
const Content02Texto = dynamic(() => import('./Content02Texto'));
const Content02Final = dynamic(() => import('./Content02Final'));

import { useRouter } from 'next/router'

export default function Content02Cursos({ cursos, main_page }) {
  const router = useRouter()
  return (
    <>
      <div
        id="crashkurse"
        className={`${
          main_page
            ? "offset-video row text-center mb-2 crash-container"
            : "row text-center mb-3 "
        } offset-lateral-menu`}>
        {router.pathname !== '/' ? <h1 className="font_title_seccion_sombra"> CRASHKURSE</h1> : <h2 className="font_title_seccion_sombra"> CRASHKURSE</h2>}
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
