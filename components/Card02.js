import React from "react";
import ReactPlayer from "react-player/lazy";

export default function Card02({ titulo, texto, video, date }) {
  const dt = new Date(date);
  return (
    <>
      <div className="row g-0 mt-5 h-100  ">
        <div className="col-6  d-flex align-items-center ">
          <div className="shadow   texto_video_fondo me-5 content-card-vlog">
            <div className=" font_card_title_video pt-4 d-flex justify-content-center">
              {titulo} 
            </div>
            <div className=" ms-2 me-2 pb-3 contenedor_texto_overflow ">
              <div className="data_vlog_desktop d-inline-block text-end mt-1"></div>
              <div className="font_carrusel_video ">{texto}</div>
              <div className="data_vlog_desktop d-inline-block ms-2 mt-2">
                <p>
                  GEPOSTET AM {dt.getDate()}.{dt.getMonth() + 1}.
                  {dt.getFullYear()}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6  ">
          {video != undefined && video != "" && (
           
             <div className="   container_video   d-flex align-items-center">
               <ReactPlayer light={true} url={video}  />
             </div>
          )}
        </div>
      </div>
    </>
  );
}
