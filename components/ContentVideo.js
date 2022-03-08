
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
      <div className="  text-center contenedor_video ">
        <div className="ratio ratio-16x9 ">
{/* 
        <video autoplay loop autobuffer muted playsinline>
     <source src="video/video-hat.mp4" type="video/mp4">
</video> */}
          {/* <video loop={true} autoPlay={true} ref={botonVolumen} muted > */}

           {/* autobuffer="true" */}
          <video autoPlay loop  muted playsInline ref={botonVolumen} > 
            <source src={`https://js-agileweb-files.s3.us-east-2.amazonaws.com/video/Imagefilm_Open_Agile_Low1.mp4`}  type="video/mp4" />
 
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
