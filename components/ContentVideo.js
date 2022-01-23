import { servidor_url } from "../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faVolumeUp } from "@fortawesome/free-solid-svg-icons"; //icono normal de volumen
import { faVolumeMute } from "@fortawesome/free-solid-svg-icons"; //icono normal de volumen

import { useState, useRef  } from "react";

export default function ContentVideo() {
  const [volumen, setvolumen] = useState(false);
  const botonVolumen = useRef();

  const cambiar_volument = () => {
    setvolumen(!volumen);
    botonVolumen.current.muted = !botonVolumen.current.muted;
  };

  

  return (
    <>
      <div className="  text-center contenedor_video">
        <div className="ratio ratio-16x9 ">
          <video loop={true} autoPlay={true} ref={botonVolumen} muted >
            <source src={`/video/Imagefilm_Open_Agile_Low.mp4`} />
 
          </video>

            <div className="icono_volumen" onClick={cambiar_volument}>

          
              {volumen ? (
                <FontAwesomeIcon
                  id="boton_volumen"
                   width="55"
                  icon={faVolumeUp}
                  className="volumen_icon_size"
                  color="white"
                />
              ) : (
                <FontAwesomeIcon
                  id="boton_volumen"
                   width="50"
                  icon={faVolumeMute}
                  className="volumen_icon_size"
                  color="white"
                />
              )}
            </div>
        </div>
      </div>
    </>
  );
}
