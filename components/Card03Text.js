import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Card03Text({ id, titulo, subtitulo, texto}) {
  return (
<>


  <div className="row font_card03_id ">{id}.</div>
  <div className="row font_card03_title ">{titulo}</div>
  <div className="row font_card03_subtitle ">{subtitulo}</div>

  <div className="row mt-3">
    <div className="col-1">
      <div class="vertical-line"></div>
    </div>
    <div className="col">
      <div className="row">
      {texto}
      </div>

      <div className="row mt-4  ">
        <div className="col-1 d-flex ">
          <FontAwesomeIcon icon="long-arrow-alt-right" width="32" className="iconos2     " />
        </div>
        <div className="col">
          <a href="#">Hier gibt’s alle Infos…</a>
        </div>

      </div>

    </div>
  </div>

</>
  );
}
