
//------------------------------------------------------------------------------------------------
//     Unser BLOG
//------------------------------------------------------------------------------------------------
//card con imagen a la derecha y numero grande encima a la izquierda y raya horizontal

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Card03Text({ id, titulo, subtitulo, texto, link}) {
  return (
<>


  <div className="row font_card03_id ">{id}.</div>
  <div className="row font_card03_title ">{titulo}</div>
  <div className="row font_card03_subtitle ">{subtitulo}</div>

  <div className="row mt-3">
    <div className="col-1">
      <div className="vertical-line"></div>
    </div>
    <div className="col">
      <div className="row">
      {/* {texto} */}
      </div>

      <div className="row mt-4  ">
        <div className="col-2 d-flex  flex-row-reverse     ">
          <FontAwesomeIcon icon="long-arrow-alt-right"  className="iconos2" />
        </div>
        <div className="col d-flex align-items-center    ">

         <a href={`/${link}/${id}`} >
          <button type="button" className="btn  ps-5 pe-5  h-100 btn-card font-btn-card rounded-pill  ">Jetzt lesen...</button>
        </a>
          {/* <a href={`/${link}`}>jetzt lesen…</a> */}
        </div>

      </div>

    </div>
  </div>

</>
  );
}
